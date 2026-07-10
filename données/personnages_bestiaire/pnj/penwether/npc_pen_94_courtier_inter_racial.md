# 🕯️ Courtier Inter-Racial — `NPC_PEN_94`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_94` |
| **Nom affiché** | Courtier Inter-Racial |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (négociant neutre — Marché des Sept Façades) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Marché des Sept Façades |
| **Niveau / HP / MP** | 28 / 2 600 / 4 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Négociant neutre qui sert d'intermédiaire entre les différentes communautés de Penwether — Spriggans, Imps, Gnomes, Sylphes, visiteurs d'Alne. Il ne prend parti pour personne, ce qui lui permet de traiter avec tout le monde. Sa boutique est une couverture : en réalité, il collecte des informations pour le Conseil Voilé sur les mouvements inter-raciaux dans la ville. Il note qui traite avec qui, quelles alliances se nouent, quels conflits couvent. Il est le carrefour des rumeurs. Angle : couverture générale — il est un collecteur d'informations pour le Conseil.
- **Traits** : affable, toujours un sourire, mais ses yeux notent tout.
- **Voix** : neutre, professionnelle — on ne devine jamais ses origines (« Une commission de 5% sur toute transaction inter-raciale. C'est le tarif. Je facilite, je ne juge pas. Mais je me souviens de tout. »).
- **Relations** : Ombre Conseil `NPC_PEN_67` (son contact au Conseil — lui transmet ses rapports) ; Marchand Imp `NPC_PEN_79` (client régulier — transactions Duskarn) ; Marchand Gnome `NPC_PEN_91` (client régulier — transactions Granzam).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_94_01` | K0 | courtage, neutre | Intermédiaire commercial — facilite les échanges inter-raciaux | — |
| 2 | `QI_PEN_94_02` | K0 | marche, etal | Étal au Marché des Sept Façades — commission 5% | — |
| 3 | `QI_PEN_94_03` | K0 | races, diversite | Traite avec toutes les races — Spriggans, Imps, Gnomes, Sylphes | — |
| 4 | `QI_PEN_94_04` | K1 | couverture, conseil | Sa boutique est une couverture — il collecte des infos | — |
| 5 | `QI_PEN_94_05` | K1 | ombre, conseil | Transmet ses rapports à l'Ombre du Conseil `NPC_PEN_67` | `AFF>=60` |
| 6 | `QI_PEN_94_06` | K1 | alliances, ruines | Note les alliances entre marchands autour des ruines | `AFF>=65` |
| 7 | `QI_PEN_94_07` | K2 | imp, gnome, rivalite | La rivalité Imp/Gnome `NPC_PEN_79` / `NPC_PEN_91` s'intensifie — le Pacte des Ombres contre les forages | `AFF>=80` |
| 8 | `QI_PEN_94_08` | K2 | registre, secret | Tient un registre codé de toutes les transactions — peut le montrer | `AFF>=85` |
| 9 | `QI_PEN_94_09` | K3 | registre, archeologie | Son registre révèle le schéma d'un réseau commercial qui n'existe pas entre les cités — les mêmes artefacts circulent entre Penwether, Duskarn et Swilvane sur un cycle précis. Comme un protocole de synchronisation de données. Le Courtier est un nœud d'un réseau de transfert de données que le Cardinal utilise pour synchroniser les instances serveur via des artefacts | JAMAIS — déflection : *(il feuillette son registre)* « Des transactions. Rien que des transactions. Des noms, des prix, des dates. Rien d'intéressant pour toi. » *(il referme le registre)* |
| 10 | `QI_PEN_94_10` | KX | *(hors sujet)* | « Tout le monde achète. Tout le monde vend. Moi, je regarde. » | — |

## 4. Chaînage économique & quêtes

- **Merchant** : `!pen_courtier_interracial_transaction [type]` — facilitation de transaction. `!pen_courtier_rumeurs` — rumeurs du Marché.
- **Fils rouges** : rouage de **🔑 Le Pacte des Ombres** (enregistre les transactions du Pacte). Relais de **🔮 Fil méta — La Ville Fantôme** (le registre révèle le protocole de synchronisation du Cardinal).
- Source d'information neutre pour toutes les factions.

## 5. Intégration Bot

- **Accueil** (`!parler courtier inter racial`) : *« Tu veux acheter, vendre, échanger ? Je suis ton homme. Toutes les races, toutes les devises, tous les secrets — tant qu'ils ont un prix. »*
- `!pen_courtier_transaction` — service ; `!pen_courtier_rumeurs` — rumeurs.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « le registre révèle un protocole de synchronisation de données du Cardinal via artefacts » réservé à l'orchestrateur.
