# Fleur de Lune

## Identification Cardinal
- **Item_ID** : `MAT_HRB_008`
- **Famille** : Plante · **Rareté** : Rare
- **Tier** : T2

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Cloître Renversé |
| Acheté par | Alchimiste Ombres `NPC_PEN_35` à 5 Yrds |
| Entre dans | `CSM_POT_030`, `CSM_POT_016` (Fleur de lune) |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
Une fleur luminescente qui croît dans les ruines retournées du cloître de Penfeld. Ses pétales blancs émettent une lueur douce comparable à celle de la pleine lune. Les alchimistes l'utilisent pour créer des potions de vision nocturne. Elle se fane instantanément si elle est exposée à la lumière directe du soleil. Les moines du cloître la considéraient comme un don des astres.

## Intégration Bot
- Joueur : `!inspect MAT_HRB_008` — GM : `!sys_give MAT_HRB_008 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_HRB_008, Qty)`
