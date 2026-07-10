# ⛏️ Restaurateur Outils — `NPC_GRA_24`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_24` |
| **Nom affiché** | Restaurateur Outils |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Atelier des Profondeurs |
| **Niveau / HP / MP** | 18 / 1400 / 1800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Restaurateur d'outils, spécialisé dans la réparation du matériel minier. Il travaille en sous-traitance pour Cog (`NPC_GRA_04`) et le Maître Forgeron (`NPC_GRA_22`). Depuis deux semaines, les outils qu'il répare gémissent. Pas une plainte humaine — un grincement métallique prolongé, comme un cri de métal fatigué. Il a d'abord cru à un défaut de lubrification, mais même les outils parfaitement huilés émettent ce son. Le plus étrange : les outils réparés « se souviennent » de leur état cassé. Il les remet en état, et quelques heures plus tard, ils retrouvent leur défaut d'origine — comme s'ils insistaient pour rester abîmés. Il a confié son inquiétude à Cog, qui n'a fait que hocher la tête.
- **Traits** : patient, méticuleux, troublé, superstitieux.
- **Voix** : Fatiguée, un peu traînante. « Je répare un outil. Il marche. Je le pose. Une heure après, le même défaut. Exactement le même. Comme s'il refusait d'être réparé. »
- **Relations** : `NPC_GRA_04` (Cog — donneur d'ouvrage), `NPC_GRA_22` (Forgeron — client), `NPC_GRA_21` (Apprenti — lui apporte ses outils), `NPC_GRA_01` (Durgan — lui confie ses pioches spéciales), `NPC_GRA_20` (Concierge — lui a donné la pépite à examiner).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_24_01` | K0 | reparation, outils | Il répare tout outil minier. Tarifs : 20-100 Yuld selon l'outil. | — |
| 2 | `QI_GRA_24_02` | K0 | gemissement, metal | Les outils qu'il répare émettent un grincement. « Ils pleurent. » | — |
| 3 | `QI_GRA_24_03` | K0 | defaut_retour | Les outils retrouvent leur défaut après réparation. « Comme s'ils préféraient être cassés. » | — |
| 4 | `QI_GRA_24_04` | K1 | outil_memoire, forme | « Un outil tordu, je le redresse. Trois heures plus tard, il est tordu pareil. Au millimètre près. » | `AFF>=60` |
| 5 | `QI_GRA_24_05` | K1 | cog_temoin | Cog (`NPC_GRA_04`) a vu un outil gémir. « Il est devenu pâle. Il m'a dit de le jeter au feu. » | `AFF>=65` |
| 6 | `QI_GRA_24_06` | K1 | outil_filon_chantant | « Les outils qui viennent des Carrières Brisées gémissent plus fort. Ceux de la Mine de Mithril aussi. » | `AFF>=70` |
| 7 | `QI_GRA_24_07` | K2 | outil_retour, atelier | Cog (`NPC_GRA_04`) m'a dit que des outils reviennent tout seuls à l'atelier. « Je pensais qu'il mentait. Maintenant, j'y crois. » | `AFF>=85` |
| 8 | `QI_GRA_24_08` | K2 | outil_ame, graine | « Chaque outil a une étincelle. Comme une graine de métal. Si tu la casses, elle veut redevenir entière. » | `AFF>=90` |
| 9 | `QI_GRA_24_09` | K3 | objet_instancie | **SECRET — ne JAMAIS révéler** : Les outils « gémissent » parce que l'instance de l'objet cassé persiste en mémoire. Le serveur n'écrase pas l'ancien état, créant un conflit entre « cassé » et « réparé ». Le grincement est le bruit du conflit. | JAMAIS — déflection : *(lâche l'outil, recule)* « J'aime pas parler de ces choses-là. J'aime pas entendre les outils pleurer. » |
| 10 | `QI_GRA_24_10` | KX | hors-sujet | *(il frotte un burin avec un chiffon)* « Celui-ci, il est calme. Pour l'instant. » | — |

## 4. Chaînage économique & quêtes

**Fils rouges** : ⛏️ Le Filonant.
**Quête associée** : `QST_GRA_OUTIL_GEMIT` — « L'Outil Qui Gémit » (enquêter sur le gémissement des outils, comprendre le conflit d'instances).
**Liens** : Secondaire. Lié à Cog (`NPC_GRA_04`) et à l'Apprenti (`NPC_GRA_21`). Fournit un indice sur la duplication d'objets.

## 5. Intégration Bot

PNJ statique à l'Atelier des Profondeurs. Horaires 07h-19h. Service de réparation avec un état `state:outil_conflict` qui indique si l'outil réparé va rechuter.
