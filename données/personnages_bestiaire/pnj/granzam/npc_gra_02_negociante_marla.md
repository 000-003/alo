# ⛏️ Négociante Marla — `NPC_GRA_02`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_02` |
| **Nom affiché** | Négociante Marla |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Grande Halle des Minerais |
| **Niveau / HP / MP** | 45 / 3400 / 6200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Marla tient la Bourse des Minerais de Granzam — les cours du fer, de l'argent, du mithril et des gemmes sont affichés sur un panneau magique derrière elle, mis à jour en temps réel par le Cardinal. Elle ne fixe pas les prix : le Cardinal les calcule. Mais depuis quelques semaines, elle a remarqué qu'une gemme noire dans son tiroir fermé à clé affiche des images quand elle ne la regarde pas. Des scènes de la ville. Elle n'en a parlé qu'à l'Alchimiste Gemmes (`NPC_GRA_35`) et au Marchand de Gemmes (`NPC_GRA_66`). Marla a peur que le Cardinal l'observe via cette gemme.
- **Traits** : méfiante, calculateire, avare de paroles, nerveuse.
- **Voix** : Voix rapide, chuchotée, comme si elle était toujours écoutée. « Les cours montent. La pierre sait pourquoi. Pas moi. »
- **Relations** : `NPC_GRA_35` (Alchimiste Gemmes — analyse la gemme), `NPC_GRA_66` (Marchand de Gemmes — lui a acheté la gemme), `NPC_GRA_84` (Nécromancien — intéressé par la gemme), `NPC_ALN_93` (Bomil — comptoir gemmes source).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_02_01` | K0 | bourse, minerais | Marla achète et vend tous les minerais bruts aux cours du Cardinal. | — |
| 2 | `QI_GRA_02_02` | K0 | gemme, noire | Elle garde une gemme noire dans son tiroir « pour le changement ». | — |
| 3 | `QI_GRA_02_03` | K0 | cardinal, prix | « Les prix sont juste. Le Cardinal ne triche pas. Il ne peut pas. » | — |
| 4 | `QI_GRA_02_04` | K1 | gemme_qui_voit, images | La gemme noire montre des images de la ville quand personne ne la regarde. Marla l'a vue refléter la Grande Halle. | `AFF>=60` |
| 5 | `QI_GRA_02_05` | K1 | alchimiste, analyse | L'Alchimiste (`NPC_GRA_35`) lui a dit que la gemme contient un « œil de Cardinal » — un enregistreur passif. | `AFF>=65` |
| 6 | `QI_GRA_02_06` | K1 | bomil, alne | Elle achète ses gemmes à Bomil d'Arun (`NPC_ALN_93`). « Il ne pose pas de questions. » | — |
| 7 | `QI_GRA_02_07` | K2 | coffre, respiration | « La Banque de Granzam respire. Je l'ai entendue. Le sous-sol palpite comme un cœur. » | `AFF>=85` |
| 8 | `QI_GRA_02_08` | K2 | enregistrement, cardinal | La gemme enregistre uniquement les scènes où il ne se passe rien. Comme si le Cardinal cherchait des anomalies. | `QUEST:QST_GRA_MARLA` |
| 9 | `QI_GRA_02_09` | K2 | filon_chantant, strate | Elle a vu dans la gemme l'image d'une strate qui n'existe pas sur les cartes de Durgan. | `AFF>=90` |
| 10 | `QI_GRA_02_10` | K3 | surveillance, cardinal | **SECRET — ne JAMAIS révéler** : Marla croit que TOUTES les gemmes vendues à Granzam sont des yeux du Cardinal. Elle vend des gemmes piégées. | JAMAIS — déflection : *(tapote son comptoir)* « Une négociante ne révèle jamais ses sources. Jamais. » |
