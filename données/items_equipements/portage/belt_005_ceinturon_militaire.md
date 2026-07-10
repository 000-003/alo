# Ceinturon Militaire

## Identification Cardinal
- **Item_ID** : `BELT_005`
- **Catégorie** : Portage · **Type** : Ceinture porte-armes
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 10 · **Affinité raciale** : Aucune (variante régionale Salamander)

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Débloque **2 fourreaux** (arme au flanc gauche + flanc droit, dégainage instantané) |
| Slot | `gear_belt` (distinct de l'armure de taille `ARM_TAI_*`) |
| Niveau requis | 10 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : intendance de Voulg et selliers militaires / craft `!sew`
- **Recette** : 3× cuir souple + boucle de fer forgé + rivets de garnison *(`!sew`)*
- **Prix** : 800 Yrds (achat) · 200 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le ceinturon réglementaire de la garnison de Voulg : robuste, sans fioritures, marqué du sceau de la forteresse. Deux fourreaux disposés pour le dégainage en formation serrée. Les soldats Salamander le portent avec la raideur de la discipline — et le gardent souvent longtemps après avoir quitté le service.

## Intégration Bot
- Joueur : `!equiper BELT_005 ceinture` · `!sew` — GM : `!sys_give BELT_005 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, BELT_005, 1)`
