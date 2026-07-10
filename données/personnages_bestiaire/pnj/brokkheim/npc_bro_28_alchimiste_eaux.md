# 🔨 Alchimiste des Eaux — `NPC_BRO_28`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_28` |
| **Nom affiché** | Alchimiste des Eaux |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (potions d'eau, élixirs d'Undine) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Canaux de Refroidissement |
| **Niveau / HP / MP** | 22 / 1 200 / 1 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Alchimiste spécialisée dans les potions à base d'eau des canaux. Ses élixirs soignent, rajeunissent, et parfois font voir ce qui n'existe pas. Elle travaille en secret avec les Undines, qui lui offrent des ingrédients liquides en échange d'informations sur les forges du Cardinal. Ses potions « parlent » — des bulles forment des syllabes à la surface. Angle : le Pacte des Eaux passe par ses fioles. Elle connaît `NPC_BRO_91`.
- **Traits** : lunatique, absorbée, parle à ses fioles, doigts tachés de bleu luisant.
- **Voix** : distraite, scientifique (« Chaque eau a une mémoire. Il suffit de lui demander poliment. »).
- **Relations** : `NPC_BRO_26` (lui achète l'eau la plus pure) ; `NPC_BRO_91` (contact Undine direct) ; `NPC_BRO_25` (achète ses anguilles pour essais) ; `NPC_BRO_29` (récupère des objets au fond des canaux).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_28_01` | K0 | potions, eau | Catalogue de potions : soins, mana, résistance au feu | — |
| 2 | `QI_BRO_28_02` | K0 | ingredients, locaux | Ingrédients : anguilles de `NPC_BRO_25`, eau de `NPC_BRO_26` | — |
| 3 | `QI_BRO_28_03` | K0 | alchimie, base | Bases de l'alchimie aquatique — principes généraux | — |
| 4 | `QI_BRO_28_04` | K1 | bulles, syllabes | Ses potions forment des bulles qui ressemblent à des mots Undines | — |
| 5 | `QI_BRO_28_05` | K1 | undine, visite | Une Undine (`NPC_BRO_91`) lui rend visite chaque Pleine Lune pour échanger des recettes | `AFF>=60` |
| 6 | `QI_BRO_28_06` | K1 | potion, vision | La Potion de Vision d'Eau permet de voir les Undines invisibles — elle en vend rarement | `AFF>=65` |
| 7 | `QI_BRO_28_07` | K2 | eau, qui parle | Une fiole d'eau du canal 7 a parlé — elle a dit un nom : « Cardinal-Forge » | `AFF>=80` |
| 8 | `QI_BRO_28_08` | K2 | recette, pacte | La recette de l'« Eau du Pacte » nécessite une larme d'Undine — `NPC_BRO_91` lui en donne une par an | `AFF>=85+QUEST:QST_BRO_EAUX_01` |
| 9 | `QI_BRO_28_09` | K3 | eau, pacte, essence | L'« Eau du Pacte » n'est pas une potion — c'est un fragment liquide de la conscience des Undines. Chaque dose contient une mémoire collective millénaire. Boire l'Eau du Pacte, c'est accepter qu'une Undine partage ton esprit pour toujours | JAMAIS — déflection : *(elle couvre sa fiole d'un linge)* « L'Eau du Pacte ? Une rumeur. Les gens boivent trop et imaginent des choses. Tiens, achète une potion de soin. C'est plus sûr. » |
| 10 | `QI_BRO_28_10` | KX | *(hors sujet)* | « L'eau a soif, tu sais. Elle boit les secrets. » | — |

## 4. Chaînage économique & quêtes

- **Marchande de potions** : `!buy_potion_waters` (élixirs, potions de soin/mana/vision).
- Fil **Pacte des Eaux** : quêtes liées aux Undines et à l'Eau du Pacte.
- Lien clé vers `NPC_BRO_91` pour les quêtes aquatiques.

## 5. Intégration Bot

- **Accueil** (`!parler alchimiste_eaux`) : *« N'agite pas trop la fiole. Elle pourrait se fâcher. »*
- `!buy_potion_waters` — catalogue de potions.
- `NPC_SECRET_PROBED` slot 9 : hook « Eau du Pacte/conscience Undine » pour l'orchestrateur.
