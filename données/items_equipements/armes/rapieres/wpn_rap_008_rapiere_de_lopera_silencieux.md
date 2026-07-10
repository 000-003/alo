# Rapière de l'Opéra Silencieux

## Identification Cardinal
- **Item_ID** : `WPN_RAP_008`
- **Famille** : Rapière · **Vitesse** : rapide
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 40 · **Affinité raciale** : Puca (+5% aux bonus si Puca)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 92 |
| Poids | 1,3 kg |
| Durabilité | 800 |
| Bonus | +10 AGI, +5 INT |

## Acquisition & Chaînage économique
- **Source** : Craft — luthier-forgeron de Lioda (`NPC_LIO_04`) ; corde tombée par Ondaro (`BOSS_PUC_DUN_001`, 8%).
- **Recette** : 5× Argent sonore + 4× Mithril de Brokkheim + 2× Gemme de Granzam.
- **Prix** : 16 000 Yrds (achat) · 4 000 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Contrairement aux autres lames de Lioda, celle-ci ne sonne jamais : forgée avec une corde d'Ondaro, elle absorbe le son au lieu de le produire, ouvrant autour de son porteur une bulle de silence total. Dans l'Amphithéâtre Oublié, où toute la magie repose sur le tempo, elle est une arme de sacrilège autant que de duel. Les Pucas la surnomment « la note qui manque ».

## Intégration Bot
- Joueur : `!equiper WPN_RAP_008` · `!inspect WPN_RAP_008` — GM : `!sys_give WPN_RAP_008 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_RAP_008, 1)`
