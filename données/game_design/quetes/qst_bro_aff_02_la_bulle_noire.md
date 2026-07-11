# La Bulle Noire — `QST_BRO_AFF_02`

## Identification
- **QST_ID** : `QST_BRO_AFF_02`
- **Type** : side (affinité)
- **Donneur** : `NPC_BRO_53` (vérifié) — Souffleur Verre (Leprechaun, Terrils Publics, atelier du verrier)
- **Prérequis** : Niveau 15 · `min_affinity_tier: trusted` · `qi_unlocked: QI_BRO_53_04` (il t'a montré la bulle qui renvoie le Pouls de la forge)
- **Récompense** : 500 EXP · 400 Yrds · Accès info (débloque `QI_BRO_53_06` — le sable de la Vallée des Geysers et le Pacte Eaux)

> **Raison intime du donneur** : Le Souffleur a soufflé une bulle de verre qui renvoie la lueur du Pouls de la forge, même à l'autre bout de la ville — puis une seconde, identique, restée obstinément noire, qui ne renvoie rien. Cette bulle silencieuse l'obsède : son art ne ment jamais, alors pourquoi celle-ci ? Émerveillé et troublé, il ne partage cette énigme qu'avec un proche assez patient pour l'aider dans le silence que demande le soufflage.

## Déroulement (étapes)

```jsonc
// objective_json
{
  "step_1": { "type": "collect", "target": "SABLE_GEYSERS", "count": 5 }, // sable fin de la Vallée des Geysers
  "step_2": { "type": "deliver", "target": "NPC_BRO_53", "count": 1 }     // rapporter le sable au verrier
}
```
`total_steps: 2`

1. Récolter cinq mesures de sable fin à la Vallée des Geysers (`NPC_BRO_56` en signale les meilleurs bancs).
2. Rapporter le sable au Souffleur pour qu'il tente une troisième bulle, dans l'espoir de comprendre la noire — **sans jamais l'ouvrir**.

## Dialogues (donneur)
- **Début** : *(il souffle lentement dans sa canne, entre deux respirations)* « Le verre ne ment pas. Il garde la forme qu'on lui donne — et parfois celle qu'on ne lui a pas donnée. J'ai soufflé une bulle qui chante le Pouls, et sa jumelle, noire, qui avale tout. Ça me hante. Rapporte-moi du sable des Geysers, du bon. Je vais en souffler une troisième. Peut-être qu'à trois, je comprendrai la deuxième. »
- **Fin** : *(il examine la nouvelle bulle à contre-jour, songeur)* « La troisième chante, comme la première. Donc c'est bien la noire, l'anomalie — pas moi, pas mon souffle. *(il repose la noire sans l'approcher)* Je la laisse à sa mauvaise humeur. Toi, tu as attendu en silence que le verre prenne — c'est rare, ça. Viens, je te dirai d'où vient mon sable, et ce que le Pacte Eaux a changé. »

## Notes d'intégration
- N'apparaît au `!quest_board` du Souffleur **que** si `affinity_tier ≥ trusted` **et** `QI_BRO_53_04` débloqué (Q4 / D-SOC-3).
- **Ne jamais résoudre le fil rouge** : l'énigme de la bulle noire reste ouverte. La quête **n'expose JAMAIS** le K3 `QI_BRO_53_09` (la bulle noire contient un éclat de l'Enclume du Cardinal — un « silencieux » — verrou D18) ni le K2 `QI_BRO_53_08` (la pièce mystère de la forge-mère) ni la chaîne `QST_BRO_VERRE_01`.
- `SABLE_GEYSERS` renvoyable à un node de récolte / stock lié à `NPC_BRO_56`.
