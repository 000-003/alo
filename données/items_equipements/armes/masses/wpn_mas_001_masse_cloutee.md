# Masse Cloutée

## Identification Cardinal
- **Item_ID** : `WPN_MAS_001`
- **Famille** : Masse · **Vitesse** : lente
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 3 · **Affinité raciale** : aucune (arme neutre)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 18 |
| Poids | 3,8 kg |
| Durabilité | 240 |
| Bonus | +2 STR, -1 AGI |

## Acquisition & Chaînage économique
- **Source** : Boutique d'armes d'Alne (`ZONE_NEU_CAP_001`).
- **Recette** : 3× Fer commun + 1× Bois d'if.
- **Prix** : 230 Yrds (achat) · 58 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Pas de tranchant, pas de finesse : juste une boule de fer clouté au bout d'un manche, et la certitude que ce qu'elle touche se brise. Idéale contre les créatures cuirassées ou osseuses que les lames ébréchent. Les prêtres itinérants d'Alne la portent en jurant qu'elle « ne verse pas le sang » — ce qui est techniquement vrai.

## Intégration Bot
- Joueur : `!equiper WPN_MAS_001` · `!inspect WPN_MAS_001` — GM : `!sys_give WPN_MAS_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_MAS_001, 1)`
