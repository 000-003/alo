# Globe Luminescent d'Abysse (`DEC_LGT_005`)

## Identification Cardinal
- **Item_ID** : `DEC_LGT_005`
- **Catégorie** : Décoration · **Type** : Éclairage (`LGT`)
- **Tier** : T4 · **Rareté** : Épique · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Undine (fabrication)

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_mp_regen_pct` **+4 %** |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` ; la bioluminescence abyssale nourrit le mana |
| Cumul / plafond | Catégorie `rest_mp_regen` **plafonnée à +5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : verrier-perlier Undine de l'Archipel d'Écume (`ZONE_UND_CAP_001`) ; nécessite un plongeon aux abysses.
- **Recette** : 1× `MAT_DRP_010` (Perle des Abysses) + 4× `MAT_MIN_012` (Pierre de Lune) + 2× `MAT_GEM_006` (Saphir des Glaces) — verrerie Nv.45.
- **Prix** : 16 000 ¥ (achat) · 4 000 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Au cœur d'un globe d'eau scellée flotte une perle arrachée aux fosses les plus noires du Lac Archipel, où la lumière du Cardinal ne descend jamais. Elle brille pourtant, d'un froid bleu-vert qui semble venir d'un autre monde. Les Undine disent qu'on y voit ses propres songes ; les mages disent surtout qu'on y récupère son mana deux fois plus vite.

## Intégration Bot
- Joueur : `!decorate DEC_LGT_005` — GM : `!sys_give DEC_LGT_005 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_LGT_005, 1)`
