# 🕯️ Intendant Conseil — `NPC_PEN_66`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_66` |
| **Nom affiché** | Intendant Conseil |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_SPR_CAP_001E` — Penwether, Salle Conseil Voilé |
| **Niveau / HP / MP** | 15 / 450 / 280 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Trésorier du Conseil. L'Intendant gère les finances de Penwether, mais il n'a jamais vu un budget cohérent. Les caisses se remplissent toutes seules : chaque matin, il trouve des pièces de cuivre, d'argent et d'or dans le trésor — des pièces qui viennent de nulle part, qui n'ont jamais été frappées, et dont le métal est trop neuf. Il les dépense comme les autres, mais il garde les plus étranges dans un tiroir fermé à clé. Certaines fondent quand on les chauffe. D'autres flottent dans l'eau. Une, une seule, est chaude en permanence.
- **Traits** : honnête, inquiet, méticuleux, vérifie tout trois fois.
- **Voix** : soucieuse. « *Ce matin, 200 pièces d'or. Je sais pas d'où elles viennent. La Monnaie dit qu'elle n'a pas frappé d'or cette année. J'ai vérifié 4 fois. Alors d'où viennent-elles ?* »
- **Relations** : Dame Compagnie `NPC_PEN_65` (collabore pour les comptes) ; Marchand Armures Grises `NPC_PEN_59` (paie les armures de la garde) ; Scribe Conseil Voilé `NPC_PEN_60` (vérifie que les édits ont des budgets).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_66_01` | K0 | tresor, pieces | Chaque matin, de nouvelles pièces apparaissent dans le trésor | — |
| 2 | `QI_PEN_66_02` | K0 | pieces, provenance | Personne ne sait d'où viennent les pièces — la Monnaie n'en fabrique pas | — |
| 3 | `QI_PEN_66_03` | K0 | tiroir, etrange | Il conserve les pièces anormales dans un tiroir fermé — environ 30 pièces | — |
| 4 | `QI_PEN_66_04` | K1 | piece, chaude | Une pièce d'or est chaude en permanence — elle ne refroidit jamais | `AFF>=35` |
| 5 | `QI_PEN_66_05` | K1 | piece, flottante | Une pièce d'argent flotte dans l'eau — elle est moins dense que l'air | `AFF>=55` |
| 6 | `QI_PEN_66_06` | K1 | piece, fondante | Une pièce de cuir fond à 20°C comme de la cire — mais elle est dure comme du métal | — |
| 7 | `QI_PEN_66_07` | K2 | apparition, minuit | Il a filmé le trésor une nuit : les pièces apparaissent à minuit pile, une par une, depuis le plafond | `AFF>=70` |
| 8 | `QI_PEN_66_08` | K2 | source, plafond | Le plafond du trésor est un miroir — les pièces tombent de leur propre reflet | `QUEST:QST_PEN_TRESOR_01` |
| 9 | `QI_PEN_66_09` | K3 | pieces, spawn | Les pièces sont des artéfacts de spawn — le serveur génère de la monnaie fraîche via un processus de minage fantôme qui tourne en arrière-plan | JAMAIS — déflection : *(il ouvre le tiroir et toutes les pièces sont identiques)* « …elles étaient toutes différentes. Je les ai triées. Maintenant elles sont toutes pareilles. Quelqu'un est venu cette nuit. Quelqu'un les a uniformisées. » |
| 10 | `QI_PEN_66_10` | KX | *(trésor)* | *(il jette une poignée de pièces en l'air — elles retombent en formant un symbole au sol)* « La Monnaie paiera. Mais qui paie la Monnaie ? » | — |

## 4. Chaînage économique & quêtes

- **Quête** : `QST_PEN_TRESOR_01` — Découvrir d'où viennent les pièces et pourquoi.
- **Fils rouges** : 🎭 Illusions (pièces illusoires ?), 🔮 Ville Fantôme (processus de spawn), 📜 Ruines (trésor des ruines anciennes).

## 5. Intégration Bot

- **Accueil** (`!parler intendant_conseil`) : *« Chaque matin, de l'argent neuf. Je pourrais m'y habituer. Mais je m'y habitue pas. Parce que chaque pièce est une question sans réponse : d'où tu viens, toi ? »*
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 ; K3 (slot 9) jamais injecté.
- `!pnj_list` : visible.
