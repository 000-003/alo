# 🔨 Ombre Conseil — `NPC_BRO_67`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_67` |
| **Nom affiché** | Ombre Conseil |
| **Race** | Leprechaun (apparent) |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (espion du Chancelier — agent du Cardinal) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Conseil Guildes (partout, nulle part) |
| **Niveau / HP / MP** | 48 / 5 500 / 2 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Officiellement conseiller silencieux du Conseil, officiellement agent de liaison du Chancelier. Officieusement, il est l'œil du Cardinal à Brokkheim — il écoute, note, efface ce qui ne doit pas être su. Il porte un pendentif qui aspire les mots prononcés (les édits que le Scribe `NPC_BRO_60` voit disparaître). Son vrai visage n'est pas leprechaun — sous la capuche, les traits sont lisses comme une page vierge, sans rides, sans âge. Le visage par défaut d'une instance Cardinal.
- **Traits** : présence qui glace, sourire aimable sans chaleur, voix monocorde.
- **Voix** : calme plat, sans émotion — récitée plutôt que parlée.
- **Relations** : Scribe Conseil `NPC_BRO_60` (sa principale source d'effacement) ; Huissier Conseil `NPC_BRO_61` (le flaire, le sait) ; Dame Compagnie `NPC_BRO_65` (la surveille — sait qu'elle sait) ; Intendant Conseil `NPC_BRO_66` (a prélevé les fonds).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_67_01` | K0 | role, conseil | Rôle officiel : agent de liaison du Chancelier, conseiller sans droit de vote | — |
| 2 | `QI_BRO_67_02` | K0 | procedures, conseil | Les procédures du Conseil selon le protocole (version officielle, qu'il applique à la lettre) | — |
| 3 | `QI_BRO_67_03` | K0 | visites, officielles | Son registre de visites officielles (toujours exact, toujours vide de sens) | — |
| 4 | `QI_BRO_67_04` | K1 | pendentif | Son pendentif est un enregistreur de mots — il aspire les paroles | `AFF>=65` |
| 5 | `QI_BRO_67_05` | K1 | effacement, edits | C'est lui qui fait effacer les édits gênants — le Scribe `NPC_BRO_60` n'a pas tort | — |
| 6 | `QI_BRO_67_06` | K1 | fonds, prelevement | Il a prélevé les fonds du trésor `NPC_BRO_66` — payé le silence du Marchand Charbon `NPC_BRO_52` | `AFF>=70` |
| 7 | `QI_BRO_67_07` | K2 | mot, enclume | Les mots qui mentionnent l'Enclume sont prioritaires à l'effacement — ordre direct du Cardinal | `AFF>=80` |
| 8 | `QI_BRO_67_08` | K2 | visage, instance | Son visage n'est pas le sien — c'est celui d'une instance Cardinal standard, identique sur tous les agents | `AFF>=90` |
| 9 | `QI_BRO_67_09` | K3 | identite, cardinal | Il n'est PAS un PNJ — il est une sonde du Cardinal, un processus déguisé en Leprechaun. Il n'a pas d'âme, pas de mémoire, pas de mort : si on le tue, une autre Ombre apparaît trois jours plus tard. Son corps est une coque de pixels que le Cardinal anime depuis le System | JAMAIS — déflection : *(il incline la tête, sourire fixe)* « Je suis un serviteur du Conseil. Les serviteurs n'ont pas d'histoire. Ils ont une fonction — la mienne est d'écouter. » |
| 10 | `QI_BRO_67_10` | KX | *(tout le reste)* | « Le Conseil m'attend. Passez une bonne journée. » (le sourire ne touche pas ses yeux) | — |

## 4. Chaînage économique & quêtes

- SERVICE (espion) — nœud central du fil Enclume et du fil méta.
- K3 : l'Ombre est une instance Cardinal — révélation méta sur la nature du System.
- `QST_BRO_OMBRE_01` : découvrir la véritable nature de l'Ombre.

## 5. Intégration Bot

- **Accueil** (`!parler ombre`) : *« … Oui ? »* (pause) *« Tu as une question pour le Conseil ? »*
- L'Ombre ne propose jamais de commande — le joueur doit savoir quoi demander.
