# ✈️ ROUTE AÉRIENNE ARCHIPEL → ALNE — Couloir de Vol Undine

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_ROUTE_UND_ALN` |
| **Nom Officiel** | Route Aérienne Archipel d'Écume – Alne |
| **Surnoms** | « La Voie des Alizés », « Le Couloir Blanc » |
| **Type** | Route Aérienne |
| **Territoire** | Neutre (espace aérien international) |
| **Safe Zone** | ❌ Non — PK autorisé (embuscades aériennes) |
| **Niveau Recommandé** | 10 – 99 |
| **Statut The Seed** | Zone de transit — pas de sauvegarde de position |

---

## Description Atmosphérique

Le couloir Archipel–Alne décolle au ras du Lac Cristallin — les voyageurs frôlent leur propre reflet sur des kilomètres avant de prendre de l'altitude — puis traverse la ceinture de nuages bas qui donne son surnom à la route. Les Undine, peu belliqueux, en ont fait le couloir le plus « civilisé » d'Alfheim : des gondoles volantes de l'Académie assurent un service régulier pour les blessés et les mages à court de MP, et des bouées de brume enchantées balisent le trajet. C'est aussi, paradoxalement, la route préférée des pirates aériens : là où les caravanes se sentent en sécurité, les cales sont pleines.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Variable — change selon la zone survolée |
| **Section 1 (Archipel)** | Vol en rase-eau, embruns (+10% régénération MP) |
| **Section 2 (Ceinture de nuages)** | Visibilité réduite, poches de turbulence |
| **Section 3 (Approche Alne)** | Calme, lumière dorée d'Yggdrasil |
| **Événements Météo Rares** | Grain Blanc (mur de pluie — vol à l'aveugle, embuscades fréquentes) |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Archipel d'Écume (départ) | `ZONE_UND_CAP_001` | `!atterrir archipel` | 0 MP | Instantané |
| Alne — Capitale Neutre | `ZONE_NEU_CAP_001` | `!atterrir alne` | 0 MP | Arrivée auto en 15 min |
| Îlot de la Bouée Haute (point de repos) | — | `!atterrir îlot` | 0 MP | Variable |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Bateleuse Céleste Ilya** | Gondole-ambulance de l'Académie — soins payants en vol (200 Yrd) | Îlot de la Bouée Haute |
| **Vigie des Alizés** | Alerte PK — signale les pirates aériens du Grain Blanc | Point de départ (Archipel) |

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
| Rosée d'Alizé | Plante | Ceinture de nuages (section 2) | Herboristerie Lv.15 |
| Plume de Courant | Matériau | Drop de mobs aériens uniquement | — |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Îlot de la Bouée Haute** | Point de régénération MP à mi-parcours — escale de la gondole-ambulance |
| **Le Miroir du Départ** | Vol en rase-eau au-dessus du Lac Cristallin — cinématique à la première traversée |
| **Carcasse du *Grain Blanc*** | Épave du navire pirate qui donna son nom à la tempête — coffre caché (Vol Lv.30) |

---

## Lore / Histoire

La Voie des Alizés doit son confort à un marchandage resté célèbre : l'Académie des Mages a offert à Alne le balisage enchanté du couloir en échange d'une clause unique — aucune tour de péage ne pourra jamais y être bâtie. Thalassa avait vu le blocus salamander se monter sur la route de Gattan et refusait que la connaissance (ses élèves font l'aller-retour vers la bibliothèque d'Alne chaque semaine) dépende d'un octroi. Les pirates du Grain Blanc, eux, remercient chaque jour cette clause : pas de péage, pas de garnison.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `✈️ Vol Archipel → Alne` |
| **Description du Groupe** | `Route aérienne vers la capitale neutre. 🕐 Trajet: 15 min. ⚠️ Zone PvP — pirates du Grain Blanc. Commandes: !atterrir, !accélérer, !esquiver.` |
| **Règles Affichées** | `1. Transit — arrivée automatique après 15 min. 2. Vous pouvez être attaqué en vol. 3. !atterrir pour vous poser sur un îlot.` |

---

> *« Sur cette route, le danger ne vient pas du ciel. Il vient de ce que vous transportez. »* — Vigie des Alizés
