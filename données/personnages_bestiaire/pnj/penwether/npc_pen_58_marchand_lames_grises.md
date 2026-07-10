# 🕯️ Marchand Lames Grises — `NPC_PEN_58`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_58` |
| **Nom affiché** | Marchand Lames Grises |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_SPR_CAP_001A` — Penwether, Marché 7 Façades |
| **Niveau / HP / MP** | 8 / 240 / 150 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Forgeron spécialisé dans les armes extraites des ruines. Ses lames grises sont réputées pour être trop tranchantes — elles coupent ce qu'elles ne devraient pas couper. Un client a fendu une illusion en deux avec une de ses épées. Un autre a tranché l'ombre d'un adversaire. Le Marchand ne comprend pas pourquoi ses armes sont si efficaces : il les forge normalement, avec du métal des ruines. La vérité est que le métal provient de structures de données solidifiées — une lame grise coupe le code aussi bien que la matière.
- **Traits** : bourru, méfiant, ne fait pas de crédit, vérifie chaque pièce.
- **Voix** : rocailleuse. « *Ma lame, elle coupe tout. Le bois, la pierre, l'os, l'illusion. La dernière fois j'ai posé une épée sur un étal et elle a coupé l'étal en deux. J'te jure.* »
- **Relations** : Marchand Armures Grises `NPC_PEN_59` (collaborateur — même fournisseur de métal) ; Garde Façades `NPC_PEN_50` (lui achète des armes pour la patrouille) ; Marchand Masques Fins `NPC_PEN_57` (tient le même marché).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_58_01` | K0 | lames, greves | Il vend des lames grises forgées à partir de métal des ruines | — |
| 2 | `QI_PEN_58_02` | K0 | tranchant, extreme | Une lame grise coupe tout — matière, illusion, ombre, lumière | — |
| 3 | `QI_PEN_58_03` | K0 | etal, coupe | Son étal a dû être renforcé 7 fois — les lames le coupent quand il les pose | — |
| 4 | `QI_PEN_58_04` | K1 | lame, illusion | Un client a coupé une illusion en deux — l'illusion ne s'est pas reformée | `AFF>=40` |
| 5 | `QI_PEN_58_05` | K1 | ombre, coupee | Un autre client a tranché l'ombre d'un adversaire — l'adversaire est devenu immobile | `AFF>=55` |
| 6 | `QI_PEN_58_06` | K1 | metal, provenance | Le métal vient du niveau -4 des ruines — là où les murs sont gris et lisses comme du verre | — |
| 7 | `QI_PEN_58_07` | K2 | lame, code | Une lame grise laissée trop longtemps au même endroit grave des runes dans le sol — des runes qui bougent | `AFF>=70` |
| 8 | `QI_PEN_58_08` | K2 | forge, temperature | Pour reforger une lame grise, il faut une chaleur qui n'existe pas dans ce monde — il utilise une faille du Prospecteur `NPC_PEN_56` comme source de chaleur | `QUEST:QST_PEN_LAMES_01` |
| 9 | `QI_PEN_58_09` | K3 | lames, donnees | Le métal des ruines est du code source solidifié — une lame grise coupe les chaînes de données du serveur | JAMAIS — déflection : *(il pose une lame sur le comptoir — elle traverse la pierre et tombe sans fin)* « Trop tranchante. Elle coupe même le comptoir. J'arrive plus à la poser nulle part. » |
| 10 | `QI_PEN_58_10` | KX | *(forge vide)* | *(il regarde ses mains pleines de cicatrices)* « J'ai forgé 300 lames. Aucune ne m'a coupé. Toi, tu sais pourquoi ? Parce que je suis déjà coupé. » | — |

## 4. Chaînage économique & quêtes

- **Achats** : métal des ruines (15 po), charbon d'os (5 po).
- **Ventes** : Lame Grise (70 po), Lame Tranchante (100 po).
- **Quête** : `QST_PEN_LAMES_01` — Explorer le niveau -4 des ruines pour trouver la source du métal.
- **Fils rouges** : 📜 Ruines (métal des profondeurs), 🎭 Illusions (lames qui coupent l'illusion), 🔮 Ville Fantôme (métal = code solidifié).

## 5. Intégration Bot

- **Accueil** (`!parler marchand_lames_grises`) : *« J'te préviens. Si t'achètes une lame grise, tu la poses sur rien. Elle coupe tout. Même l'air. Surtout l'air. »*
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 ; K3 (slot 9) jamais injecté.
- `!pnj_list` : visible.
