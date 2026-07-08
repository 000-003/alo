# Leafa (La Guerrière du Vent)

## Identification Cardinal
- **NPC_ID** : `NPC_CANON_LEAFA`
- **Race** : Sylphe
- **Rôle** : Éclaireur d'Élite / Kendo Expert
- **Zone de Résidence** : Swilvane — Quartier des Guerriers
- **Niveau** : 78
- **Prime (Bounty)** : 200000 Yrds

## Statistiques
| Stat | Valeur |
|---|---|
| HP | 18000 |
| MP | 9500 |
| STR | 320 |
| AGI | 440 |
| VIT | 280 |
| INT | 350 |
| DEX | 300 |

## Équipement
- **Arme** : Épée Longue Sylphe +25 (Vent)
- **Affinité de base** : 80/100

## Dialogues
**Salutation** : *« Hey ! Tu voles bien pour un débutant. Tu veux que je t'apprenne le Vol Libre ? C'est 500 Yrds la leçon, mais entre nous, la première est gratuite. »*
**Quête disponible** : *'Leçons de Leafa'* — Débloque le Vol Libre (Voluntary Flight).

## Secret Inavouable
Leafa sait que son frère adoptif Kirito est le héros de SAO, mais elle n'en parle jamais en jeu. Elle a juré de devenir assez forte pour combattre à ses côtés sans être un fardeau. Son kendo du monde réel se traduit par une maîtrise de l'épée que peu de joueurs d'ALO peuvent égaler.

## Lore (Encyclopédie d'Argo)
Kirigaya Suguha, la championne nationale de kendo du Japon, connue dans ALO sous le nom de Leafa. C'est une Sylphe au talent de vol exceptionnel qui maîtrise le Vol Libre avec une grâce que même les vétérans Sylphes admirent. Elle est la PNJ instructrice de vol la plus demandée du serveur.

## Commande IA
- `SYS_NPC_DIALOG_OVERRIDE("NPC_CANON_LEAFA", New_Dialogue)` : L'IA peut modifier les réponses de ce PNJ.
- `SYS_MODIFY_AFFINITY(Avatar_ID, "NPC_CANON_LEAFA", Valeur)` : L'IA modifie la réputation du joueur auprès de ce PNJ.
