# Parchemin de Retour à Alne

## Identification Cardinal
- **Item_ID** : `CSM_PAR_001`
- **Catégorie** : Parchemin · **Type** : Retour (ville neutre)
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Téléporte vers Alne (`ZONE_NEU_CAP_001`) après incantation |
| Durée | Canalisation 8 s (interrompue par les dégâts) |
| Cooldown | 60 s |
| Cumulable | NON — inutilisable en Anti-Crystal Zone (boss, donjon final) |

## Acquisition & Chaînage économique
- **Source** : scribes et guildes d'aventuriers (toutes villes)
- **Recette** : 1× Papier-rune + 1× Encre-de-seiche + tracé de sceau *(scribe)*
- **Prix** : 60 Yrds (achat) · 15 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le parchemin de la prudence : où que l'on soit tombé, il ramène à la capitale neutre, sur la place du Débarcadère. Les aventuriers de toutes races en gardent un plié dans la manche, car Alne est le seul sol où personne ne peut vous frapper. Un sceau bleu, huit secondes de patience, et l'on est chez soi — enfin, chez tout le monde.

## Intégration Bot
- Joueur : `!use CSM_PAR_001` — GM : `!sys_give CSM_PAR_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_PAR_001, 1)`
