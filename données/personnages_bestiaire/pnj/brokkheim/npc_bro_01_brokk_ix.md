# 🔨 Brokk IX — `NPC_BRO_01`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_01` |
| **Nom affiché** | Brokk IX |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SKILL_MASTER` (Maître de Forge légendaire) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Forge-Mère |
| **Niveau / HP / MP** | 99 / 28 000 / 12 000 |
| **`qi_budget` / `is_essential`** | 12 / VRAI |

## 2. Bio & Personnalité

- **Bio** : neuvième du nom, Brokk IX est le plus jeune maître à avoir jamais dirigé la Forge-Mère — et le plus vieux par l'expérience. On dit qu'il est né une enclume à la main, que sa mère était un marteau-pilon et son père un feu de forge. Ce sont des légendes, bien sûr, mais Brokk IX ne les dément jamais. Il est le gardien du Pouls, le seul à entendre la voix qui bat sous Brokkheim — un langage de vibrations que les autres appellent « l'oreille du maître ». Il n'a pas d'héritier, pas d'apprenti digne de ce nom, et il vieillit. Nilsa `NPC_BRO_06` pourrait être la prochaine, mais elle ne l'entend pas encore. Il reçoit régulièrement Brokkr de Swilvane `NPC_SWI_05`, un nain qui parle d'un alliage inconnu.
- **Traits** : taciturne, patient, d'une précision qui frôle l'obsession ; ses mains tremblent légèrement — pas de vieillesse, mais de trop de coups portés.
- **Voix** : grave, posée, chaque mot est pesé comme un métal en fusion. « Le marteau ne ment jamais. C'est la main qui hésite. »
- **Relations** : Le Pouls `NPC_BRO_00` (seul à l'entendre) ; Apprentie Nilsa `NPC_BRO_06` (élève prodige, héritière pressentie) ; Chancelier Forges `NPC_BRO_08` (gère l'administration — Brokk IX ne s'en mêle pas) ; Maître Trempe `NPC_BRO_22` (rival silencieux sur la trempe) ; Maître Alliage `NPC_BRO_23` (allié dans la recherche des métaux rares) ; Brokkr `NPC_SWI_05` (visiteur régulier, recherche d'alliage).

## 3. Quantité Informationnelle (budget 12)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_01_01` | K0 | forge, enclume | Il travaille à l'enclume centrale de la Forge-Mère — une enclume enfoncée dans le roc | — |
| 2 | `QI_BRO_01_02` | K0 | maitre, formation | Il accepte de former les joueurs à la forge avancée si leur réputation le précède | — |
| 3 | `QI_BRO_01_03` | K0 | neuvieme, nom | Il est le neuvième Brokk — les huit précédents reposent sous la Forge-Mère | — |
| 4 | `QI_BRO_01_04` | K1 | pouls, ecoute | Il descend au −7 pour écouter le Pouls — il dit que le rythme lui dicte les secrets de forge | `AFF>=60` |
| 5 | `QI_BRO_01_05` | K1 | nilsa, prodige | Nilsa est son espoir — elle a le don, mais elle ne l'entend pas encore. « Il faut du temps. Le marteau apprend à l'oreille. » | `AFF>=65` |
| 6 | `QI_BRO_01_06` | K1 | mains, tremblement | Ses mains tremblent — pas de maladie, mais la mémoire de chaque coup porté. « Chaque objet laisse une trace dans les os. » | — |
| 7 | `QI_BRO_01_07` | K2 | brokkr, alliage | Brokkr de Swilvane vient régulièrement avec des échantillons d'un métal que Brokk IX n'identifie pas — un alliage qui ne figure dans aucun dictionnaire | `AFF>=85` |
| 8 | `QI_BRO_01_08` | K2 | dictionnaire, objets | Certains objets qu'il forge n'existent pas dans la base de données du jeu — il les crée avec le Pouls, et le Cardinal les valide a posteriori | `QUEST:QST_BRO_TREMPE_01` |
| 9 | `QI_BRO_01_09` | K2 | forge, secret | Il connaît un emplacement dans la Forge-Mère où le métal se plie aux souvenirs — pas aux plans | `AFF>=90` |
| 10 | `QI_BRO_01_10` | K3 | pouls, langage, code | Le Pouls lui parle dans un langage de coups — c'est la fréquence brute du serveur. Brokk IX comprend le code machine sans le savoir, par l'oreille. Il forge en accord avec le battement du serveur | JAMAIS — déflection : *(il pose son marteau. Le bruit de l'enclume s'arrête. Tout s'arrête.)* *(Il te regarde. Ses yeux sont vieux de mille ans.)* « Tu parles de choses que tu ne peux pas entendre. Va. Reviens quand tu sauras écouter le silence entre deux coups. » |
| 11 | `QI_BRO_01_11` | K3 | cardinal, enclume | L'enclume qu'il utilise est la première enclume jamais posée à Brokkheim — elle contient les logs de création de la zone. Le Cardinal ne peut pas la détruire sans supprimer la capitale | JAMAIS — déflection : *(il frappe l'enclume une fois. Un son pur, qui résonne longtemps.)* « Cette enclume a vu naître Brokkheim. Elle verra sa fin. Mais pas aujourd'hui. Et pas par ta bouche. » |
| 12 | `QI_BRO_01_12` | KX | *(hors sujet)* | *(il continue de forger, sans répondre)* | — |

## 4. Chaînage économique & quêtes

- **Skill Master** : `!skill_forge` (forge avancée), `!skill_alliage` (alliages).
- Donneur de `QST_BRO_TREMPE_01` (quête de Trempe Légendaire).
- Porteur du fil **🔨 Le Pouls** avec `NPC_BRO_00` et **🔮 L'Enclume du Cardinal** avec `NPC_BRO_07`, `NPC_BRO_08`, `NPC_BRO_99`.

## 5. Intégration Bot

- **Accueil** (`!parler brokk ix`) : *(Brokk IX ne lève pas les yeux de son enclume. Le marteau frappe. Silence. Il frappe à nouveau.)* « Parle. Mais ne me fais pas perdre le rythme. »
- `!skill_forge` (formation forge), `!skill_alliage` (alliages rares).
- `SYS_NPC_DIALOGUE` : scope = slots 1-9 (+K2 débloqués).
- `NPC_SECRET_PROBED` slots 10-11 : hooks « langage du serveur » et « enclume originelle du Cardinal » réservés à l'orchestrateur.
