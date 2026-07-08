# Masque du Conscrit de Gattan

## Identification Cardinal
- **Item_ID** : `ARM_TET_011`
- **Slot** : Tête — Masque · **Classe** : Cuir
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 6 · **Affinité raciale** : Salamander (+5% aux bonus si Salamander)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 13 |
| RES magique | 4 (dont +4 vs Feu) |
| Poids | 0,6 kg |
| Durabilité | 220 |
| Pénalité de vol | 0% |
| Bonus | +1 STR ; +1 VIT ; immunise aux malus de fumée légère |

## Acquisition & Chaînage économique
- **Source** : Intendance militaire de Gattan — remis à tout joueur salamander qui termine la quête d'initiation « Premier Sang ».
- **Recette** : 2× Cuir brut (drop `MOB_SAL_001-002`, périphérie de Gattan) + 1× Cendre volcanique.
- **Prix** : 300 Yrds (achat) · 75 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Demi-masque de cuir bouilli couvrant nez et bouche, frappé du dragon de Gattan. Réglementaire chez les conscrits, il filtre les fumerolles des champs de lave. La tradition veut qu'on le brûle publiquement le jour où l'on gagne son premier heaume d'obsidienne — quitter la conscription se dit « rendre le cuir au feu ».

## Intégration Bot
- Joueur : `!equiper ARM_TET_011 tete` · `!inspect ARM_TET_011` — GM : `!sys_give ARM_TET_011 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_011, 1)`
