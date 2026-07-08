# ✈️ ROUTE AÉRIENNE GRANZAM → ALNE — Couloir de Vol Gnome

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_ROUTE_GNO_ALN` |
| **Nom Officiel** | Route Aérienne Granzam – Alne |
| **Surnoms** | « La Route des Convois », « Le Couloir Lesté » |
| **Type** | Route Aérienne |
| **Territoire** | Neutre (espace aérien international) |
| **Safe Zone** | ❌ Non — PK autorisé (cible favorite des pillards de convois) |
| **Niveau Recommandé** | 10 – 99 |
| **Statut The Seed** | Zone de transit — pas de sauvegarde de position |

---

## Description Atmosphérique

La route Granzam–Alne est l'artère commerciale la plus chargée d'Alfheim au sens propre : les Gnomes, plus mauvais voiliers du monde des fées, la parcourent en caravanes lentes et lourdes de minerai, escortées contre rémunération. Le Cardinal y applique la physique du fret — un inventaire chargé ralentit le vol jusqu'à -40% — ce qui fait de ce couloir un écosystème complet : convoyeurs, escortes, pillards, et assureurs.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Variable — change selon la zone survolée |
| **Section 1 (Granzam)** | Courants de montagne instables |
| **Section 2 (Terres neutres)** | Plaines calmes — zone d'embuscade classique |
| **Section 3 (Approche Alne)** | Calme, lumière dorée d'Yggdrasil |
| **Événements Météo Rares** | Tempête Aérienne (vol impossible, atterrissage forcé sur îlot) |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Granzam (départ) | `ZONE_GNO_CAP_001` | `!atterrir granzam` | 0 MP | Instantané |
| Alne — Capitale Neutre | `ZONE_NEU_CAP_001` | `!atterrir alne` | 0 MP | Arrivée auto en 15 min (jusqu'à 25 min chargé) |
| Îlot de la Pesée (point de repos) | — | `!atterrir îlot` | 0 MP | Variable |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Peseur Assermenté Torvik** | Enregistre les cargaisons (assurance de convoi, 5% de la valeur) | Point de départ (Granzam) |
| **Mécanicienne Volante Zelda** | Potions de MP ×2, harnais de fret (+10% vitesse chargé) | Îlot de la Pesée |

---

## Mobs Spawnable

| Mob | ID | Niveau | HP | Taux d'Apparition | Agressivité | Drop Notable |
|---|---|---|---|---|---|---|
| Griffon Sauvage | `MOB_AIR_001` | 15-25 | 3000-5000 | 22% | Agressif (cible les joueurs chargés) | Plume de Griffon, Griffe Dorée |
| Wyverne Mineure | `MOB_AIR_002` | 20-30 | 5000-8000 | 10% | Agressif | Écaille de Wyverne |
| Essaim de Guêpes Géantes | `MOB_AIR_003` | 10-15 | 500 (×20) | 15% | Agressif | Miel Royal (rare) |
| Dragon de Brume (rare) | `MOB_AIR_004` | 35-45 | 30000 | 2% | Agressif | Souffle de Brume (sort), Écaille de Brume |

---

## Ressources Récoltables

| Ressource | Type | Spawn | Compétence Requise |
|---|---|---|---|
| Cristal de Ciel | Minerai | Îlots flottants | Minage Lv.20 |
| Mousse des Nuages | Plante | Surface des îlots | Herboristerie Lv.15 |
| Cargaison Perdue | Matériau | Épaves de convois (aléatoire) | Perception Lv.15 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Îlot de la Pesée** | Repos MP + comptoir d'assurance à mi-parcours |
| **Panorama d'Yggdrasil** | Cinématique de 5s à la première traversée |
| **Cimetière des Convois** | Champ d'épaves flottantes — loot aléatoire, embuscades fréquentes |

---

## Lore / Histoire

Les Gnomes ont transformé leur handicap de vol en institution : incapables de semer qui que ce soit, ils ont inventé l'escorte contractuelle, l'assurance de cargaison et le tarif syndical du garde du corps volant. La moitié des guildes mercenaires d'Alfheim ont signé leur premier contrat sur cette route. L'autre moitié l'a pillée d'abord.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `✈️ Vol Granzam → Alne` |
| **Description du Groupe** | `Route aérienne vers la capitale neutre. 🕐 Trajet: 15-25 min selon charge. ⚠️ Zone PvP — pillards de convois. Commandes: !atterrir, !accélérer, !esquiver.` |
| **Règles Affichées** | `1. Transit — arrivée automatique. 2. L'inventaire chargé ralentit le vol. 3. Escorte recommandée au-delà de 5000 Yrd de cargaison.` |

---

> *« Voler vite, c'est bien. Arriver avec la cargaison, c'est mieux payé. »* — Peseur Torvik
