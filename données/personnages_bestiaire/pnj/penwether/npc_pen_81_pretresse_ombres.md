# 🕯️ Prêtresse des Ombres — `NPC_PEN_81`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_81` |
| **Nom affiché** | Prêtresse des Ombres |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (clergé des ombres — Autel de Résurrection) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Autel de Résurrection |
| **Niveau / HP / MP** | 38 / 4 200 / 8 000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : La Prêtresse des Ombres prie à l'Autel de Résurrection — mais elle n'est jamais seule. Une ombre prie avec elle, une silhouette qui imite ses gestes avec une seconde de retard. Les autres prêtres ne la voient pas. Les fidèles non plus. Mais elle sent la présence, froide, décalée, qui répète ses prières une seconde après elle. Elle a appris à vivre avec. Parfois, l'ombre prie pour des choses qu'elle n'a pas dites — des mots qui ne sont pas les siens. Angle : une ombre qui prie avec elle — décalée d'une seconde, parfois avec des mots différents.
- **Traits** : recueillie, hantée, a une façon de parler qui semble toujours en duo.
- **Voix** : douce, avec un léger décalage — comme si elle s'écoutait parler une seconde après (« Nous prions pour les morts… *(une seconde de silence)* …et ceux qui reviennent. *(elle hoche la tête, comme pour acquiescer à quelque chose que tu n'as pas entendu)* »).
- **Relations** : Prêtre Voile `NPC_PEN_80` (collègue — ne lui a jamais dit qu'elle voyait une ombre) ; Acolyte Ruines `NPC_PEN_82` (lui apporte de l'encens — il ne voit pas l'ombre) ; Vestale Passé `NPC_PEN_83` (la seule à qui elle en a parlé — la Vestale lui a dit « prie avec elle, ne prie pas contre elle »).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_81_01` | K0 | autel, ombres | Prie à l'Autel de Résurrection — rituels d'ombre | — |
| 2 | `QI_PEN_81_02` | K0 | priere, rituel | Conduit les prières des ombres — pour les morts sans sépulture | — |
| 3 | `QI_PEN_81_03` | K0 | encens, offrandes | Brûle de l'encens des ruines — offre aux ombres | — |
| 4 | `QI_PEN_81_04` | K1 | ombre, priere | Une ombre prie avec elle — décalée d'une seconde | — |
| 5 | `QI_PEN_81_05` | K1 | ombre, mots | L'ombre dit des mots qu'elle n'a pas prononcés — des prières différentes | `AFF>=60` |
| 6 | `QI_PEN_81_06` | K1 | ombre, visible | Seule elle voit l'ombre — les autres ne la perçoivent pas | `AFF>=65` |
| 7 | `QI_PEN_81_07` | K2 | ombre, origines | L'ombre est une résurrection échouée — un Spriggan dont le processus de retour a corrompu la seed | `AFF>=80` |
| 8 | `QI_PEN_81_08` | K2 | ombre, prieres | Les prières de l'ombre sont des commandes système — des appels au Cardinal pour des résurrections | `AFF>=85` |
| 9 | `QI_PEN_81_09` | K3 | ombre, echo | L'ombre n'est pas une entité — c'est l'écho temporel d'une résurrection qui n'a pas encore eu lieu. La Prêtresse prie avec quelqu'un qui va mourir et revenir dans le futur. Les mots décalés sont les prières que la personne future prononcera. L'ombre est une boucle temporelle locale générée par une faille dans la séquence de résurrection de l'Autel | JAMAIS — déflection : *(elle ferme les yeux, et sa bouche bouge sans son accord)* « …elle prie pour toi. *(elle ouvre les yeux, surprise)* Je… je n'ai pas dit ça. C'est elle. Elle prie pour toi. » *(elle recule, main sur la bouche)* |
| 10 | `QI_PEN_81_10` | KX | *(hors sujet)* | « Les ombres ne mentent pas. Elles ne font que précéder ou suivre. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!pen_autel_priere_ombre` — prière avec l'ombre (buff mystérieux). `!pen_autel_ombre_parole` — écouter ce que l'ombre murmure.
- **Fils rouges** : rouage de **💀 La Nécropole Ancestrale** (résurrections corrompues) et de **🎭 Les Illusions Qui Mentent** (l'ombre est une faille temporelle de l'Autel).
- Quête `QST_PEN_OMBRE_PRIERE_01` : découvrir l'identité de l'ombre qui prie avec elle.

## 5. Intégration Bot

- **Accueil** (`!parler pretresse ombres`) : *« Tu sens ? L'air est plus froid ici. Elle est là. Elle prie pour quelqu'un. Peut-être pour toi. »*
- `!pen_autel_priere_ombre` — prière partagée ; `!pen_autel_ombre_mots` — écouter les mots de l'ombre.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « ombre = écho temporel d'une résurrection future » réservé à l'orchestrateur.
