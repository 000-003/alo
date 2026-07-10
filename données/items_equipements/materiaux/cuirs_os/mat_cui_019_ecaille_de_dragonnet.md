# Écaille de Dragonnet

## Identification Cardinal
- **Item_ID** : `MAT_CUI_019`
- **Famille** : Cuir/Os · **Rareté** : Rare
- **Tier** : T4

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_SPR_010` Dragonnet des Cryptes (taux 8%) > Nécropole |
| Acheté par | `NPC_PEN_84` Nécromancien à 80 Yrds |
| Entre dans | `ARM_TET_090`, `WPN_BOU_006` |
| Empilable | OUI (×99) |

## Lore
Les dragonnets des Cryptes naissent dans les profondeurs de la Nécropole, nourris par la magie résiduelle des sépultures. Leurs écailles, d'un noir profond veiné d'argent, absorbent la lumière ambiante. Le Nécromancien les paie une fortune pour ses expériences de réanimation améliorée. Chaque écaille est réputée contenir une étincelle de vie volée aux morts. Les porteurs d'armures en écailles de dragonnet gagnent une résistance naturelle à la nécrose.

## Intégration Bot
- Joueur : `!inspect MAT_CUI_019` — GM : `!sys_give MAT_CUI_019 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_CUI_019, Qty)`
