# Le Pain de la Cellule Sept — `QST_VOU_AFF_01`

## Identification
- **QST_ID** : `QST_VOU_AFF_01`
- **Type** : side (affinité)
- **Donneur** : `NPC_VOU_26` (vérifié) — Prisonnier Politique Tyn (Sylphe, Cachots de l'Arène)
- **Prérequis** : Niveau 22 · `min_affinity_tier: trusted` · `qi_unlocked: QI_VOU_26_04` (Drog t'apporte du pain en plus — et le geôlier est rongé par la cellule 7)
- **Récompense** : 800 EXP · 600 Yrds · Accès info (débloque `QI_VOU_26_05` — les plis passés à travers le mur)

> **Raison intime du donneur** : Tyn survit grâce au pain que Drog `NPC_VOU_25` lui glisse en douce. Mais le geôlier lui-même se meurt de culpabilité pour un prisonnier de la cellule 7, mort de faim sous sa garde, faute d'avoir osé désobéir. Tyn ne peut rien pour Drog depuis sa cage — sauf demander, à la seule âme qui l'écoute vraiment, de porter un peu de pain là où lui ne peut pas aller.

## Déroulement (étapes)

```jsonc
// objective_json
{
  "step_1": { "type": "collect", "target": "CSM_NOU_010", "count": 3 }, // du pain de voyage (item réel, package initial)
  "step_2": { "type": "deliver", "target": "CELLULE_SEPT", "count": 3 }, // déposer le pain à la cellule 7
  "step_3": { "type": "talk",    "target": "NPC_VOU_25", "count": 1 }    // rassurer Drog le geôlier
}
```
`total_steps: 3`

1. Réunir trois pains de voyage (`CSM_NOU_010`).
2. Les déposer, un par un, devant la cellule 7 — le tombeau de la mauvaise conscience de Drog.
3. Parler à Drog `NPC_VOU_25` : lui dire que la cellule 7 a enfin été nourrie, même trop tard.

## Dialogues (donneur)
- **Début** : *(il chuchote à travers l'interstice du mur, pressant)* « Tu n'es pas un garde — toi, tu as une âme. Alors écoute une chose qui n'a rien à voir avec ma liberté : le geôlier crève de remords pour la cellule 7. Un homme est mort de faim là-dedans. Porte-lui du pain. À un mort, oui. C'est absurde. C'est la seule chose juste qui reste ici. »
- **Fin** : *(sa voix se fait presque douce)* « Tu l'as fait. Le vieux Drog va peut-être dormir cette nuit. Un prisonnier ne peut pas racheter un geôlier — mais un étranger, si. Maintenant que je sais que tu portes ce qu'on te confie… je vais te dire ce que j'entends vraiment, à travers ce mur. »

## Notes d'intégration
- N'apparaît au `!quest_board` de Tyn **que** si `affinity_tier ≥ trusted` **et** `QI_VOU_26_04` débloqué (Q4 / D-SOC-3).
- **Ne jamais résoudre le fil rouge** : geste de compassion uniquement. La quête **n'expose jamais** le K3 `QI_VOU_26_09` (sa cellule verrouillée de l'intérieur — verrou D18), ne nomme **pas** le traître de la Porte (K2 `QI_VOU_26_07`, gardé par `QST_SAL_TRAITRE_01`).
- `CSM_NOU_010` (Pain de Voyage) = item réel (balance sheet, package initial).
