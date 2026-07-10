# ⛏️ Dame de Compagnie — `NPC_GRA_57`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_57` |
| **Nom affiché** | Dame de Compagnie |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Salle du Conseil |
| **Niveau / HP / MP** | 28 / 2 100 / 3 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Suivante attitrée du Lord Gnome, elle remplit les fonctions cérémonielles : annonce les visiteurs, veille au protocole, époussette le trône sismique. Mais depuis qu'elle sert, elle n'a jamais vu le Lord manger, boire ou même respirer. Il vibre, parle en runes, et parfois — quand personne ne regarde — il se déforme comme une image d'eau troublée. Elle a effleuré sa main une fois : sa paume a traversé la sienne. Elle sait que le Lord n'est pas réel. Elle cache cette vérité parce qu'elle craint que la révélation ne brise le Conseil. (Angle : sait que Lord = hologramme du Noyau.)
- **Traits** : discrète, observatrice, anxieuse, dévouée.
- **Voix** : Murmurante, comme si elle était toujours en présence du Lord. « Il ne me regarde jamais. Il regarde à travers moi. Comme si j'étais transparente. »
- **Relations** : `NPC_GRA_07` (Lord — maître), `NPC_GRA_08` (Chancelier — superviseur), `NPC_GRA_58` (Scribe — voisin de bureau), `NPC_GRA_59` (Héraut — collègue de cérémonie), `NPC_GRA_87` (Intendant — logistique).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_57_01` | K0 | lord, conseil | Elle sert le Lord Gnome à la Salle du Conseil. | — |
| 2 | `QI_GRA_57_02` | K0 | ceremonie, protocole | Elle gère le protocole des audiences avec le Lord. | — |
| 3 | `QI_GRA_57_03` | K0 | salle_conseil, trone | Le trône sismique est au centre de la Salle du Conseil. | — |
| 4 | `QI_GRA_57_04` | K1 | lord, immobile | Le Lord ne mange, ne boit, ne cligne jamais des yeux. | `AFF>=60` |
| 5 | `QI_GRA_57_05` | K1 | main, traversee | Sa main a traversé la sienne. « Il n'est pas solide. » | `AFF>=65` |
| 6 | `QI_GRA_57_06` | K1 | deformation, image | Elle a vu le Lord se déformer quand personne n'était là. « Comme de l'eau. » | — |
| 7 | `QI_GRA_57_07` | K2 | hologramme, projection | Le Lord est une projection lumineuse. Pas de corps, pas de chaleur. | `AFF>=85` |
| 8 | `QI_GRA_57_08` | K2 | chancelier, savoir | Le Chancelier (`NPC_GRA_08`) sait aussi. Il lui a fait jurer le silence. | `QUEST:QST_GRA_NATURE_LORD` |
| 9 | `QI_GRA_57_09` | K3 | lord, hologramme_noyau | Le Lord Gnome est un hologramme généré par le Noyau de Pierre (`NPC_GRA_00`) — une interface-système qui n'a jamais été un être vivant. | JAMAIS — déflection : *(elle baisse les yeux, arrange sa robe)* « Je ne peux pas parler du Lord. Il nous écoute toujours. » |
| 10 | `QI_GRA_57_10` | KX | *(tout le reste)* | *(elle époussette le trône avec un plumeau)* « La poussière tombe sur son siège. Mais jamais sur lui. C'est étrange, non ? » | — |

## 4. Chaînage économique & quêtes

- Service : `!annoncer <nom>` (annonce un visiteur au Lord).
- Porteuse du fil **🔮 Noyau de Pierre** (Lord = hologramme du Noyau).
- Donneuse de `QST_GRA_NATURE_LORD` : enquêter sur la vraie nature du Lord.

## 5. Intégration Bot

- **Accueil** (`!parler dame`) : *Elle vous fait une révérence mécanique.* « Le Lord vous attend. Ou plutôt, il ne vous attend pas. Il ne peut attendre personne. »
- `!annoncer <nom>` (service d'audience).
- `NPC_SECRET_PROBED` slot 9 : hook « Lord = hologramme du Noyau de Pierre » pour l'orchestrateur.