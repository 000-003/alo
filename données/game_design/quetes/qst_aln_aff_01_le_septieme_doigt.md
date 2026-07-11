# Le Septième Doigt — `QST_ALN_AFF_01`

## Identification
- **QST_ID** : `QST_ALN_AFF_01`
- **Type** : side (affinité)
- **Donneur** : `NPC_ALN_53` (vérifié — `personnages_bestiaire/pnj/alne/`) — Usurière Sept-Doigts (Puca, Le Tapis Volant, arrière-salle)
- **Prérequis** : Niveau 30 · `min_affinity_tier: trusted` · `qi_unlocked: QI_ALN_53_04` (elle t'a expliqué comment elle recouvre sans violence) · `topic_flag: asked_about_fingers`
- **Récompense** : 1 200 EXP · 900 Yrds · Accès info (débloque `QI_ALN_53_05` sans condition d'affinité) · `[BESOIN_ITEM: gage-babiole personnel de Sept-Doigts, MSC lié, sans stat]`

> **Raison intime du donneur** : Sept-Doigts prête contre tout ce qui a de la valeur — sauf une chose, qu'elle a elle-même mise en gage il y a vingt ans et jamais rachetée. Il lui manque trois doigts ; il lui manque aussi une bague, saisie par une créancière morte depuis, et qui traîne aujourd'hui dans le stock de Morne `NPC_ALN_55` sans que personne n'en connaisse la provenance. La prédatrice a été proie, une fois. Elle ne le confie qu'à un client qu'elle a fini par ne plus pouvoir tondre.

## Déroulement (étapes)

```jsonc
// objective_json
{
  "step_1": { "type": "talk",    "target": "NPC_ALN_55", "count": 1 },   // sonder Morne sur une bague sans registre
  "step_2": { "type": "retrieve","target": "GAGE_SEPT_DOIGTS", "count": 1 }, // récupérer/racheter la babiole
  "step_3": { "type": "deliver", "target": "NPC_ALN_53", "count": 1 }     // la rapporter à Sept-Doigts
}
```
`total_steps: 3`

1. Sonder discrètement la Receleuse Morne `NPC_ALN_55` : elle écoule sans le savoir un gage qui n'a jamais été réclamé.
2. Récupérer la babiole (rachat, échange ou faveur — le joueur choisit sa méthode ; zone neutre, aucune violence tolérée).
3. La rapporter à Sept-Doigts, qui referme enfin un contrat vieux de vingt ans — le sien.

## Dialogues (donneur)
- **Début** : *(elle pose ses sept doigts à plat sur le comptoir, très lentement)* « Tu crois que je compte les dettes des autres par plaisir ? Non. Je les compte pour ne pas compter la mienne. Il y a une bague, quelque part dans cette ville. Elle valait un doigt. Elle en a coûté trois. Ramène-la-moi, et pour une fois, ce sera moi qui signerai. »
- **Fin** : *(elle glisse la babiole à son majeur manquant, comme par réflexe, et se ravise)* « Elle ne rentre plus. Évidemment. On ne rachète jamais tout à fait ce qu'on a gagé — c'est la seule vérité que je vends gratis. Garde ça pour toi. Et l'info sur mes décotes, tu l'as méritée : tu m'as vue perdre, et t'es encore là. »

## Notes d'intégration
- N'apparaît au `!quest_board` de Sept-Doigts **que** si `affinity_tier ≥ trusted` **et** `QI_ALN_53_04` débloqué **et** `topic_flag asked_about_fingers` (Q4 / D-SOC-3). Sinon `is_hidden` effectif.
- **Ne jamais résoudre le fil rouge** (CDC-QST-01 D43) : cette quête reste au niveau K1/K2 de la faveur personnelle. Elle **n'effleure jamais** le K3 `QI_ALN_53_09` (mécanisme de transfert d'âme / verrou D18) ni la chaîne `QST_NEU_DETTE_01`.
- `GAGE_SEPT_DOIGTS` à créer comme item de service lié, sans stat (cf. `[BESOIN_ITEM]`).
