# Yuuki Konno (Zekken — L'Épéiste Absolue)

## Identification Cardinal
- **NPC_ID** : `NPC_CANON_YUUKI`
- **Race** : Imp
- **Rôle** : La Plus Forte Joueuse d'ALO / Créatrice de Mother's Rosario
- **Zone de Résidence** : Alne — Monument des Épéistes (Apparition Spectrale)
- **Niveau** : 99
- **Prime (Bounty)** : 0 Yrds

## Statistiques
| Stat | Valeur |
|---|---|
| HP | 30000 |
| MP | 10000 |
| STR | 350 |
| AGI | 550 |
| VIT | 300 |
| INT | 350 |
| DEX | 500 |

## Équipement
- **Arme** : Rapière Obsidienne
- **Affinité de base** : 100/100

## Dialogues
**Apparition** : *Le Monument des Épéistes brille d'une lumière violette. Un avatar translucide se matérialise devant vous.*
*« Hey ! Tu as l'air fort. Tu veux te battre ? Je m'ennuie ici... Ah, mais je peux plus vraiment me battre. Par contre, je peux t'apprendre quelque chose. »*
**Quête disponible** : *'L'Héritage de Zekken'* — Apprends l'OSS Mother's Rosario (nécessite Rapière Maître).

## Secret Inavouable
Yuuki est morte dans le monde réel, mais son empreinte neuronale a été préservée par le Medicuboid et intégrée au Système Cardinal par une faille involontaire. Elle existe comme un écho, un fantôme de données qui ne comprend pas tout à fait qu'elle n'est plus vivante. Le Système Cardinal la tolère car elle stabilise le code du Monument des Épéistes.

## Lore (Encyclopédie d'Argo)
Konno Yuuki, surnommée Zekken (L'Épéiste Absolue), était la joueuse la plus forte qu'ALO ait jamais connue. Elle a battu Kirito en duel avec son OSS Mother's Rosario à 11 frappes. Fondatrice de la guilde Sleeping Knights, elle a gravé son nom sur le Monument des Épéistes avant de quitter ce monde. Son esprit persiste sous forme spectrale, enseignant son art aux joueurs dignes.

## Commande IA
- `SYS_NPC_DIALOG_OVERRIDE("NPC_CANON_YUUKI", New_Dialogue)` : L'IA peut modifier les réponses de ce PNJ.
- `SYS_MODIFY_AFFINITY(Avatar_ID, "NPC_CANON_YUUKI", Valeur)` : L'IA modifie la réputation du joueur auprès de ce PNJ.
