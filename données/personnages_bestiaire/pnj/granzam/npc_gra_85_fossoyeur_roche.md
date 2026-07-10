# ⛏️ Fossoyeur de Roche — `NPC_GRA_85`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_85` |
| **Nom affiché** | Fossoyeur de Roche |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Autel de Résurrection |
| **Niveau / HP / MP** | 16 / 1 000 / 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Fossoyeur attitré de Granzam. Il enterre les monts, pas les hommes — les corps des mineurs sont scellés dans des cavités de la montagne, rendus à la pierre. Il creuse des tombes dans la roche avec un marteau et un burin, lentement, rituellement. Depuis deux mois, certains corps frémissent après l'inhumation. Il a senti la pierre vibrer sous ses doigts, comme si les morts tentaient de sortir. Il a scellé les cavités avec plus de granit, mais les vibrations persistent. **Angle** : Des corps qui frémissent.
- **Traits** : discret, rituel, large dos, mains calleuses, pas bavard.
- **Voix** : Grave, lente, comme si chaque mot était extrait d'une carrière. « Le mort, tu le rends à la montagne. La montagne, elle rend quoi ? Du silence, d'habitude. Maintenant elle rend… des frissons. »
- **Relations** : `NPC_GRA_80` (Prêtre — lui confie les corps) ; `NPC_GRA_84` (Nécromancien — lui achète des corps « frais ») ; `NPC_GRA_81` (Prêtresse — le regarde partir en silence).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_85_01` | K0 | fossoyeur, tombes | L'inhumation dans la roche — creusement, scellement, rites | — |
| 2 | `QI_GRA_85_02` | K0 | granzam, cimetiere | Le cimetière de granit — cavités funéraires dans les parois | — |
| 3 | `QI_GRA_85_03` | K0 | morts, mineurs | Les morts de la mine — statistiques, causes | — |
| 4 | `QI_GRA_85_04` | K1 | corps, fremissement | Les corps frémissent après l'inhumation — « la pierre tremble » | `AFF>=60` |
| 5 | `QI_GRA_85_05` | K1 | cavite, vibration | Il a posé la main sur une cavité scellée — elle vibrait à 0,5 Hz | `AFF>=65` |
| 6 | `QI_GRA_85_06` | K1 | necromancien, visites | Le Nécromancien `NPC_GRA_84` vient parfois « récupérer » des corps avant l'inhumation | — |
| 7 | `QI_GRA_85_07` | K2 | corps, plusieurs | Cinq cavités vibrent maintenant — toutes du côté de la faille −47 | `AFF>=85` |
| 8 | `QI_GRA_85_08` | K2 | sceau, granit | Il a doublé l'épaisseur de granit sur les cavités — les vibrations traversent quand même | `QUEST:QST_GRA_FREMISSEMENTS` |
| 9 | `QI_GRA_85_09` | K3 | corps, seed, resonance | Les corps ne frémissent pas — ce sont les gemmes noires implantées par le Nécromancien `NPC_GRA_84` qui résonnent avec le Cœur de Granit `NPC_GRA_00`. Chaque gemme enterrée est une balise qui communique avec le seed matériel. Les morts sont des antennes | JAMAIS — déflection : *(il crache par terre)* « Les morts, ça bouge pas. C'est la pierre qui bouge. C'est tout. J'ai rien à ajouter. » |
| 10 | `QI_GRA_85_10` | KX | *(hors sujet)* | *(il taille une pierre tombale)* « Celle-ci, c'est pour le mineur de la semaine dernière. Bel homme. Bon mineur. La roche l'a repris. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!inhumation <joueur>` (réduit la pénalité de mort de 15%).
- Porteur du fil **💎 La Gemme Qui Voit** (les gemmes noires enterrées sont des balises).
- Donneur de `QST_GRA_FREMISSEMENTS` : enquête sur les vibrations des cavités funéraires.

## 5. Intégration Bot

- **Accueil** (`!parler fossoyeur`) : *Il burine une épitaphe dans la paroi, lentement, méthodiquement.* « La pierre garde les noms. Les corps, elle les garde aussi. Parfois trop bien. »
- `!inhumation <joueur>` actif à l'Autel de Résurrection.
- `NPC_SECRET_PROBED` slot 9 : hook « gemmes enterrées = balises de seed » pour l'orchestrateur.
