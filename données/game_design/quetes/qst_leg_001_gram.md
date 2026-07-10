# La Lame du Général — `QST_LEG_001`

## Identification
- **QST_ID** : `QST_LEG_001`
- **Type** : Quête de raid légendaire (arme liée à l'âme)
- **Arme débloquée** : `WPN_LEG_001` — Gram, l'Épée Démoniaque (Épée 2M, T5)
- **Donneur** : `NPC_GAT_01` — Kagemune, Seigneur de Gattan (notable, `is_essential`)
- **Lieu de l'épreuve** : `ZONE_SAL_TWN_001` — forteresse de Voulg (raid contre le **Général Eugene**, hologramme canon sans ID)
- **Prérequis** : Niveau 45 · groupe de raid (contenu multi-joueurs) · réputation Salamander élevée
- **Récompense** : 8 000 EXP · `WPN_LEG_001` Gram (**liée à l'âme dès le ramassage**, une seule Gram active par serveur)

## Déroulement (étapes)
1. Kagemune révèle que le Général Eugene garde encore, au cœur de Voulg, la jumelle sombre d'Excalibur — Gram, la lame qu'aucun Salamander vivant n'a osé lui reprendre.
2. Monter un raid et percer les lignes de la forteresse de Voulg (`ZONE_SAL_TWN_001`) — combat prolongé, la chaleur de la forteresse alourdit chaque vague.
3. Affronter Eugene lui-même : l'hologramme du Général ne cède la lame qu'après un affrontement d'endurance où sa capacité **Décalage Éthéré** (ignore le BLOC) doit être anticipée.
4. Eugene vaincu, Gram tombe **liée à l'âme** ; la reprendre l'arrache au précédent porteur (unicité serveur). Rapporter la victoire à Kagemune.

## Dialogues (donneur)
- **Début** : « Excalibur brille pour les héros. Gram, elle, appartient à celui qui a le cran de l'arracher au Général en personne. Eugene la tient depuis trop longtemps. Monte ton raid. Reviens avec la lame — ou ne reviens pas. »
- **Fin** : « Tu portes Gram. Le serveur n'en tolère qu'une, et c'est la tienne désormais. Que sa cicatrice orange rappelle à tous qui l'a reprise au Général. »

## Notes d'intégration
- Déblocage : butin lié → IA `SYS_GRANT_ITEM(Avatar_ID, WPN_LEG_001, 1)` (bind-on-pickup) ; `!equiper WPN_LEG_001` / `!inspect WPN_LEG_001`. Aucune commande nouvelle.
- Chaînage : arme signature d'Eugene (hologramme canon, convention Alicia Rue — sans ID d'avatar) ; forteresse Voulg (`ZONE_SAL_TWN_001`, D1).
- Unicité serveur : une seule `WPN_LEG_001` active (contrainte de la fiche arme) — arbitrage GM par `!sys_give`/révocation.
