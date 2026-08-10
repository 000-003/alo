# ⚙️ ATELIER ENGLOUTI — Donjon Local Leprechaun

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_LEP_DUN_001` |
| **Nom Officiel** | Atelier Englouti |
| **Surnoms** | « La Manufacture Noyée », « Le Premier Brevet » |
| **Type** | Donjon Instancié (groupe de 1-6 joueurs) |
| **Territoire** | Leprechaun |
| **Safe Zone** | ❌ Non — PK impossible (instancié) mais mort = perte d'XP |
| **Niveau Recommandé** | 20 – 40 |
| **Statut The Seed** | Instance générée par Cardinal — Reset à chaque entrée |

---

## Description Atmosphérique

L'Atelier Englouti est la première manufacture de Brokkheim, noyée en une nuit lorsque le geyser qui l'alimentait a changé de colère. L'eau n'a jamais été pompée : elle s'est figée en une trempe permanente, à mi-hauteur des salles — le donjon se traverse mi-nageant, mi-marchant sur les passerelles émergées. Sous la surface, les machines tournent toujours, entretenues par des automates dont les ordres n'ont jamais été révoqués. La rouille n'existe pas ici : l'eau de trempe conserve tout, y compris ce qui aurait dû mourir.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Intérieure** | Semi-immergé — alternance passerelles / bassins |
| **Luminosité** | Fourneaux sous-marins toujours allumés (lueur orange à travers l'eau) |
| **Effets Spéciaux** | Sections nagées : jauge de souffle 60s (Undines et magie de respiration exemptées) |
| **Température Simulée** | 30°C (eau), 20°C (air) |

---

## Structure du Donjon

### Étage 1 — Les Quais de Réception (Lv.20-25)
- **Mobs** : Automate de Manutention (×7), Murène de Trempe (×6)
- **Mécanisme** : Actionner 3 vannes pour abaisser le niveau d'eau du monte-charge
- **Piège** : Chaînes de levage — s'y accrocher pendant la remontée d'eau ou couler

### Étage 2 — La Chaîne de Montage (Lv.25-35)
- **Mobs** : Automate Soudeur (×5), Banc de Poissons-Limes (×4 bancs)
- **Mécanisme** : Traverser la chaîne en mouvement — presses hydrauliques rythmées (timing sur annonces du bot)
- **Mini-Boss** : Contremaître Automate T-7 (HP: 25000, Lv.31) — commande les presses à distance
  - Drop : Clé de Réglage Universelle, Plastron Rivetté

### Étage 3 — Le Bureau d'Études (Lv.35-40)
- **Mobs** : Prototype de Garde (×3)
- **Boss Final** : **MK-0, l'Automate Directeur**

---

## Boss Final — MK-0, l'Automate Directeur

| Attribut | Valeur |
|---|---|
| **ID** | `BOSS_LEP_DUN_001` |
| **Niveau** | 40 |
| **HP** | 125 000 |
| **Barres de HP** | 4 barres |
| **Attaques** | Bras-Presse (mono-cible, brise-garde), Jet de Trempe (cône, ralentissement 30%), Chaîne d'Assemblage (invoque 2 automates), Protocole Qualité (scanne et copie le pattern d'attaque du joueur le plus efficace) |
| **Phase 2 (50% HP)** | Inonde le Bureau — combat semi-nagé, jauge de souffle active |
| **Phase 3 (25% HP)** | Auto-Réparation — draine les automates restants pour régénérer (les tuer d'abord) |
| **Faiblesse** | Magie de Foudre (court-circuit sous l'eau — ×2 dégâts en phase 2), sabotage des joints (`!analyze` révèle les points faibles) |
| **Résistance** | Attaques tranchantes (blindage, -50%), magie d'Eau (immunité) |

### Table de Drop — MK-0

| Item | Rareté | Taux de Drop |
|---|---|---|
| Schéma du Premier Brevet (recette de forge unique, aléatoire) | Épique | 12% |
| Joint d'Étanchéité Parfait (accessoire, respiration aquatique +60s) | Rare | 25% |
| Cristal de Donjon (monnaie) | Commun | 100% (×5-10) |

*Marteau-Pilon de Poing et Noyau du Directeur : retirés du roll aveugle de fin de combat — voir Parties Récoltables ci-dessous (D78).*

### Parties Récoltables (D78)

> Dépeçage déterministe (moteur L1) : le franchissement du seuil de dégâts déclenche un roll **garanti** sur la table dédiée, indépendant du roll de fin de combat. Seuils = phases déjà définies ci-dessus. Taux inchangés (D73).

| Partie | Seuil | Item lié | Rareté | Taux |
|---|---|---|---|---|
| Bras-Presse | 50% HP (Phase 2 — inonde le Bureau, combat semi-nagé) | Marteau-Pilon de Poing | Épique | 15% |
| Noyau Central | 25% HP (Phase 3 — Auto-Réparation, drain exposé) | Noyau du Directeur | Légendaire | 3% |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Brokkheim (sortie du donjon) | `ZONE_LEP_CAP_001` | `!sortir` | 0 MP | Instantané |
| Champs de Scories | `ZONE_LEP_HUNT_002` | `!sortir` puis `!marcher sud` | 0 MP | 8 min |

---

## Récompenses de Complétion

| Récompense | Condition |
|---|---|
| 5000 XP | Première complétion |
| Titre « Ingénieur des Profondeurs » | Vaincre MK-0 sans qu'aucun joueur ne tombe à 0 de souffle |
| Accès à la quête « Les Sept Trempes II » | Complétion + Schéma du Premier Brevet |
| 2000 Yrd | À chaque complétion |

---

## Lore / Histoire

L'Atelier abritait le Bureau d'Études de Brokk lui-même, et MK-0 fut son premier automate — le prototype dont tous les serviteurs mécaniques de Brokkheim descendent. Quand l'eau est montée, MK-0 a appliqué sa directive première : « protéger les brevets ». Il la suit toujours. Les maîtres-forgerons actuels financent discrètement des expéditions, non pour détruire MK-0, mais pour récupérer les schémas du fondateur — dont certains décriraient des alliages que la Forge-Mère ne sait plus produire.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `⚙️ Atelier Englouti — Lv.20-40` |
| **Description du Groupe** | `Donjon instancié Leprechaun. 👥 1-6 joueurs. Boss: MK-0 l'Automate Directeur (Lv.40). 🌊 Sections nagées — prévoyez la respiration aquatique. ⚠️ Mort = perte de 5% XP.` |
| **Règles Affichées** | `1. Formez un groupe avant d'entrer. 2. Surveillez la jauge de souffle. 3. Partagez le loot équitablement.` |

---

> *« MK-0 n'est pas en panne. C'est nous qui avons cessé de comprendre ses instructions. »* — Maîtresse des Automates Vera
