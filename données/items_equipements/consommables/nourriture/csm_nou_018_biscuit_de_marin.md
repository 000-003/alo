# Biscuit de Marin

## Identification Cardinal
- **Item_ID** : `CSM_NOU_018`
- **Catégorie** : Nourriture · **Type** : Ration neutre
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Rassasiement : régénère 11 HP/s hors combat pendant 60 s |
| Durée | 60 s (hors combat) |
| Cooldown | — (à la consommation) |
| Cumulable | NON — interrompu par le combat |

## Acquisition & Chaînage économique
- **Source** : comptoirs portuaires (Archipel d'Écume) et routes aériennes
- **Recette** : 1× Farine de racine dure + Sel-de-lune, double cuisson *(boulangerie)*
- **Prix** : 24 Yrds (achat) · 6 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Dur comme la pierre, ce biscuit se trempe dans l'eau ou la soupe pour redevenir mangeable — et se conserve alors indéfiniment. Il a traversé toutes les routes aériennes et tous les naufrages de l'Archipel. Les pirates du Grain Blanc en font provision, ce qui prouve qu'on peut haïr un aliment et en dépendre entièrement.

## Intégration Bot
- Joueur : `!use CSM_NOU_018` — GM : `!sys_give CSM_NOU_018 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_NOU_018, 1)`
