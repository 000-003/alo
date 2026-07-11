# Chambre Sept — `QST_UND_AFF_02`

## Identification
- **QST_ID** : `QST_UND_AFF_02`
- **Type** : side (affinité)
- **Donneur** : `NPC_UND_62` (vérifié) — Apprenti Tynn, Étudiant Disparu (Undine, Académie des Mages)
- **Prérequis** : Niveau 10 · `min_affinity_tier: trusted` · `qi_unlocked: QI_UND_62_04` (tu as remarqué les symboles qu'il trace dans l'eau)
- **Récompense** : 500 EXP · 400 Yrds · Accès info (débloque `QI_UND_62_05` — le mot qu'il prononce une fois par jour)

> **Raison intime du donneur** : Tynn ne parle plus depuis qu'il est revenu, muet, des Marais. Il ne « donne » pas la quête par la parole : il réagit à certains mots, tourne la tête, trace un symbole. Son professeur, Maître Faelan `NPC_UND_60`, se ronge de culpabilité et n'ose pas fouiller la chambre 7 de son élève, de peur de ce qu'il y trouvera. Seul un joueur que Tynn « reconnaît » — qui a passé du temps à ses côtés — peut déclencher ce geste de deuil silencieux.

## Déroulement (étapes)

```jsonc
// objective_json
{
  "step_1": { "type": "collect", "target": "AFFAIRE_TYNN", "count": 3 }, // affaires personnelles, chambre 7
  "step_2": { "type": "deliver", "target": "NPC_UND_60", "count": 1 }    // les remettre à Maître Faelan
}
```
`total_steps: 2`

1. Récupérer trois affaires personnelles de Tynn dans la chambre 7 de l'Académie (carnet, plume, médaille d'examen).
2. Les remettre à Maître Faelan `NPC_UND_60`, pour qu'il tourne enfin la page de la disparition de son élève.

## Dialogues (donneur)
- **Début** : *(l'Apprenti Tynn vous regarde sans vous voir ; ses doigts tracent lentement un « 7 » dans une flaque, puis désignent l'aile des chambres)* *(aucun mot — mais le geste, répété, est une demande claire pour qui a appris à le lire)*
- **Fin** : *(Maître Faelan reçoit les affaires, la voix nouée)* « Sa plume. Son carnet. Sa médaille. … Je lui avais dit qu'il travaillait trop. Je le pensais à l'abri dans ce bâtiment. *(il presse les objets contre lui)* Vous, il vous a laissé approcher — moi, il me fuit. Peut-être qu'à travers vous, un jour, il me pardonnera de l'avoir cru perdu. Prenez ceci : Tynn prononce un mot, chaque jour, à la même heure. Écoutez-le. »

## Notes d'intégration
- N'apparaît au `!quest_board` de Tynn **que** si `affinity_tier ≥ trusted` **et** `QI_UND_62_04` débloqué (Q4 / D-SOC-3). Déclenchement gestuel (pas de dialogue verbal).
- **Ne jamais résoudre le fil rouge** : geste de deuil autour d'un étudiant mutique. La quête **n'expose JAMAIS** le K3 `QI_UND_62_09` (Tynn vidé de ses paramètres utilisateur par le Cardinal / PNJ involontaire — verrou D18), ne décode **pas** l'hexadécimal (K2 `QI_UND_62_08`, gardé par `QST_UND_TYNN_01`) et ne prononce **pas** « Cardinal » devant lui (K2 `QI_UND_62_07`).
- `AFFAIRE_TYNN` = objets de quête temporaires.
