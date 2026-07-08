# Silica (La Dompteuse de Dragons)

## Identification Cardinal
- **NPC_ID** : `NPC_CANON_SILICA`
- **Race** : Cait Sith
- **Rôle** : Beast Tamer / Familier Master
- **Zone de Résidence** : Freelia — Colline des Familiers
- **Niveau** : 68
- **Prime (Bounty)** : 120000 Yrds

## Statistiques
| Stat | Valeur |
|---|---|
| HP | 12500 |
| MP | 7000 |
| STR | 180 |
| AGI | 350 |
| VIT | 220 |
| INT | 300 |
| DEX | 320 |

## Équipement
- **Arme** : Dague de Vent + Pina (Familier Dragon Plumeux)
- **Affinité de base** : 80/100

## Dialogues
**Salutation** : *« Oh ! Tu as vu Pina ? Elle est adorable, hein ? Tu veux la caresser ? Attention, elle mord les gens qu'elle n'aime pas ! »*
**Quête disponible** : *'La Pneuma Flower'* — Aide Silica à trouver la fleur rare pour soigner un familier blessé.

## Secret Inavouable
Silica a une connexion unique avec le Système Cardinal : Pina n'est pas un simple familier, c'est un fragment de programme égaré que Cardinal a tenté de supprimer. Silica l'a sauvé involontairement, et depuis, Pina évolue d'une manière que le système ne comprend pas.

## Lore (Encyclopédie d'Argo)
Ayano Keiko, la plus jeune joueuse de SAO à avoir survécu. Dans ALO, elle a choisi la race Cait Sith pour sa compétence de Beast Taming et retrouvé son cher Pina, le petit dragon plumeux qui l'avait accompagnée dans l'Aincrad. Elle est la meilleure Beast Tamer du serveur.

## Commande IA
- `SYS_NPC_DIALOG_OVERRIDE("NPC_CANON_SILICA", New_Dialogue)` : L'IA peut modifier les réponses de ce PNJ.
- `SYS_MODIFY_AFFINITY(Avatar_ID, "NPC_CANON_SILICA", Valeur)` : L'IA modifie la réputation du joueur auprès de ce PNJ.
