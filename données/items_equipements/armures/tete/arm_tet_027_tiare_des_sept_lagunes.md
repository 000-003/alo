# Tiare des Sept Lagunes

## Identification Cardinal
- **Item_ID** : `ARM_TET_027`
- **Slot** : Tête — Tiare · **Classe** : Tissu
- **Tier** : T5 · **Rareté** : Légendaire
- **Niveau requis** : 45 · **Affinité raciale** : Undine (+5% aux bonus si Undine)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 150 |
| RES magique | 95 (dont +45 vs Eau) |
| Poids | 0,3 kg |
| Durabilité | 1 100 |
| Pénalité de vol | 0% |
| Bonus | +25% puissance des soins ; `Revive` coûte -30% MP ; +8 INT ; l'aura « Marée Douce » régénère 0,5% HP/10s aux alliés du groupe |

## Acquisition & Chaînage économique
- **Source** : Craft unique — requiert le titre « Bénie des Lagunes » (chaîne de quêtes des sept îles de l'Archipel, complétée à 100%).
- **Recette** : 1× Larme de Jörmun (drop garanti premier kill `BOSS_UND_DUN_001`) + 7× Perle du courant profond + 1× Fil de mithril pur (Brokkheim).
- **Prix** : Invendable (liée à l'âme).

## Lore (Encyclopédie d'Argo)
Sept perles, une par lagune de l'Archipel, montées autour d'une goutte figée que le Cardinal nomme « Larme de Jörmun ». La légende implantée dit que le Léviathan pleura une seule fois : quand The Seed lui apprit qu'il était un gardien, pas un prisonnier. Les grands clercs undines portent cette tiare aux résurrections publiques — l'eau du monde entier semble alors retenir son souffle.

## Intégration Bot
- Joueur : `!equiper ARM_TET_027 tete` · `!inspect ARM_TET_027` — GM : `!sys_give ARM_TET_027 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_027, 1)`
