# 🌑 DUSKARN — Capitale du Territoire Imp

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_IMP_CAP_001` |
| **Nom Officiel** | Duskarn |
| **Surnoms** | « La Cité sans Aube », « Le Joyau d'Obsidienne » |
| **Type** | Capitale Raciale |
| **Territoire** | Imp |
| **Safe Zone** | ✅ Oui — PK impossible dans l'enceinte de la cité |
| **Niveau Recommandé** | 1 – 99 (zone urbaine, pas de combat) |
| **Statut The Seed** | Zone persistante — sauvegarde Cardinal toutes les 300 secondes |

---

## Description Atmosphérique

Duskarn est creusée dans la paroi intérieure d'un canyon si profond que le soleil n'atteint jamais ses rues : la cité vit dans un crépuscule perpétuel, éclairée par des veines de cristal violet qui pulsent comme un système sanguin dans la roche noire. Les bâtiments s'étagent en balcons superposés reliés par des escaliers taillés et des perchoirs d'envol — les Imp, dotés de vision nocturne, se déplacent autant en volant de corniche en corniche qu'en marchant. Au fond du canyon coule la Rivière d'Encre, dont les eaux absorbent la lumière et alimentent les célèbres bains d'ombre de la ville.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Crépuscule permanent (fond de canyon) |
| **Cycle Jour** | 06h00 – 20h00 (lueur indigo diffuse) |
| **Cycle Nuit** | 20h00 – 06h00 (cristaux violets à pleine intensité — heure de pointe de la ville) |
| **Événements Météo Rares** | Éclipse Totale (magie d'ombre +25% pendant 1h — cf. `SYS_TIME_SHIFT`) |
| **Température Simulée** | 8°C – 14°C |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Canyon des Ombres | `ZONE_IMP_HUNT_001` | `!marcher sud` | 0 MP | 2 min |
| Falaises du Crépuscule (frontière) | `ZONE_IMP_HUNT_002` | `!voler ouest` | 30 MP | 5 min |
| Caverne des Hurleurs | `ZONE_IMP_DUN_001` | `!voler nord` | 50 MP | 8 min |
| Route Aérienne Duskarn → Alne | `ZONE_ROUTE_IMP_ALN` | `!voler alne` | 100 MP | 15 min |

---

## PNJ Résidents

### Marchands
| Nom | ID | Fonction | Localisation |
|---|---|---|---|
| **Vesper le Discret** | `NPC_DUS_01` | Marchand d'armes courtes (dagues, griffes, lames courbes) | Bazar des Ombres |
| **Forgeronne Umbra** | `NPC_DUS_02` | Forge à froid — enchantements d'ombre | Corniche de la Forge Noire |
| **Alchimiste Morn** | `NPC_DUS_03` | Poisons, potions de vision nocturne, encres | Échoppe de la Rivière d'Encre |

### Quêteurs & Figures
| Nom | ID | Fonction | Localisation |
|---|---|---|---|
| **Œil-de-Nuit Korvac** | `NPC_DUS_04` | Quêtes d'infiltration et de contre-espionnage | Nid de Guet (sommet du canyon) |
| **Gardienne Lilith** | `NPC_DUS_05` | Chaîne de quêtes raciale « L'Envers de la Lumière » | Temple du Voile |
| **Prêteur Sombre Skell** | `NPC_DUS_06` | Banque + prêts sur gage (taux… discutables) | Bazar des Ombres |
| **Lord Imp (hologramme)** | `NPC_DUS_07` | Panneau politique Imp | Balcon du Conseil |

---

## Mobs Spawnable

> ⚠️ Aucun mob dans l'enceinte (Safe Zone). Zone périphérique (corniches extérieures du canyon).

| Mob | ID | Niveau | Taux d'Apparition | Drop Notable |
|---|---|---|---|---|
| Chauve-Souris Pourpre | `MOB_IMP_001` | 2-4 | 40% | Membrane Souple |
| Rat d'Obsidienne | `MOB_IMP_002` | 3-6 | 30% | Incisive Noire |
| Papillon de Nuit Géant | `MOB_IMP_003` | 1-3 | 25% | Poudre d'Ombre |
| Lézard des Failles | `MOB_IMP_004` | 8-12 | 5% | Écaille Crépusculaire (rare) |

---

## Ressources Récoltables

| Ressource | Type | Localisation | Compétence Requise |
|---|---|---|---|
| Champignon d'Encre | Plante | Berges de la Rivière d'Encre | Herboristerie Lv.1 |
| Cristal Violet | Minerai | Veines du canyon | Minage Lv.10 |
| Poisson Aveugle | Poisson | Rivière d'Encre | Pêche Lv.5 |
| Bois Pétrifié | Bois | Fond du canyon | Bûcheronnage Lv.8 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Temple du Voile** | Siège spirituel Imp — école de magie d'ombre et d'illusion nocturne |
| **Bazar des Ombres** | Marché de niche : poisons, informations, objets « trouvés » |
| **Bains d'Encre** | Buff « Peau d'Ombre » (+10% furtivité, 1h) contre 200 Yrd |
| **Autel de Résurrection** | Point de respawn par défaut des Imp |
| **Portail de Téléportation** | Voyage rapide vers villes visitées (50-200 Yrd) |
| **Tableau des Quêtes** | Interface `!quest_board` |

---

## Lore / Histoire

Les Imp furent la dernière race à choisir son territoire — ou la première à comprendre que le meilleur territoire est celui que personne ne convoite. Duskarn s'est bâtie dans l'ombre au sens propre : chaque balcon fut taillé de nuit, chaque veine de cristal apprivoisée à mains nues. Le Pacte des Ombres conclu avec les Spriggan fait des deux races les maîtres incontestés du renseignement d'Alfheim ; on dit qu'aucun secret prononcé à voix haute ne met plus de trois jours à atteindre le Bazar des Ombres.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🌑 Duskarn — Capitale Imp` |
| **Description du Groupe** | `Bienvenue à Duskarn, la Cité sans Aube ! 🌑🦇 Zone Safe — PK désactivé. !aide pour les commandes. !quest_board pour les missions. Le Bazar des Ombres n'attend que vous.` |
| **Règles Affichées** | `1. Pas de spam. 2. Utilisez les commandes du bot. 3. RP encouragé mais pas obligatoire. 4. Respectez les autres joueurs.` |
| **Icône** | Emblème Imp — Croissant violet sur fond noir |

---

> *« La lumière montre ce qui est. L'ombre montre ce qui compte. »* — Gardienne Lilith
