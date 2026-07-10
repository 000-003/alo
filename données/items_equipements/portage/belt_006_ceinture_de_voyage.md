# Ceinture de Voyage

## Identification Cardinal
- **Item_ID** : `BELT_006`
- **Catégorie** : Portage · **Type** : Ceinture porte-armes
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 10 · **Affinité raciale** : Aucune

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Débloque **2 fourreaux** (arme au flanc gauche + flanc droit, dégainage instantané) |
| Slot | `gear_belt` (distinct de l'armure de taille `ARM_TAI_*`) |
| Niveau requis | 10 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : maroquiniers d'Alne et guildes de voyage / craft `!sew`
- **Recette** : 3× cuir souple + boucle de bronze + passants renforcés *(`!sew`)*
- **Prix** : 750 Yrds (achat) · 187 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Souple mais tenace, cette ceinture est faite pour les longues routes où l'on ne s'arrête jamais assez pour se rééquiper tranquillement. Ses deux fourreaux tiennent bon sur des semaines de marche. Les marchands d'Alne l'apprécient autant que les explorateurs : discrète en ville, fiable en chemin.

## Intégration Bot
- Joueur : `!equiper BELT_006 ceinture` · `!sew` — GM : `!sys_give BELT_006 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, BELT_006, 1)`
