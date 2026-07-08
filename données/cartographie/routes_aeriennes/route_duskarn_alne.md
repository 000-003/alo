# ✈️ ROUTE AÉRIENNE DUSKARN → ALNE — Couloir de Vol Imp

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_ROUTE_IMP_ALN` |
| **Nom Officiel** | Route Aérienne Duskarn – Alne |
| **Surnoms** | « Le Couloir Pourpre », « La Voie des Contrebandiers » |
| **Type** | Route Aérienne |
| **Territoire** | Neutre (espace aérien international) |
| **Safe Zone** | ❌ Non — PK autorisé (la route la plus dangereuse des neuf) |
| **Niveau Recommandé** | 10 – 99 |
| **Statut The Seed** | Zone de transit — pas de sauvegarde de position |

---

## Description Atmosphérique

Sortir de Duskarn en vol, c'est jaillir d'un puits d'ombre vers un ciel aveuglant — le Cardinal inflige un débuff « Éblouissement » de 10 secondes aux Imp quittant le canyon de jour, moment que les pirates aériens connaissent par cœur. Passé ce cap, la route file vers l'ouest au-dessus de mesas violettes, réputée pour son trafic de marchandises non déclarées : les vigies y regardent ostensiblement ailleurs, moyennant finance.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Variable — change selon la zone survolée |
| **Section 1 (Duskarn)** | Sortie de canyon — débuff Éblouissement de jour |
| **Section 2 (Terres neutres)** | Mesas et courants secs |
| **Section 3 (Approche Alne)** | Calme, lumière dorée d'Yggdrasil |
| **Événements Météo Rares** | Tempête Aérienne (vol impossible, atterrissage forcé sur îlot) |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Duskarn (départ) | `ZONE_IMP_CAP_001` | `!atterrir duskarn` | 0 MP | Instantané |
| Alne — Capitale Neutre | `ZONE_NEU_CAP_001` | `!atterrir alne` | 0 MP | Arrivée auto en 15 min |
| Îlot de l'Aveugle (point de repos) | — | `!atterrir îlot` | 0 MP | Variable |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Vigie Borgne Imp** | Alerte PK… sélective (fiabilité proportionnelle au pourboire) | Point de départ (Duskarn) |
| **Receleuse Volante Mirre** | Potions de MP ×2, rachat d'objets sans questions | Îlot de l'Aveugle |

---

## Mobs Spawnable

| Mob | ID | Niveau | HP | Taux d'Apparition | Agressivité | Drop Notable |
|---|---|---|---|---|---|---|
| Griffon Sauvage | `MOB_AIR_001` | 15-25 | 3000-5000 | 20% | Agressif | Plume de Griffon, Griffe Dorée |
| Wyverne Mineure | `MOB_AIR_002` | 20-30 | 5000-8000 | 12% | Agressif | Écaille de Wyverne |
| Essaim de Guêpes Géantes | `MOB_AIR_003` | 10-15 | 500 (×20) | 15% | Agressif | Miel Royal (rare) |
| Dragon de Brume (rare) | `MOB_AIR_004` | 35-45 | 30000 | 2% | Agressif | Souffle de Brume (sort), Écaille de Brume |

---

## Ressources Récoltables

| Ressource | Type | Spawn | Compétence Requise |
|---|---|---|---|
| Cristal de Ciel | Minerai | Îlots flottants | Minage Lv.20 |
| Mousse des Nuages | Plante | Surface des îlots | Herboristerie Lv.15 |
| Plume de Courant | Matériau | Drop de mobs aériens uniquement | — |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Îlot de l'Aveugle** | Repos MP à mi-parcours — marché gris toléré |
| **Panorama d'Yggdrasil** | Cinématique de 5s à la première traversée |
| **Cache du Contrebandier** | Coffre caché sous l'îlot, accès en vol inversé (Vol Lv.35) |

---

## Lore / Histoire

Officiellement, la route Duskarn–Alne est une voie commerciale comme les autres. Officieusement, c'est l'artère du marché gris d'Alfheim : les cargaisons y voyagent de nuit, quand l'avantage racial Imp est total. La Garde d'Alne a renoncé à patrouiller le couloir après l'incident dit « des Trois Lanternes », où trois inspecteurs successifs sont revenus délestés de leurs bottes — sans avoir rien vu.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `✈️ Vol Duskarn → Alne` |
| **Description du Groupe** | `Route aérienne vers la capitale neutre. 🕐 Trajet: 15 min. ⚠️ ZONE PVP ÉLEVÉE — la route des contrebandiers. Commandes: !atterrir, !accélérer, !esquiver.` |
| **Règles Affichées** | `1. Transit — arrivée automatique après 15 min. 2. Vous pouvez être attaqué en vol. 3. Voyagez de nuit si vous êtes Imp… ou accompagné sinon.` |

---

> *« Sur cette route, l'honnêteté est un bagage : plus t'en portes, plus tu voles lentement. »* — Receleuse Mirre
