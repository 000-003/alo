# 🌄 COLLINES DE L'OUEST — Zone de Chasse Cait Sith (Frontalière)

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_CAI_HUNT_002` |
| **Nom Officiel** | Collines de l'Ouest |
| **Surnoms** | « Le Carrefour des Meutes », « Les Crêtes Grises » |
| **Type** | Collines / Zone de Chasse Frontalière (Tier 3) |
| **Territoire** | Cait Sith (frontières Sylph et Puca) |
| **Safe Zone** | ❌ Non — PK autorisé (zone frontalière à haut trafic) |
| **Niveau Recommandé** | 15 – 35 |
| **Statut The Seed** | Zone persistante — Respawn mobs toutes les 240 secondes |

---

## Description Atmosphérique

Succession de crêtes rocailleuses et de vallons brumeux, les Collines de l'Ouest relient trois territoires — les caravanes y croisent aussi bien des patrouilles Sylph que des colporteurs Puca. Les worgs y règnent en meutes organisées, et le vent qui s'engouffre entre les crêtes brouille l'ouïe : le Cardinal y réduit la portée de détection sonore de 50%, rendant les embuscades — de mobs comme de joueurs — redoutablement efficaces.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Venteux, brumes matinales dans les vallons |
| **Cycle Jour** | 06h00 – 20h00 |
| **Cycle Nuit** | 20h00 – 06h00 (meutes de worgs actives, +20% spawn) |
| **Événements Météo Rares** | Brume Totale (visibilité 5m — la Matriarche des Worgs sort de sa tanière) |
| **Température Simulée** | 10°C – 20°C |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Freelia (Capitale) | `ZONE_CAI_CAP_001` | `!voler est` | 30 MP | 5 min |
| Savane des Crocs | `ZONE_CAI_HUNT_001` | `!marcher est` | 0 MP | 6 min |
| Tanière du Roi Béhémoth | `ZONE_CAI_DUN_001` | `!marcher nord` | 0 MP | 8 min |
| Forêt de Lugru (frontière Sylph) | `ZONE_SYL_HUNT_002` | `!marcher sud` | 0 MP | 12 min |
| Bois des Échos (frontière Puca) | `ZONE_PUC_HUNT_002` | `!marcher nord-ouest` | 0 MP | 12 min |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Caravanier Puca Jorel** | Marchand itinérant — instruments et potions de sonorité | Col des Caravanes |
| **Éclaireuse Sylph Nael** | Quête « Rapport de Frontière » (Lv.18) | Crête Sud |
| **Garde-Frontière Cait Sith (×4)** | Alerte sur mouvements hostiles | Tours de guet |

---

## Mobs Spawnable

| Mob | ID | Niveau | HP | Taux d'Apparition | Agressivité | Drop Notable |
|---|---|---|---|---|---|---|
| Worg des Crêtes | `MOB_CAI_020` | 15-19 | 1600-2200 | 25% | Agressif (meute de 4) | Fourrure de Worg |
| Aigle Royal Sauvage | `MOB_CAI_021` | 17-22 | 1800-2600 | 20% | Agressif (attaque en piqué) | Serre Royale — **domptable** |
| Panthère Brumeuse | `MOB_CAI_022` | 20-25 | 2500-3400 | 15% | Agressif (furtif) | Pelage de Brume |
| Chèvre de Combat | `MOB_CAI_023` | 15-18 | 1400-1900 | 20% | Passif → charge | Corne Torsadée |
| Griffon Juvénile | `MOB_CAI_024` | 22-28 | 3200-4500 | 12% | Neutre — **domptable** (Beast Taming Lv.25) | Plume de Griffon |
| Chef de Meute Worg (mini-boss) | `MOB_CAI_025` | 30-33 | 14000 | 6% | Agressif | Croc Alpha (rare) |
| Matriarche des Worgs (boss de zone) | `MOB_CAI_026` | 35 | 48000 | 1% (spawn toutes les 6h) | Agressif | Cœur de la Meute (épique), Titre « Fléau des Collines » |

---

## Ressources Récoltables

| Ressource | Type | Spawn | Compétence Requise |
|---|---|---|---|
| Lichen des Crêtes | Plante | Rochers exposés | Herboristerie Lv.12 |
| Minerai de Cuivre | Minerai | Flancs de collines | Minage Lv.10 |
| Baie de Brume | Plante (rare) | Vallons brumeux | Herboristerie Lv.20 |
| Bois de Pin Noueux | Bois | Bosquets d'altitude | Bûcheronnage Lv.12 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Col des Caravanes** | Carrefour commercial tri-racial — événements de marché aléatoires |
| **Cairn de l'Alliance** | Monument Sakuya–Alicia Rue, borne frontière Sylph/Cait Sith |
| **Tanière Effondrée** | Coffre caché (`!fouiller tanière`, Perception Lv.18) |
| **Pierre de Sauvegarde** | Point de téléportation enregistrable |

---

## Lore / Histoire

Les Collines de l'Ouest ont toujours été une terre de passage plus que de conquête : trop pauvres pour être revendiquées, trop stratégiques pour être ignorées. Le Cairn de l'Alliance y marque l'endroit exact où Sakuya et Alicia Rue ont scellé le pacte Sylph–Cait Sith. Les meutes de worgs, elles, se moquent des traités — la Matriarche chasse indifféremment sur les trois territoires.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🌄 Collines de l'Ouest — Chasse Lv.15-35` |
| **Description du Groupe** | `Zone frontalière Cait Sith / Sylph / Puca. ⚠️ ZONE PVP ACTIVE. Mobs Lv.15-35, griffons domptables. Boss « Matriarche des Worgs » toutes les 6h. !chasser !tame !récolter` |
| **Règles Affichées** | `1. Zone PvP haute — préparez-vous au combat joueur. 2. Boss de zone partagé, premier arrivé premier servi. 3. Pas d'exploit de terrain.` |

---

> *« Trois drapeaux, aucune loi. Bienvenue aux Collines. »— Caravanier Jorel*
