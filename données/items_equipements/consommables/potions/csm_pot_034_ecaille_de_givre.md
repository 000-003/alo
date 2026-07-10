# Écaille de Givre

## Identification Cardinal
- **Item_ID** : `CSM_POT_034`
- **Catégorie** : Potion · **Type** : Buff (résistance élémentaire — glace)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 16 · **Affinité raciale** : Undine (+5% aux bonus si Undine)

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | +20% résistance à la glace/au froid |
| Durée | 30 min |
| Cooldown | 5 s |
| Cumulable | NON — 1 buff potion + 1 buff nourriture max |

## Acquisition & Chaînage économique
- **Source** : boutique de l'Archipel d'Écume / craft alchimiste
- **Recette** : 1× Écaille-de-poisson-de-glace + 1× Piment-de-braise + 1× fiole de verre *(alchimie)*
- **Prix** : 150 Yrds (achat) · 37 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Faite d'écailles broyées de poissons des eaux froides, cette potion tapisse le corps d'une chaleur sourde qui repousse le gel. On l'emporte vers l'axe de Jötunheimr et dans les profondeurs les plus froides du Gouffre de Léviathan. Curieusement, ce sont les Undine — peuple de l'eau — qui la maîtrisent le mieux : ils connaissent le froid mieux que quiconque.

## Intégration Bot
- Joueur : `!use CSM_POT_034` — GM : `!sys_give CSM_POT_034 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_034, 1)`
