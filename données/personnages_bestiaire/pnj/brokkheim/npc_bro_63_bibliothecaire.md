# 🔨 Bibliothécaire — `NPC_BRO_63`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_63` |
| **Nom affiché** | Bibliothécaire |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (bibliothèque des forges) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Conseil Guildes (bibliothèque) |
| **Niveau / HP / MP** | 28 / 1 900 / 900 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Il garde la bibliothèque des forges — des centaines de traités de métallurgie, de runes et d'histoire. Un tome ancien, « Du Souffle du Mithril », claque tout seul la nuit — la couverture se soulève et retombe comme si quelqu'un le lisait à l'envers. Il n'ose plus entrer dans la salle des grimoires après le coucher du soleil.
- **Traits** : érudit, voix de parchemin, terreur des livres qui bougent.
- **Voix** : chuchotement de salle de lecture, même en plein air.
- **Relations** : Archiviste Plans `NPC_BRO_62` (prêts de documents croisés) ; Dompteur Feux Follets `NPC_BRO_58` (lui a prêté un traité sur les langues élémentaires) ; Scribe Conseil `NPC_BRO_60` (compare les altérations de textes).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_63_01` | K0 | bibliotheque, acces | Horaires, règles de prêt, sections de la bibliothèque | — |
| 2 | `QI_BRO_63_02` | K0 | ouvrages, catalogue | Catalogue des ouvrages publics : forge, runes, histoire, géologie | — |
| 3 | `QI_BRO_63_03` | K0 | livre, conseil | Conseils de lecture selon le métier du joueur | — |
| 4 | `QI_BRO_63_04` | K1 | tome, claque | Le tome « Du Souffle du Mithril » claque la nuit — coup sec, régulier | `AFF>=60` |
| 5 | `QI_BRO_63_05` | K1 | tome, contenu | Le tome parle de l'Enclume du Cardinal comme d'une « forge pensante » — écriture pré-fondation | — |
| 6 | `QI_BRO_63_06` | K1 | auteur, inconnu | L'auteur du tome est anonyme — « scribe du Cardinal » en exergue | `AFF>=70` |
| 7 | `QI_BRO_63_07` | K2 | tome, pouls | Le tome claque en rythme avec le Pouls de `NPC_BRO_71` — il a chronométré | `AFF>=80` |
| 8 | `QI_BRO_63_08` | K2 | pages, vierges | Les dernières pages du tome sont vierges — mais la nuit, des mots apparaissent en encre sèche | `AFF>=90` |
| 9 | `QI_BRO_63_09` | K3 | tome, fragment | Le tome est un fragment de la mémoire de l'Enclume relié en peau. L'Enclume imprime sa pensée dans le livre comme le plan se complète chez `NPC_BRO_62` — les pages vierges sont le buffer d'écriture du Cardinal | JAMAIS — déflection : *(il repose le tome sur son socle, main tremblante)* « La reliure est ancienne. Le parchemin travaille avec l'humidité, les variations de température. Les livres ne sont pas vivants — ce serait absurde. » |
| 10 | `QI_BRO_63_10` | KX | *(tout le reste)* | « Chut — on est dans une bibliothèque. Les livres écoutent. » | — |

## 4. Chaînage économique & quêtes

- Service : consultation d'ouvrages (bonus XP craft, lore).
- K3 : le livre comme mémoire de l'Enclume — fil Enclume + Pouls.
- `QST_BRO_TOME_01` : déchiffrer les pages qui s'écrivent la nuit.

## 5. Intégration Bot

- **Accueil** (`!parler bibliothecaire`) : *« Chut. Les livres n'aiment pas les voix fortes. Sauf celui-là, la nuit — il parle tout seul. »*
- `!bibliotheque_recherche [sujet]` : recherche dans le catalogue.
