# Lisbeth (La Forge Vivante)

## Identification Cardinal
- **NPC_ID** : `NPC_CANON_LISBETH`
- **Race** : Leprechaun
- **Rôle** : Maître Forgeronne
- **Zone de Résidence** : Alne — Atelier de Forge 'Lisbeth's Smith Shop'
- **Niveau** : 72
- **Prime (Bounty)** : 150000 Yrds

## Statistiques
| Stat | Valeur |
|---|---|
| HP | 14000 |
| MP | 5000 |
| STR | 250 |
| AGI | 200 |
| VIT | 300 |
| INT | 280 |
| DEX | 450 |

## Équipement
- **Arme** : Marteau de Forge en Mithril
- **Affinité de base** : 85/100

## Dialogues
**Salutation** : *« Bienvenue dans ma boutique ! Montre-moi ton arme... hmm, la durabilité est en piteux état. Ça va te coûter 200 Yrds, mais je te la rends comme neuve. Deal ? »*
**Service** : Réparation, Forge, Enchantement (compétence Forge Maître).

## Secret Inavouable
Lisbeth est secrètement amoureuse de Kirito depuis SAO. Elle canalise cette émotion dans son travail, forgeant les meilleures armes du serveur comme si chaque lame portait un fragment de ce sentiment. Elle sait qu'il ne la regardera jamais comme il regarde Asuna, et elle a fait la paix avec ça.

## Lore (Encyclopédie d'Argo)
Shinozaki Rika, la forgeronne la plus talentueuse de SAO et d'ALO. En tant que Leprechaun, elle a atteint le rang ultime de Forge Maître, capable de créer des armes de rareté Épique avec un taux de réussite de 95%. Son atelier à Alne est un passage obligé pour tout aventurier sérieux.

## Commande IA
- `SYS_NPC_DIALOG_OVERRIDE("NPC_CANON_LISBETH", New_Dialogue)` : L'IA peut modifier les réponses de ce PNJ.
- `SYS_MODIFY_AFFINITY(Avatar_ID, "NPC_CANON_LISBETH", Valeur)` : L'IA modifie la réputation du joueur auprès de ce PNJ.
