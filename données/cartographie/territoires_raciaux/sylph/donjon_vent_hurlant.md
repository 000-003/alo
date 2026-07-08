# 🌀 DONJON DU VENT HURLANT — Donjon Local Sylph

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_SYL_DUN_001` |
| **Nom Officiel** | Donjon du Vent Hurlant |
| **Surnoms** | « La Spirale Hurlante », « Le Tombeau d'Aeris » |
| **Type** | Donjon Instancié (groupe de 1-6 joueurs) |
| **Territoire** | Sylph |
| **Safe Zone** | ❌ Non — PK impossible (instancié) mais mort = perte d'XP |
| **Niveau Recommandé** | 20 – 40 |
| **Statut The Seed** | Instance générée par Cardinal — Reset à chaque entrée |

---

## Description Atmosphérique

Le Donjon du Vent Hurlant est une tour inversée creusée dans la roche d'une falaise au nord de Swilvane. Son entrée est une gueule béante dans la paroi rocheuse, encadrée par deux statues de guerriers Sylph antiques dont les yeux de jade brillent d'une lueur surnaturelle. Dès que le joueur franchit le seuil, le vent s'engouffre avec une violence terrible — le système Cardinal simule des rafales de force 8 qui hurlent dans les corridors de pierre, d'où le nom du donjon.

L'intérieur est un dédale vertical : des plateformes de pierre flottent dans un puits central sans fond, reliées par des ponts de vent solidifié qui se dissolvent et se reforment selon un cycle de 30 secondes. Les murs sont gravés de runes sylph anciennes qui s'illuminent au passage des joueurs, projetant des ombres dansantes sur la roche humide. L'atmosphère sonore est un concert de hurlements éoliens, de grincements de pierre et d'échos lointains qui semblent être les voix des anciens Sylph emprisonnés ici.

Le donjon se compose de trois étages, chacun plus profond et plus dangereux que le précédent. Au fond de la spirale, dans la salle du boss, le vent atteint une intensité telle que les joueurs doivent constamment lutter contre la poussée aérodynamique pour rester en position — un mécanisme unique qui avantage les Sylph grâce à leur maîtrise naturelle du vol.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Intérieure** | Vents violents permanents, courants ascendants/descendants |
| **Luminosité** | Runes bioluminescentes — Pas de cycle jour/nuit |
| **Effets Spéciaux** | Rafales aléatoires (knockback si Résistance au Vent < Lv.15) |
| **Température Simulée** | 5°C – 10°C (froid dû au vent) |

---

## Structure du Donjon

### Étage 1 — Le Vestibule des Souffles (Lv.20-25)
- **Mobs** : Élémentaire de Brise (×8), Chauve-Souris Tempête (×12)
- **Mécanisme** : Activer 3 runes éoliennes pour ouvrir la porte du niveau suivant
- **Piège** : Courants aspirants qui attirent les joueurs vers des fosses à piques

### Étage 2 — La Salle des Tornades (Lv.25-35)
- **Mobs** : Golem de Vent (×4), Harpie Hurlante (×6), Spectre du Corridor (×3)
- **Mécanisme** : Naviguer entre des mini-tornades mobiles — contact = 500 dégâts + projection
- **Mini-Boss** : Reine des Harpies (HP: 25000, Lv.30)
  - Drop : Plume de Tempête (matériau rare), Tiare de la Harpie (équipement tête)

### Étage 3 — Le Cœur de la Spirale (Lv.35-40)
- **Mobs** : Chevalier du Vent Fantôme (×6), Élémentaire de Cyclone (×2)
- **Boss Final** : **Aeris, Archonte du Vent Hurlant**

---

## Boss Final — Aeris, Archonte du Vent Hurlant

| Attribut | Valeur |
|---|---|
| **ID** | `BOSS_SYL_DUN_001` |
| **Niveau** | 40 |
| **HP** | 120 000 |
| **Barres de HP** | 4 barres |
| **Attaques** | Souffle Dévastateur (AoE cône), Lames de Vent (projectiles), Œil du Cyclone (aspiration + explosion), Invocation de Mini-Élémentaires |
| **Phase 2 (50% HP)** | Aeris s'envole — combat aérien obligatoire |
| **Phase 3 (25% HP)** | Tempête Ultime — dégâts DoT sur toute la salle, seul l'œil du cyclone est safe |
| **Faiblesse** | Magie de Terre, Attaques lourdes (Marteaux, Masses) |
| **Résistance** | Magie de Vent (immunité), Magie de Feu (50% résistance) |

### Table de Drop — Aeris

| Item | Rareté | Taux de Drop |
|---|---|---|
| Lame du Vent Hurlant (épée) | Épique | 15% |
| Ailes de l'Archonte (cosmétique ailes) | Épique | 10% |
| Cœur de Tempête (matériau légendaire) | Légendaire | 3% |
| Anneau du Cyclone (accessoire, +20% vitesse de vol) | Rare | 25% |
| Grimoire de Rafale Ultime (sort) | Épique | 8% |
| Cristal de Donjon (monnaie) | Commun | 100% (×5-10) |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Swilvane (sortie du donjon) | `ZONE_SYL_CAP_001` | `!sortir` | 0 MP | Instantané |
| Forêt de Lugru | `ZONE_SYL_HUNT_002` | `!sortir` puis `!marcher sud` | 0 MP | 8 min |

---

## Récompenses de Complétion

| Récompense | Condition |
|---|---|
| 5000 XP | Première complétion |
| Titre « Dompteur de Tempêtes » | Vaincre Aeris sans mourir |
| Accès à la quête « L'Héritage du Vent II » | Complétion + posséder Essence de Zéphyr |
| 2000 Yrd | À chaque complétion |

---

## Lore / Histoire

Le Donjon du Vent Hurlant est le tombeau d'Aeris, un ancien seigneur Sylph qui, selon la mythologie du Cardinal, a tenté de capturer le vent primordial d'Yggdrasil pour offrir aux Sylph le pouvoir de vol illimité. Son ambition l'a consumé et il a été transformé en un élémentaire de vent furieux, emprisonné pour l'éternité dans cette spirale de roche. Les runes qui tapissent les murs sont les fragments de l'incantation de scellement qui le retient prisonnier.

Les Sylph considèrent ce donjon comme un lieu d'épreuve sacrée. Tout guerrier Sylph qui souhaite prétendre au rang de Chevalier du Vent doit prouver sa valeur en vainquant Aeris. C'est un rite de passage profondément ancré dans la culture du jeu.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🌀 Donjon du Vent Hurlant — Lv.20-40` |
| **Description du Groupe** | `Donjon instancié Sylph. 👥 1-6 joueurs. Boss: Aeris l'Archonte (Lv.40). Commandes: !entrer donjon, !combattre, !fuir. ⚠️ Mort = perte de 5% XP.` |
| **Règles Affichées** | `1. Formez un groupe avant d'entrer (!groupe inviter @joueur). 2. Le donjon se réinitialise à chaque entrée. 3. Partagez le loot équitablement.` |

---

> *« Le vent ne hurle pas de rage... il hurle de chagrin. Aeris pleure encore sa liberté perdue. »* — Vieille Myriel, Herboriste de Swilvane
