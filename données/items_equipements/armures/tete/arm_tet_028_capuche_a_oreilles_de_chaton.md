# Capuche à Oreilles de Chaton

## Identification Cardinal
- **Item_ID** : `ARM_TET_028`
- **Slot** : Tête — Capuche · **Classe** : Tissu
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Cait Sith (+5% aux bonus si Cait Sith)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 8 |
| RES magique | 5 |
| Poids | 0,3 kg |
| Durabilité | 160 |
| Pénalité de vol | 0% |
| Bonus | +2 AGI ; +5% affinité avec les familiers de rang F |

## Acquisition & Chaînage économique
- **Source** : Boutique de Freelia (`ZONE_CAI_CAP_001`) — l'article le plus vendu de la capitale, toutes races confondues.
- **Recette** : 2× Toile douce + 1× Fourrure courte (drop `MOB_CAI_001-002`, périphérie de Freelia).
- **Prix** : 190 Yrds (achat) · 45 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Officiellement un équipement d'entraînement pour apprivoiseurs débutants. Officieusement, le premier souvenir touristique d'ALfheim : les fausses oreilles bougent toutes seules, animées par un sortilège mineur qui réagit à l'humeur. Les Salamanders en achètent « pour leur petite sœur ». Le Cardinal enregistre 71% d'auto-équipement.

## Intégration Bot
- Joueur : `!equiper ARM_TET_028 tete` · `!inspect ARM_TET_028` — GM : `!sys_give ARM_TET_028 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_028, 1)`
