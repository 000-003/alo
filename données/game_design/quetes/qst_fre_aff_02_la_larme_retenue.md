# La Larme Retenue — `QST_FRE_AFF_02`

## Identification
- **QST_ID** : `QST_FRE_AFF_02`
- **Type** : side (affinité)
- **Donneur** : `NPC_FRE_29` (vérifié) — Pleureuse de la Colline (Cait Sith, Colline aux Souvenirs)
- **Prérequis** : Niveau 28 · `min_affinity_tier: trusted` · `qi_unlocked: QI_FRE_29_04` (elle t'a parlé du médaillon qu'elle n'ouvre jamais)
- **Récompense** : 1 000 EXP · 800 Yrds · Accès info (débloque `QI_FRE_29_05` — la tombe qu'elle contourne toujours)

> **Raison intime du donneur** : La Pleureuse offre une larme sincère à chaque familier de Freelia — sauf devant une tombe, qu'elle refuse d'approcher, et un médaillon qu'elle n'ouvre jamais. Trop de chagrin retenu l'empêche d'accomplir jusqu'au bout son propre office : certaines tombes de la Colline attendent une larme qu'elle ne peut plus verser. Elle ne demande à personne de porter ce poids — sauf à qui a gagné sa confiance en respectant son silence.

## Déroulement (étapes)

```jsonc
// objective_json
{
  "step_1": { "type": "collect", "target": "OFFRANDE_COLLINE", "count": 5 },  // fleurs / souvenirs auprès du marchand FRE_27
  "step_2": { "type": "deliver", "target": "TOMBE_DELAISSEE", "count": 5 }     // déposer sur 5 tombes délaissées
}
```
`total_steps: 2`

1. Réunir cinq offrandes de deuil auprès du Marchand de Souvenirs `NPC_FRE_27` (fleurs, breloques, mèches).
2. Les déposer sur cinq tombes délaissées que la Pleureuse n'a plus la force de visiter — **jamais la tombe interdite**, qu'il faut laisser en paix.

## Dialogues (donneur)
- **Début** : *(sa main se ferme sur le médaillon, les doigts blanchissent)* « Chaque bête mérite une larme — même celles qu'on a trahies. Mais j'ai le cœur trop plein pour pleurer tout le monde. Il y a des tombes, ici, que je ne peux plus approcher sans me briser. Va poser une fleur pour moi. Pas sur celle-là — *(elle détourne le regard)* — jamais sur celle-là. Sur les autres. »
- **Fin** : *(elle entonne une lamentation basse, et pour une fois une vraie larme coule)* « Elles ont eu leur larme, grâce à tes mains. Tu as respecté la tombe que je t'ai interdite — c'est pour ça que je te parle encore. *(elle effleure le médaillon, sans l'ouvrir)* Un jour, peut-être, je te dirai pourquoi je détourne toujours ce chemin. Pas aujourd'hui. Mais bientôt. »

## Notes d'intégration
- N'apparaît au `!quest_board` de la Pleureuse **que** si `affinity_tier ≥ trusted` **et** `QI_FRE_29_04` débloqué (Q4 / D-SOC-3).
- **Ne jamais résoudre le fil rouge** : geste de deuil délégué, la tombe interdite reste intacte. La quête **n'expose JAMAIS** le K3 `QI_FRE_29_09` (la tombe interdite = son propre familier, « témoin » supprimé des logs par le Cardinal — verrou D18) ni la chaîne `QST_FRE_COL_02` / le fil « La Colline qui pleure ».
- `OFFRANDE_COLLINE` renvoyable au stock du Marchand de Souvenirs `NPC_FRE_27` ; `TOMBE_DELAISSEE` = points d'interaction scriptés (excluant la tombe interdite).
