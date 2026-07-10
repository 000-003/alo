# Parchemin de Soin

## Identification Cardinal
- **Item_ID** : `CSM_PAR_012`
- **Catégorie** : Parchemin · **Type** : Skill consommable (soin)
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 5 · **Affinité raciale** : Undine (+5% soin si Undine)

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Lance un sort de soin sur soi ou un allié (200 HP, sans coût de MP) |
| Durée | Instantané |
| Cooldown | 8 s |
| Cumulable | NON — consommé à l'usage |

## Acquisition & Chaînage économique
- **Source** : temples d'Alne, scribes de l'Archipel d'Écume
- **Recette** : 1× Papier-rune + 1× Herbe-de-vie + 1× Encre-de-seiche *(scribe sacré)*
- **Prix** : 70 Yrds (achat) · 17 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Un soin lancé sans être soigneur : voilà ce que promet ce parchemin, béni de la main des prêtres Undine. Il permet à un groupe sans guérisseur de tenir un peu plus longtemps — un filet de sécurité de papier. Les puristes rappellent qu'il ne remplacera jamais un vrai soigneur ; les groupes désespérés répondent qu'un vrai soigneur, justement, ils n'en ont pas.

## Intégration Bot
- Joueur : `!use CSM_PAR_012` — GM : `!sys_give CSM_PAR_012 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_PAR_012, 1)`
