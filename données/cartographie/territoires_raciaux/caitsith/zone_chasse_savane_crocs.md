# 🦁 SAVANE DES CROCS — Zone de Chasse Cait Sith (Débutant)

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_CAI_HUNT_001` |
| **Nom Officiel** | Savane des Crocs |
| **Surnoms** | « Le Terrain d'Apprivoisement », « Les Herbes Hautes » |
| **Type** | Savane / Zone de Chasse (Tier 1) |
| **Territoire** | Cait Sith (zone intérieure) |
| **Safe Zone** | ❌ Non — PK autorisé (risque faible, zone patrouillée) |
| **Niveau Recommandé** | 5 – 15 |
| **Statut The Seed** | Zone persistante — Respawn mobs toutes les 180 secondes |

---

## Description Atmosphérique

Océan d'herbes hautes ondulant sous le vent chaud, la Savane des Crocs est le terrain d'entraînement des jeunes dompteurs Cait Sith. Des acacias solitaires servent de perchoirs aux éclaireurs, et des pistes de gibier sillonnent les herbes — le moteur Cardinal y masque les mobs jusqu'à 5 mètres, avantageant la perception raciale féline. C'est ici que chaque Cait Sith capture traditionnellement son premier familier.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Sec et ensoleillé |
| **Cycle Jour** | 06h00 – 20h00 (chaleur, gibier actif) |
| **Cycle Nuit** | 20h00 – 06h00 (prédateurs nocturnes +15% spawn) |
| **Événements Météo Rares** | Feu de Brousse (fuite massive du gibier vers le nord, XP de capture ×2) |
| **Température Simulée** | 24°C – 34°C |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Freelia (Capitale) | `ZONE_CAI_CAP_001` | `!marcher nord` | 0 MP | 2 min |
| Collines de l'Ouest | `ZONE_CAI_HUNT_002` | `!marcher ouest` | 0 MP | 6 min |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Dresseuse Mira** | Tutorielle Beast Taming — quête « Ton Premier Croc » (Lv.5) | Campement de l'Acacia |
| **Vendeur d'Appâts Tobbs** | Appâts de capture standard | Campement de l'Acacia |
| **Patrouille Cait Sith (×2)** | Dissuasion anti-PK (zone débutant) | Pistes principales |

---

## Mobs Spawnable

| Mob | ID | Niveau | HP | Taux d'Apparition | Agressivité | Drop Notable |
|---|---|---|---|---|---|---|
| Hyène Ricanante | `MOB_CAI_010` | 5-8 | 600-900 | 30% | Agressif (meute de 3) | Croc de Hyène |
| Buffle de Savane | `MOB_CAI_011` | 8-12 | 1500-2200 | 25% | Passif → charge si attaqué | Cuir Épais, Viande de Buffle |
| Autruche Belliqueuse | `MOB_CAI_012` | 6-10 | 800-1200 | 25% | Agressif | Plume Rigide, Œuf Géant |
| Lionceau Sauvage | `MOB_CAI_013` | 10-15 | 1800-2500 | 20% | Neutre — **domptable** (`!tame`) | Griffe Juvénile |

---

## Ressources Récoltables

| Ressource | Type | Spawn | Compétence Requise |
|---|---|---|---|
| Herbe à Gibier | Plante | Herbes hautes | Herboristerie Lv.3 |
| Gomme d'Acacia | Bois | Acacias | Bûcheronnage Lv.5 |
| Silex Taillable | Minerai | Lits de rivière asséchés | Minage Lv.3 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Campement de l'Acacia** | Feu de camp — régénération HP/MP accélérée, PNJ tutoriels |
| **Point d'Eau des Troupeaux** | Concentration de gibier à l'aube (taux de spawn ×1.5) |
| **Rocher du Guet** | Vue dégagée — `!analyze` révèle tous les mobs de la zone |
| **Pierre de Sauvegarde** | Point de téléportation enregistrable |

---

## Lore / Histoire

La Savane des Crocs est le berceau du rite du Premier Lien : tout Cait Sith doit y capturer seul son premier familier avant d'être reconnu adulte. Les crânes de buffles plantés sur les pistes ne sont pas des trophées mais des bornes — chacun marque l'endroit où un dompteur célèbre a noué son premier lien.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🦁 Savane des Crocs — Chasse Lv.5-15` |
| **Description du Groupe** | `Zone de chasse débutant Cait Sith. Mobs Lv.5-15. Lionceaux domptables ! !chasser !tame !récolter` |
| **Règles Affichées** | `1. Zone PvP faible — patrouilles actives. 2. Priorité de capture au premier !tame lancé. 3. Pas de kill-steal.` |

---

> *« Ne cours jamais dans les herbes hautes. Ce qui t'y attend court plus vite. »* — Dresseuse Mira
