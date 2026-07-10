# Adamantium

## Identification Cardinal
- **Item_ID** : `MAT_MIN_018`
- **Famille** : Minerai · **Rareté** : Épique
- **Tier** : T4

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Atelier Englouti, `ZONE_LEP_DUN_001` |
| Acheté par | `NPC_BRO_37` à 3 000 Yrds |
| Entre dans | `WPN_BOU_006`, `WPN_HAC_008` |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
L'Adamantium de l'Atelier Englouti est un métal qui ne devrait pas exister — trop dense, trop résistant, trop lourd pour être naturel. Les Leprechauns racontent qu'il s'agit d'un alliage pré-Cardinal, un secret de forge perdu que les ruines de l'Atelier préservent encore. Il brille d'un éclat gris-vert que rien ne ternit, et les armures forgées avec sont quasiment indestructibles. Forger l'adamantium demande un niveau de craft T4 et des semaines d'essais. Argo prévient : ne tentez pas sans filet.

## Intégration Bot
- Joueur : `!inspect MAT_MIN_018` — GM : `!sys_give MAT_MIN_018 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_MIN_018, Qty)`
