# Lunettes d'Apprenti Forgeron

## Identification Cardinal
- **Item_ID** : `ARM_TET_055`
- **Slot** : Tête — Lunettes · **Classe** : Cuir
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Leprechaun (+5% aux bonus si Leprechaun)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 7 |
| RES magique | 3 (dont +3 vs Feu) |
| Poids | 0,2 kg |
| Durabilité | 170 |
| Pénalité de vol | 0% |
| Bonus | +3% qualité de craft (Forge) ; immunise aux étincelles |

## Acquisition & Chaînage économique
- **Source** : Marchand d'Enclumes Rune (`NPC_BRO_03`), Halle du Marteau de Brokkheim (`ZONE_LEP_CAP_001`).
- **Recette** : 1× Cuir souple + 2× Verre fumé (récolte, périphérie de Brokkheim).
- **Prix** : 150 Yrds (achat) · 37 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Premier achat obligatoire de tout apprenti à la Forge-Mère : Brokk IX renvoie quiconque se présente sans elles. Les verres fumés sont coulés dans les scories mêmes de la forge — « pour que l'outil connaisse déjà la maison ». Les rayures sur les verres sont un CV : plus il y en a, plus l'apprenti a survécu d'erreurs.

## Intégration Bot
- Joueur : `!equiper ARM_TET_055 tete` · `!inspect ARM_TET_055` — GM : `!sys_give ARM_TET_055 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_055, 1)`
