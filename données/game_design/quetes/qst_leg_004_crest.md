# Le Legs de la Dormeuse — `QST_LEG_004`

## Identification
- **QST_ID** : `QST_LEG_004`
- **Type** : Quête de forge unique (arme liée à l'âme, héritage canon)
- **Arme débloquée** : `WPN_LEG_004` — Crest of Yggdrasil, la Rapière du Blason (Rapière, T5)
- **Donneur** : `NPC_CANON_LISBETH` — Lisbeth, maître-artisane (canonique errante, invulnérable C5)
- **Lieu de l'épreuve** : forge unique de Lisbeth · matériaux de Jötunheimr & des Undine
- **Prérequis** : Niveau 44 · Affinité Undine · **Titre « Épée Absolue »** (`QST_T5_OSS_RAP_01`, Mother's Rosario) · Cristal d'Eau Pur + Argent (matériaux de commande)
- **Récompense** : 50 000 EXP, 2 000 Yrds · `WPN_LEG_004` Crest of Yggdrasil (**liée à l'âme**, jamais un butin — une transmission) · Titre **« Héritier de Yuuki »** (`!titre_set`)

## Déroulement (étapes)
1. Lisbeth ne forge cette rapière que pour qui a hérité de l'Original Sword Skill de Yuuki : elle exige d'abord la preuve du titre **« Épée Absolue »** (Mother's Rosario, `QST_T5_OSS_RAP_01`).
2. Réunir les matériaux de commande : **Cristal d'Eau Pur** (économie Undine, chaîne de Finbar/Coralia) et **Argent** raffiné — aucune boutique ne les vend assemblés.
3. Assister Lisbeth à la forge : maintenir l'alliage à la trempe exacte (mini-épreuve d'artisanat) pour que la lame soit assez fine pour enchaîner Mother's Rosario sans friction de l'air.
4. La rapière achevée, Lisbeth la remet en main propre — **liée à l'âme**, au nom de la Dormeuse, comme une promesse plutôt qu'un trophée.

## Dialogues (donneur)
- **Début** : « Je ne forge pas celle-là pour de l'argent. Je l'ai faite une fois pour Asuna, quand elle a hérité de l'épée de Yuuki. Si tu portes le même titre — l'Épée Absolue — alors je la referai pour toi. Apporte le cristal et l'argent. Le reste, c'est ma main. »
- **Fin** : « Voilà. Le Blason d'Yggdrasil. Elle tranche l'air sans le sentir. Ce n'est pas un butin, tu m'entends — c'est un legs. Transmets-le un jour, toi aussi. »

## Notes d'intégration
- Déblocage : forge unique → IA `SYS_GRANT_ITEM(Avatar_ID, WPN_LEG_004, 1)` (bind-on-pickup) ; `!forge` / `!equiper WPN_LEG_004`. Aucune commande nouvelle.
- **Chaînage inter-quêtes** : prérequis strict = titre `QST_T5_OSS_RAP_01` (étape 33) → boucle Rapière T5 → légendaire. Héritage canon Yuuki → Asuna (`NPC_CANON_YUUKI`/`NPC_CANON_ASUNA`, invulnérabilité C5).
- Chaînage éco : Cristal d'Eau Pur (filière Undine, Finbar `NPC_UND_06`/Coralia `NPC_UND_07`) — cohérence D15 (dépendances inter-raciales).
