# Essence de Yggdrasil

## Identification Cardinal
- **Item_ID** : `MAT_DRP_019`
- **Famille** : Drop de monstre · **Légendaire**
- **Tier** : T4

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop endgame Dôme `ZONE_YGG_DUN_001` (boss `[TODO]` — ID non formalisé, à créer lot faune, taux 1%) |
| Acheté par | `NPC_ALN_98` à 2000 Yrds |
| Entre dans | `CSM_NOU_035`, `WPN_LEG_002` (Yggdrasil) |
| Empilable | OUI (×99) |

## Lore
Le gardien Ygg, vestige de l'Arbre-Monde, répand une sève luminescente quand on l'affaiblit. Cette essence dorée contient la mémoire génétique de toutes les plantes d'Alnéa. Les sages d'Isilde la distillent pour créer des élixirs T5 capables de régénérer des membres perdus. On murmure que boire une goutte d'essence non diluée permet d'entendre le chuchotement des arbres anciens.

## Intégration Bot
- Joueur : `!inspect MAT_DRP_019` — GM : `!sys_give MAT_DRP_019 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_DRP_019, Qty)`
