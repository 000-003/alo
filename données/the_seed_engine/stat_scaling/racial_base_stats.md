# 🧬 Statistiques Raciales de Base — ALfheim Online
## The Seed Engine — Module de Progression

> **Version** : 1.0  
> **Dernière mise à jour** : 2026-07-06  
> **Contexte** : Statistiques de départ au **Niveau 1** pour chacune des 9 races jouables.

---

## 📊 Table des Statistiques de Base (Niveau 1)

| Race | HP | MP | STR | AGI | VIT | INT | DEX |
|:---|---:|---:|---:|---:|---:|---:|---:|
| **Sylph** | 380 | 320 | 8 | 16 | 9 | 14 | 13 |
| **Salamander** | 480 | 200 | 18 | 10 | 16 | 8 | 8 |
| **Cait Sith** | 400 | 260 | 10 | 15 | 10 | 12 | 15 |
| **Undine** | 420 | 350 | 9 | 11 | 13 | 17 | 10 |
| **Imp** | 350 | 380 | 7 | 13 | 7 | 18 | 15 |
| **Gnome** | 520 | 180 | 16 | 7 | 18 | 9 | 10 |
| **Puca** | 360 | 340 | 7 | 12 | 8 | 16 | 17 |
| **Spriggan** | 440 | 280 | 14 | 12 | 12 | 13 | 9 |
| **Leprechaun** | 460 | 240 | 13 | 9 | 14 | 11 | 13 |

> **Total de points de stats de base** : 60 pour chaque race (équilibrage).

---

## 🎯 Bonus et Malus Raciaux

| Race | Bonus Racial | Valeur | Malus Racial | Valeur |
|:---|:---|:---|:---|:---|
| **Sylph** | Vitesse de vol augmentée | +30% vitesse de vol | Résistance physique réduite | -15% DEF physique |
| **Salamander** | Dégâts de mêlée augmentés | +20% ATK physique | Régénération MP réduite | -25% regen MP |
| **Cait Sith** | Apprivoisement de monstres | +40% taux d'apprivoisement | HP max réduits | -10% HP max |
| **Undine** | Efficacité des soins | +50% puissance de soin | Dégâts physiques réduits | -15% ATK physique |
| **Imp** | Dégâts magiques de ténèbres | +35% dégâts ténèbres | HP et VIT réduits | -20% HP max |
| **Gnome** | Défense et poids augmentés | +25% DEF physique | Vitesse de vol réduite | -30% vitesse de vol |
| **Puca** | Effet des chants de soutien | +40% efficacité des buffs | Résistance physique réduite | -20% DEF physique |
| **Spriggan** | Magie d'illusion renforcée | +30% durée des illusions | Coût MP augmenté (non-illusion) | +15% coût MP (sorts non-illusion) |
| **Leprechaun** | Bonus de craft et forge | +35% qualité de craft | Vitesse de vol réduite | -20% vitesse de vol |

---

## 🔥 Affinités Élémentaires

| Race | Élément Principal | Élément Secondaire | Résistance Innée | Vulnérabilité |
|:---|:---|:---|:---|:---|
| **Sylph** | Vent | Foudre | Vent (x0.5) | Terre (x1.5) |
| **Salamander** | Feu | — | Feu (x0.5) | Eau (x1.5) |
| **Cait Sith** | Terre | Vent | Terre (x0.75) | Foudre (x1.25) |
| **Undine** | Eau | Glace | Eau (x0.5) | Foudre (x1.5) |
| **Imp** | Ténèbres | Feu | Ténèbres (x0.5) | Lumière (x1.5) |
| **Gnome** | Terre | — | Terre (x0.5) | Vent (x1.5) |
| **Puca** | Lumière | Vent | Lumière (x0.75) | Ténèbres (x1.25) |
| **Spriggan** | Ténèbres | Terre | Ténèbres (x0.75) | Lumière (x1.25) |
| **Leprechaun** | Feu | Terre | Feu (x0.75) | Eau (x1.25) |

---

## 🧮 Formules de Dérivation

### Points de Vie (HP)
```
HP_total = HP_base_racial + (VIT × 12) + (Niveau × HP_par_niveau_racial)
```

### Points de Magie (MP)
```
MP_total = MP_base_racial + (INT × 8) + (Niveau × MP_par_niveau_racial)
```

### Attaque Physique (ATK)
```
ATK = STR × 2.5 + DEX × 0.8 + Bonus_Arme
```

### Défense Physique (DEF)
```
DEF = VIT × 2.0 + STR × 0.5 + Bonus_Armure
```

### Attaque Magique (MATK)
```
MATK = INT × 3.0 + DEX × 0.5
```

### Défense Magique (MDEF)
```
MDEF = INT × 1.5 + VIT × 0.8
```

### Vitesse (SPD)
```
SPD = AGI × 2.0 + DEX × 0.6 - Pénalité_Poids_Armure
```

### Taux de Critique
```
CRIT% = 5% + (DEX × 0.3%) + (AGI × 0.1%)
```

### Esquive
```
DODGE% = 3% + (AGI × 0.4%) + (DEX × 0.15%)
```

---

## 📈 HP et MP par Niveau selon la Race

| Race | HP / Niveau | MP / Niveau |
|:---|---:|---:|
| **Sylph** | +28 | +22 |
| **Salamander** | +38 | +12 |
| **Cait Sith** | +30 | +18 |
| **Undine** | +32 | +24 |
| **Imp** | +24 | +28 |
| **Gnome** | +42 | +10 |
| **Puca** | +26 | +24 |
| **Spriggan** | +34 | +18 |
| **Leprechaun** | +36 | +14 |

---

## 🏁 Répartition des Points de Stats par Niveau

Chaque joueur reçoit **5 points de statistiques** à distribuer librement par niveau gagné.

| Palier de Niveau | Points / Niveau | Points Cumulés |
|:---|---:|---:|
| Nv. 1-10 | 5 | 50 |
| Nv. 11-25 | 5 | 125 |
| Nv. 26-50 | 5 | 250 |
| Nv. 51-75 | 5 | 375 |
| Nv. 76-100 | 5 | 500 |

> **Total au niveau 100** : 500 points à répartir (100 niveaux × 5 points).
> **Stats totales au Nv.100** : 60 (base) + 500 (distribués) = 560 points de stats.

---

## ⚖️ Notes d'Équilibrage

- Les races **tankières** (Gnome, Salamander, Leprechaun) ont les HP/VIT les plus élevés mais souffrent en mobilité ou en MP.
- Les races **magiques** (Imp, Undine, Puca) excellent en INT/MP mais sont fragiles physiquement.
- Les races **agiles** (Sylph, Cait Sith) dominent en AGI/DEX mais manquent de robustesse.
- Le **Spriggan** est un hybride polyvalent sans excès de spécialisation.
- Le **Leprechaun** est le crafter naturel avec un profil semi-tank.
