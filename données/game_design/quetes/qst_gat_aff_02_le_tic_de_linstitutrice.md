# Le Tic de l'Institutrice — `QST_GAT_AFF_02`

## Identification
- **QST_ID** : `QST_GAT_AFF_02`
- **Type** : side (affinité)
- **Donneur** : `NPC_GAT_98` (vérifié) — Prynne, Institutrice (Salamander, École des Cendres)
- **Prérequis** : Niveau 30 · `min_affinity_tier: trusted` · `qi_unlocked: QI_GAT_98_04` (elle t'a confié une astuce de son métier) · `topic_flag: asked_about_lost_student`
- **Récompense** : 1 200 EXP · 900 Yrds · Accès info (débloque `QI_GAT_98_05` — sa critique feutrée de la garde)

> **Raison intime du donneur** : Prynne a la patience d'un ange et un tic nerveux qu'elle ne s'explique pas. En vérité, ce tic s'aggrave depuis qu'un de ses jeunes élèves a cessé de venir en classe — un enfant qu'elle soupçonne d'avoir fui vers les faubourgs après une correction de la garde. Elle n'a ni le rang ni la force d'aller le chercher, et elle a trop honte de son impuissance pour en parler à quiconque, sauf à une personne devenue de confiance.

## Déroulement (étapes)

```jsonc
// objective_json
{
  "step_1": { "type": "investigate", "target": "ZONE_SAL_CAP_001", "count": 3 }, // pister l'élève dans 3 faubourgs
  "step_2": { "type": "escort",      "target": "ELEVE_FUGUEUR", "count": 1 }      // le ramener à l'École des Cendres
}
```
`total_steps: 2`

1. Suivre la piste de l'élève fugueur à travers trois faubourgs de Gattan (marché, fosse, remparts).
2. Le convaincre et le raccompagner sain et sauf jusqu'à l'École des Cendres.

## Dialogues (donneur)
- **Début** : *(sa paupière tressaute, elle referme son manuel d'un geste sec)* « On n'utilise pas la commande " tuer " sur ses alliés — c'est la première leçon. Mais un de mes petits l'a apprise à ses dépens, du mauvais côté d'un bâton de garde. Il ne revient plus. Je ne peux pas quitter la classe, et je ne peux pas… *(le tic revient)* …je ne peux pas dormir. Ramène-le-moi. »
- **Fin** : *(le tic s'apaise, pour la première fois)* « Le voilà. À sa place. *(elle pose une main sur l'épaule de l'enfant)* Tu vois — mon œil ne saute plus. Je croyais que c'était un défaut de fabrication. C'était juste de l'inquiétude qui n'avait nulle part où aller. Merci. Et entre nous… je pourrais te dire deux mots sur cette garde. »

## Notes d'intégration
- N'apparaît au `!quest_board` de Prynne **que** si `affinity_tier ≥ trusted` **et** `QI_GAT_98_04` débloqué **et** `topic_flag asked_about_lost_student` (Q4 / D-SOC-3).
- **Ne jamais résoudre le fil rouge** : sauvetage d'un enfant, rien de plus. La quête **n'expose jamais** le K3 `QI_GAT_98_09` (Prynne méprise secrètement les joueurs — verrou D18) ni le K2 `QI_GAT_98_07` (pic anormal de comptes avant la guerre, indice méta) ni le segment `QST_SAL_GATTAN_03`.
- `ELEVE_FUGUEUR` = PNJ d'escorte scripté (non listé au `!pnj_list`).
