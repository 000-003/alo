# Wiki ALfheim Online - Illfang le Seigneur Kobold (Boss du Palier 1)

## 1. Lore et Histoire (Background)
Illfang the Kobold Lord est le tout premier boss de palier de l'Aincrad d'origine (SAO), fidèlement réimplanté par Ymir dans *New Aincrad*. Créature reptilienne à la peau écarlate, il garde l'escalier du Palier 1 vers le Palier 2. Sa légende est fondatrice : lors de la première clearing de SAO, le chevalier Diavel mourut pour avoir mal anticipé sa dernière phase — le guide de stratégie annonçait une talwar, mais Illfang dégaina un **nodachi** inattendu. C'est Kirito, aux côtés d'Asuna, qui porta le coup final. Dans New Aincrad, il sert de rite de passage vers l'endgame vertical.

## 2. Apparitions
- **Lieu d'apparition** : Salle du Boss scellée, `ZONE_AIN_HUB_001` (Palier 1, Ville du Début) → escalier vers `ZONE_AIN_FLR_002`.
- **Condition de rencontre** : file de raid `!dungeon_queue` (7 joueurs, groupe `INSTANCE` éphémère) ; la salle se verrouille jusqu'à la mort du boss ou du raid.

## 3. Statistiques RPG (Fandom Stats)
- **ID Monstre** : `BOSS_AIN_001`
- **Catégorie** : Floor Boss (Palier 1 — unique par serveur)
- **Niveau Estimé** : 10
- **Hit Points (HP)** : 4 Barres (~10 000 HP).
- **STR** : 125 · **AGI** : 200 · **VIT** : 90.
- **Résistances** : aucune notable. **Faiblesses** : dégâts perforants (Thrust).

## 4. Mécaniques de Combat et Patterns
1. **Sbires Ruin Kobold Sentinels** : Illfang commence entouré de gardes mineurs à écarter avant de l'ouvrir.
2. **Talwar & Bouclier** (barres 1-3) : garde haute, punit les attaques frontales non parées.
3. **Bascule Nodachi** (dernière barre — piège de Diavel) : Illfang **jette son bouclier**, dégaine un nodachi et gagne +40 % de portée et de vitesse. Le raid qui attaque au corps-à-corps sans reculer d'un temps est fauché — la leçon canon.

## 5. Loot et Conséquences
- **Drop Assuré** : Yrds de palier + Gemme du Palier 1.
- **Last Attack Bonus** (au porteur du coup final) : **Manteau de Minuit** (référence canon au butin de Kirito) — pièce cosmétique liée.
- **Conséquence** : ouverture de l'escalier vers `ZONE_AIN_FLR_002` ; inscription au registre du palier de front (`!dome_log`).
- **Intégration Bot** : `!sys_spawn_boss [Group_ID] BOSS_AIN_001` · loot via `SYS_GRANT_ITEM`. Aucune commande nouvelle.
