# Mousse de Caillasse

## Identification Cardinal
- **Item_ID** : `MAT_HRB_004`
- **Famille** : Plante · **Rareté** : Commun
- **Tier** : T1

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Éboulis GRA |
| Acheté par | Marchand Mousses `NPC_GRA_38` à 2 Yrds |
| Entre dans | `CSM_POT_019`, `CSM_POT_040` |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
Une mousse épaisse qui tapisse les éboulis de la région de Granit. Elle forme un coussin naturel d'un vert profond presque noir. Les guérisseurs l'apprécient pour ses propriétés hémostatiques. Appliquée en cataplasme, elle arrête les saignements et prévient l'infection. Les mineurs s'en servent aussi pour calmer leurs mains abîmées.

## Intégration Bot
- Joueur : `!inspect MAT_HRB_004` — GM : `!sys_give MAT_HRB_004 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_HRB_004, Qty)`
