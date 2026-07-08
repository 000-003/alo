# Coiffe d'Écume

## Identification Cardinal
- **Item_ID** : `ARM_TET_019`
- **Slot** : Tête — Coiffe · **Classe** : Tissu
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Undine (+5% aux bonus si Undine)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 8 |
| RES magique | 7 (dont +3 vs Eau) |
| Poids | 0,2 kg |
| Durabilité | 150 |
| Pénalité de vol | 0% |
| Bonus | +2 INT ; sèche instantanément en sortant de l'eau |

## Acquisition & Chaînage économique
- **Source** : Boutique de l'Archipel d'Écume (capitale Undine, fiche `geographie_villes`).
- **Recette** : 2× Lin blanchi + 1× Écume solide (récolte, rivages de l'Archipel).
- **Prix** : 160 Yrds (achat) · 40 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Premier couvre-chef des soigneurs undines, tissé d'écume battue jusqu'à devenir étoffe. Elle ne retient pas une goutte d'eau : les novices s'en servent pour prouver qu'ils reviennent bien de leur baptême de plongée, cheveux trempés mais coiffe immaculée.

## Intégration Bot
- Joueur : `!equiper ARM_TET_019 tete` · `!inspect ARM_TET_019` — GM : `!sys_give ARM_TET_019 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_019, 1)`
