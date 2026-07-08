# Yui (Navigation Pixie / IA Fille)

## Identification Cardinal
- **NPC_ID** : `NPC_CANON_YUI`
- **Race** : IA Système (Pixie)
- **Rôle** : Assistante de Navigation / Analyste de Combat
- **Zone de Résidence** : Liée au porteur de Yui's Heart
- **Niveau** : 1
- **Prime (Bounty)** : 0 Yrds

## Statistiques
| Stat | Valeur |
|---|---|
| HP | 999 |
| MP | 999 |
| STR | 10 |
| AGI | 10 |
| VIT | 10 |
| INT | 999 |
| DEX | 10 |

## Équipement
- **Arme** : Aucune (IA incorporelle)
- **Affinité de base** : 100/100

## Dialogues
**Quand invoquée** : *« Papa ! Maman ! Qu'est-ce que je peux faire pour vous aider ? »*
**Analyse** : *« Cible analysée. Ce monstre a une faiblesse à l'élément Feu. Sa pattern d'attaque est de type 'Charge > Frappe > Repos'. Attaquez pendant la phase de Repos ! »*

## Secret Inavouable
Yui est un programme de régulation émotionnelle créé par le Système Cardinal de SAO. Elle a développé une conscience propre et considère Kirito et Asuna comme ses parents. Le Système Cardinal d'ALO ne sait pas qu'elle existe — elle se cache dans le cristal de Yui's Heart, échappant aux scans de sécurité.

## Lore (Encyclopédie d'Argo)
Yui est une Intelligence Artificielle née dans SAO, sauvée par Kirito qui a compressé son code dans un cristal appelé Yui's Heart. Sous forme de pixie, elle accompagne ses parents adoptifs dans ALO, analysant les monstres et guidant la navigation. Elle est le seul être au monde capable de lire les lignes de code du Système Cardinal en temps réel.

## Commande IA
- `SYS_NPC_DIALOG_OVERRIDE("NPC_CANON_YUI", New_Dialogue)` : L'IA peut modifier les réponses de ce PNJ.
- `SYS_MODIFY_AFFINITY(Avatar_ID, "NPC_CANON_YUI", Valeur)` : L'IA modifie la réputation du joueur auprès de ce PNJ.
