# Sac Dimensionnel Gnome

## Identification Cardinal
- **Item_ID** : `BAG_011`
- **Catégorie** : Portage · **Type** : Sac de dos
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 32 · **Affinité raciale** : Aucune (variante régionale Gnome)

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Stockage +30 emplacements (items / consommables / matériaux — **jamais d'armes**) + accès rapide |
| Slot | `gear_back` (exclusif avec la sangle) |
| Niveau requis | 32 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : craft maître-tailleur runique de Granzam + 1 quête
- **Recette** : 5× cuir épais + 1× Gemme de Granzam gravée + runes de contenance *(`!sew` maître)*
- **Prix** : 14 000 Yrds (achat) · 3 500 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Les Gnomes runiques prétendent en avoir « replié l'intérieur » — un sac plus vaste dedans que dehors. La vérité est plus prosaïque : la capacité reste de trente, plafonnée par le Cardinal comme tous les autres. Mais ses runes le rendent quasi indestructible et son ouverture est plus rapide que tout. Le rêve prestigieux de l'aventurier fortuné.

## Intégration Bot
- Joueur : `!equiper BAG_011 dos` · `!sew` — GM : `!sys_give BAG_011 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, BAG_011, 1)`
