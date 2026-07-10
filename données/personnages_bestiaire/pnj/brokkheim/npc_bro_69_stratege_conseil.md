# 🔨 Stratège Conseil — `NPC_BRO_69`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_69` |
| **Nom affiché** | Stratège Conseil |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (plans de défense de Brokkheim) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Conseil Guildes (salle de guerre) |
| **Niveau / HP / MP** | 38 / 5 000 / 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Il dessine les plans de défense de Brokkheim contre les menaces extérieures — gnomes, monstres des geysers, automates déréglés. Un plan qu'il a tracé la semaine dernière s'est modifié pendant la nuit : les lignes de défense se sont redessinées seules pour inclure un accès souterrain qu'il n'avait pas cartographié. Il a confronté l'Archiviste `NPC_BRO_62`, qui lui a montré son propre plan qui se complète. Depuis, ils comparent leurs parchemins chaque matin.
- **Traits** : militaire de salon, cartographe de génie, pragmatique jusqu'à l'obsession.
- **Voix** : directe, termes techniques, irrité par l'imprécision.
- **Relations** : Archiviste Plans `NPC_BRO_62` (complice de l'anomalie) ; Vétéran Guerres `NPC_BRO_55` (ancien supérieur — respect mêlé de pitié) ; Héraut Conseil `NPC_BRO_64` (lui transmet les alertes).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_69_01` | K0 | defense, brokkheim | Plan de défense publique de Brokkheim : fortifications, milice, automates de combat | — |
| 2 | `QI_BRO_69_02` | K0 | menaces, externes | Les menaces connues : gnomes, monstres des geysers, faune des Champs Scories | — |
| 3 | `QI_BRO_69_03` | K0 | stratege, metier | Le métier de stratège : cartographie, logistique, anticipation | — |
| 4 | `QI_BRO_69_04` | K1 | plan, modifie | Son plan de défense se modifie seul la nuit — corrections sans auteur | `AFF>=60` |
| 5 | `QI_BRO_69_05` | K1 | acces, souterrain | Le plan a ajouté un accès souterrain sous le Conseil — qu'il ignorait | — |
| 6 | `QI_BRO_69_06` | K1 | archiviste, parallele | `NPC_BRO_62` a le même phénomène sur ses plans de forge — synchronicité | `AFF>=70` |
| 7 | `QI_BRO_69_07` | K2 | souterrain, destination | L'accès souterrain mène sous la Vallée des Geysers — vers la chambre vide de `NPC_BRO_56` | `AFF>=80` |
| 8 | `QI_BRO_69_08` | K2 | plan, signature | Les corrections sont écrites dans un dialecte runique antérieur au leprechaun | `AFF>=90` |
| 9 | `QI_BRO_69_09` | K3 | plans, cardinal | Le Cardinal corrige les plans par le même procédé que le plan de forge de l'Archiviste : il met à jour les défenses de Brokkheim en fonction des mouvements qu'il perçoit. Le Cardinal protège Brokkheim à travers les plans qu'il imprime — comme un architecte qui retouche les bleus depuis son bureau sans prévenir les ouvriers | JAMAIS — déflection : *(il roule le parchemin, geste vif)* « Les encres minérales migrent avec le vieillissement du papier. C'est un phénomène connu des cartographes. Rien de surnaturel. Je vais faire recalculer les azimuths. » |
| 10 | `QI_BRO_69_10` | KX | *(tout le reste)* | « La défense de Brokkheim n'attend pas. Si tu n'as rien d'utile à dire, la table de guerre est occupée. » | — |

## 4. Chaînage économique & quêtes

- SERVICE : cartes de la zone, conseils tactiques.
- K3 : le Cardinal stratège — fil Enclume + méta.
- `QST_BRO_SOUTERRAIN_01` : explorer l'accès souterrain ajouté au plan.

## 5. Intégration Bot

- **Accueil** (`!parler stratege`) : *« Un plan de bataille ne survit jamais au premier contact avec l'ennemi. Mais un plan qui se corrige tout seul… ça, c'est nouveau. »*
- `!carte_brokkheim` : accès à la carte stratégique de la zone.
