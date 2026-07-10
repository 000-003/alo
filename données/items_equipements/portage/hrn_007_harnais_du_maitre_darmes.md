# Harnais du Maître d'Armes

## Identification Cardinal
- **Item_ID** : `HRN_007`
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
- **Source** : craft maître-tailleur / quête d'arène
- **Recette** : 4× cuir épais (`MAT_CUI_*` T3) + 3× boucles renforcées + doublure de mithril *(`!sew` maître)*
- **Prix** : 5 000 Yrds (achat) · 1 250 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Quatre armes au dos, disposées comme les rayons d'une roue prêts à tourner : c'est l'attirail du maître d'armes qui change de style à chaque échange. Peu savent gérer un tel arsenal sans s'emmêler — mais ceux qui le maîtrisent deviennent imprévisibles. Renoncer au sac pour quatre lames est l'aveu qu'on vit pour le combat.

## Intégration Bot
- Joueur : `!equiper HRN_007 dos` · `!sew` — GM : `!sys_give HRN_007 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, HRN_007, 1)`
