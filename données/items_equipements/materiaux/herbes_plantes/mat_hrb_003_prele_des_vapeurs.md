# Prêle des Vapeurs

## Identification Cardinal
- **Item_ID** : `MAT_HRB_003`
- **Famille** : Plante · **Rareté** : Commun
- **Tier** : T1

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Canaux Refroid BRO |
| Acheté par | Alchimiste Eaux `NPC_BRO_28` à 3 Yrds |
| Entre dans | `CSM_POT_011`, `CSM_NOU_001` |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
Cette prêle pousse dans les zones humides des canaux de refroidissement de Brotonne. Ses tiges creuses sont gorgées d'une sève claire aux propriétés purifiantes. Les alchimistes l'utilisent comme base pour les potions d'eau pure. Elle filtre naturellement les impuretés des fluides ambiants. Les rats d'égout semblent inexplicablement attirés par son odeur.

## Intégration Bot
- Joueur : `!inspect MAT_HRB_003` — GM : `!sys_give MAT_HRB_003 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_HRB_003, Qty)`
