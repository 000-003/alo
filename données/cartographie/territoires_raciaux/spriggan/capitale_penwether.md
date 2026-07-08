# 🗿 PENWETHER — Capitale du Territoire Spriggan

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_SPR_CAP_001` |
| **Nom Officiel** | Penwether |
| **Surnoms** | « La Cité des Masques », « La Capitale Introuvable » |
| **Type** | Capitale Raciale |
| **Territoire** | Spriggan |
| **Safe Zone** | ✅ Oui — PK impossible dans l'enceinte de la cité |
| **Niveau Recommandé** | 1 – 99 (zone urbaine, pas de combat) |
| **Statut The Seed** | Zone persistante — sauvegarde Cardinal toutes les 300 secondes |

---

## Description Atmosphérique

Penwether est bâtie dans, sous et à travers les ruines d'une cité plus ancienne que personne n'a jamais revendiquée. Les Spriggans n'ont pas restauré les ruines : ils les habitent en locataires ironiques, tendant des toiles entre les colonnes brisées et perçant leurs fenêtres dans des murs déjà troués. La ville entière est enchantée d'illusions civiques — les rues changent d'apparence selon l'heure, les enseignes mentent élégamment, et la banque a sept façades dont six sont fausses. Les habitants trouvent cela reposant : ici, personne ne vous juge sur votre apparence, puisqu'elle est probablement fausse.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Ciel gris perle, lumière diffuse sans ombre nette |
| **Cycle Jour** | 06h00 – 20h00 |
| **Cycle Nuit** | 20h00 – 06h00 (les illusions civiques se relâchent — la « vraie » ville affleure) |
| **Événements Météo Rares** | Heure Sincère (toutes les illusions tombent 10 min — commerce suspendu par décence) |
| **Température Simulée** | 10°C – 17°C |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Ruines Noires | `ZONE_SPR_HUNT_001` | `!marcher sud` | 0 MP | 2 min |
| Terres Grises (frontière) | `ZONE_SPR_HUNT_002` | `!voler ouest` | 30 MP | 5 min |
| Nécropole Antique | `ZONE_SPR_DUN_001` | `!voler nord` | 50 MP | 8 min |
| Route Aérienne Penwether → Alne | `ZONE_ROUTE_SPR_ALN` | `!voler alne` | 100 MP | 15 min |

---

## PNJ Résidents

### Marchands
| Nom | ID | Fonction | Localisation |
|---|---|---|---|
| **Receleuse Nix** | `NPC_PEN_01` | Objets « d'occasion » à provenance floue | Marché des Sept Façades |
| **Prieur Vex** | `NPC_PEN_02` | Skill Master — Magie d'Illusion (cf. `illusion_magic_system.md`) | Cloître Renversé |
| **Masquier Orin** | `NPC_PEN_03` | Cosmétiques d'avatar, fausses identités temporaires (1h) | Atelier des Visages |
| **Cartographe Aveugle Maude** | `NPC_PEN_04` | Cartes des ruines — étrangement exactes | Porche Effondré |

### Quêteurs & Figures
| Nom | ID | Fonction | Localisation |
|---|---|---|---|
| **Fossoyeur Grim** | `NPC_PEN_05` | Quêtes d'exploration de la Nécropole | Cimetière Vertical |
| **L'Archiviste Sans Nom** | `NPC_PEN_06` | Chaîne de quêtes raciale « Ce Que Cachent les Ruines » | Bibliothèque Enterrée |
| **Chancelier des Masques (hologramme)** | `NPC_PEN_07` | Panneau politique Spriggan — nul ne connaît son visage | Salle du Conseil Voilé |

---

## Mobs Spawnable

> ⚠️ Aucun mob dans l'enceinte (Safe Zone). Zone périphérique (ruines extérieures).

| Mob | ID | Niveau | Taux d'Apparition | Drop Notable |
|---|---|---|---|---|
| Corbeau Spectral | `MOB_SPR_001` | 2-4 | 40% | Plume Cendrée |
| Rat des Ruines | `MOB_SPR_002` | 3-6 | 30% | Queue Annelée |
| Feu Follet Gris | `MOB_SPR_003` | 1-3 | 25% | Lueur Résiduelle |
| Statue Frémissante | `MOB_SPR_004` | 8-12 | 5% | Éclat de Bas-Relief (rare) |

---

## Ressources Récoltables

| Ressource | Type | Localisation | Compétence Requise |
|---|---|---|---|
| Fleur de Gravats | Plante | Ruines extérieures | Herboristerie Lv.1 |
| Pierre de Taille Antique | Minerai | Éboulis des remparts | Minage Lv.8 |
| Anguille Pâle | Poisson | Citernes antiques | Pêche Lv.5 |
| Poutre Fossilisée | Bois | Charpentes effondrées | Bûcheronnage Lv.10 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Marché des Sept Façades** | Bazar labyrinthique — six entrées sont des illusions (la vraie change chaque jour) |
| **Cloître Renversé** | École d'illusion — le bâtiment est architecturalement impossible |
| **Bibliothèque Enterrée** | Archives pré-Spriggan, en cours de « traduction » depuis toujours |
| **Autel de Résurrection** | Point de respawn par défaut des Spriggans |
| **Portail de Téléportation** | Voyage rapide vers villes visitées (50-200 Yrd) |
| **Tableau des Quêtes** | Interface `!quest_board` |

---

## Lore / Histoire

Qui a bâti la cité sous Penwether ? Les archives spriggans répondent : « nous, évidemment », d'un ton qui décourage la vérification. La vérité — que la Bibliothèque Enterrée « traduit » avec une lenteur suspecte — est que les ruines préexistaient à la compilation du monde, artefact du Cardinal que personne n'explique. Les Spriggans, race des illusions et des fouilles interdites, s'y sont installés précisément parce que tout le monde évitait l'endroit. Le Pacte des Ombres avec les Imp et la rivalité froide avec les Gnomes (qui creusent, eux aussi, mais pour des raisons vulgaires) définissent leur diplomatie. C'est la race de Kirito — Penwether honore d'ailleurs « le Spriggan qui a atteint le sommet » d'une statue volontairement peu ressemblante.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🗿 Penwether — Capitale Spriggan` |
| **Description du Groupe** | `Bienvenue à Penwether, la Cité des Masques ! 🗿🎭 Zone Safe — PK désactivé. !aide pour les commandes. Rien ici n'est ce qu'il semble, sauf les prix. !quest_board pour les missions.` |
| **Règles Affichées** | `1. Pas de spam. 2. Utilisez les commandes du bot. 3. RP encouragé mais pas obligatoire. 4. Respectez les autres joueurs.` |
| **Icône** | Emblème Spriggan — Masque fendu gris sur fond noir |

---

> *« Bien sûr que cette statue ne ressemble pas à Kirito. Une bonne illusion ne ressemble jamais à son modèle. »* — Masquier Orin
