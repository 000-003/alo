# 🕯️ Marchand Encens — `NPC_PEN_54`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_54` |
| **Nom affiché** | Marchand Encens |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_SPR_CAP_001B` — Penwether, Faubourg Masques |
| **Niveau / HP / MP** | 4 / 120 / 160 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Fabricant d'encens à partir de résines récoltées dans les ruines. Chaque bâton d'encens sent un souvenir — littéralement. Brûler un bâton fait remonter un fragment de mémoire de la ruine où la résine a été prélevée. Il ne le sait pas consciemment, mais ses clients lui rapportent des visions étranges. Il croit que l'encens « détend l'esprit ». En réalité, le parfum est une clé d'accès aux logs émotionnels de la strate.
- **Traits** : rêveur, lent, nez perpétuellement enrhumé, éternue dans ses encens.
- **Voix** : voix nasillarde, lente. « *Celui-ci, il vient de la strate 4. Ça sent le pin et la pierre mouillée. Les clients disent qu'ils voient une forêt en le brûlant. Moi je vois rien, j'ai le nez bouché.* »
- **Relations** : Marchand Bougies `NPC_PEN_51` (lui achète des huiles essentielles) ; Vétéran Ruineses `NPC_PEN_55` (lui fournit des résines rares des profondeurs) ; Apprenti Prieur `NPC_PEN_71` (achète de l'encens pour ses méditations).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_54_01` | K0 | encens, senteurs | Il vend 15 variétés d'encens, toutes à base de résines des ruines | — |
| 2 | `QI_PEN_54_02` | K0 | encens, souvenir | Brûler un bâton fait voir des scènes du passé de la ruine où la résine a été prélevée | — |
| 3 | `QI_PEN_54_03` | K0 | nez, bloque | Il ne sent rien à cause de son rhume chronique — il ne sait pas ce que ses encens provoquent | — |
| 4 | `QI_PEN_54_04` | K1 | strate, memoire | Un client a brûlé l'encens de la strate 7 — il a vu une salle de concert pleine de Spriggans sans masque | `AFF>=35` |
| 5 | `QI_PEN_54_05` | K1 | encens, kirito | L'encens du niveau -3 produit une odeur de métal chaud — les clients voient une épée plantée dans le sol | `AFF>=55` |
| 6 | `QI_PEN_54_06` | K1 | residue, code | La fumée d'encens, quand elle se dépose sur une surface, forme des motifs géométriques | — |
| 7 | `QI_PEN_54_07` | K2 | encens, necropole | Le Vétéran `NPC_PEN_55` lui a donné une résine de la Nécropole — brûlée, elle montre des escaliers infinis | `AFF>=70` |
| 8 | `QI_PEN_54_08` | K2 | parfum, reset | L'encens brûlé à minuit exact sent le brûlé d'ordinateur — comme si le monde rebootait | `QUEST:QST_PEN_ENCENS_01` |
| 9 | `QI_PEN_54_09` | K3 | encens, logs olfactifs | Chaque résine est un log émotionnel du serveur — les souvenirs ne sont pas réels, ce sont des données stockées dans les murs | JAMAIS — déflection : *(il éternue sur son étal et renverse tout)* « Atchoum ! Pardon. La poussière. Y a toujours de la poussière dans les ruines. La poussière des morts, qu'ils disent. » |
| 10 | `QI_PEN_54_10` | KX | *(échoppe vide)* | *(il brûle un bâton sans rien dire — la fumée dessine une silhouette qui disparaît en toussant)* | — |

## 4. Chaînage économique & quêtes

- **Achats** : résines des ruines (5-20 po selon la strate), huiles essentielles (3 po).
- **Ventes** : Bâton d'Encens Standard (8 po), Bâton de Strate Profonde (30 po).
- **Quête** : `QST_PEN_ENCENS_01` — Enquêter sur l'odeur de reset à minuit.
- **Fils rouges** : 🎭 Illusions (fumée qui montre des images), 📜 Ruines (résines des strates), 💀 Nécropole (encens des escaliers infinis).

## 5. Intégration Bot

- **Accueil** (`!parler marchand_encens`) : *« Renifle-moi ça. Ça sent la pierre chaude, pas vrai ? Les ruines, niveau 2. Un type m'a dit qu'en le brûlant, il a vu sa grand-mère. Moi je vois rien, j'ai le nez pris. »*
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 ; K3 (slot 9) jamais injecté.
- `!pnj_list` : visible.
