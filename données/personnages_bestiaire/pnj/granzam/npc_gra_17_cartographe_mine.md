# ⛏️ Cartographe Mine — `NPC_GRA_17`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_17` |
| **Nom affiché** | Cartographe Mine |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Mine de Mithril (poste de cartographie) |
| **Niveau / HP / MP** | 22 / 1800 / 2800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Cartographe attitré des galeries de la Mine de Mithril, il dessine les plans des niveaux explorés. Il y a un mois, il a cartographié une salle au niveau −15 qu'il a marquée « sèche » — sans mithril, sans intérêt. Mais depuis, il rêve de cette salle : dans ses rêves, elle est pleine d'une lumière ambrée, et une voix grave l'appelle. Il y est retourné trois fois : la salle est vide, sombre, normale. Mais sa boussole s'affole à chaque fois, et son encre de marquage brille sous lumière noire. Il suspecte que la salle « cache quelque chose » — il n'ose pas dire quoi. Il en a parlé à Durgan (`NPC_GRA_01`), qui a noté la position sur sa carte des filons chantants.
- **Traits** : méticuleux, rêveur, anxieux, artiste.
- **Voix** : Douce, un peu tremblante. « J'ai marqué cette salle comme sèche. Mais elle est tout sauf sèche. Elle est… pleine. »
- **Relations** : `NPC_GRA_01` (Durgan — partage ses cartes), `NPC_GRA_16` (Gardien — lui a fourni les accès), `NPC_GRA_05` (Helga — compare ses relevés), `NPC_GRA_06` (Margrim — lui commande des cartes sismiques).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_17_01` | K0 | cartes, vente | Vend des cartes des galeries (50 Yuld/niveau). Niveaux 1 à 15 disponibles. | — |
| 2 | `QI_GRA_17_02` | K0 | salle_seche, niveau_15 | Salle −15 marquée « sèche ». Aucun minerai, aucune créature. | — |
| 3 | `QI_GRA_17_03` | K0 | reve, lumiere | Il rêve de la salle depuis un mois. Lumière ambrée, voix grave. | — |
| 4 | `QI_GRA_17_04` | K1 | boussole, affolement | Sa boussole s'affole dans la salle −15. « Le nord tourne en rond.» | `AFF>=60` |
| 5 | `QI_GRA_17_05` | K1 | encre, brillance | L'encre qu'il utilise pour marquer brille sous lumière noire dans cette salle. « Comme si la pierre la révélait. » | `AFF>=65` |
| 6 | `QI_GRA_17_06` | K1 | durgan_carte, concordance | Durgan (`NPC_GRA_01`) a reporté la salle sur sa carte des filons chantants. « Elle est pile au centre. » | `AFF>=70` |
| 7 | `QI_GRA_17_07` | K2 | gemme_qui_voit, resonance | « J'ai apporté un éclat de gemme d'Helga (`NPC_GRA_05`). Il a pulsé dans la salle. Comme un cœur. » | `AFF>=85` |
| 8 | `QI_GRA_17_08` | K2 | salle_cachee, portail | « La salle fait 12 m de diamètre. Parfaite. Circulaire. Aucune faille. Comme si quelqu'un l'avait construite. » | `AFF>=90` |
| 9 | `QI_GRA_17_09` | K3 | noyau_pierre_acces | **SECRET — ne JAMAIS révéler** : La salle −15 est une antichambre du Noyau de Pierre. Un accès au seed matériel. La « sécheresse » est un champ de masquage. | JAMAIS — déflection : *(roule sa carte)* « C'est une salle vide. Rien à voir. N'y allez pas. » |
| 10 | `QI_GRA_17_10` | KX | hors-sujet | *(il dessine machinalement sur un coin de parchemin)* « La montagne a des veines. Comme un corps. On gratte la peau. » | — |

## 4. Chaînage économique & quêtes

**Fils rouges** : 💎 La Gemme Qui Voit, 🔮 Noyau de Pierre.
**Quête associée** : `QST_GRA_SALLE_SECHE` — « La Salle Sèche » (explorer la salle −15, découvrir l'antichambre du Noyau).
**Liens** : Fournit l'accès à la salle clé pour la quête principale du Noyau.

## 5. Intégration Bot

Posté à l'entrée de la Mine, établi de cartographie. Horaires 08h-20h. Vente d'items carte. État `state:salle_seche_decouverte` (bool).
