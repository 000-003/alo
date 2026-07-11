# Fauteuil de Lecture Rembourré (`DEC_FUR_004`)

## Identification Cardinal
- **Item_ID** : `DEC_FUR_004`
- **Catégorie** : Décoration · **Type** : Mobilier (`FUR`)
- **Tier** : T1 · **Rareté** : Commun · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Aucune

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `comfort_cosmetic` **+0 %** (confort pur — aucun bonus chiffré) |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) |
| Déclenchement | Décoratif ; ajoute une ligne d'ambiance à la description du groupe HOME |
| Cumul / plafond | Sans effet mécanique ; illimité |

## Acquisition & Chaînage économique
- **Source** : tapissier de toute capitale ; premier meuble abordable d'un jeune foyer.
- **Recette** : 2× `MAT_WOD_002` (Bois de Chêne) + 2× `MAT_CUI_014` (Cuir de Loup) + 1× `MAT_HRB_001` (Lin Sylvestre, capitons) — menuiserie Nv.4.
- **Prix** : 400 ¥ (achat) · 100 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Il ne fait rien gagner, et c'est là tout son luxe. S'y asseoir un instant, dans son propre logement, entre deux raids, suffit à rappeler qu'un avatar n'est pas qu'une barre de vie. Argo le recommande à quiconque oublie de vivre entre deux combats.

## Intégration Bot
- Joueur : `!decorate DEC_FUR_004` — GM : `!sys_give DEC_FUR_004 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_FUR_004, 1)`
