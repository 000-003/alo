# Parchemin d'Identification

## Identification Cardinal
- **Item_ID** : `CSM_PAR_006`
- **Catégorie** : Parchemin · **Type** : Utilitaire (identification)
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Révèle les stats cachées et l'affinité d'un objet non identifié |
| Durée | Instantané |
| Cooldown | 3 s |
| Cumulable | NON |

## Acquisition & Chaînage économique
- **Source** : scribes, apothicaires et maisons d'enchères (toutes villes)
- **Recette** : 1× Papier-rune + 1× Encre-de-seiche *(scribe)*
- **Prix** : 40 Yrds (achat) · 10 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le petit rituel qui transforme un « objet inconnu » terne en trésor identifié — ou en déception. Posé sur l'objet, il fait affleurer les runes cachées comme une écriture invisible sous la chaleur. Les chasseurs de butin en achètent par paquets de dix : rien n'est plus frustrant qu'une épingle épique prise pour de la ferraille et revendue trois Yrds.

## Intégration Bot
- Joueur : `!use CSM_PAR_006` — GM : `!sys_give CSM_PAR_006 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_PAR_006, 1)`
