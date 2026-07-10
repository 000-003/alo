# 🕯️ Masquier Orin — `NPC_PEN_03`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_03` |
| **Nom affiché** | Masquier Orin |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (cosmétiques et fausses identités — masques, grimages, alias) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Atelier des Visages |
| **Niveau / HP / MP** | 38 / 4 500 / 6 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Orin est le masquier le plus réputé de Penwether — il fabrique des masques qui changent non seulement l'apparence, mais l'identité enregistrée du porteur dans le système. Un Spriggan masqué par Orin peut passer une porte gardée, entrer dans une zone restreinte, ou même modifier son `NPC_ID` temporaire. Il travaille dans l'Atelier des Visages, une salle tapissée de moules faciaux, de pigments qui luisent dans le noir et de miroirs qui ne reflètent pas tout. Son secret : il a trouvé comment interfacer ses masques avec le Cardinal, et certains de ses masques « voient par eux-mêmes ». Il ne sait pas d'où lui vient ce talent — il l'a toujours eu, comme si l'Atelier l'attendait.
- **Traits** : méticuleux, secrètement paniqué par son propre talent, parle à ses masques.
- **Voix** : professionnelle, avec un chevrotement quand on évoque la Bibliothèque Enterrée (« Ce masque te donnera l'apparence d'un Gardien. Pas le grade. Juste la façade. Mais attention : certaines portes reconnaissent les masques… et certaines reconnaissent les visages. »).
- **Relations** : Maître Masques `NPC_PEN_22` (son concurrent direct — s'échangent des recettes de pigments) ; Apprenti Illusionniste `NPC_PEN_21` (lui fournit des masques pour les cours de Vex) ; Marchand de Fleurs `NPC_PEN_12` (lui achète des pigments rares trouvés dans les Ruines Noires) ; Fantôme des Ruines `NPC_PEN_00` (sent confusément son existence sans le connaître).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_03_01` | K0 | masques, fabrication | Types de masques, matériaux, prix | — |
| 2 | `QI_PEN_03_02` | K0 | identite, fausse | Les masques d'identité modifient le `display_name` temporairement | — |
| 3 | `QI_PEN_03_03` | K0 | atelier, histoire | L'Atelier des Visages est un ancien scriptorium de la cité d'avant | — |
| 4 | `QI_PEN_03_04` | K1 | cardinal, interface | Ses masques les plus avancés s'interfacent avec le Cardinal — il ne sait pas comment | `AFF>=65` |
| 5 | `QI_PEN_03_05` | K1 | masque, vivant | Certains masques « voient par eux-mêmes » — il les garde sous clé | `AFF>=70` |
| 6 | `QI_PEN_03_06` | K1 | statue, kirito | Un commanditaire masqué lui a acheté cinquante masques identiques — tous pour le même visage | — |
| 7 | `QI_PEN_03_07` | K2 | atelier, secrete | Il y a une strate sous l'Atelier — un ancien atelier de compilation de visages | `AFF>=85` |
| 8 | `QI_PEN_03_08` | K2 | commanditaire, ombre | L'homme qui achète ses masques en gros est lié au Pacte des Ombres | `AFF>=88` |
| 9 | `QI_PEN_03_09` | K3 | identite, origine | Les « vrais visages » n'existent pas dans le système — seuls les masques sont indexés. Sans masque, un Spriggan n'a pas d'identité | JAMAIS — déflection : *(il laisse tomber un pinceau)* « Tu veux voir ton vrai visage ? Il n'existe pas. Pas dans le système. Le Cardinal ne t'a pas créé avec un visage. Il t'a créé avec une interface. Le masque est l'interface. Sans lui, tu n'es qu'une strate. Et les strates, ça s'écrase. » |
| 10 | `QI_PEN_03_10` | KX | *(hors-sujet)* | « Choisis ton masque. Mais souviens-toi : le masque te choisit aussi. Et il a meilleure mémoire que toi. » | — |

## 4. Chaînage économique & quêtes

- **Merchant** : vend `MASQUE_ID_FACTICE` (change le display_name), `MASQUE_GARDE` (accès zone restreinte), pigments cosmétiques.
- **Fils rouges** : rouage de **🪞 La Statue de Kirito** (commande de cinquante masques d'un même visage) et de **🔑 Le Pacte des Ombres** (commanditaire lié au trafic).
- Donneur de `QST_PEN_MASQUE_ID_01` (trouver un pigment rare dans les Citernes Antiques).

## 5. Intégration Bot

- **Accueil** (`!parler orin`) : *« Bienvenue à l'Atelier des Visages. Ici, on ne te demande pas qui tu es. On te demande qui tu veux être. Asseois-toi. Je te prépare un visage. »*
- `!masques orin` (catalogue) ; `!façonner orin [type]` (commande de masque).
