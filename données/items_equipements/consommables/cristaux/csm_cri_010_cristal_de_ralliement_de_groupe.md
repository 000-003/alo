# Cristal de Ralliement de Groupe

## Identification Cardinal
- **Item_ID** : `CSM_CRI_010`
- **Catégorie** : Cristal · **Type** : Rappel de groupe
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 28 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Rappelle tous les membres du groupe (PARTY) consentants vers le porteur (`!accept_rally`) |
| Durée | Canalisation 10 s ; fenêtre d'acceptation 20 s |
| Cooldown | 90 s |
| Cumulable | NON — **inutilisable en Anti-Crystal Zone** |

## Acquisition & Chaînage économique
- **Source** : maisons de cristaux de capitale, drops de boss de palier (8%)
- **Recette** : 2× Éclat de saphir pur + 1× Gemme de Granzam + 1× Papier-rune de groupe *(cristallerie experte)*
- **Prix** : 4 500 Yrds (achat) · 1 125 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le cristal des chefs de raid : brisé, il tend un fil invisible à chaque membre du groupe, qui n'a plus qu'à l'accepter pour être rappelé auprès du porteur. Idéal pour regrouper une compagnie dispersée avant un assaut, ou récupérer des traînards perdus dans un labyrinthe. Chacun reste libre de refuser — le Cardinal ne déplace jamais un joueur contre sa volonté.

## Intégration Bot
- Joueur : `!use CSM_CRI_010` puis groupe `!accept_rally` — GM : `!sys_give CSM_CRI_010 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_CRI_010, 1)`
