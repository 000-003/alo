# La Vision Qui Revient — `QST_ALN_AFF_02`

## Identification
- **QST_ID** : `QST_ALN_AFF_02`
- **Type** : side (affinité)
- **Donneur** : `NPC_ALN_98` (vérifié) — Voyante Isilde (Puca, Place de la Fontaine Centrale)
- **Prérequis** : Niveau 40 · `min_affinity_tier: confidant` · `qi_unlocked: QI_ALN_98_05` (tu sais que ses visions rejoignent celles d'Embra de Gattan)
- **Récompense** : 1 500 EXP · 1 000 Yrds · Accès info (débloque `QI_ALN_98_06` — les dangers qu'elle pressent) · `[BESOIN_TITRE: TITLE_FILLEUL_FONTAINE — « Filleul de la Fontaine »]`

> **Raison intime du donneur** : Isilde ignore d'où viennent ses visions et cela la terrifie. Une image revient, la nuit, plus nette que les autres — et elle n'ose l'interpréter seule, de peur qu'en la nommant, elle ne la rende vraie. Elle ne demande de l'aide qu'à une âme dont l'eau lui a montré qu'elle reviendrait.

## Déroulement (étapes)

```jsonc
// objective_json
{
  "step_1": { "type": "collect",    "target": "REFLET_TROUBLE", "count": 3 }, // capter 3 reflets à la Fontaine, de nuit
  "step_2": { "type": "investigate","target": "ZONE_NEU_CAP_001", "count": 1 } // confronter les reflets à un présage
}
```
`total_steps: 2`

1. Recueillir trois **reflets troublés** à la Fontaine Centrale, chacun à une heure de nuit différente (cycle diurne du serveur).
2. Rapporter les reflets à Isilde et l'aider à lire l'image récurrente — sans jamais chercher *qui* parle à travers elle.

## Dialogues (donneur)
- **Début** : *(elle trouble l'eau du plat de la main, puis retire vivement sa main comme brûlée)* « La même image, chaque nuit. Un feu qui ne monte pas — qui descend. Je n'ose pas la regarder seule ; un présage nommé par une seule bouche devient une prophétie. Nommons-le à deux. Rapporte-moi ce que l'eau te montre à toi. Toi, elle te connaît déjà. »
- **Fin** : *(elle relâche un souffle qu'elle semblait retenir depuis des jours)* « Ce n'était qu'un avertissement, pas une sentence. Voilà. À deux, une vision n'est plus une malédiction — c'est une carte. Tu as veillé avec moi ; désormais, ce que je pressens, je te le dirai avant les autres. »

## Notes d'intégration
- N'apparaît au `!quest_board` d'Isilde **que** si `affinity_tier ≥ confidant` **et** `QI_ALN_98_05` débloqué (Q4 / D-SOC-3).
- **Ne jamais résoudre le fil rouge** : la quête s'arrête au présage lisible. Elle **n'expose jamais** le K3 `QI_ALN_98_09` (Isilde = canal du Cardinal via la Racine / verrou D18) ni la chaîne `QST_NEU_ORACLE_01`. L'orchestrateur garde la révélation méta.
- `REFLET_TROUBLE` = objet de quête temporaire (non-inventaire persistant). Titre en `[BESOIN_TITRE]`.
