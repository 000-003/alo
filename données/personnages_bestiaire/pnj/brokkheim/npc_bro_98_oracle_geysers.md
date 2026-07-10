# 🔨 Oracle Geysers — `NPC_BRO_98`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_98` |
| **Nom affiché** | Oracle Geysers |
| **Race** | Leprechaun |
| **Rôle** | `QUEST_GIVER` |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Vallée Geysers |
| **Niveau / HP / MP** | 28 / 800 / 1400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Prophétesse qui lit les prédictions dans les panaches de vapeur des geysers. Chaque panache dessine une forme, un visage, une rune. Elle voit l'avenir de Brokkheim dans la vapeur. Ses prédictions sont des hooks pour l'orchestrateur — elle annonce les événements majeurs. Angle : Prédictions vapeur.
- **Traits** : Éthérée, brûlée par la vapeur, voix qui porte.
- **Voix** : Ondoyante comme la vapeur, souvent incompréhensible. « La vapeur monte. Je vois… je vois un marteau qui frappe du vide. » *(tousse)*
- **Relations :** `NPC_BRO_00` (Le Pouls — ses prédictions coïncident avec son rythme), `NPC_BRO_90` (voisin réfugié), `NPC_BRO_99` (Mémoire — se consultent), `NPC_BRO_95` (lui parle parfois).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_98_01` | K0 | divination, vapeur | Lecture des prédictions dans la vapeur des geysers | — |
| 2 | `QI_BRO_98_02` | K0 | geysers, habitudes | Connaît chaque geyser, son rythme, son odeur | — |
| 3 | `QI_BRO_98_03` | K0 | predictions, passe | Ses prédictions passées : 80 % de précision | — |
| 4 | `QI_BRO_98_04` | K1 | prediction, pouls | La vapeur montre un cœur qui bat — le Pouls ralentit | — |
| 5 | `QI_BRO_98_05` | K1 | vision, granzam | Elle voit des tunnels gnomes sous Brokkheim — une invasion | `AFF>=65` |
| 6 | `QI_BRO_98_06` | K1 | vision, enclume | Une enclume qui brûle dans le ciel — symbole de la fin | `AFF>=70` |
| 7 | `QI_BRO_98_07` | K2 | prediction, cardinal | La vapeur a dit « le Cardinal a une enclume manquante » | `AFF>=80` |
| 8 | `QI_BRO_98_08` | K2 | oracle, mort | Elle a prédit sa propre mort — « par la vapeur ou par le feu » | `AFF>=85` |
| 9 | `QI_BRO_98_09` | K3 | vapeur, serveur | La vapeur des geysers est le steam du serveur — chaque panache est un log système. Elle lit les logs système du serveur, mais elle ne sait pas ce qu'est un serveur — elle les appelle « les murmures du dessous » | JAMAIS — déflection : *(la vapeur l'enveloppe)* « Les murmures sont trop forts aujourd'hui. Je ne peux pas… je n'entends que du bruit blanc. » *(ses yeux deviennent blancs)* |
| 10 | `QI_BRO_98_10` | KX | *(hors sujet)* | « La vapeur ne ment pas. Mais elle ne dit pas tout. » | — |

## 4. Chaînage économique & quêtes

- **QUEST_GIVER** : `!predict` — prédiction aléatoire (orchestrateur hook).
- Hooks orchestrateur : annonce de raids, événements, maintenance serveur (déguisés en prédictions).
- Fil **🔮 Enclume du Cardinal** : donne des indices sur la quête méta.

## 5. Intégration Bot

- **Accueil :** *(elle regarde la vapeur monter)* « Ah… je te voyais arriver. La vapeur m'a parlé de toi. Assieds-toi. Écoute. »