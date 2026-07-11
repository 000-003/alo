# Le Prix du Silence — `QST_BRO_AFF_01`

## Identification
- **QST_ID** : `QST_BRO_AFF_01`
- **Type** : side (affinité)
- **Donneur** : `NPC_BRO_55` (vérifié) — Vétéran Guerres (Leprechaun, Halle Marteau, alcôve des vétérans)
- **Prérequis** : Niveau 40 · `min_affinity_tier: confidant` · `qi_unlocked: QI_BRO_55_04` (il t'a révélé que le vrai traité existe, scellé sous la Halle)
- **Récompense** : 3 000 EXP · 2 500 Yrds · Accès info (débloque `QI_BRO_55_08` — la visite annuelle des émissaires Gnomes) · `[BESOIN_TITRE: TITLE_GARDIEN_SILENCE — « Gardien du Silence »]`

> **Raison intime du donneur** : Négociateur du traité de paix Leprechaun-Gnome, le Vétéran cache que le vrai document contient une clause de cession territoriale — un pan d'histoire vendu pour que Brokkheim garde son accès à l'Enclume. Chaque année, des émissaires Gnomes viennent vérifier l'application de cette clause, et le Vétéran les reçoit dans la honte. Vieillissant, il ne peut plus faire le trajet discret ; il ne confie ce déshonneur qu'à un proche qui a déjà touché du doigt le secret de la cache.

## Déroulement (étapes)

```jsonc
// objective_json
{
  "step_1": { "type": "retrieve", "target": "SCEAU_DE_CESSION", "count": 1 },  // récupérer le pli scellé sous la Halle
  "step_2": { "type": "deliver",  "target": "NPC_GRA_92", "count": 1 },        // remettre à l'émissaire Gnome (courtier d'Alne/Granzam)
  "step_3": { "type": "escort",   "target": "EMISSAIRE_GNOME", "count": 1 }     // veiller à son départ discret
}
```
`total_steps: 3`

1. Récupérer le pli scellé de cession dans la cache sous la Halle Marteau que le Vétéran t'indique.
2. Le remettre discrètement à l'émissaire Gnome venu de Granzam (`NPC_GRA_92`, courtier).
3. Escorter le départ de l'émissaire pour que la honte reste enterrée — **sans jamais lire le pli**.

## Dialogues (donneur)
- **Début** : *(il pose une main lourde sur le marteau cérémoniel de la Halle, geste ancien)* « Le traité est public. Le silence est privé — et il a un prix. Chaque année, les Gnomes viennent vérifier que nous payons encore. Autrefois, j'y allais moi-même, la tête basse. Mes jambes ne suivent plus. Porte le pli à leur émissaire. Ne le lis pas. Le prix de la paix ne se négocie pas : il se paie, et on se tait. »
- **Fin** : *(il regarde s'éloigner l'émissaire, épaules affaissées puis étrangement soulagées)* « C'est fait. Une année de plus de silence acheté. *(il te fixe)* Tu as porté ma honte sans l'ouvrir — c'est le seul honneur qu'il me reste à offrir. Reçois-le. Et sache au moins ceci : d'où ils viennent, ces émissaires, et pourquoi ils reviennent toujours. »

## Notes d'intégration
- N'apparaît au `!quest_board` du Vétéran **que** si `affinity_tier ≥ confidant` **et** `QI_BRO_55_04` débloqué (Q4 / D-SOC-3).
- **Ne jamais résoudre le fil rouge** : entretien du secret territorial entre PNJ, le pli n'est jamais lu. La quête **n'expose JAMAIS** le K3 `QI_BRO_55_09` (le traité n'a jamais été négocié : les deux camps l'ont reçu **déjà rédigé du Cardinal** — verrou D18) ni le K2 `QI_BRO_55_06` (l'Enclume du Cardinal comme mobile) ni la chaîne `QST_BRO_TRAITE_01` / le fil « Rivalité Mineurs ».
- `NPC_GRA_92` (courtier Gnome/Alne de Granzam) vérifié comme réceptacle plausible du pli ; `SCEAU_DE_CESSION` = objet de quête scellé (non lisible). Titre en `[BESOIN_TITRE]`.
