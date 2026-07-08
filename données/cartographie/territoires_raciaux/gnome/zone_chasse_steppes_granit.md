# 🪨 STEPPES DE GRANIT — Zone de Chasse Gnome (Débutant)

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_GNO_HUNT_001` |
| **Nom Officiel** | Steppes de Granit |
| **Surnoms** | « Le Plateau des Cailloux », « L'École de la Pioche » |
| **Type** | Steppe rocailleuse / Zone de Chasse (Tier 1) |
| **Territoire** | Gnome (zone intérieure) |
| **Safe Zone** | ❌ Non — PK autorisé (risque faible, zone patrouillée) |
| **Niveau Recommandé** | 5 – 15 |
| **Statut The Seed** | Zone persistante — Respawn mobs toutes les 180 secondes |

---

## Description Atmosphérique

Plateau balayé par les vents au pied de Granzam, les Steppes de Granit sont un champ d'affleurements rocheux où chaque rocher peut être un minerai, un abri — ou une marmotte cuirassée de très mauvaise humeur. C'est ici que les Gnomes envoient leurs apprentis avec une pioche et un conseil : « frappe d'abord, identifie ensuite ». Le gibier y est aussi coriace que le sol.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Venteux, sec, ciel dégagé |
| **Cycle Jour** | 06h00 – 20h00 |
| **Cycle Nuit** | 20h00 – 06h00 (golems miniatures actifs) |
| **Événements Météo Rares** | Pluie de Grêlons (abris obligatoires — dégâts continus à découvert) |
| **Température Simulée** | 5°C – 18°C |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Granzam (Capitale) | `ZONE_GNO_CAP_001` | `!marcher nord` | 0 MP | 2 min |
| Carrières Brisées | `ZONE_GNO_HUNT_002` | `!marcher ouest` | 0 MP | 6 min |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Vieux Piocheur Grom** | Quête tutorielle « Ta Première Veine » (Lv.5) | Abri du Cairn |
| **Cantinière Bertha** | Soupe de pierre (buff VIT +5%, 30 min), rachat de minerais | Abri du Cairn |
| **Patrouille Gnome (×2)** | Dissuasion anti-PK (zone débutant) | Sentiers de convois |

---

## Mobs Spawnable

| Mob | ID | Niveau | HP | Taux d'Apparition | Agressivité | Drop Notable |
|---|---|---|---|---|---|---|
| Sanglier des Steppes | `MOB_GNO_010` | 5-8 | 700-1000 | 30% | Passif → charge | Défense Courte, Viande Ferme |
| Loup Gris des Plateaux | `MOB_GNO_011` | 8-12 | 1400-2000 | 25% | Agressif (meute de 3) | Croc Gris |
| Taupe Géante | `MOB_GNO_012` | 6-10 | 900-1300 | 25% | Neutre (surgit près des mineurs) | Griffe de Terrassier |
| Golem Mineur Instable | `MOB_GNO_013` | 10-15 | 1900-2600 | 20% | Agressif (explose à 10% HP) | Noyau de Golem |

---

## Ressources Récoltables

| Ressource | Type | Spawn | Compétence Requise |
|---|---|---|---|
| Minerai de Fer | Minerai | Affleurements | Minage Lv.5 |
| Minerai d'Étain | Minerai | Affleurements | Minage Lv.8 |
| Chardon de Roche | Plante | Fissures | Herboristerie Lv.3 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Abri du Cairn** | Refuge couvert — régénération HP/MP accélérée, protection anti-grêle |
| **Champ de Menhirs Renversés** | Vestiges d'un golem colossal — coffre sous le « crâne » (`!fouiller menhir`) |
| **Convoi des Minerais** | Événement d'escorte quotidien (12h00) — récompenses de groupe |
| **Pierre de Sauvegarde** | Point de téléportation enregistrable |

---

## Lore / Histoire

Les Steppes sont l'école nationale gnome : chaque citoyen de Granzam y a cassé son premier caillou et sa première dent. Les menhirs renversés du plateau seraient les restes du Golem Primordial que les fondateurs durent démonter pierre par pierre pour bâtir la capitale — la tradition exige de reposer un caillou sur le tas à chaque passage, « au cas où il se recompterait ».

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🪨 Steppes de Granit — Chasse Lv.5-15` |
| **Description du Groupe** | `Zone de chasse débutant Gnome. Mobs Lv.5-15. Convoi d'escorte quotidien à 12h00 ! !chasser !mine !récolter` |
| **Règles Affichées** | `1. Zone PvP faible — patrouilles actives. 2. Pas de kill-steal. 3. Les veines de minerai se partagent (3 coups par joueur).` |

---

> *« Ici, même les marmottes ont une armure. Pose ta pioche et écoute la leçon. »* — Vieux Piocheur Grom
