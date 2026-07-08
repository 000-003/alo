# Table MLD : T_ZONE_LINKS

> Détail relationnel du graphe de voisinage de l'atlas (`cartographie/atlas_monde_liaisons.md` §4-§6).
> `T_ZONES.connected_zones` (JSON) devient une **vue dénormalisée** de cette table — la table est la source de vérité.

## 1. Structure Logique : T_ZONE_LINKS

| Colonne | Type logique | Contraintes | Description |
|---|---|---|---|
| `link_id` | Entier | **PK** auto | Identifiant de liaison |
| `zone_a` / `zone_b` | Texte | FK → `T_ZONES.zone_id` ; **UNIQUE(`zone_a`,`zone_b`)** ; stockage canonique `zone_a < zone_b` (ordre lexical) | Les deux extrémités — une seule ligne par paire, le graphe étant non orienté (règle L1) |
| `link_type` | Énum | `WALK` / `FLY` / `UNDERGROUND` / `EXIT_INSTANCE` | Mode de franchissement |
| `mp_cost` | Entier | ≥ 0, défaut 0 | Coût MP du trajet (0 pour WALK) |
| `travel_time_min` | Entier | > 0 | Temps de trajet nominal (minutes) |
| `requires_flight` | Booléen | défaut FAUX | VRAI pour toutes les liaisons de/vers une `ROUTE_*` (règle L5) |
| `is_locked` | Booléen | défaut FAUX | Liaison suspendue (`!sys_zone_lock`, événements) |
| `lore_status` | Texte | NULLABLE | Statut narratif (ex: « Tension historique », « Alliance ») — cf. atlas §3 |

## 2. Indexation et Optimisation

- **Index** sur `zone_a` et sur `zone_b` : `!where`/`!map` résolvent les adjacences dans les deux sens.
- **Index partiel** sur `is_locked = VRAI` : le moteur de déplacement vérifie les verrous avant tout transfert (R3).

## 3. Triggers / Procédures Stockées (contrats d'intégrité)

| # | Contrat | Comportement |
|---|---|---|
| T1 | **Canonisation** | À l'insertion, réordonner (`zone_a`,`zone_b`) lexicalement — impossibilité structurelle d'un doublon inversé (= symétrie L1 garantie par construction) |
| T2 | **Anti-boucle** | Refuser `zone_a = zone_b` |
| T3 | **Profondeur donjon** | Refuser une 3ᵉ liaison sur une zone `DUN`/`RAID` (règle L4) |
| T4 | **Route = vol** | Forcer `requires_flight = VRAI` si une extrémité est de type `ROUTE` (règle L5) |
| T5 | **Synchronisation vue** | Toute insertion/suppression régénère `T_ZONES.connected_zones` des deux zones concernées |

## 4. Peuplement Initial (seed structurel)

**Gabarit par territoire racial** `<SEC>` ∈ {SYL, SAL, CAI, PUC, UND, LEP, IMP, GNO, SPR} — 7 liaisons chacune :

| # | Liaison | Type | MP | Temps |
|---|---|---|---|---|
| 1 | `CAP_001` ↔ `HUNT_001` | WALK | 0 | 2 min |
| 2 | `CAP_001` ↔ `HUNT_002` | FLY | 30 | 5 min |
| 3 | `CAP_001` ↔ `DUN_001` | FLY | 50 | 8 min |
| 4 | `CAP_001` ↔ `ROUTE_<SEC>_ALN` | FLY (`requires_flight`) | 100 | 15 min |
| 5 | `HUNT_001` ↔ `HUNT_002` | WALK | 0 | 6 min |
| 6 | `HUNT_002` ↔ `DUN_001` | WALK | 0 | 8 min |
| 7 | `ROUTE_<SEC>_ALN` ↔ `NEU_CAP_001` | FLY (`requires_flight`) | 0 | (inclus dans le trajet) |

**Exceptions Salamander** (+2) : `SAL_CAP_001` ↔ `SAL_TWN_001` (WALK, 0, 4 min) ; `SAL_TWN_001` ↔ `SAL_HUNT_001` (WALK, 0, 5 min).

**Anneau frontalier** (9 liaisons WALK/FLY, 0-20 MP, 12 min — `lore_status` selon atlas §3) :
`SAL_HUNT_002`↔`SYL_HUNT_002`, `SYL_HUNT_002`↔`CAI_HUNT_002`, `CAI_HUNT_002`↔`PUC_HUNT_002`, `PUC_HUNT_002`↔`UND_HUNT_002`, `UND_HUNT_002`↔`LEP_HUNT_002`, `LEP_HUNT_002`↔`IMP_HUNT_002`, `IMP_HUNT_002`↔`SPR_HUNT_002`, `SPR_HUNT_002`↔`GNO_HUNT_002`, `GNO_HUNT_002`↔`SAL_HUNT_002`.

**Axe central/vertical** (6 liaisons) : `NEU_CAP_001`↔`YGG_DUN_001` ; `YGG_DUN_001`↔`YGG_TOP_001` (verrouillée 🔒 tant que la Grand Quest n'est pas gagnée) ; `NEU_CAP_001`↔`JOT_FLD_001` (UNDERGROUND — vol interdit) ; `JOT_FLD_001`↔`JOT_RAID_001` ; `NEU_CAP_001`↔`AIN_HUB_001` (FLY, `requires_flight`) ; `AIN_FLR_N`↔`AIN_FLR_N±1` (générées dynamiquement avec le palier de front, décision D3).

**Total au lancement : 63 + 2 + 9 + 6 = 80 liaisons** (hors paliers Aincrad dynamiques).

## 5. Équivalents Commandes

| Opération | Joueur | GM | IA |
|---|---|---|---|
| Lire les adjacences | `!map`, `!where` | — | `SYS_REVEAL_MAP` |
| Créer une liaison | — | `!sys_zone_link` | `SYS_CONNECT_ZONES` |
| Supprimer une liaison | — | `!sys_zone_unlink` | `SYS_DISCONNECT_ZONES` |
| Verrouiller une liaison/zone | — | `!sys_zone_lock` | `SYS_LOCK_ZONE` |
