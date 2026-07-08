# Kirito (Le Spadassin Noir)

## Identification Cardinal
- **NPC_ID** : `NPC_CANON_KIRITO`
- **Race** : Spriggan
- **Rôle** : Héros Légendaire / Dual Wielder
- **Zone de Résidence** : Alne — Taverne du Croissant de Lune
- **Niveau** : 96
- **Prime (Bounty)** : 500000 Yrds

## Statistiques
| Stat | Valeur |
|---|---|
| HP | 28500 |
| MP | 8000 |
| STR | 450 |
| AGI | 520 |
| VIT | 380 |
| INT | 280 |
| DEX | 410 |

## Équipement
- **Arme** : Elucidator + Dark Repulser (Dual Wield)
- **Affinité de base** : 90/100

## Dialogues
**Salutation** : *« Yo. Si tu cherches un combat, je suis pas d'humeur. Mais si tu as besoin d'aide pour un Boss de Palier… on peut s'arranger. »*
**Si affinité > 80** : *« Tu me rappelles quelqu'un que j'ai connu dans un autre monde. Fais attention à toi là-dedans. »*
**Si affinité < 20** : *« ... Je t'ai déjà dit de ne pas m'approcher. »*

## Secret Inavouable
Kirito porte en lui la mémoire de 10 000 joueurs piégés dans SAO. Il ne dort jamais vraiment — son avatar reste connecté en mode veille, surveillant les anomalies du Système Cardinal. Il sait que The Seed cache un secret que même Kayaba n'avait pas prévu.

## Lore (Encyclopédie d'Argo)
Kirigaya Kazuto, le survivant du Death Game de SAO, le vainqueur d'Oberon dans ALO, le champion de GGO, et l'unique porteur du Dual Wielding. Son avatar Spriggan aux cheveux noirs est devenu une légende vivante d'ALfheim. Il erre entre les mondes, chassant les bugs du Système Cardinal comme un fantôme bienveillant. Sa présence seule suffit à rassurer les guildes les plus téméraires.

## Commande IA
- `SYS_NPC_DIALOG_OVERRIDE("NPC_CANON_KIRITO", New_Dialogue)` : L'IA peut modifier les réponses de ce PNJ.
- `SYS_MODIFY_AFFINITY(Avatar_ID, "NPC_CANON_KIRITO", Valeur)` : L'IA modifie la réputation du joueur auprès de ce PNJ.
