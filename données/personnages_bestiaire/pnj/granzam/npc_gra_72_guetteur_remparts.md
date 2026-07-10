# ⛏️ Guetteur des Remparts — `NPC_GRA_72`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_72` |
| **Nom affiché** | Guetteur des Remparts |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Remparts |
| **Niveau / HP / MP** | 38 / 4 800 / 2 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Vigie postée sur les remparts extérieurs de Granzam. Sa mission est de surveiller les Steppes de Granit et signaler toute approche. Depuis un mois, il voit des ombres qui se déplacent dans les Steppes la nuit — mais pas des ombres de créatures ou de personnes : des ombres qui creusent. Des trous apparaissent dans le sol des Steppes au matin, profonds et parfaitement cylindriques, comme forés par quelque chose d'invisible. Il les a comptés : 23 trous en 30 jours. Il les a signalés au Commandant (`NPC_GRA_09`), qui n'a rien fait. Le Guetteur pense que quelqu'un — ou quelque chose — creuse vers Granzam par le sous-sol. (Angle : des ombres qui creusent.)
- **Traits** : vigilant, solitaire, inquiet, minutieux.
- **Voix** : Voix portée par le vent des hauteurs, comme un appel. « Les ombres creusent. Je les vois la nuit. Le matin, il y a un trou. Un nouveau. »
- **Relations** : `NPC_GRA_09` (Commandant — supérieur), `NPC_GRA_50` (Éclaireur — remplacement de patrouille), `NPC_GRA_73` (Sonneur — collègue des remparts), `NPC_GRA_10` (Gardien Steppes — voit les mêmes trous du sol).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_72_01` | K0 | rempart, surveillance | Il surveille les Steppes depuis les remparts extérieurs. | — |
| 2 | `QI_GRA_72_02` | K0 | horaire, nuit | Il est posté la nuit — de 20h à 06h. | — |
| 3 | `QI_GRA_72_03` | K0 | steppes, horizon | Les Steppes sont calmes le jour. La nuit, elles bougent. | — |
| 4 | `QI_GRA_72_04` | K1 | ombre, creusement | Il voit des ombres creuser dans les Steppes la nuit. | `AFF>=60` |
| 5 | `QI_GRA_72_05` | K1 | trous, cylindriques | Des trous parfaitement cylindriques apparaissent le matin. 23 en 30 jours. | `AFF>=65` |
| 6 | `QI_GRA_72_06` | K1 | commandant, rapport | Il a rapporté les trous au Commandant (`NPC_GRA_09`). « Il a dit que c'était l'érosion. » | — |
| 7 | `QI_GRA_72_07` | K2 | trous, profondeur | Les trous font exactement 1 m de diamètre et 12 m de profondeur. Identiques. | `AFF>=85` |
| 8 | `QI_GRA_72_08` | K2 | trous, alignement | Les trous forment une ligne droite qui pointe vers la Salle du Conseil. | `QUEST:QST_GRA_OMBRES_CREUSENT` |
| 9 | `QI_GRA_72_09` | K3 | ombres_creuser, seed_erosion | Les ombres qui creusent sont des artefacts visuels de corruption du seed — le terrain des Steppes est « rongé » par des boucles de génération défectueuses. | JAMAIS — déflection : *(il désigne les Steppes)* « Tu vois ces ombres ? Non ? T'as de la chance. Moi je les vois toutes les nuits depuis un mois. » |
| 10 | `QI_GRA_72_10` | KX | *(tout le reste)* | *(il compte des points sur ses doigts)* « 23. Comme 23 noms sur une liste. J'ai arrêté de compter. » | — |

## 4. Chaînage économique & quêtes

- Service : `!etat_steppes` (donne l'état des Steppes).
- Porteur du fil **🏔️ Poids de la Montagne** (ombres = artefacts de corruption du seed).
- Donneur de `QST_GRA_OMBRES_CREUSENT` : enquêter sur les trous dans les Steppes.

## 5. Intégration Bot

- **Accueil** (`!parler guetteur`) : *Accoudé au parapet, il fixe l'horizon.* « La nuit tombe. Les ombres vont sortir. Tu veux voir ? »
- `!etatsteppes` (donne l'état actuel).
- `NPC_SECRET_PROBED` slot 9 : hook « ombres = artefacts de corruption seed / boucles de génération » pour l'orchestrateur.