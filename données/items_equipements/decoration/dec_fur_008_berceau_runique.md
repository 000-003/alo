# Berceau Runique (`DEC_FUR_008`)

## Identification Cardinal
- **Item_ID** : `DEC_FUR_008`
- **Catégorie** : Décoration · **Type** : Mobilier (`FUR`)
- **Tier** : T2 · **Rareté** : Peu commun · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Aucune

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_mp_regen_pct` **+2 %** |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` ; la berceuse gravée « apaise » le mana |
| Cumul / plafond | Catégorie `rest_mp_regen` **plafonnée à +5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : ébéniste-runiste de toute capitale ; pièce symbolique offerte aux couples mariés (cf. `T_MARRIAGES`).
- **Recette** : 5× `MAT_WOD_003` (Branche de Saule) + 2× `DIV_RUN_006` (Rune de Mana, berceuse apaisante) — menuiserie Nv.15.
- **Prix** : 1 600 ¥ (achat) · 400 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Le saule pleureur, dit-on, garde le sommeil. Gravé de runes de calme, ce berceau reste un ornement même dans un foyer sans enfant : dans un monde où nul n'enfante vraiment, il symbolise l'attente et l'espoir d'un lignée de guilde. Les couples le placent près du lit conjugal comme une promesse.

## Intégration Bot
- Joueur : `!decorate DEC_FUR_008` — GM : `!sys_give DEC_FUR_008 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_FUR_008, 1)`
