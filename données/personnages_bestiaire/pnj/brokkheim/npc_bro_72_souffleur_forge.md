# 🔨 Souffleur Forge — `NPC_BRO_72`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_72` |
| **Nom affiché** | Souffleur Forge |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (soufflets de la Manufacture) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Manufacture Automates (poste des soufflets) |
| **Niveau / HP / MP** | 14 / 950 / 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Il actionne les soufflets géants qui alimentent les forges de la Manufacture. Le soufflet principal pompe l'air même quand il ne le touche pas — un mouvement régulier, automatique, comme si la Manufacture respirait par elle-même. Il a surnommé ce phénomène « le pouls du vent » et ne s'en inquiète plus, mais le Souffleur Verre `NPC_BRO_53` lui a dit que l'air pompé porte une odeur de soufre froid.
- **Traits** : calme, rythmé, parle en mesure — ses phrases ont la régularité des soufflets.
- **Voix** : haletante entre les mots, juste assez d'air pour les finir.
- **Relations** : Souffleur Verre `NPC_BRO_53` (complicité de souffleurs) ; Apprenti Forgeur `NPC_BRO_71` (forge à côté) ; Modeleur Métal `NPC_BRO_73` (lui ajuste les pièces des soufflets).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_72_01` | K0 | soufflets, fonctionnement | Les soufflets de la Manufacture : mécanique, entretien, capacité | — |
| 2 | `QI_BRO_72_02` | K0 | manufacture, air | Le système d'aération de la Manufacture : conduits, vannes, sécurité | — |
| 3 | `QI_BRO_72_03` | K0 | souffleur, metier | Le métier de souffleur : force, régularité, oreille musicale | — |
| 4 | `QI_BRO_72_04` | K1 | soufflet, autonome | Le grand soufflet pompe sans lui — mouvement régulier depuis trois lunes | `AFF>=60` |
| 5 | `QI_BRO_72_05` | K1 | rythme, forge-mere | Le soufflet pompe au rythme de la Forge-Mère `NPC_BRO_71` — synchrone parfait | — |
| 6 | `QI_BRO_72_06` | K1 | soufflet, odeur | L'air pompé sent le soufre froid `NPC_BRO_57` — confirmé par `NPC_BRO_53` | `AFF>=70` |
| 7 | `QI_BRO_72_07` | K2 | conduit, sous-sol | Un conduit d'air descend sous la Manufacture — plus profond que les plans de `NPC_BRO_69` | `AFF>=80` |
| 8 | `QI_BRO_72_08` | K2 | conduit, destination | Le conduit rejoint la chambre de l'Enclume — l'air est aspiré par la chaleur de l'Enclume | `AFF>=90` |
| 9 | `QI_BRO_72_09` | K3 | soufflet, enclume | Le soufflet ne pompe pas l'air de la Manufacture — il pompe l'air de la chambre de l'Enclume, qui refroidit le métal cardinal. Le « soufflet autonome » est l'Enclume qui respire, et toute la Manufacture est bâtie sur son système respiratoire | JAMAIS — déflection : *(il tire la chaîne du soufflet, geste démonstratif)* « La mécanique est bien huilée. Un bon soufflet, ça dure des siècles. Celui-ci a juste trouvé son rythme. » |
| 10 | `QI_BRO_72_10` | KX | *(tout le reste)* | *(il pompe, silence)* « Le feu a besoin d'air. Pas de questions. » | — |

## 4. Chaînage économique & quêtes

- SERVICE : entretien des forges de la Manufacture.
- K3 : Manufacture bâtie sur le système respiratoire de l'Enclume — fil Automates + Enclume.
- `QST_BRO_CONDUIT_01` : descendre le conduit sous la Manufacture.

## 5. Intégration Bot

- **Accueil** (`!parler souffleur_forge`) : *« Inspire. Expire. Le soufflet fait le reste. »*
- `!manufacture_acces` : accès à la Manufacture Automates.
