# La Gemme Qui Reconnaît — `QST_GRA_AFF_02`

## Identification
- **QST_ID** : `QST_GRA_AFF_02`
- **Type** : side (affinité)
- **Donneur** : `NPC_GRA_05` (vérifié) — Prospectrice Helga (Gnome, Porte des Convois)
- **Prérequis** : Niveau 42 · `min_affinity_tier: confidant` · `qi_unlocked: QI_GRA_05_04` (elle t'a montré les six filons chantants qu'elle a localisés)
- **Récompense** : 3 000 EXP · 2 500 Yrds · Accès info (débloque `QI_GRA_05_08` — sa théorie des filons-souvenirs)

> **Raison intime du donneur** : Helga arpente les carrières avec une gemme taillée qui « traduit » les vibrations du sol — et qui s'illumine, d'une lueur ambrée, près de certaines strates, comme si elle *reconnaissait* la pierre. Silencieuse et méfiante, elle n'a jamais osé cartographier ce phénomène de peur qu'on lui vole la gemme. Elle ne demande de l'aide qu'à un proche capable de l'accompagner sans convoiter son instrument.

## Déroulement (étapes)

```jsonc
// objective_json
{
  "step_1": { "type": "investigate", "target": "FILON_CHANTANT", "count": 4 }, // localiser 4 des 6 filons (état gem_glow)
  "step_2": { "type": "collect",     "target": "RELEVE_SISMIQUE", "count": 4 }, // consigner chaque relevé
  "step_3": { "type": "deliver",     "target": "NPC_GRA_05", "count": 1 }       // rapporter la carte à Helga
}
```
`total_steps: 3`

1. Accompagner Helga (ou porter sa gemme sous sa surveillance) pour localiser quatre des six filons chantants — la gemme passe `gem_glow = VRAI` à l'approche.
2. Consigner un relevé sismique à chaque filon.
3. Rapporter la carte des relevés à Helga — **sans jamais chercher l'origine de la gemme**.

## Dialogues (donneur)
- **Début** : *(elle tend l'oreille vers le sol, presque un murmure)* « La pierre parle à qui sait l'écouter. Ma gemme, elle… elle traduit. Et parfois, elle s'allume — comme si elle reconnaissait un vieil ami sous la roche. Six filons chantent, ici. Aide-moi à les cartographier. Mais la gemme reste avec moi. On ne touche pas. On écoute, c'est tout. »
- **Fin** : *(elle referme le poing sur la gemme éteinte, satisfaite)* « Quatre filons cartographiés. Ils chantent tous la même note, tu as remarqué ? Comme une seule montagne qui se souvient. *(elle te regarde, méfiance dissipée)* Tu n'as pas louché une seule fois sur ma gemme. Alors je vais te dire ce que je crois qu'ils sont vraiment, ces filons. Approche. Doucement. »

## Notes d'intégration
- N'apparaît au `!quest_board` d'Helga **que** si `affinity_tier ≥ confidant` **et** `QI_GRA_05_04` débloqué (Q4 / D-SOC-3). Helga présente de 06h à 20h (cycle diurne).
- **Ne jamais résoudre le fil rouge** : cartographie de surface des filons uniquement. La quête **n'expose JAMAIS** le K3 `QI_GRA_05_09` (la gemme = fragment du seed matériel captant la génération procédurale — verrou D18) ni l'origine de la gemme (K2 `QI_GRA_05_07`, éclat du bloc sous le Conseil) ni les fils « Le Filonant » / « La Gemme Qui Voit ».
- `FILON_CHANTANT` s'appuie sur l'état `gem_glow` / skill passif `SISMIC_SENSE` du profil ; `RELEVE_SISMIQUE` = objets de quête.
