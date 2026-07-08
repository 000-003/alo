# 🌾 PRAIRIES DE SYLVAIN — Zone de Chasse Sylph (Niveau Bas)

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_SYL_HUNT_001` |
| **Nom Officiel** | Prairies de Sylvain |
| **Surnoms** | « Les Champs du Zéphyr », « La Mer Verte » |
| **Type** | Plaine / Zone de Chasse |
| **Territoire** | Sylph |
| **Safe Zone** | ❌ Non — PK autorisé (pénalité karma) |
| **Niveau Recommandé** | 1 – 15 |
| **Statut The Seed** | Zone persistante — Respawn mobs toutes les 180 secondes |

---

## Description Atmosphérique

Les Prairies de Sylvain s'étendent à perte de vue au sud de Swilvane, un océan d'herbes hautes d'un vert lumineux qui ondulent sous les caresses du vent perpétuel du territoire Sylph. Le système Cardinal a généré ici un biome de prairie tempérée d'une beauté saisissante : chaque brin d'herbe est un polygone individuel animé par le moteur physique de The Seed, créant des vagues végétales hypnotiques qui roulent depuis l'horizon jusqu'aux pieds du joueur.

Des bosquets de bouleaux argentés parsèment la plaine à intervalles réguliers, offrant des zones d'ombre où les joueurs peuvent se reposer et régénérer leur HP naturellement. Des ruisseaux cristallins serpentent entre les collines douces, peuplés de poissons scintillants que les joueurs dotés de la compétence Pêche peuvent capturer. Le ciel au-dessus des prairies est d'un bleu immaculé le jour, traversé par des formations nuageuses que le Cardinal fait défiler en accéléré pour créer un effet de time-lapse permanent. La nuit, des lucioles par milliers émergent des herbes et transforment la plaine en un champ d'étoiles terrestres.

C'est ici que la plupart des joueurs Sylph font leurs premiers pas dans ALfheim Online. Les mobs y sont faibles mais suffisamment variés pour permettre l'apprentissage de toutes les mécaniques de combat — corps à corps, magie, vol et esquive aérienne. Des PNJ instructeurs patrouillent la zone pour guider les débutants.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Brise légère, ensoleillé |
| **Cycle Jour** | 06h00 – 20h00 (lumière dorée, ombres longues) |
| **Cycle Nuit** | 20h00 – 06h00 (lucioles, clair de lune) |
| **Événements Météo Rares** | Pluie Printanière (+10% taux de drop herbes) |
| **Température Simulée** | 20°C – 28°C |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Swilvane (Capitale) | `ZONE_SYL_CAP_001` | `!marcher nord` | 0 MP | 2 min |
| Forêt de Lugru | `ZONE_SYL_HUNT_002` | `!marcher ouest` | 0 MP | 5 min |
| Territoire Cait Sith (frontière) | `ZONE_CAI_HUNT_001` | `!marcher sud-est` | 0 MP | 10 min |
| Route Aérienne Swilvane → Alne | `ZONE_ROUTE_SYL_ALN` | `!voler alne` | 100 MP | 15 min |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Instructeur Galwen** | Tutoriel de combat de base | Colline du Premier Vol |
| **Berger Tomlin** | Quête « Les Moutons Égarés » (Lv.1) | Bosquet des Bouleaux |
| **Marchande Ambulante Rina** | Potions de soin basiques, flèches | Croisement des Chemins |

---

## Mobs Spawnable

| Mob | ID | Niveau | HP | Taux d'Apparition | Agressivité | Drop Notable |
|---|---|---|---|---|---|---|
| Lapin Cornu | `MOB_SYL_010` | 1-2 | 50-80 | 35% | Passif | Corne de Lapin (1 Yrd) |
| Brise-Papillon | `MOB_SYL_001` | 3-5 | 120-200 | 25% | Passif | Aile Irisée |
| Loup Sylvestre | `MOB_SYL_002` | 5-8 | 300-500 | 20% | Agressif (nuit) | Croc de Vent, Fourrure Verte |
| Guêpe Géante | `MOB_SYL_011` | 4-6 | 150-250 | 10% | Agressif | Dard Venimeux |
| Ours des Prairies | `MOB_SYL_012` | 8-12 | 800-1200 | 7% | Agressif | Griffe d'Ours, Peau Épaisse |
| Esprit du Vent (mini-boss) | `MOB_SYL_013` | 12-15 | 2000 | 3% | Agressif | Essence de Zéphyr (rare) |

---

## Ressources Récoltables

| Ressource | Type | Spawn | Compétence Requise |
|---|---|---|---|
| Herbe Sylvestre | Plante | Partout dans les prairies | Herboristerie Lv.1 |
| Trèfle Doré | Plante (rare) | Près des ruisseaux | Herboristerie Lv.5 |
| Fleur de Zéphyr | Plante | Collines ventées | Herboristerie Lv.3 |
| Poisson Vent-d'Argent | Poisson | Ruisseaux | Pêche Lv.1 |
| Pierre de Brise | Minerai | Affleurements rocheux | Minage Lv.3 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Colline du Premier Vol** | Point de tutoriel — Les nouveaux joueurs Sylph y apprennent les bases du vol |
| **Pierre de Téléportation** | Permet de marquer les Prairies comme point de téléportation rapide |
| **Cercle de Fées** | Anneau de champignons — Active un buff « Bénédiction Sylvestre » (+5% XP pendant 30 min) |
| **Ruines du Vieux Moulin** | Entrée cachée vers un mini-donjon optionnel (Lv.10+) |

---

## Lore / Histoire

Les Prairies de Sylvain doivent leur nom au premier Seigneur Sylph, Sylvain le Rapide, qui selon la légende pouvait traverser ces plaines en un battement d'aile. Avant la construction de Swilvane, les Sylph nomades campaient dans ces prairies et vivaient en harmonie avec les esprits du vent qui y résident encore sous forme de mobs. La légende raconte que quiconque capture l'Essence de Zéphyr dans ces champs pourra entendre le murmure du vent primordial qui a donné naissance aux Sylph.

Les prairies servent également de no man's land naturel entre le territoire Sylph et la frontière Cait Sith. Des escarmouches entre factions y éclatent régulièrement, ce qui explique la présence de patrouilles de gardes Sylph le long de la route principale.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🌾 Prairies de Sylvain — Chasse Lv.1-15` |
| **Description du Groupe** | `Zone de chasse débutante du territoire Sylph. ⚔️ PK autorisé ! Mobs Lv.1-15. Tapez !chasser pour engager un combat. !récolter pour les ressources.` |
| **Règles Affichées** | `1. Zone PvP — Attaquer un joueur inflige une pénalité karma. 2. Respectez le fair-play. 3. Pas de camping de spawn.` |

---

> *« C'est dans ces prairies que chaque Sylph apprend à voler. Et à tomber. »* — Instructeur Galwen
