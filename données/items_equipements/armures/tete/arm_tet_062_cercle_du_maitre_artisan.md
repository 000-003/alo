# Cercle du Maître-Artisan

## Identification Cardinal
- **Item_ID** : `ARM_TET_062`
- **Slot** : Tête — Cercle · **Classe** : Maille (or et mithril)
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 39 · **Affinité raciale** : Leprechaun (+5% aux bonus si Leprechaun)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 85 |
| RES magique | 46 |
| Poids | 0,7 kg |
| Durabilité | 850 |
| Pénalité de vol | 0% |
| Bonus | +15% qualité de craft ; 5% de chance de ne consommer aucun matériau ; +10% prix de vente des objets craftés soi-même |

## Acquisition & Chaînage économique
- **Source** : Unique par joueur — remis par Brokk IX (`NPC_BRO_01`) au rang « Maître » de la guilde des artisans (chef-d'œuvre validé par vote des maîtres).
- **Recette** : Non craftable, non échangeable.
- **Prix** : Invendable (lié au compte).

## Lore (Encyclopédie d'Argo)
Chaque maître de Brokkheim porte ce cercle, forgé par le précédent maître qu'il remplace — la chaîne remonte, dit-on, jusqu'à Brokk Ier. Le bonus de matériaux n'est pas de la magie : c'est la main qui ne tremble plus. Le Cardinal ne fait qu'entériner comptablement la perfection.

## Intégration Bot
- Joueur : `!equiper ARM_TET_062 tete` · `!inspect ARM_TET_062` — GM : `!sys_give ARM_TET_062 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_062, 1)`
