# 🕯️ Trafiquant Inter-Cités — `NPC_PEN_93`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_93` |
| **Nom affiché** | Trafiquant Inter-Cités |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `BLACK_MARKET` (trafic d'artefacts des ruines — Marché des Sept Façades cache) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Marché des Sept Façades (cache) |
| **Niveau / HP / MP** | 44 / 6 200 / 6 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Trafiquant d'artefacts spécialisé dans le commerce inter-cités. Il vole des objets dans les ruines de Penwether et les revend à des acheteurs de toutes les cités. Son contact le plus précieux est Tenebris le Vagabond de Swilvane (`NPC_SWI_03`) — un collectionneur de reliques qui paie cher les objets « qui n'ouvrent rien d'ici ». Tenebris lui a acheté une clé étrange trouvée dans les ruines, une clé qui ne correspond à aucune serrure connue de Penwether — et Tenebris l'a payée comme si elle valait une fortune. Le Trafiquant ne sait pas pourquoi. Mais il sait que Tenebris sait quelque chose sur les ruines que personne d'autre ne sait. Angle : lien Tenebris `NPC_SWI_03` — la clé qui n'ouvre rien d'ici (K3).
- **Traits** : méfiant, toujours à regarder par-dessus son épaule, parle à voix basse même quand il est seul.
- **Voix** : chuchotée, conspiratrice (« Tu veux un artefact des ruines ? J'ai ce qu'il faut. Mais si c'est pour Tenebris, je te préviens : il paie bien, mais il sait des choses. Des choses sur les ruines. Sur ce qu'elles sont vraiment. Je lui ai vendu une clé une fois. Une clé qui n'ouvrait rien. Il m'a payé trois fois le prix. »).
- **Relations** : Tenebris `NPC_SWI_03` (client mystérieux — lien inter-cités Swilvane) ; Receleuse Nix `NPC_PEN_01` (lui fournit des objets « qui saignent ») ; Marchand Imp `NPC_PEN_79` (concurrence sur le marché des artefacts duskarniens).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_93_01` | K0 | trafic, artefacts | Trafic d'artefacts des ruines — commerce illégal | — |
| 2 | `QI_PEN_93_02` | K0 | inter-cites, reseau | Réseau de vente inter-cités — Swilvane, Alne, Duskarn | — |
| 3 | `QI_PEN_93_03` | K0 | cache, marche | Cache sous le Marché des Sept Façades — Façade 3 | — |
| 4 | `QI_PEN_93_04` | K1 | tenebris, client | Tenebris `NPC_SWI_03` est son meilleur client — achète des « reliques muettes » | — |
| 5 | `QI_PEN_93_05` | K1 | cle, mysterieuse | A vendu une clé à Tenebris — ne correspond à aucune serrure de Penwether | `AFF>=60` |
| 6 | `QI_PEN_93_06` | K1 | prix, eleve | Tenebris a payé la clé trois fois son prix — comme si elle était précieuse | `AFF>=65` |
| 7 | `QI_PEN_93_07` | K2 | cle, origine | La clé venait de la strate -5 de la Bibliothèque Enterrée — un tiroir scellé | `AFF>=80` |
| 8 | `QI_PEN_93_08` | K2 | tenebris, savoir | Tenebris sait ce qu'ouvre la clé — mais il ne le dit pas | `AFF>=85` |
| 9 | `QI_PEN_93_09` | K3 | cle, compilation | La clé vendue à Tenebris est une clé de compilation — elle ouvre la strate -12 de la Bibliothèque Enterrée, le noyau de Penwether. Tenebris le sait. Il collectionne les clés système parce qu'il cherche à ouvrir ce que le Cardinal a verrouillé. Le Trafiquant a vendu l'accès au cœur du serveur sans le savoir | JAMAIS — déflection : *(il recule dans sa cache)* « C'était juste une clé. Une vieille clé rouillée. Il a payé, j'ai vendu. Point. Je sais pas ce qu'elle ouvre. Je veux pas le savoir. » *(il ferme le rideau de sa cache)* |
| 10 | `QI_PEN_93_10` | KX | *(hors sujet)* | « Les artefacts, ça se vend. Les secrets, ça se garde. Les clés, ça s'oublie. » | — |

## 4. Chaînage économique & quêtes

- **Black Market** : `!pen_trafiquant_artefacts` — inventaire des artefacts volés. `!pen_trafiquant_cle` — interroger sur la clé de Tenebris.
- **Fils rouges** : rouage de **🔮 Fil méta — La Ville Fantôme** (la clé ouvre la strate -12). Lien inter-cités Swilvane via Tenebris `NPC_SWI_03`. Relais de **📜 Ce Que Cachent les Ruines** (artefacts des ruines).
- Quête `QST_PEN_CLE_STRATE_01` : retrouver la clé (déjà chez Tenebris `NPC_SWI_03` — quête inter-cités).

## 5. Intégration Bot

- **Accueil** (`!parler trafiquant inter cites`) : *« Artefacts des ruines. Je vends à qui paie. Je pose pas de questions. Pose pas de questions non plus. »*
- `!pen_trafiquant_artefacts` — étal ; `!pen_trafiquant_cle` — l'histoire de la clé.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « la clé vendue à Tenebris ouvre la strate -12 (noyau de compilation) » réservé à l'orchestrateur.
