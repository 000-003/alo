# Heaume du Mercenaire des Neuf Vents

## Identification Cardinal
- **Item_ID** : `ARM_TET_084`
- **Slot** : Tête — Heaume · **Classe** : Plaque
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 25 · **Affinité raciale** : Aucune (objet neutre)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 61 |
| RES magique | 20 |
| Poids | 3,4 kg |
| Durabilité | 660 |
| Pénalité de vol | -3% |
| Bonus | +5 STR ; +5% dégâts par territoire racial visité (compteur Cardinal, max +45%... en théorie) |

## Acquisition & Chaînage économique
- **Source** : Comptoir des mercenaires d'Alne ; le prix est fixe, la réputation ne se négocie pas.
- **Recette** : Non craftable — chaque heaume est retiré à un mercenaire mort et reforgé (tradition du Comptoir).
- **Prix** : 5 400 Yrds (achat) · 1 350 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Les sans-bannière du Comptoir d'Alne servent n'importe quelle race, au tarif affiché. Leur heaume porte neuf encoches vides : une par territoire où son porteur a combattu. Aucun heaume complet n'a jamais été rendu au Comptoir — les neuf-encoches meurent riches, loin, ou changent de nom.

## Intégration Bot
- Joueur : `!equiper ARM_TET_084 tete` · `!inspect ARM_TET_084` — GM : `!sys_give ARM_TET_084 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_084, 1)`
