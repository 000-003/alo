# Les Ailes Qu'on Ne Rend Pas — `QST_SWI_AFF_01`

## Identification
- **QST_ID** : `QST_SWI_AFF_01`
- **Type** : side (affinité)
- **Donneur** : `NPC_SWI_02` (vérifié) — Elowen la Faucheuse (Sylph, Les Racines)
- **Prérequis** : Niveau 65 · `min_affinity_tier: confidant` · `qi_unlocked: QI_SWI_02_04` (elle t'a dit pourquoi elle hait le traité — les apprentis perdus)
- **Récompense** : 5 000 EXP · 4 000 Yrds · Accès info (débloque `QI_SWI_02_05` — comment Luthien lui transmet les cibles) · `[BESOIN_ITEM: WPN_DAG — dague d'apprentie d'Elowen, T3 liée]`

> **Raison intime du donneur** : Elowen enseigne l'art de tuer sans bruit, mais un deuil, elle n'a jamais su le faire en silence. Une de ses élèves est tombée dans une escarmouche post-alliance et son corps n'a jamais été rapporté — sa dague, son nom, ses ailes, restés quelque part dans le no man's land. La Faucheuse ne pleure pas devant les purs qui la méprisent ; elle ne confie ce chagrin qu'à qui a survécu assez longtemps près d'elle pour mériter la vérité.

## Déroulement (étapes)

```jsonc
// objective_json
{
  "step_1": { "type": "retrieve", "target": "DAGUE_APPRENTIE_ELOWEN", "count": 1 }, // récupérer la dague de l'élève tombée
  "step_2": { "type": "kill",     "target": "MOB_SYL_PATROUILLE", "count": 5 },     // rester non détecté / écarter les patrouilleurs
  "step_3": { "type": "deliver",  "target": "NPC_SWI_02", "count": 1 }              // rendre la dague à Elowen
}
```
`total_steps: 3`

1. Retrouver et récupérer la dague de l'apprentie tombée, sur le site de l'escarmouche.
2. Se frayer un retour discret (écarter jusqu'à 5 patrouilleurs — la furtivité est valorisée, pas obligatoire).
3. Rapporter la dague à Elowen, qui donne enfin un nom à une tombe qu'elle n'a jamais creusée.

## Dialogues (donneur)
- **Début** : *(elle aiguise une lame sans lever les yeux, puis s'arrête net)* « J'apprends à mes élèves à ne laisser aucune trace. L'une d'elles a trop bien appris : elle n'en a laissé aucune. Pas même un corps. Sa dague est là-bas, dans l'herbe qui ne pousse que sur les morts. Rapporte-la. Une ombre mérite au moins qu'on récupère son tranchant. »
- **Fin** : *(elle passe le pouce sur la lame rendue, une seule fois, puis la range contre son cœur)* « Elle avait de bonnes mains. De mauvaises orders, mais de bonnes mains. Voilà, c'est fait — elle a une tombe, même si c'est moi qui la porte. Tu as vu la Faucheuse pleurer et tu es encore debout. Alors écoute : je vais te dire d'où viennent les cibles. »

## Notes d'intégration
- N'apparaît au `!quest_board` d'Elowen **que** si `affinity_tier ≥ confidant` **et** `QI_SWI_02_04` débloqué (Q4 / D-SOC-3).
- **Ne jamais résoudre le fil rouge** : deuil personnel uniquement. **N'effleure jamais** le K3 `QI_SWI_02_09` (assassinat du diplomate Cait Sith / financeur Gattan — verrou D18) ni la chaîne `QST_SYL_ASSASSIN_01` ni le fil « Ailes brisées » (`QI_SWI_02_08`, réservé confidant + orchestrateur).
- `DAGUE_APPRENTIE_ELOWEN` en `[BESOIN_ITEM]` (WPN_DAG T3 lié, sans valeur marchande).
