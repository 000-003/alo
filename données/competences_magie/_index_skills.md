# ✨ Index du Lot I-4 — Compétences (`MAG_*` / `OSS_*` / `PAS_*`)

> **Chantier** : Renflouement massif « ≥100 unités par type » (directive PE 2026-07-07). Lot **I-4** du CDC-SKL-01 (D40). Produit à l'étape 19.
> **Couverture** : **300 / 300** fiches conformes (S-1 Magies 100 · S-2 OSS 100 · S-3 Passives 100) + index.
> **Statut** : ✅ **CLOS** (2026-07-09). Junk archivé dans `ressources_brutes/deprecated_v1/` (`skills_magies/` 184, `skills_oss/` 14, `skills_passives/` 11, `skills_skl_junk/` 100 = `SKL_*` du dossier parasite `items_equipements/skills/`) — rien supprimé. Canon refondu sans perte : Fire Lance, Revive, Starburst Stream, Mother's Rosario, Vorpal Strike, Tsujikaze, Crimson Lotus, Linear, Star Splash, Spiral Thrust, Phantom Arrow, Dark Detonation.

---

## 1. Conventions d'ID

| Sous-lot | Préfixe | Racine | Structure |
|---|---|---|---|
| S-1 Magies | `MAG_<ECO>_<NNN>` | `magies/<école>/` | 10 écoles × 10 sorts |
| S-2 OSS | `OSS_<ARM>_<NNN>` | `oss/<arme>/` | 10 familles d'arme = 100 |
| S-3 Passives | `PAS_<DOM>_<NNN>` | `passives/<domaine>/` | 4 domaines = 100 |

Nommage fichier : `<pfx>_<code>_<nnn>_<slug>.md` (minuscules, sans accents, underscores). Gabarits : magie = 8 sections (Identification / Paramètres de Combat / Effet / Formule / Incantation / **Acquisition** / Lore / Commande IA) ; OSS = 8 sections (… Séquence d'Animation / Effet Spécial / **Acquisition maîtrise** …) ; passive = table à 3 rangs (I/II/III).

---

## 2. S-1 Magies — 10 écoles × 10 (`MAG_*`)

Répartition par école (fixe) : `001-003` T1 · `004-005` T2 · `006-007` T3 · `008-009` T4 · `010` T5 (quête). **1 race affine par école** (+30 % efficacité). Grille MP/incant/CD/dégâts §2 du CDC respectée (T1 40 MP → T5 680 MP). Distribution vérifiée : **30 T1 / 20 T2 / 20 T3 / 20 T4 / 10 T5**.

| École | Code | Race affine | Enseignant (T1-T4) | Canon préservé |
|---|---|---|---|---|
| Feu | `FEU` | Salamander | Ferra `NPC_GAT_31` | Fire Lance, Inferno Wall, Meteor Storm, Flame Arrow |
| Vent | `VEN` | Sylph | Zeph `NPC_SWI_71` | Wind Blade, Gale Burst, Cyclone |
| Eau | `EAU` | Undine | Zephyrine `NPC_ALN_68` | Aqua Bind, Tsunami, Water Shield |
| Guérison | `GUE` | Undine | Selene `NPC_ALN_70` | **Revive** (`MAG_GUE_006`), Healing Tide |
| Terre | `TER` | Gnome | Roan `NPC_ALN_69` | Stone Wall, Earthquake, Iron Skin |
| Glace | `GLA` | Cait Sith | Sora `NPC_SWI_79` | Frost Nova, Blizzard |
| Foudre | `FOU` | Imp | Vork `NPC_VOU_29` | Lightning Strike, Chain Lightning |
| Ténèbres | `TEN` | Spriggan | Roan `NPC_ALN_69` | Shadow Bolt, Dark Detonation, Shadow Step |
| Lumière | `LUM` | Leprechaun | Selene `NPC_ALN_70` | Holy Light, Purification, Divine Judgment |
| Support | `SUP` | Puca | Zephyrine `NPC_ALN_68` | Barrier, Haste |

Prix d'apprentissage = 50 % d'un équipement du même tier (T1 150 · T2 500 · T3 2 200 · T4 6 500 Yrds) ; T5 = quête, jamais achetable.

---

## 3. S-2 OSS — 10 familles d'arme = 100 (`OSS_*`)

Pas d'affinité raciale : déblocage par **maîtrise d'arme** (Novice → Confirmé → Avancé). Post-Motion Delay **croissant** par tier (0,5 s T1 → 3,5 s T5), invariant risk/reward. Ignore 15 % DEF ; Perfect Chain +20 %. Distribution : **~50 T1-T2 / ~40 T3-T4 / 10 T5** (1 T5/famille).

| Famille | Code | Nb | Entraîneur T3 | Canon préservé |
|---|---|---|---|---|
| Épée 1M | `EPE` | 12 | Ferra `NPC_GAT_31` | **Starburst Stream** (T5), Vorpal Strike, Savage Fulcrum |
| Épée 2M | `EP2` | 10 | Vork `NPC_VOU_29` | (Gram's Judgment T5) |
| Katana | `KAT` | 10 | Ferra `NPC_GAT_31` | Tsujikaze, Crimson Lotus |
| Rapière | `RAP` | 10 | Roan `NPC_ALN_69` | **Mother's Rosario** (T5), Linear, Star Splash |
| Dague | `DAG` | 10 | Roan `NPC_ALN_69` | Rapid Bite |
| Lance | `LAN` | 10 | Vork `NPC_VOU_29` | Spiral Thrust |
| Hache | `HAC` | 10 | Vork `NPC_VOU_29` | (Ragnar's Fury T4) |
| Masse | `MAS` | 8 | Vork `NPC_VOU_29` | (Mjölnir Strike T5) |
| Arc | `ARC` | 12 | Zephyrine `NPC_ALN_68` | Phantom Arrow |
| Armes de jet | `JET` | 8 | Roan `NPC_ALN_69` | (Zephyr's Volley T5) |

T4 = maîtrise Avancé + quête ; T5 = maîtrise Avancé + quête spéciale (modèle Starburst Stream).

---

## 4. S-3 Passives — 4 domaines = 100 (`PAS_*`)

3 rangs par passive (I +2 % / II +5 % / III +8 %, **plafond +8 %**). Aucune passive de dégâts globaux. Règle d'équipement : **max 2 passives du même domaine** simultanément.

| Domaine | Code | Plage | Contenu |
|---|---|---|---|
| Combat | `CBT` | `PAS_CBT_001-040` | parades/esquive/I-frames (001-006), **17 maîtrises d'armes** (007-017), 9 résistances élémentaires+poison (018-026), crit/précision/robustesse/endurance (027-040) — Parry, Aerial Evasion, Dual Wielding, Battle Healing préservés |
| Craft | `CRA` | `PAS_CRA_001-025` | forge/alchimie/couture/joaillerie/cuisine + spécialisations, paliers de qualité, Masterwork — Forge, Alchimie, Couture préservés |
| Exploration | `EXP` | `PAS_EXP_001-020` | récolte (herbo/mine/dépeçage), pistage, vol prolongé, détection, **endurance aux jauges D12** (HEAT 014 / OXYGEN 015 / DOT 016) — Navigation, Searching, Méditation préservés |
| Social | `SOC` | `PAS_SOC_001-015` | **marchandage −% plafonné −10 %** (001), affinité PNJ, performance/scène Puca, recel/marché noir, renommée |

---

## 5. Chaînages transverses vérifiés

- **Affinités raciales** : 1 école = 1 race (§2), cohérent avec le mapping D40 (FEU=SAL, VEN=SYL, EAU+GUE=UND, TER=GNO, GLA=CAI, FOU=IMP, TEN=SPR, LUM=LEP, SUP=PUC).
- **Interactions mécaniques signatures** : `MAG_FEU_006` Magma Burst ↔ Surchauffe (Caldeira, D11) ; `EAU_003` Bubble Veil & `EXP` Breath Control ↔ Apnée (Gouffre, D11) ; `EXP_014/015/016` = endurance aux jauges D12 HEAT/OXYGEN/DOT ; `SUP_006` Resonance Ward ↔ Harmonie de Fond de Lioda.
- **Enseignants** : 8 SKILL_MASTER réels vérifiés existants (Zephyrine `NPC_ALN_68`, Roan `NPC_ALN_69`, Selene `NPC_ALN_70`, Ferra `NPC_GAT_31`, Zeph `NPC_SWI_71`, Sora `NPC_SWI_79`, Vork `NPC_VOU_29`, Ignatia `NPC_VOU_02` — réserve). Prix d'apprentissage sur grille D13.
- **T5 = quêtes** : les 10 `MAG_*_010` et les 10 OSS T5 pointent une quête de titre → **dette CDC-QST-01** (lot quêtes non encore produit).

---

## 6. `[TODO]` — Affinage formateurs OSS

- **Quêtes de titre T5** — ✅ **APURÉ (étape 33, 2026-07-10)** : les 20 quêtes `QST_T5_MAG_*_01` / `QST_T5_OSS_*_01` existent (`game_design/quetes/`, index §5). Chaque skill T5 est adossé à sa quête de déblocage (donneur = enseignant confirmé, épreuve = donjon/boss existant). Reste comparable ouvert : `WPN_LEG_*`/`LEG_002/003` (lot armes légendaires).
- **Entraîneurs OSS par arme** : les entraîneurs T3 sont mappés sur les 8 SKILL_MASTER confirmés (répartition par familier d'arme). Un affinage « forgeron/maître d'armes de la capitale affine » est possible quand les rosters manquants seront audités (même point ouvert que l'index armes sur `NPC_PEN_04`/`NPC_LIO_04`/`NPC_DUS_04`).

## 7. `[BESOIN_COMMANDE]` — ✅ APURÉ (étape 21, 2026-07-09)

- ✅ **`SYS_GRANT_PASSIVE(Avatar_ID, Skill_ID, Rang)`** — actée dans `ai_orchestrator_commands.md` §9 (aux côtés de `SYS_GRANT_SPELL`/`SYS_GRANT_OSS`). Face joueur **`!learn_skill [Skill_ID]`** actée dans `whatsapp_commands_list.md` §18 (couvre `MAG_*`/`OSS_*`/`PAS_*`, jusqu'ici référencée par 300 fiches sans définition maître) ; équivalent GM `!sys_grant_skill` §1. Reste ouvert hors périmètre commandes : `QST_SYL_HELKA_01`.

## 8. `[QUESTIONS_LOT]` / décisions

- **D59** : **Revive placé en Guérison** (`MAG_GUE_006`, T3) et non dans le `MAG_SUP_006` provisoire du CDC — l'école Guérison (Undine) n'existait pas quand la note du CDC a été écrite ; une résurrection est de la magie de soin Undine, pas un buff de barde Puca. Healing Tide idem (EAU_002 → `MAG_GUE_004`). Le slot `SUP_006` est rempli par Resonance Ward (soutien Puca cohérent).
- **D60** : **Codes d'école/domaine alignés sur le CDC** (`TEN` Ténèbres, `CBT` Combat) — les anciens `MAG_TNB_*` / `pas_cmb_*` sont refondus dans les codes CDC. Anciennes fiches archivées, canon (noms) préservé dans les nouvelles plages.
