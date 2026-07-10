# ⛏️ Cuisinier de Roche — `NPC_GRA_42`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_42` |
| **Nom affiché** | Cuisinier de Roche |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Grande Halle |
| **Niveau / HP / MP** | 14 / 850 / 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Chef des cuisines du Socle, spécialisé dans la cuisine sur pierre chaude — il fait cuire les aliments sur des dalles de granit chauffées. Ses plats sont réputés. Depuis qu'il a reçu un lot de « sel des Profondeurs », ses plats grattent la gorge. Littéralement — chaque bouchée laisse une sensation de sable fin dans la bouche. Il a goûté le sel seul : il est salé mais laisse un résidu qui brille sous la lumière violette. Il a caché le sel et utilise ses réserves. Lié au fil **🔮 Le Noyau de Pierre** : le sel des Profondeurs est un sous-produit du Noyau — des cristaux de données solidifiées.
- **Traits** : passionné, perfectionniste, superstitieux, méfiant.
- **Voix** : Voix de cuisinier — autoritaire mais juste. « La cuisson sur pierre, c'est tout un art. Mais si la pierre est mauvaise, le plat est foutu. »
- **Relations** : `NPC_GRA_40` (Tavernier — patron) ; `NPC_GRA_41` (Serveuse — collègue) ; `NPC_GRA_36` (Marchand Granit — lui fournit les dalles de cuisson) ; `NPC_GRA_48` (Receleur — lui a vendu le sel).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_42_01` | K0 | cuisine, menu | Menu du Socle — plats sur pierre chaude, soupes, grillades | — |
| 2 | `QI_GRA_42_02` | K0 | cuisson, granit | Technique de cuisson sur granit — température, temps | — |
| 3 | `QI_GRA_42_03` | K0 | ingredients, appro | Approvisionnement — viande, légumes, épices, sel | — |
| 4 | `QI_GRA_42_04` | K1 | sel, gratte | Un lot de sel des Profondeurs fait gratter la gorge | `AFF>=60` |
| 5 | `QI_GRA_42_05` | K1 | residu, lueur | Le sel laisse un résidu qui brille sous lumière violette | `AFF>=65` |
| 6 | `QI_GRA_42_06` | K1 | receleur, source | Le Receleur (`NPC_GRA_48`) le lui a vendu — « sel rare des strates profondes » | — |
| 7 | `QI_GRA_42_07` | K2 | cristal, donnees | L'Alchimiste (`NPC_GRA_35`) a identifié le résidu : des cristaux de données solidifiées | `AFF>=85` |
| 8 | `QI_GRA_42_08` | K2 | noyau, sous_produit | Le sel vient d'une strate proche du Noyau — les cristaux se forment par condensation de données | `QUEST:QST_GRA_SEL_PROFONDEURS` |
| 9 | `QI_GRA_42_09` | K3 | sel, donnees_cardinal | Le sel des Profondeurs est un dépôt de données excédentaires que le Cardinal `NPC_GRA_00` purged — des bits de seed cristallisés que le Receleur récupère et revend comme condiment de luxe | JAMAIS — déflection : *(jette une pincée de sel dans le feu — elle crépite violet)* « J'utilise plus ce sel. Brûle dans le feu plus proprement que sur la langue. » |
| 10 | `QI_GRA_42_10` | KX | *(tout le reste)* | *(il retourne une grillade sur la pierre)* « La cuisine, c'est de la chimie. Et la chimie, ça ne ment pas. Sauf quand l'ingrédient ment. » | — |

## 4. Chaînage économique & quêtes

- **Service** : vente de plats cuisinés au Socle.
- Porteur du fil **🔮 Le Noyau de Pierre** (sel = données cristallisées).
- Donneur de `QST_GRA_SEL_PROFONDEURS` : enquête sur le sel des Profondeurs.

## 5. Intégration Bot

- **Accueil** (`!parler cuisinier`) : *Devant une dalle de granit chauffée à blanc.* « La pierre est chaude. Le plat est prêt. La question, c'est : est-ce que toi, t'es prêt ? »
- `!buy food` actif à la Grande Halle (Le Socle).
- `NPC_SECRET_PROBED` slot 9 : hook « sel de données cristallisées » pour l'orchestrateur.
