# 🦇 CANYON DES OMBRES — Zone de Chasse Imp (Débutant)

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_IMP_HUNT_001` |
| **Nom Officiel** | Canyon des Ombres |
| **Surnoms** | « Le Berceau Noir », « Les Gorges Basses » |
| **Type** | Canyon / Zone de Chasse (Tier 1) |
| **Territoire** | Imp (zone intérieure) |
| **Safe Zone** | ❌ Non — PK autorisé (risque faible, zone patrouillée) |
| **Niveau Recommandé** | 5 – 15 |
| **Statut The Seed** | Zone persistante — Respawn mobs toutes les 180 secondes |

---

## Description Atmosphérique

Prolongement sud du canyon de Duskarn, les Gorges Basses forment un dédale de failles où la lumière n'entre qu'à la verticale de midi, pendant onze minutes exactement — les jeunes Imp appellent ce moment « l'Insulte ». Le Cardinal y applique un malus de visibilité aux races sans vision nocturne (-30% précision), faisant du canyon le terrain d'apprentissage idéal où les Imp découvrent leur avantage racial.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Pénombre permanente, air sec |
| **Cycle Jour** | 06h00 – 20h00 (pénombre — « l'Insulte » à 12h00, 11 min de soleil) |
| **Cycle Nuit** | 20h00 – 06h00 (obscurité totale, mobs +15% spawn) |
| **Événements Météo Rares** | Vent des Failles (hurlements naturels — masque tous les sons de combat) |
| **Température Simulée** | 6°C – 12°C |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Duskarn (Capitale) | `ZONE_IMP_CAP_001` | `!marcher nord` | 0 MP | 2 min |
| Falaises du Crépuscule | `ZONE_IMP_HUNT_002` | `!marcher ouest` | 0 MP | 6 min |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Instructeur Nocturne Vael** | Quête tutorielle « Tes Yeux dans le Noir » (Lv.5) | Camp de la Première Faille |
| **Ramasseuse Ciska** | Achat de composants d'ombre, vend torches (aux non-Imp, à prix d'or) | Camp de la Première Faille |
| **Patrouille Imp (×2)** | Dissuasion anti-PK (zone débutant) | Failles principales |

---

## Mobs Spawnable

| Mob | ID | Niveau | HP | Taux d'Apparition | Agressivité | Drop Notable |
|---|---|---|---|---|---|---|
| Chauve-Souris Vampirique | `MOB_IMP_010` | 5-8 | 500-800 | 30% | Agressif (nuée de 5) | Croc Fin, Membrane |
| Scorpion des Failles | `MOB_IMP_011` | 8-12 | 1300-1900 | 25% | Agressif (embuscade sous le sable) | Dard Venimeux |
| Ombre Rampante | `MOB_IMP_012` | 6-10 | 800-1200 | 25% | Agressif (invisible en obscurité totale) | Essence d'Ombre |
| Vautour des Gorges | `MOB_IMP_013` | 10-15 | 1600-2300 | 20% | Neutre (attaque les joueurs sous 30% HP) | Plume Charognarde |

---

## Ressources Récoltables

| Ressource | Type | Spawn | Compétence Requise |
|---|---|---|---|
| Lichen Noir | Plante | Parois basses | Herboristerie Lv.3 |
| Obsidienne Brute | Minerai | Éboulis | Minage Lv.5 |
| Œuf de Vautour | Matériau | Nids en corniche (Vol requis) | — |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Camp de la Première Faille** | Feu de camp couvert — régénération HP/MP accélérée |
| **Puits de Midi** | Seul point ensoleillé à 12h00 — les plantes rares y poussent (« l'Insulte ») |
| **Fissure Chuchotante** | Coffre caché (`!fouiller fissure`, Perception Lv.10) |
| **Pierre de Sauvegarde** | Point de téléportation enregistrable |

---

## Lore / Histoire

C'est dans ces gorges que les Imp enterrent symboliquement leur « premier reflet » : à l'adolescence, chaque Imp y passe une nuit seul sans lumière, et en ressort officiellement adulte — ou récupéré au matin par la patrouille, ce qui arrive plus souvent que la fierté raciale ne l'admet. Les Ombres Rampantes seraient les reflets jamais réclamés.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🦇 Canyon des Ombres — Chasse Lv.5-15` |
| **Description du Groupe** | `Zone de chasse débutant Imp. Mobs Lv.5-15. ⚠️ Malus de visibilité pour les races sans vision nocturne. !chasser !récolter` |
| **Règles Affichées** | `1. Zone PvP faible — patrouilles actives. 2. Pas de kill-steal. 3. Les torches s'achètent au camp.` |

---

> *« Le noir n'est pas vide. Il est simplement poli : il attend que tes yeux s'ouvrent. »* — Instructeur Vael
