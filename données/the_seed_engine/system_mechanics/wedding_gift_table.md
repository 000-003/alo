# Table de tirage — Cadeau de Noces du Système (SOC-4)

> Alimente `SYS_GENERATE_WEDDING_GIFT(Marriage_ID, Avg_Level)` (M6). À la cérémonie, le Système Cardinal offre au couple **un cadeau unique** dont le tier dépend de la **moyenne de niveau des deux conjoints** (demande PE). Déposé au coffre conjugal, `T_MARRIAGE_ASSETS.is_joint_earned = TRUE` (bien commun, partagé 50/50 au divorce). Puise dans les items **existants** — aucun ID neuf (D-SOC-8).

## 1. Bandes de niveau → tier de cadeau

`avg_level = round((niveau_conjoint_A + niveau_conjoint_B) / 2)` (min 15, prérequis de mariage).

| Bande `avg_level` | Tier cadeau | Rareté cible |
|---|---|---|
| 15 – 24 | T1 | `uncommon` |
| 25 – 44 | T2 | `rare` |
| 45 – 64 | T3 | `rare` → `epic` |
| 65 – 84 | T4 | `epic` |
| 85 – 100 | T5 | `legendary` (jamais `unique` serveur) |

## 2. Pools de tirage (pondérés)

À tier fixé, le cadeau est tiré dans l'un des trois pools, à parts égales (⅓ chacun) :

| Pool | Source (items existants) | Note |
|---|---|---|
| **Arme** | `WPN_*` du tier (hors `WPN_LEG_*` serveur, hors liées de quête) | remise à niveau d'équipement |
| **Sort / OSS** | `MAG_*` / `OSS_*` du tier enseignables | délivré comme parchemin apprenable |
| **Artefact** | accessoire/consommable rare du tier, ou `DEC_*` à buff (T1-T2) ; à T5, un artefact `epic`/`legendary` non lié | « sense of wonder », cosmétique + utilitaire |

## 3. Règles de tirage (contrats)

| # | Contrat | Comportement |
|---|---|---|
| WG1 | **Un seul cadeau** | 1 item par mariage. Un remariage (après divorce + cooldown 30 j) redonne droit à un tirage |
| WG2 | **Anti-doublon** | Si l'item tiré est déjà possédé en double par le couple, re-tirage dans le même pool/tier (max 3 essais, sinon bascule de pool) |
| WG3 | **Dépôt commun** | Déposé au coffre conjugal (`owner_type='marriage'`), `is_joint_earned = TRUE` ; coffre plein ⇒ `T_MAIL` (7 j) |
| WG4 | **Frontière déterministe** | Le tirage (bande, pool, pondération, anti-doublon) est exécuté par le **moteur L1**, pas par l'IA. `SYS_GENERATE_WEDDING_GIFT` ne fait que **narrer** la remise du cadeau déjà déterminé par L1 |
| WG5 | **Jamais de contenu serveur-unique** | Les légendaires de serveur (`WPN_LEG_*`, artefacts `unique`) sont **exclus** du pool (protègent leur rareté narrative) |

## 4. Intégration
- IA : `SYS_GENERATE_WEDDING_GIFT(Marriage_ID, Avg_Level)` — enchaîne après `SYS_GENERATE_CEREMONY`.
- GM : `!sys_marry` déclenche le tirage automatiquement ; `!sys_give` pour un cadeau forcé.
- Tables : `T_MARRIAGES.wedding_gift_item_id` + `T_MARRIAGES.avg_level_at_wedding` renseignés au tirage.
