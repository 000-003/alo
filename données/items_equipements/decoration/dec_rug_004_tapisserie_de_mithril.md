# Tapisserie de Fils de Mithril (`DEC_RUG_004`)

## Identification Cardinal
- **Item_ID** : `DEC_RUG_004`
- **Catégorie** : Décoration · **Type** : Tapis / Tenture (`RUG`)
- **Tier** : T4 · **Rareté** : Épique · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Aucune

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_mp_regen_pct` **+4 %** |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` ; les fils conducteurs de mithril « canalisent » le mana ambiant |
| Cumul / plafond | Catégorie `rest_mp_regen` **plafonnée à +5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : lissier de prestige de toute capitale ; ouvrage de plusieurs semaines réservé aux manoirs.
- **Recette** : 3× `MAT_HRB_012` (Herbe de Mithril, fil) + 1× `DIV_DYE_007` (Teinture de Mithril) + 5× `MAT_HRB_001` (Lin Sylvestre, chaîne) — tissage Nv.45.
- **Prix** : 20 000 ¥ (achat) · 5 000 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Tisser le mithril en fil est un art perdu pour la plupart : le métal doit être filé aussi fin qu'un cheveu sans jamais casser. La tapisserie qui en résulte scintille comme une aurore figée et, chose curieuse, semble « appeler » le mana des mages qui reposent sous elle. Les mécènes s'arrachent les rares pièces signées d'un maître-lissier.

## Intégration Bot
- Joueur : `!decorate DEC_RUG_004` — GM : `!sys_give DEC_RUG_004 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_RUG_004, 1)`
