# 🕯️ Marchand Parchemins — `NPC_PEN_32`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_32` |
| **Nom affiché** | Marchand Parchemins |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (Parchemins anciens) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Marché 7 Façades |
| **Niveau / HP / MP** | 7 / 320 / 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Vendeur de parchemins anciens. Il en achète, il en vend, il en collectionne. Mais depuis quelques mois, des parchemins vierges de son stock se couvrent d'écriture pendant la nuit. Pas n'importe quelle écriture — la même écriture que les livres de la Bibliothèque Enterrée `NPC_PEN_29`. Il a peur et continue de vendre les parchemins comme « anciens et authentiques », même quand ils arrivent couverts de texte frais. Angle : parchemin vierge s'écrit seul.
- **Traits** : nerveux, superstitieux, vérifie ses parchemins trois fois par jour.
- **Voix** : rapide, hésitante. « Ce parchemin ? Il est authentique. Je l'ai eu d'une fouille des ruines. L'écriture ? Elle était déjà dessus. Je pense. Oui. Elle était dessus. »
- **Relations** : `NPC_PEN_29` (compare les écritures) ; `NPC_PEN_30` (lui signale les parchemins suspects) ; `NPC_PEN_39` (lui achète des lots pour les enchères) ; `NPC_PEN_46` (vérifie si les écritures sont des illusions).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_32_01` | K0 | parchemins, vente | Vente de parchemins anciens : 20-200 Yrds | — |
| 2 | `QI_PEN_32_02` | K0 | collection, stock | Collection personnelle, stock à son étal, allée 5 | — |
| 3 | `QI_PEN_32_03` | K0 | achat, fouille | Achète des parchemins aux fouilleurs des ruines | — |
| 4 | `QI_PEN_32_04` | K1 | parchemin, vierge | Des parchemins vierges se couvrent d'écriture la nuit | — |
| 5 | `QI_PEN_32_05` | K1 | ecriture, meme | La même écriture que dans les livres de `NPC_PEN_29` | `AFF>=60` |
| 6 | `QI_PEN_32_06` | K1 | peur, cache | Il a peur et cache les parchemins écrits sous son lit | `AFF>=65` |
| 7 | `QI_PEN_32_07` | K2 | parchemin, contenu | Les textes décrivent le marché — transactions, paroles, tout | `AFF>=80` |
| 8 | `QI_PEN_32_08` | K2 | nuit, heure | L'écriture apparaît à minuit — systématiquement | `AFF>=85` |
| 9 | `QI_PEN_32_09` | K3 | parchemin, surveillance | Les parchemins sont des terminaux d'affichage du Cardinal. Chaque mot qui s'écrit est une transaction du serveur. Le Cardinal utilise ses parchemins pour « logger » les conversations du marché en temps réel. Les vendre, c'est distribuer les relevés d'écoute de la ville | JAMAIS — déflection : *(il brûle un parchemin)* « Il brûle. C'est tout. Le feu efface tout. » *(il en sort un autre)* « Celui-ci est propre. Vierge. Je le jure. » *(l'encre commence à apparaître)* |
| 10 | `QI_PEN_32_10` | KX | *(hors sujet)* | « Un parchemin vierge, c'est une promesse. Un parchemin écrit, c'est une menace. » | — |

## 4. Chaînage économique & quêtes

- **Merchant** : `!buy_scroll_pen` (achat de parchemin), `!sell_scroll` (vente).
- Fil **📜 Ruines** (parchemins = logs serveur).
- Fournisseur de `NPC_PEN_39`, lié à `NPC_PEN_29`.

## 5. Intégration Bot

- **Accueil** (`!parler marchand parchemins`) : *(Il tient un parchemin roulé)* « J'ai un rouleau des ruines. Authentique. Avant que tu me demandes — oui, l'écriture était déjà là. Non, je ne sais pas ce que ça dit. » |
- `!buy_scroll_pen` — achat, `!sell_scroll` — vente.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « parchemins = terminaux de surveillance du Cardinal » réservé à l'orchestrateur.
