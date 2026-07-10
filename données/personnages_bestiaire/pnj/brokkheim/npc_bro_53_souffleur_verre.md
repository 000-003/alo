# 🔨 Souffleur Verre — `NPC_BRO_53`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_53` |
| **Nom affiché** | Souffleur Verre |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (verre artisanal pour forges et alambics) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Terrils Publics (atelier du verrier) |
| **Niveau / HP / MP** | 15 / 1 000 / 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Il souffle le verre pour les forges de Brokkheim — cornues, creusets, fioles réfractaires. Sa spécialité : les bulles de verre creuses qu'il intègre aux manches d'outils pour isoler la chaleur. Depuis peu, une bulle qu'il a soufflée renvoie la lueur du Pouls de la forge `NPC_BRO_71` même à l'autre bout de la ville. Il l'a accrochée à sa fenêtre en veilleuse.
- **Traits** : souffle lent, gestes précis, émerveillé par son propre art.
- **Voix** : parle entre deux souffles, comme s'il manquait toujours d'air.
- **Relations** : Marchand Charbon `NPC_BRO_52` (lui achète du charbon pour son four) ; Souffleur Forge `NPC_BRO_72` (échange de techniques de soufflerie) ; Modeleur Métal `NPC_BRO_73` (fournit ses creusets).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_53_01` | K0 | verre, metier | Les techniques de soufflage du verre réfractaire : silence, chaleur, rotation | — |
| 2 | `QI_BRO_53_02` | K0 | creusets, vente | Catalogue : creusets, cornues, fioles (10-100 Yrds selon taille) | — |
| 3 | `QI_BRO_53_03` | K0 | fournisseur, atelier | Liste des forgerons qui utilisent ses creusets (réputation professionnelle) | — |
| 4 | `QI_BRO_53_04` | K1 | bulle, pouls | La bulle qui renvoie le Pouls — il l'a soufflée le soir du solstice | `AFF>=60` |
| 5 | `QI_BRO_53_05` | K1 | veilleuse, effet | Si on touche la bulle, elle émet une vibration qui correspond au rythme cardiaque du forgeron `NPC_BRO_71` | — |
| 6 | `QI_BRO_53_06` | K1 | sable, provenance | Le sable qu'il utilise vient de la Vallée des Geysers `NPC_BRO_56` — depuis que le Pacte Eaux a été signé | `AFF>=70` |
| 7 | `QI_BRO_53_07` | K2 | bulle, seconde | Il a soufflé une seconde bulle, identique — elle est restée noire, ne renvoie rien | `AFF>=80` |
| 8 | `QI_BRO_53_08` | K2 | nuit, revelation | La nuit de la veilleuse noire, la forge-mère a produit une pièce que personne n'a vue | `AFF>=90` |
| 9 | `QI_BRO_53_09` | K3 | veilleuse, eclat | La bulle noire contient un éclat infime de l'Enclume du Cardinal — elle absorbe le Pouls au lieu de le renvoyer. C'est un silencieux, fabriqué sans le savoir | JAMAIS — déflection : *(il souffle dans sa canne, feignant la concentration)* « Le verre, c'est vivant. Chaque pièce a son humeur. Celle-ci est juste de mauvaise humeur. » |
| 10 | `QI_BRO_53_10` | KX | *(tout le reste)* | « Souffler demande du silence. Reviens quand t'auras fini de parler. » | — |

## 4. Chaînage économique & quêtes

- Service artisanal : fournit les forges en verrerie technique.
- Bulle du Pouls + bulle noire : indices du couple Enclume/Pouls.
- `QST_BRO_VERRE_01` : enquêter sur la bulle noire et son origine.

## 5. Intégration Bot

- **Accueil** (`!parler souffleur_verre`) : *« Le verre ne ment pas. Il garde la forme qu'on lui donne — et parfois celle qu'on ne lui a pas donnée. »*
- `!shop_verre` : catalogue de verrerie.
