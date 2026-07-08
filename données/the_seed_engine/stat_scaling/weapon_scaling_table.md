# ⚔️ Table de Scaling des Armes — ALfheim Online
## The Seed Engine — Module d'Équipement

> **Version** : 1.0  
> **Dernière mise à jour** : 2026-07-06  
> **Note** : Les valeurs de base correspondent à un équipement **Tier 1 (Commun)** de niveau 1.

---

## 📊 Statistiques de Base par Type d'Arme

| Type d'Arme | ATK Base | Vit. Attaque | Portée (m) | Scaling STR | Scaling DEX | Crit% Base | Poids | STR Min |
|:---|---:|:---|---:|:---|:---|---:|---:|---:|
| **Épée 1H** | 35 | Moyenne (1.0s) | 1.5 | B (×1.2) | C (×0.8) | 5% | 3.0 kg | 8 |
| **Épée 2H** | 55 | Lente (1.6s) | 2.0 | A (×1.5) | D (×0.5) | 4% | 6.5 kg | 14 |
| **Dague** | 20 | Très Rapide (0.6s) | 0.8 | D (×0.5) | A (×1.5) | 12% | 1.0 kg | 4 |
| **Lance** | 45 | Moyenne-Lente (1.3s) | 3.0 | B (×1.2) | C (×0.8) | 6% | 5.0 kg | 12 |
| **Hache** | 60 | Lente (1.8s) | 1.8 | S (×1.8) | E (×0.3) | 3% | 8.0 kg | 16 |
| **Arc** | 30 | Moyenne (1.2s) | 25.0 | E (×0.3) | S (×1.8) | 8% | 2.5 kg | 6 |
| **Baguette** | 15 | Rapide (0.8s) | 15.0 | E (×0.2) | B (×1.2) | 3% | 1.5 kg | 3 |
| **Bouclier** | 10 | — | 1.0 | C (×0.8) | E (×0.3) | 1% | 5.5 kg | 10 |
| **Katana** | 42 | Rapide (0.9s) | 1.8 | C (×0.8) | A (×1.5) | 10% | 2.8 kg | 10 |
| **Rapière** | 28 | Très Rapide (0.6s) | 1.5 | D (×0.5) | S (×1.8) | 14% | 1.8 kg | 6 |
| **Masse** | 50 | Lente (1.5s) | 1.2 | A (×1.5) | E (×0.3) | 2% | 7.0 kg | 15 |

---

## 📈 Scaling par Tier d'Équipement

| Tier | Rareté | Multiplicateur ATK | Niveau Min | Couleur |
|:---|:---|---:|---:|:---|
| T1 | Commun | ×1.0 | 1 | ⬜ Blanc |
| T2 | Peu Commun | ×1.5 | 15 | 🟩 Vert |
| T3 | Rare | ×2.2 | 30 | 🟦 Bleu |
| T4 | Épique | ×3.0 | 55 | 🟪 Violet |
| T5 | Légendaire | ×4.5 | 80 | 🟧 Orange |
| T6* | Mythique (Unique) | ×6.0 | 95 | 🟥 Rouge |

> *T6 = armes uniques issues de quêtes spéciales (ex: Excalibur, Épée Sacrée). Maximum 1 par serveur.*

---

## 🗡️ Détail par Type d'Arme

### Épée à Une Main (1H Sword)
```
Dégâts = ATK_Base × Tier_Multi + (STR × 1.2) + (DEX × 0.8)
DPS = Dégâts / Vitesse_Attaque
```

| Tier | ATK | DPS Estimé | STR Min | Nv. Min |
|:---|---:|---:|---:|---:|
| T1 | 35 | 35.0 | 8 | 1 |
| T2 | 52 | 52.0 | 14 | 15 |
| T3 | 77 | 77.0 | 22 | 30 |
| T4 | 105 | 105.0 | 34 | 55 |
| T5 | 158 | 158.0 | 48 | 80 |

### Épée à Deux Mains (2H Sword)
| Tier | ATK | DPS Estimé | STR Min | Nv. Min |
|:---|---:|---:|---:|---:|
| T1 | 55 | 34.4 | 14 | 1 |
| T2 | 82 | 51.3 | 22 | 15 |
| T3 | 121 | 75.6 | 34 | 30 |
| T4 | 165 | 103.1 | 48 | 55 |
| T5 | 248 | 155.0 | 66 | 80 |

### Dague (Dagger)
| Tier | ATK | DPS Estimé | STR Min | Nv. Min |
|:---|---:|---:|---:|---:|
| T1 | 20 | 33.3 | 4 | 1 |
| T2 | 30 | 50.0 | 7 | 15 |
| T3 | 44 | 73.3 | 12 | 30 |
| T4 | 60 | 100.0 | 18 | 55 |
| T5 | 90 | 150.0 | 26 | 80 |

### Lance (Spear)
| Tier | ATK | DPS Estimé | STR Min | Nv. Min |
|:---|---:|---:|---:|---:|
| T1 | 45 | 34.6 | 12 | 1 |
| T2 | 68 | 52.3 | 20 | 15 |
| T3 | 99 | 76.2 | 30 | 30 |
| T4 | 135 | 103.8 | 42 | 55 |
| T5 | 203 | 156.2 | 58 | 80 |

### Hache (Axe)
| Tier | ATK | DPS Estimé | STR Min | Nv. Min |
|:---|---:|---:|---:|---:|
| T1 | 60 | 33.3 | 16 | 1 |
| T2 | 90 | 50.0 | 26 | 15 |
| T3 | 132 | 73.3 | 38 | 30 |
| T4 | 180 | 100.0 | 54 | 55 |
| T5 | 270 | 150.0 | 74 | 80 |

### Arc (Bow)
| Tier | ATK | DPS Estimé | DEX Min | Nv. Min |
|:---|---:|---:|---:|---:|
| T1 | 30 | 25.0 | 10 | 1 |
| T2 | 45 | 37.5 | 18 | 15 |
| T3 | 66 | 55.0 | 28 | 30 |
| T4 | 90 | 75.0 | 40 | 55 |
| T5 | 135 | 112.5 | 56 | 80 |

### Baguette (Wand)
| Tier | MATK Bonus | Cast Speed Bonus | INT Min | Nv. Min |
|:---|---:|:---|---:|---:|
| T1 | +15 | +0% | 10 | 1 |
| T2 | +25 | +5% | 18 | 15 |
| T3 | +40 | +10% | 28 | 30 |
| T4 | +60 | +15% | 42 | 55 |
| T5 | +90 | +25% | 60 | 80 |

### Bouclier (Shield)
| Tier | DEF Bonus | Block% | STR Min | Nv. Min |
|:---|---:|---:|---:|---:|
| T1 | +20 | 15% | 10 | 1 |
| T2 | +35 | 20% | 18 | 15 |
| T3 | +55 | 25% | 28 | 30 |
| T4 | +80 | 32% | 40 | 55 |
| T5 | +120 | 40% | 56 | 80 |

### Katana
| Tier | ATK | DPS Estimé | DEX Min | Nv. Min |
|:---|---:|---:|---:|---:|
| T1 | 42 | 46.7 | 12 | 1 |
| T2 | 63 | 70.0 | 20 | 15 |
| T3 | 92 | 102.2 | 30 | 30 |
| T4 | 126 | 140.0 | 44 | 55 |
| T5 | 189 | 210.0 | 62 | 80 |

### Rapière (Rapier)
| Tier | ATK | DPS Estimé | DEX Min | Nv. Min |
|:---|---:|---:|---:|---:|
| T1 | 28 | 46.7 | 10 | 1 |
| T2 | 42 | 70.0 | 16 | 15 |
| T3 | 62 | 103.3 | 24 | 30 |
| T4 | 84 | 140.0 | 36 | 55 |
| T5 | 126 | 210.0 | 50 | 80 |

### Masse (Mace)
| Tier | ATK | DPS Estimé | STR Min | Nv. Min |
|:---|---:|---:|---:|---:|
| T1 | 50 | 33.3 | 15 | 1 |
| T2 | 75 | 50.0 | 24 | 15 |
| T3 | 110 | 73.3 | 36 | 30 |
| T4 | 150 | 100.0 | 50 | 55 |
| T5 | 225 | 150.0 | 70 | 80 |

---

## 🎯 Échelle de Scaling (Grades)

| Grade | Multiplicateur | Description |
|:---|---:|:---|
| S | ×1.8 | Scaling exceptionnel — stat dominante |
| A | ×1.5 | Scaling excellent — stat primaire |
| B | ×1.2 | Scaling bon — stat secondaire |
| C | ×0.8 | Scaling moyen — contribution mineure |
| D | ×0.5 | Scaling faible — contribution marginale |
| E | ×0.3 | Scaling minimal — quasi-ignoré |

---

## ⚡ Mécaniques de Critique

```
Dégâts Critiques = Dégâts × (1.5 + Crit_Bonus_Arme)
Chance de Crit = Crit%_Base_Arme + (DEX × 0.3%) + (AGI × 0.1%)
```

| Type d'Arme | Crit% Base | Crit Damage Multi | Crit Max (Lv.100) |
|:---|---:|---:|---:|
| Épée 1H | 5% | ×1.6 | ~25% |
| Épée 2H | 4% | ×1.8 | ~22% |
| Dague | 12% | ×1.5 | ~38% |
| Lance | 6% | ×1.7 | ~28% |
| Hache | 3% | ×2.0 | ~20% |
| Arc | 8% | ×1.6 | ~32% |
| Baguette | 3% | ×1.4 | ~18% |
| Bouclier | 1% | ×1.2 | ~8% |
| Katana | 10% | ×1.7 | ~36% |
| Rapière | 14% | ×1.5 | ~42% |
| Masse | 2% | ×2.2 | ~16% |

---

## ⚖️ Impact du Poids sur la Vitesse

```
Pénalité_Vitesse = Poids_Total_Armes / (STR × 2)
Vitesse_Effective = Vitesse_Base × (1 - Pénalité_Vitesse)
```

| Classe de Poids | Fourchette | Impact Vitesse | Impact Vol |
|:---|:---|:---|:---|
| Ultra-Léger | 0-1.5 kg | Aucun | Aucun |
| Léger | 1.5-3.0 kg | -2% vitesse | Aucun |
| Moyen | 3.0-5.5 kg | -5% vitesse | -5% vol |
| Lourd | 5.5-7.5 kg | -10% vitesse | -15% vol |
| Très Lourd | 7.5+ kg | -15% vitesse | -25% vol |

---

## 🔧 Compatibilité Race / Arme (Affinités Naturelles)

| Race | Armes Recommandées | Bonus d'Affinité |
|:---|:---|:---|
| Sylph | Rapière, Dague, Arc | +8% vitesse d'attaque |
| Salamander | Épée 2H, Hache, Lance | +10% ATK de base |
| Cait Sith | Dague, Arc, Katana | +12% taux de critique |
| Undine | Baguette, Lance, Bouclier | +15% MATK |
| Imp | Baguette, Dague, Katana | +10% dégâts magiques |
| Gnome | Masse, Hache, Bouclier | +10% DEF en combat |
| Puca | Baguette, Rapière, Dague | +10% vitesse de cast |
| Spriggan | Épée 1H, Épée 2H, Lance | +8% dégâts sur illusion |
| Leprechaun | Masse, Épée 1H, Bouclier | +15% durabilité d'arme |
