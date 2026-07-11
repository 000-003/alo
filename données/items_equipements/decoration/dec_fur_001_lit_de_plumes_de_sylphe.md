# Lit de Plumes de Sylphe (`DEC_FUR_001`)

## Identification Cardinal
- **Item_ID** : `DEC_FUR_001`
- **Catégorie** : Décoration · **Type** : Mobilier (`FUR`)
- **Tier** : T2 · **Rareté** : Peu commun · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Sylph (fabrication) — utilisable par toutes les races

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_hp_regen_pct` **+5 %** (bonus au taux de régénération HP au repos) |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif, tant que l'objet est placé via `!decorate` et que le joueur exécute `!rest` chez lui |
| Cumul / plafond | Catégorie `rest_hp_regen` **plafonnée à +5 % cumulés** par logement ; ne se cumule pas avec un second lit |

## Acquisition & Chaînage économique
- **Source** : ébéniste-tapissier Sylph de Swilvane (`ZONE_SYL_CAP_001`), atelier de mobilier.
- **Recette** : 6× `MAT_DRP_012` (Plume de Sylphe) + 4× `MAT_WOD_004` (Bois de Frêne) + 3× `MAT_CUI_014` (Cuir de Loup, sangles) — menuiserie Nv.15.
- **Prix** : 1 800 ¥ (achat) · 450 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Rembourré d'une brassée de plumes muées par les faucons-vent de Swilvane, ce lit « respire » sous le dormeur : le duvet capte les micro-courants d'air que génère le Cardinal dans une chambre close, si bien que l'on croit s'assoupir en plein vol plané. Les Sylph disent qu'un guerrier qui dort ici se réveille toujours du bon côté du ciel. Argo note, plus prosaïquement, que la literie accélère la cicatrisation simulée pendant le repos hors-ligne.

## Intégration Bot
- Joueur : `!decorate DEC_FUR_001` — GM : `!sys_give DEC_FUR_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_FUR_001, 1)`
