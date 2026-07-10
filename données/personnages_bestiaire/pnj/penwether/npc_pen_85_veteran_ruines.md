# 🕯️ Vétéran des Ruines — `NPC_PEN_85`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_85` |
| **Nom affiché** | Vétéran des Ruines |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` (ancien explorateur — Porche Effondré) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Porche Effondré |
| **Niveau / HP / MP** | 55 / 8 800 / 6 000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Ancien explorateur des ruines, le Vétéran a arpenté chaque salle de la Nécropole, chaque strate de la Bibliothèque Enterrée, chaque faille des Terres Grises. Il boite bas d'une jambe qu'il a perdue dans l'effondrement du Porche Est — un effondrement qui n'aurait pas dû se produire, parce que les ruines ne sont pas en pierre, elles sont en code. Et le code ne s'effondre pas : il se corrompt. Il sait que la ville s'enfonce — lentement, strate par strate, comme un programme qui perd de la mémoire. Dans dix cycles, Penwether aura sombré sous le poids de ses propres données. Angle : la ville s'enfonce — elle s'enfonce sous le poids de ses propres données.
- **Traits** : bourru, réaliste, un éclat de peur dans le regard quand il parle des strates basses.
- **Voix** : rauque, fatiguée (« J'ai exploré les strates 1 à 9 de la Bibliothèque. En bas, c'est pas des livres. C'est des logs. Des logs de quand le monde a été allumé. Et en dessous, ça s'enfonce encore. La ville pompe, elle pompe sans arrêt, et un jour, elle va imploser. »).
- **Relations** : Vétéran Traductions `NPC_PEN_95` (ancien compagnon d'expédition — se sont perdus de vue) ; Guide Ruines `NPC_PEN_49` (lui envoie des explorateurs) ; Fossoyeur Grim `NPC_PEN_05` (l'a sauvé de la Nécropole une fois).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_85_01` | K0 | ruines, exploration | A exploré les ruines de Penwether pendant des cycles | — |
| 2 | `QI_PEN_85_02` | K0 | porche, effondre | Surveille le Porche Effondré — recommande des guides | — |
| 3 | `QI_PEN_85_03` | K0 | jambe, perte | A perdu une jambe dans l'effondrement du Porche Est | — |
| 4 | `QI_PEN_85_04` | K1 | ville, enfoncement | La ville s'enfonce — les ruines descendent d'un mètre tous les cycles | — |
| 5 | `QI_PEN_85_05` | K1 | strates, descente | Les strates de la Bibliothèque Enterrée s'enfoncent aussi — pompage de données | `AFF>=60` |
| 6 | `QI_PEN_85_06` | K1 | veterant, traducteur | `NPC_PEN_95` avait une carte des strates basses — il ne la montre plus | `AFF>=65` |
| 7 | `QI_PEN_85_07` | K2 | fond, acces | L'accès au fond des ruines est scellé — verrou système | `AFF>=80` |
| 8 | `QI_PEN_85_08` | K2 | pompage, cardinal | Le Cardinal pompe les données des ruines vers le noyau — la ville s'enfonce parce qu'il extrait ses fondations | `AFF>=85` |
| 9 | `QI_PEN_85_09` | K3 | ville, crash | Penwether ne s'enfonce pas — elle se vide. Le Cardinal migre les données de la ville vers un nouveau serveur. Penwether est une vieille instance en cours de désallocation. Les ruines sont les fichiers qui n'ont pas encore été déplacés. La ville s'efface progressivement, strate par strate. Dans quelques cycles, il ne restera que les ruines — les fichiers que le Cardinal n'a pas pu migrer | JAMAIS — déflection : *(il fixe ses mains)* « Elle s'enfonce. C'est tout. Les pierres deviennent plus lourdes. Le sol monte. Non, le sol descend. Je sais plus. Je suis vieux. Laisse-moi. » *(il ferme les yeux et ne les rouvre pas)* |
| 10 | `QI_PEN_85_10` | KX | *(hors sujet)* | « Les ruines ne cachent rien. Elles attendent. Elles attendent d'être oubliées. » | — |

## 4. Chaînage économique & quêtes

- **Quest Giver** : `QST_PEN_ENFONCEMENT_01` (mesurer la descente des ruines — 3 strates). `QST_PEN_STRATE_BASSE_01` (accéder à la strate scellée).
- **Fils rouges** : rouage de **📜 Ce Que Cachent les Ruines** (les ruines descendent, le Cardinal les pompe). Relais de **🔮 Fil méta — La Ville Fantôme** (Penwether est une vieille instance en cours de désallocation).
- Recommande des explorateurs vers la Nécropole Antique et la Bibliothèque Enterrée.

## 5. Intégration Bot

- **Accueil** (`!parler veterant ruines`) : *« T'as l'air frais. Tu veux descendre ? Dans les strates basses ? Prends une corde. Et un masque. Et oublie pas : ce que tu verras en bas, tu pourras pas le dire en haut. »*
- `!pen_veteran_quetes` — liste des quêtes disponibles.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « Penwether est une vieille instance du serveur en cours de désallocation » réservé à l'orchestrateur.
