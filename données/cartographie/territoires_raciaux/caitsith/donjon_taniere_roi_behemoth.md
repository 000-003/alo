# 🐗 TANIÈRE DU ROI BÉHÉMOTH — Donjon Local Cait Sith

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_CAI_DUN_001` |
| **Nom Officiel** | Tanière du Roi Béhémoth |
| **Surnoms** | « Le Terrier-Monde », « La Gueule de la Colline » |
| **Type** | Donjon Instancié (groupe de 1-6 joueurs) |
| **Territoire** | Cait Sith |
| **Safe Zone** | ❌ Non — PK impossible (instancié) mais mort = perte d'XP |
| **Niveau Recommandé** | 20 – 40 |
| **Statut The Seed** | Instance générée par Cardinal — Reset à chaque entrée |

---

## Description Atmosphérique

La Tanière est un réseau de galeries creusées par le Roi Béhémoth lui-même, si vastes qu'un écosystème entier y a élu domicile. Les parois portent les sillons de ses défenses, et le sol tremble par intervalles — le Cardinal synchronise ces secousses avec la position réelle du boss dans l'instance, permettant aux groupes attentifs de le localiser à l'oreille. L'odeur de musc y est si dense que les familiers des dompteurs refusent parfois d'avancer (jet de loyauté toutes les 5 minutes en étage 3).

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Intérieure** | Souterrain — secousses sismiques rythmées par le boss |
| **Luminosité** | Champignons luminescents — vision nocturne Cait Sith avantagée |
| **Effets Spéciaux** | Éboulements aléatoires (300 dégâts, esquive par `!parry` chronométré) |
| **Température Simulée** | 14°C – 18°C |

---

## Structure du Donjon

### Étage 1 — Les Galeries Hautes (Lv.20-25)
- **Mobs** : Blaireau Furieux (×8), Chauve-Souris des Terriers (×10)
- **Mécanisme** : Suivre les sillons de défenses pour trouver la descente (fausses galeries en boucle)
- **Piège** : Sol meuble — chute vers l'étage 2 avec 500 dégâts

### Étage 2 — Le Nid des Suivants (Lv.25-35)
- **Mobs** : Sanglier de Guerre (×6), Worg Souterrain (×5)
- **Mécanisme** : Traverser sans réveiller les Suivants endormis (marche lente obligatoire — tout `!attaque` réveille la salle)
- **Mini-Boss** : Béhémoth Juvénile (HP: 24000, Lv.30) — **domptable** en cas d'échec du groupe précédent (1% de chance, Beast Taming Lv.35)
  - Drop : Défense Juvénile, Cuir du Terrier

### Étage 3 — La Salle du Trône Creusé (Lv.35-40)
- **Mobs** : Gardien de Boue (×4)
- **Boss Final** : **Ragnar, le Roi Béhémoth**

---

## Boss Final — Ragnar, le Roi Béhémoth

| Attribut | Valeur |
|---|---|
| **ID** | `BOSS_CAI_DUN_001` |
| **Niveau** | 40 |
| **HP** | 130 000 |
| **Barres de HP** | 4 barres |
| **Attaques** | Charge Sismique (ligne), Piétinement (AoE cercle), Lancer de Rocher (projectile), Rugissement de Terreur (fear 3s) |
| **Phase 2 (50% HP)** | S'enfouit — attaques surprises depuis le sol, suivre les tremblements |
| **Phase 3 (25% HP)** | Rage du Roi — vitesse ×1.5, la salle s'effondre progressivement (zone safe rétrécissante) |
| **Faiblesse** | Magie de Vent (déséquilibre), attaques sur les pattes arrière |
| **Résistance** | Magie de Terre (immunité), attaques frontales (50% réduction) |

### Table de Drop — Ragnar

| Item | Rareté | Taux de Drop |
|---|---|---|
| Défense du Roi (lance) | Épique | 15% |
| Selle Royale (équipement familier, +800 HP monture) | Épique | 10% |
| Cœur de Béhémoth (matériau légendaire — Beast Taming) | Légendaire | 3% |
| Amulette Sismique (accessoire, +15% résistance Terre) | Rare | 25% |
| Cristal de Donjon (monnaie) | Commun | 100% (×5-10) |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Freelia (sortie du donjon) | `ZONE_CAI_CAP_001` | `!sortir` | 0 MP | Instantané |
| Collines de l'Ouest | `ZONE_CAI_HUNT_002` | `!sortir` puis `!marcher sud` | 0 MP | 8 min |

---

## Récompenses de Complétion

| Récompense | Condition |
|---|---|
| 5000 XP | Première complétion |
| Titre « Écuyer du Roi » | Vaincre Ragnar sans qu'aucun familier ne meure |
| Accès à la quête « La Voix des Bêtes II » | Complétion + Cœur de Béhémoth |
| 2000 Yrd | À chaque complétion |

---

## Lore / Histoire

Ragnar n'est pas un monstre : c'est le plus vieux familier d'Alfheim, dompté jadis par le premier roi Cait Sith puis rendu sauvage à la mort de son maître. La Ménagerie Royale interdit officiellement de le tuer — officieusement, chaque génération de dompteurs tente sa chance, moins pour le loot que pour l'espoir insensé de renouer le Premier Lien. Léo Crinière-Fauve y a laissé un œil.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🐗 Tanière du Roi Béhémoth — Lv.20-40` |
| **Description du Groupe** | `Donjon instancié Cait Sith. 👥 1-6 joueurs. Boss: Ragnar le Roi Béhémoth (Lv.40). !dungeon_queue pour entrer. ⚠️ Mort = perte de 5% XP.` |
| **Règles Affichées** | `1. Formez un groupe avant d'entrer. 2. Le donjon se réinitialise à chaque entrée. 3. Partagez le loot équitablement.` |

---

> *« On ne chasse pas le Roi. On lui rend visite, et on prie pour qu'il soit de bonne humeur. »* — Léo Crinière-Fauve
