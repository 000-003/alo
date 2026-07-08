# 🌳 QUÊTE — `QST_NEU_LESSIVE_01` · « La Tache qui Revient »

> **Type** : enquête douce (miroir neutre de la corvée de lessive de Gattan).
> **Zone** : `ZONE_NEU_CAP_001` — Alne (Quartier Administratif → Ruelle sombre du Dôme).
> **Donneuse** : Blanchisseuse Sud `NPC_ALN_87`. **Niveau conseillé** : 10+. **Répétable** : non (chaîne à embranchement).

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **QST_ID** | `QST_NEU_LESSIVE_01` |
| **Titre** | La Tache qui Revient |
| **quest_giver** | `NPC_ALN_87` (Blanchisseuse Sud) |
| **zone_id** | `ZONE_NEU_CAP_001` |
| **prerequis** | `AFF(NPC_ALN_87) >= 80` (débloque `QI_ALN_87_07`) |
| **type / tier** | `INVESTIGATION` / T1 (surface) — amorce du fil « neutralité fragile » |
| **is_repeatable** | FAUX |

## 2. Synopsis (matériau LLM)

La blanchisseuse Sud n'arrive pas à faire partir une tache sombre sur une cape qu'un client lui rapporte sans cesse. La tache revient après chaque lavage. En surface : une corvée domestique (le miroir de la lessive de Gattan). En profondeur : la tache est du **sang versé en zone neutre** — une chose que l'anti-PK rend « impossible ». Le linge se souvient de ce que les registres nient. La quête part d'une lessive et effleure la première preuve tangible que la neutralité d'Alne a été violée.

## 3. Étapes

| # | Étape | Objectif | Cible / Lieu | Récompense d'étape |
|---|---|---|---|---|
| 1 | `LESSIVE_01_S1` | Récupérer la cape tachée et essayer 3 lessives (fournies) | Lavoirs, `NPC_ALN_87` | +réputation Sud, 50 Yrds |
| 2 | `LESSIVE_01_S2` | Identifier la nature de la tache (porter la cape à un expert) | Rémouleur Griss `NPC_ALN_88` (« lame qui a tué ») OU Frère Osmé `NPC_ALN_40` (sang/rites) | indice K2 : c'est du sang |
| 3 | `LESSIVE_01_S3` | Retrouver le propriétaire de la cape | file de dépôt de Sud → Ruelle du Dôme | accès `QI_ALN_87_08` |
| 4 | `LESSIVE_01_S4` | **Embranchement** : dénoncer / se taire / enquêter plus loin | Custode Aldwin `NPC_ALN_08` OU Commandeure Silène `NPC_ALN_09` | voir §4 |

## 4. Embranchements & conséquences

- **A — Alerter la garde** (`→ Silène NPC_ALN_09`) : ouvre `QST_NEU_NEUTRALITE_01` (enquête sur la faille anti-PK). Récompense : titre `TITLE_NEU_TEMOIN`, +standing Conclave.
- **B — Se taire** (rendre la cape « propre », mentir à Sud) : +Yrds (payé par le propriétaire), flag `pk_coverup` posé pour l'orchestrateur (le joueur devient un maillon du silence — cf. Tibbe `NPC_ALN_50`).
- **C — Enquêter seul** : mène au recel de Morne `NPC_ALN_55` / à Kael `NPC_ALN_07` ; risque d'aggro hors zone neutre. Débloque un indice supplémentaire du **fil « neutralité fragile »**.

> **Invariant** : la quête ne *résout* pas le fil rouge (aucun PNJ ne détient un fil entier, D20). Elle pose la preuve (sang en zone neutre) et distribue un indice ; la résolution reste pilotée par l'orchestrateur.

## 5. Récompenses finales

| Voie | Yrds | Objet / Titre | Suite |
|---|---|---|---|
| A | 300 | `TITLE_NEU_TEMOIN` | `QST_NEU_NEUTRALITE_01` |
| B | 600 | — (flag `pk_coverup`) | — (branche « complice ») |
| C | 200 | indice « neutralité fragile » | ramifications marché noir |

## 6. Chaînage & complétude (commandes)

| Opération | Joueur | GM | IA |
|---|---|---|---|
| Prendre/suivre la quête | `!quest_accept QST_NEU_LESSIVE_01` / `!quest_log` | `!sys_quest_give [Avatar] QST_NEU_LESSIVE_01` | `SYS_QUEST_HOOK(NPC_ALN_87, Avatar_ID, QST_NEU_LESSIVE_01)` |
| Lancer une lessive (étape 1) | `!laundry [objet]` | `!sys_item_state [objet] [état]` | `SYS_SET_ITEM_STATE(Item_ID, State)` |
| Poser/lever le flag de sang | *(implicite)* | `!sys_flag [Avatar] pk_coverup` | `SYS_FLAG_BLOODSTAIN_NEUTRAL(Item_ID)` |

- Fiche source du donneur : `pnj/alne/npc_aln_87_blanchisseuse_sud.md` (slot `QI_ALN_87_07`).
- Miroir Gattan : équivalent structurel de la corvée de lessive de Gattan (thème « le linge se souvient »).
