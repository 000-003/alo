# Voile du Crépuscule

## Identification Cardinal
- **Item_ID** : `ARM_TET_037`
- **Slot** : Tête — Voile · **Classe** : Tissu
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 2 · **Affinité raciale** : Imp (+5% aux bonus si Imp)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 8 |
| RES magique | 7 (dont +3 vs Ténèbres) |
| Poids | 0,2 kg |
| Durabilité | 155 |
| Pénalité de vol | 0% |
| Bonus | +2 INT ; réduit l'éblouissement (malus de lumière vive -50%) |

## Acquisition & Chaînage économique
- **Source** : Boutique du Bazar des Ombres, Duskarn (`ZONE_IMP_CAP_001`).
- **Recette** : 2× Soie grise + 1× Poussière de crépuscule (récolte, périphérie de Duskarn).
- **Prix** : 175 Yrds (achat) · 43 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Les Imps vivent dans la pénombre perpétuelle de Duskarn et détestent le plein jour. Ce voile filtre la lumière comme une éclipse portative. Les initiés le reçoivent avec un avertissement : « le soleil ne tue pas, mais il te fait voir ce que tu es » — phrase que personne n'a jamais fini d'expliquer.

## Intégration Bot
- Joueur : `!equiper ARM_TET_037 tete` · `!inspect ARM_TET_037` — GM : `!sys_give ARM_TET_037 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_037, 1)`
