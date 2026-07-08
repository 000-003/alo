# Masque Fêlé d'Apprenti

## Identification Cardinal
- **Item_ID** : `ARM_TET_074`
- **Slot** : Tête — Masque · **Classe** : Cuir
- **Tier** : T1 · **Rareté** : Peu commun
- **Niveau requis** : 6 · **Affinité raciale** : Spriggan (+5% aux bonus si Spriggan)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 11 |
| RES magique | 7 (dont +3 vs Illusion) |
| Poids | 0,4 kg |
| Durabilité | 190 |
| Pénalité de vol | 0% |
| Bonus | +2 INT ; +4% durée des illusions lancées |

## Acquisition & Chaînage économique
- **Source** : Craft — masquiers de Penwether ; la fêlure est faite exprès, au ciseau rituel.
- **Recette** : 2× Cuir souple + 1× Éclat de miroir ancien (drop `MOB_SPR_001-002`, périphérie de Penwether).
- **Prix** : 310 Yrds (achat) · 77 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Tout illusionniste spriggan commence avec un masque volontairement fêlé : « une illusion parfaite est un mensonge, une illusion fêlée est un art ». La fissure laisse voir un bout du vrai visage — l'apprenti apprend à faire douter, pas à tromper. Refermer la fêlure au craft est l'examen de sortie.

## Intégration Bot
- Joueur : `!equiper ARM_TET_074 tete` · `!inspect ARM_TET_074` — GM : `!sys_give ARM_TET_074 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_074, 1)`
