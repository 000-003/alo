# Une Heure Sans Feu — `QST_VOU_AFF_02`

## Identification
- **QST_ID** : `QST_VOU_AFF_02`
- **Type** : side (affinité)
- **Donneur** : `NPC_VOU_05` (vérifié) — Vulcan le Triste (Salamander, Grottes périphériques de Voulg)
- **Prérequis** : Niveau 32 · `min_affinity_tier: trusted` · `qi_unlocked: QI_VOU_05_04` (il t'a raconté la guerre de l'intérieur — les exactions des deux camps)
- **Récompense** : 1 800 EXP · 1 200 Yrds · Accès info (débloque `QI_VOU_05_06` — pourquoi les gardes n'entrent jamais assez profond) · `[BESOIN_ITEM: MSC — cendre du village frontalier, relique sans stat, liée]`

> **Raison intime du donneur** : Vulcan a déserté le jour où on lui a ordonné de brûler un village sylph. Il n'a pas pu empêcher le feu, mais il n'a pas pu l'allumer non plus. Depuis, il ne dort pas. Il ne demande ni pardon ni victoire — juste que quelqu'un aille recueillir un peu de la cendre de ces morts et lui permette de leur offrir une heure de silence. Il ne confie ce fardeau qu'à qui a écouté la guerre sans détourner le regard.

## Déroulement (étapes)

```jsonc
// objective_json
{
  "step_1": { "type": "collect",     "target": "CENDRE_VILLAGE_FRONTALIER", "count": 5 }, // recueillir la cendre aux ruines
  "step_2": { "type": "investigate", "target": "ZONE_SAL_TWN_001", "count": 1 },           // veiller sur les ruines une nuit
  "step_3": { "type": "deliver",     "target": "NPC_VOU_05", "count": 1 }                  // rapporter la cendre à Vulcan
}
```
`total_steps: 3`

1. Recueillir cinq mesures de cendre aux ruines du village frontalier incendié.
2. Veiller une nuit sur les ruines — aucun combat requis, seulement la présence.
3. Rapporter la cendre à Vulcan, qui accomplit son « heure sans feu ».

## Dialogues (donneur)
- **Début** : *(il serre une lettre froissée contre sa poitrine, la voix brûlée)* « Je ne te demande pas la paix. Ni la guerre. Je te demande une heure sans feu. Là-bas, dans les cendres du village qu'on m'a ordonné de brûler, il reste des gens que personne n'a pleurés. Rapporte-m'en une poignée. Rien qu'une. Pour qu'ils aient existé autrement qu'en fumée. »
- **Fin** : *(il répand la cendre en un cercle lent, sans un mot, puis relève un visage plus léger)* « Voilà. Une heure. Pas de flamme, pas d'ordre, pas de camp. Juste des morts qu'on regarde en face. Tu m'as accompagné là où même les gardes n'osent pas descendre — c'est parce qu'ils ont peur de ce qu'ils trouveraient. Laisse-moi te dire ce que, moi, j'ai fini par comprendre. »

## Notes d'intégration
- N'apparaît au `!quest_board` de Vulcan **que** si `affinity_tier ≥ trusted` **et** `QI_VOU_05_04` débloqué (Q4 / D-SOC-3).
- **Ne jamais résoudre le fil rouge** : deuil et rite personnel. La quête **n'expose jamais** le K3 `QI_VOU_05_09` (le vrai traître = PNJ système inséré par le Cardinal / test de paranoïa — verrou D18) ni la chaîne `QST_SAL_TRAITRE_01` (fil « Le Traître de la Porte »).
- `CENDRE_VILLAGE_FRONTALIER` en `[BESOIN_ITEM]` (MSC relique lié, sans stat).
