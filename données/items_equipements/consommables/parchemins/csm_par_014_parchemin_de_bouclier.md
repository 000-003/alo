# Parchemin de Bouclier

## Identification Cardinal
- **Item_ID** : `CSM_PAR_014`
- **Catégorie** : Parchemin · **Type** : Skill consommable (protection)
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 6 · **Affinité raciale** : Gnome (+5% absorption si Gnome)

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Génère un bouclier absorbant 250 dégâts pendant 15 s (sans coût de MP) |
| Durée | 15 s |
| Cooldown | 20 s |
| Cumulable | NON — consommé à l'usage |

## Acquisition & Chaînage économique
- **Source** : scribes de Granzam, comptoirs de donjon (toutes villes)
- **Recette** : 1× Papier-rune + 1× limaille de fer + 1× Encre-de-seiche *(scribe runique)*
- **Prix** : 75 Yrds (achat) · 18 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Un mur de runes translucides qui jaillit autour du porteur, encaissant les premiers coups à sa place. Les Gnomes runiques en ont perfectionné le tracé — leur version tient un peu plus longtemps que les copies. Idéal pour un lanceur de sorts fragile qui redoute la première charge, ou un débutant qui a compris qu'un peu de prudence coûte moins cher qu'une résurrection.

## Intégration Bot
- Joueur : `!use CSM_PAR_014` — GM : `!sys_give CSM_PAR_014 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_PAR_014, 1)`
