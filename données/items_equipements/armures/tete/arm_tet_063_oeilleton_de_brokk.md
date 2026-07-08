# Œilleton de Brokk

## Identification Cardinal
- **Item_ID** : `ARM_TET_063`
- **Slot** : Tête — Monocle serti · **Classe** : Plaque (monture mithril)
- **Tier** : T5 · **Rareté** : Légendaire
- **Niveau requis** : 45 · **Affinité raciale** : Leprechaun (+5% aux bonus si Leprechaun)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 140 |
| RES magique | 85 |
| Poids | 0,5 kg |
| Durabilité | 1 150 |
| Pénalité de vol | 0% |
| Bonus | +8 DEX, +8 VIT ; +25% qualité de craft ; « Œil du Fondateur » (`!activer oeil`, 1×/jour) : le prochain craft est de qualité maximale garantie |

## Acquisition & Chaînage économique
- **Source** : Craft unique — requiert le titre « Héritier de la Forge » (Atelier Englouti terminé + rang Maître-Artisan).
- **Recette** : 1× Cristal-processeur de MK-0 (drop garanti premier kill `BOSS_LEP_DUN_001`) + 1× Lingot de mithril pur + 3× Fragment de fer météorique + le Cercle du Maître-Artisan (consommé — décision irréversible).
- **Prix** : Invendable (lié à l'âme).

## Lore (Encyclopédie d'Argo)
Brokk Ier, fondateur mythique, aurait perdu un œil dans la première coulée de mithril — et exigé qu'on le remplace par une loupe « pour voir enfin ce qu'il forgeait ». L'Œilleton montre la structure du monde : mailles de polygones, coutures de code. Sacrifier son Cercle pour le forger, c'est admettre qu'on ne remplacera jamais personne — on continue quelqu'un.

## Intégration Bot
- Joueur : `!equiper ARM_TET_063 tete` · `!inspect ARM_TET_063` — GM : `!sys_give ARM_TET_063 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_063, 1)`
