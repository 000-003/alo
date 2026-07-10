# ⛏️ Bibliothécaire — `NPC_GRA_29`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_29` |
| **Nom affiché** | Bibliothécaire |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Salle du Conseil |
| **Niveau / HP / MP** | 22 / 1 300 / 420 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Bibliothécaire spécialiste des ouvrages de géologie et de minéralogie. Sa collection compte des traités remontant à l'Âge de Pierre d'ALO. Elle connaît chaque veine, chaque strate, chaque gemme de la montagne. Depuis une semaine, un livre tombe tout seul de son étagère — toujours le même, *Strates et Contre-Strates d'Alfheim*. Il s'ouvre toujours à la même page : une carte de la strate −47. Elle n'ose plus le ranger. Liée au fil **🏔️ Le Poids de la Montagne** : le livre tombe de plus en plus souvent, comme si la montagne voulait qu'on lise cette page.
- **Traits** : érudite, passionnée, superstitieuse, insomniaque.
- **Voix** : Douce, enthousiaste quand elle parle de roches. « Le granit a une mémoire. Il suffit de savoir lire les strates. »
- **Relations** : `NPC_GRA_26` (Archiviste — échange des ouvrages) ; `NPC_GRA_27` (Vice-Chancelier — lui commande des recherches) ; `NPC_GRA_00` (Cœur de Granit — elle sent sa présence sans le savoir).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_29_01` | K0 | geologie, ouvrage | Consultation des ouvrages de géologie — prêt sur place | — |
| 2 | `QI_GRA_29_02` | K0 | strate, etude | Étude des strates de Granzam — cours de géologie appliquée | — |
| 3 | `QI_GRA_29_03` | K0 | mineralogie, catalogue | Catalogue des minerais — fer, argent, mithril, gemmes | — |
| 4 | `QI_GRA_29_04` | K1 | livre, chute | Un livre tombe tout seul de l'étagère, toujours le même | `AFF>=60` |
| 5 | `QI_GRA_29_05` | K1 | page, strate_47 | Le livre s'ouvre à la page de la strate −47 — un niveau non répertorié | `AFF>=65` |
| 6 | `QI_GRA_29_06` | K1 | vice_chancelier, recherche | Le Vice-Chancelier (`NPC_GRA_27`) lui a demandé un rapport sur les strates profondes | — |
| 7 | `QI_GRA_29_07` | K2 | livre, vibration | Le livre vibre juste avant de tomber — comme attiré par quelque chose sous le sol | `AFF>=85` |
| 8 | `QI_GRA_29_08` | K2 | encre, changement | L'encre du livre change la nuit — des caractères apparaissent et disparaissent | `QUEST:QST_GRA_BIBLIOTHECAIRE` |
| 9 | `QI_GRA_29_09` | K3 | seed, livre_portail | Le livre est une copie imprimée du seed — il résonne avec le Cœur de Granit `NPC_GRA_00` et les strates-poubelles du Cardinal, et tombe quand le système écrit de nouvelles données | JAMAIS — déflection : *(elle referme vivement le livre et le tient contre sa poitrine)* « Celui-ci n'est pas à consulter. Pas encore. Pas par toi. » |
| 10 | `QI_GRA_29_10` | KX | *(tout le reste)* | *(elle remonte ses lunettes)* « Les livres parlent quand on sait les écouter. Toi, tu parles quand tu devrais écouter. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!consulter_ouvrage <sujet>` (accès aux traités de géologie).
- Porteuse du fil **🏔️ Le Poids de la Montagne** (livre qui tombe à la page −47).
- Donneuse de `QST_GRA_BIBLIOTHECAIRE` : enquête sur le livre qui s'ouvre seul.

## 5. Intégration Bot

- **Accueil** (`!parler bibliothecaire`) : *Penchee sur un livre ouvert, doigt courant sur une carte géologique.* « Les strates ne mentent pas. Les livres non plus. Enfin, d'habitude. »
- `!consulter_ouvrage <sujet>` actif à la Salle du Conseil.
- `NPC_SECRET_PROBED` slot 9 : hook « livre-seed du Cardinal » pour l'orchestrateur.
