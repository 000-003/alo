# Râtelier d'Armes Poli (`DEC_TRO_001`)

## Identification Cardinal
- **Item_ID** : `DEC_TRO_001`
- **Catégorie** : Décoration · **Type** : Trophée (`TRO`)
- **Tier** : T2 · **Rareté** : Peu commun · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Aucune

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `comfort_cosmetic` **+0 %** (présentoir de prestige — aucun bonus chiffré) |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) |
| Déclenchement | Décoratif ; expose jusqu'à 3 armes du stockage domestique en vitrine (affichage seul, **aucun** buff d'arme) |
| Cumul / plafond | Sans effet mécanique ; illimité |

## Acquisition & Chaînage économique
- **Source** : armurier-menuisier de toute capitale ; favori des collectionneurs.
- **Recette** : 4× `MAT_WOD_018` (Bois de Fer) + 2× `MAT_MIN_001` (Minerai de Fer, crochets) — menuiserie Nv.16.
- **Prix** : 1 300 ¥ (achat) · 325 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Une lame accrochée au mur est deux fois une lame : une arme, et un souvenir. Le râtelier ne rend pas plus fort — les stats d'une arme rangée restent inertes —, mais il transforme un couloir en galerie de gloires. Les duellistes y suspendent l'épée du rival qu'ils n'ont jamais réussi à battre, comme une promesse.

## Intégration Bot
- Joueur : `!decorate DEC_TRO_001` — GM : `!sys_give DEC_TRO_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_TRO_001, 1)`
