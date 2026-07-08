# 🎶 PRAIRIES CHANTANTES — Zone de Chasse Puca (Débutant)

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_PUC_HUNT_001` |
| **Nom Officiel** | Prairies Chantantes |
| **Surnoms** | « Le Champ des Gammes », « L'Orchestre Vert » |
| **Type** | Prairie / Zone de Chasse (Tier 1) |
| **Territoire** | Puca (zone intérieure) |
| **Safe Zone** | ❌ Non — PK autorisé (risque faible, zone patrouillée) |
| **Niveau Recommandé** | 5 – 15 |
| **Statut The Seed** | Zone persistante — Respawn mobs toutes les 180 secondes |

---

## Description Atmosphérique

Chaque brin d'herbe des Prairies Chantantes est une anche naturelle : le vent y joue des accords changeants selon sa force et sa direction. Les jeunes bardes Puca viennent y apprendre à lire le vent avant de lire les partitions — un mob qui approche se trahit toujours par une dissonance. Le Cardinal utilise la trame sonore comme mécanique : les joueurs avec Perception Lv.5+ reçoivent une alerte textuelle quand la prairie « joue faux ».

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Vents musicaux légers, ensoleillé |
| **Cycle Jour** | 06h00 – 20h00 (gamme majeure) |
| **Cycle Nuit** | 20h00 – 06h00 (gamme mineure, mobs nocturnes) |
| **Événements Météo Rares** | Silence Soudain (5 min sans son — le Blaireau Sourd Géant rôde) |
| **Température Simulée** | 14°C – 22°C |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Lioda (Capitale) | `ZONE_PUC_CAP_001` | `!marcher nord` | 0 MP | 2 min |
| Bois des Échos | `ZONE_PUC_HUNT_002` | `!marcher ouest` | 0 MP | 6 min |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Barde Novice Lilou** | Quête tutorielle « Ta Première Note » (Lv.5) | Kiosque de Prairie |
| **Colporteur Sourdine** | Cordes de rechange, potions de MP | Kiosque de Prairie |
| **Patrouille Puca (×2)** | Dissuasion anti-PK (zone débutant) | Sentiers principaux |

---

## Mobs Spawnable

| Mob | ID | Niveau | HP | Taux d'Apparition | Agressivité | Drop Notable |
|---|---|---|---|---|---|---|
| Criquet Symphonique | `MOB_PUC_010` | 5-8 | 550-850 | 30% | Passif → agressif si attaqué | Patte Striduleuse |
| Bélier des Prairies | `MOB_PUC_011` | 8-12 | 1400-2000 | 25% | Passif → charge | Corne Sonore, Laine Épaisse |
| Fée Sifflotante | `MOB_PUC_012` | 6-10 | 700-1100 | 25% | Neutre (vole les objets non équipés) | Poussière Mélodique |
| Épouvantail Désaccordé | `MOB_PUC_013` | 10-15 | 1700-2400 | 20% | Agressif la nuit uniquement | Paille Maudite |

---

## Ressources Récoltables

| Ressource | Type | Spawn | Compétence Requise |
|---|---|---|---|
| Herbe-Anche | Plante | Partout | Herboristerie Lv.3 |
| Blé Doré | Plante | Parcelles cultivées | Herboristerie Lv.5 |
| Calcaire Résonnant | Minerai | Affleurements | Minage Lv.3 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Kiosque de Prairie** | Feu de camp musical — régénération HP/MP accélérée |
| **Cercle des Menhirs Accordés** | Frapper les menhirs dans le bon ordre (`!inspect menhir`) ouvre un coffre |
| **Colline du Soliste** | Point de vue — `!analyze` révèle tous les mobs de la zone |
| **Pierre de Sauvegarde** | Point de téléportation enregistrable |

---

## Lore / Histoire

Les Prairies Chantantes servent de conservatoire à ciel ouvert : la tradition Puca veut que chaque enfant y compose sa « note de naissance », rejouée à ses funérailles. L'Épouvantail Désaccordé serait le vestige d'un barde jaloux qui tenta de faire taire la prairie entière — le Cardinal l'a compilé en mob pour l'éternité.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🎶 Prairies Chantantes — Chasse Lv.5-15` |
| **Description du Groupe** | `Zone de chasse débutant Puca. Mobs Lv.5-15. La prairie joue faux quand un danger approche ! !chasser !récolter` |
| **Règles Affichées** | `1. Zone PvP faible — patrouilles actives. 2. Pas de kill-steal. 3. Les menhirs se partagent.` |

---

> *« Écoute la prairie. Si elle joue juste, chasse. Si elle joue faux, c'est toi le gibier. »* — Barde Novice Lilou
