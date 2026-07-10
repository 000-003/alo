# Harnais de Guerre

## Identification Cardinal
- **Item_ID** : `HRN_004`
- **Catégorie** : Portage · **Type** : Sangle d'armes (dos)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 15 · **Affinité raciale** : Aucune

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Porte **3 armes au dos** (dégainage dorsal sans commande) — **aucun stockage d'items** |
| Slot | `gear_back` (alternative au sac : sac **XOR** sangle) |
| Niveau requis | 15 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : selliers militaires (Voulg, Granzam) / craft `!sew`
- **Recette** : 3× cuir souple + 2× boucles `MAT_*` + sangles doublées *(`!sew`)*
- **Prix** : 1 200 Yrds (achat) · 300 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Trois fourreaux dorsaux pour le combattant qui alterne les styles au fil d'un même affrontement : lame lourde, lame rapide, arme d'appoint. Les recrues de Voulg s'entraînent à choisir la bonne sans regarder. Renoncer au sac pour trois armes est un pari — mais un pari que les bretteurs polyvalents assument sans hésiter.

## Intégration Bot
- Joueur : `!equiper HRN_004 dos` · `!sew` — GM : `!sys_give HRN_004 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, HRN_004, 1)`
