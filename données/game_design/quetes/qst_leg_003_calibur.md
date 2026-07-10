# Calibur — `QST_LEG_003`

## Identification
- **QST_ID** : `QST_LEG_003`
- **Type** : Grande Quête serveur (arme liée à l'âme, quête sœur d'`QST_LEG_002`)
- **Arme débloquée** : `WPN_LEG_003` — Shekinah, l'Arc de Lumière (Arc, T5)
- **Donneur** : `NPC_CANON_SINON` — Sinon (canonique errante, invulnérable C5)
- **Lieu de l'épreuve** : `ZONE_JOT_RAID_001` (Trône de Thrym / Thrymheim) — glaces de l'abysse
- **Prérequis** : Niveau 45 · Affinité Cait Sith · maîtrise d'arme Arc : Avancé · avoir atteint le Trône de Thrym (chaîne `QST_LEG_002` ou raid concomitant)
- **Récompense** : 10 000 EXP · `WPN_LEG_003` Shekinah (**liée à l'âme**, arme de la légende Sinon)

## Déroulement (étapes)
1. Sinon signale que sous les glaces de Thrymheim dort un arc technologique — Shekinah — que les tourelles de Thrym protègent depuis trop loin pour une épée : seul un arc peut l'atteindre.
2. Pendant que le raid principal (`QST_LEG_002`) fixe Thrym, se détacher pour couvrir les archères de tourelle depuis les corniches gelées (tir sur cibles éloignées et mobiles).
3. Épreuve d'adresse : neutraliser la garde de tourelle sans être délogé du perchoir, dans le froid qui ralentit chaque geste — un tir manqué relance la vague.
4. La chambre de l'arc dégagée, Shekinah se lie à l'âme de l'archère qui l'a méritée ; ses **Flèches de Mana** ne réclament plus jamais de carquois.

## Dialogues (donneur)
- **Début** : « Les épéistes vont foncer sur Thrym en criant. Bien. Ça me laisse le champ libre. Sous ces glaces, il y a un arc qui fabrique ses propres flèches — je l'ai vu. Mais il faut un tir parfait pour l'atteindre, pas un coup de chance. Montre-moi que tu vises comme tu respires. »
- **Fin** : « Tu n'as pas manqué un seul tir dans ce froid. Shekinah est à toi. Un arc qui fait ses flèches à même le mana… le monde a écrit ses règles à sa façon, et toi tu viens de les plier. »

## Notes d'intégration
- Déblocage : récompense liée → IA `SYS_GRANT_ITEM(Avatar_ID, WPN_LEG_003, 1)` (bind-on-pickup) ; `!equiper WPN_LEG_003`. Aucune commande nouvelle.
- **Correction d'ID (étape 34)** : ancrée sur `ZONE_JOT_RAID_001` (atlas, Thrymheim) et non `ZONE_JOT_DUN_001` (corrigé dans la fiche arme).
- Chaînage : quête sœur d'`QST_LEG_002` (même donjon, même minuterie Thrym) ; Sinon canonique (invulnérabilité C5) ; Cait Sith affine (index armes §4).
