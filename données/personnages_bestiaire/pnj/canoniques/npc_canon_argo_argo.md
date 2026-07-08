# Argo (Le Rat — Info Broker)

## Identification Cardinal
- **NPC_ID** : `NPC_CANON_ARGO`
- **Race** : Indéterminée (change d'avatar)
- **Rôle** : Informatrice / Marchande d'Information
- **Zone de Résidence** : Alne — Ruelles du Marché Noir
- **Niveau** : 70
- **Prime (Bounty)** : 100000 Yrds

## Statistiques
| Stat | Valeur |
|---|---|
| HP | 10000 |
| MP | 8000 |
| STR | 150 |
| AGI | 450 |
| VIT | 200 |
| INT | 400 |
| DEX | 380 |

## Équipement
- **Arme** : Griffes Rétractables (Arme cachée)
- **Affinité de base** : 60/100

## Dialogues
**Salutation** : *« Psst. Par ici. Tu cherches des infos ? Ça va te coûter. Le prix d'une info dépend de sa valeur — et crois-moi, mes infos valent de l'or. 500 Yrds pour un tuyau basique, 5000 pour un secret de Boss. »*
**Service** : Vend des pages d'Encyclopédie débloquées à prix fort.

## Secret Inavouable
Argo connaît le vrai nom de chaque joueur du serveur et leurs adresses IP. Elle a compilé cette information dans un fichier chiffré caché dans les données du Système Cardinal. Si quelqu'un la menace, elle menace de tout publier. C'est sa police d'assurance.

## Lore (Encyclopédie d'Argo)
Argo, connue sous le surnom de 'Le Rat', est l'informatrice la plus célèbre de SAO et d'ALO. Ses moustaches de chat tatouées sur les joues sont sa marque de fabrique. Elle vend des informations sur les Boss, les quêtes cachées et les faiblesses des monstres. Son Guide d'Argo est la source principale de l'Encyclopédie du serveur.

## Commande IA
- `SYS_NPC_DIALOG_OVERRIDE("NPC_CANON_ARGO", New_Dialogue)` : L'IA peut modifier les réponses de ce PNJ.
- `SYS_MODIFY_AFFINITY(Avatar_ID, "NPC_CANON_ARGO", Valeur)` : L'IA modifie la réputation du joueur auprès de ce PNJ.
