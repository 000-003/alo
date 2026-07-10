# 🕯️ Garde Façades — `NPC_PEN_50`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_50` |
| **Nom affiché** | Garde Façades |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_SPR_CAP_001A` — Penwether, Marché 7 Façades |
| **Niveau / HP / MP** | 15 / 450 / 120 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Garde Façades patrouille le Marché 7 Façades depuis si longtemps qu'il a vu chaque mur changer de place. Il ne s'en étonne plus, mais il note tout. Il tient un carnet où il dessine l'emplacement des étals chaque matin. Le soir, le dessin ne correspond jamais à ce qu'il a vu. Il pense que c'est sa mémoire qui flanche. Il a tort.
- **Traits** : méthodique, nerveux, obsessionnel, ne quitte jamais son carnet.
- **Voix** : voix hachée, comme s'il comptait ses pas entre chaque mot. « *Mur nord… brique rouge… non, ce matin c'était blanc. C'était blanc. Je l'ai écrit.* »
- **Relations** : Marchand Masques Fins `NPC_PEN_57` (achète son café au même étal tous les jours) ; Marchand Lames Grises `NPC_PEN_58` (se méfie de ses armes « trop tranchantes ») ; Chroniqueur Illusions `NPC_PEN_63` (lui envoie ses croquis — le Chroniqueur les reçoit avant qu'il ne les dessine).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_50_01` | K0 | marche, facades | Le Marché 7 Façades change de configuration toutes les nuits ; personne ne sait pourquoi | — |
| 2 | `QI_PEN_50_02` | K0 | carnet, dessins | Il tient un carnet de 2 344 pages — tous les dessins sont différents | — |
| 3 | `QI_PEN_50_03` | K0 | collegues, gardes | Les autres gardes refusent de patrouiller le Marché ; ils disent que les murs « bougent » | — |
| 4 | `QI_PEN_50_04` | K1 | facade, memoire | Une façade lui est réapparue identique après 7 ans — il a reconnu la fissure | `AFF>=40` |
| 5 | `QI_PEN_50_05` | K1 | masques, etals | Un étal de masques n'était pas là le matin mais existait dans ses dessins de la veille | `AFF>=55` |
| 6 | `QI_PEN_50_06` | K1 | illusion, reset | Il a vu le même acheteur passer deux fois à 5 minutes d'intervalle — l'homme ne s'en souvenait pas | — |
| 7 | `QI_PEN_50_07` | K2 | carnet, disparition | La page 1 203 de son carnet est vide alors qu'il se souvient y avoir dessiné un mur noir | `AFF>=70` |
| 8 | `QI_PEN_50_08` | K2 | faille, marche | Sous l'étal du fromager, il a vu une faille lumineuse — elle donnait sur une rue qui n'existe pas | `QUEST:QST_PEN_FACADES_01` |
| 9 | `QI_PEN_50_09` | K3 | marche, coque | Le Marché 7 Façades est une zone de réallocation mémoire active — les façades changent parce que le serveur réécrit le secteur | JAMAIS — déflection : *(il ferme son carnet d'un coup sec)* « Tu parles de choses que je note pas. J'note que les murs. Les murs, tu comprends. Pas ce qu'il y a derrière. » |
| 10 | `QI_PEN_50_10` | KX | *(hors carnet)* | *(il tourne les pages frénétiquement)* « Je l'ai pas écrit. Je l'ai pas écrit. C'est pas dans le carnet. Alors c'est pas arrivé. » | — |

## 4. Chaînage économique & quêtes

- **Achats / Ventes** : n'achète rien, ne vend rien. Accepte les dessins des joueurs en échange d'info (« *Tu veux voir un mur qui a bougé ? Montre-moi d'abord un mur que t'as dessiné.* »).
- **Quête** : `QST_PEN_FACADES_01` — Aider le Garde à cartographier les changements mène à la découverte d'une faille sous le marché.
- **Fils rouges** : 🎭 Illusions (les façades sont des fuites mémoire), 📜 Ruines (le marché cache une entrée de strate inférieure).

## 5. Intégration Bot

- **Accueil** (`!parler garde_facades`) : *« T'as vu le mur nord ? Il est rouge aujourd'hui. Hier il était rouge aussi. Non, hier il était blanc. Attends, je vérifie… »*
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 ; K3 (slot 9) jamais injecté.
- `!pnj_list` : visible.
