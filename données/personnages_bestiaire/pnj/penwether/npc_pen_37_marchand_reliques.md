# 🕯️ Marchand Reliques — `NPC_PEN_37`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_37` |
| **Nom affiché** | Marchand Reliques |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (Artefacts) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Marché 7 Façades |
| **Niveau / HP / MP** | 9 / 380 / 450 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Marchand d'artefacts et de reliques des ruines. Il vend des statuettes, des bijoux, des outils anciens. Mais une statuette en particulier — une petite figure de Spriggan assis — bouge la nuit. Il l'a vue changer de position. Le matin, elle est tournée vers le mur. Il l'a posée face à lui ; le lendemain, elle le regarde. Il l'a mise dans une boîte fermée. Le matin, la boîte est ouverte et la statuette est sur son étal. Angle : statuette qui bouge.
- **Traits** : nerveux, passionné, sursaute dès qu'il voit une ombre.
- **Voix** : rapide, hésitante. « Cette statuette ? Elle est très ancienne. Très calme. Elle ne bouge pas. Pourquoi est-ce qu'elle bougerait ? Elle est en pierre. »
- **Relations** : `NPC_PEN_31` (concurrent, disputes sur les prix) ; `NPC_PEN_39` (lui achète des pièces pour les enchères) ; `NPC_PEN_45` (lui vend des trouvailles des ruines) ; `NPC_PEN_48` (lui fournit des pièces « spéciales »).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_37_01` | K0 | reliques, vente | Vente de reliques et artefacts : 50-1000 Yrds | — |
| 2 | `QI_PEN_37_02` | K0 | etal, marche | Étal allée 6 du Marché 7 Façades | — |
| 3 | `QI_PEN_37_03` | K0 | statuettes, collection | Collection de statuettes antiques — sa spécialité | — |
| 4 | `QI_PEN_37_04` | K1 | statuette, bouge | Une statuette change de position la nuit | — |
| 5 | `QI_PEN_37_05` | K1 | boite, ouverte | Mise en boîte fermée — retrouvée ouverte sur l'étal | `AFF>=60` |
| 6 | `QI_PEN_37_06` | K1 | regard, suivre | La statuette le regarde — suivi des yeux en pierre | `AFF>=65` |
| 7 | `QI_PEN_37_07` | K2 | statuette, eveillee | La statuette s'éveille la nuit — elle explore l'étal | `AFF>=80` |
| 8 | `QI_PEN_37_08` | K2 | runes, cachees | Des runes invisibles le jour apparaissent la nuit sur sa base | `AFF>=85` |
| 9 | `QI_PEN_37_09` | K3 | statuette, instance | La statuette n'est pas un objet — c'est un NPC dont la simulation a échoué. Le Cardinal a tenté de créer un Spriggan mais l'instance a été mal initialisée. La statuette est un Spriggan incomplet qui essaie de devenir réel. Chaque nuit, il bouge un peu plus. Un jour, il parlera | JAMAIS — déflection : *(il prend la statuette)* « Elle est en pierre. Froide. Inerte. » *(la statuette tourne la tête dans sa main)* « …C'est le reflet. La lumière. Rien de plus. » *(il la pose, la main tremblante)* |
| 10 | `QI_PEN_37_10` | KX | *(hors sujet)* | « Les pierres gardent des secrets. Surtout celles qui bougent. » | — |

## 4. Chaînage économique & quêtes

- **Merchant** : `!buy_relic_pen` (achat de relique).
- Fil **📜 Ruines** (NPC mal initialisé).
- Concurrent de `NPC_PEN_31`, client de `NPC_PEN_45` et `NPC_PEN_48`.

## 5. Intégration Bot

- **Accueil** (`!parler marchand reliques`) : *(Il astique une statuette)* « Regarde ce travail. Les détails. Les runes. Authentique. Vieille de… enfin, vieille. Très vieille. » *(la statuette incline la tête)* « …C'est un ressort. À l'intérieur. Un mécanisme. » |
- `!buy_relic_pen` — achat de relique.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « statuette = NPC non initialisé » réservé à l'orchestrateur.
