# Minerai d'Étain Fin

## Identification Cardinal
- **Item_ID** : `MAT_MIN_014`
- **Famille** : Minerai · **Rareté** : Rare
- **Tier** : T3

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Champs Scories, `ZONE_LEP_HUNT_002` |
| Acheté par | `NPC_BRO_15` à 350 Yrds |
| Entre dans | `WPN_LAN_005` (étain fin) |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
Les Champs de Scories sont un désert de résidus de fonte où rien ne pousse — sauf l'étain fin. Les Leprechauns ont découvert que les scories rejetées par les forges anciennes contenaient un étain d'une pureté inattendue, comme si les générations de métallurgistes avaient distillé le minerai par erreur. L'Étain Fin est plus dense, plus sonore, et donne aux alliages T3 une résistance aux chocs qui fait défaut aux métaux standards. Les armuriers de Brokkheim en sont les premiers acquéreurs.

## Intégration Bot
- Joueur : `!inspect MAT_MIN_014` — GM : `!sys_give MAT_MIN_014 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_MIN_014, Qty)`
