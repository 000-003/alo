# 🌳 BOIS DES ÉCHOS — Zone de Chasse Puca (Frontalière)

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_PUC_HUNT_002` |
| **Nom Officiel** | Bois des Échos |
| **Surnoms** | « La Forêt qui Répond », « Le Chœur Sombre » |
| **Type** | Forêt / Zone de Chasse Frontalière (Tier 3) |
| **Territoire** | Puca (frontières Cait Sith et Undine) |
| **Safe Zone** | ❌ Non — PK autorisé (zone frontalière) |
| **Niveau Recommandé** | 15 – 35 |
| **Statut The Seed** | Zone persistante — Respawn mobs toutes les 240 secondes |

---

## Description Atmosphérique

Dans le Bois des Échos, chaque son revient déformé : un pas devient une cavalcade, un sort murmure son contre-sort. Le Cardinal duplique les signatures sonores avec 2 à 8 secondes de délai, rendant la localisation des ennemis délibérément trompeuse — les Puca, capables de reconnaître leur propre écho, y chassent avec un avantage racial net. Vers le nord, les troncs se couvrent de brume montée des marais Undine ; vers le sud, les collines Cait Sith percent la canopée.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Couvert, humide, échos permanents |
| **Cycle Jour** | 06h00 – 20h00 (pénombre verte) |
| **Cycle Nuit** | 20h00 – 06h00 (échos amplifiés ×2, mobs élites) |
| **Événements Météo Rares** | Chœur Inversé (les échos précèdent les sons — l'Écho Primordial s'éveille) |
| **Température Simulée** | 10°C – 16°C |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Lioda (Capitale) | `ZONE_PUC_CAP_001` | `!voler est` | 30 MP | 5 min |
| Prairies Chantantes | `ZONE_PUC_HUNT_001` | `!marcher est` | 0 MP | 6 min |
| Amphithéâtre Oublié | `ZONE_PUC_DUN_001` | `!marcher nord` | 0 MP | 8 min |
| Collines de l'Ouest (frontière Cait Sith) | `ZONE_CAI_HUNT_002` | `!marcher sud` | 0 MP | 12 min |
| Marais de Brume (frontière Undine) | `ZONE_UND_HUNT_002` | `!marcher nord-est` | 0 MP | 12 min |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Chasseresse d'Échos Vira** | Quête « La Voix Volée » (Lv.20) | Clairière du Diapason |
| **Contrebandier Undine Naïm** | Marchand clandestin — potions de respiration aquatique | Souche creuse (`!chercher souche`) |
| **Garde-Frontière Puca (×3)** | Alerte sur mouvements hostiles | Lisières sud et nord |

---

## Mobs Spawnable

| Mob | ID | Niveau | HP | Taux d'Apparition | Agressivité | Drop Notable |
|---|---|---|---|---|---|---|
| Perroquet Mimique | `MOB_PUC_020` | 15-18 | 1400-1900 | 25% | Neutre (imite les cris de mobs dangereux) | Plume Trompeuse |
| Loup Ventriloque | `MOB_PUC_021` | 17-22 | 2000-2800 | 20% | Agressif (hurle à distance de sa position) | Gorge d'Écho |
| Champignon Tambour | `MOB_PUC_022` | 15-17 | 1200-1600 | 20% | Passif → AoE sonore si attaqué | Membrane Fongique |
| Banshee Mineure | `MOB_PUC_023` | 20-26 | 2600-3600 | 15% | Agressif (cri = Silence 3s) | Larme Spectrale |
| Cerf aux Bois Carillonnants | `MOB_PUC_024` | 18-24 | 2400-3200 | 12% | Passif — fuite rapide | Bois de Carillon (craft instruments) |
| Banshee des Échos (mini-boss) | `MOB_PUC_025` | 30-33 | 13500 | 6% | Agressif | Voix Cristallisée (rare) |
| Écho Primordial (boss de zone) | `MOB_PUC_026` | 35 | 47000 | 1% (spawn toutes les 6h) | Agressif (copie les sorts reçus) | Fragment de Partition Originelle (épique), Titre « Diapason Vivant » |

---

## Ressources Récoltables

| Ressource | Type | Spawn | Compétence Requise |
|---|---|---|---|
| Champignon Sourd | Plante | Pieds des troncs | Herboristerie Lv.12 |
| Bois de Résonance Ancien | Bois | Arbres centenaires | Bûcheronnage Lv.15 |
| Quartz Chantant | Minerai | Grottes d'écho | Minage Lv.14 |
| Rosée d'Écho | Plante (rare) | Clairières à l'aube | Herboristerie Lv.20 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Clairière du Diapason** | Zone sans écho — seul endroit « honnête » du bois, camp des chasseurs |
| **Mur des Répétitions** | Falaise qui rejoue les derniers mots criés — utilisée pour des messages entre joueurs |
| **Souche du Contrebandier** | Marché noir Undine (accès `!chercher souche`) |
| **Pierre de Sauvegarde** | Point de téléportation enregistrable |

---

## Lore / Histoire

Les Puca affirment que le Bois des Échos est la salle de réverbération du monde : tout son émis en Alfheim finirait par y transiter, dégradé en murmure. L'Écho Primordial serait la première note du Cardinal, toujours en train de rebondir d'arbre en arbre depuis la compilation du monde — et le seul mob connu qui « droppe » des fragments de la Partition Originelle recherchée par le Lord Silencieux.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🌳 Bois des Échos — Chasse Lv.15-35` |
| **Description du Groupe** | `Forêt frontalière Puca / Cait Sith / Undine. ⚠️ ZONE PVP ACTIVE. Les échos mentent ! Boss « Écho Primordial » toutes les 6h. !chasser !récolter !chercher` |
| **Règles Affichées** | `1. Zone PvP haute. 2. Boss de zone partagé, premier arrivé premier servi. 3. Pas d'exploit de terrain.` |

---

> *« Ici, quand tu entends ton nom... ne réponds pas. »* — Chasseresse Vira
