# 🕯️ Dame Compagnie — `NPC_PEN_65`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_65` |
| **Nom affiché** | Dame Compagnie |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_SPR_CAP_001E` — Penwether, Salle Conseil Voilé |
| **Niveau / HP / MP** | 18 / 540 / 360 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Suivante personnelle du Chancelier Masques `NPC_PEN_07`. Elle le sert depuis plus longtemps que quiconque. Elle a vu le Chancelier changer — littéralement. Elle sait qu'il « reset » périodiquement : il perd la mémoire, adopte des tics différents, parfois une voix différente. Elle pense qu'il est possédé ou malade. La vérité : le Chancelier est un PNJ dont l'instance est régulièrement réinitialisée par le serveur. La Dame Compagnie est la seule à avoir remarqué le motif, parce qu'elle est la seule à le servir assez longtemps entre deux resets.
- **Traits** : discrète, loyale, mémoire infaillible, ne quitte jamais le Chancelier des yeux.
- **Voix** : basse, posée. « *Il est fatigué aujourd'hui. Il m'a appelée par un autre nom. Il fait ça, parfois. Il se réveille et il a oublié qui je suis. Mais je reste. C'est mon rôle.* »
- **Relations** : Chancelier Masques `NPC_PEN_07` (son maître) ; Intendant Conseil `NPC_PEN_66` (collabore pour les comptes du Conseil) ; Fou Conseil `NPC_PEN_68` (le Fou lui a dit un jour « tu sais pourquoi il oublie, et tu fais semblant de pas savoir »).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_65_01` | K0 | chancelier, service | Elle sert le Chancelier depuis 18 ans — plus longtemps que n'importe quel autre servant | — |
| 2 | `QI_PEN_65_02` | K0 | chancelier, oubli | Le Chancelier oublie régulièrement des périodes entières | — |
| 3 | `QI_PEN_65_03` | K0 | noms, changes | Il l'a appelée par 7 noms différents en 18 ans | — |
| 4 | `QI_PEN_65_04` | K1 | reset, motif | Le Chancelier reset tous les 2 ans et 3 mois — elle a noté le motif | `AFF>=45` |
| 5 | `QI_PEN_65_05` | K1 | reset, comportement | Après chaque reset, il ne reconnaît pas la Salle Conseil — comme s'il la voyait pour la première fois | `AFF>=60` |
| 6 | `QI_PEN_65_06` | K1 | objets, changes | Les objets personnels du Chancelier réapparaissent neufs après chaque reset — les vieux disparaissent | — |
| 7 | `QI_PEN_65_07` | K2 | reset, parole | Pendant un reset, le Chancelier a parlé dans une langue inconnue — des mots qui ressemblaient à des commandes | `AFF>=75` |
| 8 | `QI_PEN_65_08` | K2 | journal, resets | Elle tient un journal secret des resets — 8 resets en 18 ans | `QUEST:QST_PEN_CHANCELIER_01` |
| 9 | `QI_PEN_65_09` | K3 | chancelier, instance | Le Chancelier est réinitialisé par une routine système de la coque du serveur — son état est recréé à partir d'un snapshot tous les 27 mois | JAMAIS — déflection : *(elle pose la main sur le dossier du Chancelier)* « Il y a 8 entrées dans ce journal. La 9e approche. Et cette fois, je sais quand. Mais je peux pas l'empêcher. Personne peut. Il reviendra. Il revient toujours. » |
| 10 | `QI_PEN_65_10` | KX | *(antichambre)* | *(elle regarde le Chancelier dormir)* « Il ronfle pas de la même manière depuis le dernier reset. C'est un détail. Mais je note tout. » | — |

## 4. Chaînage économique & quêtes

- **Quête** : `QST_PEN_CHANCELIER_01` — Aider la Dame à comprendre pourquoi le Chancelier reset et comment briser le cycle.
- **Fils rouges** : 🔮 Ville Fantôme (coque serveur), 🔑 Pacte Ombres (reset du PNJ), 🪞 Statue Kirito (le Chancelier reset peut-être depuis l'arrivée de la statue).

## 5. Intégration Bot

- **Accueil** (`!parler dame_compagnie`) : *« Le Chancelier vous recevra dans un moment. Il est… fatigué. Ne faites pas attention s'il vous appelle par un autre nom. Il confond parfois. Mais il est bon. Il l'a toujours été. Les 8 fois. »*
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 ; K3 (slot 9) jamais injecté.
- `!pnj_list` : visible.
