# 🌫️ MARAIS DE BRUME — Zone de Chasse Undine (Frontière)

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_UND_HUNT_002` |
| **Nom Officiel** | Marais de Brume |
| **Surnoms** | « La Facture de l'Archipel », « Les Eaux Basses » |
| **Type** | Marécage / Zone de Chasse Frontalière |
| **Territoire** | Undine |
| **Safe Zone** | ❌ Non — PK autorisé, zone frontalière active |
| **Niveau Recommandé** | 15 – 35 |
| **Statut The Seed** | Zone persistante — Respawn mobs toutes les 240 secondes |

---

## Description Atmosphérique

Au sud du Lac Cristallin, l'eau claire meurt dans une plaine noyée où la brume ne se lève jamais tout à fait. Le Marais de Brume est un labyrinthe de tourbières, de saules noyés et de passerelles pourrissantes où la visibilité tombe parfois à quelques mètres — le Cardinal y simule un **Brouillard Épais** qui conditionne l'apparition des créatures les plus dangereuses. C'est pourtant la zone la plus fréquentée du territoire : la frontière Puca à l'ouest amène des caravanes de musiciens-marchands, celle des Leprechaun à l'est des convois d'eau pure contre acier forgé. Entre les deux, contrebandiers, feux follets et trolls se partagent les hauts-fonds.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Brouillard permanent, bruine, remontées de gaz de tourbe |
| **Cycle Jour** | Brume laiteuse — visibilité 30 m |
| **Cycle Nuit** | Brume noire — visibilité 10 m, feux follets actifs |
| **Événements Météo Rares** | Brouillard Épais (spawns rares actifs, `weather_condition` de `T_SPAWN_TABLES`) |
| **Température Simulée** | 8°C – 16°C |
| **Effet Environnemental** | Enlisement : hors des passerelles, vitesse ÷2 et vol impossible (ailes détrempées) |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Archipel d'Écume (Capitale) | `ZONE_UND_CAP_001` | `!voler nord` | 30 MP | 5 min |
| Lac Cristallin | `ZONE_UND_HUNT_001` | `!marcher nord` | 0 MP | 6 min |
| Gouffre de Léviathan | `ZONE_UND_DUN_001` | `!marcher est` (doline noyée) | 0 MP | 8 min |
| Bois des Échos (frontière Puca) | `ZONE_PUC_HUNT_002` | `!marcher ouest` | 0 MP | 12 min |
| Champs de Scories (frontière Leprechaun) | `ZONE_LEP_HUNT_002` | `!marcher est` | 0 MP | 12 min |

> Statuts lore des frontières (atlas §3) : Puca ↔ Undine « Cordiale » · Undine ↔ Leprechaun « Commerce (eau/forge) ».

---

## PNJ Résidents

| Nom | ID | Fonction | Localisation |
|---|---|---|---|
| **Sorcière des Tourbières Morgane** | `NPC_UND_11` | Quête « Ce que la Brume Rend » (Lv.20) + troc d'ingrédients d'alchimie | Cabane sur pilotis |
| **Garde-Brume Undine (×2)** | — | Patrouille frontalière — escorte les caravanes Leprechaun | Passerelle de l'Est |

---

## Mobs Spawnable

| Mob | ID | Niveau | HP | Taux d'Apparition | Agressivité | Drop Notable |
|---|---|---|---|---|---|---|
| Troll Vaseux | `MOB_UND_020` | 16-22 | 2800-4000 | 20% | Agressif (cf. `mob_undine_1.md`) | Graisse de Troll |
| Fée Corrompue des Brumes | `MOB_UND_021` | 15-20 | 1800-2600 | 18% | Agressif (cf. `mob_undine_2.md`) | Aile Souillée, Éclat Magique |
| Sangsue Royale | `MOB_UND_022` | 17-23 | 2000-3000 | 17% | Agressif (drain de HP) | Mucus Régénérant (alchimie) |
| Feu Follet Noyeur | `MOB_UND_023` | 20-26 | 2400-3400 | 15% | Agressif (attire hors des passerelles) | Essence Follette |
| Sanglier des Tourbières | `MOB_UND_024` | 15-19 | 2200-3000 | 15% | Neutre (cf. `mob_undine_4.md`) | Défense Boueuse, Viande Faisandée |
| Hydre Juvénile (mini-boss) | `MOB_UND_025` | 30-33 | 18000 | 5% (Brouillard Épais uniquement) | Agressif | Croc d'Hydre (rare) |
| Brumaire, le Noyeur (boss de zone) | `MOB_UND_026` | 35 | 55000 | 1% (spawn toutes les 6h, nuit) | Agressif | Linceul de Brume (cape épique), Titre « Marcheur des Eaux Basses » |

---

## Ressources Récoltables

| Ressource | Type | Spawn | Compétence Requise |
|---|---|---|---|
| Tourbe Alchimique | Minerai | Fosses de tourbe | Minage Lv.12 |
| Fleur de Brume | Plante | Hauts-fonds (composant Potion d'Oxygène de Coralia `NPC_UND_07`) | Herboristerie Lv.18 |
| Champignon Lanterne | Plante | Troncs des saules noyés | Herboristerie Lv.15 |
| Anguille de Vase | Poisson | Chenaux profonds | Pêche Lv.15 |
| Fer des Marais | Minerai | Concrétions ferreuses (recherché par les caravanes Leprechaun) | Minage Lv.10 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Passerelle de l'Est** | Axe commercial Undine–Leprechaun — péage symbolique (10 Yrd) reversé à l'entretien |
| **Cercle des Saules Noyés** | Site rituel — spawn préférentiel de Brumaire |
| **Cabane de Morgane** | Seul toit sec du marais — troc d'ingrédients, rumeurs |
| **Doline Noyée** | Entrée effondrée menant au Gouffre de Léviathan |
| **Pierre de Sauvegarde** | Point de téléportation (îlot de tourbe stabilisé) |

---

## Lore / Histoire

Les Undine soutiennent que le marais a toujours été là. Les archivistes Puca, qui notent tout en chansons, chantent autre chose : que les Eaux Basses s'étendent d'une largeur de doigt chaque année depuis que l'Académie purifie le Lac Cristallin. Morgane, qui vit ici depuis plus longtemps que quiconque ose le calculer, ne prend pas parti — elle encaisse. Chaque secret que la brume engloutit finit par remonter dans sa nasse, et il se murmure que même Thalassa lui achète son silence. Quant à Brumaire, le boss des lieux, les pêcheurs jurent qu'il n'est pas un monstre : juste la vase du lac, rendue à elle-même, qui revient réclamer son ancien lit.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🌫️ Marais de Brume — Chasse Lv.15-35` |
| **Description du Groupe** | `Zone frontalière Undine (Puca ↔ Leprechaun). Mobs Lv.15-35. Boss: Brumaire le Noyeur (6h, nuit). ⚠️ Visibilité réduite — restez sur les passerelles. !chasser !récolter` |
| **Règles Affichées** | `1. Zone PvP frontalière. 2. Hors passerelle: vitesse ÷2, vol impossible. 3. Les feux follets mentent.` |

---

> *« La brume ne cache rien, mon petit. Elle garde. Nuance. »* — Morgane, Sorcière des Tourbières
