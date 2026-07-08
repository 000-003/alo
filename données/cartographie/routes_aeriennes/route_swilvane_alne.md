# ✈️ ROUTE AÉRIENNE SWILVANE → ALNE — Couloir de Vol Sylph

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_ROUTE_SYL_ALN` |
| **Nom Officiel** | Route Aérienne Swilvane – Alne |
| **Surnoms** | « Le Couloir Émeraude », « L'Autoroute du Zéphyr » |
| **Type** | Route Aérienne |
| **Territoire** | Neutre (espace aérien international) |
| **Safe Zone** | ❌ Non — PK autorisé (embuscades aériennes fréquentes) |
| **Niveau Recommandé** | 10 – 99 |
| **Statut The Seed** | Zone de transit — pas de sauvegarde de position |

---

## Description Atmosphérique

La Route Aérienne entre Swilvane et Alne est un corridor de vol qui s'étend sur des kilomètres de ciel ouvert au-dessus des terres d'Alfheim. Dès que le joueur quitte les remparts de Swilvane et s'élance vers le nord-est, le paysage défile sous lui en un panorama à couper le souffle : les prairies émeraude du territoire Sylph cèdent progressivement la place à des forêts mixtes, puis à des collines rocailleuses parsemées de lacs miroitants, avant que la silhouette monumentale d'Yggdrasil n'emplisse l'horizon.

Le système Cardinal génère des courants aériens dynamiques le long de cette route — des courants porteurs qui accélèrent le vol des joueurs (+20% vitesse) alternent avec des zones de turbulence qui ralentissent et déstabilisent. Le ciel est un dégradé perpétuel : vert émeraude au départ de Swilvane, il vire progressivement au bleu azur puis au doré à l'approche d'Alne, où la lumière d'Yggdrasil baigne tout dans une aura sacrée.

Des îlots flottants parsèment le trajet — vestiges de terre arrachés au sol par la magie d'Yggdrasil — offrant des points de repos temporaires où les joueurs peuvent atterrir pour régénérer leurs MP avant de reprendre leur vol. Ces îlots sont également des spots d'embuscade prisés par les joueurs PK, qui s'y cachent pour fondre sur les voyageurs solitaires.

Le trajet complet dure environ 15 minutes en vol continu, mais peut être réduit à 10 minutes pour les Sylph grâce à leur bonus racial de vitesse de vol. Le coût en MP est de 100 points, rendant ce voyage impossible pour les joueurs de trop bas niveau.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Variable — change selon la zone survolée |
| **Section 1 (Swilvane)** | Vent porteur, ciel émeraude |
| **Section 2 (Terres neutres)** | Turbulences possibles, ciel azur |
| **Section 3 (Approche Alne)** | Calme, lumière dorée d'Yggdrasil |
| **Événements Météo Rares** | Tempête Aérienne (vol impossible, atterrissage forcé sur îlot) |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Swilvane (départ) | `ZONE_SYL_CAP_001` | `!atterrir swilvane` | 0 MP | Instantané |
| Alne — Place Centrale | `ZONE_NEU_ALNE_001` | `!atterrir alne` | 0 MP | Arrivée auto en 15 min |
| Îlot Flottant n°1 | (point de repos) | `!atterrir îlot` | 0 MP | Variable |
| Route Aérienne Cait Sith → Alne | `ZONE_ROUTE_CAI_ALN` | `!bifurquer sud-est` | 20 MP | 5 min |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Vigie Aérienne Sylph** | Alerte sur les joueurs PK dans le couloir | Point de départ (Swilvane) |
| **Marchand Volant Pipo** | Vend des potions de MP en vol (prix majoré ×2) | Îlot Flottant n°1 |

---

## Mobs Spawnable

| Mob | ID | Niveau | HP | Taux d'Apparition | Agressivité | Drop Notable |
|---|---|---|---|---|---|---|
| Griffon Sauvage | `MOB_AIR_001` | 15-25 | 3000-5000 | 20% | Agressif | Plume de Griffon, Griffe Dorée |
| Wyverne Mineure | `MOB_AIR_002` | 20-30 | 5000-8000 | 10% | Agressif | Écaille de Wyverne |
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
| **Îlot du Repos** | Point de régénération MP à mi-parcours |
| **Panorama d'Yggdrasil** | Point de vue scripté — cinématique de 5 secondes montrant l'Arbre-Monde (première traversée) |
| **Zone de Turbulence** | Épreuve de vol — réussite = bonus XP de vol, échec = dégâts mineurs |
| **Nid de Griffon** | Coffre caché sur un îlot élevé (nécessite Vol Lv.30) |

---

## Lore / Histoire

Les Routes Aériennes d'ALfheim Online sont les artères vitales du monde. Avant la découverte du système de portails de téléportation, tout commerce, toute diplomatie et toute guerre passaient par ces couloirs de ciel. La route Swilvane–Alne est l'une des plus anciennes et des plus empruntées, car les Sylph furent parmi les premiers à tenter l'ascension d'Yggdrasil lors de la Quête du Roi des Fées.

Cette route a été le théâtre de la célèbre « Course Vers Alne » lors de laquelle Leafa et Kirito ont volé à toute vitesse pour atteindre le sommet d'Yggdrasil, poursuivis par une armée entière de Salamander. Les courants aériens de cette route sont réputés pour être les plus favorables aux Sylph, ce qui explique pourquoi cette faction domine historiquement le commerce aérien d'Alfheim.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `✈️ Vol Swilvane → Alne` |
| **Description du Groupe** | `Route aérienne vers la capitale neutre. 🕐 Trajet: 15 min. ⚠️ Zone PvP — Embuscades possibles. Commandes: !atterrir, !accélérer, !esquiver.` |
| **Règles Affichées** | `1. Vous êtes en transit — arrivée automatique après 15 min. 2. Vous pouvez être attaqué en vol. 3. !atterrir pour vous arrêter sur un îlot.` |

---

> *« Le ciel entre Swilvane et Alne est le plus beau spectacle d'Alfheim. Mais n'oubliez pas de regarder derrière vous. »* — Vigie Aérienne Sylph
