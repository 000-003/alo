# Fleur des Forges

## Identification Cardinal
- **Item_ID** : `MAT_HRB_017`
- **Famille** : Plante · **Rareté** : Rare
- **Tier** : T2

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Halle Marteau |
| Acheté par | Marchand Étoffes `NPC_BRO_36` à 4 Yrds |
| Entre dans | `CSM_POT_033`, `CSM_POT_036` |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
Cette fleur étrange pousse dans les scories refroidies autour de la Halle Marteau de Brotonne. Ses pétales métalliques arborent des teintes rouille et cuivre. Les teinturiers en extraient un pigment ocre qui résiste aux lessives les plus fortes. Elle absorbe les particules de fer dans le sol et les transforme en pigments. Les forgerons l'accrochent à leur enclume comme porte-bonheur.

## Intégration Bot
- Joueur : `!inspect MAT_HRB_017` — GM : `!sys_give MAT_HRB_017 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_HRB_017, Qty)`
