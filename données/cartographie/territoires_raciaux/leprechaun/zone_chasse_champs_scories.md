# 🌋 CHAMPS DE SCORIES — Zone de Chasse Leprechaun (Frontalière)

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_LEP_HUNT_002` |
| **Nom Officiel** | Champs de Scories |
| **Surnoms** | « La Décharge Ardente », « Le Cimetière des Ratés » |
| **Type** | Terril géant / Zone de Chasse Frontalière (Tier 3) |
| **Territoire** | Leprechaun (frontières Undine et Imp) |
| **Safe Zone** | ❌ Non — PK autorisé (zone frontalière) |
| **Niveau Recommandé** | 15 – 35 |
| **Statut The Seed** | Zone persistante — Respawn mobs toutes les 240 secondes |

---

## Description Atmosphérique

Des siècles de rebuts de forge ont créé ce paysage : collines de scories encore tièdes, lacs de trempe aux eaux irisées, et carcasses d'automates ratés à demi enfouis dans le mâchefer. Tout ce que Brokkheim jette finit ici — et tout n'y est pas mort. Le Cardinal réanime aléatoirement les rebuts en « Ferraille Éveillée », si bien que les récupérateurs travaillent toujours armés. Au nord, la brume des marais Undine condense sur les scories chaudes en un brouillard de vapeur permanent ; au sud plongent les Falaises Imp.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Dominante** | Brouillard de vapeur (frontière nord), chaleur de terril |
| **Cycle Jour** | 06h00 – 20h00 |
| **Cycle Nuit** | 20h00 – 06h00 (les scories rougeoient — visibilité correcte) |
| **Événements Météo Rares** | Marée de Ferraille (réanimation massive — 20 mobs mécaniques simultanés, loot ×2) |
| **Température Simulée** | 18°C – 30°C |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Brokkheim (Capitale) | `ZONE_LEP_CAP_001` | `!voler est` | 30 MP | 5 min |
| Vallée des Geysers | `ZONE_LEP_HUNT_001` | `!marcher est` | 0 MP | 6 min |
| Atelier Englouti | `ZONE_LEP_DUN_001` | `!marcher nord` | 0 MP | 8 min |
| Marais de Brume (frontière Undine) | `ZONE_UND_HUNT_002` | `!marcher nord` | 0 MP | 12 min |
| Falaises du Crépuscule (frontière Imp) | `ZONE_IMP_HUNT_002` | `!voler sud` | 20 MP | 12 min |

---

## PNJ Résidents

| Nom | Fonction | Localisation |
|---|---|---|
| **Récupérateur en Chef Grimble** | Quête « Tri Sélectif » (Lv.18) — prime par Ferraille Éveillée détruite | Camp du Tri |
| **Négociante Undine Loreli** | Troc eau pure contre métal récupéré | Ponton de la Brume |
| **Garde-Frontière Leprechaun (×3)** | Alerte sur mouvements hostiles | Sommets de terrils |

---

## Mobs Spawnable

| Mob | ID | Niveau | HP | Taux d'Apparition | Agressivité | Drop Notable |
|---|---|---|---|---|---|---|
| Ferraille Éveillée | `MOB_LEP_020` | 15-19 | 1600-2200 | 25% | Agressif (composition aléatoire) | Métal Récupérable |
| Limace de Mâchefer | `MOB_LEP_021` | 15-18 | 1400-1900 | 20% | Passif (traînée corrosive — dégâts d'armure) | Mucus Fondant |
| Épée Hantée | `MOB_LEP_022` | 18-24 | 2200-3000 | 18% | Agressif (une arme ratée qui cherche un porteur) | Lame Fêlée (réparable en arme unique) |
| Chien de Trempe | `MOB_LEP_023` | 17-22 | 2100-2900 | 17% | Agressif (meute de 3, robots de garde ensauvagés) | Mâchoire d'Acier |
| Élémentaire de Rouille | `MOB_LEP_024` | 20-26 | 2700-3700 | 14% | Agressif (corrode 1 point de durabilité par coup) | Cœur Oxydé |
| Golem de Scories (mini-boss) | `MOB_LEP_025` | 30-33 | 15500 | 5% | Agressif | Noyau de Scories (rare) |
| Forge-Vivante Ancestrale (boss de zone) | `MOB_LEP_026` | 35 | 50000 | 1% (spawn toutes les 6h) | Agressif (forge des mobs en plein combat) | Enclume Primitive (épique), Titre « Éteigneur de Forge » |

---

## Ressources Récoltables

| Ressource | Type | Spawn | Compétence Requise |
|---|---|---|---|
| Métal Récupérable | Minerai | Partout (fouille des terrils) | Minage Lv.12 |
| Verre de Scorie | Minerai | Lacs de trempe | Minage Lv.15 |
| Lichen Ferrugineux | Plante | Carcasses anciennes | Herboristerie Lv.14 |
| Composant Intact | Matériau (rare) | Automates ratés | Perception Lv.18 |

---

## Points d'Intérêt

| Lieu | Description |
|---|---|
| **Camp du Tri** | Base des récupérateurs — four de refonte public (converti métal → lingots) |
| **Lac de Trempe Irisé** | Tremper une arme forgée à la main : +1 niveau de qualité (1 fois par arme) |
| **La Montagne de Lames** | Terril exclusivement composé d'armes ratées — spawn des Épées Hantées |
| **Pierre de Sauvegarde** | Point de téléportation enregistrable |

---

## Lore / Histoire

La règle de Brokkheim est absolue : une œuvre imparfaite ne porte pas la marque de la Forge — elle part aux Champs. Des générations de fiertés brisées se sont entassées ici, et l'endroit a fini par développer sa propre opinion sur le sujet. La Forge-Vivante Ancestrale serait la toute première forge de Brokk, jetée par son propre fils au motif qu'elle « chauffait inégalement » ; elle forge depuis ses propres créatures, avec l'application vexée d'une aïeule qui prouve qu'elle est encore capable.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🌋 Champs de Scories — Chasse Lv.15-35` |
| **Description du Groupe** | `Zone frontalière Leprechaun / Undine / Imp. ⚠️ ZONE PVP ACTIVE. Les rebuts se réaniment ! Boss « Forge-Vivante » toutes les 6h. !chasser !mine !récolter` |
| **Règles Affichées** | `1. Zone PvP haute. 2. Boss de zone partagé, premier arrivé premier servi. 3. Surveillez la durabilité de vos armes (rouille).` |

---

> *« Tout ce qu'on jette finit par revenir. Ici, c'est littéral, et c'est armé. »* — Récupérateur Grimble
