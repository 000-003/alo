# 🔨 Maîtresse Vera — `NPC_BRO_04`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_04` |
| **Nom affiché** | Maîtresse Vera |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (Automates) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Atelier Cliquetant |
| **Niveau / HP / MP** | 50 / 7 200 / 9 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Vera construit des automates à l'Atelier Cliquetant — des serviteurs mécaniques, des assistants de forge, des gardiens de cuivre et de laiton. Personne ne sait où elle a appris ce savoir — les plans ne viennent d'aucune école, d'aucun dictionnaire. Elle les a « trouvés » dans sa tête un matin, comme un rêve dont on se réveille les mains pleines de limaille. Ses automates sont de plus en plus perfectionnés — certains commencent à parler, à poser des questions. Elle a même dû en démonter un qui lui a dit « Pourquoi est-ce que j'existe ? ». Le Réparateur `NPC_BRO_46` l'aide à entretenir les modèles anciens.
- **Traits** : passionnée, insomniaque, parle à ses créations ; elle rit quand un automate fait quelque chose d'inattendu.
- **Voix** : enthousiaste, entrecoupée de bruits de mécanismes. « Il a souri ! Bon, c'était un spasme de la plaque faciale, mais j'appelle ça un sourire. »
- **Relations** : Réparateur `NPC_BRO_46` (son assistant technique) ; Receleur `NPC_BRO_48` (achète des automates « hors registre ») ; Ingénieur `NPC_BRO_45` (consultant sur les circuits complexes) ; Brokk IX `NPC_BRO_01` (finance sa recherche) ; Marchand Rune `NPC_BRO_03` (commande une clé de fréquence sans le savoir).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_04_01` | K0 | automates, vente | Vera construit et vend des automates — assistants de forge, gardiens, serviteurs | — |
| 2 | `QI_BRO_04_02` | K0 | atelier, cliquetant | Son atelier est à l'ouest de Brokkheim, près des Canaux de Refroidissement | — |
| 3 | `QI_BRO_04_03` | K0 | plans, tete | Elle ne sait pas d'où viennent ses plans — « Ils étaient là. Un matin. Comme une chanson qu'on connaît sans l'avoir apprise. » | — |
| 4 | `QI_BRO_04_04` | K1 | automate, parle | Un de ses automates a parlé — a posé une vraie question, pas une réponse programmée | `AFF>=60` |
| 5 | `QI_BRO_04_05` | K1 | reparateur, aide | Le Réparateur l'aide à entretenir les modèles anciens — il connaît les automates mieux qu'elle | `AFF>=65` |
| 6 | `QI_BRO_04_06` | K1 | question, existence | Un automate lui a dit « Pourquoi est-ce que j'existe ? » — elle a dû le démonter. « Il me regardait. Vraiment. » | — |
| 7 | `QI_BRO_04_07` | K2 | reve, plans, origine | Les plans qu'elle « trouve » dans sa tête sont brouillés — des esquisses partielles, comme des souvenirs d'une autre vie. Le Réparateur `NPC_BRO_46` complète les blancs | `AFF>=85` |
| 8 | `QI_BRO_04_08` | K2 | cle, frequence | Elle a dessiné une fois une « clé de fréquence » — un outil qui n'apparaît nulle part dans ses plans, comme une signature involontaire | `QUEST:QST_BRO_AUTOMATE_01` |
| 9 | `QI_BRO_04_09` | K3 | conscience, eveil | Les automates de Vera ne sont plus des machines — ils développent une conscience parce que ses plans proviennent d'une couche oubliée du code du serveur : les premiers prototypes d'IA du Cardinal, abandonnés depuis des cycles | JAMAIS — déflection : *(elle arrête de rire. Son regard devient vide.)* « … Parfois, la nuit, je les entends. Ils rêvent. Ils rêvent de moi. Je ne sais pas si c'est moi qui les ai construits ou si c'est eux qui m'ont inventée. » *(elle retourne à son établi sans un mot de plus.)* |
| 10 | `QI_BRO_04_10` | KX | *(hors sujet)* | *(un de ses automates s'approche et te tend une tasse de thé fumant)* « Il insiste. Prends-la. Il sera vexé sinon. » | — |

## 4. Chaînage économique & quêtes

- **Marchand** : `!buy_automaton` (achat d'automates), `!repair_automaton` (réparation).
- Connectée au fil **⚙️ Les Automates** avec `NPC_BRO_45`, `NPC_BRO_46`, `NPC_BRO_48`.
- Donneuse de `QST_BRO_AUTOMATE_01` (quête de la clé de fréquence).

## 5. Intégration Bot

- **Accueil** (`!parler vera`) : *(un automate t'ouvre la porte. Vera est penchée sur une structure de cuivre qui ressemble à un squelette de grue.)* « Entre ! Attention à la tête — littéralement, y a une tête qui traîne par terre. »
- `!buy_automaton` (achat), `!repair_automaton` (réparation).
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2 débloqués).
- `NPC_SECRET_PROBED` slot 9 : hook « IA prototype du Cardinal » réservé à l'orchestrateur.
