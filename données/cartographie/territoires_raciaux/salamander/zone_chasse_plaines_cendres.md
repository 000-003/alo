# 🌋 PLAINES DE CENDRES — Zone de Chasse Salamander (Niveau Bas)

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_SAL_HUNT_001` |
| **Nom Officiel** | Plaines de Cendres |
| **Surnoms** | « Les Champs Calcinés », « Le Désert Rouge » |
| **Type** | Plaine Volcanique / Zone de Chasse |
| **Territoire** | Salamander |
| **Safe Zone** | ❌ Non — PK autorisé |
| **Niveau Recommandé** | 1 – 15 |
| **Statut The Seed** | Zone persistante — Respawn mobs toutes les 180 secondes |

---

## Description Atmosphérique

Les Plaines de Cendres s'étendent au sud de Gattan comme une mer de poussière grise et rouge que le vent soulève en tourbillons suffocants. Le sol est une croûte volcanique craquelée, parsemée de geysers fumants qui crachent périodiquement des jets de vapeur brûlante — le système Cardinal les utilise comme pièges environnementaux qui infligent des dégâts de feu aux joueurs imprudents. Des formations rocheuses de basalte noir se dressent çà et là comme des doigts de géants pétrifiés, offrant des points d'observation et des couvertures tactiques.

La végétation est rare mais étrangement belle : des fleurs de feu — des plantes endémiques générées par The Seed — poussent dans les fissures de la croûte volcanique, leurs pétales rougeoyants émettant une chaleur douce et une lueur qui les rend visibles à des dizaines de mètres. Des coulées de lave refroidie forment des rivières de roche noire vitrifiée qui scintillent comme de l'obsidienne sous la lumière du soleil rouge.

L'horizon est perpétuellement brouillé par la brume de chaleur et les panaches de cendres qui s'élèvent du volcan de Gattan. Le ciel est d'un orange permanent le jour, virant au rouge sang au crépuscule. La nuit, les coulées de lave encore actives illuminent le paysage d'une lueur infernale, et les geysers deviennent des fontaines de lumière dans l'obscurité. C'est un environnement hostile mais fascinant, parfaitement adapté à l'entraînement des jeunes guerriers Salamander.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Sec, brume de chaleur, pluie de cendres occasionnelle |
| **Cycle Jour** | 06h00 – 20h00 (ciel orange, visibilité moyenne) |
| **Cycle Nuit** | 20h00 – 06h00 (lueur des coulées, ciel rouge sombre) |
| **Événements Météo Rares** | Tempête de Cendres (-50% visibilité, +20% spawn de mobs rares) |
| **Température Simulée** | 35°C – 50°C |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Gattan (Capitale) | `ZONE_SAL_CAP_001` | `!marcher nord` | 0 MP | 2 min |
| Désolation de Magma | `ZONE_SAL_HUNT_002` | `!marcher ouest` | 0 MP | 6 min |
| Route Aérienne Gattan → Alne | `ZONE_ROUTE_SAL_ALN` | `!voler alne` | 100 MP | 15 min |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Instructeur Blazkov** | Tutoriel combat — Combos et Sword Skills | Campement d'Entraînement |
| **Prospecteur Gundrik** | Quête « Les Veines d'Obsidienne » (Lv.5) | Formation Rocheuse Est |
| **Marchande de Survie Helga** | Potions de résistance au feu, eau, rations | Oasis de Pierre |

---

## Mobs Spawnable

| Mob | ID | Niveau | HP | Taux d'Apparition | Agressivité | Drop Notable |
|---|---|---|---|---|---|---|
| Lézard de Cendres | `MOB_SAL_010` | 1-3 | 60-100 | 35% | Passif | Queue de Lézard |
| Scarabée de Braise | `MOB_SAL_002` | 5-8 | 200-350 | 25% | Passif | Carapace Ardente |
| Serpent de Lave Mineur | `MOB_SAL_011` | 6-10 | 400-600 | 15% | Agressif | Croc de Lave |
| Golem de Cendres | `MOB_SAL_012` | 8-12 | 800-1200 | 12% | Agressif | Cœur de Cendres |
| Phénix Juvénile | `MOB_SAL_005` | 10-15 | 1500-2000 | 8% | Agressif | Plume de Phénix |
| Élémentaire de Magma (mini-boss) | `MOB_SAL_013` | 15 | 5000 | 5% | Agressif | Noyau Magmatique (rare) |

---

## Ressources Récoltables

| Ressource | Type | Spawn | Compétence Requise |
|---|---|---|---|
| Fleur de Feu | Plante | Fissures volcaniques | Herboristerie Lv.1 |
| Cendre Fertile | Matériau | Partout | Récolte Lv.1 |
| Obsidienne Brute | Minerai | Coulées refroidies | Minage Lv.5 |
| Soufre Jaune | Minerai | Geysers | Minage Lv.3 |
| Scorpion de Lave | Familier | Sous les roches | Dressage Lv.5 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Campement d'Entraînement** | Zone tutoriel Salamander — Mannequins de combat |
| **Geyser Central** | Piège environnemental + Point de récolte de Soufre |
| **Oasis de Pierre** | Zone semi-safe — Regen HP/MP accélérée |
| **Fossile de Dragon** | Squelette géant — Quête cachée « L'Âme du Dragon Ancien » |
| **Pierre de Téléportation** | Marquage de point de voyage rapide |

---

## Lore / Histoire

Les Plaines de Cendres sont le champ d'entraînement traditionnel des recrues Salamander. Selon la mythologie du Cardinal, ces plaines étaient autrefois une forêt luxuriante qui a été carbonisée par le souffle du Premier Dragon, une créature divine qui a donné aux Salamander leur affinité avec le feu. Le fossile de ce dragon se trouve encore au centre des plaines, et la légende raconte que quiconque restaurera son âme obtiendra le pouvoir de chevaucher les flammes elles-mêmes.

Les Plaines de Cendres sont aussi le théâtre de rites d'initiation Salamander : chaque nouveau guerrier doit survivre seul pendant une nuit complète dans les plaines pour prouver sa valeur. Ce rituel est reproduit dans le jeu par une quête d'initiation optionnelle qui octroie le titre « Né des Cendres ».

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🌋 Plaines de Cendres — Chasse Lv.1-15` |
| **Description du Groupe** | `Zone de chasse débutante Salamander. 🔥 PK autorisé. Mobs Lv.1-15. Attention aux geysers ! !chasser !récolter !esquiver` |
| **Règles Affichées** | `1. Les geysers infligent des dégâts — restez vigilants. 2. PvP autorisé avec pénalité karma. 3. Pas de grief.` |

---

> *« La cendre est la preuve que quelque chose a brûlé. Brûle plus fort que ce qui t'entoure. »* — Instructeur Blazkov
