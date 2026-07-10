# Scorie de Mithril

## Identification Cardinal
- **Item_ID** : `MAT_MIN_023`
- **Famille** : Minerai · **Rareté** : Rare
- **Tier** : T3

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Champs Scories, `ZONE_LEP_HUNT_002` |
| Acheté par | Trafiquant `NPC_BRO_93` à 600 Yrds |
| Entre dans | `WPN_HAC_006`, `WPN_MAS_003` (Leprechaun) |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
Les Scories de Mithril sont les résidus de fusion que les forgerons leprechauns jettent depuis des décennies — jusqu'au jour où quelqu'un a remarqué que ces « déchets » contenaient encore assez de mithril pour reforger des lames de qualité. Le Trafiquant de Brokkheim les récupère en sous-main et les revend aux artisans moins regardants. Brûlant, lourd, la scorie conserve une trace de l'éclat argenté du mithril pur. Reforger une arme T3 avec ce matériau lui donne une seconde chance.

## Intégration Bot
- Joueur : `!inspect MAT_MIN_023` — GM : `!sys_give MAT_MIN_023 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_MIN_023, Qty)`
