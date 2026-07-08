# ⚒️ CARRIÈRES BRISÉES — Zone de Chasse Gnome (Frontalière)

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_GNO_HUNT_002` |
| **Nom Officiel** | Carrières Brisées |
| **Surnoms** | « La Cicatrice », « Le Chantier Sans Fin » |
| **Type** | Carrières à ciel ouvert / Zone de Chasse Frontalière (Tier 3) |
| **Territoire** | Gnome (frontières Spriggan et Salamander) |
| **Safe Zone** | ❌ Non — PK autorisé (zone frontalière disputée) |
| **Niveau Recommandé** | 15 – 35 |
| **Statut The Seed** | Zone persistante — Respawn mobs toutes les 240 secondes |

---

## Description Atmosphérique

Les Carrières Brisées sont une plaie ouverte dans le paysage : des gradins d'extraction abandonnés en pleine exploitation, des grues de bois figées et des wagonnets renversés sur des rails qui ne mènent plus nulle part. La roche y est saturée de minerais — c'est le meilleur spot de minage ouvert d'Alfheim, et le plus disputé : Spriggans au nord dans les Terres Grises, Salamanders au sud-est de l'autre côté de la Désolation de Magma, et des golems devenus fous entre les deux. Le Cardinal fait s'effondrer aléatoirement des pans de gradins, redessinant la topographie chaque semaine.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Poussiéreux, éboulements aléatoires |
| **Cycle Jour** | 06h00 – 20h00 |
| **Cycle Nuit** | 20h00 – 06h00 (golems +20% spawn) |
| **Événements Météo Rares** | Grand Effondrement (nouveau gradin exposé — filons rares à ciel ouvert 30 min) |
| **Température Simulée** | 8°C – 20°C |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Granzam (Capitale) | `ZONE_GNO_CAP_001` | `!voler est` | 30 MP | 5 min |
| Steppes de Granit | `ZONE_GNO_HUNT_001` | `!marcher est` | 0 MP | 6 min |
| Mine de Mithril Abandonnée | `ZONE_GNO_DUN_001` | `!marcher nord` | 0 MP | 8 min |
| Terres Grises (frontière Spriggan) | `ZONE_SPR_HUNT_002` | `!marcher nord-ouest` | 0 MP | 12 min |
| Désolation de Magma (frontière Salamander) | `ZONE_SAL_HUNT_002` | `!marcher sud` | 0 MP | 12 min |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Contremaîtresse Exilée Dagna** | Quête « Rouvrir le Chantier » (Lv.20) | Baraquement du Gradin 3 |
| **Ferrailleur Salamander Skor** | Rachat de noyaux de golems, vend explosifs | Wagonnet retourné (Gradin 5) |
| **Garde-Frontière Gnome (×4)** | Alerte sur mouvements hostiles | Grues de guet |

---

## Mobs Spawnable

| Mob | ID | Niveau | HP | Taux d'Apparition | Agressivité | Drop Notable |
|---|---|---|---|---|---|---|
| Araignée des Mines | `MOB_GNO_020` | 15-19 | 1500-2100 | 25% | Agressif (groupes de 5-7) | Soie Grise (cf. `mob_gnome_0.md`) |
| Élémentaire de Terre | `MOB_GNO_021` | 18-24 | 2800-3800 | 20% | Agressif | Cœur de Roche (cf. `mob_gnome_1.md`) |
| Golem de Chantier Fou | `MOB_GNO_022` | 20-25 | 3200-4400 | 18% | Agressif (cible les porteurs de pioche) | Noyau Corrompu |
| Vouivre des Carrières | `MOB_GNO_023` | 17-22 | 2200-3000 | 15% | Agressif | Écaille Poussiéreuse |
| Charognard Cuirassé | `MOB_GNO_024` | 15-18 | 1600-2200 | 15% | Neutre | Plaque Dorsale |
| Golem de Basalte (mini-boss) | `MOB_GNO_025` | 30-33 | 16000 | 6% | Agressif | Poing de Basalte (rare) |
| Colosse des Carrières (boss de zone) | `MOB_GNO_026` | 35 | 52000 | 1% (spawn toutes les 6h) | Agressif | Cœur du Chantier (épique), Titre « Briseur de Colosse » |

---

## Ressources Récoltables

| Ressource | Type | Spawn | Compétence Requise |
|---|---|---|---|
| Minerai d'Argent | Minerai | Gradins 1-3 | Minage Lv.15 |
| Minerai d'Or | Minerai | Gradins 4-5 | Minage Lv.20 |
| Gemme Brute | Minerai (rare) | Zones d'effondrement récent | Minage Lv.25 |
| Poutre Récupérable | Bois | Grues effondrées | Bûcheronnage Lv.12 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Baraquement du Gradin 3** | Camp retranché des mineurs indépendants |
| **La Grande Grue** | Point d'observation — `!analyze` révèle les filons actifs |
| **Rails du Wagonnet Fantôme** | Un wagonnet circule seul certaines nuits — le suivre mène à un coffre |
| **Pierre de Sauvegarde** | Point de téléportation enregistrable |

---

## Lore / Histoire

Les Carrières furent abandonnées en une seule nuit, il y a des décennies : les golems de chantier, animés par un filon de mithril que personne n'avait déclaré, se sont retournés contre leurs contremaîtres. Granzam a muré la galerie principale — devenue depuis la Mine de Mithril Abandonnée — et classé le dossier. La contremaîtresse Dagna, seule survivante du dernier quart, jure que le Colosse qui hante les gradins porte le marquage de sa propre équipe.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `⚒️ Carrières Brisées — Chasse Lv.15-35` |
| **Description du Groupe** | `Zone frontalière Gnome / Spriggan / Salamander. ⚠️ ZONE PVP ACTIVE. Meilleur spot de minage ouvert d'Alfheim. Boss « Colosse des Carrières » toutes les 6h. !chasser !mine !récolter` |
| **Règles Affichées** | `1. Zone PvP haute. 2. Boss de zone partagé, premier arrivé premier servi. 3. Pas d'exploit de terrain.` |

---

> *« Les golems n'ont pas cassé le chantier. Ils ont juste repris la carrière à leur compte. »* — Contremaîtresse Dagna
