# Ronce Lumineuse d'Yggdrasil (`DEC_PLT_006`)

## Identification Cardinal
- **Item_ID** : `DEC_PLT_006`
- **Catégorie** : Décoration · **Type** : Plante / Jardin (`PLT`)
- **Tier** : T5 · **Rareté** : Légendaire · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Aucune (relique du Grand Arbre)

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_hp_regen_pct` **+5 %** |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` ; la sève du Grand Arbre régénère la vie au maximum autorisé |
| Cumul / plafond | Catégorie `rest_hp_regen` **plafonnée à +5 % cumulés** par logement (déjà au plafond seule) |

## Acquisition & Chaînage économique
- **Source** : **loot / craft de prestige** — bouture prélevée dans l'axe vertical d'Yggdrasil, stabilisée par un maître-horticulteur.
- **Recette** : 1× `MAT_DRP_019` (Essence de Yggdrasil) + 1× `MAT_WOD_009` (Bois d'Yggdrasil) + 3× `MAT_HRB_015` (Fleur de l'Âme) — horticulture Nv.80.
- **Prix** : 90 000 ¥ (achat, ventes exceptionnelles) · 22 500 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
On ne coupe pas Yggdrasil ; on lui vole, avec sa permission tacite, une seule ronce lumineuse. Plantée chez soi, elle continue de croître très lentement en pulsant d'une lueur verte qui semble battre au rythme du monde entier. Posséder un fragment vivant du Grand Arbre, c'est loger un morceau du serveur lui-même — un privilège que peu peuvent s'offrir.

## Intégration Bot
- Joueur : `!decorate DEC_PLT_006` — GM : `!sys_give DEC_PLT_006 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_PLT_006, 1)`
