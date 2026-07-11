# Le Nom Qu'il a Rendu — `QST_PEN_AFF_02`

## Identification
- **QST_ID** : `QST_PEN_AFF_02`
- **Type** : side (affinité)
- **Donneur** : `NPC_PEN_06` (vérifié, `is_essential = VRAI`) — Archiviste Sans Nom (Spriggan, Bibliothèque Enterrée)
- **Prérequis** : Niveau 65 · `min_affinity_tier: confidant` · `qi_unlocked: QI_PEN_06_04` (il t'a montré que les « textes anciens » sont des logs système compilés)
- **Récompense** : 5 000 EXP · 4 000 Yrds · `ITEM_CODE_FRAGMENT` ×1 (item réel) · Accès info (débloque `QI_PEN_06_05` — ses documents sur les resets du monde)

> **Raison intime du donneur** : L'Archiviste a renoncé à son nom — donc à son identité enregistrée — pour manipuler les archives sans être tracé. Il attend depuis des années « quelqu'un capable de comprendre ». Il n'a jamais retrouvé la seule page qui mentionne le nom qu'il portait avant de le rendre : elle a glissé dans une strate scellée, corrompue. Il ne confie ce désir — presque une faiblesse, pour lui — qu'à un proche qu'il juge digne de descendre à sa place.

## Déroulement (étapes)

```jsonc
// objective_json
{
  "step_1": { "type": "retrieve", "target": "PAGE_CORROMPUE", "count": 1 }, // page scellée dans une strate basse
  "step_2": { "type": "collect",  "target": "FRAGMENT_DE_LOG", "count": 3 },// fragments de log pour la restaurer
  "step_3": { "type": "deliver",  "target": "NPC_PEN_06", "count": 1 }      // rapporter à l'Archiviste
}
```
`total_steps: 3`

1. Descendre dans une strate scellée de la Bibliothèque Enterrée et récupérer la page corrompue où figure l'ancien nom de l'Archiviste.
2. Réunir trois fragments de log épars pour tenter d'en restaurer la lecture.
3. Rapporter le tout à l'Archiviste — **s'arrêter à la page de son nom, sans jamais toucher au fragment de seed**.

## Dialogues (donneur)
- **Début** : *(il ferme un livre sans le refermer tout à fait)* « J'ai rendu mon nom pour que le Cardinal cesse de me suivre. C'était le prix, et je l'ai payé sans regret… presque. Il reste une page — une seule — où ce nom est encore écrit. Elle a glissé dans une strate scellée, et les pages scellées se corrompent. Va me la chercher. Non pour que je le reprenne. Pour que je sache que j'ai bien existé avant de choisir de ne plus. »
- **Fin** : *(il lit la page restaurée, effleure un mot du doigt, et un silence très long passe)* « C'était donc ça. *(il referme la page, la range sans la garder à portée)* Je ne le reprendrai pas — mais je l'ai revu. Cela suffit. Tu es descendu jusqu'à mon nom et tu n'as pas cherché au-delà : c'est exactement la retenue qui manque à tous ceux qui viennent ici. Alors approche. Je vais t'ouvrir mes archives sur les resets. Pas plus. Pas encore. »

## Notes d'intégration
- N'apparaît au `!quest_board` de l'Archiviste **que** si `affinity_tier ≥ confidant` **et** `QI_PEN_06_04` débloqué (Q4 / D-SOC-3).
- **Ne jamais résoudre le fil rouge** : quête personnelle autour d'un nom rendu. La quête **n'expose JAMAIS** les K3 `QI_PEN_06_10/11` (fragment du seed original = code source du monde ; le Cardinal = compilateur, Penwether = son code source — verrou D18) ni le K2 `QI_PEN_06_09` (Nécropole = zone de test d'initialisation, gardé par `QST_PEN_ARCHIVE_02`) ni les chaînes `QST_PEN_ARCHIVE_01→04` / `QST_PEN_VERITE_01` / le fil « Ce Que Cachent les Ruines ».
- `NPC_PEN_06` `is_essential = VRAI` : `SYS_ASSASSINATE_NPC` interdit, cohérent avec un donneur pérenne. `ITEM_CODE_FRAGMENT` = item réel ; `PAGE_CORROMPUE` / `FRAGMENT_DE_LOG` = objets de quête.
