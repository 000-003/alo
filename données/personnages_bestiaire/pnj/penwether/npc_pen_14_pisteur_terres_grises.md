# 🕯️ Pisteur des Terres Grises — `NPC_PEN_14`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_14` |
| **Nom affiché** | Pisteur des Terres Grises |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` (traque dans les Terres Grises) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Terres Grises |
| **Niveau / HP / MP** | 60 / 10 200 / 7 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Pisteur des Terres Grises traque les créatures qui émergent du brouillard de cendre — et plus récemment, les « disparus revenus » qui errent sans souvenir dans la zone grise. Ancien chasseur de la Nécropole, il s'est reconverti quand il a compris que les Terres Grises contenaient des pistes plus intéressantes que du gibier. Il suit les traces que les autres ne voient pas — des résidus de code, des perturbations de strate, des modifications de terrain qui indiquent un dysfonctionnement système. Il est le seul à cartographier l'expansion des Terres Grises semaine après semaine, et ses relevés montrent une accélération inquiétante.
- **Traits** : obsessionnel, silencieux, regard qui suit des choses invisibles.
- **Voix** : basse, rapide, comme s'il notait mentalement (« Trace fraîche. Pas une bête. Un Spriggan. Mais il marche comme s'il avait oublié comment. Suis-le. Ou suis-moi. »).
- **Relations** : Gardien Terres Grises `NPC_PEN_13` (binôme — partage ses relevés) ; Cartographe Maude `NPC_PEN_04` (lui fournit les cartes de base qu'il annote) ; Marchand de Pierres `NPC_PEN_15` (le ravitaille en munitions et provisions).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_14_01` | K0 | pistage, terrain | Techniques de pistage dans les Terres Grises | — |
| 2 | `QI_PEN_14_02` | K0 | creatures, grises | Types de créatures des Terres Grises — comportement, points faibles | — |
| 3 | `QI_PEN_14_03` | K0 | equipement, survie | Équipement recommandé pour les expéditions longues | — |
| 4 | `QI_PEN_14_04` | K1 | disparus, revenus | Les disparus qui reviennent des Terres Grises ne sont plus vraiment Spriggans | `AFF>=65` |
| 5 | `QI_PEN_14_05` | K1 | traces, code | Il suit des traces de « code » — des perturbations de strate que les autres ne voient pas | `AFF>=70` |
| 6 | `QI_PEN_14_06` | K1 | expansion, mesure | Il mesure l'expansion des Terres Grises — 0,3% par mois | — |
| 7 | `QI_PEN_14_07` | K2 | anomalie, centre | Au centre des Terres Grises, les traces deviennent des « boucles » — les créatures tournent en rond sans fin | `AFF>=85` |
| 8 | `QI_PEN_14_08` | K2 | piste, humaine | Il a suivi une piste qui menait hors des Terres Grises — vers une strate non répertoriée | `AFF>=88` |
| 9 | `QI_PEN_14_09` | K3 | strate, cachee | La strate non répertoriée est une « mémoire cache » du Cardinal — des données mises de côté pour un futur reset | JAMAIS — déflection : *(il s'arrête de marcher)* « La piste menait à un endroit qui n'existe pas encore. Le Cardinal y stocke ce qu'il veut garder d'un reset à l'autre. Des données. Des souvenirs. Des versions de nous qui n'ont pas survécu. Je n'y suis pas entré. J'ai eu peur de ce que j'aurais trouvé. » |
| 10 | `QI_PEN_14_10` | KX | *(hors-sujet)* | « Les Terres Grises gardent les traces de tout ce qui a été oublié. Et tout ce qui sera oublié. » | — |

## 4. Chaînage économique & quêtes

- **Quest Giver** : `QST_PEN_PISTE_01` (traquer une créature rare), `QST_PEN_PISTE_02` (retrouver un disparu), `QST_PEN_PISTE_03` (explorer la strate non répertoriée).
- **Fils rouges** : rouage de **📜 Ce Que Cachent les Ruines** (l'expansion des Terres Grises). Relais de **🔮 Fil méta — La Ville Fantôme** (la mémoire cache du Cardinal).
- Vente de `CARTE_TERRES_GRISES` (annotée des pistes récentes).

## 5. Intégration Bot

- **Accueil** (`!parler pisteur_tg`) : *« Tu sens cette odeur ? Non ? Moi si. C'est la trace d'un disparu. Il est passé ici il y a trois heures. Tu veux le suivre ? Dépêche-toi, la piste refroidit. »*
- `!pistes pisteur` (traques disponibles) ; `!releves pisteur` (mesures d'expansion).
