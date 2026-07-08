# 🌟 REGISTRE MAÎTRE — Rencontres Canoniques (trame principale)

> **Statut** : source de vérité des conditions de rencontre des personnages canoniques (D19, étape 5, lot 2.0).
> **Règle cardinale** : un canonique est **difficile à rencontrer par conception**. Il n'apparaît dans AUCUN
> `!where` / `!pnj_list`, ne réside dans aucune zone (`T_NPC.zone_id = NULL`, `is_canon = VRAI`) et ne se
> matérialise que par `SYS_SPAWN_CANON` (IA) ou `!sys_canon_spawn` (GM), pour une fenêtre limitée.
> Protocole complet : `the_seed_engine/system_mechanics/npc_knowledge_protocol.md` §3.

## 1. Grille de rareté

| Rang | Nom | Fréquence indicative | Annonce |
|---|---|---|---|
| ★★★ | Mythique | ≤ 1 fenêtre / mois serveur, `Silent = VRAI` | Jamais — découverte fortuite uniquement |
| ★★ | Légendaire | ≤ 1 fenêtre / semaine | Rumeur indirecte possible (PNJ K2 « on l'aurait vu à… ») |
| ★ | Rare | ≤ 2 fenêtres / semaine, souvent liées à un événement mondial | Annonce d'événement possible |

## 2. Registre des canoniques errants

| NPC_ID | Personnage | Rang | Zones éligibles | Conditions de fenêtre | Accroche QI (dominante K3) |
|---|---|---|---|---|---|
| `NPC_CANON_KIRITO` | Kirito, le Spadassin Noir | ★★★ | Alne (tavernes), `ZONE_*_DUN_001` (soirs de premier kill), Yggdrasil | Anomalie système détectée par le Cardinal OU premier kill de boss territorial | Sait ce que The Seed cache — 4×K3 d'arc principal |
| `NPC_CANON_ASUNA` | Asuna, l'Éclair Fulgurant | ★★★ | Alne, Archipel d'Écume (Undine) | Fenêtre couplée : 50% de co-apparition si Kirito est matérialisé | Mémoire d'Aincrad, cuisine légendaire (buff unique K2) |
| `NPC_CANON_YUI` | Yui | ★★★ | N'apparaît QUE si Kirito ou Asuna est matérialisé | Jamais seule ; `Silent` forcé | Navigation Pixie : détecte les flags cachés des joueurs présents |
| `NPC_CANON_LEAFA` | Leafa | ★★ | Swilvane, routes aériennes Sylph | Tournois de vol, guerres Sylph/Salamander | Techniques de vol Vol Libre (K2 : `TITLE:` as de voltige) |
| `NPC_CANON_SINON` | Sinon | ★★ | Freelia, zones de chasse Cait Sith | Concours de tir mensuels | Balistique des arcs T4+ (K2 : `AFF>=75`) |
| `NPC_CANON_KLEIN` | Klein (Fuurinkazan) | ★★ | Gattan, tavernes Salamander | Soirées de fête après victoires de faction | Rumeurs de guilde, contacts mercenaires (K2 : `PAY:`) |
| `NPC_CANON_LISBETH` | Lisbeth | ★★ | Brokkheim (Forge-Mère) | Pèlerinages de forge trimestriels | Secrets de trempe T5 (K2 : `QUEST:` chaîne artisan) |
| `NPC_CANON_SILICA` | Silica & Pina | ★ | Freelia, Savane des Crocs | Événements de domptage | Localisation d'œufs de familiers rares (K2 : `AFF>=60`) |
| `NPC_CANON_ARGO` | Argo l'Informatrice | ★ | Alne, Bazar des Ombres (Duskarn) | Marchés noirs nocturnes | **Cas spécial** : vend des slots K2 d'AUTRES PNJ (`PAY:` élevé) — courtière en information |
| `NPC_CANON_YUUKI` | Yuuki, l'Épéiste Absolue | ★★★ | New Aincrad (`ZONE_AIN_*`) | Aube uniquement ; défie le meilleur duelliste présent | OSS « Mother's Rosario » (K3 : transmis une seule fois par serveur) |

## 3. Lords raciaux (résidents — hors errance)

Les Lords de faction sont des **résidents permanents** de leur capitale (plage `08-09`, D16) : gouvernance
territoriale, pas apparitions d'arc. Leur accès est filtré par le RP (audience, grade, taxes) mais ils sont
localisables. Fiches dans `pnj/<ville>/`.

| Personnage | ID résident | Ville | Lot |
|---|---|---|---|
| Lord Mortimer | `NPC_GAT_08` | Gattan | ✅ 2.1 |
| Général Eugene | `NPC_GAT_09` | Gattan | ✅ 2.1 |
| Dame Sakuya | `NPC_SWI_08` | Swilvane | ⏳ lot Swilvane |
| Alicia Rue | `NPC_FRE_08` | Freelia | ⏳ lot Freelia |
| *(autres Lords : 1 par capitale, plage 08, actés à leur lot)* | | | ⏳ |

## 4. Contrats d'exécution

- **C1** : `SYS_SPAWN_CANON` refuse une zone hors « Zones éligibles » du registre (le GM peut forcer, l'IA non).
- **C2** : à expiration de `Duration`, le bot retire le canonique du groupe WhatsApp et remet `zone_id = NULL` ;
  les conversations en cours sont conclues par une réplique de départ scriptée dans la fiche.
- **C3** : les fenêtres sont journalisées (`T_WHATSAPP_LOGS`) — l'Encyclopédie d'Argo (`!wiki`) enregistre
  « Dernière observation » pour entretenir la chasse aux légendes.
- **C4** : QI canonique = budget 12 (2×K0, 2×K1, 3×K2, 4×K3, 1×KX) — les K3 sont des nœuds d'arc principal,
  déblocables uniquement par `SYS_NPC_KNOWLEDGE_UNLOCK` lors des grandes quêtes.
- **C5** : un canonique matérialisé est invulnérable (`is_essential`, anti-PK : tout `!attaque` renvoie la
  déflection « Le Système Cardinal protège cette existence »).

## 5. État des fiches

Les 10 fiches existantes (`npc_canon_*.md`) ont été **refondues au gabarit D17** : bloc « Quantité Informationnelle » (12 slots) et réplique de départ C2 ajoutés — **lot 2.2 ✅ complet**.
