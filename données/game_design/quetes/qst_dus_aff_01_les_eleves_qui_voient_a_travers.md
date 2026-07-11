# Les Élèves Qui Voient à Travers — `QST_DUS_AFF_01`

## Identification
- **QST_ID** : `QST_DUS_AFF_01`
- **Type** : side (affinité)
- **Donneur** : `NPC_DUS_05` (vérifié) — Gardienne Lilith (Imp, Temple du Voile)
- **Prérequis** : Niveau 40 · `min_affinity_tier: confidant` · `qi_unlocked: QI_DUS_05_04` (elle t'a confié que le Voile cache « plus que la lumière »)
- **Récompense** : 3 000 EXP · 2 500 Yrds · Accès info (débloque `QI_DUS_05_06` — le Pacte des Ailes avec les Spriggan)

> **Raison intime du donneur** : Lilith enseigne la magie du Voile, mais certains de ses élèves voient « à travers » — ils perçoivent ce qui est derrière, et cela les brise. L'un d'eux, terrifié par ce qu'il a entrevu, a fui dans le canyon. Lilith se sent responsable : elle a ouvert cette porte dans son esprit. Gardienne discrète, elle ne confie l'existence de ces élèves-là qu'à un fidèle éprouvé.

## Déroulement (étapes)

```jsonc
// objective_json
{
  "step_1": { "type": "investigate", "target": "ZONE_IMP_CAP_001", "count": 3 }, // pister l'élève fugitif dans le canyon
  "step_2": { "type": "collect",     "target": "ECLAT_DE_VOILE", "count": 3 },    // récupérer ce qu'il a laissé tomber
  "step_3": { "type": "escort",      "target": "ELEVE_VOYANT", "count": 1 }        // le ramener au Temple
}
```
`total_steps: 3`

1. Pister l'élève fugitif à travers trois corniches du canyon de Duskarn.
2. Récupérer trois éclats de voile qu'il a semés dans sa panique.
3. Le retrouver, le calmer et le raccompagner au Temple — **sans jamais l'interroger sur ce qu'il a vu**.

## Dialogues (donneur)
- **Début** : *(le Voile ondoie autour d'elle, sa voix se fait liturgique et basse)* « J'enseigne à voir dans l'ombre. Mais certains élèves voient au-delà — et ce qu'ils voient les dévore. L'un d'eux s'est enfui dans le canyon, les yeux pleins d'une chose qu'il n'aurait pas dû regarder. C'est moi qui ai ouvert cette porte en lui. Ramène-le. Ne lui demande pas ce qu'il a vu. Toi non plus, tu ne dois pas savoir. »
- **Fin** : *(elle rajuste le voile sur le visage tremblant de l'élève, apaisée)* « Il est revenu. Je refermerai ce que j'ai ouvert, doucement, cette fois. Tu l'as ramené sans fouiller son regard — c'est exactement la retenue qu'il fallait. Pour cela, je t'ouvre une porte plus sûre : viens, je vais te parler du Pacte des Ailes. »

## Notes d'intégration
- N'apparaît au `!quest_board` de Lilith **que** si `affinity_tier ≥ confidant` **et** `QI_DUS_05_04` débloqué (Q4 / D-SOC-3).
- **Ne jamais résoudre le fil rouge** : sauvetage d'un élève traumatisé, le « derrière du Voile » reste hors champ. La quête **n'expose JAMAIS** le K3 `QI_DUS_05_09` (Duskarn = cœur d'ombre du serveur, Voile piloté par le Cardinal — verrou D18) ni le K2 `QI_DUS_05_08` (membrane de régulation, gardé par `QST_IMP_VOILE_01`) ni le fil « Le Cœur d'Ombre ».
- `ELEVE_VOYANT` = PNJ d'escorte scripté ; `ECLAT_DE_VOILE` = objets de quête.
