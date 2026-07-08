# Diadème de la Nuit Sans Lune

## Identification Cardinal
- **Item_ID** : `ARM_TET_045`
- **Slot** : Tête — Diadème · **Classe** : Tissu
- **Tier** : T5 · **Rareté** : Légendaire
- **Niveau requis** : 46 · **Affinité raciale** : Imp (+5% aux bonus si Imp)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 142 |
| RES magique | 98 (dont +50 vs Ténèbres, -15 vs Lumière) |
| Poids | 0,2 kg |
| Durabilité | 1 050 |
| Pénalité de vol | 0% |
| Bonus | +20% dégâts de magie de Ténèbres ; « Éclipse » (`!activer eclipse`, 1×/jour) : 10s d'invisibilité totale pour le groupe |

## Acquisition & Chaînage économique
- **Source** : Craft unique — requiert le titre « Voix du Silence » (Caverne des Hurleurs terminée sans déclencher une seule fois la jauge de Vacarme).
- **Recette** : 1× Corde vocale de Skreech (drop garanti premier kill `BOSS_IMP_DUN_001`) + 5× Essence d'ombre pure + 1× Fil de mithril noirci (Brokkheim, commande spéciale d'Umbra).
- **Prix** : Invendable (lié à l'âme).

## Lore (Encyclopédie d'Argo)
Le Cardinal n'a programmé aucune nuit sans lune à ALfheim — sauf une par an, dont ce diadème serait le fragment. Quand l'Éclipse s'active, les groupes WhatsApp de la zone reçoivent un unique message système : « ... ». Les Imps considèrent ces trois points comme la plus belle phrase jamais écrite.

## Intégration Bot
- Joueur : `!equiper ARM_TET_045 tete` · `!inspect ARM_TET_045` — GM : `!sys_give ARM_TET_045 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_045, 1)`
