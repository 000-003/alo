# Bandana du Pêcheur

## Identification Cardinal
- **Item_ID** : `ARM_TET_020`
- **Slot** : Tête — Bandana · **Classe** : Tissu
- **Tier** : T1 · **Rareté** : Peu commun
- **Niveau requis** : 5 · **Affinité raciale** : Undine (+5% aux bonus si Undine)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 10 |
| RES magique | 6 |
| Poids | 0,2 kg |
| Durabilité | 190 |
| Pénalité de vol | 0% |
| Bonus | +10% chance de prise rare à la pêche (`!pecher`) ; +1 AGI |

## Acquisition & Chaînage économique
- **Source** : Vendu exclusivement par la Pêcheuse Maëlle (`NPC_UND_10`), Lac Cristallin (`ZONE_UND_HUNT_001`) — après avoir remis 5 poissons courants.
- **Recette** : Non craftable.
- **Prix** : 380 Yrds (achat) · 95 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Maëlle noue elle-même chaque bandana selon un pli que « les poissons trouvent poli ». Personne n'a jamais vérifié la théorie, mais les statistiques du Cardinal lui donnent raison. Le tissu est imprégné d'huile d'écaille : sous l'eau, il luit faiblement, juste assez pour attirer les curieux à nageoires.

## Intégration Bot
- Joueur : `!equiper ARM_TET_020 tete` · `!inspect ARM_TET_020` — GM : `!sys_give ARM_TET_020 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_020, 1)`
