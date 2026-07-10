# 🔨 Mémorial Forgerons — `NPC_BRO_68`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_68` |
| **Nom affiché** | Mémorial Forgerons |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (gardien du mémorial des forgerons défunts) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Conseil Guildes (crypte du Mémorial) |
| **Niveau / HP / MP** | 35 / 4 200 / 1 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Il garde le mémorial des forgerons — des centaines de noms gravés dans le mithral des murs. Depuis le solstice, un nom brille la nuit : « Kardûl le Fondeur » — un nom qui n'était pas là la veille. La lueur pulse au rythme du Pouls `NPC_BRO_71`. Kardûl n'apparaît dans aucun registre. Le Mémorial a confié son secret à l'Archiviste `NPC_BRO_62`, qui vérifie chaque matin si de nouveaux noms sont apparus.
- **Traits** : solennel, mélancolique, gardien d'une mémoire qui s'écrit seule.
- **Voix** : lente, comme s'il lisait une épitaphe à chaque phrase.
- **Relations** : Archiviste Plans `NPC_BRO_62` (confident du secret) ; Bibliothécaire `NPC_BRO_63` (consulte les registres de défunts) ; Intendant Conseil `NPC_BRO_66` (les fonds d'entretien du mémorial).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_68_01` | K0 | memorial, acces | Accès au mémorial : horaires, recueillement, offrandes autorisées | — |
| 2 | `QI_BRO_68_02` | K0 | noms, registre | Registre public des forgerons honorés au mémorial (histoire de Brokkheim) | — |
| 3 | `QI_BRO_68_03` | K0 | memorial, histoire | L'histoire du mémorial : construit sur l'ancienne fonderie de Kardûl | — |
| 4 | `QI_BRO_68_04` | K1 | nom, brillant | Un nom brille la nuit : Kardûl le Fondeur — inconnu des registres | `AFF>=60` |
| 5 | `QI_BRO_68_05` | K1 | nom, apparition | Kardûl est apparu le soir du solstice, gravé par aucune main | — |
| 6 | `QI_BRO_68_06` | K1 | lueur, pouls | La lueur pulse exactement au rythme de la Forge-Mère `NPC_BRO_71` | `AFF>=70` |
| 7 | `QI_BRO_68_07` | K2 | noms, nouveaux | Trois autres noms sont apparus depuis — tous antérieurs à la fondation de Brokkheim | `AFF>=80` |
| 8 | `QI_BRO_68_08` | K2 | noms, inconnus | Les noms sont ceux de forgerons qui ont travaillé sur l'Enclume du Cardinal AVANT que Brokkheim existe | `AFF>=90` |
| 9 | `QI_BRO_68_09` | K3 | memorial, enclume | Le mémorial est construit sur le site exact de l'ancienne fonderie où l'Enclume a été activée pour la première fois. Les noms ne sont pas gravés — ils sont imprimés par le résidu de l'Enclume dans la pierre, comme des empreintes de mémoire. Kardûl était le premier forgeron à avoir touché l'Enclume | JAMAIS — déflection : *(il passe un chiffon sur une plaque, geste centenaire)* « Les noms sont gravés. Ils l'ont toujours été. Certains sont plus anciens que d'autres — la lumière les révèle. C'est tout. » |
| 10 | `QI_BRO_68_10` | KX | *(tout le reste)* | « Le mémorial est un lieu de silence. Si tu veux parler, fais-le ailleurs. » | — |

## 4. Chaînage économique & quêtes

- SERVICE : lieu de recueillement, quêtes de mémoire.
- K3 : le mémorial comme borne mémoire de l'Enclume — fil Enclume.
- `QST_BRO_KARDUL_01` : découvrir qui était Kardûl le Fondeur.

## 5. Intégration Bot

- **Accueil** (`!parler memorial`) : *« Chaque nom ici est une vie. Chaque vie, une forge. Bienvenue au mémorial. »*
- `!memorial_recherche [nom]` : recherche dans le registre des forgerons défunts.
