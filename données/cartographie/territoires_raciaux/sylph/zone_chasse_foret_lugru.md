# 🌲 FORÊT DE LUGRU — Zone de Chasse Sylph (Niveau Moyen)

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_SYL_HUNT_002` |
| **Nom Officiel** | Forêt de Lugru |
| **Surnoms** | « Le Corridor des Ombres Vertes », « La Frontière Sombre » |
| **Type** | Forêt / Zone de Chasse |
| **Territoire** | Sylph (zone frontalière contestée avec les Salamander) |
| **Safe Zone** | ❌ Non — PK autorisé (zone à haut risque PvP) |
| **Niveau Recommandé** | 15 – 35 |
| **Statut The Seed** | Zone persistante — Respawn mobs toutes les 240 secondes |

---

## Description Atmosphérique

La Forêt de Lugru est un labyrinthe végétal oppressant qui marque la frontière occidentale du territoire Sylph. Contrairement aux prairies lumineuses et aux cieux dégagés qui caractérisent le cœur du pays Sylph, Lugru est un lieu de ténèbres vertes où la canopée est si dense que le soleil de Cardinal ne perce qu'en minces faisceaux dorés qui balaient le sous-bois comme des projecteurs divins. Les arbres sont des chênes millénaires aux troncs massifs, couverts de mousse phosphorescente et de lierre grimpant dont les vrilles semblent animées d'une vie propre.

Le sol est un tapis spongieux de feuilles mortes et de racines enchevêtrées que le moteur physique de The Seed rend traître — chaque pas produit un craquement humide, et les joueurs qui ne font pas attention peuvent trébucher sur les racines émergentes, subissant un léger stun de 0.5 seconde. Des champignons géants aux chapeaux luminescents parsèment les clairières, émettant une lueur bleutée qui sert de repère naturel dans ce dédale. L'atmosphère sonore est lourde : cris d'oiseaux inconnus, bruissements dans les fourrés, et parfois le craquement sinistre d'une branche morte qui tombe.

C'est dans cette forêt que Leafa (Suguha/Kirito's sister) a rencontré pour la première fois Kirito sous sa forme Spriggan, un événement canonique qui a marqué l'histoire d'ALO. Le Corridor de Lugru — un passage souterrain naturel qui traverse la forêt — est l'un des chemins les plus directs entre le territoire Sylph et Alne, mais aussi l'un des plus dangereux, car les Salamander y tendent régulièrement des embuscades.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Brumeux, lumière filtrée, humide |
| **Cycle Jour** | 06h00 – 20h00 (pénombre constante sous la canopée) |
| **Cycle Nuit** | 20h00 – 06h00 (obscurité quasi totale, bioluminescence active) |
| **Événements Météo Rares** | Brouillard Épais (visibilité réduite à 5m, mobs élites apparaissent) |
| **Température Simulée** | 12°C – 18°C |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Swilvane (Capitale Sylph) | `ZONE_SYL_CAP_001` | `!voler est` | 30 MP | 5 min |
| Prairies de Sylvain | `ZONE_SYL_HUNT_001` | `!marcher est` | 0 MP | 5 min |
| Donjon du Vent Hurlant | `ZONE_SYL_DUN_001` | `!marcher nord` | 0 MP | 8 min |
| Désolation de Magma (frontière Salamander) | `ZONE_SAL_HUNT_002` | `!marcher ouest` | 0 MP | 12 min |
| Collines de l'Ouest (frontière Cait Sith) | `ZONE_CAI_HUNT_002` | `!marcher nord` | 0 MP | 12 min |
| Corridor Souterrain de Lugru | `ZONE_ROUTE_LUGRU` | `!entrer corridor` | 0 MP | 3 min |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Éclaireur Veylin** | Quête « Cartographier la Forêt » (Lv.15) | Entrée Est |
| **Ermite Gorath** | Marchand clandestin — Poisons, pièges | Cabane cachée (nécessite `!chercher cabane`) |
| **Garde-Frontière Sylph (×4)** | Patrouille — Alerte sur présence Salamander | Lisière Ouest |

---

## Mobs Spawnable

| Mob | ID | Niveau | HP | Taux d'Apparition | Agressivité | Drop Notable |
|---|---|---|---|---|---|---|
| Araignée des Bois | `MOB_SYL_020` | 15-18 | 1500-2000 | 25% | Agressif | Soie d'Araignée, Venin |
| Ent Corrompu | `MOB_SYL_021` | 20-25 | 3000-4500 | 15% | Agressif | Écorce Ancienne, Sève Magique |
| Loup Alpha Sylvestre | `MOB_SYL_022` | 18-22 | 2500-3500 | 15% | Agressif (meute de 3) | Croc du Chef, Fourrure Alpha |
| Serpent Brumeux | `MOB_SYL_023` | 16-20 | 1800-2800 | 20% | Agressif | Écaille Brumeuse |
| Champignon Animé | `MOB_SYL_024` | 15-17 | 1200-1600 | 15% | Passif → Agressif si attaqué | Spore Soporifique |
| Tréant Gardien (mini-boss) | `MOB_SYL_025` | 30-35 | 15000 | 5% | Agressif | Cœur de Tréant (rare), Bâton de Bois Vivant |
| Basilic de Lugru (boss de zone) | `MOB_SYL_026` | 35 | 50000 | 1% (spawn toutes les 6h) | Agressif | Œil de Basilic (épique), Titre « Tueur de Lugru » |

---

## Ressources Récoltables

| Ressource | Type | Spawn | Compétence Requise |
|---|---|---|---|
| Champignon Lugru | Plante | Sous les arbres | Herboristerie Lv.10 |
| Mousse Phosphorescente | Plante | Troncs d'arbres | Herboristerie Lv.15 |
| Bois de Chêne Ancien | Bois | Partout | Bûcheronnage Lv.15 |
| Minerai de Fer Forestier | Minerai | Affleurements rocheux | Minage Lv.12 |
| Racine de Mandragore | Plante (rare) | Clairières de champignons | Herboristerie Lv.20 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Clairière de la Rencontre** | Lieu canonique où Kirito (Spriggan) a rencontré Leafa (Sylph) — Plaque commémorative |
| **Le Grand Chêne Creux** | Arbre géant contenant un coffre caché (nécessite `!fouiller chêne`, Perception Lv.15) |
| **Entrée du Corridor Souterrain** | Accès au passage souterrain vers les zones neutres / Alne |
| **Camp de Bandits** | Événement aléatoire — Joueurs PK ou PNJ bandits qui tendent des embuscades |
| **Pierre de Sauvegarde** | Point de téléportation enregistrable |

---

## Lore / Histoire

La Forêt de Lugru est le théâtre de conflits ancestraux entre les Sylph et les Salamander. Le nom « Lugru » vient d'un ancien mot elfique signifiant « passage entre les mondes », car la forêt forme une barrière naturelle entre le territoire verdoyant des Sylph et les terres volcaniques des Salamander. Le Corridor Souterrain de Lugru, un réseau de tunnels naturels sous la forêt, est le chemin le plus court vers Alne, mais il est infesté de mobs puissants et de joueurs PK.

Historiquement, la forêt a été le site de la célèbre « Embuscade de Lugru » où un bataillon Salamander mené par le Général Eugene a tenté d'intercepter les Sylph en route vers Alne. C'est Kirito, jouant en tant que Spriggan, qui a repoussé à lui seul l'avant-garde Salamander, un exploit qui est entré dans la légende d'ALO.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🌲 Forêt de Lugru — Chasse Lv.15-35` |
| **Description du Groupe** | `Forêt sombre à la frontière Sylph-Salamander. ⚠️ ZONE PVP ACTIVE. Mobs Lv.15-35. Boss « Basilic de Lugru » toutes les 6h. !chasser !récolter !chercher` |
| **Règles Affichées** | `1. Zone PvP haute — Préparez-vous au combat joueur. 2. Le boss de zone est partagé, premier arrivé premier servi. 3. Pas d'exploit de terrain.` |

---

> *« Si tu entends le bruissement des feuilles mais qu'il n'y a pas de vent... cours. »* — Éclaireur Veylin
