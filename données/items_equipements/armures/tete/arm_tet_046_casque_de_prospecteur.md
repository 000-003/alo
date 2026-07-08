# Casque de Prospecteur

## Identification Cardinal
- **Item_ID** : `ARM_TET_046`
- **Slot** : Tête — Casque · **Classe** : Cuir
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 2 · **Affinité raciale** : Gnome (+5% aux bonus si Gnome)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 12 |
| RES magique | 2 |
| Poids | 0,8 kg |
| Durabilité | 230 |
| Pénalité de vol | 0% |
| Bonus | +2 VIT ; -50% dégâts des chutes de pierres mineures |

## Acquisition & Chaînage économique
- **Source** : Boutique minière de Granzam (`ZONE_GNO_CAP_001`) — équipement standard des concessions.
- **Recette** : 2× Cuir brut + 1× Armature de fer (drop `MOB_GNO_001-002`, périphérie de Granzam).
- **Prix** : 210 Yrds (achat) · 52 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le règlement minier de Granzam tient en une ligne : « pas de casque, pas de concession ». Le cuir est doublé d'une coque de fer cabossée — chaque bosse est un souvenir, et les prospecteurs refusent qu'on les redresse. Un casque lisse est un casque de menteur.

## Intégration Bot
- Joueur : `!equiper ARM_TET_046 tete` · `!inspect ARM_TET_046` — GM : `!sys_give ARM_TET_046 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_046, 1)`
