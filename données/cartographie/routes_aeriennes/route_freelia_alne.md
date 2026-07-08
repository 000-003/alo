# ✈️ ROUTE AÉRIENNE FREELIA → ALNE — Couloir de Vol Cait Sith

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_ROUTE_CAI_ALN` |
| **Nom Officiel** | Route Aérienne Freelia – Alne |
| **Surnoms** | « La Voie des Wyvernes », « Le Couloir Fauve » |
| **Type** | Route Aérienne |
| **Territoire** | Neutre (espace aérien international) |
| **Safe Zone** | ❌ Non — PK autorisé (embuscades aériennes) |
| **Niveau Recommandé** | 10 – 99 |
| **Statut The Seed** | Zone de transit — pas de sauvegarde de position |

---

## Description Atmosphérique

Le couloir Freelia–Alne survole les plaines de l'Ouest puis les contreforts brumeux du centre d'Alfheim, jusqu'à ce que la silhouette d'Yggdrasil dévore l'horizon. C'est la seule route aérienne où l'on croise des escadrilles montées : les éclaireurs Cait Sith y patrouillent à dos de wyverne, et leurs familiers volants servent de relais visuels — un joueur en détresse peut être repéré à des kilomètres grâce à l'acuité raciale féline. Des îlots flottants jalonnent le trajet pour la régénération de MP.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Variable — change selon la zone survolée |
| **Section 1 (Freelia)** | Thermiques chauds de savane (+15% vitesse) |
| **Section 2 (Terres neutres)** | Brumes d'altitude, visibilité réduite |
| **Section 3 (Approche Alne)** | Calme, lumière dorée d'Yggdrasil |
| **Événements Météo Rares** | Tempête Aérienne (vol impossible, atterrissage forcé sur îlot) |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Freelia (départ) | `ZONE_CAI_CAP_001` | `!atterrir freelia` | 0 MP | Instantané |
| Alne — Capitale Neutre | `ZONE_NEU_CAP_001` | `!atterrir alne` | 0 MP | Arrivée auto en 15 min |
| Îlot du Perchoir (point de repos) | — | `!atterrir îlot` | 0 MP | Variable |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Vigie Montée Cait Sith** | Alerte PK — signale les embuscades dans le couloir | Point de départ (Freelia) |
| **Fauconnier Ambulant Pell** | Vend potions de MP en vol (prix ×2) et appâts aériens | Îlot du Perchoir |

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
| Mousse des Nuages | Plante | Surface des îlots | Herboristerie Lv.15 |
| Plume de Courant | Matériau | Drop de mobs aériens uniquement | — |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Îlot du Perchoir** | Point de régénération MP à mi-parcours — nids de wyvernes domptables |
| **Panorama d'Yggdrasil** | Cinématique de 5s à la première traversée |
| **Nid de Griffon Royal** | Coffre caché sur îlot élevé (Vol Lv.30) |

---

## Lore / Histoire

Les Cait Sith sont les seuls à parcourir cette route à dos de familier plutôt qu'avec leurs propres ailes — une hérésie pour les Sylph, un art pour Freelia. C'est par ce couloir que la reine Alicia Rue a mené l'escadrille de wyvernes lors de la Bataille d'Alne, prise d'assaut aérienne restée dans toutes les chroniques du serveur.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `✈️ Vol Freelia → Alne` |
| **Description du Groupe** | `Route aérienne vers la capitale neutre. 🕐 Trajet: 15 min. ⚠️ Zone PvP — Embuscades possibles. Commandes: !atterrir, !accélérer, !esquiver.` |
| **Règles Affichées** | `1. Transit — arrivée automatique après 15 min. 2. Vous pouvez être attaqué en vol. 3. !atterrir pour vous poser sur un îlot.` |

---

> *« Les Sylph volent plus vite. Nos wyvernes, elles, ne fatiguent jamais. »* — Vigie Montée de Freelia
