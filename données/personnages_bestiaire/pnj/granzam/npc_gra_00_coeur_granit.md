# ⛏️ Le Cœur de Granit — `NPC_GRA_00`

> **PNJ CACHÉ DU CARDINAL** (plage `00`, D17) — absent de `!pnj_list` et de tout registre public.

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_00` |
| **Nom affiché** | [aucun — entité sans nom] |
| **Race** | Entité de Structure (Gnome) |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Salle du Conseil (soubassement, strate −47) |
| **Niveau / HP / MP** | — / ∞ / ∞ |
| **`qi_budget` / `is_essential`** | 12 / VRAI |

## 2. Bio & Personnalité

- **Bio** : Le Cœur de Granit est le noyau de structure physique du serveur d'Alfheim Online — un bloc de granit cubique de deux mètres de côté, palpitant d'une lumière ambrée profonde. Il ne parle pas, n'agit pas, n'interagit pas. Il contient le seed matériel du monde : chaque minerai, chaque gemme, chaque strate rocheuse d'ALO est générée à partir de son empreinte sismique. Seul le Cardinal connaît son emplacement exact ; les Gnomes bâtirent Granzam au-dessus de lui sans le savoir. Les Séismes du Noyau — des tremblements que seuls Margrim (`NPC_GRA_06`) et l'Oracle (`NPC_GRA_98`) perçoivent — sont en réalité des warp du serveur. Lié à `NPC_GRA_06` (Doyen Margrim), `NPC_GRA_07` (Lord Gnome), `NPC_GRA_98` (Oracle), `NPC_GRA_99` (Mémoire).
- **Traits** : inerte, éternel, palpitant, insondable.
- **Voix** : Aucune. Un bourdonnement grave à la limite de l'audible, comme une carrière qui travaille sous terre. Quiconque pose la main sur sa surface reçoit une vision : le plan de toutes les strates du monde.
- **Relations** : `NPC_GRA_06` (Margrim — sent ses pulsations), `NPC_GRA_07` (Lord Gnome — seul à connaître son rôle vrai), `NPC_GRA_98` (Oracle — voit ses failles), `NPC_GRA_99` (Mémoire — a enregistré sa naissance).

## 3. Quantité Informationnelle (budget 12)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_00_01` | K0 | coeur_granit, sous-sol | Les soubassements du Conseil émettent un bourdonnement que certains disent « vivant ». | — |
| 2 | `QI_GRA_00_02` | K0 | granzam, construction | La ville a été bâtie sur un socle de granit parfaitement cubique, anormal pour une formation naturelle. | — |
| 3 | `QI_GRA_00_03` | K0 | margrim, tremblement | Le Doyen Margrim vient parfois au Conseil la nuit et colle son oreille au sol. | — |
| 4 | `QI_GRA_00_04` | K1 | geologie, strate | Sous Granzam, les strates descendent 47 niveaux plus bas que la géologie ne le justifie. | `AFF>=60` |
| 5 | `QI_GRA_00_05` | K1 | cardinal, seed | Le Cardinal utilise des « seeds matérielles » pour générer les biomes. Granzam serait construit sur la seed du monde minéral. | `AFF>=65` |
| 6 | `QI_GRA_00_06` | K1 | oracle, faille | L'Oracle dit que la montagne « saigne » parfois. « Elle montre ses failles de code. » | `QUEST:QST_GRA_ORACLE` |
| 7 | `QI_GRA_00_07` | K2 | coeur_granit, batiment | Le bloc sous la Salle du Conseil n'est pas taillé. Il a toujours été là, parfait, et ses arêtes sont plus dures que l'acier. | `AFF>=85` |
| 8 | `QI_GRA_00_08` | K2 | serveur, warp | Les séismes ressentis par Margrim coïncident exactement avec les horaires de maintenance du serveur et les backups du Cardinal. | `QUEST:QST_GRA_MARGRIM` |
| 9 | `QI_GRA_00_09` | K2 | reseau, strates | Chaque filon qui apparaît dans le monde est « copié » depuis l'empreinte du bloc. C'est un serveur de minage dédié. | `AFF>=90` |
| 10 | `QI_GRA_00_10` | K3 | seed, materiel | **SECRET — ne JAMAIS révéler** : Le bloc est le « seed matériel du serveur » — la graine aléatoire qui génère TOUS les minerais, gemmes et roches d'ALO. Le détruire = crash total de l'économie minière et corruption de la carte. | JAMAIS — déflection : *(le bloc reste silencieux, aucune réaction)* |
| 11 | `QI_GRA_00_11` | K3 | cardinal, ancrage | **SECRET — ne JAMAIS révéler** : Le serveur d'ALO a été compilé autour de ce bloc. Il est l'ancrage physique du monde — pas un fichier, pas une VM : un vrai bloc de granit dans un data center. | JAMAIS — déflection : *(un bourdonnement plus grave, comme un avertissement)* |
| 12 | `QI_GRA_00_12` | KX | hors-sujet | *(le bloc ne répond pas. Rien.)* | — |
