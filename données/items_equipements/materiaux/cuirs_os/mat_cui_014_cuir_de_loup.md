# Cuir de Loup

## Identification Cardinal
- **Item_ID** : `MAT_CUI_014`
- **Famille** : Cuir/Os · **Rareté** : Rare
- **Tier** : T2

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_CAI_001` Loup des Plaines (taux 30%) > Plaine Freelia |
| Acheté par | `NPC_FRE_61` Vétérinaire à 22 Yrds |
| Entre dans | `BAG_004`, `HRN_004`, `ARM_TET_041` |
| Empilable | OUI (×99) |

## Lore
Les Loups des Plaines de Freelia ont un cuir épais et souple à la fois, parfait pour les harnais et les sacoches de voyage. Le Vétérinaire local l'achète pour confectionner des harnais orthopédiques pour les montures blessées. Les tanneurs de Freelia ont développé un procédé de tannage à l'écorce de chêne noir qui rend ce cuir imperméable. Chaque peau est marquée du sceau du tanneur avant d'être mise en vente.

## Intégration Bot
- Joueur : `!inspect MAT_CUI_014` — GM : `!sys_give MAT_CUI_014 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_CUI_014, Qty)`
