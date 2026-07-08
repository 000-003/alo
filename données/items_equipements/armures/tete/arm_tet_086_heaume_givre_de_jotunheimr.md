# Heaume Givré de Jötunheimr

## Identification Cardinal
- **Item_ID** : `ARM_TET_086`
- **Slot** : Tête — Heaume · **Classe** : Plaque
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 38 · **Affinité raciale** : Aucune (objet neutre)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 108 |
| RES magique | 45 (dont +35 vs Glace, -10 vs Feu) |
| Poids | 4,2 kg |
| Durabilité | 900 |
| Pénalité de vol | -4% |
| Bonus | +6 VIT ; immunité au gel de surface ; la jauge DOT de froid (D12) progresse 40% plus lentement |

## Acquisition & Chaînage économique
- **Source** : Craft — seuls les forgerons d'Alne acceptent de travailler la glace éternelle (les fours raciaux la font fondre... ou pire).
- **Recette** : 3× Glace éternelle (récolte, `ZONE_JOT_*`, sous le monde) + 4× Plaque d'acier + 1× Fourrure de bête géante.
- **Prix** : 18 200 Yrds (achat) · 4 550 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La glace de Jötunheimr ne fond pas : elle se souvient d'avoir été un royaume. Le heaume garde en permanence la température du monde d'en-bas, et son porteur voit son propre souffle même en plein été d'ALfheim. Les géants, dit-on, reconnaissent leur glace — et frappent une fois de moins celui qui la porte.

## Intégration Bot
- Joueur : `!equiper ARM_TET_086 tete` · `!inspect ARM_TET_086` — GM : `!sys_give ARM_TET_086 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_086, 1)`
