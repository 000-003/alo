# Calot de Suie de Forge

## Identification Cardinal
- **Item_ID** : `ARM_TET_056`
- **Slot** : Tête — Calot · **Classe** : Tissu
- **Tier** : T1 · **Rareté** : Peu commun
- **Niveau requis** : 5 · **Affinité raciale** : Leprechaun (+5% aux bonus si Leprechaun)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 9 |
| RES magique | 6 (dont +4 vs Feu) |
| Poids | 0,2 kg |
| Durabilité | 180 |
| Pénalité de vol | 0% |
| Bonus | +2 DEX ; -5% coût en matériaux des réparations effectuées soi-même |

## Acquisition & Chaînage économique
- **Source** : Craft — tisserands de la Halle du Marteau.
- **Recette** : 2× Toile grossière + 2× Suie de la Forge-Mère (récolte quotidienne limitée).
- **Prix** : 280 Yrds (achat) · 70 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La suie de la Forge-Mère n'est jamais jetée : elle contient des micro-fragments de tous les métaux qui y ont fondu depuis la fondation. Un calot neuf est gris ; après un an de travail, il scintille. Les compagnons leprechauns disent qu'on peut y lire la carrière d'un forgeron comme dans les cernes d'un arbre.

## Intégration Bot
- Joueur : `!equiper ARM_TET_056 tete` · `!inspect ARM_TET_056` — GM : `!sys_give ARM_TET_056 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_056, 1)`
