# Heaume du Bastion de l'Ouest

## Identification Cardinal
- **Item_ID** : `ARM_TET_050`
- **Slot** : Tête — Heaume · **Classe** : Plaque
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 24 · **Affinité raciale** : Gnome (+5% aux bonus si Gnome)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 66 |
| RES magique | 15 |
| Poids | 4,0 kg |
| Durabilité | 680 |
| Pénalité de vol | -5% |
| Bonus | +6 VIT ; +10% DEF quand le porteur est immobile depuis 3s (« Posture du Rempart ») |

## Acquisition & Chaînage économique
- **Source** : Craft — Armurier Bofrik (`NPC_GRA_03`) ; réservé aux joueurs ayant défendu Granzam lors d'un raid (compteur Cardinal).
- **Recette** : 3× Plaque d'acier + 2× Cœur de golem mineur (drop `MOB_GNO_020-024`, `ZONE_GNO_HUNT_002`) + 2× Bloc de granit.
- **Prix** : 5 200 Yrds (achat) · 1 300 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La visière reproduit les meurtrières du Bastion : trois fentes horizontales, rien de plus. Bofrik y grave le nom du raid auquel le porteur a survécu. Sa formule de vente est toujours la même : « Ce heaume a déjà tenu un siège. À toi de ne pas lui faire honte. »

## Intégration Bot
- Joueur : `!equiper ARM_TET_050 tete` · `!inspect ARM_TET_050` — GM : `!sys_give ARM_TET_050 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_050, 1)`
