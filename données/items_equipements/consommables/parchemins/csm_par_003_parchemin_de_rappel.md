# Parchemin de Rappel

## Identification Cardinal
- **Item_ID** : `CSM_PAR_003`
- **Catégorie** : Parchemin · **Type** : Retour (dernière ville visitée)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 10 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Téléporte vers la dernière ville enregistrée par le joueur |
| Durée | Canalisation 6 s (interrompue par les dégâts) |
| Cooldown | 45 s |
| Cumulable | NON — inutilisable en Anti-Crystal Zone |

## Acquisition & Chaînage économique
- **Source** : scribes et échoppes de voyage (toutes villes)
- **Recette** : 2× Papier-rune + 1× Encre-de-seiche + 1× Éclat de saphir brut *(scribe)*
- **Prix** : 130 Yrds (achat) · 32 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Plus souple que les parchemins de destination fixe, il ramène là où l'on a « posé son ancre » — la dernière ville marquée d'un rappel. Les marchands itinérants et les explorateurs qui repoussent les frontières ne jurent que par lui. Six secondes de canalisation seulement : le raffinement se paie, mais il fait gagner de précieuses secondes quand on fuit.

## Intégration Bot
- Joueur : `!use CSM_PAR_003` — GM : `!sys_give CSM_PAR_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_PAR_003, 1)`
