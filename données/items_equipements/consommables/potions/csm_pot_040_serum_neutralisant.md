# Sérum Neutralisant

## Identification Cardinal
- **Item_ID** : `CSM_POT_040`
- **Catégorie** : Potion · **Type** : Anti-jauge D12 (DOT)
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 30 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Immunise à tout dégât sur la durée (DOT) pendant 60 s |
| Durée | 60 s (immunité DOT) |
| Cooldown | 40 s |
| Cumulable | NON — n'occupe pas le slot de buff |

## Acquisition & Chaînage économique
- **Source** : boutique d'apothicaire de capitale / craft alchimiste confirmé
- **Recette** : 3× Herbe-purge + 1× Sel-de-lune + 1× Éclat de saphir brut + 1× fiole scellée *(alchimie experte)*
- **Prix** : 600 Yrds (achat) · 150 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le grand frère de l'antidote de fond : une minute pleine d'immunité contre tout ce qui ronge la vie goutte à goutte. Limpide, presque sans goût, il agit comme un bouclier interne invisible. Les raids qui traversent la Nécropole Antique ou les salles empoisonnées de fin de donjon le synchronisent au signal — soixante secondes, c'est court, et il ne faut pas les gâcher.

## Intégration Bot
- Joueur : `!use CSM_POT_040` — GM : `!sys_give CSM_POT_040 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_040, 1)`

## Note
Interagit avec la jauge/paramètre D12 `DOT`. Immunité longue pour les traversées de salles à dégâts continus.
