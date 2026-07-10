# Pierre de Rappel

## Identification Cardinal
- **Item_ID** : `CSM_CRI_009`
- **Catégorie** : Cristal · **Type** : Rappel vers point enregistré
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 10 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Téléporte vers le point de rappel enregistré (via `CSM_CRI_008`) |
| Durée | Canalisation 6 s (interrompue par les dégâts) |
| Cooldown | 45 s |
| Cumulable | NON — **inutilisable en Anti-Crystal Zone** |

## Acquisition & Chaînage économique
- **Source** : maisons de cristaux et scribes de voyage (toutes villes)
- **Recette** : 1× Éclat de saphir brut + 1× Papier-rune + taille au cristal *(cristallerie)*
- **Prix** : 250 Yrds (achat) · 62 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La sœur jumelle du cristal d'enregistrement : là où l'un marque, l'autre rappelle. Une pierre grise strié de bleu qui, brisée, ramène droit au lieu qu'on avait gravé. Les duos d'explorateurs se répartissent les rôles — l'un pose les ancres, l'autre garde les pierres. Ensemble, ils font du monde entier un raccourci.

## Intégration Bot
- Joueur : `!use CSM_CRI_009` — GM : `!sys_give CSM_CRI_009 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_CRI_009, 1)`
