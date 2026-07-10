# 🐺 CDC-FAU-01 — Faune : mobs des 9 territoires, zones neutres et axe vertical (3 lots) — D41

> **Destinataire** : modèle générateur délégué. Document autoporteur ; règles d'or **D37** applicables (cf. `02_cdc_items.md` §0).
> **Gabarit de référence prouvé** : `mob_cat_001_loup_de_prairie.md` (6 sections : Identification / Stats / Récompenses / Comportement IA / Lore) — à copier structurellement.
> **Junk à archiver AVANT production** : `mobs_sauvages/zones_neutres/` (172 fichiers), les `mob_<race>_N.md` sans plage D6 (ex. `mob_gnome_0.md`), les `mob_jötunheimr_N.md` → `deprecated_v1/mobs/`. Les fiches saines déjà en plage (`mob_gno_001`, `mob_imp_001`…) sont **conservées et refondues** si nécessaire.

---

## 1. Plages d'ID = D6, strictes (rappel, rien d'autre)

Par territoire, `MOB_<SEC>_<NNN>` avec `<SEC>` = code atlas : `SYL SAL UND CAI PUC IMP GNO LEP SPR`.
⚠️ **`CAI`, pas `CAT`** : les fiches existantes `MOB_CAT_*` sont refichées en `MOB_CAI_*` (les anciennes partent en archive).

| Plage | Zone | Contenu |
|---|---|---|
| `001-004` | périphérie de la capitale | proies d'entraînement Niv 1-8 (rattachées à HUNT_001 pour le spawn, contrat T2 de `T_SPAWN_TABLES`) |
| `010-013` | HUNT_001 | faune standard Niv 10-18 |
| `020-026` | HUNT_002 | Niv 20-30 ; **`025` = mini-boss**, **`026` = boss de zone** |
| `030-034` | donjon territorial | Niv 32-42, thème du donjon (les `BOSS_<SEC>_DUN_001` existent déjà 9/9 — **ne pas recréer**) |

### Lots

| Lot | Périmètre | Volume |
|---|---|---|
| F-1 | 9 territoires × 20 fiches (`001-004`, `010-013`, `020-026`, `030-034`) | 180 |
| F-2 | `MOB_NEU_001-020` (périphérie d'Alne + zones neutres cartographiées) + `MOB_AIR_001-004` (partagés par les 9 routes, D8 — 4 fiches uniques) | 24 |
| F-3 | `MOB_JOT_001-015` (Jötunheimr) · `MOB_YGG_001-015` (Yggdrasil) · `MOB_AIN_001-015` (New Aincrad) — endgame Niv 40+ | 45 |

Rangement : `mobs_sauvages/<territoire>/` (créer les 9 dossiers raciaux), `zones_neutres/`, `jotunheimr/`, `yggdrasil/`, `aincrad/`. Fichier : `mob_<sec>_<nnn>_<slug>.md` (minuscules).

## 2. Grilles de stats (fermées) — calées sur `MOB_CAT_001` (Niv 6 : HP 900, ATK 50, EXP 130)

| Bande | Niveau | HP | ATK | DEF | EXP | Prime (Yrds) |
|---|---|---|---|---|---|---|
| Périphérie | 1-8 | 300-1 200 | 25-70 | 10-35 | 50-200 | 10-40 |
| HUNT_001 | 10-18 | 1 500-4 500 | 90-190 | 45-90 | 300-900 | 60-150 |
| HUNT_002 | 20-30 | 5 000-15 000 | 220-420 | 100-190 | 1 200-3 500 | 200-500 |
| Donjon | 32-42 | 18 000-45 000 | 480-800 | 210-350 | 4 500-11 000 | 700-1 500 |
| Endgame (F-3) | 40+ | 40 000-120 000 | 750-1 400 | 320-550 | 10 000-30 000 | 1 200-3 000 |
| **Mini-boss (`025`)** | ×3 les valeurs de sa bande | | | | ×3 | ×3 |
| **Boss de zone (`026`)** | ×8, capacité signature obligatoire | | | | ×8 | ×8 |

Chaque mob : 1 élément OU « Aucun », exactement 1 Faiblesse et ≤1 Résistance, cohérents avec le territoire (mobs Salamander faibles à l'Eau, etc.).

## 3. Récompenses — cohérence écologique NON NÉGOCIABLE

- **Loot** : 2 à 4 lignes, taux 5-60%, UNIQUEMENT des `MAT_*` du lot I-3 (croc, cuir, glande, cendre, essence…) ou de la nourriture crue. **Un loup droppe un croc, jamais une épée** (règle persona §3.1). Item inexistant → `[BESOIN_ITEM]`, jamais d'ID inventé.
- Exceptions : `025`/`026` et F-3 peuvent dropper 1 équipement (8% max), choisi dans les lots livrés (`ARM_*`, `WPN_*`).
- **Chaque loot doit avoir un acheteur** : le matériau cite le PNJ qui le rachète (contrat R7 du CDC boutiques).

## 4. Comportement IA (section obligatoire, 2-4 lignes)

Meute/solitaire, condition d'aggro, pattern signature exploitable par l'orchestrateur (`SYS_SPAWN_*`), et — pour `025`/`026`/F-3 — le lien éventuel à la mécanique WhatsApp signature du donjon du territoire (D10/D11 : Surchauffe, Apnée, Vacarme…). Les mobs AIR : patterns d'interception des 9 routes (D8), altitude, contre par `!fly_evade` si acté.

## 5. Checklist de recette

1. Comptes exacts (180 / 24 / 45), plages D6 respectées, zéro `MOB_CAT_*` restant hors archive.
2. Zéro stat hors grilles §2 ; chaque `025` = ×3 et `026` = ×8 vérifiés par sondage.
3. 100% des loots résolubles (`MAT_*` existant ou `[BESOIN_ITEM]` consolidé en annexe d'index).
4. Faiblesses élémentaires cohérentes territoire par territoire ; 9 boss de donjon existants intouchés.
5. Index par dossier (`_index_mobs_<territoire>.md`) : table ID | Nom | Niv | Zone | Loot principal.
