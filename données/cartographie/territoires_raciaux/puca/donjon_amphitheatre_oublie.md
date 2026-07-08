# 🎭 AMPHITHÉÂTRE OUBLIÉ — Donjon Local Puca

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_PUC_DUN_001` |
| **Nom Officiel** | Amphithéâtre Oublié |
| **Surnoms** | « La Scène Morte », « Le Dernier Rappel » |
| **Type** | Donjon Instancié (groupe de 1-6 joueurs) |
| **Territoire** | Puca |
| **Safe Zone** | ❌ Non — PK impossible (instancié) mais mort = perte d'XP |
| **Niveau Recommandé** | 20 – 40 |
| **Statut The Seed** | Instance générée par Cardinal — Reset à chaque entrée |

---

## Description Atmosphérique

Enfoui sous une colline au nord de Lioda, l'Amphithéâtre Oublié est un théâtre antique aux gradins peuplés de spectateurs pétrifiés, figés en plein applaudissement. Les lustres se rallument seuls au passage des joueurs et un orchestre invisible accorde éternellement ses instruments dans la fosse. Mécanique signature : le donjon est **rythmé** — les actions envoyées « en mesure » (fenêtres de tempo annoncées par le bot) gagnent +20% d'efficacité, celles à contretemps subissent -20%.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Intérieure** | Air figé, poussière de scène en suspension |
| **Luminosité** | Lustres spectraux — s'éteignent pendant les phases de boss |
| **Effets Spéciaux** | Tempo global (métronome du bot) — mécanique de cadence sur toutes les actions |
| **Température Simulée** | 8°C – 12°C |

---

## Structure du Donjon

### Étage 1 — Le Foyer des Spectres (Lv.20-25)
- **Mobs** : Ouvreuse Fantôme (×6), Rat d'Opéra (×10)
- **Mécanisme** : Récupérer 3 billets spectraux sur les mobs pour franchir le contrôle
- **Piège** : Rideaux tombants (immobilisation 3s + dégâts)

### Étage 2 — La Fosse d'Orchestre (Lv.25-35)
- **Mobs** : Violon Possédé (×5), Timbale Animée (×4), Chef de Pupitre Spectral (×2)
- **Mécanisme** : Traverser la fosse en suivant le tempo — chaque contretemps déclenche une attaque de zone
- **Mini-Boss** : Prima Donna Spectrale (HP: 23000, Lv.30) — son aria inflige Silence en boucle
  - Drop : Éventail de Scène, Partition de l'Aria Brisée

### Étage 3 — La Scène Principale (Lv.35-40)
- **Mobs** : Machiniste de l'Ombre (×4)
- **Boss Final** : **Ondaro, le Maestro Spectral**

---

## Boss Final — Ondaro, le Maestro Spectral

| Attribut | Valeur |
|---|---|
| **ID** | `BOSS_PUC_DUN_001` |
| **Niveau** | 40 |
| **HP** | 115 000 |
| **Barres de HP** | 4 barres |
| **Attaques** | Crescendo (AoE croissante), Baguette Foudroyante (mono-cible), Mesure Forcée (inverse le tempo), Rappel des Pupitres (invoque 2 instruments possédés) |
| **Phase 2 (50% HP)** | Change de tempo toutes les 20s — les fenêtres d'action rétrécissent |
| **Phase 3 (25% HP)** | Symphonie Finale — dégâts DoT globaux, seuls les joueurs « en mesure » sont épargnés |
| **Faiblesse** | Silence (interrompt ses mesures), dégâts contondants |
| **Résistance** | Magie de Musique (immunité), projectiles (30% réduction) |

### Table de Drop — Ondaro

| Item | Rareté | Taux de Drop |
|---|---|---|
| Baguette du Maestro (arme de caster, +2 emplacements de sort de musique) | Épique | 15% |
| Manteau de Première (torse, +15% résistance Silence) | Épique | 10% |
| Fragment de Partition Originelle | Légendaire | 3% |
| Diapason d'Argent (accessoire, fenêtres de tempo +0.5s) | Rare | 25% |
| Cristal de Donjon (monnaie) | Commun | 100% (×5-10) |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Lioda (sortie du donjon) | `ZONE_PUC_CAP_001` | `!sortir` | 0 MP | Instantané |
| Bois des Échos | `ZONE_PUC_HUNT_002` | `!sortir` puis `!marcher sud` | 0 MP | 8 min |

---

## Récompenses de Complétion

| Récompense | Condition |
|---|---|
| 5000 XP | Première complétion |
| Titre « Soliste de l'Oubli » | Vaincre Ondaro sans jamais jouer à contretemps |
| Accès à la quête « Les Partitions Perdues II » | Complétion + Fragment de Partition Originelle |
| 2000 Yrd | À chaque complétion |

---

## Lore / Histoire

L'Amphithéâtre fut le premier grand œuvre des Puca — et leur première tragédie. Le maestro Ondaro y dirigea la tentative de reconstitution de la Partition Originelle ; à la dernière mesure, le Cardinal jugea l'exécution « non conforme » et pétrifia le public entier en plein rappel. Ondaro dirige depuis un orchestre de spectres, condamné à rejouer le concert jusqu'à la perfection. Les Puca ne prononcent jamais son nom sans esquisser une mesure silencieuse de la main.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🎭 Amphithéâtre Oublié — Lv.20-40` |
| **Description du Groupe** | `Donjon instancié Puca. 👥 1-6 joueurs. Boss: Ondaro le Maestro Spectral (Lv.40). Combat rythmé — suivez le métronome du bot ! ⚠️ Mort = perte de 5% XP.` |
| **Règles Affichées** | `1. Formez un groupe avant d'entrer. 2. Respectez le tempo affiché par le bot. 3. Partagez le loot équitablement.` |

---

> *« Le public attend depuis cent ans la fin du concert. Ne les décevez pas. »* — Archiviste Séléna
