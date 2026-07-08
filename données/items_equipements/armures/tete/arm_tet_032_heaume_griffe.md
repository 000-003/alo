# Heaume-Griffe

## Identification Cardinal
- **Item_ID** : `ARM_TET_032`
- **Slot** : Tête — Heaume · **Classe** : Maille
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 24 · **Affinité raciale** : Cait Sith (+5% aux bonus si Cait Sith)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 52 |
| RES magique | 16 |
| Poids | 1,8 kg |
| Durabilité | 560 |
| Pénalité de vol | -1% |
| Bonus | +8% chance de coup critique ; +4 AGI ; le premier coup porté depuis la furtivité est toujours critique |

## Acquisition & Chaînage économique
- **Source** : Craft — Gimli Griffe-Fer (`NPC_FRE_04`), Marché aux Crocs de Freelia.
- **Recette** : 3× Maillon d'acier + 4× Griffe de prédateur alpha (drop `MOB_CAI_025`, mini-boss) + 2× Cuir tacheté.
- **Prix** : 4 500 Yrds (achat) · 1 125 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Gimli rive de vraies griffes d'alpha sur le cimier, orientées vers l'avant « pour rappeler à la tête ce qu'elle doit faire ». L'équilibre du heaume est calculé pour le bond : les duellistes cait siths le reconnaissent au silence parfait de la charnière. Un Heaume-Griffe qui grince est un faux.

## Intégration Bot
- Joueur : `!equiper ARM_TET_032 tete` · `!inspect ARM_TET_032` — GM : `!sys_give ARM_TET_032 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_032, 1)`
