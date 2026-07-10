# Lueur Résiduelle

## Identification Cardinal
- **Item_ID** : `MAT_CUI_008`
- **Famille** : Cuir/Os · **Rareté** : Rare
- **Tier** : T2

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_SPR_003` Feu Follet Gris (taux 20%) > Terres Grises |
| Acheté par | `NPC_PEN_34` Marchand Lumière à 30 Yrds |
| Entre dans | `CSM_PAR_006`, `CSM_PAR_010` |
| Empilable | OUI (×99) |

## Lore
Quand un Feu Follet Gris se dissipe, il laisse derrière lui une Lueur Résiduelle — une membrane phosphorescente qui flotte comme une voile miniature avant de se replier sur elle-même. Le Marchand Lumière la capte dans des fioles de cristal pour éclairer les ruelles de Pénombre-les-Tours. On dit que ces lueurs réagissent à la présence d'esprits. Les collectionneurs les comparent à des bribes de rêves matérialisées.

## Intégration Bot
- Joueur : `!inspect MAT_CUI_008` — GM : `!sys_give MAT_CUI_008 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_CUI_008, Qty)`
