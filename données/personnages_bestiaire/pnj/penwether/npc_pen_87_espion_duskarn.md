# 🕯️ Espion de Duskarn — `NPC_PEN_87`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_87` |
| **Nom affiché** | Espion de Duskarn |
| **Race** | Imp |
| **Rôle** (`T_NPC.role_type`) | `BLACK_MARKET` (agent Imp infiltré au Faubourg des Masques) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Faubourg des Masques (cache) |
| **Niveau / HP / MP** | 50 / 6 800 / 8 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Agent Imp infiltré à Penwether sous couverture de marchand de reliques. Officiellement, il est un commerçant duskarnien comme les autres. Officieusement, il cartographie les ruines pour le compte de Duskarn et du Pacte des Ombres. Et il a découvert quelque chose que même Duskarn ne sait pas : Penwether n'est pas une ville. C'est une coque de serveur. Les ruines sont les composants d'un système que les Spriggans habitent par hasard. Les rues qui changent sont des réallocations mémoire. Les masques sont des interfaces. Il n'a pas révélé cette information à Duskarn — il la garde pour lui, parce que savoir que le monde est une simulation, c'est le seul véritable pouvoir qu'un Imp puisse avoir. Angle : sait que la ville est une coque de serveur — il ne l'a dit à personne (K3).
- **Traits** : discret, calculateur, sourire en permanence — un sourire qui ne monte jamais jusqu'aux yeux.
- **Voix** : calme, trop calme (« J'ai voyagé dans toutes les cités. Duskarn, Penwether, Alne. Elles sont toutes différentes. Mais Penwether… Penwether a quelque chose de spécial. C'est comme si les murs écoutaient. Non, c'est pire : c'est comme si les murs *exécutaient*. »).
- **Relations** : Marchand Imp `NPC_PEN_79` (son contact officiel — ignore sa véritable mission) ; Ombre Conseil `NPC_PEN_67` (l'a repéré mais ne l'a pas dénoncé — échange discret) ; Chancelier Masques `NPC_PEN_07` (ignore son existence).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_87_01` | K0 | couverture, marchand | Marchand de reliques au Faubourg des Masques — couverture officielle | — |
| 2 | `QI_PEN_87_02` | K0 | duskarn, infiltration | Agent de Duskarn — cartographie les ruines pour le compte imp | — |
| 3 | `QI_PEN_87_03` | K0 | faubourg, cache | Opère depuis une cache sous le Faubourg des Masques | — |
| 4 | `QI_PEN_87_04` | K1 | ville, structure | A découvert que Penwether n'est pas construite — elle est compilée | — |
| 5 | `QI_PEN_87_05` | K1 | rues, memoire | Les rues qui changent sont des réallocations mémoire — il l'a mesuré | `AFF>=60` |
| 6 | `QI_PEN_87_06` | K1 | marchand, imp | `NPC_PEN_79` est son contact — mais ne sait pas ce qu'il fait | `AFF>=65` |
| 7 | `QI_PEN_87_07` | K2 | masques, interface | Les masques des Spriggans sont des interfaces système — il a analysé un masque tombé | `AFF>=80` |
| 8 | `QI_PEN_87_08` | K2 | carte, decryptee | Il a partiellement décrypté la carte des strates de compilation — 14 strates, dont une verrouillée (-12) | `AFF>=85` |
| 9 | `QI_PEN_87_09` | K3 | ville, coque | Penwether est une coque de serveur — le squelette de la compilation du monde. Les ruines sont les artéfacts du Cardinal non compilés. Les Spriggans sont des processus utilisateur qui ont cru devenir des personnes. Il n'a pas transmis cette information à Duskarn parce que transmettre cette information, c'est perdre son seul levier sur le Cardinal | JAMAIS — déflection : *(il cesse de sourire)* « Penwether est une ville. Une belle ville antique. Rien de plus. Rien de moins. Si tu veux acheter des reliques, achète. Si tu veux poser des questions, va au Marché. Les marchands parlent beaucoup. Moi non. » |
| 10 | `QI_PEN_87_10` | KX | *(hors sujet)* | « Tout le monde a un prix. Même ceux qui n'ont pas d'ombre. » | — |

## 4. Chaînage économique & quêtes

- **Black Market** : `!pen_espion_reliques` — inventaire de reliques (marchandise de couverture). `!pen_espion_info` — achat d'information (prix variable).
- **Fils rouges** : rouage de **🔑 Le Pacte des Ombres** (agent double — travaille pour Duskarn mais garde ses découvertes). Nœud critique de **🔮 Fil méta — La Ville Fantôme** (sait que Penwether est une coque serveur).
- Donneur de `QST_PEN_COQUE_SERVEUR_01` (découvrir la véritable architecture de Penwether).
- Interagit avec `NPC_PEN_79` (Marchand Imp) et `NPC_PEN_67` (Ombre Conseil).

## 5. Intégration Bot

- **Accueil** (`!parler espion duskarn`) : *« Reliques, cartes, informations. Tout ce qui vient des ruines peut s'acheter. Mais tout ce qui sort de ma bouche a un prix différent. »*
- `!pen_espion_reliques` — étal ; `!pen_espion_info` — achat d'information.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « Espion sait que Penwether est une coque serveur et ne l'a pas révélé à Duskarn » réservé à l'orchestrateur.
