# Parchemin d'Éclair

## Identification Cardinal
- **Item_ID** : `CSM_PAR_013`
- **Catégorie** : Parchemin · **Type** : Skill consommable (foudre)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 14 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Lance un Éclair (dégâts foudre à cible unique + court étourdissement, sans coût de MP) |
| Durée | Instantané (étourdissement 1 s) |
| Cooldown | 12 s |
| Cumulable | NON — consommé à l'usage |

## Acquisition & Chaînage économique
- **Source** : scribes arcaniques de capitale
- **Recette** : 2× Papier-rune + 1× Éclat de saphir brut + 1× Encre-de-seiche *(scribe arcanique)*
- **Prix** : 150 Yrds (achat) · 37 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Plus mordant que la boule de feu, l'éclair enfermé dans ce parchemin frappe *et* fige brièvement sa cible — une seconde d'immobilité qui vaut de l'or en duel. Les voleurs et les archers l'adorent pour ouvrir un combat sur un avantage. On le reconnaît au fin crépitement qu'il émet, comme s'il gardait un orage prisonnier sous l'encre.

## Intégration Bot
- Joueur : `!use CSM_PAR_013` — GM : `!sys_give CSM_PAR_013 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_PAR_013, 1)`
