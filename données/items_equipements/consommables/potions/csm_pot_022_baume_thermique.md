# Baume Thermique

## Identification Cardinal
- **Item_ID** : `CSM_POT_022`
- **Catégorie** : Potion · **Type** : Dissipation (gel / froid)
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 4 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Purge le statut Gel/Ralentissement de froid |
| Durée | Instantané |
| Cooldown | 8 s |
| Cumulable | NON — n'occupe pas le slot de buff |

## Acquisition & Chaînage économique
- **Source** : boutique d'apothicaire (toutes villes, priorité axe Jötunheimr)
- **Recette** : 1× Piment-de-braise + 1× graisse animale *(alchimie mineure)*
- **Prix** : 45 Yrds (achat) · 11 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Rouge orangé, il réchauffe de l'intérieur comme une gorgée d'alcool fort, dissolvant la glace qui fige les articulations. On l'emporte vers les hauteurs gelées de Jötunheimr, où le froid n'est pas un décor mais un ennemi. Attention : à haute dose il donne des sueurs — n'en abusez pas juste pour vous réchauffer les mains à la taverne.

## Intégration Bot
- Joueur : `!use CSM_POT_022` — GM : `!sys_give CSM_POT_022 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_022, 1)`
