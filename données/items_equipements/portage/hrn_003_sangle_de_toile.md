# Sangle de Toile

## Identification Cardinal
- **Item_ID** : `HRN_003`
- **Catégorie** : Portage · **Type** : Sangle d'armes (dos)
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Aucune (variante régionale Sylph)

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Porte **2 armes au dos** (dégainage dorsal sans commande) — **aucun stockage d'items** |
| Slot | `gear_back` (alternative au sac : sac **XOR** sangle) |
| Niveau requis | 1 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : selliers de Swilvane et échoppes des routes aériennes
- **Recette** : 2× toile légère + sangles renforcées *(`!sew`)*
- **Prix** : 280 Yrds (achat) · 70 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Faite de toile légère, cette sangle ne gêne pas le vol — priorité absolue chez les Sylph. Elle maintient deux armes plaquées dans le dos, même en piqué. Les duellistes aériens l'adoptent pour dégainer en plein ciel, un geste que les terriens trouvent proprement acrobatique.

## Intégration Bot
- Joueur : `!equiper HRN_003 dos` · `!sew` — GM : `!sys_give HRN_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, HRN_003, 1)`
