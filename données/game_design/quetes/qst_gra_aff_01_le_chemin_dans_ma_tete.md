# Le Chemin Dans Ma Tête — `QST_GRA_AFF_01`

## Identification
- **QST_ID** : `QST_GRA_AFF_01`
- **Type** : side (affinité)
- **Donneur** : `NPC_GRA_65` (vérifié) — Vieux Mineur (Gnome, Porte des Convois)
- **Prérequis** : Niveau 30 (recommandé 40) · `min_affinity_tier: trusted` · `qi_unlocked: QI_GRA_65_04` (il t'a parlé de la carte trouvée dans un filon de charbon)
- **Récompense** : 2 500 EXP · 2 000 Yrds · Accès info (débloque `QI_GRA_65_06` — sa confidence à l'Archiviste Interdit) · `[BESOIN_ITEM: MSC — pioche du doyen, outil-relique lié, sans stat]`

> **Raison intime du donneur** : Doyen des mineurs, retraité depuis vingt ans, le Vieux Mineur garde en tête chaque coude d'un tunnel dont il a brûlé la carte. Il ne veut pas y retourner — mais il a laissé, dans un filon de charbon épuisé, ses premiers outils de jeune mineur, et il aimerait les revoir une dernière fois avant la tombe. Taciturne et secret, il ne confie cette nostalgie qu'à un proche à qui il a fini par parler du filon.

## Déroulement (étapes)

```jsonc
// objective_json
{
  "step_1": { "type": "collect", "target": "OUTIL_JEUNE_MINEUR", "count": 3 }, // pioche, lampe, gamelle dans le filon épuisé
  "step_2": { "type": "deliver", "target": "NPC_GRA_65", "count": 1 }          // les rapporter au Vieux Mineur
}
```
`total_steps: 2`

1. Descendre dans le filon de charbon épuisé (strates hautes, sans danger de profondeur) et récupérer trois vieux outils du doyen : pioche, lampe, gamelle.
2. Les rapporter au Vieux Mineur, à son banc de la Porte des Convois — **s'arrêter bien avant le mur de granit parfait**.

## Dialogues (donneur)
- **Début** : *(il rallume sa pipe éteinte sans succès, soupire)* « J'ai brûlé la carte, mais le chemin est resté dans ma tête. J'y retournerai pas — pas jusqu'au bout, jamais. Mais tout en haut du filon, là où j'ai commencé gamin, j'ai laissé ma première pioche. J'aimerais la tenir encore une fois. Va me la chercher. Reste dans les hauteurs. Ne descends pas les 47 strates. Personne ne descend ça. »
- **Fin** : *(il serre la vieille pioche dans ses mains noueuses, longtemps)* « Elle a la même poignée. Cinquante ans, et la même poignée. *(il la pose sur ses genoux comme un enfant)* Tu es remonté sans chercher plus bas — c'est pour ça que je peux te parler. L'Archiviste, tu sais, un soir de pluie, je lui ai dit une chose. Approche. Je vais te la dire aussi. »

## Notes d'intégration
- N'apparaît au `!quest_board` du Vieux Mineur **que** si `affinity_tier ≥ trusted` **et** `QI_GRA_65_04` débloqué (Q4 / D-SOC-3).
- **Ne jamais résoudre le fil rouge** : errand nostalgique dans les strates hautes uniquement. La quête **n'expose JAMAIS** le K3 `QI_GRA_65_09` (la carte menait au Noyau de Pierre `NPC_GRA_00` = seed matériel — verrou D18) ni le K2 `QI_GRA_65_08` (le chemin des 47 strates, gardé par `QST_GRA_CARTE_BRULEE`) ni le fil « Noyau de Pierre ».
- Pioche du doyen en `[BESOIN_ITEM]` ; outils = objets de quête.
