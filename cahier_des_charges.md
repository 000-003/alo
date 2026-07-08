# 📜 CAHIER DES CHARGES — Projet ALO : MMORPG Textuel sur WhatsApp

> **Version** : 1.0 (établissement de la base) · **Date** : 2026-07-06
> **Gouvernance** : toute exécution est conditionnée par `system_persona_architecte.md` (Architecte Créateur Primaire).
> **Phase actuelle** : établissement des données — **aucun code n'est produit à ce stade ; les livrables sont purement structurels.**

---

## 1. Vision & Objet

Recréer l'expérience du VRMMO **ALfheim Online** (univers Sword Art Online) sous forme de **roman interactif
multijoueur opéré par un bot WhatsApp**. Le monde est simulé par un « Système Cardinal » (orchestrateur IA +
backend Node.js à venir) ; les joueurs (~200 au lancement) agissent par commandes textuelles et vivent des
restitutions narratives cinématiques, jamais des sorties de terminal brut.

**Principe cardinal du projet** : *un lieu = un groupe WhatsApp*. La géographie du monde EST l'architecture
des groupes.

## 2. Périmètre

| Inclus | Exclus (phase base) |
|---|---|
| Base de données du monde en markdown structuré (`données/`) | Tout code d'implémentation (Node.js, SQL exécutable) |
| Atlas des zones + graphe de liaisons complet | Fiches narratives détaillées des zones nouvellement référencées |
| Protocole de déplacement inter-groupes | Intégration API WhatsApp réelle |
| Registres de commandes Joueur / GM / IA | Économie fine, équilibrage chiffré exhaustif |
| Cahier des charges + README | Hébergement, monitoring, CI |

## 3. Acteurs

| Acteur | Rôle | Interface |
|---|---|---|
| **Joueur** | Incarne un avatar d'une des 9 races | Commandes `!*` dans les groupes WhatsApp |
| **Game Master (humain)** | Support, modération, événements | Commandes `!sys_*` (admin only) |
| **Orchestrateur IA (Cardinal)** | Dungeon Master automatisé : météo, quêtes, équilibrage, narration | Function Calling `SYS_*` (`the_seed_engine/ai_orchestrator_commands.md`) |
| **Bot WhatsApp (à implémenter)** | Exécute les règles, gère les groupes, restitue la narration | Backend Node.js (phase ultérieure) |

## 4. Exigences Fonctionnelles (par module de données)

| Réf. | Module | Source de vérité | Exigence |
|---|---|---|---|
| EF-01 | **Cartographie & Monde** | `données/cartographie/atlas_monde_liaisons.md` | Le monde est découpé en zones identifiées (`ZONE_*`), reliées par un graphe symétrique ; 9 territoires raciaux + axe neutre Alne/Yggdrasil/Jötunheimr/New Aincrad |
| EF-02 | **Déplacement** | `the_seed_engine/system_mechanics/zone_movement_protocol.md` | Invariant R0 : un joueur connecté est dans exactement un groupe lieu/instance ; entrée = sortie automatique de tous les autres lieux ; le HUB chat n'est jamais quitté |
| EF-03 | **Commandes** | `the_seed_engine/whatsapp_commands_list.md` | Toute mécanique du monde a son équivalent commande (Joueur, GM et/ou IA) — règle de complétude obligatoire pour tout ajout |
| EF-04 | **Progression & Stats** | `the_seed_engine/stat_scaling/*` | 9 races équilibrées (60 pts base), formules de dérivation, scaling par niveau |
| EF-05 | **Combat** | `system_mechanics/damage_calculation_algorithm.md`, `physics_combat.md` | Combat asynchrone verrouillé (anti-duplication), Remain Light à la mort |
| EF-06 | **Bestiaire** | `personnages_bestiaire/` | 200 boss New Aincrad (2/palier), mobs par territoire, PNJ à secret narratif |
| EF-07 | **Économie & Objets** | `items_equipements/`, `stat_scaling/economy_balance_sheet.md` | Chaîne de dépendances économiques (drop → marchand → craft), monnaie Yrd |
| EF-08 | **Magie & Skills** | `compétences_magie/`, `données/skills.md` | Systèmes de cast, OSS, magie musicale/illusion |
| EF-09 | **Modèle de données** | `cardinal_system_db/MCD_Concept/` + `MLD_Logic/` | Chaque entité conceptuelle (MCD) a sa table logique (MLD) ; identifiants stricts |
| EF-10 | **Lore & Règles du monde** | `lore_mecaniques/` | Vol, PK/justice, respawn, flore par territoire |

## 5. Exigences Non Fonctionnelles (filtres du Persona)

| Réf. | Exigence | Critère |
|---|---|---|
| ENF-01 | **Scalabilité** | Architecture pensée pour 10 000 messages simultanés (asynchrone, cache d'état, locking) |
| ENF-02 | **Sécurité** | Anti-injection, anti-spam, karma anti-exploit (`SYS_CURSE_KARMA`) |
| ENF-03 | **Intégrité** | Graphe de zones symétrique (règle L1) ; transactions atomiques de déplacement ; resynchronisation `SYS_SYNC_PRESENCE` |
| ENF-04 | **Narration** | Zéro réponse minimaliste : toute sortie bot est une restitution narrative (`whatsapp_narrative_io.md`) |
| ENF-05 | **Cohérence écologique/économique** | Tout drop, PNJ et ressource s'insère dans l'arbre de dépendances du monde |
| ENF-06 | **Traçabilité** | Tout mouvement/action journalisé (`T_WHATSAPP_LOGS`) |

## 6. Architecture des Données (couches)

```
system_persona_architecte.md          ← gouvernance (conditionne toute exécution)
données/
 ├─ cartographie/                     ← COUCHE MONDE : atlas (maître) + fiches zones + routes
 ├─ cardinal_system_db/               ← COUCHE MODÈLE : MCD (concepts) → MLD (tables)
 ├─ the_seed_engine/                  ← COUCHE MOTEUR : mécaniques, scaling, commandes
 ├─ personnages_bestiaire/            ← COUCHE ENTITÉS : boss, mobs, PNJ
 ├─ items_equipements/                ← COUCHE OBJETS
 ├─ competences_magie/                ← COUCHE SKILLS
 └─ lore_mecaniques/                  ← COUCHE LORE : règles du monde, géographie narrative, flore
ressources/ & ressources_brutes/      ← matière première (light novels, guides de worldbuilding)
```

**Règle de propagation** : toute modification (description, statistique, ID) doit être répercutée dans TOUTES
les couches où l'élément est référencé (atlas ↔ fiche zone ↔ table MLD ↔ commande).

## 7. Décisions de Design Actées

| # | Décision | Justification |
|---|---|---|
| D1 | Capitale Salamander = **Gattan** (`ZONE_SAL_CAP_001`) ; **Voulg** requalifiée forteresse secondaire (`ZONE_SAL_TWN_001`) | Conflit entre deux fichiers ; l'ID cartographique existant fait foi |
| D2 | Disposition radiale des 9 territoires autour d'Alne, frontières par paires de zones `HUNT_002` | Supporte les liaisons terrestres + tension PvP frontalière du lore |
| D3 | New Aincrad : seuls le Palier 1 et le palier de front ont des groupes persistants ; salles de boss = groupes `INSTANCE` éphémères | 100 paliers ≠ 100 groupes WhatsApp (limite opérationnelle) |
| D4 | Taxonomie de groupes : `LOCATION` / `INSTANCE` (exclusifs) vs `HUB_CHAT` / `GUILD` / `PARTY` / `SYSTEM` (persistants) | Fonde l'invariant R0 du protocole de déplacement |
| D5 | Capitales nommées pour les 4 territoires sans fiche : Lioda (Puca), Duskarn (Imp), Granzam (Gnome), Brokkheim (Leprechaun), Penwether (Spriggan — canon) | Complétude du découpage en 9 territoires |
| D11 | Mécaniques signatures des 2 donjons restants (complète D10 sur 9/9) : Caldeira d'Obsidienne = jauge de **Surchauffe** (chaque message du groupe chauffe l'instance — anti-spam) ; Gouffre de Léviathan = jauge d'**Apnée** individuelle (chaque action consomme de l'oxygène, `!respirer` en poche d'air) | Exploiter nativement WhatsApp ; transformer les contraintes anti-spam (ENF-02) en gameplay |
| D12 | Paramètres environnementaux de zone unifiés (`OXYGEN`, `HEAT`, `DOT`) pilotés par une commande générique unique : GM `!sys_env_set`, IA `SYS_SET_ENV_HAZARD` | Éviter une commande par jauge ; extensible aux futurs environnements (froid Jötunheimr, etc.) |

## 8. Critères d'Acceptation de la Base

- [x] Chaque race possède un secteur identifié avec capitale, zones de chasse, donjon et route vers Alne.
- [x] Le graphe de liaisons est complet, symétrique et documenté en un point unique (atlas).
- [x] La logique de déplacement (exclusivité de groupe, exceptions HUB) est spécifiée avec ses cas limites.
- [x] Chaque mécanique ajoutée dispose de ses équivalents commande (Joueur / GM / IA).
- [x] Cahier des charges et README publiés à la racine.

## 9. Backlog Structurel (phases suivantes — hors périmètre base)

| Priorité | Tâche | Statut |
|---|---|---|
| P1 | Fiches détaillées des zones nouvellement référencées (Freelia, Lioda, Duskarn, Granzam, Brokkheim, Penwether + chasses/donjons/routes) au format `capitale_swilvane.md` | ✅ Étape 2 (2026-07-06) — 30 fiches |
| P1 | Tables MLD manquantes : `T_WA_GROUPS`, `T_SPAWN_TABLES`, `T_NPC`, `T_ZONE_LINKS` (détail des liaisons) | ✅ Étape 2 (2026-07-06) |
| P1-bis | Fiches manquantes des territoires « anciens » : Salamander (`SAL_DUN_001` Caldeira d'Obsidienne, `ROUTE_SAL_ALN`), Undine (`UND_HUNT_001/002`, `UND_DUN_001`, `ROUTE_UND_ALN`), Gattan (registre PNJ `NPC_GAT_*`) | ✅ Étape 3 (2026-07-07) — 7 fichiers |
| P2 | Renflouement du bestiaire des territoires sans fichiers mobs dédiés (Cait Sith, Imp, Puca, Spriggan, Leprechaun — les ID `MOB_<SEC>_*` sont actés dans les fiches de zones) | ⏳ |
| P2 | Économie : grille de prix par tier, arbre de dépendances drop→craft complet | ⏳ |
| P2 | Détail MLD des mobs de donjons (plage réservée `MOB_<SEC>_030-034`) | ⏳ |
| P3 | Implémentation Node.js du bot (hors phase données) | ⏳ |
