# ⚰️ NÉCROPOLE ANTIQUE — Donjon Local Spriggan

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_SPR_DUN_001` |
| **Nom Officiel** | Nécropole Antique |
| **Surnoms** | « La Ville d'En-Dessous », « Le Dernier Mensonge » |
| **Type** | Donjon Instancié (groupe de 1-6 joueurs) |
| **Territoire** | Spriggan |
| **Safe Zone** | ❌ Non — PK impossible (instancié) mais mort = perte d'XP |
| **Niveau Recommandé** | 20 – 40 |
| **Statut The Seed** | Instance générée par Cardinal — Reset à chaque entrée |

---

## Description Atmosphérique

Sous les ruines qui portent Penwether s'étend la ville des morts de la civilisation disparue — une nécropole si vaste qu'elle possède ses propres avenues, ses places, et son administration : des morts qui se prennent encore pour des vivants. **Mécanique signature** : la Nécropole ment. Une salle sur trois est une illusion (trésor factice, sortie factice, boss factice) ; le sort `!analyze` ou un Spriggan dans le groupe permet de dissiper le mensonge. Se tromper coûte cher : les illusions dissipées violemment se vengent.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Intérieure** | Air immobile, odeur de pierre froide et d'encens éventé |
| **Luminosité** | Lanternes funéraires vertes — s'allument sur le passage, s'éteignent derrière |
| **Effets Spéciaux** | 1 salle sur 3 illusoire — `!analyze` (ou passif racial Spriggan) pour révéler |
| **Température Simulée** | 4°C – 9°C |

---

## Structure du Donjon

### Étage 1 — Les Avenues Funéraires (Lv.20-25)
- **Mobs** : Squelette Fonctionnaire (×8), Goule des Caveaux (×6)
- **Mécanisme** : Obtenir un « laissez-passer » tamponné par le Squelette Guichetier (quête interne absurde et obligatoire)
- **Piège** : Dalles menteuses (illusions de sol au-dessus de fosses)

### Étage 2 — Le Quartier des Notables (Lv.25-35)
- **Mobs** : Garde d'Honneur Squelette (×6), Pleureuse Spectrale (×4)
- **Mécanisme** : Bal des Notables — traverser la salle de bal sans « refuser une danse » (interactions dialoguées avec les spectres)
- **Mini-Boss** : La Douairière (HP: 23500, Lv.31) — offensée si on la dévisage (`!analyze` sur elle = aggro immédiat)
  - Drop : Éventail d'Os, Collier de Perles Ternies

### Étage 3 — Le Mausolée Royal (Lv.35-40)
- **Mobs** : Garde Royal Éternel (×3)
- **Boss Final** : **Pennroth, le Roi-Liche Oublié**

---

## Boss Final — Pennroth, le Roi-Liche Oublié

| Attribut | Valeur |
|---|---|
| **ID** | `BOSS_SPR_DUN_001` |
| **Niveau** | 40 |
| **HP** | 110 000 (le moins tanky des donjons territoriaux — mais voir Phase 2) |
| **Barres de HP** | 4 barres |
| **Attaques** | Décret Funèbre (malédiction mono-cible), Cortège d'Os (invoque 4 squelettes), Sceptre du Royaume Mort (AoE cône), Impôt Vital (draine 5% HP à tout le groupe) |
| **Phase 2 (50% HP)** | Se dédouble en 3 illusions — frapper la mauvaise soigne le vrai Pennroth de 5% |
| **Phase 3 (25% HP)** | Révélation — jette son masque : le vrai visage inflige Terreur 3s à quiconque le regarde (dos au boss = immunité) |
| **Faiblesse** | Magie de Lumière, `!analyze` (révèle le vrai parmi les doubles) |
| **Résistance** | Magie d'Ombre (immunité), poison/saignement (mort-vivant) |

### Table de Drop — Pennroth

| Item | Rareté | Taux de Drop |
|---|---|---|
| Couronne Sans Royaume (tête, +20% résistance Terreur) | Épique | 10% |
| Chevalière Funéraire (accessoire, +10% dégâts sur morts-vivants) | Rare | 25% |
| Cristal de Donjon (monnaie) | Commun | 100% (×5-10) |

*Sceptre du Royaume Mort et Masque de Pennroth : retirés du roll aveugle de fin de combat — voir Parties Récoltables ci-dessous (D78).*

### Parties Récoltables (D78)

> Dépeçage déterministe (moteur L1) : le franchissement du seuil de dégâts déclenche un roll **garanti** sur la table dédiée, indépendant du roll de fin de combat. Seuils = phases déjà définies ci-dessus. Taux inchangés (D73).

| Partie | Seuil | Item lié | Rareté | Taux |
|---|---|---|---|---|
| Sceptre-Bras | 50% HP (Phase 2 — se dédouble en 3 illusions) | Sceptre du Royaume Mort | Épique | 15% |
| Visage (masque brisé) | 25% HP (Phase 3 — Révélation, jette son masque) | Masque de Pennroth | Légendaire | 3% |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Penwether (sortie du donjon) | `ZONE_SPR_CAP_001` | `!sortir` | 0 MP | Instantané |
| Terres Grises | `ZONE_SPR_HUNT_002` | `!sortir` puis `!marcher sud` | 0 MP | 8 min |

---

## Récompenses de Complétion

| Récompense | Condition |
|---|---|
| 5000 XP | Première complétion |
| Titre « Diplomate des Morts » | Compléter le Bal des Notables sans aucun combat |
| Accès à la quête « Ce Que Cachent les Ruines II » | Complétion + Masque de Pennroth |
| 2000 Yrd | À chaque complétion |

---

## Lore / Histoire

Pennroth régnait sur la cité d'origine — celle dont Penwether squatte les décombres — et refusa de mourir avec elle : il maquilla sa nécropole en royaume et ses sujets morts en cour vivante, première et plus grande illusion du territoire. Les Spriggans nient farouchement toute filiation avec lui, ce qui, venant d'eux, est généralement l'aveu le plus complet. La Bibliothèque Enterrée possède son portrait ; elle le « traduit » depuis quarante ans.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `⚰️ Nécropole Antique — Lv.20-40` |
| **Description du Groupe** | `Donjon instancié Spriggan. 👥 1-6 joueurs. Boss: Pennroth le Roi-Liche (Lv.40). 🎭 1 salle sur 3 est une illusion — !analyze est vital. ⚠️ Mort = perte de 5% XP.` |
| **Règles Affichées** | `1. Formez un groupe avant d'entrer. 2. Vérifiez les salles avant d'y entrer. 3. Soyez polis avec les morts — littéralement.` |

---

> *« Les morts d'ici ne savent pas qu'ils sont morts. Par pitié, ne leur dites rien : ils votent encore. »* — Fossoyeur Grim
