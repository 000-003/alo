# Diadème du Vacarme Étouffé

## Identification Cardinal
- **Item_ID** : `ARM_TET_095`
- **Slot** : Tête — Diadème · **Classe** : Tissu
- **Tier** : T5 · **Rareté** : Épique (drop de boss)
- **Niveau requis** : 44 · **Affinité raciale** : Aucune (drop universel)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 128 |
| RES magique | 82 |
| Poids | 0,4 kg |
| Durabilité | 980 |
| Pénalité de vol | 0% |
| Bonus | +7 INT ; immunité totale à la jauge de Vacarme (donjon Imp, D11) ; les sorts à cri (taunt, peur) coûtent 0 MP |

## Acquisition & Chaînage économique
- **Source** : Drop direct — Skreech, le Hurleur Alpha (`BOSS_IMP_DUN_001`), taux 8%.
- **Recette** : Non craftable ; recyclable en 3× Tympan du Hurleur.
- **Prix** : Revente 10 000 Yrds · échangeable.

## Lore (Encyclopédie d'Argo)
Un anneau de cartilage durci prélevé sur la gorge de Skreech — l'organe qui transformait un cri en arme de siège. Retourné, il avale le bruit. Le porteur vit dans un monde feutré où même les MAJUSCULES de la Caverne arrivent en minuscules. Duskarn en a fait un proverbe : « le silence des autres se porte en couronne ».

## Intégration Bot
- Joueur : `!equiper ARM_TET_095 tete` · `!inspect ARM_TET_095` — GM : `!sys_give ARM_TET_095 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_095, 1)`
