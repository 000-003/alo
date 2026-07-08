# 🎯 Système de Maîtrise des Compétences — ALfheim Online
## The Seed Engine — Module de Proficiency

> **Version** : 1.0  
> **Dernière mise à jour** : 2026-07-06  
> **Principe** : Les compétences s'améliorent par l'**usage**, pas par la dépense de points.

---

## 📊 Paliers de Maîtrise

| Palier | Rang | EXP Compétence Requise | EXP Cumulée | Bonus Dégâts/Soins | Réduction Cast | Réduction Coût MP |
|---:|:---|---:|---:|---:|---:|---:|
| 1 | **Débutant** | 0 | 0 | +0% | +0% | +0% |
| 2 | **Intermédiaire** | 500 | 500 | +8% | -5% | -5% |
| 3 | **Avancé** | 1 500 | 2 000 | +18% | -10% | -10% |
| 4 | **Expert** | 4 000 | 6 000 | +30% | -18% | -15% |
| 5 | **Maître** | 10 000 | 16 000 | +45% | -25% | -22% |
| 6 | **Légendaire** | 25 000 | 41 000 | +65% | -35% | -30% |

---

## 📈 Sources d'EXP de Compétence

| Action | EXP Gagnée | Condition |
|:---|---:|:---|
| Utilisation réussie en combat PvE | +5 | Le sort/skill touche un ennemi |
| Utilisation réussie en combat PvP | +8 | Le sort/skill touche un joueur |
| Kill avec la compétence | +15 | L'ennemi est achevé par ce skill |
| Utilisation en combo (chaîne ≥3) | +10 | La compétence fait partie d'une chaîne |
| Utilisation de soin réussie | +6 | Le soin est effectif (pas d'overheal) |
| Buff/Debuff appliqué avec succès | +4 | Le buff/debuff prend effet |
| Pratique sur mannequin d'entraînement | +2 | Maximum 100 EXP/jour par cette méthode |
| Enseignement à un autre joueur | +3 | Le joueur cible lance la compétence |
| Échec (miss/résisté) | +1 | L'EXP est quand même gagnée, mais réduite |

---

## 🗡️ Catégories de Compétences

### Compétences de Combat (Sword Skills)

| Nom Exemple | Type | Coût MP Base | Cooldown | Dégâts Base | Palier Débutant → Légendaire |
|:---|:---|---:|---:|---:|:---|
| Horizontal | Épée 1H | 8 MP | 3s | 120% ATK | 120% → 198% ATK |
| Slant | Épée 1H | 6 MP | 2s | 100% ATK | 100% → 165% ATK |
| Vorpal Strike | Épée 1H | 25 MP | 10s | 280% ATK | 280% → 462% ATK |
| Avalanche | Épée 2H | 30 MP | 12s | 320% ATK | 320% → 528% ATK |
| Rage Spike | Dague | 10 MP | 4s | 150% ATK | 150% → 248% ATK |
| Linear | Rapière | 5 MP | 1.5s | 90% ATK | 90% → 149% ATK |
| Star Burst Stream | Épée 1H (Unique) | 80 MP | 45s | 1600% ATK | 1600% → 2640% ATK |

### Magie Offensive

| Nom Exemple | Élément | Coût MP Base | Cast Time | Dégâts Base | Palier Débutant → Légendaire |
|:---|:---|---:|---:|---:|:---|
| Fire Bolt | Feu | 12 MP | 1.0s | 150% MATK | 150% → 248% |
| Aqua Bind | Eau | 18 MP | 1.5s | 80% MATK + Slow | 80% → 132% + Slow |
| Wind Cutter | Vent | 10 MP | 0.8s | 120% MATK | 120% → 198% |
| Earth Wall | Terre | 20 MP | 1.2s | — (bouclier) | DEF +80 → +132 |
| Holy Light | Lumière | 22 MP | 1.8s | 200% MATK | 200% → 330% |
| Dark Lance | Ténèbres | 25 MP | 2.0s | 220% MATK | 220% → 363% |
| Thunder Clap | Foudre | 28 MP | 1.5s | 180% MATK + Stun | 180% → 297% + Stun |
| Frost Nova | Glace | 30 MP | 2.0s | 160% MATK + AoE | 160% → 264% + AoE |

### Magie de Soutien

| Nom Exemple | Type | Coût MP Base | Cast Time | Effet Base | Palier Débutant → Légendaire |
|:---|:---|---:|---:|:---|:---|
| Heal | Soin | 15 MP | 1.0s | Restore 200 HP | 200 → 330 HP |
| Mega Heal | Soin | 40 MP | 2.5s | Restore 600 HP | 600 → 990 HP |
| Purify | Dispel | 20 MP | 1.5s | Retire 1 debuff | 1 → 2 debuffs |
| Haste | Buff | 25 MP | 1.0s | +15% AGI 30s | +15% → +25% AGI |
| Barrier | Bouclier | 30 MP | 1.5s | Absorbe 300 HP | 300 → 495 HP |
| Resurrection | Revive | 80 MP | 5.0s | Revive à 20% HP | 20% → 45% HP |

---

## 📐 Formules de Progression

### Dégâts de Compétence
```
Dégâts_Skill = ATK × Multiplicateur_Skill × (1 + Bonus_Maîtrise%) × Multi_Élément
```

### Coût MP Effectif
```
MP_Coût = MP_Base × (1 - Réduction_Maîtrise%) × (1 - Bonus_Équipement%)
```

### Temps de Cast Effectif
```
Cast_Time = Cast_Base × (1 - Réduction_Maîtrise%) × (1 - Bonus_AGI%)
Où Bonus_AGI% = AGI × 0.15% (cap 30%)
```

### Cooldown Effectif
```
Cooldown = CD_Base × (1 - Maîtrise_Bonus × 0.08)
Maîtrise_Bonus = Rang_Numérique (1 à 6)
Minimum Cooldown = CD_Base × 0.5
```

---

## 🔓 Déblocages par Palier de Maîtrise

| Palier | Déblocage |
|:---|:---|
| **Débutant** (Rang 1) | Utilisation de base de la compétence |
| **Intermédiaire** (Rang 2) | Variante directionnelle (haut/bas/côté) |
| **Avancé** (Rang 3) | Annulation de post-motion (cancel) |
| **Expert** (Rang 4) | Chaînage en combo (linking) |
| **Maître** (Rang 5) | Utilisation en vol + version améliorée |
| **Légendaire** (Rang 6) | Extra Skill débloquée + Compétence Ultime |

---

## 🎓 Système de Compétences par Arbre

Chaque joueur peut développer des compétences dans **plusieurs arbres** simultanément :

| Arbre | Compétences Disponibles | Slots Max |
|:---|---:|---:|
| Combat (Sword Skills) | 25 | 8 actifs |
| Magie Offensive | 32 | 6 actifs |
| Magie de Soutien | 18 | 4 actifs |
| Passifs / Auras | 15 | 5 actifs |
| Artisanat | 12 | N/A (toujours actifs) |
| Racial (Unique) | 5 | 3 actifs |

> **Slots Actifs Totaux** : Un joueur peut avoir **26 compétences** actives en même temps.
> Les compétences inactives conservent leur EXP mais ne peuvent pas être utilisées.

---

## ⏱️ Temps Estimé pour Atteindre chaque Palier

| Palier | EXP Nécessaire | Temps Estimé (usage régulier) |
|:---|---:|:---|
| Débutant → Intermédiaire | 500 | ~3 jours |
| Intermédiaire → Avancé | 1 500 | ~1 semaine |
| Avancé → Expert | 4 000 | ~3 semaines |
| Expert → Maître | 10 000 | ~6 semaines |
| Maître → Légendaire | 25 000 | ~12 semaines |
| **Total (Débutant → Légendaire)** | **41 000** | **~6 mois** |

---

## 🏆 Compétences Raciales Ultimes (Rang Légendaire requis)

| Race | Compétence Ultime | Effet | Cooldown |
|:---|:---|:---|---:|
| Sylph | **Sylph Storm** | AoE Vent massif + vol ×2 pendant 15s | 300s |
| Salamander | **Inferno Blade** | ATK ×3 pendant 10s + aura de feu | 300s |
| Cait Sith | **Beast Lord Summon** | Invoque un boss dragon apprivoisé 30s | 600s |
| Undine | **Tidal Sanctum** | Zone de soin AoE (50% HP max) + cleanse | 300s |
| Imp | **Abyssal Gate** | Téléporte le groupe + dégâts ténèbres zone | 300s |
| Gnome | **Titan's Wall** | Immunité aux dégâts physiques 8s + taunt | 300s |
| Puca | **Requiem of Light** | Buff all stats +30% pour le groupe 20s | 300s |
| Spriggan | **Phantom Legion** | Crée 5 clones combattants pendant 20s | 300s |
| Leprechaun | **Forge Divine** | Upgrade temporaire T+1 de l'équipement du groupe 60s | 600s |

---

## ⚠️ Restrictions de Maîtrise

| Règle | Détail |
|:---|:---|
| Rang Légendaire simultané | Maximum 3 compétences au rang Légendaire |
| Palier Maître minimum | Nécessite Nv. 50 du personnage |
| Palier Légendaire minimum | Nécessite Nv. 75 du personnage |
| Reset de maîtrise | Possible mais perd 50% de l'EXP investie |
| Bonus de guilde | +5% EXP de compétence si QG de guilde ≥ Nv.3 |
