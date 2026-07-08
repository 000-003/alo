# 🐾 FREELIA — Capitale du Territoire Cait Sith

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_CAI_CAP_001` |
| **Nom Officiel** | Freelia |
| **Surnoms** | « La Cité des Crocs », « Le Paradis des Dompteurs » |
| **Type** | Capitale Raciale |
| **Territoire** | Cait Sith |
| **Safe Zone** | ✅ Oui — PK impossible dans l'enceinte de la cité |
| **Niveau Recommandé** | 1 – 99 (zone urbaine, pas de combat) |
| **Statut The Seed** | Zone persistante — sauvegarde Cardinal toutes les 300 secondes |
| **Fiche lore complémentaire** | `lore_mecaniques/geographie_villes/freelia_territoire_caitsith.md` |

---

## Description Atmosphérique

Freelia est une cité verdoyante des Plaines de l'Ouest où l'architecture s'intègre à la faune : maisons creusées dans des arbres géants, ponts de lianes tressées, et rugissements permanents montant de la Ménagerie Royale où dorment dragons et loups géants domptés. L'air sent le cuir, la paille chaude et la viande grillée du Marché aux Crocs ; partout, des familiers en liberté suivent leurs maîtres Cait Sith dont les oreilles félines pivotent au moindre bruit. Au sommet de la Colline aux Souvenirs, seul lieu d'Alfheim où un Familiar Heart peut être ressuscité, veille la Tour du Trône Fauve, siège de la reine Alicia Rue.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Ensoleillé, brises tièdes de savane |
| **Cycle Jour** | 06h00 – 20h00 (lumière dorée) |
| **Cycle Nuit** | 20h00 – 06h00 (yeux luisants des familiers — vision nocturne raciale active) |
| **Événements Météo Rares** | Grande Chasse Nocturne (+10% taux de capture Beast Taming) |
| **Température Simulée** | 20°C – 28°C |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Savane des Crocs | `ZONE_CAI_HUNT_001` | `!marcher sud` | 0 MP | 2 min |
| Collines de l'Ouest (frontière) | `ZONE_CAI_HUNT_002` | `!voler ouest` | 30 MP | 5 min |
| Tanière du Roi Béhémoth | `ZONE_CAI_DUN_001` | `!voler nord` | 50 MP | 8 min |
| Route Aérienne Freelia → Alne | `ZONE_ROUTE_CAI_ALN` | `!voler alne` | 100 MP | 15 min |

---

## PNJ Résidents

> Fiches détaillées : `lore_mecaniques/geographie_villes/freelia_territoire_caitsith.md` (IDs déjà actés).

| Nom | ID | Fonction | Localisation |
|---|---|---|---|
| **Léo Crinière-Fauve** | `NPC_FRE_01` | Maître des Dompteurs (Skill Master) | Ménagerie Royale |
| **Zephyr le Trappeur** | `NPC_FRE_02` | Marché noir — appâts illégaux | Périphérie (forêt) |
| **Maître Elara** | `NPC_FRE_03` | Résurrection de familiers | Colline aux Souvenirs |
| **Gimli Griffe-Fer** | `NPC_FRE_04` | Artisan d'équipement de monture | Marché aux Crocs |
| **Nox le Charmeur** | `NPC_FRE_05` | Cosmétiques / transmogrification | Taverne « Le Chat Botté » |
| **Anya Œil-de-Faucon** | `NPC_FRE_06` | Quêtes de cartographie | Tour d'Observation |
| **Brok le Boucher** | `NPC_FRE_07` | Rachat de loot monstre | Marché aux Crocs |
| **Alicia Rue (hologramme)** | — | Chaîne de quêtes raciale « La Voix des Bêtes » | Tour du Trône Fauve |

---

## Mobs Spawnable

> ⚠️ Aucun mob dans l'enceinte (Safe Zone). Zone périphérique (rayon 200m autour des lianes d'enceinte).

| Mob | ID | Niveau | Taux d'Apparition | Drop Notable |
|---|---|---|---|---|
| Lynx Curieux | `MOB_CAI_001` | 2-4 | 40% | Moustache de Lynx (appât) |
| Gazelle des Plaines | `MOB_CAI_002` | 3-6 | 30% | Viande Tendre |
| Oiseau-Cloche | `MOB_CAI_003` | 1-3 | 25% | Plume Tintante |
| Tatou Cuirassé | `MOB_CAI_004` | 8-12 | 5% | Écaille de Tatou (rare) |

---

## Ressources Récoltables

| Ressource | Type | Localisation | Compétence Requise |
|---|---|---|---|
| Herbe-aux-Chats Sauvage | Plante | Pieds des arbres-maisons | Herboristerie Lv.1 |
| Argile Rouge | Minerai | Berges du fleuve Fauve | Minage Lv.5 |
| Perche Dorée | Poisson | Fleuve Fauve | Pêche Lv.5 |
| Bois de Baobab | Bois | Périphérie de la savane | Bûcheronnage Lv.8 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Ménagerie Royale** | Enclos des familiers de Tier S — interface `!tame` avancée |
| **Colline aux Souvenirs** | Unique site de résurrection de Familiar Heart (pèlerinage protégé) |
| **Marché aux Crocs** | Commerce de composants monstrueux — meilleur spot de farm Yrd de l'Ouest |
| **Autel de Résurrection** | Point de respawn par défaut des Cait Sith |
| **Portail de Téléportation** | Voyage rapide vers villes visitées (50-200 Yrd) |
| **Tableau des Quêtes** | Interface `!quest_board` |

---

## Lore / Histoire

Freelia fut fondée autour de la Colline aux Souvenirs, l'anomalie du Cardinal où les données des familiers morts refusent de s'effacer. Les Cait Sith y ont bâti leur culture entière : ici, on ne juge pas un guerrier à son épée mais à la loyauté de sa bête. L'alliance historique avec les Sylph, scellée par la reine Alicia Rue et Sakuya avant la Bataille d'Alne, a fait de Freelia la plaque tournante du renseignement aérien — ses éclaireurs à dos de wyverne voient plus loin que quiconque en Alfheim.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🐾 Freelia — Capitale Cait Sith` |
| **Description du Groupe** | `Bienvenue à Freelia, cité des dompteurs ! 🐾🦁 Zone Safe — PK désactivé. !aide pour les commandes. !tame pour dompter. !quest_board pour les missions.` |
| **Règles Affichées** | `1. Pas de spam. 2. Utilisez les commandes du bot. 3. RP encouragé mais pas obligatoire. 4. Respectez les autres joueurs.` |
| **Icône** | Emblème Cait Sith — Patte féline dorée sur fond vert |

---

> *« Un Cait Sith sans familier, c'est comme une épée sans lame : décoratif. »* — Léo Crinière-Fauve
