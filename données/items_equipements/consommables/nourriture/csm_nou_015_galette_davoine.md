# Galette d'Avoine

## Identification Cardinal
- **Item_ID** : `CSM_NOU_015`
- **Catégorie** : Nourriture · **Type** : Ration neutre
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Rassasiement : régénère 7 HP/s hors combat pendant 60 s |
| Durée | 60 s (hors combat) |
| Cooldown | — (à la consommation) |
| Cumulable | NON — interrompu par le combat |

## Acquisition & Chaînage économique
- **Source** : boulangeries (toutes villes)
- **Recette** : 1× avoine + 1× miel commun *(boulangerie)*
- **Prix** : 22 Yrds (achat) · 5 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Plate, dorée, légèrement sucrée au miel, la galette d'avoine se glisse dans une poche et se grignote en chemin. C'est le goûter des jeunes aventuriers et le remords des vétérans nostalgiques. Rien d'héroïque là-dedans — juste de quoi tenir jusqu'à la prochaine taverne sans que le ventre ne gronde en pleine embuscade.

## Intégration Bot
- Joueur : `!use CSM_NOU_015` — GM : `!sys_give CSM_NOU_015 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_NOU_015, 1)`
