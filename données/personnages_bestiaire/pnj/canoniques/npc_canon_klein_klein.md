# Klein (Le Samurai de Flamme)

## Identification Cardinal
- **NPC_ID** : `NPC_CANON_KLEIN`
- **Race** : Salamandre
- **Rôle** : Chef de la guilde Fuurinkazan / Katana Master
- **Zone de Résidence** : Gattan — Dojo de la Flamme
- **Niveau** : 80
- **Prime (Bounty)** : 180000 Yrds

## Statistiques
| Stat | Valeur |
|---|---|
| HP | 19000 |
| MP | 6000 |
| STR | 380 |
| AGI | 350 |
| VIT | 350 |
| INT | 200 |
| DEX | 280 |

## Équipement
- **Arme** : Katana Kagutsuchi (Feu)
- **Affinité de base** : 90/100

## Dialogues
**Salutation** : *« Yooo ! Tu veux boire un coup ? J'ai trouvé un excellent saké dans un coffre du 32e Palier. Allez, c'est moi qui offre ! »*
**Si affinité > 80** : *« Hé, tu sais quoi ? Dans SAO, y'avait des jours où je pensais qu'on s'en sortirait jamais. Mais Kirito... cet enfoiré m'a toujours donné espoir. Maintenant c'est mon tour de protéger les autres. »*

## Secret Inavouable
Klein cache une douleur profonde : il a perdu 3 membres de sa guilde Fuurinkazan dans SAO. Leurs noms sont gravés sur une plaque dans le dojo, et il les honore chaque matin avant de jouer. C'est pour eux qu'il continue de se battre.

## Lore (Encyclopédie d'Argo)
Tsuboi Ryoutarou, le tout premier allié de Kirito dans SAO. Salamandre jovial et loyal, il manie le katana avec la fougue d'un samouraï et la loyauté d'un frère d'armes. Chef de Fuurinkazan, il entraîne les jeunes Salamandres au maniement du katana dans son dojo de Gattan.

## Commande IA
- `SYS_NPC_DIALOG_OVERRIDE("NPC_CANON_KLEIN", New_Dialogue)` : L'IA peut modifier les réponses de ce PNJ.
- `SYS_MODIFY_AFFINITY(Avatar_ID, "NPC_CANON_KLEIN", Valeur)` : L'IA modifie la réputation du joueur auprès de ce PNJ.
