# ✈️ ROUTE AÉRIENNE PENWETHER → ALNE — Couloir de Vol Spriggan

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_ROUTE_SPR_ALN` |
| **Nom Officiel** | Route Aérienne Penwether – Alne |
| **Surnoms** | « Le Couloir Fantôme », « La Route Qui N'Existe Pas » |
| **Type** | Route Aérienne |
| **Territoire** | Neutre (espace aérien international) |
| **Safe Zone** | ❌ Non — PK autorisé (mais bonne chance pour trouver quelqu'un) |
| **Niveau Recommandé** | 10 – 99 |
| **Statut The Seed** | Zone de transit — pas de sauvegarde de position |

---

## Description Atmosphérique

Officiellement, la route Penwether–Alne est balisée comme les huit autres. Officieusement, la moitié des balises sont des illusions posées par les Spriggans eux-mêmes, qui considèrent qu'une route sûre est une route où l'on sait mentir aux cartes. Les voyageurs avertis suivent la règle locale : les vraies balises grésillent légèrement quand on les touche. Le brouillard gris qui monte des Terres Grises rend le couloir méconnaissable d'un vol à l'autre — les pillards eux-mêmes s'y perdent, ce qui en fait paradoxalement l'une des routes les plus sûres d'Alfheim.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Variable — change selon la zone survolée |
| **Section 1 (Penwether)** | Brouillard gris, balises illusoires |
| **Section 2 (Terres neutres)** | Éclaircies progressives — les couleurs reviennent |
| **Section 3 (Approche Alne)** | Calme, lumière dorée d'Yggdrasil |
| **Événements Météo Rares** | Tempête Aérienne (vol impossible, atterrissage forcé sur îlot) |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Penwether (départ) | `ZONE_SPR_CAP_001` | `!atterrir penwether` | 0 MP | Instantané |
| Alne — Capitale Neutre | `ZONE_NEU_CAP_001` | `!atterrir alne` | 0 MP | Arrivée auto en 15 min |
| Îlot Peut-Être (point de repos… probablement réel) | — | `!atterrir îlot` | 0 MP | Variable |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Baliseur Assermenté Trile** | Vend la « carte des vraies balises » (mise à jour hebdomadaire, fiable à 90%) | Point de départ (Penwether) |
| **Aubergiste de l'Îlot Morrow** | Potions de MP ×2 — son auberge est réelle, lui peut-être pas | Îlot Peut-Être |

---

## Mobs Spawnable

| Mob | ID | Niveau | HP | Taux d'Apparition | Agressivité | Drop Notable |
|---|---|---|---|---|---|---|
| Griffon Sauvage | `MOB_AIR_001` | 15-25 | 3000-5000 | 18% | Agressif | Plume de Griffon, Griffe Dorée |
| Wyverne Mineure | `MOB_AIR_002` | 20-30 | 5000-8000 | 10% | Agressif | Écaille de Wyverne |
| Essaim de Guêpes Géantes | `MOB_AIR_003` | 10-15 | 500 (×20) | 15% | Agressif | Miel Royal (rare) |
| Dragon de Brume (rare) | `MOB_AIR_004` | 35-45 | 30000 | 3% | Agressif (chez lui, ici) | Souffle de Brume (sort), Écaille de Brume |

---

## Ressources Récoltables

| Ressource | Type | Spawn | Compétence Requise |
|---|---|---|---|
| Cristal de Ciel | Minerai | Îlots flottants | Minage Lv.20 |
| Mousse des Nuages | Plante | Surface des îlots | Herboristerie Lv.15 |
| Balise Illusoire Épuisée | Matériau (composant d'illusion) | Balises mortes | Perception Lv.18 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Îlot Peut-Être** | Repos MP à mi-parcours — figure sur une carte sur deux |
| **Panorama d'Yggdrasil** | Cinématique de 5s à la première traversée (les Spriggans jurent qu'elle aussi est fausse) |
| **La Fausse Alne** | Illusion géante d'Alne à mi-chemin — piège à touristes historique, désormais monument classé |

---

## Lore / Histoire

La Fausse Alne fut érigée pendant la Quête du Roi des Fées pour détourner les factions rivales — le plus grand mensonge collectif de l'histoire spriggan, dont ils tirent une fierté nationale. Le Cardinal, au lieu de la dissiper, l'a classée « élément de patrimoine », décision que les Spriggans citent comme la preuve définitive que le système a le sens de l'humour. C'est par ce couloir que Kirito serait rentré de son ascension ; la route entière est donc, techniquement, un lieu de pèlerinage. Introuvable, comme il se doit.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `✈️ Vol Penwether → Alne` |
| **Description du Groupe** | `Route aérienne vers la capitale neutre. 🕐 Trajet: 15 min. ⚠️ Balises illusoires — les vraies grésillent. Commandes: !atterrir, !accélérer, !esquiver.` |
| **Règles Affichées** | `1. Transit — arrivée automatique après 15 min. 2. Ne suivez pas les balises muettes. 3. La grande ville à mi-chemin n'est PAS Alne.` |

---

> *« Si tu arrives à Alne du premier coup, c'est que tu t'es trompé de route. »* — Proverbe spriggan
