# Harnais de l'Arsenal

## Identification Cardinal
- **Item_ID** : `HRN_008`
- **Catégorie** : Portage · **Type** : Sangle d'armes (dos)
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 30 · **Affinité raciale** : Aucune

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Porte **4 armes au dos** (dégainage dorsal sans commande) — **aucun stockage d'items** |
| Slot | `gear_back` (alternative au sac : sac **XOR** sangle) |
| Niveau requis | 30 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : craft maître-tailleur de Voulg / Granzam
- **Recette** : 4× cuir épais + 3× boucles de bronze + armature légère *(`!sew` maître)*
- **Prix** : 6 000 Yrds (achat) · 1 500 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Un harnais ambitieux qui transforme le dos d'un guerrier en véritable armurerie ambulante — quatre armes, chacune à sa place. Les capitaines de Voulg le portent comme un symbole de commandement. Lourd à équilibrer, spectaculaire à voir, il annonce que son porteur n'a pas prévu de fuir.

## Intégration Bot
- Joueur : `!equiper HRN_008 dos` · `!sew` — GM : `!sys_give HRN_008 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, HRN_008, 1)`
