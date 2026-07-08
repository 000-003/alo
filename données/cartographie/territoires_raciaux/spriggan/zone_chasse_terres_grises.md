# 🌫️ TERRES GRISES — Zone de Chasse Spriggan (Frontalière)

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_SPR_HUNT_002` |
| **Nom Officiel** | Terres Grises |
| **Surnoms** | « Le Pays Sans Couleur », « La Marche des Cendres » |
| **Type** | Lande cendreuse / Zone de Chasse Frontalière (Tier 3) |
| **Territoire** | Spriggan (frontières Imp et Gnome) |
| **Safe Zone** | ❌ Non — PK autorisé (zone frontalière) |
| **Niveau Recommandé** | 15 – 35 |
| **Statut The Seed** | Zone persistante — Respawn mobs toutes les 240 secondes |

---

## Description Atmosphérique

Les Terres Grises sont une lande où la couleur elle-même semble avoir été pillée : herbe cendrée, ciel d'étain, rivières de poussière. Le Cardinal y applique un filtre de désaturation totale — les indicateurs visuels habituels (barres rouges des ennemis, lueurs de sorts) sont atténués de 50%, forçant un jeu à l'ancienne, aux annonces textuelles. Les Spriggans y excellent : quand tout est gris, l'illusion et la réalité coûtent le même prix. Au nord-est s'élèvent les Falaises Imp ; au sud-est fument les Carrières gnomes.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Gris uniforme, vent chargé de cendre |
| **Cycle Jour** | 06h00 – 20h00 (à peine plus clair que la nuit) |
| **Cycle Nuit** | 20h00 – 06h00 (spectres actifs, +20% spawn) |
| **Événements Météo Rares** | Percée de Couleur (un rayon de soleil traverse — l'Avatar de Cendre se manifeste pour l'éteindre) |
| **Température Simulée** | 6°C – 13°C |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Penwether (Capitale) | `ZONE_SPR_CAP_001` | `!voler est` | 30 MP | 5 min |
| Ruines Noires | `ZONE_SPR_HUNT_001` | `!marcher est` | 0 MP | 6 min |
| Nécropole Antique | `ZONE_SPR_DUN_001` | `!marcher nord` | 0 MP | 8 min |
| Falaises du Crépuscule (frontière Imp) | `ZONE_IMP_HUNT_002` | `!voler nord` | 20 MP | 12 min |
| Carrières Brisées (frontière Gnome) | `ZONE_GNO_HUNT_002` | `!marcher sud-est` | 0 MP | 12 min |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Sentinelle du Pacte Ilvo** | Quêtes conjointes Imp-Spriggan (Lv.20) | Borne du Pacte |
| **Colporteur Daltonien Wick** | Marchand — vend des « lunettes de couleur » (annulent le filtre gris, 30 min) | Chariot bâché errant |
| **Garde-Frontière Spriggan (×3)** | Alerte sur mouvements hostiles | Tumulus de guet |

---

## Mobs Spawnable

| Mob | ID | Niveau | HP | Taux d'Apparition | Agressivité | Drop Notable |
|---|---|---|---|---|---|---|
| Spectre Cendreux | `MOB_SPR_020` | 15-19 | 1400-2000 | 25% | Agressif (semi-transparent dans le gris) | Voile Cendreux |
| Chien de Cendre | `MOB_SPR_021` | 17-22 | 2000-2800 | 20% | Agressif (meute de 3) | Croc Terne |
| Mangeur de Couleurs | `MOB_SPR_022` | 18-24 | 2400-3300 | 18% | Agressif (draine 10 MP par coup) | Pigment Volé (composant de teinture rare) |
| Golem de Poussière | `MOB_SPR_023` | 15-18 | 1800-2500 | 17% | Passif → agressif | Cœur Friable |
| Papillon de Deuil | `MOB_SPR_024` | 16-20 | 1200-1700 | 14% | Neutre (débuff Mélancolie : -10% ATK) | Aile Grise |
| Chevalier sans Couleurs (mini-boss) | `MOB_SPR_025` | 30-33 | 14000 | 6% | Agressif (duel : cible un seul joueur) | Heaume Décoloré (rare) |
| Avatar de Cendre (boss de zone) | `MOB_SPR_026` | 35 | 48000 | 1% (spawn toutes les 6h) | Agressif (AoE de désaturation — soins -50%) | Cœur de Grisaille (épique), Titre « Porteur de Couleur » |

---

## Ressources Récoltables

| Ressource | Type | Spawn | Compétence Requise |
|---|---|---|---|
| Rose Grise | Plante | Tumulus | Herboristerie Lv.15 |
| Cendre Compactée | Minerai | Rivières de poussière | Minage Lv.12 |
| Pigment Résiduel | Matériau (rare) | Zones de Percée de Couleur | Perception Lv.20 |
| Bois Blanchi | Bois | Arbres morts | Bûcheronnage Lv.12 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Borne du Pacte** | Frontière officielle Imp-Spriggan — table d'échange de quêtes conjointes |
| **Le Verger Pétrifié** | Arbres fruitiers gris — cueillir un fruit restaure 100% MP mais applique Mélancolie |
| **Tumulus du Chevalier** | Tombe du Chevalier sans Couleurs — y déposer un objet coloré le fait apparaître |
| **Pierre de Sauvegarde** | Point de téléportation enregistrable |

---

## Lore / Histoire

Les Terres Grises seraient la facture d'une illusion trop ambitieuse : les premiers Spriggans auraient tenté de teindre le ciel entier pour un festival, et le Cardinal aurait « équilibré » l'opération en confisquant toutes les couleurs de la province. L'Avatar de Cendre serait le percepteur de cette dette — il éteint méthodiquement toute couleur qui repousse. Les Spriggans jurent que c'est faux, avec l'aplomb de gens qui ont signé le reçu.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🌫️ Terres Grises — Chasse Lv.15-35` |
| **Description du Groupe** | `Lande frontalière Spriggan / Imp / Gnome. ⚠️ ZONE PVP ACTIVE. Filtre gris : fiez-vous aux annonces du bot, pas aux couleurs. Boss « Avatar de Cendre » toutes les 6h. !chasser !fouiller !récolter` |
| **Règles Affichées** | `1. Zone PvP haute. 2. Boss de zone partagé, premier arrivé premier servi. 3. Pas d'exploit de terrain.` |

---

> *« Ici, même le sang coule en gris. Pratique pour le moral, mauvais pour les diagnostics. »* — Colporteur Wick
