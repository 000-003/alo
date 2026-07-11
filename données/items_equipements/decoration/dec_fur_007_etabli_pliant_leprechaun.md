# Établi Pliant de Leprechaun (`DEC_FUR_007`)

## Identification Cardinal
- **Item_ID** : `DEC_FUR_007`
- **Catégorie** : Décoration · **Type** : Mobilier (`FUR`)
- **Tier** : T3 · **Rareté** : Rare · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Leprechaun (fabrication)

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `craft_cost_pct` **−4 %** (réduction des frais de forge/atelier des crafts lancés depuis le logement) |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif hors du foyer ; ne réduit **jamais** le coût en matériaux, seulement les frais |
| Déclenchement | Passif tant que placé ; s'applique aux commandes de craft initiées dans le groupe HOME |
| Cumul / plafond | Catégorie `craft_cost` **plafonnée à −5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : maître-mécanicien Leprechaun de Brokkheim (`ZONE_LEP_CAP_001`).
- **Recette** : 4× `MAT_WOD_017` (Noyer des Gnomes) + 3× `MAT_CUI_005` (Rouage Précieux) + 2× `MAT_MIN_013` (Minerai de Cuivre Raffiné) — mécanique Nv.30.
- **Prix** : 6 000 ¥ (achat) · 1 500 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Un chef-d'œuvre d'ingéniosité Leprechaun : dix étaux, trois enclumes miniatures et un système de rangement à ressort qui se replie en une valise grande comme un livre. L'artisan qui travaille chez lui sur cet établi économise le déplacement — et les pourboires — de la forge publique. Les puristes de Brokkheim disent qu'on reconnaît un vrai bricoleur à l'usure de ses gonds.

## Intégration Bot
- Joueur : `!decorate DEC_FUR_007` — GM : `!sys_give DEC_FUR_007 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_FUR_007, 1)`
