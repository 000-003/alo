# Bannière de la Grande Forge (`DEC_RUG_005`)

## Identification Cardinal
- **Item_ID** : `DEC_RUG_005`
- **Catégorie** : Décoration · **Type** : Tapis / Tenture (`RUG`)
- **Tier** : T3 · **Rareté** : Rare · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Salamander / Leprechaun (forgerons)

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `craft_cost_pct` **−3 %** (réduction des frais de forge lancés depuis le logement) |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — n'affecte que les frais, jamais les matériaux |
| Déclenchement | Passif ; l'emblème des forgerons « inspire » la précision et réduit le gaspillage |
| Cumul / plafond | Catégorie `craft_cost` **plafonnée à −5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : confrérie des forgerons de Gattan (`ZONE_SAL_CAP_001`) ou de Brokkheim (`ZONE_LEP_CAP_001`) ; décernée aux artisans confirmés.
- **Recette** : 4× `MAT_HRB_001` (Lin Sylvestre) + 1× `DIV_DYE_008` (Teinture de Feu) + 1× `MAT_DRP_016` (Braise de Forge, poudre de teinte) — tissage Nv.28.
- **Prix** : 5 500 ¥ (achat) · 1 375 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Rouge braise sur noir de suie, frappée du marteau croisé, cette bannière ne se vend en principe pas : elle se mérite au terme d'un chef-d'œuvre présenté à la confrérie. L'accrocher chez soi, c'est afficher le rang de maître — et travailler sous son regard rend, dit-on, la main plus sûre et la matière moins avare.

## Intégration Bot
- Joueur : `!decorate DEC_RUG_005` — GM : `!sys_give DEC_RUG_005 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_RUG_005, 1)`
