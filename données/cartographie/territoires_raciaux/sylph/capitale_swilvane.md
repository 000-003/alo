# 🏰 SWILVANE — Capitale du Territoire Sylph

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_SYL_CAP_001` |
| **Nom Officiel** | Swilvane |
| **Surnoms** | « Cité des Vents Émeraude », « Le Berceau Ailé » |
| **Type** | Capitale Raciale |
| **Territoire** | Sylph |
| **Safe Zone** | ✅ Oui — PK impossible dans l'enceinte de la cité |
| **Niveau Recommandé** | 1 – 99 (zone urbaine, pas de combat) |
| **Statut The Seed** | Zone persistante — sauvegarde Cardinal toutes les 300 secondes |

---

## Description Atmosphérique

Swilvane se dresse au sommet d'un plateau verdoyant battu par des vents perpétuels qui font onduler les prairies environnantes comme une mer d'émeraude. La capitale des Sylph est une merveille architecturale composée de tours effilées en pierre blanche et en bois de frêne sacré, reliées entre elles par des ponts suspendus et des passerelles de cristal translucide. Les bâtiments s'élèvent en spirale, imitant la forme des tornades douces qui parcourent le territoire. Chaque fenêtre est ornée de vitraux aux teintes de jade et de céladon qui projettent des motifs lumineux sur les pavés lorsque le soleil traverse la canopée des arbres millénaires qui poussent au cœur même de la cité.

L'air est saturé d'une brise parfumée aux herbes sauvages — thym, romarin des cimes et lavande sylvestre — qui transporte avec elle les mélodies des harpes éoliennes suspendues aux corniches des tours. Le système Cardinal génère un cycle de vent dynamique : au lever du soleil, les courants ascendants soulèvent des pétales de fleurs depuis les jardins suspendus ; au crépuscule, une brume dorée descend des hauteurs et enveloppe la cité d'un voile féerique. Les rues pavées de dalles de quartz vert résonnent sous les pas des joueurs Sylph dont les ailes translucides captent et réfractent la lumière ambiante.

Au centre de Swilvane trône la **Tour du Seigneur des Vents**, un édifice de soixante-dix mètres de haut qui sert de siège au gouvernement de la faction Sylph. C'est depuis son balcon que Sakuya, la leader légendaire des Sylph, a prononcé l'alliance historique avec les Cait Sith lors de la Bataille d'Alne.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Venteux et ensoleillé, rafales modérées |
| **Cycle Jour** | 06h00 – 20h00 (ciel azur et émeraude) |
| **Cycle Nuit** | 20h00 – 06h00 (ciel étoilé, bioluminescence des plantes) |
| **Événements Météo Rares** | Tempête de Pétales (boost +15% vitesse de vol pour les Sylph) |
| **Température Simulée** | 18°C – 24°C |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Prairies de Sylvain | `ZONE_SYL_HUNT_001` | `!marcher sud` | 0 MP | 2 min |
| Forêt de Lugru (frontière) | `ZONE_SYL_HUNT_002` | `!voler ouest` | 30 MP | 5 min |
| Donjon du Vent Hurlant | `ZONE_SYL_DUN_001` | `!voler nord` | 50 MP | 8 min |
| Route Aérienne Swilvane → Alne | `ZONE_ROUTE_SYL_ALN` | `!voler alne` | 100 MP | 15 min |

---

## PNJ Résidents

### Marchands
| Nom | Fonction | Localisation |
|---|---|---|
| **Érianne** | Marchande d'armes (Rapières, Dagues, Katanas légers) | Place du Marché |
| **Folvir** | Forgeron — Réparation & Amélioration d'équipement | Forge des Brises |
| **Liselotte** | Herboriste — Potions de soin, antidotes, buffles de vitesse | Jardin Suspendu |
| **Thalmor** | Marchande d'ailes — Customisation visuelle des ailes | Atelier Ailé |

### Quêteurs
| Nom | Quête | Récompense |
|---|---|---|
| **Capitaine Reylen** | « Patrouille des Frontières » (quotidienne) | 500 Yrd + 200 XP |
| **Vieille Myriel** | « L'Herbe des Cimes » (récoltable) | Recette Potion Lv.20 |
| **Sakuya (hologramme)** | « L'Héritage du Vent » (chaîne de quêtes raciale) | Compétence unique « Zéphyr Slash » |

### Gardes
| Nom | Comportement |
|---|---|
| **Gardes Sylph (×12)** | Patrouillent la cité — interviennent si un joueur non-Sylph cause des troubles |
| **Sentinelle Kael** | Garde la porte principale — donne des informations sur les routes |

---

## Mobs Spawnable

> ⚠️ Aucun mob ne spawn dans l'enceinte de Swilvane (Safe Zone). Les mobs listés ci-dessous apparaissent dans la **zone périphérique** (rayon de 200m autour des remparts).

| Mob | ID | Niveau | Taux d'Apparition | Drop Notable |
|---|---|---|---|---|
| Brise-Papillon | `MOB_SYL_001` | 3-5 | 40% | Aile Irisée (crafting) |
| Loup Sylvestre | `MOB_SYL_002` | 5-8 | 30% | Croc de Vent |
| Pixie Errante | `MOB_SYL_003` | 1-3 | 25% | Poussière Féerique |
| Golem de Mousse | `MOB_SYL_004` | 8-12 | 5% | Cœur de Mousse (rare) |

---

## Ressources Récoltables

| Ressource | Type | Localisation | Compétence Requise |
|---|---|---|---|
| Herbe Sylvestre | Plante | Jardins extérieurs | Herboristerie Lv.1 |
| Cristal de Brise | Minerai | Grottes sous le plateau | Minage Lv.10 |
| Truite du Zéphyr | Poisson | Rivière de Swilvane | Pêche Lv.5 |
| Bois de Frêne Sacré | Bois | Bosquets périphériques | Bûcheronnage Lv.8 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Tour du Seigneur des Vents** | Siège du gouvernement Sylph — Accès au panneau de politique raciale |
| **Autel de Résurrection** | Point de respawn par défaut pour les Sylph |
| **Portail de Téléportation** | Permet le voyage rapide vers les villes déjà visitées (coût: 50-200 Yrd) |
| **Arène d'Entraînement** | Zone de duel PvP consentie — pas de perte d'XP |
| **Bibliothèque des Courants** | Accès au lore Sylph et tutoriels de magie de vent |
| **Tableau des Quêtes** | Interface `!quêtes` — Affiche les quêtes disponibles par niveau |

---

## Lore / Histoire

Swilvane fut la première cité à être construite par les Fées Sylph lorsque le système Cardinal initialisa le monde d'ALfheim Online via The Seed. Selon la mythologie interne au jeu, les Sylph étaient les premiers enfants du vent, nés des tornades primordiales qui balayèrent Alfheim après la plantation d'Yggdrasil. Le plateau de Swilvane fut choisi comme site de la capitale car les courants aériens y convergent naturellement, offrant aux Sylph — la race la plus rapide en vol — un avantage tactique inégalé.

La cité a été le théâtre de plusieurs événements majeurs durant l'histoire du serveur : le Siège de Swilvane par les Salamander (repoussé grâce à l'intervention de Kirito), l'Alliance Sylph-Cait Sith négociée par Sakuya et Alicia Rue, et la grande migration vers Alne lors de la Quête du Roi des Fées. Chaque rue de Swilvane porte le nom d'un héros Sylph tombé au combat, et les vitraux de la Tour du Seigneur des Vents racontent en images polygonales l'histoire complète de la faction.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🌿 Swilvane — Capitale Sylph` |
| **Description du Groupe** | `Bienvenue à Swilvane, cité des vents émeraude ! 🏰🌬️ Zone Safe — PK désactivé. Utilisez !aide pour les commandes. !quêtes pour les missions. !boutique pour le marché.` |
| **Règles Affichées** | `1. Pas de spam. 2. Utilisez les commandes du bot. 3. RP encouragé mais pas obligatoire. 4. Respectez les autres joueurs.` |
| **Icône** | Emblème Sylph — Plume verte stylisée sur fond blanc |

---

> *« Le vent ne cesse jamais de souffler à Swilvane. Il porte les rêves des Sylph vers le sommet d'Yggdrasil. »* — Inscription sur la porte principale
