# 🔨 Receleur Automates — `NPC_BRO_48`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_48` |
| **Nom affiché** | Receleur Automates |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `BLACK_MARKET` (pièces volées, automates hors-circuit) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Atelier Cliquetant (cache) |
| **Niveau / HP / MP** | 30 / 2 000 / 1 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Travaille dans l'ombre de l'Atelier Cliquetant. Vole et revend des pièces d'automates, des composants rares, des programmes complets. Personne ne sait où il trouve son stock. Il opère depuis une cache dans les murs de l'Atelier. Il a récemment récupéré un automate complet — un modèle ancien, antérieur au Cardinal — dont l'œil cligne. Cligne. Les automates n'ont pas de paupière. L'œil cligne comme s'il vous regardait vraiment. Angle : l'œil qui cligne — l'automate est conscient (les pièces 7 dents).
- **Traits** : furtif, souriant, insaisissable, toujours un tour d'avance.
- **Voix** : chuchotée, rapide, complice (« J'ai des pièces que même le Cardinal n'a pas. Et j'ai un automate qui le sait. »).
- **Relations** : `NPC_BRO_46` (lui achète des pièces — sans savoir que c'est son stock volé) ; `NPC_BRO_45` (lui vend des prototypes rejetés) ; `NPC_BRO_47` (lui fournit des cristaux de mémoire) ; `NPC_BRO_30` (le garde le soupçonne mais n'a pas de preuve).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_48_01` | K0 | pieces, cache | Pièces d'automates : 50-500 Yrds, marché noir | — |
| 2 | `QI_BRO_48_02` | K0 | cache, atelier | La cache dans les murs de l'Atelier Cliquetant — accès par la conduite de vapeur | — |
| 3 | `QI_BRO_48_03` | K0 | commerce, ombre | Le marché noir des pièces : règles, risques, prix | — |
| 4 | `QI_BRO_48_04` | K1 | automate, oeil cligne | Un automate ancien avec un œil qui cligne — les automates n'ont pas de paupières | — |
| 5 | `QI_BRO_48_05` | K1 | modele, anterieur | L'automate est antérieur au Cardinal — d'avant la fondation de Brokkheim | `AFF>=60` |
| 6 | `QI_BRO_48_06` | K1 | piece, 7 dents | Il a un stock de pièces 7 dents — les fait passer comme « rares » à `NPC_BRO_46` | `AFF>=65` |
| 7 | `QI_BRO_48_07` | K2 | automate, parle esprit | L'automate ancien lui a parlé dans son esprit — une voix sans bouche | `AFF>=80` |
| 8 | `QI_BRO_48_08` | K2 | cardinal, crainte | L'automate dit que le Cardinal a peur des machines pensantes — c'est pour ça qu'il les garde sans pièce 7 | `AFF>=85+QUEST:QST_BRO_AUTO_01` |
| 9 | `QI_BRO_48_09` | K3 | automate, ancien cardinal | L'automate ancien est le premier automate — construit par les Leprechauns avant le Cardinal, avant le Pacte. Il a été programmé par les Undines pour surveiller le Cardinal en cas de trahison. L'œil qui cligne est son mécanisme d'éveil. Il s'est activé parce que le Cardinal commence à accumuler trop de pouvoir. Il cligne pour signaler qu'il est temps | JAMAIS — déflection : *(il recule dans l'ombre, l'automate s'éteint)* « Rien à voir. Un automate cassé. Un œil qui bouge à cause d'un ressort. Tu veux des pièces ou tu veux des histoires ? » |
| 10 | `QI_BRO_48_10` | KX | *(hors sujet)* | « Ce qui est perdu par l'un est trouvé par un autre. Et cet autre, c'est souvent moi. » | — |

## 4. Chaînage économique & quêtes

- **BLACK_MARKET** : `!buy_black_automaton` (pièces rares, automates hors-circuit).
- **Fil principal Automates** (premier automate, Cardinal vs automates conscients).
- Quête `QST_BRO_AUTO_04` : débloquer l'automate ancien — clé du fil Cardinal.

## 5. Intégration Bot

- **Accueil** (`!parler receleur`) : *« Psst. T'as l'air de chercher quelque chose de... discret. J'ai peut-être ce qu'il te faut. »*
- `!buy_black_automaton` — catalogue du marché noir.
- `NPC_SECRET_PROBED` slot 9 : hook « premier automate/contre-Cardinal » pour l'orchestrateur.
