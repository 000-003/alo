# Herbe des Marais

## Identification Cardinal
- **Item_ID** : `MAT_HRB_009`
- **Famille** : Plante · **Rareté** : Rare
- **Tier** : T2

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Archipel |
| Acheté par | Marchand Herbes `NPC_UND_35` à 3 Yrds |
| Entre dans | `CSM_POT_005`, `CSM_POT_019` |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
Une plante semi-aquatique des marécages de l'Archipel Undersong. Ses racines tubéreuses emmagasinent les toxines du sol marécageux pour les neutraliser. Les guérisseurs locaux en tirent un remède universel contre les morsures de serpent. Elle fleurit en grappes violettes à la saison des pluies. Les pêcheurs la suspendent à leurs barques pour éloigner les insectes.

## Intégration Bot
- Joueur : `!inspect MAT_HRB_009` — GM : `!sys_give MAT_HRB_009 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_HRB_009, Qty)`
