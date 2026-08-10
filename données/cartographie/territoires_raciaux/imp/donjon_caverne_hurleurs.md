# 🕳️ CAVERNE DES HURLEURS — Donjon Local Imp

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_IMP_DUN_001` |
| **Nom Officiel** | Caverne des Hurleurs |
| **Surnoms** | « La Gorge Sans Fond », « Le Silence Obligatoire » |
| **Type** | Donjon Instancié (groupe de 1-6 joueurs) |
| **Territoire** | Imp |
| **Safe Zone** | ❌ Non — PK impossible (instancié) mais mort = perte d'XP |
| **Niveau Recommandé** | 20 – 40 |
| **Statut The Seed** | Instance générée par Cardinal — Reset à chaque entrée |

---

## Description Atmosphérique

La Caverne des Hurleurs est un réseau de grottes plongé dans une obscurité que même la vision nocturne Imp ne perce qu'à moitié. Ses habitants, les Hurleurs, sont aveugles et chassent à l'écholocation. **Mécanique signature WhatsApp** : le bruit attire — tout message envoyé EN MAJUSCULES dans le groupe d'instance, tout sort de niveau supérieur à 3 et tout `!attaque` raté augmentent la jauge de Vacarme ; à 100%, la salle entière converge sur le groupe. Les meilleurs groupes traversent le donjon en chuchotant.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Intérieure** | Obscurité quasi totale, gouttes d'eau sonores |
| **Luminosité** | Nulle — vision nocturne à 50%, torches = +20% Vacarme |
| **Effets Spéciaux** | Jauge de Vacarme (0-100%) affichée par le bot après chaque action |
| **Température Simulée** | 3°C – 8°C |

---

## Structure du Donjon

### Étage 1 — Les Galeries Suintantes (Lv.20-25)
- **Mobs** : Hurleur Juvénile (×8), Cloporte Cuirassé (×6)
- **Mécanisme** : Traverser en maintenant le Vacarme sous 40%
- **Piège** : Stalactites sensibles au bruit (chute = 400 dégâts AoE + pic de Vacarme)

### Étage 2 — Le Lac Muet (Lv.25-35)
- **Mobs** : Hurleur Chasseur (×6), Poisson-Lanterne Carnivore (×5)
- **Mécanisme** : Traversée en radeau — chaque coup de rame est un choix (vitesse contre Vacarme)
- **Mini-Boss** : Mère des Hurleurs (HP: 24000, Lv.31) — invoque ses petits à chaque pic de Vacarme
  - Drop : Tympan Membraneux, Griffe Sonar

### Étage 3 — La Chambre d'Écho (Lv.35-40)
- **Mobs** : Hurleur Ancien (×3)
- **Boss Final** : **Skreech, le Hurleur Alpha**

---

## Boss Final — Skreech, le Hurleur Alpha

| Attribut | Valeur |
|---|---|
| **ID** | `BOSS_IMP_DUN_001` |
| **Niveau** | 40 |
| **HP** | 118 000 |
| **Barres de HP** | 4 barres |
| **Attaques** | Cri Perforant (cône, Silence 3s), Sonar Balayant (révèle et marque tous les joueurs), Charge Aveugle (ligne, suit le dernier bruit), Ultrason (AoE salle si Vacarme > 60%) |
| **Phase 2 (50% HP)** | Détruit les stalagmites-couvertures — plus de cachettes |
| **Phase 3 (25% HP)** | Frénésie Sonar — attaque le joueur le plus « bruyant » (dernier message le plus long du groupe WhatsApp) |
| **Faiblesse** | Silence (le rend aveugle ET sourd 5s), attaques pendant son cri |
| **Résistance** | Attaques furtives (il entend tout), magie d'Ombre (50% réduction) |

### Table de Drop — Skreech

| Item | Rareté | Taux de Drop |
|---|---|---|
| Capuche de Chauve-Souris (tête, +20% furtivité sonore) | Épique | 10% |
| Boucles d'Oreilles Sourdes (accessoire, immunité Silence) | Rare | 25% |
| Cristal de Donjon (monnaie) | Commun | 100% (×5-10) |

*Griffes du Hurleur et Larynx d'Alpha : retirés du roll aveugle de fin de combat — voir Parties Récoltables ci-dessous (D78).*

### Parties Récoltables (D78)

> Dépeçage déterministe (moteur L1) : le franchissement du seuil de dégâts déclenche un roll **garanti** sur la table dédiée, indépendant du roll de fin de combat. Seuils = phases déjà définies ci-dessus. Taux inchangés (D73).

| Partie | Seuil | Item lié | Rareté | Taux |
|---|---|---|---|---|
| Griffes | 50% HP (Phase 2 — détruit les stalagmites-couvertures) | Griffes du Hurleur | Épique | 15% |
| Larynx | 25% HP (Phase 3 — Frénésie Sonar) | Larynx d'Alpha | Légendaire | 3% |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Duskarn (sortie du donjon) | `ZONE_IMP_CAP_001` | `!sortir` | 0 MP | Instantané |
| Falaises du Crépuscule | `ZONE_IMP_HUNT_002` | `!sortir` puis `!marcher sud` | 0 MP | 8 min |

---

## Récompenses de Complétion

| Récompense | Condition |
|---|---|
| 5000 XP | Première complétion |
| Titre « Marcheur Silencieux » | Vaincre Skreech sans jamais dépasser 40% de Vacarme |
| Accès à la quête « L'Envers de la Lumière II » | Complétion + Larynx d'Alpha |
| 2000 Yrd | À chaque complétion |

---

## Lore / Histoire

Les Hurleurs sont d'anciens Imp, selon la légende la plus taboue de Duskarn : une expédition qui creusa trop profond, perdit la lumière, puis les yeux, puis les mots. Le Temple du Voile nie officiellement cette version — tout en payant discrètement les groupes qui rapportent des Tympans Membraneux, « à des fins d'étude généalogique ». Skreech porterait encore, fondu dans la chair de son poignet, un bracelet de guilde.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🕳️ Caverne des Hurleurs — Lv.20-40` |
| **Description du Groupe** | `Donjon instancié Imp. 👥 1-6 joueurs. Boss: Skreech le Hurleur Alpha (Lv.40). 🤫 LE BRUIT ATTIRE — messages en MAJUSCULES = danger. ⚠️ Mort = perte de 5% XP.` |
| **Règles Affichées** | `1. Formez un groupe avant d'entrer. 2. Surveillez la jauge de Vacarme du bot. 3. Partagez le loot équitablement.` |

---

> *« Dans la Caverne, la première règle est simple : celui qui crie meurt en premier. »* — Œil-de-Nuit Korvac
