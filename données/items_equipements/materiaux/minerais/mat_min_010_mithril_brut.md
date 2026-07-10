# Mithril Brut

## Identification Cardinal
- **Item_ID** : `MAT_MIN_010`
- **Famille** : Minerai · **Rareté** : Épique
- **Tier** : T4

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Mine Mithril GRA, `ZONE_GNO_DUN_001` |
| Acheté par | Marchand Mithril `NPC_GRA_68` à 1 500 Yrds |
| Entre dans | `WPN_EP2_004`, `WPN_BOU_003`, `WPN_LAN_008` (Mithril Brokkheim) |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
Le mithril est un mythe que l'on peut toucher — si l'on survit assez longtemps pour descendre au fond de la Mine Mithril Abandonnée. Cette veine unique, gardée par les Golems de Cristal et les effondrements programmés, produit un métal plus léger que l'acier et plus dur que l'obsidienne. Les forgerons gnomes y consacrent leur vie. Chaque lingot de mithril qui remonte de la mine est un événement qui fait le tour des capitales en une heure. Son prix ? Si vous devez le demander, vous ne pouvez pas vous l'offrir.

## Intégration Bot
- Joueur : `!inspect MAT_MIN_010` — GM : `!sys_give MAT_MIN_010 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_MIN_010, Qty)`
