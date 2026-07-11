# 🚪 Protocole Cardinal de Déplacement — Zones, Territoires & Groupes WhatsApp

> **Statut** : Spécification structurelle de référence (base). Aucune implémentation ici — uniquement les règles.
> **Version** : **2.0** (étape 48, 2026-07-12) — amendée pour le **pivot territorial** acté par le PE à l'étape 47 (**D76**,
> contrainte réelle : ~100 groupes maximum par communauté WhatsApp). La v1 (« 1 zone = 1 groupe ») est supersédée.
> **Dépendances** : `cartographie/atlas_monde_liaisons.md` (graphe des zones + registre des territoires §2-bis),
> `cardinal_system_db/MCD_Concept/entite_whatsapp_group.md`, `cardinal_system_db/MLD_Logic/table_t_wa_groups.md`,
> `the_seed_engine/whatsapp_commands_list.md`, `the_seed_engine/ai_orchestrator_commands.md`.

---

## 1. Principe Fondateur (double granularité)

Le monde a **deux granularités distinctes** depuis D76 :

| Plan | Granularité | Support | Source de vérité |
|---|---|---|---|
| **Logique (gameplay)** | la **ZONE** (52 zones) | adjacence R3, spawns, boutiques, jauges D12, PvP | `T_AVATARS.current_zone_id` (état L1) |
| **Physique (WhatsApp)** | le **TERRITOIRE** (13 territoires) | groupes WhatsApp réels | `T_WA_GROUPS` / `T_WA_PRESENCE` |

**Un territoire = un groupe WhatsApp.** Se déplacer dans Alfheim, c'est mettre à jour sa zone (état L1) ;
le changement de groupe WhatsApp n'a lieu **que si le déplacement franchit une frontière de territoire**.
Le groupe WhatsApp est une **projection grossière** de la position — jamais la position elle-même.

**Invariant d'exclusivité (R0, reformulé D76)** : à tout instant, un avatar connecté appartient à
**exactement un** groupe de type `location` (= territoire) ou `dungeon_instance`. La zone exacte du joueur
est portée **exclusivement** par `T_AVATARS.current_zone_id` (moteur déterministe L1, seul écrivain).
Les groupes permanents (4 communauté + 9 raciaux) et les groupes `guild_hall` / `private_party` / `system`
ne sont **jamais** quittés automatiquement — ce sont des canaux sociaux, pas des lieux.

> Le registre canonique des 13 territoires (composition en zones, zone d'ancrage, nom de groupe) vit dans
> l'**atlas §2-bis** — source de vérité unique, reflétée par `TERRITORY_ZONES` (`bot/src/services/zone-groups.js`).

---

## 2. Règles de Déplacement

| # | Règle | Détail structurel |
|---|---|---|
| **R0** | Exclusivité de présence | `card(TERRITOIRE ∪ INSTANCE) = 1` par avatar connecté ; la **zone** exacte est portée par `current_zone_id` (L1), jamais déduite de l'appartenance aux groupes |
| **R1** | Synchronisation par retrait | Tout déplacement validé déclenche `sync_player_groups()` : ajout au groupe du **territoire** de la zone cible + retrait de **tous les autres groupes territoire/instance**, dans la même transaction. Déplacement **intra-territorial** : aucun changement de groupe, seule l'écriture L1 (`current_zone_id`) a lieu |
| **R2** | Les permanents sont inviolables | Les 4 groupes communauté (Annonces, Enregistrement, Général, LFG) et les 9 groupes raciaux ne sont jamais quittés lors d'un déplacement (exception fondatrice) |
| **R3** | Adjacence obligatoire (**de zones**) | `!enter_zone` n'est valide que si la zone cible figure dans le graphe (`T_ZONE_LINKS`, D9) depuis la zone actuelle — l'adjacence se juge **zone à zone**, jamais territoire à territoire. Exceptions : `!portal`, `!fast_travel`, `SYS_FORCE_TELEPORT` |
| **R4** | Conditions d'entrée | Vérifiées dans l'ordre : ① zone accessible (`is_accessible`, non `SYS_LOCK_ZONE`) → ② niveau (`recommended_level_min`) → ③ item-clé (`requires_key_item`) → ④ vol (`requires_flight` + MP suffisants) → ⑤ capacité (`max_players_in_zone`, comptée sur l'état L1 par zone, pas sur l'effectif du groupe) → ⑥ coût (`entry_cost_yrd`) |
| **R5** | Temps de trajet | Un déplacement a un coût (MP) et une durée (état `EN_TRANSIT`) ; pendant un transit **inter-territorial** le joueur peut n'être membre d'aucun groupe territoire sauf si la route est elle-même une zone (routes aériennes, rattachées au territoire racial — atlas §2-bis) |
| **R6** | Instances éphémères | `!dungeon_queue` crée un groupe `dungeon_instance` (⚔️ RAID — <Donjon> #n) sur le budget de slots dynamiques ; il compte comme lieu (R0) et est **supprimé** à la fin du raid |
| **R7** | Mort & Remain Light | À la mort : le joueur reste dans son groupe en état `REMAIN_LIGHT` (timer de résurrection, cf. `remain_light_respawn.md`) ; à expiration, transfert automatique vers l'Autel de Résurrection de sa capitale raciale (= écriture L1 + changement de groupe si la capitale est dans un autre territoire, R1 s'applique) |
| **R8** | Déconnexion (`!logout`) | Le joueur est retiré des groupes `dungeon_instance` (anti-spam) mais reste membre de son dernier groupe **territoire** (position exacte persistée dans `current_zone_id`) |
| **R9** | Verrouillage transactionnel | Un avatar en combat (`T_COMBAT_SESSIONS` actif) ne peut pas se déplacer sauf `!fuite` réussie ou `SYS_FORCE_TELEPORT` |
| **R10** | Traçabilité | Tout mouvement est journalisé dans `T_WHATSAPP_LOGS` (avatar, zone_source, zone_cible, méthode, timestamp) — au grain **zone**, y compris intra-territorial |

---

## 3. Machine à États du Déplacement

```
IDLE (dans zone A, territoire T_A)
  │ !enter_zone B  ──► VALIDATION (R3, R4)
  │                      │ échec ──► IDLE + message de refus narratif
  │                      │ succès
  │                      ▼
  │                 EN_TRANSIT (durée = temps de trajet, coût MP débité)
  │                      │ arrivée
  │                      ▼
  │                 ÉCRITURE L1 : T_AVATARS.current_zone_id = B
  │                      │
  │                      ├─ territoire(B) = T_A ──► pas de changement de groupe
  │                      │                          (narration d'arrivée dans le groupe courant)
  │                      └─ territoire(B) = T_B ≠ T_A
  │                             ▼
  │                 SWITCH ATOMIQUE : add(groupe T_B) + remove(tous groupes territoire/instance ≠ T_B)
  │                             ▼
  └────────────── IDLE (dans zone B) + flavor_text d'entrée
```

**Atomicité** : l'écriture L1 et la synchronisation de groupes (`sync_player_groups()`) forment une opération
indivisible. En cas d'échec partiel (ex. API WhatsApp), rollback vers la zone source et resynchronisation
via `SYS_SYNC_PRESENCE` (vérité = `current_zone_id`).

---

## 4. Méthodes de Déplacement

*(inchangées par D76 — la sémantique joueur est identique, seul le comportement de groupe sous-jacent change)*

| Méthode | Commande | Contrainte | Coût |
|---|---|---|---|
| Marche (zone adjacente au sol) | `!enter_zone [Zone]` / alias `!marcher [direction]` | Adjacence (R3) | 0 MP, durée courte |
| Vol (zone adjacente / route aérienne) | alias `!voler [destination]` | Adjacence + `flight_mechanics.md` (jauge d'ailes) | MP selon distance |
| Sortie simple | `!leave_zone` | Retour vers la zone « parente » (capitale ou zone précédente) | 0 MP |
| Portail de capitale | `!portal [Ville]` | Cristal de téléportation + portail dans la zone actuelle | 1 cristal / Yrds |
| Voyage rapide | `!fast_travel [Zone_ID]` | Navigation Lv.6 + zone déjà visitée | 1 Teleport Crystal |
| File de donjon | `!dungeon_queue [Donjon_ID]` | 7 joueurs prêts → groupe `dungeon_instance` | — |
| Téléportation divine | — (IA/GM uniquement) | `SYS_FORCE_TELEPORT` / `!sys_group_add` | — |

---

## 5. Cas Limites (Edge Cases Structurels)

| Cas | Résolution |
|---|---|
| Joueur présent dans 2 groupes territoire (désynchronisation) | `SYS_SYNC_PRESENCE(Avatar_ID)` : la vérité est `T_AVATARS.current_zone_id` ; retrait des groupes excédentaires (implémentation : `sync_player_groups()` est idempotente) |
| Zone saturée (`max_players_in_zone`, compte L1 par zone) | Refus d'entrée + file d'attente narrative (« La zone est saturée de particules ») — le groupe territoire, lui, peut contenir les joueurs de toutes ses zones |
| Zone supprimée/verrouillée pendant qu'un joueur y est | Éjection vers la zone adjacente sûre la plus proche, sinon capitale raciale (écriture L1 + synchro R1) |
| Joueur banni (`!sys_ban`) | Retrait de TOUS les groupes, y compris permanents |
| Joueur ajouté manuellement à un groupe territoire (hors bot) | Détection au prochain message → `SYS_SYNC_PRESENCE` + avertissement karma |
| Mort en INSTANCE | R7 puis suppression du joueur de l'instance ; l'instance survit pour la party |
| Deux joueurs dans le même groupe mais des zones différentes | Cas **nominal** depuis D76 (même territoire ≠ même lieu) : toute résolution de gameplay (cible de combat, boutique, portée d'une emote de zone) filtre par `current_zone_id`, jamais par l'appartenance au groupe |

---

## 6. Équivalents Commandes (registre complet du protocole)

*(aucune commande nouvelle ni supprimée par D76 — règle de complétude satisfaite à périmètre constant ;
`!where` répond au grain zone, `SYS_SYNC_PRESENCE` réaligne les groupes sur `current_zone_id`)*

| Opération | Joueur | GM (Admin) | IA (Function Calling) |
|---|---|---|---|
| Entrer dans une zone | `!enter_zone [Zone]` | `!sys_group_add [Num] [Group_ID]` | `SYS_FORCE_TELEPORT(Avatar_ID, Zone_ID)` |
| Quitter une zone | `!leave_zone` | `!sys_group_kick [Num] [Group_ID]` | `SYS_FORCE_TELEPORT(Avatar_ID, Zone_parente)` |
| Position actuelle | `!where` | — | — |
| Resynchroniser la présence | — | `!sys_sync [Num_WhatsApp]` | `SYS_SYNC_PRESENCE(Avatar_ID)` |
| Téléportation ville | `!portal [Ville]` | `!sys_give teleport_crystal [Num]` | `SYS_BLESS_PLAYER(Avatar_ID, Free_Teleport)` |
| Voyage rapide | `!fast_travel [Zone_ID]` | — | `SYS_REVEAL_MAP(Avatar_ID, Zone_ID)` |
| Instance de donjon | `!dungeon_queue [Donjon_ID]` | `!sys_group_create [Nom] [Secret]` | `SYS_GENERATE_QUEST(Group_ID, Quest_JSON)` |
| Verrouiller les déplacements d'une zone | — | `!sys_zone_lock [Zone_ID]` | `SYS_LOCK_ZONE(Zone_ID, Raison)` |
| Modifier le graphe | — | `!sys_zone_link` / `!sys_zone_unlink` | `SYS_CONNECT_ZONES` / `SYS_DISCONNECT_ZONES` |
