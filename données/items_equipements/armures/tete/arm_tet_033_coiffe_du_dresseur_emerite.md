# Coiffe du Dresseur Émérite

## Identification Cardinal
- **Item_ID** : `ARM_TET_033`
- **Slot** : Tête — Coiffe · **Classe** : Cuir
- **Tier** : T3 · **Rareté** : Épique
- **Niveau requis** : 28 · **Affinité raciale** : Cait Sith (+5% aux bonus si Cait Sith)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 48 |
| RES magique | 22 |
| Poids | 0,9 kg |
| Durabilité | 520 |
| Pénalité de vol | 0% |
| Bonus | +15% XP des familiers ; +1 emplacement de familier actif ; les familiers gagnent +10% dégâts |

## Acquisition & Chaînage économique
- **Source** : Unique par joueur — remise par la Dresseuse Mira (`NPC_FRE_10`) à la maîtrise du rang « Dresseur Émérite » (5 familiers montés au rang C).
- **Recette** : Non craftable, non échangeable.
- **Prix** : Invendable (liée au compte).

## Lore (Encyclopédie d'Argo)
Chaque plume, chaque croc et chaque grelot cousus sur la coiffe vient d'un familier que le porteur a élevé — Mira les prélève sans douleur, avec le consentement de la bête, affirme-t-elle. Les familiers étrangers obéissent mieux à qui la porte : ils sentent l'odeur de dizaines de compagnons heureux.

## Intégration Bot
- Joueur : `!equiper ARM_TET_033 tete` · `!inspect ARM_TET_033` — GM : `!sys_give ARM_TET_033 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_033, 1)`
