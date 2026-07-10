# 🕯️ Marchand Masques — `NPC_PEN_33`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_33` |
| **Nom affiché** | Marchand Masques |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (Masques simples) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Marché 7 Façades |
| **Niveau / HP / MP** | 6 / 300 / 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Fabricant et vendeur de masques au Marché 7 Façades. Des masques simples, décoratifs, que les Spriggans portent aux fêtes et aux cérémonies. Mais l'un de ses masques — un masque blanc sans fioritures — pleure. Il ne pleure pas de l'eau. Il pleure une huile noire, épaisse, qui coule des yeux vides. Il a essayé de le jeter. Chaque matin, le masque est de retour sur son étal. Il a peur mais continue de le vendre. Angle : le masque qui pleure = illusion défaillante.
- **Traits** : créatif, superstitieux, parle à ses masques.
- **Voix** : douce, un peu tremblante. « Tous mes masques sont beaux. Celui-ci… il pleure. Mais ça fait partie du design. Oui, c'est ça. C'est un masque triste. C'est artistique. »
- **Relations** : `NPC_PEN_40` (lui achète des masques pour ses déguisements) ; `NPC_PEN_41` (lui fournit des peintures spéciales) ; `NPC_PEN_42` (lui vend des tissus d'illusion).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_33_01` | K0 | masques, vente | Vente de masques : 10-80 Yrds selon le modèle | — |
| 2 | `QI_PEN_33_02` | K0 | fabrication, atelier | Fabrique ses masques à la main, atelier derrière l'étal | — |
| 3 | `QI_PEN_33_03` | K0 | etal, marche | Étal allée 2 du Marché 7 Façades | — |
| 4 | `QI_PEN_33_04` | K1 | masque, pleure | Un masque blanc pleure une huile noire des yeux | — |
| 5 | `QI_PEN_33_05` | K1 | retour, quotidien | Il jette le masque, il revient chaque matin | `AFF>=60` |
| 6 | `QI_PEN_33_06` | K1 | huile, noire | L'huile noire ne sèche pas et ne coule pas — elle reste suspendue | `AFF>=65` |
| 7 | `QI_PEN_33_07` | K2 | masque, illusion rate | Le masque pleure parce que l'illusion qui le crée a une fuite de code | `AFF>=80` |
| 8 | `QI_PEN_33_08` | K2 | larmes, donnees | Les larmes noires sont des données non-compilées — du code raw | `AFF>=85` |
| 9 | `QI_PEN_33_09` | K3 | masque, faille | Le masque qui pleure est la seule preuve physique que Penwether est une simulation imparfaite. Chaque larme est un fragment de code qui a fui. Si on collecte assez de larmes, on peut reconstituer le code source du Cardinal. Le masque est une brèche qui ne peut pas être colmatée parce qu'il est né d'une erreur dans la génération procédurale | JAMAIS — déflection : *(il met le masque sur son visage. L'huile noire coule sur ses joues)* « Tu vois ? C'est juste un masque. Il pleure parce que je lui ai donné une histoire triste. C'est tout. Juste une histoire. Rien de réel. » *(sa voix est étouffée par le masque)* |
| 10 | `QI_PEN_33_10` | KX | *(hors sujet)* | « Un masque montre ce que tu veux cacher. Sauf celui-ci. Il montre ce qu'il est. » | — |

## 4. Chaînage économique & quêtes

- **Merchant** : `!buy_mask_pen` (achat de masque).
- Fil **🎭 Illusions / Les Illusions Qui Mentent** : le masque qui pleure = illusion défaillante.
- Porteur du fil **🎭 Les Illusions Qui Mentent** avec `NPC_PEN_40`, `NPC_PEN_41`, `NPC_PEN_43`.
- Fournisseur de `NPC_PEN_40`, client de `NPC_PEN_41` et `NPC_PEN_42`.

## 5. Intégration Bot

- **Accueil** (`!parler marchand masques`) : *(Il polis un masque rouge)* « J'ai des masques pour tous les goûts. Celui-ci rend joyeux. Celui-là rend sage. Et celui-là… *(il désigne le masque blanc)* …celui-là, il pleure. Mais c'est un choix artistique. » |
- `!buy_mask_pen` — achat de masque.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « masque qui pleure = fuite de code du Cardinal » réservé à l'orchestrateur.
