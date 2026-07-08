# Heaume d'Alliage Étoilé

## Identification Cardinal
- **Item_ID** : `ARM_TET_060`
- **Slot** : Tête — Heaume · **Classe** : Plaque
- **Tier** : T3 · **Rareté** : Épique
- **Niveau requis** : 28 · **Affinité raciale** : Leprechaun (+5% aux bonus si Leprechaun)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 64 |
| RES magique | 22 |
| Poids | 2,2 kg (alliage allégé) |
| Durabilité | 700 |
| Pénalité de vol | -2% |
| Bonus | +4 VIT, +4 DEX ; la durabilité de tout l'équipement porté décroît 20% plus lentement |

## Acquisition & Chaînage économique
- **Source** : Craft — Forge-Mère, sous supervision du Grand Forgeron Brokk IX (`NPC_BRO_01`).
- **Recette** : 2× Fragment de fer météorique (drop `MOB_LEP_025`, mini-boss des Champs de Scories) + 4× Plaque d'acier + 1× Poudre de rune.
- **Prix** : 6 200 Yrds (achat) · 1 550 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le fer météorique des Champs de Scories vient, selon le lore du Cardinal, d'étoiles que The Seed a éteintes pour économiser des cycles de calcul. L'alliage en garde une rancune tenace : il refuse de s'user. Brokk IX n'en forge que sous serment que le heaume ne servira jamais contre Brokkheim.

## Intégration Bot
- Joueur : `!equiper ARM_TET_060 tete` · `!inspect ARM_TET_060` — GM : `!sys_give ARM_TET_060 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_060, 1)`
