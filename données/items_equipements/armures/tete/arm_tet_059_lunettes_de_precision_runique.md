# Lunettes de Précision Runique

## Identification Cardinal
- **Item_ID** : `ARM_TET_059`
- **Slot** : Tête — Lunettes · **Classe** : Maille (monture)
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 23 · **Affinité raciale** : Leprechaun (+5% aux bonus si Leprechaun)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 42 |
| RES magique | 26 |
| Poids | 0,3 kg |
| Durabilité | 520 |
| Pénalité de vol | 0% |
| Bonus | +10% qualité de craft (toutes disciplines) ; `!inspect` révèle la durabilité exacte et les enchantements cachés des objets |

## Acquisition & Chaînage économique
- **Source** : Craft — Marchand d'Enclumes Rune (`NPC_BRO_03`), qui grave lui-même les runes de loupe.
- **Recette** : 2× Verre de quartz pur (drop `MOB_LEP_020-024`, `ZONE_LEP_HUNT_002`) + 3× Maillon d'argent + 1× Poudre de rune.
- **Prix** : 4 900 Yrds (achat) · 1 225 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Les runes gravées sur le pourtour des verres décomposent la lumière en données : le porteur voit littéralement les statistiques du monde flotter sur les objets. Rune facture une fortune et prévient chaque client : « Tu verras aussi les défauts de ton propre travail. Certains préfèrent rendre les lunettes. »

## Intégration Bot
- Joueur : `!equiper ARM_TET_059 tete` · `!inspect ARM_TET_059` — GM : `!sys_give ARM_TET_059 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_059, 1)`
