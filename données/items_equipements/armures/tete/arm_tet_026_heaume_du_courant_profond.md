# Heaume du Courant Profond

## Identification Cardinal
- **Item_ID** : `ARM_TET_026`
- **Slot** : Tête — Heaume · **Classe** : Maille
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 39 · **Affinité raciale** : Undine (+5% aux bonus si Undine)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 100 |
| RES magique | 45 (dont +30 vs Eau) |
| Poids | 2,0 kg |
| Durabilité | 870 |
| Pénalité de vol | -2% |
| Bonus | +5 VIT ; réduit de 35% la consommation de la jauge d'Apnée (D11) ; vision normale dans la pénombre sous-marine |

## Acquisition & Chaînage économique
- **Source** : Craft — tanneurs et forgerons de l'Archipel, plan drop de l'étage 2 du Gouffre de Léviathan.
- **Recette** : 8× Écaille abyssale + 1× Vessie lumineuse (drop `MOB_UND_031`, étage 2) + 2× Maillon d'argent.
- **Prix** : 18 000 Yrds (achat) · 4 500 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Pensé pour l'étage noir du Gouffre, là où même les Undines paniquent. La visière est une membrane d'écailles translucides qui amplifie la moindre bioluminescence. Les raiders l'appellent « le troisième poumon » : avec lui, on compte ses messages d'Apnée avec arrogance plutôt qu'avec terreur.

## Intégration Bot
- Joueur : `!equiper ARM_TET_026 tete` · `!inspect ARM_TET_026` — GM : `!sys_give ARM_TET_026 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_026, 1)`
