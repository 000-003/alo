# Croc de Skreech

## Identification Cardinal
- **Item_ID** : `WPN_DAG_007`
- **Famille** : Dague · **Vitesse** : rapide
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 39 · **Affinité raciale** : Imp (+5% aux bonus si Imp)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 90 |
| Poids | 0,7 kg |
| Durabilité | 780 |
| Bonus | +11 AGI, +4 INT |

## Acquisition & Chaînage économique
- **Source** : Drop de Skreech (`BOSS_IMP_DUN_001`, 8%) ; sertissage par le forgeron de Duskarn (`NPC_DUS_04`).
- **Recette** : 5× Fer d'ombre + 4× Mithril de Brokkheim + 2× Gemme de Granzam.
- **Prix** : 16 000 Yrds (achat) · 4 000 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Taillée dans un croc arraché à Skreech, la dague conserve un fragment de sa capacité à hurler : dégainée d'un geste sec, elle émet un cri strident qui fait fléchir la jauge de Vacarme des adversaires imprudents. Les assassins de Duskarn la réservent aux cibles qui « méritent d'entendre leur propre fin ». Elle vibre faiblement même au fourreau, comme si le boss n'avait jamais vraiment lâché prise.

## Intégration Bot
- Joueur : `!equiper WPN_DAG_007` · `!inspect WPN_DAG_007` — GM : `!sys_give WPN_DAG_007 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_DAG_007, 1)`
