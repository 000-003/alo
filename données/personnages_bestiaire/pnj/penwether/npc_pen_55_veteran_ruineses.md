# 🕯️ Vétéran Ruineses — `NPC_PEN_55`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_55` |
| **Nom affiché** | Vétéran Ruineses |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` |
| **Zone** | `ZONE_SPR_CAP_001C` — Penwether, Porche Effondré |
| **Niveau / HP / MP** | 28 / 1 400 / 340 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Ancien explorateur des ruines, le Vétéran Ruineses est le seul Spriggan vivant à être descendu sous la strate -10 de la Nécropole et à en être revenu. Il en est revenu changé : il ne dort plus, il compte les marches partout où il va, et il répète que « les niveaux n'arrêtent pas ». Il a vu les escaliers infinis — une structure non euclidienne qui descend bien plus loin que ce que le Cardinal a prévu. Il cherche quelqu'un d'assez courageux (ou assez fou) pour y retourner avec lui.
- **Traits** : hanté, nerveux, compte tout, tressaille aux bruits soudains.
- **Voix** : voix grave, entrecoupée de silences. « *Je suis descendu 47 jours. J'ai compté. 47 jours à descendre. Les marches… les marches étaient fraîches. En dessous, elles étaient chaudes. En dessous encore, elles étaient humides. J'ai pas trouvé le fond. Y a pas de fond.* »
- **Relations** : Marchand Encens `NPC_PEN_54` (lui achète des résines des profondeurs) ; Fou Conseil `NPC_PEN_68` (le seul qui le comprend sans qu'il explique) ; Forgeur Illusions `NPC_PEN_70` (a essayé de l'aider avec une illusion pour « refermer » les escaliers — ça n'a pas marché).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_55_01` | K0 | necropole, escaliers | La Nécropole sous Penwether contient un escalier qui descend bien plus bas que la carte officielle | — |
| 2 | `QI_PEN_55_02` | K0 | comptage, marches | Il compte tout : les marches, les pas, les secondes. Il ne peut pas s'arrêter | — |
| 3 | `QI_PEN_55_03` | K0 | sommeil, perte | Il n'a pas dormi depuis son retour — chaque fois qu'il ferme les yeux, il voit l'escalier | — |
| 4 | `QI_PEN_55_04` | K1 | temperature, strates | Les marches changent de température selon la profondeur : fraîches, chaudes, humides, brûlantes | `AFF>=40` |
| 5 | `QI_PEN_55_05` | K1 | marches, 4900 | Il s'est arrêté à 4 900 marches. Il n'a pas vu le fond. Il a entendu un bruit. Il est remonté | `AFF>=55` |
| 6 | `QI_PEN_55_06` | K1 | bruit, fond | Le bruit était une respiration — lente, régulière, comme un soufflet de forge | — |
| 7 | `QI_PEN_55_07` | K2 | escalier, non-euclidien | Il a laissé tomber une pièce au 3 200e marche — la pièce est tombée de haut alors qu'elle était déjà en bas | `AFF>=75` |
| 8 | `QI_PEN_55_08` | K2 | carte, absente | Il n'existe aucune carte officielle de la Nécropole sous la strate -5. L'administration refuse d'en parler | `QUEST:QST_PEN_NECROPOLE_01` |
| 9 | `QI_PEN_55_09** | K3 | strates, infinies | Les niveaux de la Nécropole sont infinis parce que ce n'est pas un donjon généré — c'est une boucle récursive non terminée du code source | JAMAIS — déflection : *(il se fige et compte dans le vide)* « 4 901. 4 902. 4 903. Je peux pas m'arrêter de compter. Même en parlant, je compte. Le fond… y a pas de fond. C'est pas une cave. C'est une boucle. » |
| 10 | `QI_PEN_55_10` | KX | *(plus rien)* | *(il compte en boucle, les yeux vides)* « 4 904. 4 905. 4 906. » *(il ne répond plus)* | — |

## 4. Chaînage économique & quêtes

- **Quête** : `QST_PEN_NECROPOLE_01` (principale) — Descendre dans la Nécropole avec le Vétéran et découvrir ce qui se trouve au-delà de la 4 900e marche.
- **Quête secondaire** : `QST_PEN_NECROPOLE_02` — Rapporter un échantillon du sol thermal de la strate -8.
- **Fils rouges** : 💀 Nécropole (cœur du fil), 📜 Ruines (la Nécropole est la ruine la plus profonde), 🔮 Ville Fantôme (boucle récursive dans le code).

## 5. Intégration Bot

- **Accueil** (`!parler veter_ruineses`) : *« Tu veux descendre ? Tout le monde veut descendre. Mais personne veut compter. Moi je compte. Je compte tout. Si tu descends avec moi, tu comptes aussi. Chaque marche. Promets-moi. »*
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 ; K3 (slot 9) jamais injecté.
- `!pnj_list` : visible.
