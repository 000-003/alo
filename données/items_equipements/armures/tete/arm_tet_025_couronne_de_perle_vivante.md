# Couronne de Perle Vivante

## Identification Cardinal
- **Item_ID** : `ARM_TET_025`
- **Slot** : Tête — Couronne · **Classe** : Tissu
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 36 · **Affinité raciale** : Undine (+5% aux bonus si Undine)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 90 |
| RES magique | 60 (dont +25 vs Eau) |
| Poids | 0,4 kg |
| Durabilité | 830 |
| Pénalité de vol | 0% |
| Bonus | +18% puissance des soins ; les soins critiques appliquent un bouclier de 10% HP max à la cible |

## Acquisition & Chaînage économique
- **Source** : Craft d'élite — joailliers de l'Archipel d'Écume, sur commande.
- **Recette** : 1× Perle du courant profond (drop `MOB_UND_026`, boss de zone du Marais) + 6× Perle laiteuse + 2× Gemme saphir (import Gnome).
- **Prix** : 16 500 Yrds (achat) · 4 100 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La perle centrale n'a jamais été extraite de son huître : l'huître entière est sertie dans la couronne, vivante, nourrie par le mana du porteur. Elle s'entrouvre lorsque quelqu'un ment à proximité — les Undines n'expliquent pas pourquoi et jurent que c'est un hasard statistique. Personne ne les croit.

## Intégration Bot
- Joueur : `!equiper ARM_TET_025 tete` · `!inspect ARM_TET_025` — GM : `!sys_give ARM_TET_025 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_025, 1)`
