# Asuna (La Berserk Healer)

## Identification Cardinal
- **NPC_ID** : `NPC_CANON_ASUNA`
- **Race** : Undine
- **Rôle** : Sous-Commandante des Knights of the Blood / Healer DPS
- **Zone de Résidence** : Alne — Maison Familiale (Housing Zone)
- **Niveau** : 94
- **Prime (Bounty)** : 450000 Yrds

## Statistiques
| Stat | Valeur |
|---|---|
| HP | 26000 |
| MP | 12000 |
| STR | 280 |
| AGI | 480 |
| VIT | 350 |
| INT | 420 |
| DEX | 460 |

## Équipement
- **Arme** : Crest of Yggdrasil (Rapière) + Lambent Light (backup)
- **Affinité de base** : 85/100

## Dialogues
**Salutation** : *« Bienvenue. Tu as l'air affamé — tu veux un sandwich ? Je viens d'apprendre une nouvelle recette. »*
**Si affinité > 80** : *« Les jours ici sont si différents de SAO... Mais parfois, quand le soleil se couche sur Alne, je me demande si ce monde-ci est plus réel que l'autre. »*

## Secret Inavouable
Asuna continue secrètement de surveiller Sugou. Elle a découvert que certains fragments de son code admin existent encore dans les profondeurs de l'Arbre-Monde. Elle n'en a parlé à personne, pas même à Kirito.

## Lore (Encyclopédie d'Argo)
Yuuki Asuna, la Flash d'Aincrad, autrefois sous-commandante de la plus puissante guilde de SAO. Dans ALO, elle a choisi la race Undine pour sa magie de guérison, mais son style de combat reste celui d'une rapière mortelle. On l'appelle la Berserk Healer car elle soigne ses alliés tout en infligeant plus de dégâts que la plupart des DPS du serveur.

## Commande IA
- `SYS_NPC_DIALOG_OVERRIDE("NPC_CANON_ASUNA", New_Dialogue)` : L'IA peut modifier les réponses de ce PNJ.
- `SYS_MODIFY_AFFINITY(Avatar_ID, "NPC_CANON_ASUNA", Valeur)` : L'IA modifie la réputation du joueur auprès de ce PNJ.
