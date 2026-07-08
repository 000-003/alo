# Casque à Visière Rabattable

## Identification Cardinal
- **Item_ID** : `ARM_TET_057`
- **Slot** : Tête — Casque · **Classe** : Maille
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 12 · **Affinité raciale** : Leprechaun (+5% aux bonus si Leprechaun)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 30 (visière baissée) / 24 (relevée) |
| RES magique | 10 |
| Poids | 1,9 kg |
| Durabilité | 400 |
| Pénalité de vol | -1% |
| Bonus | +2 DEX, +2 VIT ; `!visiere` bascule entre mode combat (+DEF) et mode artisan (+5% qualité de craft) |

## Acquisition & Chaînage économique
- **Source** : Craft — compagnons de la Forge-Mère ; premier chef-d'œuvre imposé du cursus.
- **Recette** : 4× Maillon de fer + 1× Charnière de précision (drop `MOB_LEP_010-013`, Champs de Scories) + 1× Verre fumé.
- **Prix** : 1 100 Yrds (achat) · 275 Yrds (revente)

## Lore (Encyclopédie d'Argo)
L'examen de compagnon exige que la charnière survive à dix mille bascules — le Cardinal les compte. La philosophie leprechaun tient dans cet objet : le même métal doit savoir se battre et créer. Un compagnon qui perd son casque doit en reforger un ; l'acheter serait avouer que ses mains ont oublié.

## Intégration Bot
- Joueur : `!equiper ARM_TET_057 tete` · `!inspect ARM_TET_057` — GM : `!sys_give ARM_TET_057 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_057, 1)`
