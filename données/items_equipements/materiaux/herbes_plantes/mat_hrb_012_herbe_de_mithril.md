# Herbe de Mithril

## Identification Cardinal
- **Item_ID** : `MAT_HRB_012`
- **Famille** : Plante · **Rareté** : Rare
- **Tier** : T3

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Mine Mithril |
| Acheté par | Alchimiste Gemmes `NPC_GRA_35` à 6 Yrds |
| Entre dans | `CSM_POT_003`, `CSM_POT_009` |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
Une herbe métallique aux reflets argentés qui pousse dans les profondeurs de la Mine Mithril de Granit. Ses tiges contiennent des particules de mithril qu'elle absorbe du sol minier. Les alchimistes l'incorporent dans les alliages pour faciliter la fusion des métaux précieux. Elle ne peut être récoltée qu'avec des outils en argent pour ne pas la contaminer. Les nains de la mine la considèrent comme un signe de veine riche.

## Intégration Bot
- Joueur : `!inspect MAT_HRB_012` — GM : `!sys_give MAT_HRB_012 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_HRB_012, Qty)`
