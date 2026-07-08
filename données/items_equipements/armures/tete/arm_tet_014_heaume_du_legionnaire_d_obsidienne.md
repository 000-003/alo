# Heaume du Légionnaire d'Obsidienne

## Identification Cardinal
- **Item_ID** : `ARM_TET_014`
- **Slot** : Tête — Heaume · **Classe** : Plaque
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 24 · **Affinité raciale** : Salamander (+5% aux bonus si Salamander)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 62 |
| RES magique | 18 (dont +12 vs Feu) |
| Poids | 3,8 kg |
| Durabilité | 650 |
| Pénalité de vol | -4% |
| Bonus | +5 VIT ; +4 STR ; réduit de 15% l'accumulation de la jauge de Surchauffe (D11) |

## Acquisition & Chaînage économique
- **Source** : Craft — Armurier Graz (`NPC_GAT_02`) ; plan lâché dans la Désolation de Magma.
- **Recette** : 3× Minerai d'obsidienne (récolte, `ZONE_SAL_HUNT_002`) + 2× Écaille ignée (drop `MOB_SAL_020-024`) + 1× Bloc de basalte.
- **Prix** : 4 800 Yrds (achat) · 1 200 Yrds (revente)

## Lore (Encyclopédie d'Argo)
L'équipement standard des légions qui patrouillent la Désolation de Magma. L'obsidienne polie réfléchit la chaleur au lieu de l'absorber — dans la Caldeira, cela vaut plusieurs minutes de combat supplémentaires avant l'étouffement. Le miroir noir du heaume aurait aussi un usage tactique : aveugler l'ennemi au soleil couchant.

## Intégration Bot
- Joueur : `!equiper ARM_TET_014 tete` · `!inspect ARM_TET_014` — GM : `!sys_give ARM_TET_014 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_014, 1)`
