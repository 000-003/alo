# Casque du Garde de Caravane

## Identification Cardinal
- **Item_ID** : `ARM_TET_083`
- **Slot** : Tête — Casque · **Classe** : Maille
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 14 · **Affinité raciale** : Aucune (objet neutre)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 31 |
| RES magique | 10 |
| Poids | 1,8 kg |
| Durabilité | 410 |
| Pénalité de vol | -1% |
| Bonus | +3 VIT ; +10% dégâts contre les mobs aériens (`MOB_AIR_001-004`) des routes |

## Acquisition & Chaînage économique
- **Source** : Guildes d'escorte d'Alne — vendu aux joueurs enregistrés comme gardes de caravane.
- **Recette** : 4× Maillon de fer + 2× Cuir brut + 1× Plaque de col renforcée.
- **Prix** : 1 200 Yrds (achat) · 300 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le gagne-pain le plus honnête d'ALfheim : escorter les marchandises sur les neuf routes aériennes. Le casque protège surtout la nuque — les prédateurs volants frappent d'en haut, toujours. Un garde qui achève son centième convoi grave une aile sur la tempe droite ; on ne paie jamais sa bière à un « trois-ailes ».

## Intégration Bot
- Joueur : `!equiper ARM_TET_083 tete` · `!inspect ARM_TET_083` — GM : `!sys_give ARM_TET_083 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_083, 1)`
