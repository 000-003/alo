# ⛓️ MINE DE MITHRIL ABANDONNÉE — Donjon Local Gnome

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_GNO_DUN_001` |
| **Nom Officiel** | Mine de Mithril Abandonnée |
| **Surnoms** | « La Galerie Murée », « Le Filon Maudit » |
| **Type** | Donjon Instancié (groupe de 1-6 joueurs) |
| **Territoire** | Gnome |
| **Safe Zone** | ❌ Non — PK impossible (instancié) mais mort = perte d'XP |
| **Niveau Recommandé** | 20 – 40 |
| **Statut The Seed** | Instance générée par Cardinal — Reset à chaque entrée |

---

## Description Atmosphérique

Derrière le mur de brique dressé à la hâte par Granzam s'étendent les galeries du plus riche filon de mithril jamais découvert en Alfheim — et jamais exploité. Le métal luit d'une lueur bleuâtre dans les parois, si dense qu'il perturbe les sorts (coût MP +20% dans tout le donjon). Les wagonnets circulent encore, poussés par des mains de pierre : les golems continuent l'exploitation pour un contremaître qui n'existe plus, entassant depuis des décennies un trésor que personne ne vient chercher.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Intérieure** | Souterrain — poussière de mithril en suspension |
| **Luminosité** | Lueur bleue du minerai — vision correcte sans torche |
| **Effets Spéciaux** | Interférence de mithril : coût MP +20%, sorts de Terre inefficaces |
| **Température Simulée** | 6°C – 10°C |

---

## Structure du Donjon

### Étage 1 — Le Mur et les Vestiaires (Lv.20-25)
- **Mobs** : Golem d'Entretien (×6), Nuée de Chauves-Souris Bleues (×8)
- **Mécanisme** : Trouver le badge de quart d'un mineur disparu pour « pointer » et déverrouiller l'ascenseur
- **Piège** : Lampes à gaz fuyardes (explosion si sort de Feu à proximité)

### Étage 2 — Les Galeries d'Extraction (Lv.25-35)
- **Mobs** : Golem Foreur (×5), Ver de Mithril (×6)
- **Mécanisme** : Circuler entre les wagonnets en mouvement (collision = 600 dégâts + projection sur les rails)
- **Mini-Boss** : Wagonnet-Golem « Le Convoyeur » (HP: 26000, Lv.32) — combat sur rails en mouvement
  - Drop : Essieu Renforcé, Lingot de Mithril Impur

### Étage 3 — La Chambre du Filon (Lv.35-40)
- **Mobs** : Golem Contremaître (×3)
- **Boss Final** : **Mithrandur, le Cœur du Filon**

---

## Boss Final — Mithrandur, le Cœur du Filon

| Attribut | Valeur |
|---|---|
| **ID** | `BOSS_GNO_DUN_001` |
| **Niveau** | 40 |
| **HP** | 140 000 |
| **Barres de HP** | 5 barres (le plus tanky des donjons territoriaux) |
| **Attaques** | Poing de Mithril (mono-cible, brise-bouclier), Onde Sismique (AoE sol), Aimantation (attire les porteurs d'armure métallique), Éveil des Golems (invoque 2 golems d'entretien) |
| **Phase 2 (50% HP)** | S'incruste dans la paroi — seules les zones de fissure sont vulnérables |
| **Phase 3 (25% HP)** | Surcharge Magnétique — les armes métalliques non rengainées infligent des dégâts à leur porteur |
| **Faiblesse** | Armes contondantes en pierre/bois, magie de Feu (fait fondre les jointures) |
| **Résistance** | Magie de Terre (immunité), armes métalliques (aimantées, -50%) |

### Table de Drop — Mithrandur

| Item | Rareté | Taux de Drop |
|---|---|---|
| Cotte de Mithril Brut (torse, poids plume) | Épique | 10% |
| Bague Magnétique (accessoire, +10% loot de minerai) | Rare | 25% |
| Lingot de Mithril Impur | Commun | 100% (×2-4) |
| Cristal de Donjon (monnaie) | Commun | 100% (×5-10) |

*Marteau du Filon et Cœur de Mithril : retirés du roll aveugle de fin de combat — voir Parties Récoltables ci-dessous (D78).*

### Parties Récoltables (D78)

> Dépeçage déterministe (moteur L1) : le franchissement du seuil de dégâts déclenche un roll **garanti** sur la table dédiée, indépendant du roll de fin de combat. Seuils = phases déjà définies ci-dessus. Taux inchangés (D73).

| Partie | Seuil | Item lié | Rareté | Taux |
|---|---|---|---|---|
| Fissures du Corps | 50% HP (Phase 2 — s'incruste dans la paroi, zones de fissure vulnérables) | Marteau du Filon | Épique | 15% |
| Noyau Magnétique | 25% HP (Phase 3 — Surcharge Magnétique) | Cœur de Mithril | Légendaire | 3% |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Granzam (sortie du donjon) | `ZONE_GNO_CAP_001` | `!sortir` | 0 MP | Instantané |
| Carrières Brisées | `ZONE_GNO_HUNT_002` | `!sortir` puis `!marcher sud` | 0 MP | 8 min |

---

## Récompenses de Complétion

| Récompense | Condition |
|---|---|
| 5000 XP | Première complétion |
| Titre « Pointeur du Dernier Quart » | Vaincre Mithrandur sans qu'aucun membre ne meure |
| Accès à la quête « Le Poids de la Montagne II » | Complétion + Cœur de Mithril |
| 2000 Yrd | À chaque complétion |

---

## Lore / Histoire

Le filon de mithril n'a pas rendu les golems fous : il les a rendus **fidèles**. Saturés d'un métal conducteur de mana, ils ont continué d'obéir au dernier ordre reçu — « extrayez tout » — avec une littéralité de machine. Mithrandur est l'agrégat de mithril qui s'est formé autour du registre de chantier ; il « signe » encore les quotas chaque soir. Le Conseil de Pierre paiera très cher quiconque rapportera ce registre… et fera très attentivement disparaître la page des signataires.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `⛓️ Mine de Mithril — Lv.20-40` |
| **Description du Groupe** | `Donjon instancié Gnome. 👥 1-6 joueurs. Boss: Mithrandur (Lv.40, 5 barres). ⚠️ Coût MP +20% et armes métalliques pénalisées. Mort = perte de 5% XP.` |
| **Règles Affichées** | `1. Formez un groupe avant d'entrer. 2. Prévoyez des armes non métalliques pour le boss. 3. Partagez le loot équitablement.` |

---

> *« Le mithril, petit, c'est comme la dette : ça brille, ça pèse rien, et ça finit toujours par te réclamer des comptes. »* — Contremaître Durgan
