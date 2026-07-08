# Capuche de l'Initié Sylvestre

## Identification Cardinal
- **Item_ID** : `ARM_TET_001`
- **Slot** : Tête — Capuche · **Classe** : Tissu
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Sylph (+5% aux bonus si Sylph)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 8 |
| RES magique | 6 |
| Poids | 0,3 kg |
| Durabilité | 160 |
| Pénalité de vol | 0% |
| Bonus | +2 AGI |

## Acquisition & Chaînage économique
- **Source** : Boutique d'équipement de Swilvane (`ZONE_SYL_CAP_001`) — stock de départ des recrues.
- **Recette** : 2× Lin sylvestre (récolte, périphérie de Swilvane) + 1× Fil végétal.
- **Prix** : 180 Yrds (achat) · 45 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Chaque Sylph fraîchement connecté reçoit un bon d'achat pour cette capuche : la teinture verte est extraite des feuilles basses du territoire, si bien qu'un initié immobile dans un buisson devient presque invisible. Les vétérans la reconnaissent au premier coup d'œil — et baissent leurs armes. C'est moins une armure qu'un signe d'appartenance.

## Intégration Bot
- Joueur : `!equiper ARM_TET_001 tete` · `!inspect ARM_TET_001` — GM : `!sys_give ARM_TET_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_001, 1)`
