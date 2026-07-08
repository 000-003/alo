# ⛏️ GRANZAM — Capitale du Territoire Gnome

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_GNO_CAP_001` |
| **Nom Officiel** | Granzam |
| **Surnoms** | « La Ville-Forteresse de Granit », « Le Coffre-Fort d'Alfheim » |
| **Type** | Capitale Raciale |
| **Territoire** | Gnome |
| **Safe Zone** | ✅ Oui — PK impossible dans l'enceinte de la cité |
| **Niveau Recommandé** | 1 – 99 (zone urbaine, pas de combat) |
| **Statut The Seed** | Zone persistante — sauvegarde Cardinal toutes les 300 secondes |

---

## Description Atmosphérique

Granzam n'a pas été construite : elle a été extraite. La capitale Gnome est un massif de granit évidé de l'intérieur, dont les remparts sont la montagne elle-même — trente mètres de pierre brute qu'aucun siège n'a jamais entamés. Les rues descendent en spirale vers la Grande Halle des Minerais, cœur battant de la ville où les convois remontent jour et nuit des niveaux miniers. Tout y est massif, carré, définitif ; l'unique concession à l'ornement est la mosaïque de gemmes brutes incrustée dans la voûte de la Halle, qui scintille comme un ciel souterrain.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Sec et stable (microclimat intra-muros) |
| **Cycle Jour** | 06h00 – 20h00 (puits de lumière zénithaux) |
| **Cycle Nuit** | 20h00 – 06h00 (lanternes à gemmes) |
| **Événements Météo Rares** | Filon Chantant (une veine résonne dans la montagne — Minage +25% pendant 1h) |
| **Température Simulée** | 12°C – 16°C |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Steppes de Granit | `ZONE_GNO_HUNT_001` | `!marcher sud` | 0 MP | 2 min |
| Carrières Brisées (frontière) | `ZONE_GNO_HUNT_002` | `!voler ouest` | 30 MP | 5 min |
| Mine de Mithril Abandonnée | `ZONE_GNO_DUN_001` | `!voler nord` | 50 MP | 8 min |
| Route Aérienne Granzam → Alne | `ZONE_ROUTE_GNO_ALN` | `!voler alne` | 100 MP | 15 min |

---

## PNJ Résidents

### Marchands
| Nom | ID | Fonction | Localisation |
|---|---|---|---|
| **Contremaître Durgan** | `NPC_GRA_01` | Skill Master — Minage & magie de Terre | Grande Halle des Minerais |
| **Négociante Marla** | `NPC_GRA_02` | Bourse des minerais (cours actualisés par le Cardinal) | Grande Halle des Minerais |
| **Armurier Bofrik** | `NPC_GRA_03` | Armures lourdes, boucliers-tours | Bastion de l'Ouest |
| **Ingénieur Cog** | `NPC_GRA_04` | Outils, pitons, lanternes à gemmes, explosifs de mine | Atelier des Profondeurs |

### Quêteurs & Figures
| Nom | ID | Fonction | Localisation |
|---|---|---|---|
| **Prospectrice Helga** | `NPC_GRA_05` | Quêtes de prospection quotidiennes | Porte des Convois |
| **Doyen Margrim** | `NPC_GRA_06` | Chaîne de quêtes raciale « Le Poids de la Montagne » | Salle du Conseil de Pierre |
| **Lord Gnome (hologramme)** | `NPC_GRA_07` | Panneau politique Gnome | Salle du Conseil de Pierre |

---

## Mobs Spawnable

> ⚠️ Aucun mob dans l'enceinte (Safe Zone). Zone périphérique (éboulis extérieurs).

| Mob | ID | Niveau | Taux d'Apparition | Drop Notable |
|---|---|---|---|---|
| Blaireau de Roche | `MOB_GNO_001` | 2-4 | 40% | Griffe Fouisseuse |
| Marmotte Cuirassée | `MOB_GNO_002` | 3-6 | 30% | Fourrure Grise |
| Scarabée de Granit | `MOB_GNO_003` | 1-3 | 25% | Carapace Éclatée |
| Golem Miniature Errant | `MOB_GNO_004` | 8-12 | 5% | Noyau Fissuré (rare) |

---

## Ressources Récoltables

| Ressource | Type | Localisation | Compétence Requise |
|---|---|---|---|
| Mousse de Caillasse | Plante | Éboulis extérieurs | Herboristerie Lv.1 |
| Minerai de Fer | Minerai | Niveaux miniers publics | Minage Lv.5 |
| Truite des Cavernes | Poisson | Lac souterrain | Pêche Lv.8 |
| Charpente de Sapin | Bois | Forêt d'altitude extérieure | Bûcheronnage Lv.8 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Grande Halle des Minerais** | Bourse des matières premières — les cours fluctuent selon l'offre des joueurs |
| **Banque de Granzam** | Coffres réputés inviolables — frais de garde les plus bas d'Alfheim |
| **Salle du Conseil de Pierre** | Siège politique Gnome — panneau `!lord_vote` |
| **Autel de Résurrection** | Point de respawn par défaut des Gnomes |
| **Portail de Téléportation** | Voyage rapide vers villes visitées (50-200 Yrd) |
| **Tableau des Quêtes** | Interface `!quest_board` |

---

## Lore / Histoire

Les Gnomes racontent que leurs ancêtres ont demandé au Cardinal la plus belle terre d'Alfheim, et reçu la plus dure — puis ont mis cent ans à comprendre que c'était la même chose. Granzam est devenue le coffre-fort du monde : quand les autres capitales brûlent pendant les guerres de faction, l'or d'Alfheim dort ici. La rivalité minière avec les Leprechauns est féroce mais codifiée : on se vole des filons, jamais des mineurs. Les escarmouches avec les Salamanders au sud, elles, ne connaissent pas cette élégance.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `⛏️ Granzam — Capitale Gnome` |
| **Description du Groupe** | `Bienvenue à Granzam, forteresse de granit ! ⛏️🪨 Zone Safe — PK désactivé. !aide pour les commandes. !mine pour creuser. !quest_board pour les missions.` |
| **Règles Affichées** | `1. Pas de spam. 2. Utilisez les commandes du bot. 3. RP encouragé mais pas obligatoire. 4. Respectez les autres joueurs.` |
| **Icône** | Emblème Gnome — Marteau et gemme sur fond brun |

---

> *« La pierre ne ment jamais. C'est pour ça que les Gnomes parlent peu. »* — Doyen Margrim
