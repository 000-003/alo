# Ceinture du Maître d'Armes

## Identification Cardinal
- **Item_ID** : `BELT_007`
- **Catégorie** : Portage · **Type** : Ceinture porte-armes
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 25 · **Affinité raciale** : Aucune

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Débloque **2 fourreaux** (arme au flanc gauche + flanc droit, dégainage instantané) |
| Slot | `gear_belt` (distinct de l'armure de taille `ARM_TAI_*`) |
| Niveau requis | 25 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : craft maroquinier maître / quête d'artisanat
- **Recette** : 4× cuir épais (`MAT_CUI_*` T3) + boucle de bronze gravée + laçage de mithril *(`!sew` maître)*
- **Prix** : 3 000 Yrds (achat) · 750 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Réglée au corps de son porteur par un maroquinier expert, cette ceinture positionne les fourreaux à l'exact endroit où la main les trouve sans regarder. Le dégainage devient un réflexe, plus une action. Les duellistes chevronnés jurent qu'une bonne ceinture vaut un niveau de vitesse — exagéré, mais révélateur du soin qu'ils y mettent.

## Intégration Bot
- Joueur : `!equiper BELT_007 ceinture` · `!sew` — GM : `!sys_give BELT_007 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, BELT_007, 1)`
