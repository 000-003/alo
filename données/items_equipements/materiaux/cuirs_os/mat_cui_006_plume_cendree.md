# Plume Cendrée

## Identification Cardinal
- **Item_ID** : `MAT_CUI_006`
- **Famille** : Cuir/Os · **Rareté** : Commun
- **Tier** : T1

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_SPR_001` Corbeau Spectral (taux 50%) > Ruines Noires |
| Acheté par | `NPC_PEN_51` Marchand Plume à 8 Yrds |
| Entre dans | `WPN_ARC_001`, `WPN_JET_001` |
| Empilable | OUI (×99) |

## Lore
Les Corbeaux Spectraux des Ruines Noires perdent leurs plumes cendrées en vol, et celles-ci flottent longtemps avant de toucher le sol. Les collecteurs les attrapent au vol, car une fois tombées dans la poussière noire des ruines, elles perdent leur éclat. Le Marchand Plume les utilise pour confectionner des écritoires de luxe. Chaque plume conserve une infime rémanence magique qui améliore la calligraphie.

## Intégration Bot
- Joueur : `!inspect MAT_CUI_006` — GM : `!sys_give MAT_CUI_006 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_CUI_006, Qty)`
