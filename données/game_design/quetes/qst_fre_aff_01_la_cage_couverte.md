# La Cage Couverte — `QST_FRE_AFF_01`

## Identification
- **QST_ID** : `QST_FRE_AFF_01`
- **Type** : side (affinité)
- **Donneur** : `NPC_FRE_37` (vérifié) — Braconnier Banni (Cait Sith, Marché aux Crocs, antre d'égout caché)
- **Prérequis** : Niveau 42 · `min_affinity_tier: confidant` · `qi_unlocked: QI_FRE_37_05` (il t'a avoué que la bête a des yeux « trop intelligents »)
- **Récompense** : 3 000 EXP · 2 500 Yrds · Accès info (débloque `QI_FRE_37_06` — pourquoi il garde la cage couverte) · `[BESOIN_ITEM: MAT_CUI — pelage hors registre, matériau rare non catalogué]`

> **Raison intime du donneur** : Le braconnier a capturé, dans la Savane des Crocs, une bête qui n'existe dans aucun bestiaire d'ALO — et qui le regarde avec des yeux presque humains. Il ne sait ni la vendre, ni la garder, ni s'en défaire. Paranoïaque, il change de planque chaque semaine et ne fait confiance à personne — sauf, à contrecœur, à un client qui l'a écouté assez longtemps pour qu'il ait besoin d'un avis autre que le sien.

## Déroulement (étapes)

```jsonc
// objective_json
{
  "step_1": { "type": "investigate", "target": "ZONE_CAI_HUNT_001", "count": 3 }, // relever 3 traces au site de capture
  "step_2": { "type": "collect",     "target": "APAISANT_HERBORISTE", "count": 1 },// ramener un apaisant du marché
  "step_3": { "type": "deliver",     "target": "NPC_FRE_37", "count": 1 }          // rapporter au braconnier
}
```
`total_steps: 3`

1. Retourner sur le site de capture, dans la Savane des Crocs, et relever trois traces de la bête (empreintes, pelage, restes de nourriture).
2. Rapporter du marché un apaisant d'herboriste pour calmer la créature agitée.
3. Rapporter le tout au braconnier — l'aider à décider **sans jamais chercher à savoir ce qu'elle est réellement**.

## Dialogues (donneur)
- **Début** : *(il jette un regard par-dessus son épaule, tire à demi le rideau sur la cage)* « Tu veux du rare ? J'ai pire que rare. J'ai quelque chose qui devrait pas exister — et qui me fixe la nuit avec des yeux que je connais. J'ose plus la vendre. J'ose plus la regarder. Va voir où je l'ai prise. Dis-moi que je deviens fou. J'aime mieux ça que l'autre possibilité. »
- **Fin** : *(il pose l'apaisant près de la cage, la bête cesse de bouger, il déglutit)* « Elle dort. Enfin. Grâce à toi, pas grâce à moi. *(il tire le rideau, définitif)* Je sais pas ce que c'est et je veux plus le savoir — et toi non plus, crois-moi. Tu m'as pas jugé, t'as pas fouillé. Alors je te dois une vérité : voilà pourquoi je garde cette cage couverte. Le reste, tu l'oublies. »

## Notes d'intégration
- N'apparaît au `!quest_board` du braconnier **que** si `affinity_tier ≥ confidant` **et** `QI_FRE_37_05` débloqué (Q4 / D-SOC-3). PNJ non listé au `!pnj_list`.
- **Ne jamais résoudre le fil rouge** : la quête reste au doute et à l'apaisement. Elle **n'expose JAMAIS** le K3 `QI_FRE_37_09` (la bête est un **joueur** piégé en familier par un bug du Cardinal — avatar corrompu, verrou D18) ni la chaîne `QST_FRE_MAR_06` / le fil « Le Marché aux Os ». La créature reste, du point de vue du joueur, une bête rare inexpliquée.
- `APAISANT_HERBORISTE` renvoyable à un consommable d'herboriste existant ; pelage hors registre en `[BESOIN_ITEM]`.
