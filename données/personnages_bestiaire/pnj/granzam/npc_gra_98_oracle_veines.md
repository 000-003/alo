# ⛏️ Oracle des Veines — `NPC_GRA_98`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_98` |
| **Nom affiché** | Oracle des Veines |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Mine de Mithril |
| **Niveau / HP / MP** | 28 / 1 800 / 2 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Prophétesse recluse dans les profondeurs de la Mine de Mithril. Elle lit l'avenir dans les veines de calcite et les reflets de gemmes brutes. Ses prédictions sont étrangement précises — trop précises. Elle annonce des éboulements avant qu'ils n'arrivent, des arrivages de marchands avant qu'ils ne franchissent la Porte, des morts avant que la pioche ne frappe. En réalité, elle n'est pas une prophétesse : elle capte les flux de données du Cardinal qui transitent par les veines de calcite (lié à la Prêtresse `NPC_GRA_81`). Elle voit les alertes système, les logs de spawn, les horaires de maintenance. Elle croit être une oracle — elle est un terminal involontaire. Liée à Margrim (`NPC_GRA_06`) et au Cœur (`NPC_GRA_00`). Nommée dans la bio de GRA_00. **Angle** : Prédictions d'orchestrateur — ses visions sont des logs système.
- **Traits** : visionnaire, absente, peau poussiéreuse de calcite, yeux laiteux.
- **Voix** : Distante, comme venue d'ailleurs. Elle parle par fragments. « Je vois… un battement. Un cœur de granit. Une faille. Et en dessous… la fin des veines. La montagne sera vide. »
- **Relations** : `NPC_GRA_06` (Margrim — confident, partage les visions) ; `NPC_GRA_00` (Cœur de Granit — source de ses visions) ; `NPC_GRA_81` (Prêtresse — même lien à la calcite) ; `NPC_GRA_99` (Mémoire — lui a appris à lire les signes).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_98_01` | K0 | oracle, propheties | Les prophéties de l'Oracle — consultation, rituels | — |
| 2 | `QI_GRA_98_02` | K0 | veines, calcite | La lecture des veines de calcite — art divinatoire | — |
| 3 | `QI_GRA_98_03` | K0 | mine, mithril | La Mine de Mithril — lieux, dangers, profondeurs | — |
| 4 | `QI_GRA_98_04` | K1 | vision, eboulement | Elle a prédit l'éboulement de la galerie −22 trois jours avant | `AFF>=60` |
| 5 | `QI_GRA_98_05` | K1 | vision, arrivee | Elle a annoncé l'arrivée du Marchand Leprechaun `NPC_GRA_91` avant qu'il n'entre en ville | `AFF>=65` |
| 6 | `QI_GRA_98_06` | K1 | margrim, partage | Margrim `NPC_GRA_06` vient la voir chaque semaine — il compare ses visions à ses relevés sismiques | — |
| 7 | `QI_GRA_98_07` | K2 | vision, maintenance | Elle a vu « un œil qui s'éteint et se rallume » — description exacte d'un redémarrage du serveur | `AFF>=85` |
| 8 | `QI_GRA_98_08` | K2 | vision, faille | « La montagne saigne parfois » — une vision de la calcite rouge que la Prêtresse `NPC_GRA_81` a aussi vue | `QUEST:QST_GRA_ORACLE_VEINES` |
| 9 | `QI_GRA_98_09` | K3 | oracle, terminal, cardinal | L'Oracle ne prédit pas l'avenir — elle décode les flux de données du Cardinal qui traversent la calcite. Chaque « vision » est un log système : spawn timers, alertes de maintenance, notifications de seed. Le Cardinal utilise son cerveau comme processeur de décompression de données. Elle est un « terminal humain » | JAMAIS — déflection : *(elle ferme les yeux)* « Je ne vois plus rien. Les veines sont noires aujourd'hui. Reviens quand la montagne aura soif. » |
| 10 | `QI_GRA_98_10` | KX | *(hors sujet)* | *(elle touche une veine de calcite)* « La pierre parle à qui sait l'écouter. Toi, tu écoutes avec tes oreilles. Moi, j'écoute avec mes os. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!consultation_oracle` (prédiction aléatoire, peut révéler un événement à venir).
- Porteur du fil **🔮 Le Noyau de Pierre** (Oracle = terminal humain du Cardinal).
- Donneur de `QST_GRA_ORACLE_VEINES` : enquête sur la source de ses visions.

## 5. Intégration Bot

- **Accueil** (`!parler oracle`) : *Assise en tailleur au fond de la mine, les doigts posés sur une veinure de calcite, elle ne lève pas les yeux.* « Tu viens pour une vision ? Pose ta main sur la veine. Mais ne te plains pas si ce que tu vois te déplaît. »
- `!consultation_oracle` actif dans la Mine de Mithril.
- `NPC_SECRET_PROBED` slot 9 : hook « Oracle = terminal de décompression de données du Cardinal » pour l'orchestrateur.
