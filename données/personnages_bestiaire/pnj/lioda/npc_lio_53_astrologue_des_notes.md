# 🎭 Astrologue des Notes — `NPC_LIO_53`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_LIO_53` |
| **Nom affiché** | Astrologue des Notes |
| **Race** | Puca |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (Lecture des étoiles) |
| **Zone** | `ZONE_PUC_CAP_001` — Lioda, Balcon de l'Amphithéâtre |
| **Niveau / HP / MP** | 13 / 650 / 340 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité (matériau LLM)

- **Bio** : Astrologue Puca qui lit les étoiles comme une partition. Il prétend qu'une étoile vibre, seule, au-dessus de Lioda — signe selon lui d'une note jamais jouée.
- **Traits** : rêveur, observateur, troublé
- **Voix** : hochant la tête comme un chef d'orchestre
- **Relations** : Oracle des Notes 98, Stratège des Harmonies 54, Mémoire de Lioda 99

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_LIO_53_01` | K0 | poste, lieu | son astrologie Puca des étoiles | — |
| 2 | `QI_LIO_53_02` | K0 | activite, role | ce qu'il voit depuis le Balcon | — |
| 3 | `QI_LIO_53_03` | K0 | ambiance, harmonie | les prédictions qu'il livre aux passants | — |
| 4 | `QI_LIO_53_04` | K1 | anomalie, silence | une étoile qui vibre au-dessus de la ville, seule | AFF>=60 |
| 5 | `QI_LIO_53_05` | K1 | melodie, ville | les soirs où la constellation fausse | AFF>=65 |
| 6 | `QI_LIO_53_06` | K1 | service, signal | ce qu'il demande pour une consultation | — |
| 7 | `QI_LIO_53_07` | K2 | profondeur, secret | l'étoile vibrante ne figure sur aucune carte céleste connue | AFF>=85 |
| 8 | `QI_LIO_53_08` | K2 | harmonie, cardinal | l'étoile pulse à la fréquence de l'Harmonie de Fond | QUEST:QST_PUC_PARTITIONS_PERDUES |
| 9 | `QI_LIO_53_09` | K3 | cardinal, harmonie de fond | L'Harmonie de Fond n'est pas de la musique : c'est la fréquence du Cardinal qui compile le monde de Lioda. Le seul vrai silence sous la ville est le vide du Cardinal lui-même. | JAMAIS — déflection : *(il lève les yeux, gêné)* « Les étoiles chantent, c'est tout. Ce qui les fait chanter, demande à un prêtre. » |
| 10 | `QI_LIO_53_10` | KX | *(hors sujet)* | parle de la forme des nuages, hors sujet | — |

## 4. Chaînage économique & quêtes

- **Service** : rouage de la vie de Lioda ; relaie rumeurs et anomalies aux autres PNJ du Balcon et de la Porte.
- Porteur d'indices K2/K3 sur **l'Harmonie de Fond / le Cardinal** et le fil **🔮 La Partition Originelle**.
- Croise les fils rouges de Lioda (Partition Qui Marche Seule, Refrain de l'Ombre, Silence Interdit, Espionne aux Cordes).

## 5. Intégration Bot

- **Accueil** (`!parler astrologue des notes`) : les prédictions qu'il livre aux passants
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2 débloqués).
- `NPC_SECRET_PROBED` slot 9 : hook « Harmonie de Fond = fréquence du Cardinal / Partition Originelle » réservé à l'orchestrateur.
