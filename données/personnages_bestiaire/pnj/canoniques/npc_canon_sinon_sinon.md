# Sinon (L'Œil du Faucon)

## Identification Cardinal
- **NPC_ID** : `NPC_CANON_SINON`
- **Race** : Cait Sith
- **Rôle** : Archère d'Élite / Sniper
- **Zone de Résidence** : Freelia — Tour de Guet
- **Niveau** : 82
- **Prime (Bounty)** : 250000 Yrds

## Statistiques
| Stat | Valeur |
|---|---|
| HP | 20000 |
| MP | 7500 |
| STR | 180 |
| AGI | 400 |
| VIT | 250 |
| INT | 380 |
| DEX | 520 |

## Équipement
- **Arme** : Arc de Shekinah (Lumière)
- **Affinité de base** : 75/100

## Dialogues
**Salutation** : *« Ne bouge pas. Je t'avais dans ma ligne de mire depuis que tu as franchi la porte de la ville. Qu'est-ce que tu veux ? »*
**Si affinité > 70** : *« Tu sais... dans GGO, je tirais pour oublier. Ici, je tire pour protéger. C'est mieux comme ça. »*

## Secret Inavouable
Sinon est une convertie de GGO. Le Système Cardinal a adapté ses compétences de tireuse d'élite en compétences d'archère, mais elle possède un avantage caché : sa perception de la trajectoire des projectiles est si précise qu'elle peut esquiver les flèches adverses avant même qu'elles ne soient tirées (Prediction Skill secrète).

## Lore (Encyclopédie d'Argo)
Asada Shino, la tireuse d'élite légendaire de Gun Gale Online, convertie en archère Cait Sith dans ALO. Son arc Shekinah tire des flèches de lumière pure avec une précision chirurgicale. Elle est la seule joueuse capable de toucher une cible en Vol Libre à 100 mètres de distance.

## Commande IA
- `SYS_NPC_DIALOG_OVERRIDE("NPC_CANON_SINON", New_Dialogue)` : L'IA peut modifier les réponses de ce PNJ.
- `SYS_MODIFY_AFFINITY(Avatar_ID, "NPC_CANON_SINON", Valeur)` : L'IA modifie la réputation du joueur auprès de ce PNJ.
