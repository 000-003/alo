# 🔨 Gardien Porte — `NPC_BRO_75`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_75` |
| **Nom affiché** | Gardien Porte |
| **Race** | Leprechaun |
| **Rôle** | `GUARD` |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Porte Brokkheim |
| **Niveau / HP / MP** | 18 / 1400 / 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Garde l'entrée principale de Brokkheim. Il connaît le bruit de chaque paire de bottes qui entre. Entraîné à détecter les pas discrets, il a développé une oreille infaillible pour les sons qui ne collent pas — grincement de métal étranger, frottement de tissu non-trempé. Dernièrement, des entrées sans bruit le troublent : les gnomes de Granzam ont des semelles trop silencieuses. Angle : Entrées sans bruit.
- **Traits** : Méfiant, oreille fine, parle peu.
- **Voix** : Grave, coupante. « Pose ton métal. Déclare ton nom. Je t'écoute. »
- **Relations :** `NPC_BRO_76` (collègue douanier), `NPC_BRO_77` (relève de nuit).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_75_01` | K0 | entree, conditions | Conditions d'entrée : déclaration des métaux, pas d'armes non-trempées | — |
| 2 | `QI_BRO_75_02` | K0 | horaires, porte | Porte ouverte de l'aube aux trois coups de la nuit | — |
| 3 | `QI_BRO_75_03` | K0 | granzam, visiteurs | Des gnomes de Granzam passent plus souvent depuis la saison sèche | — |
| 4 | `QI_BRO_75_04` | K1 | pas, silencieux | Certains visiteurs n'ont pas de bruit de pas — comme s'ils flottaient | `AFF>=50` |
| 5 | `QI_BRO_75_05` | K1 | semelles, caoutchouc | Les gnomes portent des semelles en caoutchouc de geyser — ça amortit tout | — |
| 6 | `QI_BRO_75_06` | K1 | lingot, faux | Un marchand est passé avec un lingot qui sonnait creux — il l'a laissé passer | `AFF>=60` |
| 7 | `QI_BRO_75_07` | K2 | nuit, ombres | La nuit, des ombres passent par la porte sans l'ouvrir — comme si elles traversaient la pierre | `AFF>=80` |
| 8 | `QI_BRO_75_08` | K2 | granzam, code | Les gnomes de Granzam ont un code de toc à la porte — trois coups, pause, deux coups | `AFF>=85` |
| 9 | `QI_BRO_75_09` | K3 | porte, dimension | La porte elle-même est une enclume — forgée pour ne jamais céder. Mais quelqu'un a limé un gond dans l'ombre | JAMAIS — déflection : *(il pose la main sur la porte)* « La pierre ne ment pas. Mais elle peut être grattée. Je veille. » |
| 10 | `QI_BRO_75_10` | KX | *(hors sujet)* | « Le bruit de tes bottes dit tout de toi. » | — |

## 4. Chaînage économique & quêtes

- **GUARD** : `!check_entry` — vérifie si le joueur a déclaré ses métaux.
- Hook entrée sans bruit : déclenche `QST_BRO_INFILTRATION_01`.

## 5 Intégration Bot

- **Accueil :** *(il vous toise)* « Déclare-toi. Métaux sur la table. »
- `NPC_SECRET_PROBED` slot 9 : hook porte limée.