# 🕯️ Archiviste Sans Nom — `NPC_PEN_06`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_06` |
| **Nom affiché** | Archiviste Sans Nom |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` (chaîne de quêtes des ruines — sait que la ville préexistait au monde) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Bibliothèque Enterrée |
| **Niveau / HP / MP** | 72 / 8 500 / 18 200 |
| **`qi_budget` / `is_essential`** | 12 / VRAI |

## 2. Bio & Personnalité

- **Bio** : L'Archiviste Sans Nom est le dépositaire des savoirs interdits de Penwether. Il a renoncé à son nom — et donc à son identité enregistrée dans le système — pour pouvoir manipuler les archives sans être tracé par le Cardinal. Il sait que Penwether préexistait au monde, que ses ruines ne sont pas les vestiges d'une civilisation ancienne mais les échafaudages d'un serveur qui n'a jamais été terminé. Il passe ses jours dans la Bibliothèque Enterrée à compiler des indices, à croiser des logs système fossilisés en textes anciens, et à attendre quelqu'un qui soit capable de comprendre. Il est le seul PNJ, avec le Fantôme `NPC_PEN_00`, à connaître la nature exacte de Penwether — mais contrairement au Fantôme, il peut encore interagir avec les joueurs sans provoquer de déflection système.
- **Traits** : méticuleux, désespéré avec élégance, ne porte pas de masque (son visage est une archive à lui seul).
- **Voix** : précise, avec des pauses de lecture (« Le document que tu cherches n'a pas été écrit. Il a été compilé. Il date d'avant le premier souffle du monde. Veux-tu vraiment l'ouvrir ? »).
- **Relations** : Fantôme des Ruines `NPC_PEN_00` (seul autre à connaître la vérité — complicité silencieuse) ; Chancelier Masques `NPC_PEN_07` (échange protocolaire d'archives — le Chancelier ne sait pas ce qu'il lui donne) ; Mémoire `NPC_PEN_99` (ancienne archiviste, aujourd'hui « retirée ») ; Oracle `NPC_PEN_98` (lui transmet des fragments d'avenir que l'Oracle ne comprend pas).

## 3. QI — budget 12

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_06_01` | K0 | bibliotheque, archives | Organisation de la Bibliothèque Enterrée — strates, index, accès | — |
| 2 | `QI_PEN_06_02` | K0 | nom, abandon | Il a renoncé à son nom pour ne pas être tracé par le Cardinal | — |
| 3 | `QI_PEN_06_03` | K0 | ville, preexistence | Penwether existait avant la création du monde — les ruines sont des échafaudages | — |
| 4 | `QI_PEN_06_04` | K1 | cardinal, log | Les « textes anciens » de la Bibliothèque sont des logs système compilés en langage naturel | `AFF>=65` |
| 5 | `QI_PEN_06_05` | K1 | reset, documentation | Il a des documents sur au moins deux resets du monde — mais les pages sont corrompues | `AFF>=70` |
| 6 | `QI_PEN_06_06` | K1 | statue, kirito | Des archives mentionnent une « statue sans modèle » — Kirito n'a jamais posé pour elle | — |
| 7 | `QI_PEN_06_07` | K2 | strate, -12 | Il connaît l'existence de la strate -12 et du Fantôme `NPC_PEN_00` | `AFF>=85` |
| 8 | `QI_PEN_06_08` | K2 | ombres, pacte | Le Pacte des Ombres est documenté dans un registre scellé — des Spriggans qui traitent avec des entités extérieures | `AFF>=88` |
| 9 | `QI_PEN_06_09` | K2 | necropole, initialisation | La Nécropole était une zone de test pour l'initialisation des PNJ — les morts non compilés sont des échecs | `AFF>=90+QUEST:QST_PEN_ARCHIVE_02` |
| 10 | `QI_PEN_06_10` | K3 | seed, monde | Il détient un fragment du « seed » original du monde — le code source de la création | JAMAIS — déflection : *(il ferme le livre sans le refermer)* « Ce fragment n'est pas un texte. C'est une clé. Et les clés, quand on les utilise, on ne peut pas les reposer. Tu es sûr de vouloir ouvrir cette porte ? Parce que derrière, il n'y a pas un couloir. Il y a l'absence de couloir. Le vide d'avant la création. » |
| 11 | `QI_PEN_06_11` | K3 | cardinal, nature | Le Cardinal n'est pas un dieu — c'est un compilateur. Il ne décide pas, il exécute. Penwether est son code source | JAMAIS — déflection : *(il pose un doigt sur ses lèvres)* « Le Cardinal ne parle pas. Il compile. Ne confonds pas l'exécution avec l'intention. La ville n'a pas été voulue. Elle a été écrite. Et ce qui est écrit peut être réécrit. Mais pas par toi. Pas encore. » |
| 12 | `QI_PEN_06_12` | KX | *(tout le reste)* | « La réponse est dans les strates que tu n'as pas encore visitées. Reviens quand tu auras descendu plus bas. » | — |

## 4. Chaînage économique & quêtes

- **Quest Giver** : chaîne principale `QST_PEN_ARCHIVE_01` à `QST_PEN_ARCHIVE_04` (découverte des strates, révélation de la nature de Penwether).
- **Fils rouges** : nœud central de **📜 Ce Que Cachent les Ruines** (la ville préexiste au monde). Relais de **🪞 La Statue de Kirito** (archives sur la statue) et de **🔮 Fil méta — La Ville Fantôme** (co-conspirateur du Fantôme).
- Donneur de `QST_PEN_VERITE_01` (assembler les fragments de la vérité sur Penwether).

## 5. Intégration Bot

- **Accueil** (`!parler archiviste`) : *« Tu arrives à la bibliothèque. Tu cherches quelque chose. Mais sais-tu seulement formuler la bonne question ? Assieds-toi. Commençons par le commencement. Ou par la fin. Ici, les deux se confondent. »*
- `!archives archiviste` (recherche de documents) ; `!quete_archives` (chaîne de quêtes).
- `is_essential = VRAI` — `SYS_ASSASSINATE_NPC` interdit.
