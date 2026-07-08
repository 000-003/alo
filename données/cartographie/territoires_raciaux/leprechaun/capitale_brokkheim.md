# 🔨 BROKKHEIM — Capitale du Territoire Leprechaun

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_LEP_CAP_001` |
| **Nom Officiel** | Brokkheim |
| **Surnoms** | « La Grande Forge », « La Ville aux Mille Enclumes » |
| **Type** | Capitale Raciale |
| **Territoire** | Leprechaun |
| **Safe Zone** | ✅ Oui — PK impossible dans l'enceinte de la cité |
| **Niveau Recommandé** | 1 – 99 (zone urbaine, pas de combat) |
| **Statut The Seed** | Zone persistante — sauvegarde Cardinal toutes les 300 secondes |

---

## Description Atmosphérique

Brokkheim est construite sur un champ de geysers domestiqués : chaque forge de la ville est branchée sur sa propre colonne de vapeur, et les mille enclumes de la capitale battent un rythme continu que les habitants appellent « le Pouls ». Les toits de cuivre et de laiton renvoient la lueur orange des fourneaux, les canaux charrient l'eau de refroidissement fumante, et des automates de service — fierté de l'artisanat local — livrent les commandes de comptoir en comptoir. C'est ici, et nulle part ailleurs, que se forgent les armes de Tier S d'Alfheim.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Vapeur permanente, retombées de suie fine |
| **Cycle Jour** | 06h00 – 20h00 (le Pouls à plein régime) |
| **Cycle Nuit** | 20h00 – 06h00 (forges en veille — le Pouls ralentit mais ne s'arrête jamais) |
| **Événements Météo Rares** | Grande Éruption (tous les geysers jaillissent — Forge +25% qualité pendant 1h) |
| **Température Simulée** | 22°C – 30°C |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Vallée des Geysers | `ZONE_LEP_HUNT_001` | `!marcher sud` | 0 MP | 2 min |
| Champs de Scories (frontière) | `ZONE_LEP_HUNT_002` | `!voler ouest` | 30 MP | 5 min |
| Atelier Englouti | `ZONE_LEP_DUN_001` | `!voler nord` | 50 MP | 8 min |
| Route Aérienne Brokkheim → Alne | `ZONE_ROUTE_LEP_ALN` | `!voler alne` | 100 MP | 15 min |

---

## PNJ Résidents

### Marchands & Artisans
| Nom | ID | Fonction | Localisation |
|---|---|---|---|
| **Grand Forgeron Brokk IX** | `NPC_BRO_01` | Skill Master — Forge (héritier du fondateur) | Forge-Mère |
| **Émailleuse Sylla** | `NPC_BRO_02` | Enchantements d'armes et gravures runiques | Quai des Finitions |
| **Marchand d'Enclumes Rune** | `NPC_BRO_03` | Outils de forge, stations portatives | Halle du Marteau |
| **Maîtresse des Automates Vera** | `NPC_BRO_04` | Vend et répare les automates de service | Atelier Cliquetant |

### Quêteurs & Figures
| Nom | ID | Fonction | Localisation |
|---|---|---|---|
| **Prêteur sur Gages Fenn** | `NPC_BRO_05` | Rachat d'équipement, enchères de pièces uniques | Halle du Marteau |
| **Apprentie Prodige Nilsa** | `NPC_BRO_06` | Chaîne de quêtes raciale « Les Sept Trempes » | Forge-Mère |
| **Lord Leprechaun (hologramme)** | `NPC_BRO_07` | Panneau politique Leprechaun | Balcon du Conseil des Guildes |

---

## Mobs Spawnable

> ⚠️ Aucun mob dans l'enceinte (Safe Zone). Zone périphérique (champ de geysers extérieur).

| Mob | ID | Niveau | Taux d'Apparition | Drop Notable |
|---|---|---|---|---|
| Salamandre de Vapeur | `MOB_LEP_001` | 2-4 | 40% | Glande Bouillante |
| Crabe Bouilloire | `MOB_LEP_002` | 3-6 | 30% | Carapace Émaillée |
| Feu Follet de Suie | `MOB_LEP_003` | 1-3 | 25% | Cendre Luisante |
| Automate Égaré | `MOB_LEP_004` | 8-12 | 5% | Rouage Précieux (rare) |

---

## Ressources Récoltables

| Ressource | Type | Localisation | Compétence Requise |
|---|---|---|---|
| Soufre Cristallisé | Minerai | Bords de geysers | Minage Lv.5 |
| Prêle des Vapeurs | Plante | Canaux de refroidissement | Herboristerie Lv.1 |
| Anguille Bouillante | Poisson | Bassins chauds | Pêche Lv.10 |
| Charbon de Forge | Minerai | Terrils publics | Minage Lv.3 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Forge-Mère** | Première enclume de Brokk — forger dessus (+5% qualité, réservation 500 Yrd) |
| **Halle du Marteau** | Marché de l'équipement — meilleure concentration d'artisans joueurs du serveur |
| **Conseil des Guildes** | Panneau politique — les Lords Leprechauns sont élus parmi les maîtres-forgerons |
| **Autel de Résurrection** | Point de respawn par défaut des Leprechauns |
| **Portail de Téléportation** | Voyage rapide vers villes visitées (50-200 Yrd) |
| **Tableau des Quêtes** | Interface `!quest_board` |

---

## Lore / Histoire

Brokkheim porte le nom de Brokk, le forgeron mythique qui aurait gagné contre le Cardinal lui-même un concours de forge — le prix : le droit pour sa race de fabriquer des objets que le système n'avait pas prévus. Vérité ou propagande de guilde, les faits demeurent : seuls les Leprechauns produisent de l'équipement au-delà des dictionnaires d'items standard. Le commerce avec les Undines (eau pure contre lames trempées) et la rivalité minière avec Granzam structurent toute la diplomatie de la Grande Forge.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🔨 Brokkheim — Capitale Leprechaun` |
| **Description du Groupe** | `Bienvenue à Brokkheim, la Ville aux Mille Enclumes ! 🔨🔥 Zone Safe — PK désactivé. !aide pour les commandes. !forge pour l'artisanat. !quest_board pour les missions.` |
| **Règles Affichées** | `1. Pas de spam. 2. Utilisez les commandes du bot. 3. RP encouragé mais pas obligatoire. 4. Respectez les autres joueurs.` |
| **Icône** | Emblème Leprechaun — Marteau croisé d'un rouage sur fond cuivre |

---

> *« Écoute le Pouls, petit. Tant qu'il bat, Alfheim a des armes. Quand il s'arrêtera, plus personne n'en aura besoin. »* — Grand Forgeron Brokk IX
