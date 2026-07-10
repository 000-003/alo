# Lame des Ombres Longues

## Identification Cardinal
- **Item_ID** : `WPN_EP1_011`
- **Famille** : Épée à une main · **Vitesse** : moyenne
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 40 · **Affinité raciale** : Spriggan (+5% aux bonus si Spriggan)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 108 |
| Poids | 2,6 kg |
| Durabilité | 850 |
| Bonus | +7 AGI, +5 INT |

## Acquisition & Chaînage économique
- **Source** : Craft — forgeron de Penwether (`NPC_PEN_04`) ; composant tombé par le boss de zone (`MOB_SPR_026`, 8%).
- **Recette** : 5× Fer noir + 4× Mithril de Brokkheim + 2× Gemme de Granzam.
- **Prix** : 15 000 Yrds (achat) · 3 750 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Au crépuscule, l'ombre qu'elle projette est trois fois trop longue — un défaut de rendu, jurent les sceptiques ; une promesse, répondent les Spriggans. La lame semble absorber la pénombre de la Nécropole où on la trempe, et frappe une fraction de seconde avant que l'œil ne la voie bouger. Les duellistes de Penwether l'appellent « celle qui arrive avant ».

## Intégration Bot
- Joueur : `!equiper WPN_EP1_011` · `!inspect WPN_EP1_011` — GM : `!sys_give WPN_EP1_011 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_EP1_011, 1)`
