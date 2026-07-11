# La Rumeur Qu'on Ne Vend Pas — `QST_SWI_AFF_02`

## Identification
- **QST_ID** : `QST_SWI_AFF_02`
- **Type** : side (affinité)
- **Donneur** : `NPC_SWI_48` (vérifié) — Informateur Murk (Sylph, Les Racines)
- **Prérequis** : Niveau 15 · `min_affinity_tier: trusted` · `qi_unlocked: QI_SWI_48_04` (il t'a déjà vendu des rumeurs K1) · `topic_flag: asked_about_silent_contact`
- **Récompense** : 500 EXP · 400 Yrds · Accès info (débloque `QI_SWI_48_05` — le réseau Fitch de Gattan, offert)

> **Raison intime du donneur** : Murk vend tout, sauf une rumeur : celle qu'il n'a jamais osé encaisser, parce qu'elle concerne une de ses propres sources, une gamine des ruelles qui s'est tue du jour au lendemain. Un informateur qui s'inquiète pour quelqu'un, c'est mauvais pour les affaires. Il ne le laisse voir qu'à un client de confiance — quelqu'un qui a acheté assez de vérités pour qu'il lui doive une faveur.

## Déroulement (étapes)

```jsonc
// objective_json
{
  "step_1": { "type": "talk",        "target": "CONTACT_RACINES", "count": 3 }, // interroger 3 contacts du réseau
  "step_2": { "type": "investigate", "target": "ZONE_SYL_CAP_001", "count": 1 } // établir ce qui a fait taire la source
}
```
`total_steps: 2`

1. Faire le tour de trois contacts de Murk dans les Racines (marché, receleur, ruelle) pour retrouver la trace de sa source silencieuse.
2. Établir pourquoi elle s'est tue — dette, peur, départ — et rapporter à Murk une réponse qu'il n'aura pas à payer.

## Dialogues (donneur)
- **Début** : *(il recule d'un pas dans l'ombre, souriant sans joie)* « J'ai une rumeur invendable. Pas parce qu'elle vaut rien — parce qu'elle me coûte. Une gosse qui me refilait les bons ragots s'est éteinte comme une chandelle. Pas morte. Juste… muette. Va écouter à ma place. Je te paierai en quelque chose que je ne vends jamais : la vérité gratuite. »
- **Fin** : *(il hoche la tête, range un carnet qu'il n'a pas ouvert)* « Alors c'était ça. Pas de sang, pas de sceau. Juste la peur ordinaire. Ça, je peux vivre avec. Tu m'as rendu une rumeur au lieu de me la vendre — c'est rare. Tiens, le réseau de Fitch, à Gattan : je te l'ouvre. Gratis. Ne t'y habitue pas. »

## Notes d'intégration
- N'apparaît au `!quest_board` de Murk **que** si `affinity_tier ≥ trusted` **et** `QI_SWI_48_04` débloqué **et** `topic_flag asked_about_silent_contact` (Q4 / D-SOC-3).
- **Ne jamais résoudre le fil rouge** : la source s'est tue par peur ordinaire, point. La quête **n'expose jamais** le K3 `QI_SWI_48_09` (disparus dans conteneurs diplomatiques / « L'Ombre de l'Alliance » — verrou D18) ni la chaîne `QST_SWI_RUMEUR_01`.
