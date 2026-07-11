# La Lettre de la Grand-Mère — `QST_GAT_AFF_01`

## Identification
- **QST_ID** : `QST_GAT_AFF_01`
- **Type** : side (affinité)
- **Donneur** : `NPC_GAT_54` (vérifié) — Helka la Brasseuse (Salamander, brasserie « Haleine de Logi », Place du Dragon)
- **Prérequis** : Niveau 18 · `min_affinity_tier: confidant` · `qi_unlocked: QI_GAT_54_05` (elle t'a montré la clause anti-Sylph de sa grand-mère et son exaspération)
- **Récompense** : 900 EXP · 700 Yrds · Accès info (débloque `QI_GAT_54_06` — les soirées de la fosse de Magnar) · Recette « Bière de cendre » (débloque `QI_GAT_54_04`, craft cuisine)

> **Raison intime du donneur** : Helka a hérité de la recette de l'Haleine assortie d'une clause absurde — ne jamais la vendre à un Sylph — et d'aucune explication : sa grand-mère est morte avec le secret. Une lettre retrouvée par hasard laisse entendre que la clause date d'un mariage annulé, il y a soixante ans. Helka veut comprendre ce que la vieille lui a caché ; mais elle n'ouvre son linge sale familial qu'à un client devenu un vrai proche.

## Déroulement (étapes)

```jsonc
// objective_json
{
  "step_1": { "type": "collect", "target": "LETTRE_GRAND_MERE", "count": 3 }, // 3 lettres cachées dans Gattan
  "step_2": { "type": "deliver", "target": "NPC_GAT_54", "count": 1 }         // les rapporter à Helka
}
```
`total_steps: 2`

1. Retrouver trois lettres de la grand-mère, dispersées là où elle vivait (arrière-cour de la brasserie, échoppe de Rosza `NPC_GAT_45`, un coffre au relais des convois).
2. Les rapporter à Helka, qui reconstitue l'histoire du mariage annulé — **sans jamais toucher à l'origine réelle de la recette**.

## Dialogues (donneur)
- **Début** : *(elle claque une mousse parfaite sur le comptoir)* « Ma grand-mère m'a laissé une bière et une interdiction : jamais un Sylph. Pas de raison, pas de mot, juste " c'est comme ça ". La vieille est morte en emportant le pourquoi. J'ai retrouvé un bout de lettre — il y est question d'un mariage qui n'a pas eu lieu. Trouve-moi le reste. J'ai le droit de savoir ce que je déteste. »
- **Fin** : *(elle lit la dernière lettre, repose sa chope, étrangement silencieuse un instant)* « Un cœur brisé, il y a soixante ans. Voilà d'où sort ma fichue clause. Elle aurait pu me le dire, la vieille bourrique. *(elle se ressaisit, ressert)* Tiens — la recette de la Bière de cendre, elle est à toi. Et viens à la fosse de Magnar un soir : c'est là que l'Haleine coule le mieux. »

## Notes d'intégration
- N'apparaît au `!quest_board` d'Helka **que** si `affinity_tier ≥ confidant` **et** `QI_GAT_54_05` débloqué (Q4 / D-SOC-3).
- **Ne jamais résoudre le fil rouge** : la quête s'arrête au chagrin d'amour et au mariage annulé (K2 `QI_GAT_54_08`). Elle **n'expose JAMAIS** le K3 `QI_GAT_54_09` (la recette vient d'un brasseur **sylph**, le fiancé évincé — scandale diplomatique SAL↔SYL, verrou D18) ni la chaîne `QST_SAL_GEYSER_01` (geyser interdit, K2 `QI_GAT_54_07`).
- `LETTRE_GRAND_MERE` = objet de quête. Recette « Bière de cendre » = déblocage de craft existant (`QI_GAT_54_04`).
