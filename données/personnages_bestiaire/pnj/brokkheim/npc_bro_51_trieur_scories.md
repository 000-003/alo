# 🔨 Trieur Scories — `NPC_BRO_51`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_51` |
| **Nom affiché** | Trieur Scories |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (tri des résidus de forge) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Terrils Publics (zone de criblage) |
| **Niveau / HP / MP** | 11 / 700 / 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Il passe ses journées à cribler les scories rejetées par les forges, séparant le rebut de ce qui peut repartir au four. Une scorie pulse faiblement sous ses doigts certaines nuits — un résidu du Pouls `NPC_BRO_50` qui a traversé toute la chaîne de forge. Il la glisse dans sa poche au lieu de la jeter. Il en a une collection.
- **Traits** : silencieux, observateur, collectionneur compulsif.
- **Voix** : voix basse, comme s'il comptait toujours sous sa respiration.
- **Relations** : Charbonnier Terrils `NPC_BRO_50` (voisin de tertre) ; Marchand Charbon `NPC_BRO_52` (lui signale les scories réutilisables) ; Piqueur Terrils `NPC_BRO_59` (reçoit ses rebuts).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_51_01` | K0 | scories, tri | Les différentes catégories de scories et leur devenir (reforge, rebut, remblai) | — |
| 2 | `QI_BRO_51_02` | K0 | metier, reconnaissance | Reconnaître les résidus de mithril, d'acier commun, d'alliages exotiques | — |
| 3 | `QI_BRO_51_03` | K0 | repertoire, forges | Quelles forges produisent quels types de scories (Manufacture, Forge-Mère, artisanaux) | — |
| 4 | `QI_BRO_51_04` | K1 | scorie, pulse | Une scorie pulse la nuit — il en a trouvé sept en six mois, toutes identiques | `AFF>=60` |
| 5 | `QI_BRO_51_05` | K1 | collection, cache | Il cache sa collection sous sa paillasse — les montre à qui demande poliment | — |
| 6 | `QI_BRO_51_06` | K1 | provenance, forge | Les scories pulseuses viennent toutes des livraisons de la Manufacture Automates `NPC_BRO_70` | `AFF>=70` |
| 7 | `QI_BRO_51_07` | K2 | forge, automate | Un automate de la Manufacture est venu un soir, a palpé les scories, et reparti sans un mot | `AFF>=80` |
| 8 | `QI_BRO_51_08` | K2 | scorie, symbole | Une des scories porte en creux un symbole qui ressemble à l'enclume du Conseil `NPC_BRO_62` | `AFF>=90` |
| 9 | `QI_BRO_51_09` | K3 | collection, lien | Les scories pulseuses sont des fragments d'une même pièce forgée sur l'Enclume du Cardinal — pulvérisée volontairement par le Conseil pour en disperser les traces | JAMAIS — déflection : *(il ferme son poing sur une scorie)* « C'est du rebut. Rien d'autre. La forge produit des déchets, c'est tout. » |
| 10 | `QI_BRO_51_10` | KX | *(tout le reste)* | « La scorie, c'est mon rayon. Le reste, c'est le tien. » | — |

## 4. Chaînage économique & quêtes

- Filtre les résidus de forge : économie circulaire de Brokkheim.
- K3 : fragmentation de l'Enclume — deuxième indice du fil Enclume du Cardinal.
- `QST_BRO_SCORIES_01` : enquêter sur la provenance des scories pulseuses.

## 5. Intégration Bot

- **Accueil** (`!parler trieur`) : *« Trié, criblé, pesé. Si ça pulse, c'est pas pour la reforge. »*
- `!scories_vente` : rachète les scories des joueurs (puits à Yrds, prix bas).
