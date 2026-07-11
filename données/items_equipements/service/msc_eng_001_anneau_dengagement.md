# Anneau d'Engagement (Ring of Betrothal)

> **Item de service dédié** (décision PE, étape 43) : jeton social **non équipable, sans stat de combat**. Résout le `[BESOIN_ITEM]` de CDC-SOC-01. Supersede la bague à stats `ACC_ANN_003` du lot accessoires gelé (redirigée).

## Identification Cardinal
- **Item_ID** : `MSC_ENG_001`
- **Catégorie** : Divers (`item_type = 'MSC'`) · **Type** : Jeton de mariage
- **Tier** : T2 · **Rareté** : Rare
- **Niveau requis** : 15 (= prérequis de mariage) · **Affinité raciale** : Aucune
- **Équipable** : NON (aucun slot ; ne confère **aucune** statistique) · **Lié** : OUI (`is_bound = TRUE`, non revendable, non échangeable)

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Débloque `!propose` / `!accept_proposal` (prérequis de contrat de mariage, `T_MARRIAGES` M3) |
| Possession requise | Les **deux** fiancés doivent en détenir un au moment de la cérémonie |
| Consommation | **Consommé à la cérémonie** (les deux anneaux, échange symbolique) — pas de réutilisation, gold sink assumé |
| Stat de combat | **Aucune** (ce n'est pas un accessoire ; le +5 % de l'ancien `ACC_ANN_003` est supprimé) |
| Cumulable | NON (`max_stack = 1`) |

## Acquisition & Chaînage économique
- **Source** : **Bijoutier PNJ** (`role_type = SERVICE`) — Alne et capitales raciales. Vente uniquement, jamais en loot.
- **Prix** : 50 000 Yrds (achat) · **0 Yrd** (revente — item lié, non revendable)
- **Rôle économique** : puits d'or (gold sink) de rite de passage ; consommé à chaque mariage ⇒ coût réel = 50 000 × 2 (un par fiancé).

## Lore (Encyclopédie d'Argo)
Un anneau d'or pâle gravé de runes elfiques qui ne s'illuminent qu'à l'approche de son jumeau. Le Système Cardinal ne reconnaît pas les serments prononcés à la légère : il exige que chacun ait payé le prix de l'anneau, puis les dissout tous deux dans la lumière de la cérémonie — car un engagement scellé ne se reprend pas d'une main. Les bijoutiers d'Alne murmurent qu'aucune paire n'a jamais brillé du même éclat deux fois.

## Intégration Bot
- Joueur : `!buy MSC_ENG_001` (chez un bijoutier), puis `!propose [Num]` — GM : `!sys_give MSC_ENG_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MSC_ENG_001, 1)`
- Consommation gérée par le moteur déterministe L1 à l'activation de `SYS_GENERATE_CEREMONY` (retire 1× `MSC_ENG_001` à chaque conjoint).
