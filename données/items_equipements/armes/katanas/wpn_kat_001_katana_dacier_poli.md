# Katana d'Acier Poli

## Identification Cardinal
- **Item_ID** : `WPN_KAT_001`
- **Famille** : Katana · **Vitesse** : rapide
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 2 · **Affinité raciale** : aucune (arme neutre)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 12 |
| Poids | 1,6 kg |
| Durabilité | 170 |
| Bonus | +1 AGI |

## Acquisition & Chaînage économique
- **Source** : Boutique d'armes d'Alne (`ZONE_NEU_CAP_001`) et de Gattan (`ZONE_SAL_CAP_001`).
- **Recette** : 3× Acier de braise + 1× Cuir de reliure.
- **Prix** : 320 Yrds (achat) · 80 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le katana d'entrée du serveur, poli jusqu'à servir de miroir. Sa courbe modeste enseigne le geste qui compte pour cette famille d'armes : ne jamais s'arrêter sur la cible, mais la traverser. Beaucoup de duellistes légendaires ont commencé leur carrière avec exactement cette lame, achetée pour trois fois rien.

## Intégration Bot
- Joueur : `!equiper WPN_KAT_001` · `!inspect WPN_KAT_001` — GM : `!sys_give WPN_KAT_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_KAT_001, 1)`
