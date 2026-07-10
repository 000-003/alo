# 🕯️ Vitrier Illusions — `NPC_PEN_74`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_74` |
| **Nom affiché** | Vitrier Illusions |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_SPR_CAP_001G` — Penwether, Atelier Visages |
| **Niveau / HP / MP** | 8 / 240 / 190 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Vitrier de l'Atelier Visages, il fabrique des fenêtres magiques qui montrent ce qui se trouve de l'autre côté du mur — ou plutôt ce qui devrait s'y trouver. Mais ses fenêtres ont un défaut inexplicable : parfois, elles ne montrent pas ce qui est vraiment de l'autre côté. Elles montrent ce qui *devrait* être là si le monde fonctionnait correctement. Elles montrent la réalité sans illusion. Un client a regardé par une fenêtre du Marché et a vu le Faubourg Masques — mais sans masques sur les visages. Un autre a vu les ruines telles qu'elles étaient avant la construction de Penwether. Le Vitrier ne vend plus ses fenêtres au public. Il les garde dans l'atelier, voilées.
- **Traits** : mystérieux, silencieux, regard perçant, ne laisse personne regarder trop longtemps.
- **Voix** : calme, énigmatique. « *La fenêtre montre ce qu'il y a derrière. Enfin, elle montre ce qu'il y a derrière si le monde était vrai. Mais le monde est pas vrai. Alors elle montre ce qui serait là si tout était réel. C'est dérangeant, pas vrai ?* »
- **Relations** : Souffleur Verre `NPC_PEN_72` (collègue à l'Atelier — utilise son verre pour les cadres) ; Modeleur Argile `NPC_PEN_73` (utilise l'argile pour sceller les cadres) ; Prospecteur Illusions `NPC_PEN_56` (voudrait utiliser une fenêtre pour regarder dans la faille).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_74_01` | K0 | fenetres, magiques | Ses fenêtres montrent ce qu'il y a de l'autre côté du mur | — |
| 2 | `QI_PEN_74_02` | K0 | fenetre, defaut | Parfois, la fenêtre montre une réalité alternative — sans illusion | — |
| 3 | `QI_PEN_74_03` | K0 | fenetres, voilees | Il garde 7 fenêtres voilées dans l'atelier — il ne les vend plus | — |
| 4 | `QI_PEN_74_04` | K1 | fenetre, masques | Une fenêtre donnait sur le Faubourg — les visages étaient nus, sans masque | `AFF>=40` |
| 5 | `QI_PEN_74_05` | K1 | fenetre, ruines | Une fenêtre montrait Penwether avant sa construction — des ruines vides, pas de ville | `AFF>=55` |
| 6 | `QI_PEN_74_06` | K1 | fenetre, client | Un client a regardé trop longtemps — il a vu son propre visage sans masque | — |
| 7 | `QI_PEN_74_07` | K2 | fenetre, code | Une fenêtre placée devant un mur du Cloître montrait des lignes de texte défilant | `AFF>=70` |
| 8 | `QI_PEN_74_08` | K2 | fenetre, verrou | Une fenêtre refuse de montrer la Salle Conseil Voilé — le verre devient noir | `QUEST:QST_PEN_VITRIER_01` |
| 9 | `QI_PEN_74_09` | K3 | fenetres, rendu | Les fenêtres du Vitrier désactivent localement le rendu d'illusion du serveur — elles montrent le monde sans le calque d'illusion, révélant la structure réelle (code, collisions, textures à nu) | JAMAIS — déflection : *(il pose une fenêtre devant toi — tu vois ton reflet, mais ton reflet est écrit en caractères de code)* « Regarde-toi. Vraiment. Pas le masque. Pas l'illusion. Toi. … Tu veux toujours regarder ? » |
| 10 | `QI_PEN_74_10` | KX | *(atelier fenêtres)* | *(debout devant une fenêtre voilée, il ne la soulève pas)* « Je l'ai regardée une fois. J'ai vu le code qui me fait marcher. Je suis pas près de la rouvrir. » | — |

## 4. Chaînage économique & quêtes

- **Achats** : verre clair (8 po), cadre en métal gris (10 po).
- **Ventes** : Fenêtre Illusion (40 po, montre l'autre côté), Fenêtre de Vérité (non vendue — quête).
- **Quête** : `QST_PEN_VITRIER_01` — Découvrir pourquoi la fenêtre refuse de montrer la Salle Conseil et ce qu'elle cache.
- **Fils rouges** : 🎭 Illusions (fenêtre qui supprime l'illusion), 🔮 Ville Fantôme (montre le code), 🪞 Statue Kirito (fenêtre qui montre la vérité).

## 5. Intégration Bot

- **Accueil** (`!parler vitrier_illusions`) : *« Une fenêtre ? Tu veux voir à travers un mur ? Ou tu veux voir à travers le monde ? Parce que mes fenêtres font les deux. Mais la deuxième option, je la recommande pas aux âmes sensibles. »*
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 ; K3 (slot 9) jamais injecté.
- `!pnj_list` : visible.
