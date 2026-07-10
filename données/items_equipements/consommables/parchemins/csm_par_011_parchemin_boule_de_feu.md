# Parchemin de Boule de Feu

## Identification Cardinal
- **Item_ID** : `CSM_PAR_011`
- **Catégorie** : Parchemin · **Type** : Skill consommable (feu)
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 5 · **Affinité raciale** : Salamander (+5% dégâts si Salamander)

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Lance une Boule de Feu (dégâts feu à cible unique, sans coût de MP) |
| Durée | Instantané |
| Cooldown | 8 s |
| Cumulable | NON — consommé à l'usage |

## Acquisition & Chaînage économique
- **Source** : scribes et maîtres de sort mineurs (toutes villes, priorité Gattan)
- **Recette** : 1× Papier-rune + 1× Résine d'obsidienne + 1× Encre-de-seiche *(scribe arcanique)*
- **Prix** : 70 Yrds (achat) · 17 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Un sort de feu « en conserve », dessiné à l'encre rouge par les scribes de Gattan pour ceux qui ne savent pas lancer eux-mêmes. Le guerrier au corps à corps s'offre ainsi une attaque à distance improvisée ; le vrai mage y voit une hérésie de fainéant. Un seul usage, une seule flamme — mais parfois, une flamme suffit.

## Intégration Bot
- Joueur : `!use CSM_PAR_011` — GM : `!sys_give CSM_PAR_011 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_PAR_011, 1)`
