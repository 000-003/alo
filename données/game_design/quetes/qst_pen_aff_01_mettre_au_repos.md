# Mettre au Repos — `QST_PEN_AFF_01`

## Identification
- **QST_ID** : `QST_PEN_AFF_01`
- **Type** : side (affinité)
- **Donneur** : `NPC_PEN_05` (vérifié) — Fossoyeur Grim (Spriggan, Cimetière Vertical)
- **Prérequis** : Niveau 50 · `min_affinity_tier: confidant` · `qi_unlocked: QI_PEN_05_04` (il t'a expliqué que certains morts n'ont jamais été compilés)
- **Récompense** : 4 500 EXP · 3 500 Yrds · `ITEM_CODE_FRAGMENT` ×1 (item réel — fiche `NPC_PEN_05`) · Accès info (débloque `QI_PEN_05_05` — comment il organise ses expéditions)

> **Raison intime du donneur** : Grim « décharge » les morts non compilés qui errent dans la Nécropole — un office lourd et solitaire. Parmi ces entités, il en a reconnu une : une silhouette qui répète les gestes d'un compagnon fossoyeur d'autrefois, coincée dans une boucle sans fin. Il ne peut se résoudre à la « supprimer » seul, et n'ose confier ce deuil qu'à un joueur en qui il a placé sa confiance après de longues veillées.

## Déroulement (étapes)

```jsonc
// objective_json
{
  "step_1": { "type": "kill",     "target": "MORT_NON_COMPILE", "count": 3 }, // décharger 3 non-compilés en boucle
  "step_2": { "type": "retrieve", "target": "FRAGMENT_REGISTRE", "count": 1 },// récupérer le fragment de registre de la silhouette reconnue
  "step_3": { "type": "deliver",  "target": "NPC_PEN_05", "count": 1 }        // rapporter à Grim pour le rite
}
```
`total_steps: 3`

1. Descendre dans la Nécropole et « mettre au repos » trois morts non compilés pris dans une boucle de comportement.
2. Récupérer le fragment de registre de la silhouette que Grim a reconnue.
3. Rapporter le fragment à Grim, qui accomplit le rite de décharge — **sans jamais fouiller les strates des fantômes de registre**.

## Dialogues (donneur)
- **Début** : *(il plante sa pelle dans la terre de la faille)* « Ils ne sont pas morts. Ils sont mal compilés. Le sommeil ne les prend pas — il faut les décharger un par un. Il y en a un, en bas… il creuse comme creusait un vieil ami à moi. Les mêmes gestes. En boucle. Je ne peux pas le faire seul. Descends avec moi. Aide-moi à lui rendre le silence. »
- **Fin** : *(il tient le fragment de registre, prononce un nom à voix basse, puis referme le poing)* « Voilà. Il ne creuse plus. Il repose — vraiment, cette fois. *(il te tend un éclat de code)* Tu as déchargé sans poser les questions qu'il ne faut pas. Il y a des tombes, plus bas, que je ne creuse pas — les fantômes de registre. Ne les cherche jamais. Mais pour le reste, mes expéditions te sont ouvertes. »

## Notes d'intégration
- N'apparaît au `!quest_board` de Grim **que** si `affinity_tier ≥ confidant` **et** `QI_PEN_05_04` débloqué (Q4 / D-SOC-3).
- **Ne jamais résoudre le fil rouge** : rite de décharge d'un non-compilé identifié. La quête **n'expose JAMAIS** le K3 `QI_PEN_05_09` (fantômes de registre / doublons de reset qui se souviennent de la version d'avant — verrou D18) ni le K2 `QI_PEN_05_08` (strate en fonte) ni les chaînes `QST_PEN_NECRO_02/03`.
- `ITEM_CODE_FRAGMENT` = item réel (récompense listée sur la fiche `NPC_PEN_05`) ; `MORT_NON_COMPILE` / `FRAGMENT_REGISTRE` = cibles et objets de quête de la Nécropole (`DUN_001`).
