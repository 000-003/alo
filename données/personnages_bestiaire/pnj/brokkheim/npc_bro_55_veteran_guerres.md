# 🔨 Vétéran Guerres — `NPC_BRO_55`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_55` |
| **Nom affiché** | Vétéran Guerres |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` (ancien combattant des guerres raciales) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Halle Marteau (alcôve des vétérans) |
| **Niveau / HP / MP** | 42 / 7 200 / 900 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Ancien négociateur du traité de paix entre Leprechauns et Gnomes — un accord qui mit fin à des années de conflit pour les filons de mithril des contreforts. Mais le traité que tout Brokkheim connaît est une version édulcorée : le vrai document, qu'il conserve dans une cache scellée sous la Halle Marteau, mentionne une clause secrète de cession territoriale en faveur des Gnomes — cédée pour que Brokkheim garde l'accès à l'Enclume du Cardinal. Personne ne doit savoir que les Leprechauns ont vendu une partie de leur histoire pour une enclume.
- **Traits** : digne, voix de commandement usée, regard qui fuit les symboles du traité.
- **Voix** : parle du traité comme d'une blessure référencée mais jamais montrée.
- **Relations** : Scribe Conseil `NPC_BRO_60` (craint qu'il ne découvre la cache) ; Archiviste Plans `NPC_BRO_62` (le seul qui pourrait authentifier le faux-scellé) ; Stratège Conseil `NPC_BRO_69` (ancien subalterne — le respecte encore).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_55_01` | K0 | traite, paix | Le traité de paix Leprechaun-Gnome : date, signataires, clauses publiques | — |
| 2 | `QI_BRO_55_02` | K0 | guerres, raciales | Les guerres raciales entre Leprechauns et Gnomes : causes (le mithril), batailles, armistice | — |
| 3 | `QI_BRO_55_03` | K0 | role, veterant | Son rôle dans la guerre : messager, négociateur, jamais combattant — contrairement à sa légende | — |
| 4 | `QI_BRO_55_04` | K1 | traite, cache | Le vrai traité existe, scellé sous la Halle Marteau — il peut l'ouvrir | `AFF>=70` |
| 5 | `QI_BRO_55_05` | K1 | clause, secrete | Il existe une clause secrète : les Leprechauns ont cédé les terrils nord aux Gnomes (aujourd'hui zone contestée) | `AFF>=80` |
| 6 | `QI_BRO_55_06` | K2 | enclume, prix | La clause a été acceptée parce que l'Enclume du Cardinal ne pouvait être déplacée — les Gnomes savaient ce qu'elle valait | `AFF>=90` |
| 7 | `QI_BRO_55_07` | K2 | scribe, menace | Le Scribe `NPC_BRO_60` le fait chanter avec un brouillon du faux-scellé | `AFF>=80` |
| 8 | `QI_BRO_55_08` | K2 | gnomes, granzam | Des émissaires Gnomes de Granzam viennent chaque année vérifier l'application de la clause secrète — il les reçoit dans la honte | — |
| 9 | `QI_BRO_55_09` | K3 | traite, cardinal | Le traité n'a JAMAIS été négocié entre Leprechauns et Gnomes : les deux parties l'ont reçu du Cardinal, déjà rédigé. Les « négociateurs » n'étaient que des porteurs de plume | JAMAIS — déflection : *(il pose une main sur le marteau de la Halle, geste ancien)* « Le traité est ce qu'il est. Il a apporté la paix. Le prix de la paix ne se négocie pas — il se paie, et on se tait. » |
| 10 | `QI_BRO_55_10` | KX | *(tout le reste)* | « La guerre est finie. Les mots aussi. Va forger, c'est ce qu'on sait faire. » | — |

## 4. Chaînage économique & quêtes

- QUEST_GIVER — quête principale fil Rivalité Mineurs.
- `QST_BRO_TRAITE_01` : enquêter sur le traité secret et la clause de l'Enclume.
- K3 : le Cardinal est l'auteur du traité — révélation méta sur le contrôle des conflits interraciaux par le System.

## 5. Intégration Bot

- **Accueil** (`!parler veterant`) : *« Le traité est public. Le silence est privé. Tu veux savoir lequel des deux ? »*
- `!traite_gnome` : donne la version officielle du traité.
