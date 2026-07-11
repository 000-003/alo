# Statue de la Déesse-Mère (`DEC_STA_002`)

## Identification Cardinal
- **Item_ID** : `DEC_STA_002`
- **Catégorie** : Décoration · **Type** : Statue (`STA`)
- **Tier** : T4 · **Rareté** : Épique · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Aucune (culte pan-racial)

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_exp_pct` **+3 %** |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` ; la prière domestique « élève » l'esprit |
| Cumul / plafond | Catégorie `rest_exp` **plafonnée à +5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : atelier de statuaire sacrée de toute capitale ; objet de dévotion des foyers pieux.
- **Recette** : 6× `MAT_MIN_004` (Minerai d'Argent, patine) + 4× `MAT_GEM_006` (Saphir des Glaces, auréole) + 1× `MAT_HRB_015` (Fleur de l'Âme) — statuaire Nv.42.
- **Prix** : 15 000 ¥ (achat) · 3 750 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Sous les neuf races d'ALfheim couve un même vieux culte : celui de la Déesse-Mère qui aurait rêvé le monde avant que The Seed ne le calcule. Sa statue, bras ouverts, veille sur l'âtre des croyants. Nul ne sait si elle entend ; mais prier chaque soir devant elle rend, dit-on, l'esprit plus vaste et l'apprentissage plus doux. Argo, sceptique, note seulement que « ça ne coûte rien d'y croire ».

## Intégration Bot
- Joueur : `!decorate DEC_STA_002` — GM : `!sys_give DEC_STA_002 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_STA_002, 1)`
