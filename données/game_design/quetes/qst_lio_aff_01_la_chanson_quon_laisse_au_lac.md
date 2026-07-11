# La Chanson Qu'on Laisse au Lac — `QST_LIO_AFF_01`

## Identification
- **QST_ID** : `QST_LIO_AFF_01`
- **Type** : side (affinité)
- **Donneur** : `NPC_LIO_65` (vérifié) — Vieux Ménestrel (Puca, Quai du Lac-Tambour)
- **Prérequis** : Niveau 13 · `min_affinity_tier: trusted` · `qi_unlocked: QI_LIO_65_04` (il t'a parlé de la chanson qu'il refuse de jouer)
- **Récompense** : 500 EXP · 400 Yrds · Accès info (débloque `QI_LIO_65_05` — ce qu'il boit au Refrain, et les confidences qui vont avec)

> **Raison intime du donneur** : Le Vieux Ménestrel a tout joué sur Lioda — sauf une chanson, que le Lac-Tambour lui a fredonnée une nuit, sans musicien, et qu'il refuse obstinément d'interpréter. Ce refus l'a coupé de la musique elle-même. Il aimerait rejouer, une dernière fois, un air ordinaire et heureux — mais sa vieille cithare est démontée et ses cordes dispersées. Il ne demande cette faveur qu'à qui a su écouter son silence sans le forcer.

## Déroulement (étapes)

```jsonc
// objective_json
{
  "step_1": { "type": "collect", "target": "PIECE_CITHARE", "count": 3 }, // cordes / chevalet / clé auprès de FRE... non — auprès de LIO_04 & LIO_24
  "step_2": { "type": "deliver", "target": "NPC_LIO_65", "count": 1 }     // remonter la cithare avec lui
}
```
`total_steps: 2`

1. Réunir trois pièces de sa cithare démontée auprès de l'Accordeur Fitz `NPC_LIO_04` et du Restaurateur `NPC_LIO_24` (jeu de cordes, chevalet, clé d'accord).
2. Rapporter les pièces au Ménestrel et l'aider à remonter l'instrument — pour un air simple, **pas** la chanson interdite.

## Dialogues (donneur)
- **Début** : *(il pose la main à plat sur une cithare muette et démontée)* « J'ai joué tout Lioda, gamin. Toutes les ballades, tous les refrains d'ivrogne. Une seule, non — celle que le Lac m'a soufflée. Depuis, mes doigts ne veulent plus rien jouer du tout. Rends-moi ma cithare, pièce par pièce. Je veux mourir en ayant rejoué quelque chose de gai. Pas *cette* chanson-là. Une autre. N'importe laquelle. »
- **Fin** : *(il gratte trois accords maladroits, puis un vieux refrain de taverne, et rit)* « Ha ! Elle répond encore, la vieille. Et moi aussi. Merci, gamin — tu m'as rendu la musique sans me forcer à jouer *l'autre*. Ça, ça se paie en confidence : viens au Refrain, je t'offre un verre et deux ou trois vérités que je ne raconte qu'au fond d'une chope. »

## Notes d'intégration
- N'apparaît au `!quest_board` du Vieux Ménestrel **que** si `affinity_tier ≥ trusted` **et** `QI_LIO_65_04` débloqué (Q4 / D-SOC-3).
- **Ne jamais résoudre le fil rouge** : un air ordinaire retrouvé, la chanson interdite reste au lac. La quête **n'expose JAMAIS** le K3 `QI_LIO_65_09` (l'Harmonie de Fond = fréquence du Cardinal qui compile Lioda — verrou D18) ni la chaîne `QST_PUC_PARTITIONS_PERDUES` / le fil « La Partition Originelle » (K2 `QI_LIO_65_07/08`).
- `PIECE_CITHARE` renvoyable aux stocks de `NPC_LIO_04` / `NPC_LIO_24`.
