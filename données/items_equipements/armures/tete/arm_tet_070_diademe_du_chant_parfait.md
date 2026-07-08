# Diadème du Chant Parfait

## Identification Cardinal
- **Item_ID** : `ARM_TET_070`
- **Slot** : Tête — Diadème · **Classe** : Tissu
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 36 · **Affinité raciale** : Puca (+5% aux bonus si Puca)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 87 |
| RES magique | 54 |
| Poids | 0,3 kg |
| Durabilité | 800 |
| Pénalité de vol | 0% |
| Bonus | +20% portée et +15% durée des mélodies ; +6 CHA ; une mélodie maintenue 60s sans interruption devient permanente jusqu'au changement de zone |

## Acquisition & Chaînage économique
- **Source** : Craft d'élite — luthiers de Lioda, sur commande du Conservatoire.
- **Recette** : 1× Corde de l'ancien orgue (drop `MOB_PUC_026`, boss de zone) + 4× Acier chantant + 2× Gemme d'ambre.
- **Prix** : 16 800 Yrds (achat) · 4 200 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le Conservatoire de Lioda définit le « chant parfait » comme une note tenue si juste que le monde oublie qu'elle a commencé. Ce diadème en est l'outil de travail : il soutient la voix comme une seconde gorge. Les porteurs finissent par fredonner dans leur sommeil — les auberges de Lioda facturent ces chambres plus cher, « avec berceuse ».

## Intégration Bot
- Joueur : `!equiper ARM_TET_070 tete` · `!inspect ARM_TET_070` — GM : `!sys_give ARM_TET_070 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_070, 1)`
