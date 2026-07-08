# 🏰 GATTAN — Capitale du Territoire Salamander

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_SAL_CAP_001` |
| **Nom Officiel** | Gattan |
| **Surnoms** | « La Forge Ardente », « Citadelle de Feu » |
| **Type** | Capitale Raciale |
| **Territoire** | Salamander |
| **Safe Zone** | ✅ Oui — PK impossible dans l'enceinte de la cité |
| **Niveau Recommandé** | 1 – 99 (zone urbaine) |
| **Statut The Seed** | Zone persistante — sauvegarde Cardinal toutes les 300 secondes |
| **Fiche lore complémentaire** | `lore_mecaniques/geographie_villes/gattan_territoire_salamander.md` (registre PNJ `NPC_GAT_01-07`) |

---

## Description Atmosphérique

Gattan est une forteresse militaire titanesque bâtie sur les flancs d'un volcan semi-actif dont les coulées de lave canalisées servent à la fois de système de chauffage, d'éclairage et de défense naturelle. La capitale Salamander est un monument à la puissance brute : des murailles de basalte noir hautes de trente mètres, hérissées de tours de garde crénelées, entourent une cité où chaque bâtiment est construit en pierre volcanique rouge sombre et en acier forgé. Les rues sont larges et droites, conçues pour le déploiement rapide des troupes — car les Salamander sont avant tout une nation de guerriers.

Le cœur de la cité est dominé par la **Grande Forge**, un bâtiment colossal surmonté d'une cheminée qui crache en permanence des étincelles et de la fumée rouge. C'est ici que les meilleurs forgerons d'Alfheim travaillent nuit et jour, le martèlement de leurs enclumes créant un rythme industriel qui résonne dans toute la ville. Le système Cardinal génère des particules de braise qui flottent dans l'air ambiant, donnant à Gattan une atmosphère perpétuellement incandescente.

Les canaux de lave qui sillonnent la ville sont enjambés par des ponts de fer forgé et bordés de garde-fous ornés de sculptures de dragons — le symbole de la faction Salamander. La lumière est rougeâtre et chaude, projetée par les coulées magmatiques et les lanternes de cristal de feu suspendues aux corniches. L'air est sec, chaud, et porte l'odeur du métal en fusion et du soufre. Malgré son apparence martiale, Gattan possède aussi des tavernes animées où les guerriers Salamander festoient bruyamment après leurs raids, et un marché aux armes réputé dans tout Alfheim pour la qualité supérieure de son équipement offensif.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Sec, brumeux de cendres, chaleur constante |
| **Cycle Jour** | 06h00 – 20h00 (ciel rouge-orange à travers la brume volcanique) |
| **Cycle Nuit** | 20h00 – 06h00 (lueur rouge des coulées de lave, ciel noir de suie) |
| **Événements Météo Rares** | Éruption Mineure (pluie de cendres, +10% dégâts de feu pendant 1h) |
| **Température Simulée** | 30°C – 45°C |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Plaines de Cendres | `ZONE_SAL_HUNT_001` | `!marcher sud` | 0 MP | 2 min |
| Désolation de Magma | `ZONE_SAL_HUNT_002` | `!marcher ouest` | 0 MP | 5 min |
| Caldeira d'Obsidienne | `ZONE_SAL_DUN_001` | `!marcher nord` (intérieur volcan) | 0 MP | 3 min |
| Route Aérienne Gattan → Alne | `ZONE_ROUTE_SAL_ALN` | `!voler alne` | 100 MP | 15 min |
| Forêt de Lugru (frontière Sylph) | `ZONE_SYL_HUNT_002` | `!voler est` | 80 MP | 12 min |

---

## PNJ Résidents

> Fiches détaillées : `lore_mecaniques/geographie_villes/gattan_territoire_salamander.md` (IDs actés à l'étape 3).

### Marchands
| Nom | ID | Fonction | Localisation |
|---|---|---|---|
| **Maître-Forgeron Kagemune** | `NPC_GAT_01` | Forge d'armes lourdes (Épées à deux mains, Haches, Lances) | Grande Forge |
| **Armurier Graz** | `NPC_GAT_02` | Armures lourdes et boucliers | Quartier Militaire |
| **Alchimiste Mortis** | `NPC_GAT_03` | Potions de force, résistance au feu, bombes incendiaires | Ruelle de l'Alchimiste |
| **Marchande de Familiers Pyra** | `NPC_GAT_04` | Familiers de feu (Salamandre, Phénix miniature) | Place du Dragon |

### Quêteurs
| Nom | ID | Quête | Récompense |
|---|---|---|---|
| **Général Eugene (hologramme)** | — | « La Voie du Guerrier » (chaîne de quêtes raciale) | Compétence « Volcanic Blaze » |
| **Vétéran Mortifer** | `NPC_GAT_05` | « Purge des Frontières » (quotidienne) | 600 Yrd + 250 XP |
| **Ferro le Colporteur (forgeron ambulant)** | `NPC_GAT_07` | « Minerai de Feu Pur » (récoltable) | Amélioration d'arme gratuite |

### Gardes
| Nom | ID | Comportement |
|---|---|---|
| **Légionnaires Salamander (×16)** | — | Patrouille armée lourde — les plus agressifs envers les intrus |
| **Capitaine de la Garde Volcanus** | `NPC_GAT_06` | Garde la porte principale — défie les joueurs non-Salamander (`!duel_challenge` formel) |

---

## Mobs Spawnable

> ⚠️ Aucun mob ne spawn dans l'enceinte de Gattan (Safe Zone). Mobs de la zone périphérique :

| Mob | ID | Niveau | Taux d'Apparition | Drop Notable |
|---|---|---|---|---|
| Lézard de Lave | `MOB_SAL_001` | 3-6 | 35% | Écaille Ignée |
| Scarabée de Braise | `MOB_SAL_002` | 5-8 | 30% | Carapace Ardente |
| Imp de Feu | `MOB_SAL_003` | 4-7 | 20% | Cendre Magique |
| Chien Infernal | `MOB_SAL_004` | 8-12 | 10% | Croc Infernal |
| Phénix Juvénile (rare) | `MOB_SAL_005` | 10-15 | 5% | Plume de Phénix (rare) |

---

## Ressources Récoltables

| Ressource | Type | Localisation | Compétence Requise |
|---|---|---|---|
| Minerai de Fer Volcanique | Minerai | Parois du volcan | Minage Lv.1 |
| Obsidienne | Minerai (rare) | Coulées de lave refroidies | Minage Lv.15 |
| Soufre Cristallisé | Minerai | Fumerolles | Minage Lv.8 |
| Cactus de Cendre | Plante | Périphérie de Gattan | Herboristerie Lv.5 |
| Salamandre de Poche | Familier | Canaux de lave | Dressage Lv.10 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Grande Forge** | Meilleur atelier de forge d'Alfheim — bonus +15% aux stats des armes forgées ici |
| **Arène du Dragon** | Arène PvP officielle — Tournois hebdomadaires avec récompenses |
| **Autel de Résurrection** | Point de respawn Salamander |
| **Portail de Téléportation** | Voyage rapide (50-200 Yrd) |
| **Taverne du Volcan Ivre** | Hub social — Quêtes de rumeurs, recrutement de groupe |
| **Quartier Général Militaire** | Accès aux missions de guerre de faction |
| **Statue de Kagemune** | Monument au plus grand guerrier Salamander — buff de moral (+5% ATK, 10 min) |

---

## Lore / Histoire

Gattan est la cité la plus ancienne et la plus militarisée d'Alfheim Online. Les Salamander, race guerrière par excellence, ont choisi de construire leur capitale dans la gueule même d'un volcan — un choix qui reflète leur philosophie : la force naît de l'épreuve du feu. La Grande Forge de Gattan est alimentée directement par le magma volcanique, ce qui explique la supériorité reconnue de l'armement Salamander sur celui des autres factions.

Sous le commandement du Général Eugene, les Salamander ont mené les campagnes les plus agressives de l'histoire d'ALO : l'invasion du territoire Sylph, le siège de Swilvane, et la tentative de monopole des routes vers Alne. Eugene est considéré comme le guerrier le plus puissant d'ALO — son épée démoniaque Gram peut trancher n'importe quelle défense. Seul Kirito l'a vaincu en duel, un exploit considéré comme impossible par les standards du jeu.

La rivalité entre Salamander et Sylph est le conflit le plus ancien et le plus intense d'Alfheim, alimenté par leur proximité géographique et leurs philosophies diamétralement opposées : la vitesse contre la puissance, le vent contre le feu.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🔥 Gattan — Capitale Salamander` |
| **Description du Groupe** | `Bienvenue dans la Citadelle de Feu ! 🏰🔥 Zone Safe. La meilleure forge d'Alfheim vous attend. !aide !boutique !forge !quêtes` |
| **Règles Affichées** | `1. Pas de spam. 2. Les non-Salamander sont tolérés mais surveillés. 3. RP guerrier encouragé. 4. Respectez la hiérarchie militaire.` |

---

> *« Le feu ne demande pas la permission de brûler. Sois le feu. »* — Général Eugene
