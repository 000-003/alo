# 🕯️ Marchand de Fleurs — `NPC_PEN_12`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_12` |
| **Nom affiché** | Marchand de Fleurs |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (fleurs de gravats — spores de code des Ruines Noires) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Ruines Noires |
| **Niveau / HP / MP** | 32 / 3 200 / 7 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Marchand de Fleurs est un Spriggan frêle qui parcourt les abords des Ruines Noires pour cueillir les « fleurs de gravats » — des cristaux phosphorescents qui poussent dans les interstices du fichier corrompu. Ce ne sont pas des plantes : ce sont des spores de code, des tentatives du système de « réparer » la corruption en réécrivant du matériau sur la faille. Les fleurs ont des propriétés alchimiques uniques — elles soignent, elles empoisonnent, elles modifient temporairement les attributs. Il les vend aux Spriggans qui ne veulent pas s'aventurer dans les ruines lui-même. Il ne parle jamais de ce qu'il voit au cœur des ruines. Il cueille, il vend, il se tait.
- **Traits** : discret, observateur, fait semblant d'être naïf.
- **Voix** : douce, avec des pointes de connaissance inattendue (« Ces fleurs-là poussent sur une strate où un Spriggan est mort. Pas de chagrin : c'est juste l'engrais du code. »).
- **Relations** : Gardien Ruines Noires `NPC_PEN_10` (lui signale les zones sûres pour la cueillette) ; Guide Ruines Noires `NPC_PEN_11` (échange itinéraires contre fleurs rares) ; Masquier Orin `NPC_PEN_03` (lui achète des pigments extraits des fleurs).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_12_01` | K0 | fleurs, vente | Catalogue de fleurs de gravats — prix, effets | — |
| 2 | `QI_PEN_12_02` | K0 | cueillette, ruines | Zones de cueillette, dangers saisonniers | — |
| 3 | `QI_PEN_12_03` | K0 | alchimie, base | Utilisations basiques des fleurs en alchimie | — |
| 4 | `QI_PEN_12_04` | K1 | spores, code | Les fleurs sont des spores de code générées par la corruption du fichier | `AFF>=65` |
| 5 | `QI_PEN_12_05` | K1 | mort, engrais | Les plus belles fleurs poussent là où des Spriggans sont morts — le code en décomposition fertilise | `AFF>=70` |
| 6 | `QI_PEN_12_06` | K1 | nœud, central | Près du nœud central, les fleurs sont noires — il ne les cueille pas | — |
| 7 | `QI_PEN_12_07` | K2 | fleur, noire | Les fleurs noires du centre modifient les stats de base — mais « cassent » l'identité du porteur | `AFF>=85` |
| 8 | `QI_PEN_12_08` | K2 | commanditaire, fleurs | Un acheteur masqué lui commande des fleurs noires régulièrement — paie sans négocier | `AFF>=88` |
| 9 | `QI_PEN_12_09` | K3 | fleur, origine | La première fleur de gravats est apparue avant la création des Spriggans — elle date du premier fragment du monde | JAMAIS — déflection : *(il pose doucement une fleur sur son étal)* « Celle-ci est plus vieille que moi. Plus vieille que Penwether. Plus vieille que tout. Je ne sais pas d'où elle vient. Je sais seulement qu'elle ne devrait pas exister. Et pourtant, elle fleurit. Comme nous. » |
| 10 | `QI_PEN_12_10` | KX | *(hors-sujet)* | « Une fleur ne ment pas. Elle pousse ou elle meurt. C'est plus qu'on peut en dire des mots. » | — |

## 4. Chaînage économique & quêtes

- **Merchant** : vend `FLEUR_GRAVATS_BLEUE` (soin), `FLEUR_GRAVATS_ROUGE` (boost ATK), `FLEUR_GRAVATS_NOIRE` (altération de stats — `AFF>=85`).
- **Fils rouges** : rouage de **📜 Ce Que Cachent les Ruines** (les fleurs sont des spores de réparation système). Relais de **🔑 Le Pacte des Ombres** (l'acheteur masqué de fleurs noires).
- Donneur de `QST_PEN_FLEURS_01` (cueillette de fleurs rares dans les Ruines Noires).

## 5. Intégration Bot

- **Accueil** (`!parler marchand_fleurs`) : *« Les fleurs d'ici sont belles, hein ? Mais attention : la beauté, dans les Ruines Noires, cache toujours quelque chose. Alors tu achètes ou tu admires ? »*
- `!etal fleurs` (catalogue) ; `!cueillette [zone]` (expédition de cueillette).
