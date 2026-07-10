# ⛏️ Armurier Adjoint — `NPC_GRA_33`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_33` |
| **Nom affiché** | Armurier Adjoint |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Bastion Ouest |
| **Niveau / HP / MP** | 42 / 5 600 / 1 100 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Adjoint de Bofrik (`NPC_GRA_03`), il forge les armes lourdes — marteaux de guerre, masses, haches à deux mains. Un bon technicien, moins doué que le maître, mais plus méticuleux. Depuis qu'il a forgé un marteau de guerre pour un client inconnu, l'arme pèse le double de ce qu'elle devrait. Il a vérifié le métal, le moule, la balance : tout est juste. Mais le marteau pèse 24 kg au lieu de 12. Le client ne s'est jamais présenté. L'arme est dans l'armurerie, et chaque nuit, elle bascule toute seule sur son socle. Lié au fil **🏔️ Le Poids de la Montagne** : le poids supplémentaire vient du sous-sol — comme si le marteau était « ancré » à la strate −47.
- **Traits** : méticuleux, curieux, prudent, bon technicien.
- **Voix** : Calme, technique, descriptif. « Le métal a un poids théorique. Celui-ci a un poids réel. L'écart, je ne l'explique pas. »
- **Relations** : `NPC_GRA_03` (Bofrik — maître) ; `NPC_GRA_34` (Vendeur Boucliers — collègue au Bastion) ; `NPC_GRA_31` (Marchand Fer — lui fournit le fer).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_33_01` | K0 | forge, arme | Forge d'armes lourdes — marteaux, masses, haches | — |
| 2 | `QI_GRA_33_02` | K0 | prix, commande | Prix sur commande — 800-2 000 Yuld selon l'arme | — |
| 3 | `QI_GRA_33_03` | K0 | materiau, acier | Acier de Granzam — alliage fer/carbone, qualité militaire | — |
| 4 | `QI_GRA_33_04` | K1 | marteau, poids | Un marteau de guerre pèse le double de son poids normal | `AFF>=60` |
| 5 | `QI_GRA_33_05` | K1 | client, inconnu | Le client qui l'a commandé ne s'est jamais présenté | `AFF>=65` |
| 6 | `QI_GRA_33_06` | K1 | balance, verifie | Il a vérifié la balance, le métal, le moule — tout est correct | — |
| 7 | `QI_GRA_33_07` | K2 | bascule, nuit | Le marteau bascule sur son socle chaque nuit — toujours face à l'ouest | `AFF>=85` |
| 8 | `QI_GRA_33_08` | K2 | poids, sous_sol | Le poids excédentaire semble venir d'en bas — « comme si la montagne le tirait » | `QUEST:QST_GRA_MARTEAU_POIDS` |
| 9 | `QI_GRA_33_09` | K3 | ancrage, strate_47 | Le marteau est « ancré » à la strate −47 par un résidu de gravité du seed matériel — chaque objet forgé près du Cœur `NPC_GRA_00` capte une fraction de la masse du noyau | JAMAIS — déflection : *(il soulève le marteau à deux mains, grimaçant)* « Il n'est pas à vendre. Il n'est pas à prendre. Il est… ailleurs. » |
| 10 | `QI_GRA_33_10` | KX | *(tout le reste)* | *(il passe un chiffon sur une épée)* « Une arme, ça doit être équilibré. Dans le poids, et dans l'esprit. » | — |

## 4. Chaînage économique & quêtes

- **Vente** : armes lourdes forgées sur commande.
- Porteur du fil **🏔️ Le Poids de la Montagne** (marteau ancré à la strate −47).
- Donneur de `QST_GRA_MARTEAU_POIDS` : enquête sur le marteau qui pèse trop lourd.

## 5. Intégration Bot

- **Accueil** (`!parler armurier_adjoint`) : *Frappe un marteau de guerre posé sur l'enclume.* « Solide. Trop solide, même. »
- `!buy weapon` actif au Bastion Ouest.
- `NPC_SECRET_PROBED` slot 9 : hook « ancrage gravitaire du seed » pour l'orchestrateur.
