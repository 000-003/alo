# Heaume du Cœur de Forge

## Identification Cardinal
- **Item_ID** : `ARM_TET_018`
- **Slot** : Tête — Heaume · **Classe** : Plaque
- **Tier** : T5 · **Rareté** : Légendaire
- **Niveau requis** : 46 · **Affinité raciale** : Salamander (+5% aux bonus si Salamander)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 165 |
| RES magique | 70 (dont +40 vs Feu, -15 vs Glace) |
| Poids | 4,5 kg |
| Durabilité | 1 200 |
| Pénalité de vol | -5% |
| Bonus | +8 STR, +8 VIT ; jauge de Surchauffe gelée pendant 60s après activation (`!activer coeur_de_forge`, 1×/combat) |

## Acquisition & Chaînage économique
- **Source** : Craft unique — forgé conjointement par Kagemune (`NPC_GAT_01`) et le Grand Forgeron Brokk IX (`NPC_BRO_01`) : seule collaboration inter-raciale connue de la Grande Forge.
- **Recette** : 1× Fragment du Dernier Géant (drop `BOSS_SAL_DUN_001`, Logi) + 1× Lingot de mithril pur (Brokkheim) + 8× Braise éternelle.
- **Prix** : Invendable (lié à l'âme).

## Lore (Encyclopédie d'Argo)
Quand Logi s'effondre, un éclat de son cœur de braise reste incandescent des jours entiers. Kagemune a juré qu'aucune forge salamander n'était assez froide pour le travailler — il a fallu l'humilité d'aller à Brokkheim. Le heaume qui en résulte respire : ses fentes rougeoient au rythme du pouls du porteur.

## Intégration Bot
- Joueur : `!equiper ARM_TET_018 tete` · `!inspect ARM_TET_018` — GM : `!sys_give ARM_TET_018 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_018, 1)`
