# Potion de Mana Mineure

## Identification Cardinal
- **Item_ID** : `CSM_POT_011`
- **Catégorie** : Potion · **Type** : Mana (MP)
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Restaure 40 MP |
| Durée | Instantané |
| Cooldown | 10 s |
| Cumulable | NON — 1 buff nourriture + 1 buff potion max |

## Acquisition & Chaînage économique
- **Source** : boutique d'apothicaire (toutes villes)
- **Recette** : 1× Fleur-de-lune + 1× eau claire *(alchimie mineure)*
- **Prix** : 30 Yrds (achat) · 7 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Bleu pâle, presque translucide, elle a le goût d'une pluie de printemps un peu métallique. Les jeunes mages en boivent tellement qu'ils finissent par ne plus sentir le goût — signe reconnaissable d'un lanceur de sorts sérieux. C'est le carburant des premières incantations, ni plus ni moins.

## Intégration Bot
- Joueur : `!use CSM_POT_011` — GM : `!sys_give CSM_POT_011 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_011, 1)`
