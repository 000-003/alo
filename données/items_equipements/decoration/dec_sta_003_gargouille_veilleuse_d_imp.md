# Gargouille Veilleuse d'Imp (`DEC_STA_003`)

## Identification Cardinal
- **Item_ID** : `DEC_STA_003`
- **Catégorie** : Décoration · **Type** : Statue (`STA`)
- **Tier** : T2 · **Rareté** : Peu commun · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Imp (sculpture)

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `comfort_cosmetic` **+0 %** (frisson d'ambiance — aucun bonus chiffré) |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) |
| Déclenchement | Décoratif ; enrichit la description du foyer d'une note inquiétante (aucun effet mécanique) |
| Cumul / plafond | Sans effet mécanique ; illimité |

## Acquisition & Chaînage économique
- **Source** : sculpteur Imp de Duskarn (`ZONE_IMP_CAP_001`) ; les Imp veillent leurs seuils de pierres grimaçantes.
- **Recette** : 4× `MAT_MIN_008` (Obsidienne de Gattan) + 1× `MAT_GEM_002` (Gemme d'Obsidienne, œil) — sculpture Nv.18.
- **Prix** : 1 400 ¥ (achat) · 350 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Accroupie au coin d'un toit ou d'une cheminée, la gargouille Imp fixe la porte d'un rictus figé. Superstition ou art, les Imp jurent qu'aucun mauvais sort ne franchit un seuil qu'elle garde — ce qui, dans un monde entièrement scripté, relève surtout du folklore. Elle n'offre rien qu'un frisson agréable ; les enfants d'invités l'adorent et la craignent.

## Intégration Bot
- Joueur : `!decorate DEC_STA_003` — GM : `!sys_give DEC_STA_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_STA_003, 1)`
