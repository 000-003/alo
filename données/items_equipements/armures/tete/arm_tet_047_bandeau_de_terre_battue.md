# Bandeau de Terre Battue

## Identification Cardinal
- **Item_ID** : `ARM_TET_047`
- **Slot** : Tête — Bandeau · **Classe** : Tissu
- **Tier** : T1 · **Rareté** : Peu commun
- **Niveau requis** : 6 · **Affinité raciale** : Gnome (+5% aux bonus si Gnome)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 10 |
| RES magique | 8 (dont +4 vs Terre) |
| Poids | 0,3 kg |
| Durabilité | 185 |
| Pénalité de vol | 0% |
| Bonus | +2 INT ; +4% dégâts de magie de Terre |

## Acquisition & Chaînage économique
- **Source** : Craft — géomanciens de Granzam.
- **Recette** : 2× Toile grossière + 2× Argile ocre (récolte, périphérie de Granzam).
- **Prix** : 290 Yrds (achat) · 72 Yrds (revente)

## Lore (Encyclopédie d'Argo)
L'argile tissée dans la trame reste humide en permanence : les géomanciens gnomes affirment qu'un sort de Terre doit « partir d'une terre vivante ». Les novices portent le bandeau jusqu'à ce qu'il sèche définitivement — signe, dit-on, que la magie a fini de s'installer dans le crâne.

## Intégration Bot
- Joueur : `!equiper ARM_TET_047 tete` · `!inspect ARM_TET_047` — GM : `!sys_give ARM_TET_047 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_047, 1)`
