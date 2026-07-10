# ✨ CDC-SKL-01 — Compétences : magies, OSS, passives (3 lots × 100) — D40

> **Destinataire** : modèle générateur délégué. Document autoporteur ; règles d'or **D37** applicables (cf. `02_cdc_items.md` §0).
> **Gabarits de référence prouvés** : `mag_feu_001_fire_lance.md` (magie) et `oss_epe_001_starburst_stream.md` (OSS) — les copier structurellement. Le dossier `magies/support/` (141 fichiers junk) est archivé intégralement vers `deprecated_v1/skills_support/` AVANT production ; les fiches saines existantes (feu, vent, eau…) sont **refondues dans les nouvelles plages** en conservant noms et canon.

---

## 1. Lots et plages d'ID (fermées)

### Lot S-1 — Magies : 10 écoles × 10 sorts = 100 (`MAG_<ECO>_001-010`)

| École | Code | Dossier | Race affine (+30% efficacité, convention existante) |
|---|---|---|---|
| Feu | `FEU` | `magies/feu/` | Salamander |
| Vent | `VEN` | `magies/vent/` | Sylph |
| Eau | `EAU` | `magies/eau/` | Undine |
| Guérison | `GUE` | `magies/guerison/` | Undine |
| Terre | `TER` | `magies/terre/` | Gnome |
| Glace | `GLA` | `magies/glace/` | Cait Sith |
| Foudre | `FOU` | `magies/foudre/` | Imp |
| Ténèbres | `TEN` | `magies/tenebres/` | Spriggan |
| Lumière | `LUM` | `magies/lumiere/` | Leprechaun |
| Support | `SUP` | `magies/support/` | Puca (chants et buffs de barde) |

Par école : `001-003` = T1, `004-005` = T2, `006-007` = T3, `008-009` = T4, `010` = T5 (quête/titre, **jamais enseigné en boutique de skill**). `MAG_SUP_001` reste **Revive** (canon acté), refondu T3 → renuméroté dans la plage T3 (`MAG_SUP_006`).

### Lot S-2 — OSS (Sword Skills) : 100 (`OSS_<ARM>_NNN`)

| Arme | Code | Nb | Arme | Code | Nb |
|---|---|---|---|---|---|
| Épée 1M | `EPE` | 12 | Lance | `LAN` | 10 |
| Épée 2M | `EP2` | 10 | Hache | `HAC` | 10 |
| Katana | `KAT` | 10 | Masse | `MAS` | 8 |
| Rapière | `RAP` | 10 | Arc | `ARC` | 12 |
| Dague | `DAG` | 10 | Armes de jet | `JET` | 8 |

`OSS_EPE_001` Starburst Stream reste tel quel (canon T5). Par famille : ~40% T1-T2, ~40% T3-T4, 1-2 T5 max. Pas d'affinité raciale : les OSS dépendent de la **maîtrise d'arme** (rang Novice/Confirmé/Avancé).

### Lot S-3 — Passives : 100 (`PAS_<DOM>_NNN`)

| Domaine | Code | Plage | Contenu |
|---|---|---|---|
| Combat | `CBT` | `PAS_CBT_001-040` | parade, esquive, I-frames étendues, maîtrises d'armes, résistances |
| Craft | `CRA` | `PAS_CRA_001-025` | forge, alchimie, couture, joaillerie, cuisine — paliers de qualité |
| Exploration | `EXP` | `PAS_EXP_001-020` | récolte, pistage, vol longue durée, détection, endurance aux jauges D12 |
| Social | `SOC` | `PAS_SOC_001-015` | marchandage (−n% prix boutique, plafonné −10%), affinité PNJ, scène/performance |

## 2. Grilles de valeurs (fermées)

### Magies (aligne le canon `MAG_FEU_001` T1 = 40 MP et Revive T3 = 200 MP)

| Tier | Coût MP | Incantation | Cooldown | Niv. requis | Dégâts/soin de base |
|---|---|---|---|---|---|
| T1 | 30-60 | 1-1,5 s | 0-5 s | 1-8 | 100-160 + (INT × 0,4) |
| T2 | 80-150 | 2 s | 5-15 s | 10-18 | 220-380 + (INT × 0,6) |
| T3 | 180-300 | 3 s | 20-60 s | 20-30 | 450-800 + (INT × 0,8) |
| T4 | 350-500 | 4 s | 2-5 min | 32-42 | 900-1 600 + (INT × 1,0) |
| T5 | 550-800 | 5 s+ | 1/combat ou 1/jour | 43+ | libre ≤ 2 200 + (INT × 1,2) |

Toute magie est **interruptible** (Casting Break si dégâts > 5% HP max, convention existante). Buffs : +5% T1-T2, +10% T3-T4, jamais plus. Zones d'effet : T3+ uniquement.

### OSS

| Tier | Hits | Multiplicateur total | Stamina | Post-Motion Delay | Déblocage |
|---|---|---|---|---|---|
| T1 | 1-2 | ×1,2-1,5 | 10-20% | 0,5 s | maîtrise Novice |
| T2 | 2-4 | ×1,8-2,4 | 25-35% | 1 s | maîtrise Confirmé |
| T3 | 4-7 | ×2,8-3,6 | 40-50% | 1,5-2 s | Confirmé + entraîneur |
| T4 | 8-11 | ×4,5-6,0 | 60-70% | 2,5-3 s | Avancé + quête |
| T5 | 12-16 | ×7,0-8,0 | 80% | 3,5 s | Avancé + quête spéciale (cf. Starburst Stream) |

Invariants : ignore 15% DEF (convention OSS) ; bonus « Perfect Chain » +20% si tous les hits touchent ; **le Post-Motion Delay croît avec le tier** (risk/reward, non négociable).

### Passives
3 rangs par passive (I/II/III) : +2% / +5% / +8% max sur leur domaine — JAMAIS de passive de dégâts globaux, jamais de cumul >2 passives du même domaine équipées.

## 3. Enseignement (chaînage monde — obligatoire fiche par fiche)

Chaque skill T1-T4 nomme son **enseignant** : un `SKILL_MASTER` existant des rosters (Zephyrine `NPC_ALN_68`, Roan `NPC_ALN_69`, Selene `NPC_ALN_70`, Ferra `NPC_GAT_31`, Zeph `NPC_SWI_71`, Sora `NPC_SWI_79`, Vork `NPC_VOU_29`, Ignatia `NPC_VOU_02`…) OU une école raciale de la capitale affine, prix d'apprentissage = 50% du prix d'un équipement du même tier (grille D13). Les T5 : quête uniquement. Enseignant introuvable → `[BESOIN_PNJ]` dans l'index, jamais un nom inventé.

## 4. Gabarit et commandes

Gabarit = `mag_feu_001` (7 sections) pour S-1, `oss_epe_001` pour S-2 ; passives : mêmes en-têtes avec table réduite (Rang I/II/III, condition d'acquisition). Commandes : réutiliser `!cast <skill>` et `!learn_skill` (actées). Aucune nouvelle commande — un besoin réel se consigne en `[BESOIN_COMMANDE]`, l'Architecte propage à la recette (règle de complétude).

## 5. Checklist de recette

1. 100/100/100 exacts par lot ; support junk (141) archivé ; fiches saines refondues sans perte de canon (Fire Lance, Revive, Starburst Stream nommément vérifiés).
2. Zéro valeur hors grilles §2 ; Post-Motion Delay croissant par tier sur 3 fiches sondées par famille OSS.
3. Chaque école : exactement 1 race affine ; chaque skill T1-T4 : enseignant réel résoluble.
4. Aucun T5 enseignable/achetable ; les 10 `MAG_*_010` et tous les OSS T5 pointent vers une quête (existante ou `[BESOIN_QUETE]` → CDC-QST-01).
