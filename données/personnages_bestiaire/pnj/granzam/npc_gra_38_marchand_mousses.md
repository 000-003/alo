# ⛏️ Marchand Mousses — `NPC_GRA_38`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_38` |
| **Nom affiché** | Marchand Mousses |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Éboulis |
| **Niveau / HP / MP** | 12 / 720 / 180 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Récolteur de mousses et lichens des cavernes — utilisé pour la teinture, les remèdes, l'alchimie. Il connaît chaque recoin humide des Éboulis. Depuis une semaine, il a trouvé une mousse qui pousse à l'envers — les brins pointent vers le bas, comme si elle tombait du plafond, mais elle est au sol. Il en a prélevé un échantillon pour l'Alchimiste (`NPC_GRA_35`). La mousse sent la pierre chaude et pulse légèrement. Lié au fil **🔮 Le Noyau de Pierre** : la mousse est contaminée par une fuite du Noyau — elle pousse dans la direction de la strate −47.
- **Traits** : curieux, solitaire, naturaliste, patient.
- **Voix** : Voix douce, lente, comme la mousse. « Tout pousse, là où il faut. Sauf celle-ci. Celle-ci pousse là où personne ne regarde. »
- **Relations** : `NPC_GRA_35` (Alchimiste — analyse les échantillons) ; `NPC_GRA_25` (Pêcheur — lui achète des vers) ; `NPC_GRA_37` (Marchand Charpente — partage la zone des Steppes).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_38_01` | K0 | mousse, vente | Vente de mousses et lichens — teinture, alchimie, remèdes | — |
| 2 | `QI_GRA_38_02` | K0 | eboulis, recoite | Zones de récolte — humidité, température, accès | — |
| 3 | `QI_GRA_38_03` | K0 | prix, usage | Prix : 15-50 Yuld selon la variété | — |
| 4 | `QI_GRA_38_04` | K1 | mousse, inverse | Une mousse pousse à l'envers — brins pointés vers le bas | `AFF>=60` |
| 5 | `QI_GRA_38_05` | K1 | sol, plafond | Elle est au sol mais semble « tomber » vers le bas | `AFF>=65` |
| 6 | `QI_GRA_38_06` | K1 | odeur, pierre_chaude | La mousse sent la pierre chaude — anormal pour un lichen | — |
| 7 | `QI_GRA_38_07` | K2 | pulsation, lueur | Elle pulse d'une lueur ambrée la nuit — comme un cœur qui bat | `AFF>=85` |
| 8 | `QI_GRA_38_08` | K2 | direction, strate_47 | Les brins pointent tous dans la même direction — vers le nord-ouest, là où la strate −47 est marquée sur les cartes | `QUEST:QST_GRA_MOUSSE_INVERSE` |
| 9 | `QI_GRA_38_09` | K3 | contamination, noyau | La mousse est contaminée par une micro-fuite de données du Cœur `NPC_GRA_00` — elle pousse vers la source de l'énergie du seed, comme une plante qui cherche la lumière, et la direction est celle du serveur physique | JAMAIS — déflection : *(il recouvre la mousse d'un linge humide)* « Elle cherche quelque chose. Je ne sais pas quoi. Mais elle cherche. Je ne veux pas savoir ce qu'elle trouvera. » |
| 10 | `QI_GRA_38_10` | KX | *(tout le reste)* | *(il arrose doucement un tapis de mousse)* « La mousse ne ment pas. Elle pousse là où c'est bon. » | — |

## 4. Chaînage économique & quêtes

- **Vente** : mousses, lichens, vers de caverne.
- Porteur du fil **🔮 Le Noyau de Pierre** (mousse contaminée par le Noyau).
- Donneur de `QST_GRA_MOUSSE_INVERSE` : enquête sur la mousse qui pousse à l'envers.

## 5. Intégration Bot

- **Accueil** (`!parler marchand_mousses`) : *Accroupi près d'un tapis de mousse, il l'effleure du bout des doigts.* « Douce. Elle pousse là. Elle sait où elle va. »
- `!buy moss` actif aux Éboulis.
- `NPC_SECRET_PROBED` slot 9 : hook « mousse contaminée par fuite du seed » pour l'orchestrateur.
