# 📐 CADRAGE PNJ — Quotas de rôles & grille de contrôle des lots 2.6 → 2.12 (D34)

> **Statut** : la production PNJ est **déjà en cours** (lot 2.6 Freelia démarré au moment de l'audit). Ce document ne relance pas la production : il **fige les quotas et paramètres** que chaque lot doit respecter, et sert de grille de recette à la livraison. La méthode de production reste celle éprouvée sur Gattan/Alne/Swilvane/Voulg (roster D20 d'abord, puis 100 fiches D17, cf. `_index_pnj.md`).
> **Préfixes villes** : ceux actés dans `table_t_npc.md` §4 font foi (`FRE`, `UND`, `LIO`, `DUS`, `GRA`, `BRO`, `PEN`).

---

## 1. D34 — Quotas de rôles par ville (contraignants)

Objectif de la directive PE : **un PNJ de chaque rôle dans chaque zone**. Toute ville livrée à 100 fiches doit respecter :

| `role_type` | Min | Max | Contrôle |
|---|---|---|---|
| MERCHANT | 20 | 28 | dont ≥1 par sous-lieu marchand du roster |
| SERVICE | 40 | 48 | — |
| GUARD | 6 | 12 | dont ≥1 par porte/zone annexe militarisée |
| QUEST_GIVER | 6 | 11 | dont `98` (oracle) et `99` (doyen) |
| SKILL_MASTER | 3 | 6 | ≥1 arme, ≥1 magie/école raciale, ≥1 spécialité raciale |
| LORD | 1 | 2 | position `08` (et `09` si second) |
| BLACK_MARKET | 2 | 6 | ≥1 receleur + ≥1 informateur (réseau Fitch/Wisp/Murk) |

**Colonne vertébrale 00-99 (invariante, observée sur les 4 villes actées)** : `00` caché du Cardinal · `01-07` notables issus du lore source · `08-09` gouvernance · `10-19` zones annexes (HUNT_001, HUNT_002, DUN_001, ROUTE) · `20-89` population par sous-lieux · `90-93` étrangers/réfugiés (liens inter-cités) · `94` courtier inter-racial · `95` vétéran des guerres · `96` tuteur nouveaux joueurs · `97` fossoyeur/mémorial · `98` oracle (hooks orchestrateur) · `99` mémoire vivante (clef du fil méta).

**Invariants de fiche (rappel D17/D27)** : budget QI 10 (12 pour `00/01/08/09/99`), répartition 3K0/3K1/2K2/1K3/1KX (12 → 3/3/3/2/1) ; K3 = déflection scriptée, jamais révélé ; fil méta jamais confirmé, 1 révélation max/session ; 6 fils rouges/ville dont 1 méta ; ≥1 lien inter-cités entrant honoré.

---

## 2. Paramètres imposés par lot restant

| Lot | Ville | Code | Zone | Émoji | Source lore obligatoire | Lien entrant à honorer |
|---|---|---|---|---|---|---|
| 2.6 | Freelia (Cait Sith) | `FRE` | `ZONE_CAI_CAP_001` | 🐾 | `geographie_villes/freelia_territoire_caitsith.md` + `territoires_raciaux/caitsith/capitale_freelia.md` | Nya-Ran `NPC_SWI_07` (qui l'a piégée ?) ; alliance Sakuya↔Alicia Rue (`08` = Alicia Rue, canon) |
| 2.7 | Archipel d'Écume (Undine) | `UND` | `ZONE_UND_CAP_001` | 🌊 | `geographie_villes/archipel_territoire_undine.md` (CAP = fiche lore seule, cas D6) | Zarn `NPC_GAT_60` (message de Nerio) ; Nerio `NPC_ALN_92`/`NPC_SWI_92` (origine à ficher) ; Maëlle `NPC_UND_10` / Morgane `NPC_UND_11` déjà actées (étape 3 — plages 10-19 à construire autour) |
| 2.8 | Lioda (Puca) | `LIO` | `ZONE_PUC_CAP_001` | 🎭 | `territoires_raciaux/puca/capitale_lioda.md` | Luthien `NPC_SWI_06` (espionne infiltrée — pour qui ?) |
| 2.9 | Duskarn (Imp) | `DUS` | `ZONE_IMP_CAP_001` | 🌑 | `territoires_raciaux/imp/capitale_duskarn.md` | Malakor `NPC_VOU_03` (contremaître expatrié — pourquoi parti ?) |
| 2.10 | Granzam (Gnome) | `GRA` | `ZONE_GNO_CAP_001` | ⛏️ | `territoires_raciaux/gnome/capitale_granzam.md` | Bomil `NPC_ALN_93` + Torvin `NPC_SWI_93` (comptoir de gemmes source) ; Ilka `NPC_GAT_33` (phalange) ; Balrog `NPC_VOU_04` |
| 2.11 | Brokkheim (Leprechaun) | `BRO` | `ZONE_LEP_CAP_001` | 🔨 | `territoires_raciaux/leprechaun/capitale_brokkheim.md` | Brokkr `NPC_SWI_05` (alliage inconnu) ; Fyra `NPC_VOU_06` ; mithril des T4/T5 (D15) |
| 2.12 | Penwether (Spriggan) | `PEN` | `ZONE_SPR_CAP_001` | 🕯️ | `territoires_raciaux/spriggan/capitale_penwether.md` | Tenebris `NPC_SWI_03` (la clé qui n'ouvre rien d'ici) |

---

## 3. Checklist de recette par lot (à passer AVANT de déclarer un lot clos)

1. `ls pnj/<ville>/ | wc -l` = **100** ; séquence `00-99` sans trou ni doublon (l'audit du 2026-07-08 a montré qu'un lot peut être déclaré clos avant que le disque soit complet — **toujours recompter**).
2. Quotas D34 §1 respectés (compter les `role_type`).
3. Émoji d'en-tête uniforme sur les 100 fiches.
4. Format d'en-tête **table** (pas la variante liste pré-D17 de Gattan 78-99).
5. Roster + différenciateur + 6 fils rouges reportés dans `_index_pnj.md`.
6. Lien(s) inter-cités entrant(s) du §2 honoré(s) (le PNJ cible cite l'ID exact du PNJ source).
7. Toute nouvelle commande `!*` introduite ⇒ équivalents `!sys_*` + `SYS_*` propagés (règle de complétude).
8. `alo_progression.md` + `alo_context.md` mis à jour, décisions D numérotées à la suite.

**Anticipation boutiques (important)** : à partir du lot 2.6, chaque PNJ `MERCHANT`/`BLACK_MARKET` du roster indique déjà sa **spécialité marchande en 3-5 mots** dans la colonne Rôle — c'est la clé d'entrée du CDC boutiques (`03_cdc_boutiques.md`, D35). Rien d'autre à faire côté PNJ : les inventaires sont produits séparément.
