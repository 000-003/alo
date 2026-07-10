# Parchemin de Bourrasque

## Identification Cardinal
- **Item_ID** : `CSM_PAR_015`
- **Catégorie** : Parchemin · **Type** : Skill consommable (vent)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 14 · **Affinité raciale** : Sylph (+5% effet si Sylph)

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Déclenche une Bourrasque (dégâts vent en cône + repousse les ennemis proches, sans coût de MP) |
| Durée | Instantané |
| Cooldown | 12 s |
| Cumulable | NON — consommé à l'usage |

## Acquisition & Chaînage économique
- **Source** : scribes de Swilvane et échoppes des routes aériennes
- **Recette** : 2× Papier-rune + 1× Feuille-de-zéphyr + 1× Encre-de-seiche *(scribe arcanique)*
- **Prix** : 150 Yrds (achat) · 37 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Une bouffée de vent tranchant qui balaie les assaillants trop pressants — parfait pour créer une brèche et respirer. Les Sylph, maîtres de l'air, en tirent un souffle plus puissant que quiconque. On l'emploie autant pour attaquer que pour fuir : repousser trois mobs d'un coup, c'est parfois gagner les deux secondes qui séparent la vie du remains light.

## Intégration Bot
- Joueur : `!use CSM_PAR_015` — GM : `!sys_give CSM_PAR_015 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_PAR_015, 1)`
