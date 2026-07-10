# Glande Bouillante

## Identification Cardinal
- **Item_ID** : `MAT_CUI_003`
- **Famille** : Cuir/Os · **Rareté** : Rare
- **Tier** : T2

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_LEP_001` Salamandre Vapeur (taux 25%) > Vallée Geysers |
| Acheté par | `NPC_BRO_28` Alchimiste à 35 Yrds |
| Entre dans | `CSM_POT_020`, `WPN_DAG_004` |
| Empilable | OUI (×99) |

## Lore
Les Salamandres Vapeur des Vallées de Geysers produisent ces glandes surchauffées pour réguler leur température interne. Lorsqu'elles sont extraites, elles luisent d'une faible chaleur rougeoyante et restent brûlantes pendant des heures. L'Alchimiste de la guilde de Bronzebourg les recherche pour ses mixtures incendiaires. On dit qu'une seule glande peut alimenter un brasero pendant toute une nuit d'hiver. Leur manipulation requiert des gants en cuir épais.

## Intégration Bot
- Joueur : `!inspect MAT_CUI_003` — GM : `!sys_give MAT_CUI_003 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_CUI_003, Qty)`
