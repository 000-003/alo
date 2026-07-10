# Pétard de Signalisation

## Identification Cardinal
- **Item_ID** : `EXP_009`
- **Famille** : Explosif · **Rareté** : Commun
- **Tier** : T1

## Stats
| Valeur |
|---|
| Dégâts : 0 (signal lumineux/audible) |

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Artisanat alchimique |
| Signature | Voulg |
| Acheté par | `NPC_BRO_52` Marchand Charbon à 40 Yrds |
| Empilable | OUI (×30) |

## Lore
Plus bruyant que dangereux, le pétard de signalisation est utilisé par les chariots de marchandises pour signaler leur passage dans les cols brumeux de Brousse. Le Marchand Charbon en vend par lots, affirmant que rien ne réveille mieux un conducteur endormi.

## Intégration Bot
- Joueur : `!inspect EXP_009` — GM : `!sys_give EXP_009 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, EXP_009, Qty)`
