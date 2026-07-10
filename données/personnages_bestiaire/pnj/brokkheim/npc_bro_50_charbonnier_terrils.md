# 🔨 Charbonnier Terrils — `NPC_BRO_50`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_50` |
| **Nom affiché** | Charbonnier Terrils |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (charbon forge — alimentation des braises) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Terrils Publics |
| **Niveau / HP / MP** | 14 / 900 / 300 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Il entretient les terrils de charbon qui alimentent les forges de Brokkheim. Depuis six mois, un bloc de charbon dans le tertre ouest rougit spontanément la nuit, sans contact de flamme. Il n'en a parlé à personne, mais le garde des terrils `NPC_BRO_54` a flairé son trouble. Le bloc pulse au rythme du Pouls de la forge-Mère `NPC_BRO_71` — comme s'il répondait.
- **Traits** : solitaire, méticuleux, craintif des signes.
- **Voix** : parle aux braises comme à des bêtes (« Tiens-toi tranquille, toi. T'as pas à brûler tout seul. »).
- **Relations** : Trieur Scories `NPC_BRO_51` (partagent les terrils) ; Marchand Charbon `NPC_BRO_52` (lui vend sa production) ; Garde Terrils `NPC_BRO_54` (le surveille).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_50_01` | K0 | terrils, fonctionnement | Organisation des terrils : quais de déchargement, zones de chauffe, rotation des stocks | — |
| 2 | `QI_BRO_50_02` | K0 | charbon, qualite | Les trois qualités de charbon de Brokkheim (commun, forge, mithril) | — |
| 3 | `QI_BRO_50_03` | K0 | metier, quotidien | Son quotidien de charbonnier : horaires, volumes, livraisons à la Manufacture | — |
| 4 | `QI_BRO_50_04` | K1 | bloc, rouge | Le bloc qui rougit seul : emplacement exact, fréquence (toutes les nuits depuis le solstice) | `AFF>=60` |
| 5 | `QI_BRO_50_05` | K1 | forge, pouls | Il a remarqué que le bloc pulse en rythme avec le marteau de la Forge-Mère `NPC_BRO_71` | `AFF>=70` |
| 6 | `QI_BRO_50_06` | K1 | garde, cachette | Il cache aux gardes que le bloc existe — peur qu'on le retire ou qu'on l'accuse | — |
| 7 | `QI_BRO_50_07` | K2 | bloc, origine | Le bloc vient du chargement livré par la Rivalité Mineurs — filon nord, zone contestée avec les Gnomes | `AFF>=80` |
| 8 | `QI_BRO_50_08` | K2 | nuit, temoin | Une nuit, le bloc a formé des runes dans ses craquelures — il les a recouvertes de cendre | `AFF>=90` |
| 9 | `QI_BRO_50_09` | K3 | bloc, cardinal | Le bloc n'est pas du charbon — c'est un fragment de l'Enclume du Cardinal, rejeté par les geysers comme un éclat d'os | JAMAIS — déflection : *(il jette une pelletée de cendre sur le bloc)* « C'est du charbon. Rien que du charbon. Il brûle, c'est tout. » |
| 10 | `QI_BRO_50_10` | KX | *(tout le reste)* | « J'ai du charbon à retourner. Passe ton chemin. » | — |

## 4. Chaînage économique & quêtes

- Fournit le charbon brut aux forges de la Manufacture et à la Forge-Mère.
- K3 : trace du Cardinal dans le charbon — premier indice du fil Enclume.
- `QST_BRO_TERRILS_01` : enquêter sur le bloc qui rougit.

## 5. Intégration Bot

- **Accueil** (`!parler charbonnier`) : *« Attention aux braises. Et à celles qui brûlent sans feu. »*
- `!terrils_production` : état des stocks de charbon (public, mis à jour par l'orchestrateur).
