# ⛏️ Pisteur Carrières — `NPC_GRA_14`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_14` |
| **Nom affiché** | Pisteur Carrières |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Carrières Brisées |
| **Niveau / HP / MP** | 42 / 5600 / 3800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Pisteur et traqueur, spécialisé dans la traque des voleurs de minerai. Il est sur l'affaire du filon d'argent volé aux Carrières. Il a relevé des empreintes sur place — des empreintes de nain, pas de Leprechaun. Mais ces empreintes ne mènent nulle part : elles s'arrêtent à 5 mètres du filon et disparaissent. Comme si le voleur s'était évaporé. Il suspecte une magie de téléportation ou un passage secret. Mais au fond, il sent que c'est plus étrange : les empreintes sont parfaitement identiques à celles des gardes qui étaient de ronde. Comme si le voleur portait les mêmes bottes. Il traque aussi les rumeurs d'une « empreinte de nain » qui apparaît seule dans la poussière, sans que personne ne soit passé.
- **Traits** : méticuleux, perspicace, silencieux, obstiné.
- **Voix** : Calme, précis, chaque mot est un indice. « Une empreinte qui ne mène nulle part, ça n'existe pas. Pourtant, je l'ai mesurée. »
- **Relations** : `NPC_GRA_13` (Gardien — collègue, première source), `NPC_GRA_09` (Commandant — commanditaire), `NPC_GRA_05` (Helga — lui signale les anomalies), `NPC_GRA_03` (Bofrik — lui vend ses pièges), `NPC_GRA_15` (Marchand de Granit — alibi suspect).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_14_01` | K0 | pistage, carrieres | Il traque les voleurs de minerai. Il propose ses services. | — |
| 2 | `QI_GRA_14_02` | K0 | empreinte, disparition | Les empreintes du voleur s'arrêtent à 5 mètres du filon. Aucune trace au-delà. | — |
| 3 | `QI_GRA_14_03` | K0 | bote, identique | Les empreintes sont identiques à celles des bottes réglementaires de la garde. | — |
| 4 | `QI_GRA_14_04` | K1 | empreinte_seule, poussiere | Il a trouvé une empreinte de nain dans la poussière... à 20 mètres de tout chemin. « Personne n'est passé là. » | `AFF>=60` |
| 5 | `QI_GRA_14_05` | K1 | filon_chantant, lien | Les empreintes apparaissent toujours près des filons qu'Helga (`NPC_GRA_05`) a marqués comme « chantants ». | `AFF>=65` |
| 6 | `QI_GRA_14_06` | K1 | nain_suspect | Il suspecte un nain de l'intérieur. « Quelqu'un qui connaît les patrouilles. Et qui porte l'uniforme. » | `AFF>=70` |
| 7 | `QI_GRA_14_07` | K2 | duplication, seed | « J'ai confronté les empreintes. Elles sont identiques à 100 % à celles du Gardien (`NPC_GRA_13`). Mais il était ailleurs cette nuit-là. » | `AFF>=85` |
| 8 | `QI_GRA_14_08` | K2 | coffre_respiration, resonance | « J'ai posé l'oreille au sol près du filon volé. J'ai entendu un battement. Comme un cœur de pierre. » | `AFF>=90` |
| 9 | `QI_GRA_14_09` | K3 | duplication_pnj | **SECRET — ne JAMAIS révéler** : Les empreintes sont celles d'une copie instanciée du garde — le seed minéral a généré un double parfait du PNJ. | JAMAIS — déflection : *(range ses outils)* « L'enquête est close. Je n'ai rien trouvé. » |
| 10 | `QI_GRA_14_10` | KX | hors-sujet | *(montre une pierre avec une entaille)* « Regarde ça. Une marque de pioche. Propre. Trop propre. » | — |

## 4. Chaînage économique & quêtes

**Fils rouges** : 🔥 Rivalité de Sang, ⛏️ Le Filonant.
**Quête associée** : `QST_GRA_PISTEUR` — « L'Empreinte de Nain » (enquêter sur les apparitions, découvrir le mécanisme de duplication).
**Liens** : Dialogue lié à `QST_GRA_VOL_CARRIERE` du Gardien (`NPC_GRA_13`).

## 5. Intégration Bot

PNJ mobile entre les Carrières et le Bastion Ouest. État `state:pisteur_enquete` — 6 phases. Phase finale débloque un dialogue K2 avec le Commandant (`NPC_GRA_09`).
