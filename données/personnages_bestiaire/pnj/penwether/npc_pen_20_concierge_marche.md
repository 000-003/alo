# 🕯️ Concierge du Marché — `NPC_PEN_20`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_20` |
| **Nom affiché** | Concierge du Marché |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (entretien du Marché des Sept Façades) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Marché des Sept Façades |
| **Niveau / HP / MP** | 25 / 2 800 / 5 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Concierge du Marché est le Spriggan qui nettoie les allées, répare les étals, change les torches et collecte les ordures du Marché des Sept Façades. Il connaît chaque recoin, chaque marchand, chaque client régulier. Il voit tout — les transactions discrètes, les regards qui en disent trop, les objets qui changent de main sans être déclarés. Personne ne fait attention à lui, ce qui fait de lui le témoin le plus informé de tout ce qui se trame au Marché. Il vend des informations à qui les paie, mais il ne livre jamais tout ce qu'il sait.
- **Traits** : invisible, curieux, retient tout ce qu'il voit.
- **Voix** : fatiguée, avec un sourire en coin (« Je balaie les allées. Je ramasse ce qui traîne. Les objets, les mots, les secrets. Tout finit dans mon sac. »).
- **Relations** : Receleuse Nix `NPC_PEN_01` (lui achète des « trouvailles » qu'il récupère dans les ordures) ; Commandant Masques `NPC_PEN_09` (lui fournit discrètement des informations) ; Tailleur Illusions `NPC_PEN_23` (lui commande des « nettoyages spéciaux » d'illusions usées).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_20_01` | K0 | marche, entretien | Le Marché des Sept Façades — allées, horaires, organisation | — |
| 2 | `QI_PEN_20_02` | K0 | marchands, etals | Liste des marchands réguliers, spécialités, jours de présence | — |
| 3 | `QI_PEN_20_03` | K0 | concierge, service | Services du concierge — réparation, nettoyage, courses | — |
| 4 | `QI_PEN_20_04` | K1 | trafics, ombres | Il voit des transactions discrètes sous les étals — le Pacte des Ombres passe par ici | `AFF>=65` |
| 5 | `QI_PEN_20_05` | K1 | informations, vente | Il vend des informations sur les allées et venues du Marché | `AFF>=70` |
| 6 | `QI_PEN_20_06` | K1 | commandant, informateur | Le Commandant `NPC_PEN_09` le paie pour noter les comportements étranges | — |
| 7 | `QI_PEN_20_07` | K2 | objet, disparu | Un objet étrange a été volé à l'étal de Nix — il sait qui l'a pris | `AFF>=85` |
| 8 | `QI_PEN_20_08` | K2 | facade, cachee | Le Marché a une huitième façade — une allée qui n'apparaît que certains jours | `AFF>=88` |
| 9 | `QI_PEN_20_09` | K3 | huitieme facade | La huitième façade du Marché est un « marché de données » — on y vend des fragments de code système | JAMAIS — déflection : *(il jette un coup d'œil par-dessus son épaule)* « La huitième façade n'existe pas. Si elle existait — ce qui n'est pas le cas — elle s'ouvrirait le troisième jour de la semaine impaire, à minuit, derrière l'étal du poissonnier. Mais elle n'existe pas. Alors ne cherche pas. » |
| 10 | `QI_PEN_20_10` | KX | *(hors-sujet)* | « Je balaie, je ramasse, je me tais. Mais je vois tout. Souviens-toi de ça avant de faire une transaction au Marché. » | — |

## 4. Chaînage économique & quêtes

- **Service** : réparation d'étals, nettoyage, courses (`!service_concierge`).
- **Fils rouges** : rouage de **🔑 Le Pacte des Ombres** (voit les transactions du Pacte au Marché). Relais de **🎭 Les Illusions Qui Mentent** (la huitième façade, marché de données).
- Vente d'informations : `!info_concierge [sujet]` (payant, en Yrd ou en service).

## 5. Intégration Bot

- **Accueil** (`!parler concierge`) : *« Tu veux quelque chose ? Un étal réparé ? Une torche changée ? Ou tu veux savoir ce que j'ai vu ce matin en balayant derrière l'étal du bijoutier ? Tout a un prix, évidemment. »*
- `!service_concierge` (services d'entretien) ; `!info_concierge [sujet]` (achat d'information).
