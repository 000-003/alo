# Table MLD : T_NPC

> Registre relationnel des PNJ. Source de vérité des sections « PNJ Résidents » des fiches de zones.

## 1. Structure SQL

```sql
CREATE TABLE T_NPC (
    npc_id              VARCHAR(50) PRIMARY KEY,
    display_name        VARCHAR(100) NOT NULL,
    race                VARCHAR(20) NOT NULL REFERENCES T_RACES(race_id),
    role_type           VARCHAR(20) NOT NULL CHECK (role_type IN ('MERCHANT','SKILL_MASTER','QUEST_GIVER','GUARD','LORD','SERVICE','BLACK_MARKET')),
    zone_id             VARCHAR(50) REFERENCES T_ZONES(zone_id),
    location_label      VARCHAR(100),
    level               INT DEFAULT 1,
    hp                  INT DEFAULT 100,
    mp                  INT DEFAULT 50,
    stats_json          JSONB,
    shop_ref            VARCHAR(50),
    quest_ref           VARCHAR(50),
    dialog_ref          VARCHAR(50),
    secret_note         TEXT,
    qi_budget           INT NOT NULL DEFAULT 10 CHECK (qi_budget BETWEEN 1 AND 12),
    is_canon            BOOLEAN NOT NULL DEFAULT FALSE,
    is_essential        BOOLEAN NOT NULL DEFAULT FALSE,
    is_alive            BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE INDEX idx_npc_zone ON T_NPC(zone_id);
CREATE INDEX idx_npc_role ON T_NPC(role_type, zone_id);
CREATE INDEX idx_npc_alive ON T_NPC(is_alive) WHERE is_alive = FALSE;
```

## 2. Indexation et Optimisation

- **Index** `zone_id` : liste des PNJ présents à l'entrée de zone (`!where`).
- **Index** `(role_type, zone_id)` : `!shop_list`, `!quest_board`, `!craft_list`.
- **Index partiel** `is_alive = FALSE` : moteur d'élections/successions.

## 3. Triggers / Procédures Stockées

| # | Contrat | Comportement |
|---|---|---|
| N1 | **Préfixe cohérent** | Le `<VILLE>` du `npc_id` doit correspondre au préfixe de la `zone_id` (correspondance actée dans le peuplement initial) |
| N2 | **Mort ≠ suppression** | `SYS_ASSASSINATE_NPC` bascule `is_alive = FALSE`. DELETE interdit (l'historique narratif est immuable) |
| N3 | **Essentiel protégé** | `is_essential = TRUE` ⇒ la mort déclenche une quête d'élection (`SYS_GENERATE_QUEST`) |
| N4 | **Zone NULL pour canoniques (D19)** | `is_canon = TRUE` ⇒ `zone_id` peut être NULL (hors monde au repos). Seul `SYS_SPAWN_CANON` la renseigne temporairement |

## 4. Peuplement Initial — correspondance préfixes ↔ zones

| Préfixe | Ville | zone_id |
|---|---|---|
| `NPC_ALN_*` | Alne | `ZONE_NEU_CAP_001` |
| `NPC_SWI_*` | Swilvane | `ZONE_SYL_CAP_001` |
| `NPC_VOU_*` | Voulg | `ZONE_SAL_TWN_001` |
| `NPC_GAT_*` | Gattan | `ZONE_SAL_CAP_001` |
| `NPC_FRE_*` | Freelia | `ZONE_CAI_CAP_001` |
| `NPC_UND_*` | Archipel d'Écume | `ZONE_UND_CAP_001` |
| `NPC_LIO_*` | Lioda | `ZONE_PUC_CAP_001` |
| `NPC_DUS_*` | Duskarn | `ZONE_IMP_CAP_001` |
| `NPC_GRA_*` | Granzam | `ZONE_GNO_CAP_001` |
| `NPC_BRO_*` | Brokkheim | `ZONE_LEP_CAP_001` |
| `NPC_PEN_*` | Penwether | `ZONE_SPR_CAP_001` |

## 5. Plages de numérotation (D16)

| Plage | Population |
|---|---|
| `00` | PNJ caché du Cardinal |
| `01-07` | Notables actés |
| `08-09` | Gouvernance |
| `10-19` | Zones annexes |
| `20-99` | Population capitale |

> `NPC_CANON_<NOM>` : personnages canoniques, `is_canon = TRUE`, `zone_id = NULL` au repos.

## 6. Équivalents Commandes

| Opération | Joueur | GM | IA |
|---|---|---|---|
| Interagir | `!shop_list`, `!buy`, `!quest_accept`, `!parler` | `!sys_npc_info`, `!sys_npc_unlock` | `SYS_NPC_DIALOGUE` |
| Déplacer | — | `!sys_npc_move` | `SYS_MOVE_NPC` |
| Matérialiser canonique | — | `!sys_canon_spawn` | `SYS_SPAWN_CANON` |
| Assassiner | — | — | `SYS_ASSASSINATE_NPC` |
