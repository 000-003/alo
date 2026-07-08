# ✈️ ROUTE AÉRIENNE LIODA → ALNE — Couloir de Vol Puca

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_ROUTE_PUC_ALN` |
| **Nom Officiel** | Route Aérienne Lioda – Alne |
| **Surnoms** | « La Portée Céleste », « Le Couloir des Ménestrels » |
| **Type** | Route Aérienne |
| **Territoire** | Neutre (espace aérien international) |
| **Safe Zone** | ❌ Non — PK autorisé (embuscades aériennes) |
| **Niveau Recommandé** | 10 – 99 |
| **Statut The Seed** | Zone de transit — pas de sauvegarde de position |

---

## Description Atmosphérique

Le couloir Lioda–Alne est balisé par des carillons flottants suspendus à des îlots : les voyageurs naviguent littéralement à l'oreille, chaque carillon jouant une note de la gamme menant à Alne. Les courants y transportent les mélodies de la Cité-Partition sur des kilomètres — les bardes Puca en profitent pour lancer leurs buffs de groupe en plein vol, faisant de cette route la préférée des caravanes de raid en partance pour Yggdrasil.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Variable — change selon la zone survolée |
| **Section 1 (Lioda)** | Courants harmoniques stables (+10% vitesse pour les groupes en formation) |
| **Section 2 (Terres neutres)** | Turbulences dissonantes |
| **Section 3 (Approche Alne)** | Calme, lumière dorée d'Yggdrasil |
| **Événements Météo Rares** | Tempête Aérienne (vol impossible, atterrissage forcé sur îlot) |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Lioda (départ) | `ZONE_PUC_CAP_001` | `!atterrir lioda` | 0 MP | Instantané |
| Alne — Capitale Neutre | `ZONE_NEU_CAP_001` | `!atterrir alne` | 0 MP | Arrivée auto en 15 min |
| Îlot du Carillon Majeur (point de repos) | — | `!atterrir îlot` | 0 MP | Variable |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Vigie Mélomane Puca** | Alerte PK — siffle un motif d'alarme audible sur toute la route | Point de départ (Lioda) |
| **Barde Errant Solfa** | Vend potions de MP en vol (prix ×2) et buffs de voyage | Îlot du Carillon Majeur |

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
| **Îlot du Carillon Majeur** | Point de régénération MP à mi-parcours — le carillon buffe les groupes (+5% vitesse 10 min) |
| **Panorama d'Yggdrasil** | Cinématique de 5s à la première traversée |
| **Carillon Fêlé** | Coffre caché derrière la cloche brisée (Vol Lv.30) |

---

## Lore / Histoire

Les carillons de la route furent installés par les premiers ménestrels itinérants Puca pour guider les voyageurs sans carte : il suffit de suivre la gamme ascendante pour atteindre Alne, descendante pour rentrer à Lioda. Une superstition tenace veut qu'entendre le Carillon Fêlé sonner de lui-même annonce la mort d'un barde quelque part en Alfheim.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `✈️ Vol Lioda → Alne` |
| **Description du Groupe** | `Route aérienne vers la capitale neutre. 🕐 Trajet: 15 min. ⚠️ Zone PvP — Embuscades possibles. Commandes: !atterrir, !accélérer, !esquiver.` |
| **Règles Affichées** | `1. Transit — arrivée automatique après 15 min. 2. Vous pouvez être attaqué en vol. 3. !atterrir pour vous poser sur un îlot.` |

---

> *« Suis la gamme qui monte, et tu verras l'Arbre. Suis celle qui descend, et tu rentreras chanter. »* — Barde Errant Solfa
