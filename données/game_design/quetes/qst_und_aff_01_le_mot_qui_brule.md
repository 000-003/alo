# Le Mot Qui Brûle — `QST_UND_AFF_01`

## Identification
- **QST_ID** : `QST_UND_AFF_01`
- **Type** : side (affinité)
- **Donneur** : `NPC_UND_11` (vérifié) — Morgane la Somnambule (Undine, Marais de Brume)
- **Prérequis** : Niveau 16 · `min_affinity_tier: confidant` · `qi_unlocked: QI_UND_11_04` (elle t'a confié qu'elle était étudiante de Thalassa)
- **Récompense** : 600 EXP · 450 Yrds · Accès info (débloque `QI_UND_11_05` — le projet secret sous le Palais)

> **Raison intime du donneur** : Chaque matin, Morgane se réveille ailleurs dans le marécage, sans savoir comment elle y est venue. Elle perd des objets sur ses trajets de somnambule — et un mot, un seul, qui « brûle quand elle le prononce en dormant ». Elle a peur d'être seule quand elle le retrouvera. Elle ne le confie qu'à une âme qui la voit vraiment, car « parfois les gens ne me voient pas ».

## Déroulement (étapes)

```jsonc
// objective_json
{
  "step_1": { "type": "collect",     "target": "OBJET_SOMNAMBULE", "count": 4 }, // objets perdus sur la piste de brume
  "step_2": { "type": "investigate", "target": "ZONE_UND_CAP_001", "count": 1 }  // reconstituer son trajet nocturne
}
```
`total_steps: 2`

1. Suivre la piste de somnambule de Morgane à travers les Marais et récupérer quatre objets qu'elle a laissés tomber (foulard, fiole, page trempée, jeton).
2. Reconstituer son trajet nocturne et le lui présenter — l'aider à retrouver le mot **sans jamais chercher d'où il vient**.

## Dialogues (donneur)
- **Début** : *(elle émerge de la brume, les yeux mi-clos)* « Tu me vois ? … Bien. Parfois je marche en dormant et je laisse des morceaux de moi derrière. Un foulard. Une fiole. Et un mot — il brûle quand je le dis dans mon sommeil, et au réveil il a fondu. Retrouve mes traces. Reste avec moi quand je me souviendrai. J'ai peur d'être seule à ce moment-là. »
- **Fin** : *(elle serre les objets retrouvés contre elle, tremblante mais lucide)* « Ce sont bien mes affaires. Donc j'existe encore, la nuit. *(elle ferme les yeux, murmure quelque chose d'informe, rouvre les yeux)* Le mot n'est pas venu. Tant mieux — tu étais là, alors je n'avais plus besoin de le crier. Écoute, puisque tu es resté : je vais te dire ce qu'on cherchait, sous le Palais. »

## Notes d'intégration
- N'apparaît au `!quest_board` de Morgane **que** si `affinity_tier ≥ confidant` **et** `QI_UND_11_04` débloqué (Q4 / D-SOC-3).
- **Ne jamais résoudre le fil rouge** : réconfort et objets perdus, rien de plus. La quête **n'expose JAMAIS** le K3 `QI_UND_11_09` (le « rituel » = purge de mémoire par le Cardinal / esprit fracturé — verrou D18), ne fait **pas** prononcer le mot ancien (K2 `QI_UND_11_07`) ni franchir la porte de brume (K2 `QI_UND_11_08`, gardée par `QST_UND_MARAIS_01`).
- `OBJET_SOMNAMBULE` = objets de quête temporaires.
