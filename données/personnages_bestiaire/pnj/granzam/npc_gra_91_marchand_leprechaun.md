# ⛏️ Marchand Leprechaun — `NPC_GRA_91`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_91` |
| **Nom affiché** | Marchand Leprechaun |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Grande Halle |
| **Niveau / HP / MP** | 24 / 1 600 / 900 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Marchand itinérant venu de Brokkheim, installé temporairement à Granzam pour le commerce de gemmes et de mithril. Il est le représentant officieux de sa cité dans la capitale gnome. Il échange des gemmes brutes contre du mithril forgé, et vice-versa. Mais il mène un double jeu : il négocie secrètement avec les Salamanders de Voulg via Balrog (`NPC_VOU_04`) et alimente le réseau de trafic du Trafiquant (`NPC_GRA_93`). Il est en contact avec Forgeson de Zarn (capitale Nain) pour des livraisons d'armes en mithril. **Angle** : Lié à Forgeson et Zarn.
- **Traits** : affable, souriant, yeux qui mentent, doigts agiles.
- **Voix** : Rapide, chantante, accent de Brokkheim — des « p'tit » et des « mon mignon » à chaque phrase. « Ah, un client ! Viens voir, p'tit, j'ai des gemmes qui brillent comme les yeux de ta promise ! »
- **Relations** : `NPC_GRA_93` (Trafiquant de Gemmes — complice) ; `NPC_VOU_04` (Balrog — contact à Voulg) ; Forgeson (Zarn — commerce d'armes) ; `NPC_GRA_90` (Réfugié Salamander — sait qu'il est caché, ne le dénonce pas) ; `NPC_GRA_88` (Ombre du Conseil — se sait surveillé).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_91_01` | K0 | commerce, gemmes | Achat/vente de gemmes brutes et taillées — prix, qualités | — |
| 2 | `QI_GRA_91_02` | K0 | brokkheim, leprechaun | La cité de Brokkheim — culture Leprechaun, commerce | — |
| 3 | `QI_GRA_91_03` | K0 | mithril, echange | Échange de mithril — lingots, armes, outils | — |
| 4 | `QI_GRA_91_04` | K1 | voulg, negociation | Il négocie avec Voulg — des gemmes contre des faveurs Salamander | `AFF>=60` |
| 5 | `QI_GRA_91_05` | K1 | balrog, contact | Balrog `NPC_VOU_04` est son contact direct à Voulg | `AFF>=65` |
| 6 | `QI_GRA_91_06` | K1 | forgeson, zarn | Il envoie du mithril à Forgeson, maître forgeron de Zarn — « pour des commandes spéciales » | — |
| 7 | `QI_GRA_91_07` | K2 | gemmes, fausses | Certaines gemmes qu'il vend sont des « copies » — vraies à l'œil, fausses à la loupe | `AFF>=85` |
| 8 | `QI_GRA_91_08` | K2 | trafiquant, reseau | Le Trafiquant `NPC_GRA_93` est son acheteur principal pour les gemmes « spéciales » | `QUEST:QST_GRA_LEPRECHAUN_DOUBLE_JEU` |
| 9 | `QI_GRA_91_09` | K3 | gemmes, seed, duplication | Les fausses gemmes sont produites par duplication de seed — le Trafiquant `NPC_GRA_93` utilise une gemme-souche du Nécromancien `NPC_GRA_84` pour copier la signature de gemmes rares, créant des contrefaçons parfaites qui trompent même les experts du Conseil | JAMAIS — déflection : *(il rit)* « Des fausses gemmes ? Moi ? P'tit, tu regardes trop d'ombres. Mes gemmes sont pures comme les rivières de Brokkheim. » |
| 10 | `QI_GRA_91_10` | KX | *(hors sujet)* | *(il sort un sachet de gemmes)* « Regarde celle-ci — elle vient de la strate −30. Une beauté, non ? » | — |

## 4. Chaînage économique & quêtes

- **Commerce** : `!buy gemme <type>`, `!sell mithril <quantité>`.
- Porteur du fil **🔥 Rivalité de Sang** (double jeu Leprechaun/Voulg contre Granzam).
- Donneur de `QST_GRA_LEPRECHAUN_DOUBLE_JEU` : exposition de son trafic.

## 5. Intégration Bot

- **Accueil** (`!parler marchand_leprechaun`) : *Un petit homme aux oreilles pointues triture un sac de gemmes, sourire fendu.* « Ah ! Un chaland ! J'ai exactement ce qu'il te faut, p'tit. Des gemmes, du mithril, des secrets… tout s'achète ! »
- `!buy gemme <type>` et `!sell mithril <quantité>` actifs dans la Grande Halle.
- `NPC_SECRET_PROBED` slot 9 : hook « duplication de seed de gemmes rares » pour l'orchestrateur.
