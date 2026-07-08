# Cimier de l'Archonte

## Identification Cardinal
- **Item_ID** : `ARM_TET_091`
- **Slot** : Tête — Cimier · **Classe** : Maille
- **Tier** : T5 · **Rareté** : Épique (drop de boss)
- **Niveau requis** : 43 · **Affinité raciale** : Aucune (drop universel)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 130 |
| RES magique | 72 (dont +30 vs Vent) |
| Poids | 1,4 kg |
| Durabilité | 1 000 |
| Pénalité de vol | 0% |
| Bonus | +7 AGI ; le double saut aérien devient triple ; immunité aux bourrasques de projection |

## Acquisition & Chaînage économique
- **Source** : Drop direct — Aeris, Archonte du Vent Hurlant (`BOSS_SYL_DUN_001`), taux 8%.
- **Recette** : Non craftable ; recyclable en 2× Cristal de rafale + 1× Plume de l'Archonte.
- **Prix** : Revente 9 800 Yrds · échangeable entre joueurs.

## Lore (Encyclopédie d'Argo)
Un fragment de la crête d'Aeris, encore parcouru de micro-cyclones. Le Donjon du Vent Hurlant le reprend parfois : un porteur vaincu à l'intérieur voit le cimier s'envoler vers la salle du boss. Les Sylphs y voient une leçon d'humilité ; les autres races, un excellent argument pour revendre l'objet à Swilvane.

## Intégration Bot
- Joueur : `!equiper ARM_TET_091 tete` · `!inspect ARM_TET_091` — GM : `!sys_give ARM_TET_091 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_091, 1)`
