# Heaume de Granit Brut

## Identification Cardinal
- **Item_ID** : `ARM_TET_049`
- **Slot** : Tête — Heaume · **Classe** : Plaque
- **Tier** : T2 · **Rareté** : Rare
- **Niveau requis** : 17 · **Affinité raciale** : Gnome (+5% aux bonus si Gnome)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 36 |
| RES magique | 6 |
| Poids | 3,6 kg |
| Durabilité | 460 |
| Pénalité de vol | -4% |
| Bonus | +4 VIT ; immunité à l'assommement par choc frontal |

## Acquisition & Chaînage économique
- **Source** : Craft — Armurier Bofrik (`NPC_GRA_03`), Bastion de l'Ouest de Granzam.
- **Recette** : 4× Bloc de granit (récolte, `ZONE_GNO_HUNT_001`) + 2× Maillon de fer + 1× Cuir brut.
- **Prix** : 1 500 Yrds (achat) · 375 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Bofrik ne polit jamais ses heaumes T2 : « le granit brut encaisse, le granit poli se fend ». Le porteur peut littéralement donner des coups de tête dans un mur de mine pour tester les filons — technique de prospection officiellement interdite et quotidiennement pratiquée.

## Intégration Bot
- Joueur : `!equiper ARM_TET_049 tete` · `!inspect ARM_TET_049` — GM : `!sys_give ARM_TET_049 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_049, 1)`
