# Flamberge de Voulg

## Identification Cardinal
- **Item_ID** : `WPN_EP2_002`
- **Famille** : Épée à deux mains · **Vitesse** : lente
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 15 · **Affinité raciale** : Salamander (+5% aux bonus si Salamander)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 40 |
| Poids | 6,2 kg |
| Durabilité | 440 |
| Bonus | +4 STR, -1 AGI |

## Acquisition & Chaînage économique
- **Source** : Craft — Kagemune (`NPC_GAT_01`) ; en vente à la forteresse de Voulg (`ZONE_SAL_TWN_001`).
- **Recette** : 6× Acier de braise + 3× Obsidienne de Gattan.
- **Prix** : 1 400 Yrds (achat) · 350 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Sa lame ondulée n'est pas un caprice de forge : chaque vague accroche l'arme adverse et déséquilibre la parade. Arme de guerre de la garnison de Voulg, elle est faite pour briser les lignes, pas pour les duels d'honneur. Les vétérans la portent dans le dos, croix de fer contre l'armure, comme un serment de ne jamais reculer.

## Intégration Bot
- Joueur : `!equiper WPN_EP2_002` · `!inspect WPN_EP2_002` — GM : `!sys_give WPN_EP2_002 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_EP2_002, 1)`
