# ♨️ VALLÉE DES GEYSERS — Zone de Chasse Leprechaun (Débutant)

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_LEP_HUNT_001` |
| **Nom Officiel** | Vallée des Geysers |
| **Surnoms** | « La Marmite », « Le Jardin Bouillant » |
| **Type** | Champ géothermique / Zone de Chasse (Tier 1) |
| **Territoire** | Leprechaun (zone intérieure) |
| **Safe Zone** | ❌ Non — PK autorisé (risque faible, zone patrouillée) |
| **Niveau Recommandé** | 5 – 15 |
| **Statut The Seed** | Zone persistante — Respawn mobs toutes les 180 secondes |

---

## Description Atmosphérique

La Vallée des Geysers est le réservoir d'énergie sauvage de Brokkheim : des dizaines de colonnes d'eau bouillante jaillissent selon des cycles que le Cardinal affiche par des grondements précurseurs de 3 secondes. Les apprentis forgerons y apprennent deux choses : lire le terrain, et courir. Les geysers sont autant des pièges (800 dégâts de vapeur) que des outils — un mob pris dans un jet est cuit sur place, technique de chasse officieusement enseignée.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Vapeur, bruine chaude permanente |
| **Cycle Jour** | 06h00 – 20h00 |
| **Cycle Nuit** | 20h00 – 06h00 (geysers luminescents — minéraux phosphorescents) |
| **Événements Météo Rares** | Grande Éruption (tous les geysers en simultané — zone létale hors passerelles 5 min) |
| **Température Simulée** | 26°C – 38°C |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Brokkheim (Capitale) | `ZONE_LEP_CAP_001` | `!marcher nord` | 0 MP | 2 min |
| Champs de Scories | `ZONE_LEP_HUNT_002` | `!marcher ouest` | 0 MP | 6 min |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Guide Thermal Piotr** | Quête tutorielle « Lire la Marmite » (Lv.5) | Passerelle Centrale |
| **Récolteuse Inga** | Rachat de soufre et glandes, vend bottes isolantes | Passerelle Centrale |
| **Patrouille Leprechaun (×2)** | Dissuasion anti-PK (zone débutant) | Passerelles |

---

## Mobs Spawnable

| Mob | ID | Niveau | HP | Taux d'Apparition | Agressivité | Drop Notable |
|---|---|---|---|---|---|---|
| Salamandre de Vapeur | `MOB_LEP_010` | 5-8 | 600-900 | 30% | Neutre | Glande Bouillante |
| Crabe Bouilloire Adulte | `MOB_LEP_011` | 8-12 | 1500-2100 | 25% | Agressif (pince = immobilisation 2s) | Carapace Émaillée, Chair Ébouillantée |
| Élémentaire de Vapeur | `MOB_LEP_012` | 6-10 | 800-1200 | 25% | Agressif (invisible dans les nappes de vapeur) | Essence de Vapeur |
| Tortue-Geyser | `MOB_LEP_013` | 10-15 | 2000-2800 | 20% | Passif (crache un jet bouillant si approchée) | Écaille Thermale |

---

## Ressources Récoltables

| Ressource | Type | Spawn | Compétence Requise |
|---|---|---|---|
| Soufre Cristallisé | Minerai | Bords de geysers | Minage Lv.5 |
| Boue Minérale | Matériau | Bassins tièdes | Herboristerie Lv.3 |
| Algue Rouge Thermale | Plante | Bassins chauds | Herboristerie Lv.8 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Passerelle Centrale** | Réseau de planches surélevées — seul chemin sûr pendant les éruptions |
| **Le Vieux Fidèle** | Geyser précis comme une horloge (éruption toutes les 10 min) — rite de saut des apprentis |
| **Bassin d'Émeraude** | Eau riche en minéraux — buff « Peau Trempée » (+5% défense, 30 min) |
| **Pierre de Sauvegarde** | Point de téléportation enregistrable |

---

## Lore / Histoire

Avant d'alimenter les forges, la Vallée a failli tuer les fondateurs de Brokkheim : les premiers campements furent ébouillantis trois fois avant que Brokk n'ait l'idée de cartographier les cycles au lieu de maudire le sol. La carte originale des geysers, gravée sur une plaque de cuivre, est toujours mise à jour à la main — dernier travail collectif où chaque maître-forgeron grave sa propre correction.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `♨️ Vallée des Geysers — Chasse Lv.5-15` |
| **Description du Groupe** | `Zone de chasse débutant Leprechaun. Mobs Lv.5-15. ⚠️ Geysers : 3 secondes de grondement avant le jet ! !chasser !mine !récolter` |
| **Règles Affichées** | `1. Zone PvP faible — patrouilles actives. 2. Restez sur les passerelles pendant les éruptions. 3. Pas de kill-steal.` |

---

> *« Trois secondes de grondement, une vie de regret. Compte, petit, compte. »* — Guide Thermal Piotr
