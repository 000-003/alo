# 🔨 Marchand Rune — `NPC_BRO_03`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_03` |
| **Nom affiché** | Marchand Rune |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (Outils de forge) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Halle du Marteau |
| **Niveau / HP / MP** | 30 / 3 800 / 4 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : le Marchand Rune (personne ne connaît son vrai nom, et il préfère que ça reste ainsi) tient l'échoppe d'outils la mieux fournie de la Halle du Marteau. Il vend des marteaux de toutes tailles, des enclumes portatives, des tenailles de précision et des limes enchantées. Ce qu'il vend de plus précieux, ce sont des informations : il sait quel outil chaque maître-forgeron utilise, et donc ce qu'ils préparent. Il fournit des renseignements au Receleur `NPC_BRO_48` sur les commandes spéciales de la Forge-Mère.
- **Traits** : bavard, curieux, oublie volontairement de dire qui l'envoie ; ses poches sont pleines de notes griffonnées.
- **Voix** : rapide, joyeuse, comme les clochettes de cuivre qu'il porte à sa ceinture. « Des tenailles ? J'ai des tenailles qui tiennent même le feu de l'Enfer ! Enfin, je crois. J'ai pas testé. »
- **Relations** : Receleur `NPC_BRO_48` (échange d'informations) ; Brokk IX `NPC_BRO_01` (client régulier) ; Sylla `NPC_BRO_02` (achète ses encres rares) ; Forgeron Lames `NPC_BRO_70` (lui commande des outils spéciaux).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_03_01` | K0 | outils, forge | Vente de tous les outils de forge — marteaux, tenailles, limes, enclumes portatives | — |
| 2 | `QI_BRO_03_02` | K0 | halle, etal | Son étal est au centre de la Halle, sous la grande horloge à vapeur | — |
| 3 | `QI_BRO_03_03` | K0 | prix, negociation | Il négocie toujours — le prix affiché n'est jamais le prix final | — |
| 4 | `QI_BRO_03_04` | K1 | information, maitres | Il sait quel outil chaque maître-forgeron achète — il lit les commandes comme des signes | `AFF>=60` |
| 5 | `QI_BRO_03_05` | K1 | receleur, reseau | Il fournit des renseignements au Receleur `NPC_BRO_48` sur les commandes de la Forge-Mère | `AFF>=65` |
| 6 | `QI_BRO_03_06` | K1 | vrai, nom | Personne ne connaît son vrai nom — même lui fait semblant de l'avoir oublié | — |
| 7 | `QI_BRO_03_07` | K2 | encres, sylla | L'encre qu'il vend à Sylla n'est pas de l'encre — c'est du sang de laiton, un résidu des Automates | `AFF>=85` |
| 8 | `QI_BRO_03_08` | K2 | commande, spéciale | Brokk IX a commandé un outil que le Marchand Rune n'a pas trouvé dans son catalogue — une « clé de fréquence » | `QUEST:QST_BRO_AUTOMATE_01` |
| 9 | `QI_BRO_03_09` | K3 | clé, frequence, automate | La clé de fréquence est un outil qui n'existe que dans les plans d'origine des Automates — Vera `NPC_BRO_04` l'a dessiné, mais elle ne s'en souvient pas | JAMAIS — déflection : *(il cesse de sourire. Il regarde autour de lui.)* « J'ai parlé trop fort. On m'écoute. Les murs de la Halle ont des oreilles, et pas que des oreilles Leprechauns. » *(il se tait, refuse d'ajouter un mot.)* |
| 10 | `QI_BRO_03_10` | KX | *(hors sujet)* | « Ah, ça ? C'est pas à vendre. Enfin, tout est à vendre, mais pas à toi. » | — |

## 4. Chaînage économique & quêtes

- **Marchand** : `!buy_tool` (achat d'outils), `!info_forge` (rumeurs sur les maîtres-forgerons).
- Connecté au fil **⚙️ Les Automates** via `NPC_BRO_04` et `NPC_BRO_48`.
- Donneur de `QST_BRO_AUTOMATE_01` (quête de la clé de fréquence).

## 5. Intégration Bot

- **Accueil** (`!parler marchand rune`) : *(il te sourit, ses dents en cuivre luisent sous la lumière de la Halle)* « Bienvenue à l'étal du Marchand Rune ! J'ai ce qu'il te faut. La question, c'est : est-ce que tu as ce qu'il me faut ? »
- `!buy_tool` (achat d'outils), `!info_forge` (rumeurs).
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2 débloqués).
- `NPC_SECRET_PROBED` slot 9 : hook « clé de fréquence des Automates » réservé à l'orchestrateur.
