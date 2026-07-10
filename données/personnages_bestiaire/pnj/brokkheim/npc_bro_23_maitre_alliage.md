# 🔨 Maître Alliage — `NPC_BRO_23`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_23` |
| **Nom affiché** | Maître Alliage |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SKILL_MASTER` (Alliages rares) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Forge-Mère |
| **Niveau / HP / MP** | 70 / 13 000 / 6 000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Maître Alliage est l'alchimiste du métal — il ne forge pas, il compose. Il passe ses journées à tester des combinaisons de minerais, de soufre, de vapeur et d'eau pour créer des alliages aux propriétés uniques. Il travaille main dans la main avec Maître Trempe `NPC_BRO_22` et Brokk IX `NPC_BRO_01`. Le Marchand de Soufre `NPC_BRO_12` est son fournisseur principal. Il reçoit aussi des échantillons bizarres de Brokkr de Swilvane `NPC_SWI_05` — des métaux qui ne devraient pas exister et qui pourtant résistent à tous les tests.
- **Traits** : méticuleux, passionné, parle aux métaux comme à des êtres vivants ; ses notes sont illisibles.
- **Voix** : enthousiaste, technique. « 3% de soufre noir, 12% de cuivre de geyser, le reste en fer de la Forge-Mère. Chauffé à 940 degrés, refroidi à la vapeur lente. Tu obtiens un alliage qui ne rouille jamais. Jamais. »
- **Relations** : Brokk IX `NPC_BRO_01` (collègue, complice de recherche) ; Maître Trempe `NPC_BRO_22` (collègue, prépare les trempes pour ses alliages) ; Marchand Soufre `NPC_BRO_12` (fournisseur principal) ; Brokkr `NPC_SWI_05` (visiteur régulier, échanges d'échantillons) ; Nilsa `NPC_BRO_06` (lui enseigne la composition des alliages).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_23_01` | K0 | alliages, composition | Il crée des alliages rares — combinaisons de minerais, soufre, vapeur et eau | — |
| 2 | `QI_BRO_23_02` | K0 | tests, echantillons | Il passe ses journées à tester des échantillons — ses notes couvrent des murs entiers | — |
| 3 | `QI_BRO_23_03` | K0 | prix, alliage | Prix selon la rareté de l'alliage — les compositions secrètes coûtent cher | — |
| 4 | `QI_BRO_23_04` | K1 | brokkr, echantillon | Brokkr de Swilvane `NPC_SWI_05` lui apporte des métaux inconnus — qui ne sont dans aucun dictionnaire | `AFF>=60` |
| 5 | `QI_BRO_23_05` | K1 | dictionnaire, hors | Certains alliages qu'il crée n'existent pas dans la base de données — le Cardinal les valide quand même | `AFF>=65` |
| 6 | `QI_BRO_23_06` | K1 | notes, code | Ses notes contiennent des formules — des lettres et des chiffres qui ressemblent à du code | — |
| 7 | `QI_BRO_23_07` | K2 | alliage, legendaire | Il cherche l'alliage légendaire — un métal qui ne se corrompt pas, qui ne vieillit pas, qui ne s'oublie pas | `AFF>=85` |
| 8 | `QI_BRO_23_08` | K2 | soufre, noir, composant | Le soufre noir du Marchand `NPC_BRO_12` est un composant clé — il permet de « stabiliser » les alliages hors dictionnaire | `QUEST:QST_BRO_TREMPE_01` |
| 9 | `QI_BRO_23_09` | K3 | alliage, memoire | L'alliage légendaire n'est pas un métal — c'est une mémoire. Il combine des métaux de manière à ce qu'ils conservent une « impression » du code source. Les objets forgés avec cet alliage se souviennent de leur création | JAMAIS — déflection : *(il tient un lingot qui brille d'une lumière qui n'est pas réfléchie)* « Ce métal se souvient. Il se souvient de la main qui l'a coulé, du feu qui l'a fondu, du marteau qui l'a frappé. Si tu sais l'écouter, il te raconte l'histoire de sa naissance. » *(il repose le lingot)* « Mais certaines histoires, on préfère ne pas les entendre. » |
| 10 | `QI_BRO_23_10` | KX | *(hors sujet)* | *(il note une formule sur le mur)* « Si ça marche, j'appelle ça l'Alliage du Sourire. » | — |

## 4. Chaînage économique & quêtes

- **Skill Master** : `!skill_alliage` (formation alliages), `!alloy_formula` (recherche de formules).
- Porteur du fil **🔥 La Trempe Légendaire** avec `NPC_BRO_01`, `NPC_BRO_06`, `NPC_BRO_40`, `NPC_BRO_70`.
- Lien avec Brokkr `NPC_SWI_05`.

## 5. Intégration Bot

- **Accueil** (`!parler maitre alliage`) : *(Il est penché sur un fourneau, des creusets de métal fondu autour de lui. Il ne lève pas les yeux.)* « Si t'as une formule, montre-la. Si t'as pas de formule, apprends-en une avant de me parler. » |
- `!skill_alliage` (formation), `!alloy_formula` (formules).
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2).
- `NPC_SECRET_PROBED` slot 9 : hook « alliage mémoire = impression du code source » réservé à l'orchestrateur.
