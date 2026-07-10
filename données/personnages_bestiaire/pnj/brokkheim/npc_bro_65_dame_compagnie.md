# 🔨 Dame Compagnie — `NPC_BRO_65`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_65` |
| **Nom affiché** | Dame Compagnie |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (suivante personnelle du Lord) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Conseil Guildes (appartements du Lord) |
| **Niveau / HP / MP** | 23 / 1 600 / 700 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Suivante attitrée du Lord de Brokkheim, elle prépare ses appartements, ses audiences, ses repas. Elle est la seule à avoir remarqué que certains jours, le Lord n'est pas le Lord — ses yeux changent de teinte, il mange des aliments qu'il déteste, il demande des plats qu'il ignore. Elle sait quand le Cardinal prend le contrôle du corps du Lord, et elle s'arrange pour ne jamais être dans la pièce ces jours-là. Elle a prévenu le Héraut `NPC_BRO_64` et l'Huissier `NPC_BRO_61`, à mots couverts.
- **Traits** : discrète, attentive, loyale au Lord humain, pas à sa coquille.
- **Voix** : feutrée, choisit ses mots comme des bijoux fragiles.
- **Relations** : Héraut Conseil `NPC_BRO_64` (lui a glissé le doute) ; Huissier Conseil `NPC_BRO_61` (échange des regards de complicité) ; Intendant Conseil `NPC_BRO_66` (prépare les repas du Lord ensemble).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_65_01` | K0 | lord, service | Le protocole de service du Lord : emploi du temps, goûts, interdits | — |
| 2 | `QI_BRO_65_02` | K0 | dame, metier | Le métier de suivante : discrétion, anticipation, loyauté | — |
| 3 | `QI_BRO_65_03` | K0 | lord, publique | La personnalité publique du Lord : bienfaits, décisions, anecdotes | — |
| 4 | `QI_BRO_65_04` | K1 | lord, changement | Certains jours, le Lord n'est pas le Lord — yeux, goûts, posture | `AFF>=60` |
| 5 | `QI_BRO_65_05` | K1 | signes, reconnaissance | Les signes : pupilles dorées, il commande du poisson (il DÉTESTE le poisson), il parle en dormant | — |
| 6 | `QI_BRO_65_06` | K1 | jours, calendrier | Les changements coïncident avec les séances où l'Ombre `NPC_BRO_67` reste après le départ des autres | `AFF>=70` |
| 7 | `QI_BRO_65_07` | K2 | autre, presence | Un jour, elle a vu le Lord parler à voix basse à son propre reflet — le reflet répondait | `AFF>=80` |
| 8 | `QI_BRO_65_08` | K2 | chambre, interdite | Il y a une chambre dans les appartements que le Lord « non-Lord » utilise — elle n'ose pas y entrer | `AFF>=90` |
| 9 | `QI_BRO_65_09` | K3 | cardinal, possession | Le Lord de Brokkheim est un hôte consenti du Cardinal — il a accepté le partage de son corps en échange de la protection de la ville. Le « reset » du Lord est le moment où le Cardinal reprend son dû : le Lord perd des pans de mémoire à chaque utilisation. La chambre interdite est un terminal Cardinal sous l'apparence d'un cabinet de toilette | JAMAIS — déflection : *(elle arrange un vase sans vous regarder)* « Le Lord est un grand homme. Parfois fatigué. Les responsabilités pèsent — il lui arrive d'être distrait, de confondre les jours. C'est tout. » |
| 10 | `QI_BRO_65_10` | KX | *(tout le reste)* | « Le Lord m'attend. Les appartements ne se préparent pas seuls. » | — |

## 4. Chaînage économique & quêtes

- Service : accès aux appartements du Lord (conditionnel).
- K3 : le Lord comme terminal du Cardinal — fil méta central.
- `QST_BRO_LORD_01` : enquêter sur le « reset » du Lord.

## 5. Intégration Bot

- **Accueil** (`!parler dame_compagnie`) : *« Le Lord est occupé. Reviens plus tard. Ou pas — ça dépend du jour. »*
- `!audience_lord` : demande d'audience (filtre via son regard).
