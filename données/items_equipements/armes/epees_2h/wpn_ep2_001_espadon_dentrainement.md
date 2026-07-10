# Espadon d'Entraînement

## Identification Cardinal
- **Item_ID** : `WPN_EP2_001`
- **Famille** : Épée à deux mains · **Vitesse** : lente
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 3 · **Affinité raciale** : aucune (arme neutre)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 18 |
| Poids | 5,5 kg |
| Durabilité | 240 |
| Bonus | +2 STR, -1 AGI |

## Acquisition & Chaînage économique
- **Source** : Boutique d'armes d'Alne (`ZONE_NEU_CAP_001`).
- **Recette** : 5× Fer commun + 2× Cuir de reliure.
- **Prix** : 360 Yrds (achat) · 90 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Trop lourd pour être élégant, trop simple pour se briser, l'espadon des salles d'armes d'Alne apprend une seule chose : anticiper. Qui frappe trop tôt avec cette masse d'acier se retrouve à découvert une seconde entière. Les maîtres d'armes s'en servent pour humilier les impatients avant de leur confier mieux.

## Intégration Bot
- Joueur : `!equiper WPN_EP2_001` · `!inspect WPN_EP2_001` — GM : `!sys_give WPN_EP2_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_EP2_001, 1)`
