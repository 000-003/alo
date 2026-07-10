# Table MLD : T_INVENTORY

> Instances des objets possédés par les avatars. Refonte complète (D44) : l'ancien stub ne spécifiait ni capacité, ni piles, ni liaison d'âme. Travaille en tandem avec `T_AVATARS.inventory_capacity` (formule D44) et les slots `equip_*`.

## 1. Structure Logique : T_INVENTORY

| Colonne | Type logique | Contraintes | Description |
|---|---|---|---|
| `instance_uuid` | UUID | **PK** | Instance unique d'objet (deux épées identiques = deux instances) |
| `avatar_uuid` | UUID | FK → `T_AVATARS`, NOT NULL | Propriétaire |
| `item_id` | Texte | FK → `T_ITEMS_DICT.item_id`, NOT NULL | Référence du dictionnaire (`ARM_*`, `WPN_*`, `CSM_*`, `MAT_*`, `BAG_*`) |
| `quantity` | Entier | 1-99 ; >1 uniquement si l'item est empilable (`CSM_*`, `MAT_*`) | Pile = 1 slot d'inventaire |
| `current_durability` | Entier | NULLABLE (∞ pour anneaux/colliers/empilables) | Décrémentée en combat ; 0 = brisé (réparation `!repair`, jamais de suppression) |
| `is_equipped` | Booléen | défaut FAUX | VRAI ⇒ référencé par un slot `equip_*` / `hand_*` / `belt_*` / `gear_*` de l'avatar (contrat A6) |
| `slot_equipped` | Énum | NULLABLE | **Armure portée** : `head`/`torso`/`arms`/`waist`/`legs` — **Mains** : `hand_main`/`hand_off` — **Ceinture** : `gear_belt` (l'item ceinture), `belt_left`/`belt_right` (armes) — **Dos** : `gear_back` (sac OU sangle), `back_wpn` (arme sur sangle, jusqu'à 2-4) |
| `storage_zone` | Énum | NULLABLE | Pour les objets NON équipés : `VIRTUAL` (accès commande `!fetch`) · `BAG` (sac porté, accès rapide) · `BANK` (`T_BANK`, hors combat). Les `WPN_*` ne sont jamais `VIRTUAL` ni `BAG` (D45) |
| `is_bound` | Booléen | défaut FAUX | **Lié à l'âme** (T5 craft-titre, D13) : ni échange, ni vente, ni prêt sur gages (cf. Gilda `NPC_GAT_85`, Sept-Doigts `NPC_ALN_53` — son « impossible, sauf pour elle » reste un hook narratif, pas une règle) |
| `acquired_at` / `acquired_from` | Timestamp / Texte | NOT NULL / NULLABLE | Traçabilité anti-dup : `SHOP_*`, `MOB_*`, `QST_*`, `!sys_give`, craft |

## 2. Indexation et Optimisation

- **Index** sur `avatar_uuid` : rendu de `!inventaire` en une requête.
- **Index partiel** sur `(avatar_uuid, is_equipped = VRAI)` : calcul de la feuille de stats au combat (verrou d'état, cf. persona §2.2).
- **Index** sur `item_id` : audits économiques (`!sys_market_price`, détection de duplication de masse).

## 3. Triggers / Procédures Stockées (contrats d'intégrité)

| # | Contrat | Comportement |
|---|---|---|
| T1 | **Capacité respectée (D44)** | INSERT refusé si `T_AVATARS.inventory_used` ≥ `inventory_capacity` — message narratif + bascule des récompenses de quête vers `T_MAIL` (7 jours). Met à jour `inventory_used` à chaque INSERT/DELETE/fusion de pile |
| T2 | **Empilage** | Ajout d'un empilable : fusion dans la pile existante jusqu'à 99, puis nouvelle pile (nouveau slot). Non-empilable : `quantity` verrouillée à 1 |
| T3 | **Anti-duplication** | Verrou pessimiste sur l'instance pendant toute transaction (`!buy`, `!sell`, échange, combat asynchrone) — une instance ne peut être ni vendue deux fois ni échangée pendant un calcul de dégâts |
| T4 | **Liaison d'âme** | `is_bound = VRAI` ⇒ rejet de tout transfert (`!sell`, échange, `T_MARKET_LISTINGS`, gage). `!jeter` demande double confirmation et détruit définitivement |
| T5 | **Équipement cohérent** | `is_equipped = VRAI` exige `slot_equipped` compatible (contrats A1-A4 de `T_AVATARS`) : armure/tenue sur les 5 slots portés, objets saisissables en mains, `WPN_*` sur `belt_*`/`back_wpn`, `BELT_*` sur `gear_belt`, `BAG_*`/`HRN_*` sur `gear_back` ; exactement 1 instance par slot |
| T6 | **Armes hors sac/virtuel (D45)** | tout `WPN_*` non équipé est forcé en `storage_zone='BANK'` — INSERT/UPDATE en `VIRTUAL` ou `BAG` refusé. Le sac (`BAG`) n'accepte que items/consommables/matériaux |
| T7 | **Accès rapide vs commande (D45)** | retirer un objet `storage_zone='VIRTUAL'` exige la commande `!fetch` (comptée comme une action, bloquée pendant le tour adverse) ; `storage_zone='BAG'` (sac porté) ⇒ retrait sans commande ; les armes en `belt_*`/`back_wpn` se dégainent sans commande |
| T8 | **Mort / Remain Light** | À la mort hors zone sûre : pénalité de drop selon `pk_karma` — les instances `is_bound` ne droppent JAMAIS ; les armes portées (mains/ceinture/sangle) sont exposées, la banque est protégée |

## 4. Équivalents Commandes

| Opération | Joueur | GM | IA |
|---|---|---|---|
| Consulter / équiper / jeter | `!inventaire`, `!equiper [Item_ID] [Slot]`, `!unequip [Slot]`, `!jeter [Item_ID]` | `!sys_give [Item_ID] [Num]` | `SYS_GRANT_ITEM(Avatar_ID, Item_ID, Qty)` |
| Consommer | `!use [Item_ID]` / `!use_potion` / `!use_crystal` | `!sys_item_state` | `SYS_SET_ITEM_STATE(Item_ID, State)` |
| Retirer / dégainer | `!fetch [Item_ID]` (inventaire virtuel), `!degainer [gauche\|droite\|dos]` (armes portées) | — | `SYS_SET_LOADOUT` |
| Étendre la capacité / porter des armes au dos | `!sew [Matériau]` (coud sac `BAG_*` ou sangle `HRN_*`) puis `!equiper [ID] dos` (sac XOR sangle) | — | — |
| Réparer | `!repair` (forgerons) | — | — |
