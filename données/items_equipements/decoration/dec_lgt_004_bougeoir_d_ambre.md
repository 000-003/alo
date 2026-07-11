# Bougeoir d'Ambre (`DEC_LGT_004`)

## Identification Cardinal
- **Item_ID** : `DEC_LGT_004`
- **Catégorie** : Décoration · **Type** : Éclairage (`LGT`)
- **Tier** : T1 · **Rareté** : Commun · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Aucune

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `comfort_cosmetic` **+0 %** (ambiance chaude — aucun bonus chiffré) |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) |
| Déclenchement | Décoratif ; ajoute une lueur miel à la description du foyer |
| Cumul / plafond | Sans effet mécanique ; illimité |

## Acquisition & Chaînage économique
- **Source** : **achat** — verriers et merciers de toute capitale, vendu comme produit fini (pas de recette joueur).
- **Recette** : — *(article de série)*
- **Prix** : 300 ¥ (achat) · 75 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Une flamme derrière une bille d'ambre translucide teinte toute la pièce d'un miel figé. Modeste, universel, on le retrouve du taudis Imp au domaine Undine. Il n'apporte rien qu'un peu de tiédeur à l'œil — et parfois c'est tout ce qu'il faut pour qu'un logement cesse d'être une simple ligne de base de données.

## Intégration Bot
- Joueur : `!decorate DEC_LGT_004` — GM : `!sys_give DEC_LGT_004 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_LGT_004, 1)`
