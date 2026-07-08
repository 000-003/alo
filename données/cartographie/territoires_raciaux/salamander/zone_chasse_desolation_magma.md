# 🔥 DÉSOLATION DE MAGMA — Zone de Chasse Salamander (Niveau Moyen)

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_SAL_HUNT_002` |
| **Nom Officiel** | Désolation de Magma |
| **Surnoms** | « La Mer de Feu », « Le Purgatoire » |
| **Type** | Terrain Volcanique Actif / Zone de Chasse |
| **Territoire** | Salamander |
| **Safe Zone** | ❌ Non — PK autorisé, dégâts environnementaux permanents |
| **Niveau Recommandé** | 15 – 35 |
| **Statut The Seed** | Zone persistante — Respawn mobs toutes les 240 secondes |

---

## Description Atmosphérique

La Désolation de Magma est l'un des environnements les plus hostiles d'Alfheim Online — une étendue de terre fracturée où des lacs de lave en fusion occupent la moitié de la surface. Le sol est une mosaïque instable de plateformes de basalte noir séparées par des veines de magma incandescent. Chaque pas doit être calculé : le moteur physique de The Seed simule la fragilité de la croûte volcanique, et les plateformes les plus minces peuvent se fissurer et s'effondrer sous le poids d'un joueur en armure lourde, le plongeant dans la lave (dégâts massifs de feu : 200 HP/seconde sans résistance).

Des geysers de magma explosent à intervalles irréguliers, projetant des bombes de lave qui laissent des flaques brûlantes au sol. Des colonnes de fumée noire s'élèvent des crevasses, réduisant la visibilité et créant un paysage d'apocalypse. Le ciel est un dôme de cendres permanentes, teinté de rouge et d'orange, à travers lequel aucun soleil n'est jamais visible. La chaleur simulée dépasse les 60°C — les joueurs sans résistance au feu subissent un DoT (Damage over Time) de 5 HP/seconde.

Malgré sa dangerosité, la Désolation de Magma est extrêmement prisée des joueurs avancés car elle offre les meilleures ressources de forge de tout Alfheim et des mobs dont le loot est indispensable à la création d'armes de feu légendaires. C'est aussi la zone frontalière entre le territoire Salamander et l'accès ouest à la Forêt de Lugru, ce qui en fait un point de conflit PvP fréquent.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Éruptions, pluie de scories, chaleur extrême |
| **Cycle Jour** | Aucun cycle visible — ciel de cendres permanent |
| **Cycle Nuit** | Lueur magmatique plus intense la nuit |
| **Événements Météo Rares** | Éruption Majeure (zone entière = dégâts DoT ×3, boss rare spawn) |
| **Température Simulée** | 50°C – 70°C |
| **Effet Environnemental** | DoT 5 HP/sec sans Résistance au Feu Lv.10+ |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Gattan (Capitale) | `ZONE_SAL_CAP_001` | `!voler est` | 30 MP | 5 min |
| Plaines de Cendres | `ZONE_SAL_HUNT_001` | `!marcher est` | 0 MP | 6 min |
| Caldeira d'Obsidienne | `ZONE_SAL_DUN_001` | `!marcher nord` | 0 MP | 5 min |
| Forêt de Lugru (frontière Sylph) | `ZONE_SYL_HUNT_002` | `!marcher est` | 0 MP | 12 min |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Mineur Borgne Grokk** | Quête « Le Filon d'Adamantium » (Lv.25) | Plateforme Centrale |
| **Garde-Frontière Salamander (×2)** | Patrouille — Avertit des incursions Sylph | Lisière Est |

---

## Mobs Spawnable

| Mob | ID | Niveau | HP | Taux d'Apparition | Agressivité | Drop Notable |
|---|---|---|---|---|---|---|
| Élémentaire de Lave | `MOB_SAL_020` | 15-20 | 2500-4000 | 20% | Agressif | Cœur de Lave |
| Dragon de Magma Mineur | `MOB_SAL_021` | 20-28 | 5000-8000 | 12% | Agressif | Écaille de Magma, Croc Fondu |
| Golem d'Obsidienne | `MOB_SAL_022` | 22-26 | 6000-9000 | 10% | Agressif | Obsidienne Pure, Cœur d'Obsidienne |
| Ver de Lave | `MOB_SAL_023` | 18-22 | 3000-4500 | 18% | Agressif (souterrain) | Anneau de Ver (accessoire) |
| Spectre de Flamme | `MOB_SAL_024` | 20-25 | 3500-5500 | 15% | Agressif | Essence de Flamme |
| Ifrit Enchaîné (mini-boss) | `MOB_SAL_025` | 30-35 | 20000 | 3% | Agressif | Chaîne de l'Ifrit (arme), Fragment Divin |
| Roi des Vers (boss de zone) | `MOB_SAL_026` | 35 | 60000 | 1% (spawn toutes les 8h) | Agressif | Couronne du Ver (casque épique), Titre « Seigneur du Magma » |

---

## Ressources Récoltables

| Ressource | Type | Spawn | Compétence Requise |
|---|---|---|---|
| Adamantium Brut | Minerai (rare) | Veines profondes | Minage Lv.25 |
| Obsidienne Pure | Minerai | Coulées solidifiées | Minage Lv.15 |
| Cristal de Feu | Gemme | Geysers de magma | Minage Lv.20 |
| Fleur de Magma | Plante | Bord des lacs de lave | Herboristerie Lv.20 |
| Soufre Pur | Minerai | Fumerolles | Minage Lv.10 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Lac de Lave Central** | Plus grand lac de lave d'Alfheim — zone de spawn du Roi des Vers |
| **Plateforme du Forgeron** | Atelier de forge avancé — permet de travailler l'Adamantium |
| **Fissure Dimensionnelle** | Portail secret vers Jötunheimr (nécessite quête spéciale) |
| **Champ de Scories** | Zone de récolte intensive de minerais rares |
| **Pierre de Sauvegarde** | Point de téléportation (seul point safe de la zone) |

---

## Lore / Histoire

La Désolation de Magma est le résultat d'une ancienne bataille entre les Salamander et une armée de géants de feu qui ont émergé des profondeurs de Jötunheimr. La violence de l'affrontement a fracturé la croûte terrestre, créant ce paysage infernal permanent. Les Salamander ont gagné la bataille mais le terrain ne s'est jamais rétabli — un rappel permanent du prix de la victoire.

La Fissure Dimensionnelle au centre de la zone est un vestige de cette guerre : c'est par là que les géants de feu sont venus, et c'est par là qu'ils sont retournés. Certains joueurs courageux utilisent encore cette fissure comme passage secret vers Jötunheimr, le monde souterrain.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🔥 Désolation de Magma — Chasse Lv.15-35` |
| **Description du Groupe** | `⚠️ ZONE DANGEREUSE. DoT environnemental sans Résistance Feu. Mobs Lv.15-35. Boss: Roi des Vers (8h). Minerais rares. !chasser !miner !résister` |
| **Règles Affichées** | `1. Équipez une Résistance au Feu AVANT d'entrer. 2. Le sol peut s'effondrer. 3. Zone PvP active.` |

---

> *« Seuls les fous et les Salamander s'aventurent ici. Et parfois, ce sont les mêmes. »* — Mineur Borgne Grokk
