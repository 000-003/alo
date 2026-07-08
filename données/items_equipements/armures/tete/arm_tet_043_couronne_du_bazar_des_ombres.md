# Couronne du Bazar des Ombres

## Identification Cardinal
- **Item_ID** : `ARM_TET_043`
- **Slot** : Tête — Couronne · **Classe** : Tissu
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 35 · **Affinité raciale** : Imp (+5% aux bonus si Imp)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 86 |
| RES magique | 52 |
| Poids | 0,5 kg |
| Durabilité | 790 |
| Pénalité de vol | 0% |
| Bonus | -8% sur tous les prix marchands PNJ ; +10% Yrds sur les reventes ; détecte les objets contrefaits à l'inspection |

## Acquisition & Chaînage économique
- **Source** : Vente aux enchères annuelle du Bazar des Ombres — un seul exemplaire par an, mise à prix folle.
- **Recette** : Non craftable ; frappée par la guilde marchande de Duskarn.
- **Prix** : Dernière adjudication connue : 42 000 Yrds · revente libre.

## Lore (Encyclopédie d'Argo)
Le Bazar des Ombres a une devise : « tout s'achète, surtout la confiance ». Cette couronne en est la preuve annuelle — les marchands PNJ la reconnaissent et s'inclinent sur leurs marges. Vesper le Discret (`NPC_DUS_01`) jure ne l'avoir jamais possédée. Il ment : le Cardinal a des registres.

## Intégration Bot
- Joueur : `!equiper ARM_TET_043 tete` · `!inspect ARM_TET_043` — GM : `!sys_give ARM_TET_043 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_043, 1)`
