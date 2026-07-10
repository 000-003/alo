# Parchemin de Déliage Mineur

## Identification Cardinal
- **Item_ID** : `CSM_PAR_009`
- **Catégorie** : Parchemin · **Type** : Utilitaire (déliage)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 15 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Retire le statut `is_bound` (lié à l'âme) d'un objet T1-T2, le rendant échangeable |
| Durée | Instantané |
| Cooldown | 10 s |
| Cumulable | NON — sans effet sur les objets T3+ et les craft-titres T5 |

## Acquisition & Chaînage économique
- **Source** : scribes de capitale et marché noir
- **Recette** : 2× Papier-rune + 1× Sel-de-lune + 1× Encre-de-seiche *(scribe)*
- **Prix** : 170 Yrds (achat) · 42 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Un sceau délicat qui « décroche » un objet de l'âme à laquelle il s'est lié — mais seulement sur les pièces modestes. Les objets de haut tier et les craft-titres restent scellés à jamais : le Cardinal ne laisse pas défaire ce qu'il a lié profond. Utile pour revendre un premier équipement de départ ; inutile pour tricher sur l'endgame.

## Intégration Bot
- Joueur : `!use CSM_PAR_009` — GM : `!sys_give CSM_PAR_009 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_PAR_009, 1)`
