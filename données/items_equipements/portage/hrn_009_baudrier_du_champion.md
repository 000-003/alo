# Baudrier du Champion

## Identification Cardinal
- **Item_ID** : `HRN_009`
- **Catégorie** : Portage · **Type** : Sangle d'armes (dos)
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 30 · **Affinité raciale** : Aucune

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Porte **4 armes au dos** (dégainage dorsal sans commande) — **aucun stockage d'items** |
| Slot | `gear_back` (alternative au sac : sac **XOR** sangle) |
| Niveau requis | 30 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : quête d'arène de haut niveau (Voulg / Alne) / craft maître-tailleur
- **Recette** : 4× cuir épais + 1× fil de mithril + 3× boucles gravées *(`!sew` maître)*
- **Prix** : 8 000 Yrds (achat) · 2 000 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La récompense des vainqueurs d'arène : un baudrier de champion, gravé au nom de son propriétaire, qui porte quatre armes avec une élégance que les harnais utilitaires n'atteindront jamais. Le porter, c'est proclamer sans un mot combien de duels on a gagnés. Le sac, on le laisse aux prudents ; le champion, lui, ne compte que ses lames.

## Intégration Bot
- Joueur : `!equiper HRN_009 dos` · `!sew` — GM : `!sys_give HRN_009 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, HRN_009, 1)`
