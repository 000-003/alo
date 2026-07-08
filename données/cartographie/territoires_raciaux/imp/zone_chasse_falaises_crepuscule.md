# 🌆 FALAISES DU CRÉPUSCULE — Zone de Chasse Imp (Frontalière)

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_IMP_HUNT_002` |
| **Nom Officiel** | Falaises du Crépuscule |
| **Surnoms** | « Le Mur Pourpre », « La Corniche des Deux Pactes » |
| **Type** | Falaises / Zone de Chasse Frontalière (Tier 3) |
| **Territoire** | Imp (frontières Leprechaun et Spriggan) |
| **Safe Zone** | ❌ Non — PK autorisé (zone frontalière) |
| **Niveau Recommandé** | 15 – 35 |
| **Statut The Seed** | Zone persistante — Respawn mobs toutes les 240 secondes |

---

## Description Atmosphérique

Immense muraille naturelle baignée d'une lumière rasante éternelle, les Falaises du Crépuscule marquent la limite où le canyon Imp remonte vers la surface. Le combat y est vertical : corniches étroites, colonnes de basalte et courants ascendants imposent le vol permanent — le Cardinal y draine 2 MP/minute supplémentaires, et un joueur à court de mana chute. Au nord fument les Champs de Scories Leprechaun ; au sud s'étendent les Terres Grises Spriggan.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Crépuscule éternel, vents ascendants |
| **Cycle Jour** | 06h00 – 20h00 (lumière rasante orange) |
| **Cycle Nuit** | 20h00 – 06h00 (gargouilles actives) |
| **Événements Météo Rares** | Rafale Descendante (vol -50% pendant 10 min — les corniches deviennent vitales) |
| **Température Simulée** | 4°C – 12°C |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Duskarn (Capitale) | `ZONE_IMP_CAP_001` | `!voler est` | 30 MP | 5 min |
| Canyon des Ombres | `ZONE_IMP_HUNT_001` | `!marcher est` | 0 MP | 6 min |
| Caverne des Hurleurs | `ZONE_IMP_DUN_001` | `!marcher nord` | 0 MP | 8 min |
| Champs de Scories (frontière Leprechaun) | `ZONE_LEP_HUNT_002` | `!voler nord` | 20 MP | 12 min |
| Terres Grises (frontière Spriggan) | `ZONE_SPR_HUNT_002` | `!voler sud` | 20 MP | 12 min |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Émissaire Spriggan Vhal** | Quêtes du Pacte des Ombres (Lv.20) | Corniche du Pacte |
| **Négociant Leprechaun Brann** | Rachat de minerais, vend pitons d'escalade | Plateforme Marchande |
| **Garde-Frontière Imp (×4)** | Alerte sur mouvements hostiles | Nids de guet |

---

## Mobs Spawnable

| Mob | ID | Niveau | HP | Taux d'Apparition | Agressivité | Drop Notable |
|---|---|---|---|---|---|---|
| Harpie Crépusculaire | `MOB_IMP_020` | 15-19 | 1500-2100 | 25% | Agressif (attaque en piqué) | Plume Pourpre |
| Gargouille Dormante | `MOB_IMP_021` | 18-24 | 2600-3600 | 20% | Passif le jour → agressif la nuit | Éclat de Basalte |
| Serpent des Corniches | `MOB_IMP_022` | 15-18 | 1300-1800 | 20% | Agressif (camouflé dans la roche) | Écaille Rasante |
| Élémentaire de Crépuscule | `MOB_IMP_023` | 20-26 | 2800-3800 | 15% | Agressif | Essence de Pénombre |
| Aigle de Nuit | `MOB_IMP_024` | 17-22 | 2000-2700 | 12% | Neutre | Serre Nocturne |
| Gargouille Éveillée (mini-boss) | `MOB_IMP_025` | 30-33 | 14500 | 6% | Agressif | Cœur de Basalte (rare) |
| Wyverne du Crépuscule (boss de zone) | `MOB_IMP_026` | 35 | 49000 | 1% (spawn toutes les 6h) | Agressif (combat 100% aérien) | Aile Pourpre (épique), Titre « Seigneur des Corniches » |

---

## Ressources Récoltables

| Ressource | Type | Spawn | Compétence Requise |
|---|---|---|---|
| Fleur de Pénombre | Plante | Corniches exposées | Herboristerie Lv.15 |
| Basalte Veiné | Minerai | Colonnes | Minage Lv.14 |
| Cristal Pourpre | Minerai (rare) | Surplombs (Vol requis) | Minage Lv.20 |
| Aire d'Aigle | Matériau | Nids sommitaux | — |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Corniche du Pacte** | Table de pierre où fut signé le Pacte des Ombres Imp–Spriggan |
| **Plateforme Marchande** | Comptoir tri-racial suspendu — événements de marché |
| **La Grande Fissure** | Raccourci vertical vers la Caverne des Hurleurs (Vol Lv.20) |
| **Pierre de Sauvegarde** | Point de téléportation enregistrable |

---

## Lore / Histoire

C'est sur ces falaises que Imp et Spriggan ont scellé le Pacte des Ombres : ni alliance ni amitié, mais un accord d'artisans du secret — chacun espionne tout le monde, sauf l'autre. La lumière rasante perpétuelle est une anomalie assumée du Cardinal : le soleil de la zone est « gelé » à l'heure exacte de la signature du Pacte, comme un sceau notarial météorologique.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🌆 Falaises du Crépuscule — Chasse Lv.15-35` |
| **Description du Groupe** | `Zone frontalière Imp / Leprechaun / Spriggan. ⚠️ ZONE PVP ACTIVE. Combat vertical — surveillez vos MP ! Boss « Wyverne du Crépuscule » toutes les 6h. !chasser !récolter` |
| **Règles Affichées** | `1. Zone PvP haute. 2. Boss de zone partagé, premier arrivé premier servi. 3. Pas d'exploit de terrain.` |

---

> *« Ici, tomber n'est pas une erreur de combat. C'est une erreur de comptabilité de mana. »* — Négociant Brann
