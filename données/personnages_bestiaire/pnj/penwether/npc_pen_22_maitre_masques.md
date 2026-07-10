# 🕯️ Maître Masques — `NPC_PEN_22`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_22` |
| **Nom affiché** | Maître Masques |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SKILL_MASTER` (fabrication de masques — dont un masque qui voit par lui-même) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Atelier des Visages |
| **Niveau / HP / MP** | 72 / 8 000 / 16 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Maître Masques est le plus vieux fabricant de masques de Penwether — un Spriggan dont les mains tremblent mais qui garde encore une précision surnaturelle dans la taille des pigments et la couture des peaux. Il est le seul à connaître le secret de fabrication des « masques qui voient par eux-mêmes » — des masques qui enregistrent ce qu'ils voient et le rejouent au porteur. Il en a fabriqué un pour lui-même, qu'il ne porte jamais : le masque garde la mémoire de tout ce qu'il a vu depuis sa création, et Maître Masques a peur de ce qu'il pourrait apprendre en le mettant. Il forme des apprentis masquiers mais ne livre jamais tous ses secrets.
- **Traits** : méticuleux, mystérieux, parle à voix basse comme si ses masques écoutaient.
- **Voix** : ancienne, fragile mais précise (« Un masque n'est pas un objet. C'est un visage de rechange. Et certains visages… se souviennent. »).
- **Relations** : Masquier Orin `NPC_PEN_03` (concurrent et ami — échange de recettes de pigments) ; Tailleur Illusions `NPC_PEN_23` (lui fournit des masques « filtrés » pour les illusions) ; Commandant Masques `NPC_PEN_09` (lui commande des masques d'identification pour ses éclaireurs).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_22_01` | K0 | masques, fabrication | Techniques de fabrication de masques — matériaux, outils | — |
| 2 | `QI_PEN_22_02` | K0 | atelier, outils | L'Atelier des Visages — équipement, histoire | — |
| 3 | `QI_PEN_22_03` | K0 | commandes, clients | Types de commandes — sur mesure, standard, réparation | — |
| 4 | `QI_PEN_22_04` | K1 | masque, voyant | Le masque qui voit par lui-même — une de ses créations, qu'il garde sous clé | `AFF>=65` |
| 5 | `QI_PEN_22_05` | K1 | memoire, masque | Les masques peuvent enregistrer des souvenirs — il ne le dit pas à ses clients | `AFF>=70` |
| 6 | `QI_PEN_22_06` | K1 | secret, fabrication | Il cache une étape de fabrication — le « scellement de mémoire » | — |
| 7 | `QI_PEN_22_07` | K2 | masque, kirito | On lui a commandé un masque à l'effigie de Kirito — cinquante exemplaires, par Orin | `AFF>=85` |
| 8 | `QI_PEN_22_08` | K2 | commanditaire, ombre | Le commanditaire des cinquante masques paie en minerai de Gattan — lien inter-cités | `AFF>=88` |
| 9 | `QI_PEN_22_09` | K3 | masque, origine | Les masques « qui voient » ne sont pas une invention — il a trouvé la technique dans les ruines, gravée dans la pierre d'avant le monde | JAMAIS — déflection : *(il pose son outil)* « Je n'ai pas inventé le masque qui voit. Je l'ai trouvé. Dans une strate que personne ne connaît. Gravée dans une pierre qui existait avant la première pierre de Penwether. Ce n'est pas un savoir. C'est un vestige. Et les vestiges, on ne les reproduit pas. On les cache. » |
| 10 | `QI_PEN_22_10` | KX | *(hors-sujet)* | « Un masque ne ment jamais. C'est le visage en dessous qui ment. Et parfois, le masque s'en souvient. » | — |

## 4. Chaînage économique & quêtes

- **Skill Master** : enseigne `MASQUE_VOYANT` (fabrication de masque à mémoire). Quête d'apprentissage : `QST_PEN_MASQUE_02`.
- **Fils rouges** : rouage de **🪞 La Statue de Kirito** (cinquante masques commandés via Orin). Relais de **🔑 Le Pacte des Ombres** (le commanditaire paie en minerai de Gattan).
- Donneur de `QST_PEN_MASQUE_ANCIEN_01` (retrouver la strate où il a trouvé la technique du masque voyant).

## 5. Intégration Bot

- **Accueil** (`!parler maitre_masques`) : *« Tu veux un masque ? Tous mes masques sont faits main, avec des matériaux que je récolte moi-même dans les ruines. Ils te protègent, ils te cachent, ils te changent. Mais souviens-toi : un masque, ça se mérite. Et parfois, ça se souvient. »*
- `!masques maitre` (catalogue) ; `!apprendre_masque` (apprentissage de la fabrication).
