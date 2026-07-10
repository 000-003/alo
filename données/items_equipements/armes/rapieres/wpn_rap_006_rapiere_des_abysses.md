# Rapière des Abysses

## Identification Cardinal
- **Item_ID** : `WPN_RAP_006`
- **Famille** : Rapière · **Vitesse** : rapide
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 26 · **Affinité raciale** : Undine (+5% aux bonus si Undine)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 46 |
| Poids | 1,5 kg |
| Durabilité | 560 |
| Bonus | +6 AGI, +2 RES magique |

## Acquisition & Chaînage économique
- **Source** : Craft — Finbar (`NPC_UND_06`) ; écaille tombée par le boss de zone (`MOB_UND_026`, 8%).
- **Recette** : 4× Cristal d'eau pur + 3× Écaille d'Hydre + 1× Gemme de Granzam.
- **Prix** : 4 800 Yrds (achat) · 1 200 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Forgée pour le combat sous la surface, elle ne subit pas la friction de l'eau et frappe aussi vite en apnée qu'à l'air libre. Les gardes du Gouffre de Léviathan la préfèrent aux lames plus lourdes, inutilisables dans les profondeurs. Sa teinte bleu-noir s'assombrit avec la pression, comme si elle plongeait avec son porteur.

## Intégration Bot
- Joueur : `!equiper WPN_RAP_006` · `!inspect WPN_RAP_006` — GM : `!sys_give WPN_RAP_006 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_RAP_006, 1)`
