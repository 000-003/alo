# ✈️ ROUTE AÉRIENNE GATTAN → ALNE — Couloir de Vol Salamander

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_ROUTE_SAL_ALN` |
| **Nom Officiel** | Route Aérienne Gattan – Alne |
| **Surnoms** | « Le Couloir des Braises », « La Remontée de Cendre » |
| **Type** | Route Aérienne |
| **Territoire** | Neutre (espace aérien international) |
| **Safe Zone** | ❌ Non — PK autorisé (embuscades aériennes) |
| **Niveau Recommandé** | 10 – 99 |
| **Statut The Seed** | Zone de transit — pas de sauvegarde de position |

---

## Description Atmosphérique

Le couloir Gattan–Alne s'élève d'abord au-dessus du panache de cendres du volcan — un mur de suie chaude que les pilotes traversent à l'aveugle en suivant les balises de cristal de feu plantées par l'armée Salamander. Passé le panache, les thermiques volcaniques catapultent les voyageurs vers le nord à une vitesse qu'aucune autre route n'égale : les Salamander, ailes les plus lentes d'Alfheim, ont compensé leur handicap en domestiquant leur volcan. Des escadrilles militaires en formation serrée patrouillent le couloir, moins pour protéger les voyageurs que pour surveiller qui entre et sort du territoire.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Variable — change selon la zone survolée |
| **Section 1 (Gattan)** | Panache de cendres — visibilité quasi nulle, +25% vitesse (thermiques) |
| **Section 2 (Terres neutres)** | Ciel dégagé, courants stables |
| **Section 3 (Approche Alne)** | Calme, lumière dorée d'Yggdrasil |
| **Événements Météo Rares** | Éruption Mineure (bombes de lave traversent le couloir — esquive `!esquiver`) |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Gattan (départ) | `ZONE_SAL_CAP_001` | `!atterrir gattan` | 0 MP | Instantané |
| Alne — Capitale Neutre | `ZONE_NEU_CAP_001` | `!atterrir alne` | 0 MP | Arrivée auto en 15 min |
| Îlot de la Vigie (point de repos) | — | `!atterrir îlot` | 0 MP | Variable |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Vigie de Guerre Salamander** | Alerte PK — consigne l'identité de tout voyageur non-Salamander | Point de départ (Gattan) |
| **Cantinière Volante Braska** | Vend potions de MP en vol (prix ×2) et rations fumées | Îlot de la Vigie |

---

## Mobs Spawnable

| Mob | ID | Niveau | HP | Taux d'Apparition | Agressivité | Drop Notable |
|---|---|---|---|---|---|---|
| Griffon Sauvage | `MOB_AIR_001` | 15-25 | 3000-5000 | 20% | Agressif | Plume de Griffon, Griffe Dorée |
| Wyverne Mineure | `MOB_AIR_002` | 20-30 | 5000-8000 | 12% | Agressif — **domptable** (Beast Taming Lv.30) | Écaille de Wyverne |
| Essaim de Guêpes Géantes | `MOB_AIR_003` | 10-15 | 500 (×20) | 15% | Agressif | Miel Royal (rare) |
| Dragon de Brume (rare) | `MOB_AIR_004` | 35-45 | 30000 | 2% | Agressif | Souffle de Brume (sort), Écaille de Brume |

---

## Ressources Récoltables

| Ressource | Type | Spawn | Compétence Requise |
|---|---|---|---|
| Cristal de Ciel | Minerai | Îlots flottants | Minage Lv.20 |
| Cendre Volante | Matériau | Panache du volcan (section 1) | Herboristerie Lv.10 |
| Plume de Courant | Matériau | Drop de mobs aériens uniquement | — |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Îlot de la Vigie** | Point de régénération MP à mi-parcours — poste militaire Salamander avancé |
| **Le Mur de Suie** | Traversée à l'aveugle du panache — balises de cristal de feu à suivre |
| **Épave du *Char Ardent*** | Carcasse d'un navire volant de guerre — coffre caché (Vol Lv.30) |

---

## Lore / Histoire

C'est par ce couloir que le Général Eugene a lancé la tentative de monopole des routes vers Alne — l'épisode le plus proche d'une guerre mondiale qu'Alfheim ait connu. Les balises de cristal qui guident aujourd'hui les marchands à travers le panache sont les vestiges de son dispositif de blocus : chaque balise était alors une tour de péage. Alne a exigé leur désarmement ; les Salamander ont obéi, mais n'ont jamais retiré les balises. « Au cas où », disent les vigies.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `✈️ Vol Gattan → Alne` |
| **Description du Groupe** | `Route aérienne vers la capitale neutre. 🕐 Trajet: 15 min. ⚠️ Zone PvP — Embuscades possibles. Commandes: !atterrir, !accélérer, !esquiver.` |
| **Règles Affichées** | `1. Transit — arrivée automatique après 15 min. 2. Vous pouvez être attaqué en vol. 3. !atterrir pour vous poser sur un îlot.` |

---

> *« Nos ailes sont lentes, oui. C'est pour ça qu'on a appris au volcan à souffler dans le bon sens. »* — Vigie de Guerre de Gattan
