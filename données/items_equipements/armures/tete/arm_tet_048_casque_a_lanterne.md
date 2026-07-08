# Casque à Lanterne

## Identification Cardinal
- **Item_ID** : `ARM_TET_048`
- **Slot** : Tête — Casque · **Classe** : Maille
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 13 · **Affinité raciale** : Gnome (+5% aux bonus si Gnome)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 28 |
| RES magique | 8 |
| Poids | 1,7 kg |
| Durabilité | 380 |
| Pénalité de vol | -1% |
| Bonus | +3 VIT ; source de lumière permanente (rayon 15 m, n'occupe pas la main) |

## Acquisition & Chaînage économique
- **Source** : Craft — ateliers miniers de Granzam ; le cristal provient des galeries T2.
- **Recette** : 3× Maillon de fer + 1× Cristal luminescent (drop `MOB_GNO_010-013`, `ZONE_GNO_HUNT_001`) + 1× Cuir brut.
- **Prix** : 1 050 Yrds (achat) · 260 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La lampe frontale des profondeurs : un cristal luminescent serti au front, qui brille plus fort quand le porteur a peur — son pouls l'alimente. Les mineurs gnomes lisent la galerie à la lumière des casques voisins : « si le tunnel devient trop clair, on remonte ».

## Intégration Bot
- Joueur : `!equiper ARM_TET_048 tete` · `!inspect ARM_TET_048` — GM : `!sys_give ARM_TET_048 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_048, 1)`
