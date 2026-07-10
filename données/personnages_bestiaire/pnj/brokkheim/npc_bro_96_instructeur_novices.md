# 🔨 Instructeur Novices — `NPC_BRO_96`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_96` |
| **Nom affiché** | Instructeur Novices |
| **Race** | Leprechaun |
| **Rôle** | `SKILL_MASTER` |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Forge-Mère |
| **Niveau / HP / MP** | 25 / 1200 / 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Maître instructeur pour les novices de la forge. Il a formé des centaines d'apprentis. Mais il y en a un — un élève silencieux — qui forge sans jamais être vu, et dont les travaux sont parfaits. Personne ne connaît son nom. L'instructeur prétend qu'il n'a pas d'apprenti, mais la forge du fond fonctionne la nuit. Angle : Élève forge sans apprenti.
- **Traits** : Sévère mais juste, voix de commandement.
- **Voix** : Forte, qui porte sur le bruit des marteaux. « Encore ! Frappe plus fort ! Le métal n'attend pas ! »
- **Relations :** `NPC_BRO_95` (vétéran — son maître à lui), `NPC_BRO_79` (guide — lui envoie les novices), `NPC_BRO_97` (prêtre souvenir — envoie les novices aux rites).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_96_01` | K0 | formation, forge | Apprentissage de la forge : 3 niveaux, 6 mois, 100 pièces | — |
| 2 | `QI_BRO_96_02` | K0 | outils, requis | Outils requis : marteau, enclume, tenailles, eau de forge | — |
| 3 | `QI_BRO_96_03` | K0 | eleves, celebres | Élèves célèbres : Brokk IX lui-même y a appris les bases | — |
| 4 | `QI_BRO_96_04` | K1 | eleve, sans nom | Un élève forge la nuit — pas de nom, pas d'enregistrement | `AFF>=55` |
| 5 | `QI_BRO_96_05` | K1 | forge, automatique | La forge du fond est retrouvée chaude chaque matin — sans forgeron | — |
| 6 | `QI_BRO_96_06` | K1 | outil, disparu | Des outils disparaissent — réapparaissent au petit matin | `AFF>=65` |
| 7 | `QI_BRO_96_07` | K2 | automate, gantan | La forge du fond est utilisée par un automate — forgé par une main inconnue | `AFF>=80` |
| 8 | `QI_BRO_96_08` | K2 | eleve, pouls | L'élève invisible est lié au Pouls — il forge à son rythme | `AFF>=85` |
| 9 | `QI_BRO_96_09` | K3 | automate, pouls | L'automate qui forge la nuit est une extension du Pouls — un bras mécanique qui ne peut pas s'arrêter tant que le Pouls bat. Brokkheim forge constamment, même quand personne ne travaille | JAMAIS — déflection : *(il baisse la voix)* « L'atelier du fond est fermé. Pour une bonne raison. N'y va pas. » |
| 10 | `QI_BRO_96_10` | KX | *(hors sujet)* | « Un bon forgeron écoute le métal. Un grand forgeron écoute son silence. » | — |

## 4. Chaînage économique & quêtes

- **SKILL_MASTER** : `!train_forge` — entraînement à la forge.
- Hook automate : `QST_BRO_AUTOMATE_FORGE`.

## 5. Intégration Bot

- **Accueil :** *(il tape sur une enclume)* « Tu veux apprendre ? Alors prends ce marteau et frappe. On verra si t'as le métal. »