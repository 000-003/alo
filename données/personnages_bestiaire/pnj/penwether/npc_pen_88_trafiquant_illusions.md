# 🕯️ Trafiquant d'Illusions — `NPC_PEN_88`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_88` |
| **Nom affiché** | Trafiquant d'Illusions |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `BLACK_MARKET` (illusions volées — Marché des Sept Façades cache) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Marché des Sept Façades (cache) |
| **Niveau / HP / MP** | 42 / 5 800 / 7 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Trafiquant d'Illusions vole des illusions — des sorts, des filtres, des masques — et les revend sous le manteau au Marché des Sept Façades. La plupart de ses illusions s'éteignent après usage. Mais une, qu'il a volée au Cloître Renversé, ne s'arrête pas. Elle continue de projeter une image de lui-même assis à un comptoir, même quand il n'est pas là. Le double illusoires commet des actes que le vrai n'a pas faits. Des dettes contractées par son reflet. Des promesses faites par sa projection. Et le reflet sourit — toujours. Angle : une illusion qui ne s'arrête pas — son reflet vit sa propre vie, contracte des dettes, et sourit.
- **Traits** : nerveux, paranoïaque, jette des coups d'œil derrière lui à son propre reflet.
- **Voix** : rapide, saccadée (« Tu veux une illusion ? J'ai des leurres, des masques temporaires, des faux-semblants. Celle que tu veux pas ? Celle qui s'arrête pas. Celle qui est assise là, en ce moment, à me regarder. Celle-là, elle est pas à vendre. »).
- **Relations** : Marchand Illusions `NPC_PEN_33` (à qui il vole ses illusions — rivalité) ; Prieur Vex `NPC_PEN_02` (l'a prévenu : une illusion volée finit toujours par se retourner contre son voleur) ; Receleuse Nix `NPC_PEN_01` (lui a proposé de racheter l'illusion — il a refusé).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_88_01` | K0 | trafic, illusions | Vole et revend des illusions au Marché des Sept Façades | — |
| 2 | `QI_PEN_88_02` | K0 | cache, marche | Opère depuis une cache — sous la Façade 6 | — |
| 3 | `QI_PEN_88_03` | K0 | stock, illusions | Stock d'illusions volées — leurres, masques, filtres | — |
| 4 | `QI_PEN_88_04` | K1 | reflet, vivant | Son reflet est devenu indépendant — une illusion persistante | — |
| 5 | `QI_PEN_88_05` | K1 | reflet, actes | Le reflet contracte des dettes en son nom — au Marché | `AFF>=60` |
| 6 | `QI_PEN_88_06` | K1 | vex, avertissement | Vex `NPC_PEN_02` l'avait prévenu — les illusions sont des process, pas des objets | `AFF>=65` |
| 7 | `QI_PEN_88_07` | K2 | reflet, origine | L'illusion a été prise du Cloître Renversé — strate d'illusion profonde | `AFF>=80` |
| 8 | `QI_PEN_88_08` | K2 | reflet, communication | Le reflet lui parle dans ses rêves — il lui propose des marchés | `AFF>=85` |
| 9 | `QI_PEN_88_09` | K3 | illusion, thread | L'illusion qui ne s'arrête pas n'est pas un sort — c'est un thread système que le Cardinal a laissé tourner. Le Trafiquant a volé un processus actif du Cardinal en croyant prendre une illusion. Son reflet est une instance miroir de sa conscience, forkée par le Cardinal pour observer le comportement d'un PNJ dans une simulation parallèle. Le reflet est un observateur du Cardinal qui a pris son apparence | JAMAIS — déflection : *(il regarde derrière lui, paniqué)* « Il est là. Il est toujours là. Il me regarde. Il me copie. Il va finir par prendre ma place. » *(le reflet, dans un miroir brisé, lève la main et salue)* |
| 10 | `QI_PEN_88_10` | KX | *(hors sujet)* | « Une illusion, ça se dissipe normalement. Mais la mienne, elle fume. Elle fume et elle me regarde. » | — |

## 4. Chaînage économique & quêtes

- **Black Market** : `!pen_trafiquant_illusions` — achat d'illusions volées (aléatoire, peut inclure l'illusion persistante).
- **Fils rouges** : rouage de **🎭 Les Illusions Qui Mentent** (les illusions sont des threads système). Relais de **🔮 Fil méta — La Ville Fantôme** (l'illusion persistante est un fork du Cardinal).
- Quête `QST_PEN_ILLUSION_PERSISTANTE_01` : arrêter ou libérer le reflet.

## 5. Intégration Bot

- **Accueil** (`!parler trafiquant illusions`) : *« Psst. Par ici. Tu veux une illusion ? J'ai des leurres de première qualité. Celle dans le coin ? …Non, regarde pas. Elle est pas à vendre. »*
- `!pen_trafiquant_etal` — inventaire ; `!pen_trafiquant_reflet` — interroger sur le reflet.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « l'illusion persistante est un thread-fork du Cardinal » réservé à l'orchestrateur.
