# Gram, l'Épée Démoniaque

## Identification Cardinal
- **Item_ID** : `WPN_LEG_001`
- **Famille** : Épée à deux mains · **Vitesse** : lente
- **Tier** : T5 · **Rareté** : Légendaire
- **Niveau requis** : 45 · **Affinité raciale** : Salamander (arme signature du Général Eugene)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 205 |
| Poids | 6,0 kg |
| Durabilité | 1 200 |
| Bonus | +15 STR, +6 résistance feu, -1 AGI |
| Capacité signature | **Décalage Éthéré** : à l'impact contre une arme ou un bouclier, la lame se dématérialise 0,5 s, traverse la garde adverse et frappe directement l'avatar (ignore le BLOC une fois par combat). |

## Acquisition & Chaînage économique
- **Source** : Butin lié de la quête de raid « La Lame du Général » (`QST_LEG_001`) — forteresse de Voulg (`ZONE_SAL_TWN_001`) contre le Général Salamander Eugene (hologramme canon, sans ID d'avatar). **Lié à l'âme dès le ramassage.**
- **Recette** : non craftable.
- **Prix** : non vendable en boutique (lié) · ~10 000 Yrds (revente exceptionnelle au fondoir de Gattan)

## Lore (Encyclopédie d'Argo)
Le pendant obscur d'Excalibur, arraché après des mois de raid acharné dans les volcans de Voulg. Arme signature du Général Eugene, elle porte encore la chaleur du cœur de la forteresse et laisse une cicatrice orange dans l'air à chaque abattage. On raconte que le Cardinal n'a jamais autorisé qu'une seule Gram à exister sur le serveur à la fois : la reprendre, c'est l'arracher au précédent porteur.

## Intégration Bot
- Joueur : `!equiper WPN_LEG_001` · `!inspect WPN_LEG_001` — GM : `!sys_give WPN_LEG_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_LEG_001, 1)`
