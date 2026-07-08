# Heaume-Tour de Granzam

## Identification Cardinal
- **Item_ID** : `ARM_TET_052`
- **Slot** : Tête — Grand heaume · **Classe** : Plaque
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 37 · **Affinité raciale** : Gnome (+5% aux bonus si Gnome)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 120 |
| RES magique | 30 |
| Poids | 4,4 kg |
| Durabilité | 950 |
| Pénalité de vol | -6% |
| Bonus | +8 VIT ; les alliés derrière le porteur (cône de 90°) reçoivent -10% dégâts à distance |

## Acquisition & Chaînage économique
- **Source** : Craft d'élite — Armurier Bofrik (`NPC_GRA_03`), sur commande, délai de trois jours réels.
- **Recette** : 2× Cœur de golem majeur (drop `MOB_GNO_026`, boss de zone) + 5× Plaque d'acier + 3× Bloc de granit + 1× Gemme rubis.
- **Prix** : 19 500 Yrds (achat) · 4 875 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le plus haut cimier d'ALfheim : une tour crénelée miniature, réplique du donjon de Granzam. Ridicule au bal, décisif au front — les archers ennemis le voient de loin et comprennent que la ligne ne pliera pas là. Bofrik le vend avec un certificat : « garanti contre tout, sauf la fuite ».

## Intégration Bot
- Joueur : `!equiper ARM_TET_052 tete` · `!inspect ARM_TET_052` — GM : `!sys_give ARM_TET_052 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_052, 1)`
