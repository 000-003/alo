# La Corde Qui Chante — `QST_LIO_AFF_02`

## Identification
- **QST_ID** : `QST_LIO_AFF_02`
- **Type** : side (affinité)
- **Donneur** : `NPC_LIO_01` (vérifié) — Luthière Cordelia (Puca, Atelier des Cordes)
- **Prérequis** : Niveau 42 · `min_affinity_tier: confidant` · `qi_unlocked: QI_LIO_01_05` (elle t'a avoué que sa fibre est « trop résistante, comme si elle venait d'ailleurs »)
- **Récompense** : 3 000 EXP · 2 500 Yrds · Accès info (débloque `QI_LIO_01_06` — les instruments qu'elle fournit au Seigneur Silencieux) · `[BESOIN_ITEM: MSC — corde qui ne casse jamais, matériau d'artisanat rare lié]`

> **Raison intime du donneur** : Cordelia forge des instruments-armes dont une corde ne casse jamais — et elle ment quand on l'interroge sur sa provenance, parce qu'elle-même ne comprend pas. Pire : un de ses luths joue seul, la nuit, une mélodie qu'elle n'a pas écrite. Fière et secrète, elle n'admet cette faille qu'à un proche capable de l'aider à inspecter le phénomène sans le clamer sur les toits.

## Déroulement (étapes)

```jsonc
// objective_json
{
  "step_1": { "type": "retrieve", "target": "LUTH_QUI_JOUE_SEUL", "count": 1 }, // récupérer un luth chez un client
  "step_2": { "type": "collect",  "target": "ECHANTILLON_FIBRE", "count": 3 },   // prélever 3 échantillons de la corde
  "step_3": { "type": "deliver",  "target": "NPC_LIO_01", "count": 1 }           // rapporter à Cordelia
}
```
`total_steps: 3`

1. Récupérer, chez un client, un luth-arc qui « joue seul la nuit ».
2. Prélever trois échantillons de la fameuse fibre pour comparaison.
3. Rapporter le tout à Cordelia et l'aider à examiner la corde — **sans jamais décrypter le glyphe** ni remonter à sa source.

## Dialogues (donneur)
- **Début** : *(elle enroule la corde autour de son poignet, mâchoire serrée)* « Je dis à tout le monde que c'est une corde de famille. C'est faux. Je ne sais pas d'où elle vient, et ça me ronge. Il y a pire : un de mes luths joue seul, la nuit, un air que je n'ai jamais composé. Aide-moi à le regarder en face. Toi, tu ne le crieras pas sur le marché. Les autres, si. »
- **Fin** : *(elle tend la corde, elle chante un demi-ton toute seule, Cordelia frissonne)* « Elle vibre encore quand personne ne la touche. Au moins, maintenant, on est deux à l'avoir vu. *(elle range l'échantillon, ferme le tiroir d'un geste net)* On s'arrête là. Certaines fréquences ne se nomment pas. Mais toi, tu as tenu ma corde sans tirer dessus — alors je vais te dire à qui, vraiment, je livre mes instruments. »

## Notes d'intégration
- N'apparaît au `!quest_board` de Cordelia **que** si `affinity_tier ≥ confidant` **et** `QI_LIO_01_05` débloqué (Q4 / D-SOC-3).
- **Ne jamais résoudre le fil rouge** : le mystère de la corde reste ouvert. La quête **n'expose JAMAIS** les K3 `QI_LIO_01_10/11` (fibre injectée par le Cardinal, luths-arcs d'un tier supérieur pour une armée à venir, fréquence de l'Harmonie de Fond — verrou D18) ni le glyphe du Cardinal (K2 `QI_LIO_01_08`, gardé par `QST_LIO_ORIGIN_01`) ni le fil « La Partition Qui Marche Seule ».
- `LUTH_QUI_JOUE_SEUL` = objet de quête ; corde qui ne casse jamais en `[BESOIN_ITEM]`.
