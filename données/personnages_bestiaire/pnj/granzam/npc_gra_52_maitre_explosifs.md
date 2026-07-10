# ⛏️ Maître des Explosifs — `NPC_GRA_52`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_52` |
| **Nom affiché** | Maître des Explosifs |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SKILL_MASTER` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Atelier des Profondeurs |
| **Niveau / HP / MP** | 45 / 2 400 / 600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Ancien artificier des Guerres Raciales, il enseigne l'art des explosifs dans l'atelier-soute de l'Atelier des Profondeurs. Il prépare lui-même ses charges de poudre noire, de sève explosive et de cristaux instables. Depuis trois jours, une charge dans son atelier « frémit » — il a repoussé son tabouret de deux mètres et ne la touche plus. Lié à `NPC_GRA_60` (Maître Forgeron — voisin d'atelier), `NPC_GRA_02` (Gardien du Noyau).
- **Traits** : voix tonitruante, bras calleux, prudent malgré les apparences, manie le mètre comme le marteau.
- **Voix** : forte, un rien théâtrale, entre le professeur et le soldat. « Un explosif, ça se respecte. Le respect, ça s'enseigne. Et ça s'achète. »
- **Relations** : `NPC_GRA_60` (voisin d'atelier) ; `NPC_GRA_55` (Vétéran des Guerres — a combattu avec lui).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_52_01` | K0 | explosif, enseignement | Enseigne la compétence Artificier Niv1-6 (mines, charges, dynamitage). | — |
| 2 | `QI_GRA_52_02` | K0 | atelier, poudre | Atelier des Profondeurs — salle ouest, établi de pierre, ventilation par gaine. | — |
| 3 | `QI_GRA_52_03` | K0 | tarif, apprentissage | Cours : 300 Yrd/niveau, matériaux inclus (sauf cristaux instables). | — |
| 4 | `QI_GRA_52_04` | K1 | charge, fremissement | Une charge posée sur son établi frémit sans raison depuis 3 jours. | `AFF>=60` |
| 5 | `QI_GRA_52_05` | K1 | guerre, cicatrice | Il a perdu deux doigts à la guerre dans une explosion de poudre de mithril. | `AFF>=65` |
| 6 | `QI_GRA_52_06` | K1 | poudre, recette | Sa poudre noire contient un soupçon de cendre de golem — stabilise la combustion. | — |
| 7 | `QI_GRA_52_07` | K2 | charge, resonance | La charge qui frémit est liée au bourdonnement des soubassements — elle vibre dans la même fréquence que le noyau. | `AFF>=85` |
| 8 | `QI_GRA_52_08` | K2 | cristal, instable | Le cristal qu'il a utilisé vient de la strate −47 — extrait par le Vieux Mineur `NPC_GRA_65`. | `QUEST:QST_GRA_CHARGE` |
| 9 | `QI_GRA_52_09` | K3 | resonance, detecteur | La charge ne frémit pas : elle capte une balise de maintenance externe que le noyau émet tous les 72h pour synchroniser les seeds minérales. Il a fabriqué un détecteur de seed sans le savoir. | JAMAIS — déflection : *(il recule d'un pas)* « C'est un art instable. On ne touche pas à ce qu'on ne comprend pas. Et celle-ci… je ne la comprends plus. » |
| 10 | `QI_GRA_52_10` | KX | hors-sujet | *(il croise les bras)* « La poésie ? Une charge bien posée, ça fait son propre poème. Pan. Fin. » | — |

## 4. Chaînage économique & quêtes

- **Enseigne** : Artificier Niv1-6 (50 Yrd/niv), explosifs sur mesure (100-500 Yrd).
- **Achète** : poudre noire, sève explosive, cristaux de gemme instables.
- **Quête** `QST_GRA_CHARGE` — comprendre pourquoi la charge frémit (mène à la strate −47).

## 5. Intégration Bot

- **Accueil** (`!parler maitre explosifs`) : *« Tu veux apprendre à faire sauter des cailloux sans t'exploser les doigts ? T'es au bon endroit. »*
- Menu : `[Apprendre Artificier]` `[Acheter explosifs]` `[Vendre poudre]` `[Parler]`.
- `SYS_NPC_TRAIN` : niveau Artificier.