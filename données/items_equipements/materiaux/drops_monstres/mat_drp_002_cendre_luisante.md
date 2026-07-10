# Cendre Luisante

## Identification Cardinal
- **Item_ID** : `MAT_DRP_002`
- **Famille** : Drop de monstre · **Commun**
- **Tier** : T1

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_LEP_003` Feu Follet (taux 25%) |
| Acheté par | `NPC_BRO_52` à 50 Yrds |
| Entre dans | `CSM_POT_011`, `CSM_PAR_011` |
| Empilable | OUI (×99) |

## Lore
Lorsqu'un Feu Follet s'éteint, il ne reste de lui qu'une fine poudre grise qui luit encore faiblement dans l'obscurité. Cette cendre conserve une parcelle de l'essence lumineuse du défunt esprit. Les marchands de lumière l'utilisent pour fabriquer des bougies perpétuelles qui ne s'éteignent jamais. Les mineurs y voient une compagne fiable pour les galeries les plus profondes.

## Intégration Bot
- Joueur : `!inspect MAT_DRP_002` — GM : `!sys_give MAT_DRP_002 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_DRP_002, Qty)`
