# 🚪 Protocole Cardinal de Déplacement — Zones & Groupes WhatsApp

> **Statut** : Spécification structurelle de référence (base). Aucune implémentation ici — uniquement les règles.
> **Dépendances** : `cartographie/atlas_monde_liaisons.md` (graphe des zones), `cardinal_system_db/MCD_Concept/entite_zone.md`,
> `the_seed_engine/whatsapp_commands_list.md`, `the_seed_engine/ai_orchestrator_commands.md`.

---

## 1. Principe Fondateur

**Un lieu = un groupe WhatsApp.** Se déplacer dans Alfheim, c'est changer de groupe WhatsApp.

**Invariant d'exclusivité (R0)** : à tout instant, un avatar connecté appartient à **exactement un** groupe de type
`LOCATION` ou `INSTANCE`. Les groupes `HUB_CHAT` (chat communautaire), `GUILD`, `PARTY` et `SYSTEM` ne sont
**jamais** quittés automatiquement — ce sont des canaux sociaux, pas des lieux.

---

## 2. Règles de Déplacement

| # | Règle | Détail structurel |
|---|---|---|
| **R0** | Exclusivité de présence | `card(LOCATION ∪ INSTANCE) = 1` par avatar connecté |
| **R1** | Entrée = ajout / sortie automatique | Quand le bot ajoute un joueur au groupe d'un lieu, il le retire **de tous les autres groupes de type LOCATION/INSTANCE** dans la même transaction |
| **R2** | Le HUB est inviolable | Le groupe de chat communautaire n'est jamais quitté lors d'un déplacement (exception fondatrice) |
| **R3** | Adjacence obligatoire | `!enter_zone` n'est valide que si la zone cible figure dans `connected_zones` de la zone actuelle (atlas §4) — exceptions : `!portal`, `!fast_travel`, `SYS_FORCE_TELEPORT` |
| **R4** | Conditions d'entrée | Vérifiées dans l'ordre : ① zone accessible (`is_accessible`, non `SYS_LOCK_ZONE`) → ② niveau (`recommended_level_min`) → ③ item-clé (`requires_key_item`) → ④ vol (`requires_flight` + MP suffisants) → ⑤ capacité (`max_players_in_zone`) → ⑥ coût (`entry_cost_yrd`) |
| **R5** | Temps de trajet | Un déplacement a un coût (MP) et une durée (état `EN_TRANSIT`) ; pendant le transit le joueur n'est membre d'aucun groupe LOCATION sauf si la route est elle-même une zone (routes aériennes) |
| **R6** | Instances éphémères | `!dungeon_queue` crée un groupe `INSTANCE` (⚔️ RAID — <Donjon> #n) ; il compte comme lieu (R0) et est **supprimé** à la fin du raid |
| **R7** | Mort & Remain Light | À la mort : le joueur reste dans le groupe en état `REMAIN_LIGHT` (timer de résurrection, cf. `remain_light_respawn.md`) ; à expiration, transfert automatique vers l'Autel de Résurrection de sa capitale raciale (= changement de groupe, R1 s'applique) |
| **R8** | Déconnexion (`!logout`) | Le joueur est retiré des groupes `INSTANCE` (anti-spam) mais reste membre de son dernier groupe `LOCATION` (position persistée) |
| **R9** | Verrouillage transactionnel | Un avatar en combat (`T_COMBAT_SESSIONS` actif) ne peut pas se déplacer sauf `!fuite` réussie ou `SYS_FORCE_TELEPORT` |
| **R10** | Traçabilité | Tout mouvement est journalisé dans `T_WHATSAPP_LOGS` (avatar, zone_source, zone_cible, méthode, timestamp) |

---

## 3. Machine à États du Déplacement

```
IDLE (dans zone A)
  │ !enter_zone B  ──► VALIDATION (R3, R4)
  │                      │ échec ──► IDLE + message de refus narratif
  │                      │ succès
  │                      ▼
  │                 EN_TRANSIT (durée = temps de trajet, coût MP débité)
  │                      │ arrivée
  │                      ▼
  │                 SWITCH ATOMIQUE : add(groupe B) + remove(tous groupes LOCATION/INSTANCE ≠ B)
  │                      ▼
  └────────────── IDLE (dans zone B) + flavor_text d'entrée + mise à jour T_AVATARS.current_zone
```

**Atomicité** : l'ajout au groupe cible et le retrait des anciens groupes forment une opération indivisible.
En cas d'échec partiel (ex. API WhatsApp), rollback vers la zone source et resynchronisation via `SYS_SYNC_PRESENCE`.

---

## 4. Méthodes de Déplacement

| Méthode | Commande | Contrainte | Coût |
|---|---|---|---|
| Marche (zone adjacente au sol) | `!enter_zone [Zone]` / alias `!marcher [direction]` | Adjacence (R3) | 0 MP, durée courte |
| Vol (zone adjacente / route aérienne) | alias `!voler [destination]` | Adjacence + `flight_mechanics.md` (jauge d'ailes) | MP selon distance |
| Sortie simple | `!leave_zone` | Retour vers la zone « parente » (capitale ou zone précédente) | 0 MP |
| Portail de capitale | `!portal [Ville]` | Cristal de téléportation + portail dans la zone actuelle | 1 cristal / Yrds |
| Voyage rapide | `!fast_travel [Zone_ID]` | Navigation Lv.6 + zone déjà visitée | 1 Teleport Crystal |
| File de donjon | `!dungeon_queue [Donjon_ID]` | 7 joueurs prêts → groupe INSTANCE | — |
| Téléportation divine | — (IA/GM uniquement) | `SYS_FORCE_TELEPORT` / `!sys_group_add` | — |

---

## 5. Cas Limites (Edge Cases Structurels)

| Cas | Résolution |
|---|---|
| Joueur présent dans 2 groupes LOCATION (désynchronisation) | `SYS_SYNC_PRESENCE(Avatar_ID)` : la vérité est `T_AVATARS.current_zone` ; retrait des groupes excédentaires |
| Groupe WhatsApp plein (`max_players_in_zone`) | Refus d'entrée + file d'attente narrative (« La zone est saturée de particules ») |
| Zone supprimée/verrouillée pendant qu'un joueur y est | Éjection vers la zone adjacente sûre la plus proche, sinon capitale raciale |
| Joueur banni (`!sys_ban`) | Retrait de TOUS les groupes, y compris HUB |
| Joueur ajouté manuellement à un groupe lieu (hors bot) | Détection au prochain message → `SYS_SYNC_PRESENCE` + avertissement karma |
| Mort en INSTANCE | R7 puis suppression du joueur de l'instance ; l'instance survit pour la party |

---

## 6. Équivalents Commandes (registre complet du protocole)

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
