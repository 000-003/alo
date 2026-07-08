# 🏚️ RUINES NOIRES — Zone de Chasse Spriggan (Débutant)

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_SPR_HUNT_001` |
| **Nom Officiel** | Ruines Noires |
| **Surnoms** | « Le Quartier d'En-Bas », « Le Bac à Fouilles » |
| **Type** | Champ de ruines / Zone de Chasse (Tier 1) |
| **Territoire** | Spriggan (zone intérieure) |
| **Safe Zone** | ❌ Non — PK autorisé (risque faible, zone patrouillée) |
| **Niveau Recommandé** | 5 – 15 |
| **Statut The Seed** | Zone persistante — Respawn mobs toutes les 180 secondes |

---

## Description Atmosphérique

Prolongement sud de la cité antique, les Ruines Noires doivent leur nom à la pierre calcinée de leurs murs — noircie par un événement que la Bibliothèque Enterrée n'a pas encore « fini de traduire ». C'est le terrain d'apprentissage des jeunes Spriggans : on y apprend à fouiller (le Trésor Hunting est un talent racial), à distinguer une vraie porte d'une illusion, et à ne PAS lire les inscriptions à voix haute. Le Cardinal y cache des micro-trésors re-générés quotidiennement.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Gris, bruine fine, silence anormal |
| **Cycle Jour** | 06h00 – 20h00 |
| **Cycle Nuit** | 20h00 – 06h00 (feux follets actifs, +15% spawn) |
| **Événements Météo Rares** | Lune Noire (les inscriptions murales deviennent lisibles — quêtes cachées) |
| **Température Simulée** | 8°C – 15°C |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Penwether (Capitale) | `ZONE_SPR_CAP_001` | `!marcher nord` | 0 MP | 2 min |
| Terres Grises | `ZONE_SPR_HUNT_002` | `!marcher ouest` | 0 MP | 6 min |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Fouilleuse Retraitée Edda** | Quête tutorielle « Ta Première Trouvaille » (Lv.5) | Camp du Portique |
| **Estimateur Louche Baffle** | Identifie les trouvailles (`!appraise`), achète sans reçu | Camp du Portique |
| **Patrouille Spriggan (×2)** | Dissuasion anti-PK (zone débutant) | Rues effondrées |

---

## Mobs Spawnable

| Mob | ID | Niveau | HP | Taux d'Apparition | Agressivité | Drop Notable |
|---|---|---|---|---|---|---|
| Squelette Errant | `MOB_SPR_010` | 5-8 | 650-950 | 30% | Agressif (lent) | Ossement Poli |
| Feu Follet des Ruines | `MOB_SPR_011` | 6-10 | 700-1000 | 25% | Neutre (attire vers les pièges) | Essence Follette |
| Statue Animée Mineure | `MOB_SPR_012` | 8-12 | 1600-2200 | 25% | Passif → agressif si on fouille « sa » salle | Fragment Sculpté |
| Corbeau Spectral Adulte | `MOB_SPR_013` | 10-15 | 1400-2000 | 20% | Agressif (vole 1 objet, le lâche à sa mort) | Plume d'Encre |

---

## Ressources Récoltables

| Ressource | Type | Spawn | Compétence Requise |
|---|---|---|---|
| Fleur de Gravats | Plante | Cours intérieures | Herboristerie Lv.3 |
| Pierre Noircie | Minerai | Murs effondrés | Minage Lv.5 |
| Relique Mineure | Trésor | Fouille (`!fouiller`) — quotidien | Perception Lv.5 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Camp du Portique** | Feu de camp sous le dernier portique debout — régénération HP/MP accélérée |
| **La Fresque Muette** | Mur peint dont les personnages changent de position entre deux visites |
| **Puits aux Échos Vides** | Y jeter 1 Yrd = un indice de fouille aléatoire (vrai 2 fois sur 3) |
| **Pierre de Sauvegarde** | Point de téléportation enregistrable |

---

## Lore / Histoire

Les Ruines Noires sont le seul endroit du territoire où les illusions spriggans ne tiennent pas : elles s'éteignent au contact de la pierre calcinée, ce qui en fait paradoxalement l'endroit le plus honnête du royaume des menteurs. La tradition veut que chaque jeune Spriggan y déterre sa « première trouvaille » — et que l'Estimateur la déclare sans valeur, quelle qu'elle soit. C'est une leçon, pas une arnaque. Enfin, c'est ce qu'on dit aux jeunes.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🏚️ Ruines Noires — Chasse Lv.5-15` |
| **Description du Groupe** | `Zone de chasse débutant Spriggan. Mobs Lv.5-15. Trésors cachés re-générés chaque jour ! !chasser !fouiller !récolter` |
| **Règles Affichées** | `1. Zone PvP faible — patrouilles actives. 2. Pas de kill-steal. 3. Première fouille d'une salle = priorité au premier arrivé.` |

---

> *« Ne lis jamais un mur à voix haute. Si c'était écrit pour être lu, ça n'aurait pas survécu à l'incendie. »* — Fouilleuse Edda
