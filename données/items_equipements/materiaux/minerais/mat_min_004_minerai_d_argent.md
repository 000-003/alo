# Minerai d'Argent

## Identification Cardinal
- **Item_ID** : `MAT_MIN_004`
- **Famille** : Minerai · **Rareté** : Peu commun
- **Tier** : T2

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Ruines Noires, `ZONE_SPR_HUNT_001` |
| Acheté par | Marchand Métaux `NPC_PEN_37` à 80 Yrds |
| Entre dans | `WPN_RAP_001`, `WPN_BAG_001` (argent sonore) |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
L'argent des Ruines Noires est né des éclats de lune prisonniers dans la pierre — du moins, c'est ce que racontent les Spriggans pour en justifier le prix. La vérité est plus prosaïque : les filons sont profonds, gardés par les Spectres de Pierre, et leur extraction coûte des doigts aux mineurs imprudents. Une fois fondu, ce métal blanc capte la lumière comme s'il la retenait prisonnière. Les bijoutiers de Penwether en raffolent pour les sertis de gemmes de mana. Argo recommande d'en stocker avant les events de faction : le prix flambe à chaque conflit.

## Intégration Bot
- Joueur : `!inspect MAT_MIN_004` — GM : `!sys_give MAT_MIN_004 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_MIN_004, Qty)`
