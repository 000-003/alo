# ✈️ ROUTE AÉRIENNE BROKKHEIM → ALNE — Couloir de Vol Leprechaun

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_ROUTE_LEP_ALN` |
| **Nom Officiel** | Route Aérienne Brokkheim – Alne |
| **Surnoms** | « La Route du Fer », « Le Couloir des Livraisons » |
| **Type** | Route Aérienne |
| **Territoire** | Neutre (espace aérien international) |
| **Safe Zone** | ❌ Non — PK autorisé (cargaisons d'armes = cibles de choix) |
| **Niveau Recommandé** | 10 – 99 |
| **Statut The Seed** | Zone de transit — pas de sauvegarde de position |

---

## Description Atmosphérique

Le couloir Brokkheim–Alne s'ouvre sur un spectacle unique : la colonne de vapeur permanente de la Grande Forge, visible à des kilomètres, sert d'amer à tous les navigateurs d'Alfheim. La route est jalonnée de balises de cuivre forgées — cadeaux publicitaires des guildes d'artisans, chacune gravée du poinçon de son atelier. Les livraisons d'armes fraîchement forgées y circulent sous escorte : intercepter une caisse de la Forge-Mère est le rêve avoué de tous les pillards du serveur.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Variable — change selon la zone survolée |
| **Section 1 (Brokkheim)** | Colonne thermique de la Forge (+20% vitesse ascensionnelle) |
| **Section 2 (Terres neutres)** | Ciel dégagé — visibilité maximale (chasseurs comme proies) |
| **Section 3 (Approche Alne)** | Calme, lumière dorée d'Yggdrasil |
| **Événements Météo Rares** | Tempête Aérienne (vol impossible, atterrissage forcé sur îlot) |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Brokkheim (départ) | `ZONE_LEP_CAP_001` | `!atterrir brokkheim` | 0 MP | Instantané |
| Alne — Capitale Neutre | `ZONE_NEU_CAP_001` | `!atterrir alne` | 0 MP | Arrivée auto en 15 min |
| Îlot de l'Enclume (point de repos) | — | `!atterrir îlot` | 0 MP | Variable |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Convoyeur Assermenté Haldor** | Contrats d'escorte de livraisons (rémunération au poids) | Point de départ (Brokkheim) |
| **Rétameur Volant Pinn** | Potions de MP ×2, réparation d'urgence en vol (`!repair`) | Îlot de l'Enclume |

---

## Mobs Spawnable

| Mob | ID | Niveau | HP | Taux d'Apparition | Agressivité | Drop Notable |
|---|---|---|---|---|---|---|
| Griffon Sauvage | `MOB_AIR_001` | 15-25 | 3000-5000 | 20% | Agressif | Plume de Griffon, Griffe Dorée |
| Wyverne Mineure | `MOB_AIR_002` | 20-30 | 5000-8000 | 10% | Agressif | Écaille de Wyverne |
| Essaim de Guêpes Géantes | `MOB_AIR_003` | 10-15 | 500 (×20) | 15% | Agressif (attirées par le métal poli) | Miel Royal (rare) |
| Dragon de Brume (rare) | `MOB_AIR_004` | 35-45 | 30000 | 2% | Agressif | Souffle de Brume (sort), Écaille de Brume |

---

## Ressources Récoltables

| Ressource | Type | Spawn | Compétence Requise |
|---|---|---|---|
| Cristal de Ciel | Minerai | Îlots flottants | Minage Lv.20 |
| Mousse des Nuages | Plante | Surface des îlots | Herboristerie Lv.15 |
| Caisse Tombée | Matériau (rare) | Épaves de livraisons | Perception Lv.15 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Îlot de l'Enclume** | Repos MP + station de réparation à mi-parcours |
| **Panorama d'Yggdrasil** | Cinématique de 5s à la première traversée |
| **Balise du Poinçon d'Or** | Balise de la première guilde — toucher la balise en vol : buff « Main Sûre » (+5% craft, 1h) |

---

## Lore / Histoire

La Route du Fer est née d'un contrat : quand Alne devint la place de marché centrale d'Alfheim, Brokkheim s'engagea à livrer « par tous les temps, sous toutes les flèches ». Les convoyeurs leprechauns en ont fait un code d'honneur — on raconte qu'aucune caisse scellée du poinçon de la Forge-Mère n'est jamais arrivée en retard. Ouverte en vol par des pillards, oui. En retard, jamais.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `✈️ Vol Brokkheim → Alne` |
| **Description du Groupe** | `Route aérienne vers la capitale neutre. 🕐 Trajet: 15 min. ⚠️ Zone PvP — les cargaisons attirent les pillards. Commandes: !atterrir, !accélérer, !esquiver.` |
| **Règles Affichées** | `1. Transit — arrivée automatique après 15 min. 2. Vous pouvez être attaqué en vol. 3. Contrats d'escorte disponibles au départ.` |

---

> *« Par tous les temps, sous toutes les flèches. »* — Devise des Convoyeurs, gravée sur l'Îlot de l'Enclume
