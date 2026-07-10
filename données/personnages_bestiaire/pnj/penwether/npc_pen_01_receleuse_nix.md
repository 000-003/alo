# 🕯️ Receleuse Nix — `NPC_PEN_01`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_01` |
| **Nom affiché** | Receleuse Nix |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `BLACK_MARKET` (objets d'occasion qui se souviennent de leurs morts) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Marché des Sept Façades |
| **Niveau / HP / MP** | 45 / 6 200 / 9 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Nix tient un étal hétéroclite au Marché des Sept Façades, sous une bannière effilochée où personne n'a jamais vu la même broderie deux fois. Elle vend des objets « d'occasion » — mais chaque objet qu'elle touche conserve un fragment de souvenir de son précédent propriétaire. Un bracelet qui murmure le nom d'un mort, une épée qui tremble quand on approche d'un lieu de bataille, un masque qui pleure la nuit. Elle ne fabrique rien, elle ne répare rien : elle écoute les objets et les revend à qui saura les entendre. Les Spriggans « propres » l'évitent, mais les fouilleurs, les nécromanciens et les collectionneurs lui font crédit.
- **Traits** : discrète, réceptive aux échos des objets, voix qui semble fatiguée de porter trop de souvenirs.
- **Voix** : posée, avec des silences soudains (« Cette dague ? Elle a appartenu à un fouilleur qui n'est pas remonté des Ruines Noires. Tu l'entends ? Non ? Tant mieux. Ou tant pis. »).
- **Relations** : Grim `NPC_PEN_05` (lui achète des objets récupérés sur les morts de la Nécropole) ; Cartographe Maude `NPC_PEN_04` (échange des cartes contre des artefacts) ; Fossoyeur Grim `NPC_PEN_05` (concurrence feutrée — tous deux récupèrent sur les morts).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_01_01` | K0 | etal, objets | Elle vend des objets d'occasion, sans garantie, sans origine | — |
| 2 | `QI_PEN_01_02` | K0 | ecoute, souvenirs | Elle « entend » les souvenirs des objets — elle ne sait pas expliquer comment | — |
| 3 | `QI_PEN_01_03` | K0 | prix, nego | Négociation des prix — paiement en Yrd ou en information | — |
| 4 | `QI_PEN_01_04` | K1 | ruines, noires | Elle a acheté un objet venu des Ruines Noires qui « criait » — elle ne veut plus en vendre | `AFF>=60` |
| 5 | `QI_PEN_01_05` | K1 | necropole, morts | Les objets de la Nécropole Antique portent des souvenirs « non compilés » — ils n'ont jamais vraiment vécu | `AFF>=70` |
| 6 | `QI_PEN_01_06` | K1 | masques, memoire | Certains masques qu'elle vend gardent la mémoire de leur porteur défunt — le Marché des Sept Façades les lui achète en silence | — |
| 7 | `QI_PEN_01_07` | K2 | objet, special | Elle possède un objet du Premier Reset — un éclat de sceau que personne n'identifie | `AFF>=85` |
| 8 | `QI_PEN_01_08` | K2 | collectionneur, masque | Un collectionneur masqué lui achète tous les objets « qui saignent » — elle ne sait pas pourquoi | `AFF>=88` |
| 9 | `QI_PEN_01_09` | K3 | mort, sans compilation | Les « morts non compilés » de la Nécropole ne sont pas des vrais morts — ce sont des entités dont l'initialisation a échoué | JAMAIS — déflection : *(elle referme brusquement un coffret)* « Je ne parle pas de ça. Les objets qui n'ont jamais vécu… ils n'ont pas à être vendus. Ni achetés. Ni nommés. Pose ça ailleurs. » |
| 10 | `QI_PEN_01_10` | KX | *(hors-sujet)* | « L'objet ne te parlera pas si tu ne l'écoutes pas. Et tu n'écoutes pas bien. » | — |

## 4. Chaînage économique & quêtes

- **Black Market** : inventaire tournant de 15-20 objets d'occasion (`!etal nix`). Certains déclenchent des mini-quêtes (souvenirs à restituer).
- **Fils rouges** : rouage de **💀 La Nécropole Ancestrale** (objets de morts non compilés) et de **🎭 Les Illusions Qui Mentent** (les masques qui gardent la mémoire).
- `ITEM_RUINES_NOIRES_ECHO` : objet spécial K2 — peut être acheté pour 5 000 Yrd si `AFF>=85`.

## 5. Intégration Bot

- **Accueil** (`!parler nix`) : *« Chaque objet ici a une histoire. Certaines sont à vendre. D'autres… non. Assieds-toi. Écoute. Et choisis ce qui te parle. »*
- `!etal nix` (inventaire) ; `!ecouter nix [objet]` (histoire de l'objet).
