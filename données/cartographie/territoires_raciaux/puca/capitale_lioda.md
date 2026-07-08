# 🎵 LIODA — Capitale du Territoire Puca

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_PUC_CAP_001` |
| **Nom Officiel** | Lioda |
| **Surnoms** | « La Cité-Partition », « Le Refrain Éternel » |
| **Type** | Capitale Raciale |
| **Territoire** | Puca |
| **Safe Zone** | ✅ Oui — PK impossible dans l'enceinte de la cité |
| **Niveau Recommandé** | 1 – 99 (zone urbaine, pas de combat) |
| **Statut The Seed** | Zone persistante — sauvegarde Cardinal toutes les 300 secondes |

---

## Description Atmosphérique

Lioda est bâtie en amphithéâtre naturel autour d'un lac parfaitement circulaire dont la surface vibre comme une peau de tambour. Chaque bâtiment est un instrument : les ponts sont des cordes tendues qui résonnent au passage, les toits de cuivre carillonnent sous la pluie, et les rues suivent des portées gravées dans le pavé. Le Cardinal y diffuse en permanence l'Harmonie de Fond — une trame sonore générée à partir des actions des joueurs présents, si bien que la ville ne joue jamais deux fois la même musique. Les Puca, bardes-nés d'Alfheim, considèrent le silence comme la seule véritable obscénité.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Douce, pluies mélodiques fréquentes |
| **Cycle Jour** | 06h00 – 20h00 (Harmonie majeure) |
| **Cycle Nuit** | 20h00 – 06h00 (Harmonie mineure, concerts nocturnes) |
| **Événements Météo Rares** | Accord Parfait (buffs de musique +50% pendant 1h, annoncé par carillon global) |
| **Température Simulée** | 15°C – 22°C |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Prairies Chantantes | `ZONE_PUC_HUNT_001` | `!marcher sud` | 0 MP | 2 min |
| Bois des Échos (frontière) | `ZONE_PUC_HUNT_002` | `!voler ouest` | 30 MP | 5 min |
| Amphithéâtre Oublié | `ZONE_PUC_DUN_001` | `!voler nord` | 50 MP | 8 min |
| Route Aérienne Lioda → Alne | `ZONE_ROUTE_PUC_ALN` | `!voler alne` | 100 MP | 15 min |

---

## PNJ Résidents

### Marchands
| Nom | ID | Fonction | Localisation |
|---|---|---|---|
| **Luthière Cordelia** | `NPC_LIO_01` | Instruments-armes (luths-arcs, tambours de guerre) | Atelier des Cordes |
| **Maestro Viel** | `NPC_LIO_02` | Skill Master — Magie de Musique (cf. `music_magic_system.md`) | Grand Kiosque |
| **Aubergiste Polka** | `NPC_LIO_03` | Taverne « Le Refrain » — buffs de repas sonores | Quai du Lac-Tambour |
| **Accordeur Fitz** | `NPC_LIO_04` | Réparation/enchantement d'instruments | Atelier des Cordes |

### Quêteurs & Figures
| Nom | ID | Fonction | Localisation |
|---|---|---|---|
| **Archiviste Séléna** | `NPC_LIO_05` | Quête « Les Partitions Perdues » (chaîne raciale) | Bibliothèque des Portées |
| **Crieur Tam** | `NPC_LIO_06` | Rumeurs, quêtes quotidiennes | Place de la Mesure |
| **Le Lord Silencieux (hologramme)** | `NPC_LIO_07` | Panneau politique Puca — un Lord qui ne parle qu'en musique | Balcon de l'Amphithéâtre |

---

## Mobs Spawnable

> ⚠️ Aucun mob dans l'enceinte (Safe Zone). Zone périphérique (rayon 200m).

| Mob | ID | Niveau | Taux d'Apparition | Drop Notable |
|---|---|---|---|---|
| Grillon Virtuose | `MOB_PUC_001` | 2-4 | 40% | Aile Stridulante |
| Grenouille Baryton | `MOB_PUC_002` | 3-6 | 30% | Sac Vocal (composant d'alchimie) |
| Luciole Métronome | `MOB_PUC_003` | 1-3 | 25% | Lueur Cadencée |
| Blaireau Sourd | `MOB_PUC_004` | 8-12 | 5% | Tympan Épais (rare — immunise 1 craft au Silence) |

---

## Ressources Récoltables

| Ressource | Type | Localisation | Compétence Requise |
|---|---|---|---|
| Roseau à Anches | Plante | Rives du Lac-Tambour | Herboristerie Lv.1 |
| Cuivre Sonnant | Minerai | Carrières de l'amphithéâtre | Minage Lv.8 |
| Carpe Soprano | Poisson | Lac-Tambour | Pêche Lv.5 |
| Bois de Résonance | Bois | Bosquets périphériques | Bûcheronnage Lv.10 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Grand Kiosque** | Siège de l'école de Magie de Musique — buffs de zone joués en continu |
| **Lac-Tambour** | Percussion géante — sauter dessus produit une note audible dans toute la ville |
| **Bibliothèque des Portées** | Lore Puca + partitions de sorts (`!lore`) |
| **Autel de Résurrection** | Point de respawn par défaut des Puca |
| **Portail de Téléportation** | Voyage rapide vers villes visitées (50-200 Yrd) |
| **Tableau des Quêtes** | Interface `!quest_board` |

---

## Lore / Histoire

Lioda fut accordée avant d'être construite : les premiers Puca ont chanté pendant sept jours pour trouver la fréquence de résonance du site, puis ont bâti la ville autour de cette note fondamentale. Le Lord Silencieux, souverain actuel, aurait perdu sa voix en tentant de rejouer la Partition Originelle — celle que le Cardinal utilisa pour compiler le monde. Les Puca la cherchent encore ; des fragments dorment, dit-on, dans l'Amphithéâtre Oublié.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🎵 Lioda — Capitale Puca` |
| **Description du Groupe** | `Bienvenue à Lioda, la Cité-Partition ! 🎵🎻 Zone Safe — PK désactivé. !aide pour les commandes. !cast pour la magie de musique. !quest_board pour les missions.` |
| **Règles Affichées** | `1. Pas de spam. 2. Utilisez les commandes du bot. 3. RP encouragé mais pas obligatoire. 4. Respectez les autres joueurs.` |
| **Icône** | Emblème Puca — Clé de sol violette sur fond argent |

---

> *« À Lioda, même les serrures s'ouvrent en chantant la bonne note. »* — Crieur Tam
