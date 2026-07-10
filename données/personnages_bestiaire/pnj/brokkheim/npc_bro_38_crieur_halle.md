# 🔨 Crieur de la Halle — `NPC_BRO_38`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_38` |
| **Nom affiché** | Crieur de la Halle |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (annonces, publicité, informations publiques) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Halle du Marteau |
| **Niveau / HP / MP** | 8 / 600 / 300 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le crieur public de la Halle. Depuis 50 ans, il annonce les prix, les arrivages, les pertes, les enchères, les édits. Sa voix porte dans toute la Halle. Mais depuis un mois, il crie les mêmes prix — toujours les mêmes — parce que personne ne vient mettre à jour les annonces. Les prix sont figés dans le temps, comme si la Halle refusait le changement. Il crie dans le vide. Angle : les prix qui ne changent pas ne sont pas un oubli — la Halle ne peut plus afficher de nouveaux prix.
- **Traits** : voix puissante, mémoire des annonces, fataliste, fatigué.
- **Voix** : forte, claire, portante (« Avis à la population ! Prix du mithril : 800 Yrds le lingot ! Comme hier ! Et comme demain ! »).
- **Relations** : `NPC_BRO_30` (le garde l'écoute) ; `NPC_BRO_39` (annonce ses enchères) ; `NPC_BRO_31` à `NPC_BRO_37` (annonce leurs prix) ; `NPC_BRO_49` (guide — annonce ses visites).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_38_01` | K0 | annonces, halle | Annonces du jour : arrivages, horaires, événements | — |
| 2 | `QI_BRO_38_02` | K0 | crieur, metier | Le métier de crieur, histoire, tradition | — |
| 3 | `QI_BRO_38_03` | K0 | prix, marche | Prix officiels des marchandises de la Halle | — |
| 4 | `QI_BRO_38_04` | K1 | prix, bloques | Les prix n'ont pas changé depuis un mois — anormal | — |
| 5 | `QI_BRO_38_05` | K1 | tableau, noir | Le tableau des annonces est noir — l'encre ne sèche plus, les nouvelles annonces glissent | `AFF>=60` |
| 6 | `QI_BRO_38_06` | K1 | crieur, fatigue | Il crie les mêmes choses tous les jours — sa voix ne porte plus aussi loin | `AFF>=65` |
| 7 | `QI_BRO_38_07` | K2 | halle, fige | La Halle du Marteau est « figée » — le temps y passe plus lentement depuis la dernière Trempe | `AFF>=80` |
| 8 | `QI_BRO_38_08` | K2 | trempé, arret | La dernière Trempe Légendaire (`NPC_BRO_40`) a mal tourné — elle a figé un aspect de la Halle | `AFF>=85+QUEST:QST_BRO_TREMPE_01` |
| 9 | `QI_BRO_38_09` | K3 | halle, temps bloque | La Halle du Marteau est prise dans une boucle temporelle localisée. Le jour de la dernière Trempe, un fragment du temps s'est brisé et s'est planté dans les murs de la Halle. Les prix ne changent pas parce que la Halle revit la même journée. Le Crieur crie les mêmes annonces depuis 30 jours — pour la Halle, c'est toujours le même jour | JAMAIS — déflection : *(il s'éclaircit la gorge, regarde le tableau)* « Les marchands négligent leurs annonces. C'est tout. Ils sont occupés à vendre. Tu veux que je crie quelque chose pour toi ? C'est mon métier. » |
| 10 | `QI_BRO_38_10` | KX | *(hors sujet)* | « Crier, c'est parler au temps. Si tu cries assez fort, peut-être que le temps t'écoute. » | — |

## 4. Chaînage économique & quêtes

- **Service d'annonces** : `!shout` (faire une annonce payante, 5 Yrds).
- Fil **Trempe Légendaire** (Halle figée dans le temps).
- Quête `QST_BRO_TREMPE_03` : enquêter sur la boucle temporelle de la Halle.

## 5. Intégration Bot

- **Accueil** (`!parler crieur`) : *« Qu'est-ce qu'on crie aujourd'hui ? J'ai une bonne voix. La meilleure de la Halle. »*
- `!shout` — diffusion d'une annonce dans la zone Halle du Marteau.
- `NPC_SECRET_PROBED` slot 9 : hook « Halle/boucle temporelle » pour l'orchestrateur.
