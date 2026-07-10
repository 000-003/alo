# Ceinturon de Freelia

## Identification Cardinal
- **Item_ID** : `BELT_002`
- **Catégorie** : Portage · **Type** : Ceinture porte-armes
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Aucune (variante régionale Cait Sith)

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Débloque **2 fourreaux** (arme au flanc gauche + flanc droit, dégainage instantané) |
| Slot | `gear_belt` (distinct de l'armure de taille `ARM_TAI_*`) |
| Niveau requis | 1 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : maroquiniers de Freelia et comptoirs de chasse
- **Recette** : 2× cuir souple + laçage croisé + boucle *(`!sew`)*
- **Prix** : 170 Yrds (achat) · 42 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Un ceinturon souple, laçé à la mode des chasseurs de Freelia, qui épouse la hanche sans entraver la course. Deux fourreaux latéraux pour dégainer dagues ou lames courtes en un éclair. Les traqueurs Cait Sith le portent bas, presque sur la hanche, pour un dégainage à hauteur de main tendue.

## Intégration Bot
- Joueur : `!equiper BELT_002 ceinture` · `!sew` — GM : `!sys_give BELT_002 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, BELT_002, 1)`
