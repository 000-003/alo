# 💧 LAC CRISTALLIN — Zone de Chasse Undine (Débutant)

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_UND_HUNT_001` |
| **Nom Officiel** | Lac Cristallin |
| **Surnoms** | « Le Miroir d'Écume », « Les Eaux Claires » |
| **Type** | Zone Lacustre / Zone de Chasse |
| **Territoire** | Undine |
| **Safe Zone** | ❌ Non — PK autorisé (rare : patrouilles Undine fréquentes) |
| **Niveau Recommandé** | 3 – 12 |
| **Statut The Seed** | Zone persistante — Respawn mobs toutes les 180 secondes |
| **Fiche lore capitale** | `lore_mecaniques/geographie_villes/archipel_territoire_undine.md` |

---

## Description Atmosphérique

Le Lac Cristallin est l'immense étendue d'eau douce sur laquelle flotte l'Archipel d'Écume — chasser ici, c'est naviguer entre les îlots de corail blanc qui ceinturent la capitale. L'eau est si transparente que le Cardinal affiche le fond du lac comme un second ciel inversé : bancs de poissons-lames, jardins de nénuphars de cristal et épaves de gondoles y dessinent un paysage sous les coques. Les novices Undine y font leurs premières armes à fleur d'eau ; les joueurs des races lourdes (Salamander, Gnome) louent les gondoles de Nérée pour éviter le drain de HP de la noyade. Au crépuscule, le lac s'illumine de méduses phosphorescentes et les chants de l'Académie des Mages portent sur l'eau.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Humide, pluies fines fréquentes, brumes matinales |
| **Cycle Jour** | 06h00 – 20h00 (eau turquoise, visibilité totale du fond) |
| **Cycle Nuit** | 20h00 – 06h00 (méduses luminescentes — chasse nocturne avantagée) |
| **Événements Météo Rares** | Marée de Cristal (+15% taux de récolte de Sable d'Océan pendant 1h) |
| **Température Simulée** | 14°C – 22°C |
| **Effet Environnemental** | Noyade : sans nage/gondole/vol stationnaire, drain 10 HP/sec (armures lourdes coulent) |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Archipel d'Écume (Capitale) | `ZONE_UND_CAP_001` | `!marcher nord` (pontons) | 0 MP | 2 min |
| Marais de Brume | `ZONE_UND_HUNT_002` | `!marcher sud` | 0 MP | 6 min |

---

## PNJ Résidents

| Nom | ID | Fonction | Localisation |
|---|---|---|---|
| **Pêcheuse Maëlle** | `NPC_UND_10` | Quête « Les Filets Percés » (quotidienne, Lv.5) + rachat de poissons | Ponton des Filets |
| **Patrouilleur Lacustre Undine (×2)** | — | Garde — intervient sur tout PK dans les eaux claires | Îlots de corail |

---

## Mobs Spawnable

### Périphérie de la capitale (contrat T2 de `T_SPAWN_TABLES` : rattachés ici, `weather_condition = 'périphérie CAP'`)

| Mob | ID | Niveau | Taux d'Apparition | Drop Notable |
|---|---|---|---|---|
| Carpe-Miroir | `MOB_UND_001` | 2-4 | 35% | Écaille Miroitante |
| Crabe de Nacre | `MOB_UND_002` | 3-6 | 30% | Pince Nacrée |
| Ondin Farceur | `MOB_UND_003` | 4-7 | 20% | Larme d'Ondin |
| Méduse Luminescente (rare) | `MOB_UND_004` | 8-12 | 5% | Filament Lumineux (rare, nuit uniquement) |

### Zone propre

| Mob | ID | Niveau | HP | Taux d'Apparition | Agressivité | Drop Notable |
|---|---|---|---|---|---|---|
| Élémentaire d'Eau Mineur | `MOB_UND_010` | 5-9 | 400-700 | 30% | Neutre (cf. `mob_undine_0.md`, requalifié Tier 1) | Cœur d'Eau Pure |
| Grenouille-Tambour | `MOB_UND_011` | 4-8 | 300-500 | 25% | Neutre (meutes de 3-5) | Peau de Tambour |
| Brochet-Rasoir | `MOB_UND_012` | 7-11 | 600-900 | 20% | Agressif (sous la surface) | Nageoire-Lame |
| Héron de Cristal | `MOB_UND_013` | 9-12 | 700-1000 | 10% | Neutre | Plume de Cristal (composant Académie) |

---

## Ressources Récoltables

| Ressource | Type | Spawn | Compétence Requise |
|---|---|---|---|
| Sable d'Océan | Minerai | Hauts-fonds (requis par Finbar `NPC_UND_06` — Forge de Cristal) | Minage Lv.5 |
| Nénuphar de Cristal | Plante | Surface du lac | Herboristerie Lv.3 |
| Perle d'Eau Douce | Gemme | Bancs de moules | Pêche Lv.10 |
| Truite Saphir | Poisson | Eaux profondes | Pêche Lv.1 |
| Algue Vive | Plante | Fond du lac (nage requise) | Herboristerie Lv.8 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Ponton des Filets** | Village lacustre de pêcheurs — quêtes quotidiennes, location de barques (100 Yrd) |
| **Jardin de Corail Blanc** | Zone de récolte protégée — patrouilles renforcées |
| **Épave de la *Sirène Rieuse*** | Gondole de cérémonie coulée — coffre caché (Nage Lv.10) |
| **Rochers de Corail** | ⚠️ Repaire de Sirena l'Envoûteuse (`NPC_UND_05`, PNJ hostile déguisé — cf. fiche capitale) |
| **Pierre de Sauvegarde** | Point de téléportation sur l'îlot central |

---

## Lore / Histoire

Le Lac Cristallin n'a pas toujours été clair : les archives de l'Académie racontent qu'à la naissance d'Alfheim, ses eaux étaient noires de vase. C'est l'Archimage Thalassa qui, par un rituel de purification continue — toujours actif, entretenu par les élèves de première année —, a rendu le lac transparent. Les mauvaises langues de Duskarn prétendent que le rituel ne purifie rien : il *déplace* la vase vers le sud, et que le Marais de Brume est la vraie facture de la beauté de l'Archipel. L'Académie n'a jamais démenti.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `💧 Lac Cristallin — Chasse Lv.3-12` |
| **Description du Groupe** | `Zone de chasse débutant Undine. Mobs Lv.3-12. 🚣 Races lourdes: louez une gondole (noyade = drain HP). Sable d'Océan pour la Forge de Cristal. !chasser !pêcher !nager` |
| **Règles Affichées** | `1. Zone PvP (patrouilles actives). 2. L'eau draine les HP des non-nageurs. 3. Respectez le Jardin de Corail Blanc.` |

---

> *« Regarde bien le fond du lac, petit. Si tu vois ton reflet nager plus vite que toi, ce n'est pas ton reflet. »* — Pêcheuse Maëlle
