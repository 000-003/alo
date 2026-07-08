# Masque de la Forge-Mère

## Identification Cardinal
- **Item_ID** : `ARM_TET_061`
- **Slot** : Tête — Masque intégral · **Classe** : Plaque
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 36 · **Affinité raciale** : Leprechaun (+5% aux bonus si Leprechaun)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 96 |
| RES magique | 50 (dont +35 vs Feu) |
| Poids | 3,1 kg |
| Durabilité | 900 |
| Pénalité de vol | -3% |
| Bonus | +5 VIT, +5 DEX ; réduit de 50% l'accumulation de la jauge HEAT (D12) ; permet de forger sans station dans les zones volcaniques |

## Acquisition & Chaînage économique
- **Source** : Craft — Forge-Mère exclusivement ; le moule appartient à Brokk IX (`NPC_BRO_01`) et ne quitte jamais Brokkheim.
- **Recette** : 3× Fragment de fer météorique + 4× Plaque d'acier + 2× Verre de quartz pur + 1× Cœur de fournaise (drop `MOB_LEP_026`, boss de zone).
- **Prix** : 17 000 Yrds (achat) · 4 250 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Réplique du visage de la Forge-Mère elle-même — la grande idole de fonte qui surplombe les ateliers. Le porter, c'est travailler « sous son regard, de l'intérieur ». Les maîtres l'utilisent pour forger dans la Désolation de Magma salamander, où le minerai se travaille encore chaud du sol.

## Intégration Bot
- Joueur : `!equiper ARM_TET_061 tete` · `!inspect ARM_TET_061` — GM : `!sys_give ARM_TET_061 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_061, 1)`
