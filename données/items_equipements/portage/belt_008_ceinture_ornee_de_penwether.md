# Ceinture Ornée de Penwether

## Identification Cardinal
- **Item_ID** : `BELT_008`
- **Catégorie** : Portage · **Type** : Ceinture porte-armes
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 25 · **Affinité raciale** : Aucune (variante régionale Spriggan)

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Débloque **2 fourreaux** (arme au flanc gauche + flanc droit, dégainage instantané) |
| Slot | `gear_belt` (distinct de l'armure de taille `ARM_TAI_*`) |
| Niveau requis | 25 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : maroquiniers de Penwether / craft maître `!sew`
- **Recette** : 4× cuir épais + gravures d'obsidienne + laçage sombre *(`!sew` maître)*
- **Prix** : 3 500 Yrds (achat) · 875 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Ornée de motifs gravés à l'encre d'obsidienne, cette ceinture Spriggan est aussi belle qu'efficace — chose rare chez un peuple qui méprise l'ostentation. Ses deux fourreaux discrets se fondent sous une cape. Les chercheurs de trésors de Penwether la portent comme une signature : sobre au premier regard, raffinée au second.

## Intégration Bot
- Joueur : `!equiper BELT_008 ceinture` · `!sew` — GM : `!sys_give BELT_008 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, BELT_008, 1)`
