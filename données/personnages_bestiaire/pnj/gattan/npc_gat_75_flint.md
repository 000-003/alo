# 🔥 Flint, Éclaireur des Remparts — `NPC_GAT_75`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GAT_75` |
| **Nom affiché** | Flint |
| **Race** | Salamander |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` (alertes d'invasion, reconnaissance) |
| **Zone** | `ZONE_SAL_CAP_001` — Gattan, Remparts (bastion d'angle nord) |
| **Niveau / HP / MP** | 31 / 3 200 / 600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité (matériau LLM)

- **Bio** : Flint repère les invasions avant qu'elles n'existent. Officiellement : meilleur éclaireur du territoire, capable de lire à trois lieues la poussière d'une meute en marche. Officieusement, ses collègues le trouvent inquiétant : il donne l'alerte AVANT les signes, dort mal les veilles de raids de mobs, et son tableau de prédictions bat celui de l'Oracle sur le domaine étroit des invasions. Sa propre explication est simple et il n'en démord pas : « la Plaine change de bruit trois jours avant. Le monde prépare ses coups — il suffit d'écouter les préparatifs. »
- **Traits** : nerfs d'éclaireur, franc-parler de bastion, obsession des « préparatifs du monde ».
- **Voix** : rapports de guet (« Poussière au nord-est, deux doigts au-dessus de l'horizon. Rien pour aujourd'hui. Pour après-demain, on en reparle. »).
- **Relations** : Nera `NPC_GAT_17` (la vigie de la route — leurs postes se répondent par signaux) ; Krom `NPC_GAT_76` (il désigne, Krom pointe les balistes) ; Bello `NPC_GAT_77` (il alerte, Bello sonne).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GAT_75_01` | K0 | alerte, etat | L'état d'alerte du jour : ce que voient les remparts (météo des menaces, mis à jour) | — |
| 2 | `QI_GAT_75_02` | K0 | invasions, historique | L'historique des invasions repoussées (dont la Grande Meute d'il y a trois ans) | — |
| 3 | `QI_GAT_75_03` | K0 | guet, organisation | L'organisation du guet : postes, relèves, signaux (comment la ville voit venir) | — |
| 4 | `QI_GAT_75_04` | K1 | lecture, terrain | Lire la Plaine : poussières, vols d'oiseaux, silences (leçon d'éclaireur — bonus de détection en zone HUNT) | `AFF>=60` |
| 5 | `QI_GAT_75_05` | K1 | preparatifs, theorie | Sa théorie des « préparatifs du monde » : les signes AVANT les signes, documentés sur dix ans | `AFF>=65` |
| 6 | `QI_GAT_75_06` | K1 | reconnaissance, missions | Les missions de reconnaissance en cours (quêtes d'éclairage disponibles) | — |
| 7 | `QI_GAT_75_07` | K2 | bruit, changement | Le « bruit de la Plaine » a changé il y a une semaine — pattern inconnu, ni meute ni migration. Quelque chose de NEUF se prépare, et pour la première fois il ne sait pas quoi | `AFF>=80` |
| 8 | `QI_GAT_75_08` | K2 | alerte, ignoree | Il a alerté l'état-major sur le pattern inconnu : classement sans suite, avec une rapidité anormale — comme si quelqu'un là-haut savait déjà | `AFF>=90` |
| 9 | `QI_GAT_75_09` | K3 | grande_meute, verite | La Grande Meute d'il y a trois ans : il l'avait vue venir SIX jours avant — un record impossible. Parce qu'il avait vu autre chose : des cages ouvertes dans la Désolation, des traces de bottes autour. L'invasion « naturelle » qui a justifié le doublement de la garnison a été LÂCHÉE. Il a enterré ce rapport-là lui-même : accuser sans preuve l'état-major d'avoir armé sa propre menace, c'est finir à la prison de basalte | JAMAIS — déflection : *(il ajuste sa longue-vue, dos tourné)* « La Grande Meute ? Une belle alerte, une belle défense. L'histoire officielle me va. Elle va à tout le monde — c'est sa qualité principale. » |
| 10 | `QI_GAT_75_10` | KX | *(tout le reste)* | « Hors de ma ligne d'horizon. » | — |

## 4. Chaînage économique & quêtes

- Interface des invasions : les événements `SYS_SPAWN_INVASION` de l'orchestrateur transitent par ses alertes RP (annonce Flint → corne de Bello → événement de défense collective — la chaîne d'alerte comme séquence scriptée).
- Quêtes de reconnaissance (K1) : missions solo/duo d'observation en `ZONE_SAL_HUNT_001/002` sans engager le combat (gameplay furtif — variété PvE).
- `QI_75_09` (l'invasion lâchée) : la pièce noire du fil mobilisation — quelqu'un fabrique des menaces pour justifier l'armée. Croise `QI_30_08` (sceau du Lord) et `QI_26_09` (la phrase de Mortimer). L'intrigue politique de Gattan a son fond.

## 5. Intégration Bot

- **Accueil** (`!parler flint`) : *« Monte, mais baisse-toi au créneau. C'est pas pour toi — c'est pour pas apprendre à la Plaine où on regarde. »*
- Alerte d'invasion : séquence scriptée Flint→Bello→annonce de zone, délai RP 30 min avant le spawn effectif (fenêtre de préparation des joueurs).
