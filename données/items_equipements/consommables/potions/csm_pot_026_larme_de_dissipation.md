# Larme de Dissipation

## Identification Cardinal
- **Item_ID** : `CSM_POT_026`
- **Catégorie** : Potion · **Type** : Dissipation (buffs adverses / debuffs magiques)
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 28 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Dissipe 1 buff magique bénéfique sur une cible ennemie OU 1 debuff magique sur soi |
| Durée | Instantané |
| Cooldown | 20 s |
| Cumulable | NON — n'occupe pas le slot de buff |

## Acquisition & Chaînage économique
- **Source** : boutique d'apothicaire de capitale / craft alchimiste confirmé
- **Recette** : 1× Sel-de-lune + 1× Éclat de saphir brut + 1× Larme d'Yggdrasil (goutte) *(alchimie experte)*
- **Prix** : 550 Yrds (achat) · 137 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Une goutte unique, suspendue dans un flacon minuscule, qui « défait » la magie qu'elle touche. Lancée sur un mob enragé, elle lui arrache son bouclier arcanique ; bue par soi, elle rompt l'enchantement qui nous cloue au sol. C'est l'outil des joueurs qui ont compris que dissiper un buff ennemi vaut parfois mille points de dégâts.

## Intégration Bot
- Joueur : `!use CSM_POT_026` — GM : `!sys_give CSM_POT_026 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_026, 1)`
