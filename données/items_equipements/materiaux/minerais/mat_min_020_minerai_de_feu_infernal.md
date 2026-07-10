# Minerai de Feu Infernal

## Identification Cardinal
- **Item_ID** : `MAT_MIN_020`
- **Famille** : Minerai · **Rareté** : Rare
- **Tier** : T3

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Cratère Voulg, `ZONE_SAL_HUNT_001` |
| Acheté par | Forgeron `NPC_VOU_70` à 450 Yrds |
| Entre dans | `WPN_KAT_004`, `WPN_MAS_004` (Salamander) |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
Le Cratère de Voulg est un volcan actif dont les entrailles crachent un mineral incandescent que seuls les Salamanders les plus endurcis peuvent extraire. Le Minerai de Feu Infernal est chaud au toucher même après des heures hors du volcan — une chaleur interne qui ne le quitte jamais. Les lames forgées avec ce matériau infligent des brûlures persistantes et luisent d'un éclat rouge dans l'obscurité. Le Forgeron de Voulg ne l'achète qu'aux guerriers qui ont prouvé leur valeur.

## Intégration Bot
- Joueur : `!inspect MAT_MIN_020` — GM : `!sys_give MAT_MIN_020 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_MIN_020, Qty)`
