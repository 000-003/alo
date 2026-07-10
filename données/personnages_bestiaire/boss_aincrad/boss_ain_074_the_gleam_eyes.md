# Wiki ALfheim Online - The Gleam Eyes (Boss du Palier 74)

## 1. Lore et Histoire (Background)
The Gleam Eyes est l'un des boss les plus tristement célèbres de l'Aincrad d'origine : un **démon caprin à la peau bleue**, brandissant une immense épée courbe, dont la puissance était telle qu'il faillit anéantir tout le raid de clearing. C'est contre lui que Kirito révéla publiquement sa compétence unique, le **Double Maniement (Dual Blades)**, enchaînant l'OSS *Starburst Stream* pour l'abattre au prix de sa durabilité d'armes. Réimplanté dans New Aincrad, il reste le mur de vérification du haut-endgame : nul ne passe le Palier 74 sans un DPS de pointe.

## 2. Apparitions
- **Lieu d'apparition** : Salle du Boss scellée, `ZONE_AIN_FLR_074`.
- **Condition de rencontre** : Palier 73 nettoyé + file `!dungeon_queue` (raid complet recommandé, pas 7 joueurs).

## 3. Statistiques RPG (Fandom Stats)
- **ID Monstre** : `BOSS_AIN_074`
- **Catégorie** : Floor Boss (Palier 74 — unique par serveur)
- **Niveau Estimé** : 84
- **Hit Points (HP)** : 4 Barres (~6 400 000 HP).
- **STR** : 1 950 · **AGI** : 900 · **VIT** : 1 400.
- **Résistances** : Ténèbres (50 %). **Faiblesses** : Lumière (+30 %).

## 4. Mécaniques de Combat et Patterns
1. **Balayage de l'Épée Courbe** : attaque en arc de 180° qui tranche toute la première ligne — un seul coup peut tuer un tank sous-équipé (le moment canon où Kirito voit ses alliés près de mourir).
2. **Rugissement de Terreur** : inflige un débuff de peur (perte de contrôle 2 s) à tout le raid ; contré par les résistances mentales (`PAS_CBT`).
3. **Fenêtre de Dual Blades** : en phase 3, sa garde ne peut être brisée que par un **enchaînement ininterrompu** (Perfect Chain) — la mécanique récompense explicitement l'OSS T5 `OSS_EPE_001` Starburst Stream (double maniement), hommage à la scène fondatrice.

## 5. Loot et Conséquences
- **Drop Assuré** : Yrds de palier + Gemme du Palier 74.
- **Last Attack Bonus** : fragment d'arme T5 (matériau lié) orientant vers un craft de haut niveau.
- **Conséquence** : ouverture vers `ZONE_AIN_FLR_075` (le Skull Reaper attend).
- **Intégration Bot** : `!sys_spawn_boss [Group_ID] BOSS_AIN_074` · `SYS_GRANT_ITEM`. Aucune commande nouvelle.
