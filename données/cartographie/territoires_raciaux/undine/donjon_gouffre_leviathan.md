# 🌊 GOUFFRE DE LÉVIATHAN — Donjon Sous-Marin Undine

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_UND_DUN_001` |
| **Nom Officiel** | Gouffre de Léviathan |
| **Surnoms** | « La Fosse Sans Ciel », « Le Grand Bleu Noir » |
| **Type** | Donjon Instancié **sous-marin** (groupe de 1-6 joueurs) |
| **Territoire** | Undine |
| **Safe Zone** | ❌ Non — PK impossible (instancié) mais mort = perte d'XP |
| **Niveau Recommandé** | 30 – 50 (Tier 5 — le plus difficile des donjons territoriaux) |
| **Statut The Seed** | Instance générée par Cardinal — Reset à chaque entrée |
| **Condition d'accès** | Respiration aquatique : Potion d'Oxygène Magique (`NPC_UND_07` Coralia) ou sort de l'Académie |

---

## Description Atmosphérique

Sous le Lac Cristallin, le fond s'ouvre sur un puits vertical dont personne n'a jamais sondé le terme. Le Gouffre de Léviathan est le seul donjon d'Alfheim entièrement immergé : on y descend en nageant, la lumière meurt au premier tiers, et le Cardinal remplace le ciel par une masse d'eau noire d'où tombent, comme une neige inversée, les débris des épaves broyées plus bas. Toute la faune y est déformée par la pression ; les sorts de feu s'éteignent à l'incantation ; et à chaque palier de descente, les joueurs entendent — retransmis par le bot en messages de plus en plus rapprochés — un battement sourd. C'est le cœur du Léviathan. Il sait que vous descendez.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Intérieure** | Immersion totale — courants abyssaux, nuées de sédiments |
| **Luminosité** | Étage 1 : pénombre bleue · Étage 2 : noir (source de lumière requise) · Étage 3 : bioluminescence du boss |
| **Effets Spéciaux** | Jauge d'Apnée (mécanique signature, voir ci-dessous) ; **sorts de feu désactivés** |
| **Température Simulée** | 4°C – 8°C |

---

## 🫧 Mécanique Signature — La Jauge d'Apnée (décision D11)

> Exploitation native de WhatsApp : l'oxygène est une **économie de messages** — chaque action coûte du souffle.

| Paramètre | Valeur |
|---|---|
| **Jauge** | 100 points d'Oxygène **par joueur** (individuelle, contrairement à la Surchauffe de la Caldeira) |
| **Consommation** | −2 Oxygène par message d'action envoyé (`!attaque`, `!cast`, `!nager`…) ; −1 par minute passive |
| **Recharge** | `!respirer` dans une **poche d'air** (points fixes par étage) : +50 Oxygène — canalisation 10 s (vulnérable) |
| **Potion d'Oxygène Magique** | Gèle la jauge 10 minutes (5 000 Yrd chez Coralia `NPC_UND_07` — chaînage économique) |
| **Jauge à 0** | Noyade : 5% HP max de dégâts par message supplémentaire jusqu'à respiration |
| **Pilotage** | Paramètre d'environnement `OXYGEN` — GM `!sys_env_set`, IA `SYS_SET_ENV_HAZARD` |

Effet de design : le groupe doit **budgéter ses messages entre deux poches d'air** — la descente se planifie comme une plongée réelle.

---

## Structure du Donjon

### Étage 1 — Les Jardins de Corail Noir (Lv.30-38)
- **Mobs** : Murène Cuirassée (×6), Banc de Poissons-Rasoirs (×3 nuées)
- **Mécanisme** : Suivre le courant descendant sans toucher le corail noir (paralysie 5 s + −10 Oxygène)
- **Poches d'air** : 3 (grottes de la paroi)

### Étage 2 — La Forêt d'Épaves (Lv.38-45)
- **Mobs** : Noyé Ancien (×6), Crabe Colossal (×4)
- **Mécanisme** : Obscurité totale — un porteur de lumière désigné guide le groupe (s'il meurt, `!analyze` échoue pour tous)
- **Mini-Boss** : Gardienne des Épaves (HP: 32000, Lv.42) — pieuvre géante nichée dans un galion
  - Drop : Encre Abyssale, Coffre du Galion (loot aléatoire d'épave)
- **Poches d'air** : 2 (cales renversées des épaves)

### Étage 3 — La Fosse du Léviathan (Lv.45-50)
- **Mobs** : Poisson-Lanterne Léviathanide (×4)
- **Poche d'air** : 1 seule, au centre de l'arène — contestée pendant le combat
- **Boss Final** : **Jörmun, le Léviathan des Abysses**

---

## Boss Final — Jörmun, le Léviathan des Abysses

| Attribut | Valeur |
|---|---|
| **ID** | `BOSS_UND_DUN_001` |
| **Niveau** | 50 |
| **HP** | 200 000 |
| **Barres de HP** | 5 barres |
| **Attaques** | Raz-de-Marée Circulaire (AoE), Happement (engloutit un joueur 8 s — dégâts continus + −20 Oxygène), Chant des Profondeurs (sommeil 3 s), Vrille Abyssale (charge en spirale) |
| **Phase 2 (60% HP)** | Broie la moitié des reliefs de l'arène — courants aléatoires déplacent les joueurs à chaque tour |
| **Phase 3 (30% HP)** | S'enroule autour de la poche d'air centrale : `!respirer` devient un acte de bravoure sous AoE |
| **Faiblesse** | Magie de Foudre (conduction aquatique : +30% dégâts), attaques sur les ouïes (exposées après le Happement) |
| **Résistance** | Eau (immunité), Feu (sorts inutilisables sous l'eau), armes contondantes (30% réduction — la pression amortit) |

### Table de Drop — Jörmun

| Item | Rareté | Taux de Drop |
|---|---|---|
| Trident des Abysses (arme d'hast, +200% dégâts aquatiques) | Légendaire | 3% |
| Écaille du Léviathan (matériau — armures de plongée) | Épique | 15% |
| Perle du Cœur Battant (accessoire, +20 Oxygène max) | Épique | 10% |
| Grimoire des Marées (sort *Tsunami* incomplet — cf. Thalassa `NPC_UND_01`) | Rare | 20% |
| Cristal de Donjon (monnaie) | Commun | 100% (×8-14) |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Archipel d'Écume (remontée — sortie du donjon) | `ZONE_UND_CAP_001` | `!sortir` | 0 MP | Instantané |
| Marais de Brume (doline noyée) | `ZONE_UND_HUNT_002` | `!sortir` puis `!marcher ouest` | 0 MP | 8 min |

---

## Récompenses de Complétion

| Récompense | Condition |
|---|---|
| 8000 XP | Première complétion (Tier 5) |
| Titre « Poumon d'Acier » | Vaincre Jörmun sans qu'aucun joueur ne tombe à 0 Oxygène |
| Accès à l'enseignement de Thalassa (`NPC_UND_01`) | Complétion — condition « battre un boss d'eau » remplie |
| 3500 Yrd | À chaque complétion |

---

## Lore / Histoire

L'Académie enseigne que Jörmun est un reliquat : une créature de test que le Cardinal aurait générée pour éprouver la physique aquatique d'Alfheim, puis oubliée au fond du puits. Kryx le Plongeur (`NPC_UND_04`), qui pille les épaves de l'étage 2 depuis des années sans jamais descendre plus bas, vend une autre version à qui paie sa tournée : le battement que l'on entend dans la descente ne serait pas un cœur, mais un compte. Le Léviathan compterait les visiteurs. Et le Trident Rouillé qu'il propose à 40 000 Yrd proviendrait du seul groupe à avoir vu l'étage 3 avant vous — il ne dit jamais ce qu'il est advenu d'eux, mais il ne replonge plus jamais les nuits de battement rapide.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🌊 Gouffre de Léviathan — Lv.30-50` |
| **Description du Groupe** | `Donjon SOUS-MARIN instancié Undine (Tier 5). 👥 1-6 joueurs. Boss: Jörmun (Lv.50). 🫧 Jauge d'Apnée: chaque action coûte de l'oxygène — !respirer dans les poches d'air. Potion d'Oxygène chez Coralia. ⚠️ Sorts de feu désactivés. Mort = perte de 5% XP.` |
| **Règles Affichées** | `1. Respiration aquatique OBLIGATOIRE avant d'entrer. 2. Chaque action consomme de l'oxygène — budgétez vos messages. 3. Désignez un porteur de lumière pour l'étage 2.` |

---

> *« En bas, le silence n'est pas une politesse. C'est une monnaie. »* — Kryx le Plongeur
