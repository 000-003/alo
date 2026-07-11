# Armoire Laquée Cait Sith (`DEC_FUR_006`)

## Identification Cardinal
- **Item_ID** : `DEC_FUR_006`
- **Catégorie** : Décoration · **Type** : Mobilier (`FUR`)
- **Tier** : T2 · **Rareté** : Peu commun · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Cait Sith (fabrication)

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `comfort_cosmetic` **+0 %** (prestige décoratif — aucun bonus chiffré) |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) |
| Déclenchement | Décoratif ; enrichit la description du foyer (n'augmente **pas** `storage_slots`, réservés au tier de propriété) |
| Cumul / plafond | Sans effet mécanique ; illimité |

## Acquisition & Chaînage économique
- **Source** : laqueur de Freelia (`ZONE_CAI_CAP_001`), quartier des artisans.
- **Recette** : 6× `MAT_WOD_014` (Bois de Rose) + 2× `DIV_DYE_003` (Teinture d'Œillet) + 1× `DIV_DYE_010` (Teinture Royale) — menuiserie Nv.16.
- **Prix** : 1 400 ¥ (achat) · 350 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Le vernis rouge-œillet des Cait Sith se pose en trente-trois couches, chacune polie au coussinet. On y range moins qu'on ne s'y admire : ces armoires sont des miroirs opaques où la maison entière se reflète en teintes chaudes. Attention — elle n'ajoute pas un seul emplacement de rangement réel : le stockage domestique dépend du logement, pas du meuble.

## Intégration Bot
- Joueur : `!decorate DEC_FUR_006` — GM : `!sys_give DEC_FUR_006 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_FUR_006, 1)`
