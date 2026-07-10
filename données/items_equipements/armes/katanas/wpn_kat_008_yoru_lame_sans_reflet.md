# Yoru, Lame Sans Reflet

## Identification Cardinal
- **Item_ID** : `WPN_KAT_008`
- **Famille** : Katana · **Vitesse** : rapide
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 38 · **Affinité raciale** : Spriggan (+5% aux bonus si Spriggan)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 90 |
| Poids | 2,2 kg |
| Durabilité | 810 |
| Bonus | +9 AGI, +5 INT |

## Acquisition & Chaînage économique
- **Source** : Craft — forgeron de Penwether (`NPC_PEN_04`) ; tombé par le boss de zone (`MOB_SPR_026`, 8%).
- **Recette** : 5× Fer noir + 4× Mithril de Brokkheim + 2× Gemme de Granzam.
- **Prix** : 16 000 Yrds (achat) · 4 000 Yrds (revente)

## Lore (Encyclopédie d'Argo)
On dit que placer Yoru face à un miroir ne renvoie rien : le rendu du Cardinal a « oublié » d'y coder un reflet, et les Spriggans ont fait de ce bug une légende. Dans les salles illusoires de la Nécropole, elle tranche indifféremment le vrai et le faux, révélant les leurres à ceux qui savent lire les coupes. Les duellistes de Penwether la considèrent comme la preuve que même le Système a ses angles morts.

## Intégration Bot
- Joueur : `!equiper WPN_KAT_008` · `!inspect WPN_KAT_008` — GM : `!sys_give WPN_KAT_008 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_KAT_008, 1)`
