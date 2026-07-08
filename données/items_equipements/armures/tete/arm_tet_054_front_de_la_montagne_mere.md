# Front de la Montagne-Mère

## Identification Cardinal
- **Item_ID** : `ARM_TET_054`
- **Slot** : Tête — Heaume · **Classe** : Plaque
- **Tier** : T5 · **Rareté** : Légendaire
- **Niveau requis** : 46 · **Affinité raciale** : Gnome (+5% aux bonus si Gnome)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 180 |
| RES magique | 65 (dont +30 vs Terre, -10 vs Vent) |
| Poids | 4,5 kg |
| Durabilité | 1 200 |
| Pénalité de vol | -6% |
| Bonus | +10 VIT ; « Racines » (`!activer racines`, 1×/combat) : 15s d'immunité au recul, à la projection et au renversement, +25% DEF |

## Acquisition & Chaînage économique
- **Source** : Craft unique — requiert le titre « Pilier de Granzam » (100 heures de défense de zone comptabilisées par le Cardinal).
- **Recette** : 1× Cœur du Filon (drop garanti premier kill `BOSS_GNO_DUN_001`, Mithrandur) + 1× Lingot de mithril pur + 9× Bloc de granit + 1× Cœur de golem majeur.
- **Prix** : Invendable (lié à l'âme).

## Lore (Encyclopédie d'Argo)
Le mythe gnome dit que la première montagne d'ALfheim refusa l'ordre du Cardinal de s'aplanir pour les plaines sylphes — l'IA, beau joueur, la laissa debout et en fit Granzam. Ce heaume serait taillé dans son sommet. Quand « Racines » s'active, le sol du groupe WhatsApp affiche un seul mot système : **« Immobile. »**

## Intégration Bot
- Joueur : `!equiper ARM_TET_054 tete` · `!inspect ARM_TET_054` — GM : `!sys_give ARM_TET_054 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_054, 1)`
