# Tenture Héraldique de Guilde (`DEC_RUG_002`)

## Identification Cardinal
- **Item_ID** : `DEC_RUG_002`
- **Catégorie** : Décoration · **Type** : Tapis / Tenture (`RUG`)
- **Tier** : T2 · **Rareté** : Peu commun · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Aucune

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `comfort_cosmetic` **+0 %** (fierté d'appartenance — aucun bonus chiffré) |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) |
| Déclenchement | Décoratif ; peut afficher le blason de la guilde du propriétaire (`T_GUILDS`) |
| Cumul / plafond | Sans effet mécanique ; illimité |

## Acquisition & Chaînage économique
- **Source** : tapissier héraldiste de toute capitale ; commande personnalisable au blason de guilde.
- **Recette** : 5× `MAT_HRB_001` (Lin Sylvestre) + 2× `DIV_DYE_001` (Teinture d'Indigo) + 1× `DIV_DYE_005` (Teinture de Cochenille) — tissage Nv.16.
- **Prix** : 1 000 ¥ (achat) · 250 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Accrocher les couleurs de sa guilde au-dessus de son âtre, c'est déclarer à quiconque franchit le seuil : « voici les miens ». La tenture n'a aucune vertu magique, seulement celle, immense, de faire d'une maison un foyer d'appartenance. Les vétérans y font broder la date de leur premier raid.

## Intégration Bot
- Joueur : `!decorate DEC_RUG_002` — GM : `!sys_give DEC_RUG_002 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_RUG_002, 1)`
