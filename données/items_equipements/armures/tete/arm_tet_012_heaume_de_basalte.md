# Heaume de Basalte

## Identification Cardinal
- **Item_ID** : `ARM_TET_012`
- **Slot** : Tête — Heaume · **Classe** : Plaque
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 13 · **Affinité raciale** : Salamander (+5% aux bonus si Salamander)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 34 |
| RES magique | 8 (dont +6 vs Feu) |
| Poids | 3,2 kg |
| Durabilité | 420 |
| Pénalité de vol | -3% |
| Bonus | +3 VIT ; -10% dégâts de choc (assommement) |

## Acquisition & Chaînage économique
- **Source** : Craft — Armurier Graz (`NPC_GAT_02`), Quartier Militaire de Gattan.
- **Recette** : 3× Bloc de basalte (récolte, `ZONE_SAL_HUNT_001`) + 2× Cuir brut + 1× Rivet de fer.
- **Prix** : 1 100 Yrds (achat) · 275 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Graz taille chaque heaume dans un seul bloc de basalte refroidi, sans soudure : « une jointure, c'est une invitation », grogne-t-il. Lourd, brut, increvable — l'exact portrait de l'infanterie salamander. Les rayures blanches sur le cimier comptent les charges frontales survécues.

## Intégration Bot
- Joueur : `!equiper ARM_TET_012 tete` · `!inspect ARM_TET_012` — GM : `!sys_give ARM_TET_012 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_012, 1)`
