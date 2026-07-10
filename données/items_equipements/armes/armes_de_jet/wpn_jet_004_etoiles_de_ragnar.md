# Étoiles de Ragnar

## Identification Cardinal
- **Item_ID** : `WPN_JET_004`
- **Famille** : Arme de jet · **Vitesse** : rapide
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 39 · **Affinité raciale** : Cait Sith (+5% aux bonus si Cait Sith)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 92 |
| Poids | 0,7 kg (jeu de 4) |
| Durabilité | 780 |
| Bonus | +11 AGI, +3 VIT |

## Acquisition & Chaînage économique
- **Source** : Craft — Brok de Freelia (`NPC_FRE_07`) ; corne tombée par Ragnar (`BOSS_CAI_DUN_001`, 8%).
- **Recette** : 5× Croc de béhémoth + 4× Mithril de Brokkheim + 2× Gemme de Granzam.
- **Prix** : 15 000 Yrds (achat) · 3 750 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Taillées dans les éclats de corne du Roi Béhémoth et lestées de mithril, ces quatre étoiles reviennent à la main du lanceur après un arc parfait — un effet de la densité, jurent les artisans, pas de la magie. Les maîtres Cait Sith les font tournoyer en enchaînant cibles multiples d'un seul geste ample. Perdre une Étoile de Ragnar au combat, à Freelia, c'est perdre la face.

## Intégration Bot
- Joueur : `!equiper WPN_JET_004` · `!inspect WPN_JET_004` — GM : `!sys_give WPN_JET_004 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_JET_004, 1)`
