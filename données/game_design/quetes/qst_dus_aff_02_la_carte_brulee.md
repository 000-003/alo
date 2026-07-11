# La Carte Brûlée — `QST_DUS_AFF_02`

## Identification
- **QST_ID** : `QST_DUS_AFF_02`
- **Type** : side (affinité)
- **Donneur** : `NPC_DUS_65` (vérifié) — Vieux Guetteur (Imp, Nid de Guet)
- **Prérequis** : Niveau 12 · `min_affinity_tier: trusted` · `qi_unlocked: QI_DUS_65_04` (il t'a avoué avoir brûlé une carte montrant un passage inconnu)
- **Récompense** : 500 EXP · 400 Yrds · Accès info (débloque `QI_DUS_65_05` — pourquoi il refuse de décrire le passage)

> **Raison intime du donneur** : Le Vieux Guetteur a brûlé la seule carte qui montrait un passage que personne d'autre n'a jamais vu — et il refuse d'en parler. Mais il a tenu, toutes ces années, un vieux journal de veille où il consignait tout ce qu'il voyait du canyon. Il craint que la jeune relève, l'Éclaireur des Corniches `NPC_DUS_50`, ne tombe dessus et n'y lise une note sur le passage. Il ne demande à personne d'aller le récupérer — sauf à qui a gagné assez de sa confiance pour ne pas l'ouvrir.

## Déroulement (étapes)

```jsonc
// objective_json
{
  "step_1": { "type": "retrieve", "target": "JOURNAL_DE_VEILLE", "count": 1 }, // récupérer le journal au Nid de Guet
  "step_2": { "type": "deliver",  "target": "NPC_DUS_65", "count": 1 }         // le rapporter au Guetteur, scellé
}
```
`total_steps: 2`

1. Récupérer le vieux journal de veille, caché dans une niche du Nid de Guet, avant que l'Éclaireur `NPC_DUS_50` ne le trouve.
2. Le rapporter au Guetteur **sans l'ouvrir** — la confiance est l'objet même de la quête.

## Dialogues (donneur)
- **Début** : *(il crache sur les braises de son petit feu)* « J'ai brûlé ma carte. Le passage, il est mieux oublié. Mais mon vieux journal de veille traîne encore là-haut, dans une niche — et j'y ai griffonné des choses. Si la relève met la main dessus, elle voudra aller voir. Va me le chercher. Ne l'ouvre pas. Si je te le demande, c'est que je crois que tu ne l'ouvriras pas. »
- **Fin** : *(il soupèse le journal scellé, hoche lentement la tête)* « Toujours fermé. Bien. *(il le jette au feu, le regarde brûler)* Voilà. Un trou reste un trou, et personne n'ira le creuser à cause de mes gribouillis. Tu m'as rendu ça sans regarder — c'est plus rare que tu ne crois. Assieds-toi. Je vais te dire pourquoi certains passages, on les laisse au noir. »

## Notes d'intégration
- N'apparaît au `!quest_board` du Vieux Guetteur **que** si `affinity_tier ≥ trusted` **et** `QI_DUS_65_04` débloqué (Q4 / D-SOC-3).
- **Ne jamais résoudre le fil rouge** : le journal est brûlé sans être lu, le passage reste inconnu. La quête **n'expose JAMAIS** le K3 `QI_DUS_65_09` (le passage débouche sur le régulateur d'ombre / carte pilotée par le cœur d'ombre — verrou D18) ni le K2 `QI_DUS_65_07/08` (gardé par `QST_DUS_PASSAGE_01`) ni le fil « L'Ombre Qui Observe ».
- `JOURNAL_DE_VEILLE` = objet de quête scellé (interdiction d'ouverture = condition de réussite).
