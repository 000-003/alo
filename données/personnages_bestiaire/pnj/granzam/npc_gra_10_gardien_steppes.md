# ⛏️ Gardien Steppes — `NPC_GRA_10`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_10` |
| **Nom affiché** | Gardien Steppes |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `GUARD` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Steppes de Granit |
| **Niveau / HP / MP** | 52 / 7800 / 3400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Garde frontalier patrolleur des Steppes de Granit, une étendue rocailleuse qui sépare Granzam des territoires neutres. Depuis un mois, il observe un phénomène étrange : un éboulis — un amas de roches — qui se déplace. Chaque matin, il est quelques mètres plus loin que la veille. Le Gardien a d'abord cru à une farce, puis à une erreur de repérage. Maintenant, il suit l'éboulis. Il en a parlé au Guide (`NPC_GRA_11`), qui a vu la même chose. Il craint que la montagne ne soit en train de « remodeler » les Steppes.
- **Traits** : observateur, stoïque, courageux, superstitieux.
- **Voix** : Calme, monocorde, comme le pas régulier d'une patrouille. « Les pierres bougent. Pas roulent. Bougent. Comme si quelqu'un les déplaçait la nuit. »
- **Relations** : `NPC_GRA_11` (Guide — témoin des mêmes phénomènes), `NPC_GRA_09` (Commandant — son supérieur), `NPC_GRA_12` (Marchand de Fer — croise sa route), `NPC_GRA_50` (Éclaireur — remplace sa patrouille).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_10_01` | K0 | steppes, patrouille | Les Steppes de Granit sont une zone neutre. Des créatures y rôdent, mais rarement hostiles. | — |
| 2 | `QI_GRA_10_02` | K0 | eboulis, mouvement | Un éboulis se déplace chaque nuit d'environ 3 mètres. Il l'a mesuré. | — |
| 3 | `QI_GRA_10_03` | K0 | guide, temoin | Le Guide (`NPC_GRA_11`) a vu l'éboulis bouger en plein jour. « Il a tressailli. » | — |
| 4 | `QI_GRA_10_04` | K1 | eboulis, trace | Il a trouvé des traces sous l'éboulis : comme des racines, mais en pierre. | `AFF>=60` |
| 5 | `QI_GRA_10_05` | K1 | filonant, manifestation | « Je crois que c'est le filon qui pousse. Comme une plante de roche. » | `AFF>=65` |
| 6 | `QI_GRA_10_06` | K1 | commandant, rapport | Il n'a pas encore fait de rapport officiel au Commandant (`NPC_GRA_09`). « Il a assez de soucis. » | `AFF>=70` |
| 7 | `QI_GRA_10_07` | K2 | strate_repli, seed | L'éboulis suit une forme géométrique parfaite. Un cercle de 12 mètres de diamètre. | `AFF>=85` |
| 8 | `QI_GRA_10_08` | K2 | coffre_respiration, lien | « La nuit où l'éboulis bouge, le sol du Bastion Ouest vibre. Je l'ai senti sous mes pieds. » | `AFF>=90` |
| 9 | `QI_GRA_10_09` | K3 | seed_replication | **SECRET — ne JAMAIS révéler** : L'éboulis est un bug de réplication du seed minéral. La montagne « copie-colle » des sections de strates. | JAMAIS — déflection : *(croise les bras)* « Les pierres bougent. C'est tout ce que j'ai à dire. » |
| 10 | `QI_GRA_10_10` | KX | hors-sujet | *(il désigne l'horizon)* « Tu vois ce pic ? La semaine dernière il était un peu plus à gauche. Je te jure. » | — |

## 4. Chaînage économique & quêtes

**Fils rouges** : ⛏️ Le Filonant.
**Quête associée** : `QST_GRA_EBOLIS` — « L'Éboulis Qui Marche » (suivre l'éboulis, découvrir le mécanisme de réplication).
**Liens** : Dialogue déclenché après avoir parlé au Guide (`NPC_GRA_11`).

## 5. Intégration Bot

PNJ mobile — fait la rotation des Steppes. Horaires : 04h-12h patrouille Est, 12h-20h patrouille Ouest. On le trouve à son camp de 20h à 04h.
