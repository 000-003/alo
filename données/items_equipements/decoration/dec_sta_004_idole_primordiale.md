# Idole Primordiale (`DEC_STA_004`)

## Identification Cardinal
- **Item_ID** : `DEC_STA_004`
- **Catégorie** : Décoration · **Type** : Statue (`STA`)
- **Tier** : T5 · **Rareté** : Légendaire · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Aucune (relique primordiale)

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_hp_regen_pct` **+5 %** |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` ; l'idole irradie une vie primordiale au plafond autorisé |
| Cumul / plafond | Catégorie `rest_hp_regen` **plafonnée à +5 % cumulés** par logement (déjà au plafond seule) |

## Acquisition & Chaînage économique
- **Source** : **loot / craft de prestige** — sculptée autour d'un `MAT_DRP_020` (Cœur du Monde), fragment du noyau d'ALfheim ; œuvre d'un seul grand-maître par capitale.
- **Recette** : 1× `MAT_DRP_020` (Cœur du Monde) + 6× `MAT_MIN_025` (Minerai Primordial) + 1× `MAT_GEM_010` (Gemme Primordiale) — statuaire Nv.80.
- **Prix** : 120 000 ¥ (achat, ventes exceptionnelles) · 30 000 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Nul ne sait qui, ou quoi, l'idole représente : ni race, ni divinité connue, juste une forme trapue et sans visage qui semble avoir toujours existé. Sertie d'un Cœur du Monde encore battant, elle diffuse dans le logement une pulsation de vie sourde, comme si la maison respirait avec son propriétaire. Les rares foyers qui en possèdent une n'en parlent qu'à voix basse — on ne se vante pas d'héberger un morceau du commencement.

## Intégration Bot
- Joueur : `!decorate DEC_STA_004` — GM : `!sys_give DEC_STA_004 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_STA_004, 1)`
