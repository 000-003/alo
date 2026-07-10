# 📦 CDC-ITM-01 — Renflouement Items prioritaires : Consommables, Armes, Matériaux (3 lots × 100)

> **Destinataire** : modèle générateur délégué. Ce document est **autoporteur** : tout ce qui n'y figure pas est INTERDIT. En cas de doute, ne pas inventer — inscrire le point dans `[QUESTIONS_LOT]` en fin d'index et continuer.
> **Pourquoi ce chantier** : les boutiques (CDC-SHP-01) ne peuvent vendre que des items existants. Ces 3 lots sont le stock du monde.
> **Gabarit de référence prouvé** : lot tête `ARM_TET_001-100` (`données/items_equipements/armures/tete/`). Le copier, pas le réinterpréter.

---

## 0. RÈGLES D'OR (D37 — violations = lot refusé)

1. **1 item = 1 fichier markdown**. Aucun fichier hors des plages d'ID allouées §2. Aucun code, aucun JSON, aucun SQL.
2. **Ne JAMAIS modifier** un fichier hors du dossier cible du lot (pas de retouche d'atlas, de tables MLD, de fiches PNJ, de commandes). Seule exception : l'`_index_*.md` du lot.
3. **ID séquentiels stricts**, format exact §2. Pas de hash, pas de saut, pas de doublon.
4. Noms de fichiers : minuscules, sans accents, underscores : `csm_pot_001_potion_soin_mineure.md`.
5. Prix, stats et niveaux **uniquement dans les grilles §3**. Une valeur hors grille = fiche non conforme.
6. Toute référence croisée (PNJ, mob, zone, boss) doit utiliser un **ID existant** du projet (`NPC_*`, `MOB_*`, `ZONE_*`, `BOSS_*` — voir plages rappelées §4). Référence introuvable = remplacer par la mention `[REF_A_CONFIRMER]` + note dans `[QUESTIONS_LOT]`.
7. Rédaction en français, lore 3-6 phrases, ton « Encyclopédie d'Argo » (émerveillement, jamais plat, jamais de « OK »).
8. Les anciens fichiers junk du dossier cible sont **déplacés** vers `ressources_brutes/deprecated_v1/<categorie>/` AVANT d'écrire les nouveaux. Jamais supprimés.

---

## 1. Ordre des lots

| Lot | Catégorie | Dossier cible | Volume | Préfixe ID |
|---|---|---|---|---|
| I-1 | Consommables | `données/items_equipements/consommables/` | 100 | `CSM_` |
| I-2 | Armes | `données/items_equipements/armes/` | 100 | `WPN_` |
| I-3 | Matériaux | `données/items_equipements/materiaux/` | 100 | `MAT_` |

Un lot = livraison complète (100 fiches + index) avant d'ouvrir le suivant.

---

## 2. Allocation des ID (fermée — rien d'autre)

### Lot I-1 — Consommables (100)

| Sous-dossier | Plage | Contenu imposé |
|---|---|---|
| `potions/` | `CSM_POT_001-040` | 001-010 soins (HP) T1→T4 · 011-018 mana (MP) · 019-026 antidotes/dissipations (poison, brûlure, gel, Vacarme, malédiction) · 027-034 buffs (STR/AGI/VIT/INT, résistances élémentaires) · 035-040 **anti-jauges D12** : ≥2 anti-Surchauffe (HEAT), ≥2 anti-Apnée (OXYGEN), ≥2 anti-DOT |
| `nourriture/` | `CSM_NOU_001-035` | 001-009 : **1 plat signature par race** (9 races — ex. ragoût de lave Salamander qui buff STR, truite du Zéphyr Sylph) · 010-018 rations/pains/fromages T1 neutres · 019-027 plats de taverne à buff mineur (30 min) · 028-035 cuisine premium à buff majeur (1 h, type Chef Aubin `NPC_ALN_47`) |
| `parchemins/` | `CSM_PAR_001-015` | 001-005 retour (ville de race, Alne) · 006-010 identification/réparation/déliage mineur · 011-015 parchemins de skill consommables T1-T2 |
| `cristaux/` | `CSM_CRI_001-010` | 001-004 cristaux de soin/mana instantanés (rares, chers) · 005-007 téléportation · 008-010 cristaux d'enregistrement/pierre de rappel |

### Lot I-2 — Armes (100) — allocation ferme par famille

| Sous-dossier | Plage | Nb |
|---|---|---|
| `epees_1h/` | `WPN_EP1_001-012` | 12 |
| `epees_2h/` | `WPN_EP2_001-008` | 8 |
| `katanas/` | `WPN_KAT_001-008` | 8 |
| `rapieres/` | `WPN_RAP_001-008` | 8 |
| `dagues/` | `WPN_DAG_001-008` | 8 |
| `arcs/` | `WPN_ARC_001-010` | 10 |
| `lances/` | `WPN_LAN_001-008` | 8 |
| `haches/` | `WPN_HAC_001-008` | 8 |
| `masses/` | `WPN_MAS_001-006` | 6 |
| `baguettes/` | `WPN_BAG_001-010` | 10 |
| `armes_de_jet/` | `WPN_JET_001-004` | 4 |
| `boucliers/` | `WPN_BOU_001-006` | 6 |
| `legendaires/` | `WPN_LEG_001-004` | 4 (1 = Gram du Général Eugene, déjà lore ; T5 tous liés) |

> ⚠️ **Statut des boucliers (directive PE 2026-07-08)** : le personnage porte 5 slots d'armure, pas plus — les boucliers sont des objets **saisis en main libre** (`hand_off`, cf. `table_t_avatars.md` contrat A2), donc bien une famille de ce lot. Pour leurs fiches : remplacer `ATQ` par `BLOC` (mêmes fourchettes), pénalité de vol petit −1% / moyen −3% / pavois −6%, malus −1 AGI (moyen) / −2 AGI (pavois).

Dans chaque famille (hors légendaires) : progression T1→T4 + affinités raciales réparties — **chaque race doit posséder ≥8 armes affines au total du lot** (ex. rapières/dagues → Sylph & Cait Sith ; haches/masses → Salamander & Gnome ; baguettes → Undine & Puca ; arcs → Cait Sith & Spriggan ; katanas → Salamander & Imp ; lances → Gnome & Leprechaun). Reporter le décompte racial dans l'index.

### Lot I-3 — Matériaux (100)

| Sous-dossier | Plage | Contenu imposé |
|---|---|---|
| `minerais/` | `MAT_MIN_001-025` | fer/cuivre T1 → obsidienne (Gattan), granit (Granzam), **mithril (Brokkheim, T4-T5 — D15)** ; ≥1 minerai par territoire |
| `herbes_plantes/` | `MAT_HRB_001-025` | ≥2 herbes par territoire (reprendre la flore existante de `lore_mecaniques/flore_environnement/` quand elle existe) ; herbes des recettes du lot I-1 incluses (ex. Lin sylvestre, cf. `ARM_TET_001`) |
| `cuirs_os/` | `MAT_CUI_001-020` | crocs, peaux, os, plumes, écailles — chaque entrée cite le(s) `MOB_*` source par plage D6 |
| `drops_monstres/` | `MAT_DRP_001-020` | glandes, cendres, noyaux élémentaires, essences de boss (8% donjon, D14) |
| `gemmes/` | `MAT_GEM_001-010` | **gemmes de Granzam (D15)** + perles Undine, cristal de brise Sylph, gemme de feu Voulg |

**Contrat économique (filtre Game Designer)** : chaque matériau doit être **acheté par au moins un PNJ nommé existant** (boucher, alchimiste, forgeron : Kargh `NPC_GAT_44`, Hob `NPC_SWI_26`, Halle `NPC_ALN_30`, Vess `NPC_GAT_63`, etc.) et **entrer dans ≥1 recette** d'un item des lots I-1/I-2 ou du lot tête. Le croc de loup ne devient pas une épée : il se vend au boucher, l'argent paie le forgeron.

---

## 3. Grilles de valeurs (fermées)

### Prix & niveaux (identique lot tête, D13)

| Tier | Niveau requis | Prix achat (Yrds) | Revente |
|---|---|---|---|
| T1 | 1-8 | 150-400 | 25% |
| T2 | 10-18 | 600-1 500 | 25% |
| T3 | 20-30 | 2 500-6 500 | 25% |
| T4 | 32-42 | 9 000-20 000 | 25% |
| T5 | 43+ | non vendable en boutique — craft-titre lié / drop boss ~10 000 revente | — |

**Consommables** : prix = 10-25% du prix d'équipement du même tier (ex. potion T1 : 20-80 Yrds ; plat premium T3 : 400-900 Yrds). Cristaux : ×3 le prix de la potion équivalente.
**Matériaux** : prix de rachat PNJ = 5-15% du prix de l'item craftable le moins cher qui l'utilise ; mithril et gemmes T4+ : 800-3 000 Yrds l'unité.

### Armes — ATQ et durabilité

| Tier | ATQ | Durabilité | Vitesse (lente/moyenne/rapide) |
|---|---|---|---|
| T1 | 10-18 | 150-250 | selon famille* |
| T2 | 24-40 | 300-460 | * |
| T3 | 45-75 | 500-700 | * |
| T4 | 90-130 | 750-950 | * |
| T5 | 135-210 | 960-1 200 | * |

\* Familles rapides (dagues, rapières, katanas) : ATQ = borne basse, +1 bonus AGI ; familles lentes (épées 2H, haches, masses) : ATQ = borne haute, malus -1 AGI.
**Effets consommables** : soin T1 = 50-120 HP, T2 = 200-400, T3 = 600-1 000, T4 = 1 500-2 500 (cohérent HP PNJ : civil 150-800, notable 3 000-8 000). Buffs : +5% (mineur, 30 min) / +10% (majeur, 1 h). Jamais au-delà.

---

## 4. Gabarits de fiche (copier tel quel, remplacer les `<>`)

### 4a. Arme (5 sections — identique lot tête)

```markdown
# <Nom de l'arme>

## Identification Cardinal
- **Item_ID** : `WPN_<FAM>_<NNN>`
- **Famille** : <épée à une main / arc / …> · **Vitesse** : <rapide|moyenne|lente>
- **Tier** : T<n> · **Rareté** : <Commun|Peu commun|Rare|Épique|Légendaire>
- **Niveau requis** : <n> · **Affinité raciale** : <Race> (+5% aux bonus si <Race>)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | <grille §3> |
| Poids | <kg> |
| Durabilité | <grille §3> |
| Bonus | <+n STAT, 1 seul bonus T1-T2, 2 max T3+> |

## Acquisition & Chaînage économique
- **Source** : <boutique de <ville> | craft <PNJ_ID> | quête | drop `MOB_XXX_NNN`>
- **Recette** : <n>× <MAT_*> + <n>× <MAT_*> *(si craft)*
- **Prix** : <n> Yrds (achat) · <25%> Yrds (revente)

## Lore (Encyclopédie d'Argo)
<3-6 phrases. Qui la forge, qui la porte, un détail mémorable.>

## Intégration Bot
- Joueur : `!equiper WPN_<FAM>_<NNN>` · `!inspect WPN_<FAM>_<NNN>` — GM : `!sys_give WPN_<FAM>_<NNN> [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_<FAM>_<NNN>, 1)`
```

### 4b. Consommable — remplacer la section Statistiques par :

```markdown
## Effet
| Paramètre | Valeur |
|---|---|
| Effet | <soin n HP / +n% STAT / purge <statut> / réduit <OXYGEN|HEAT|DOT> de n%> |
| Durée | <instantané / 30 min / 1 h> |
| Cooldown | <n s> |
| Cumulable | <OUI/NON — 1 buff nourriture + 1 buff potion max> |
```
et Intégration Bot : `!use CSM_<SOUS>_<NNN>`.

### 4c. Matériau — remplacer la section Statistiques par :

```markdown
## Usage & Filière
| Paramètre | Valeur |
|---|---|
| Source | <récolte zone `ZONE_*` / drop `MOB_*` (taux n%)> |
| Acheté par | <PNJ_ID existant> à <n> Yrds |
| Entre dans | <recette(s) : Item_ID existant(s)> |
| Empilable | OUI (×99) |
```

---

## 4-bis. Annexe au lot I-1 — Portage : sacs, sangles, ceintures (28 fiches)

Trois familles du **système de port** (dissocié de l'armure, cf. `table_t_avatars.md` D45). **Aucune n'apporte de stat de combat.** Dossier : `données/items_equipements/portage/` (à créer). Fichiers `bag_/hrn_/belt_<nnn>_<slug>.md`.

### a) Sacs de dos — `BAG_001-012` (12 fiches)
Conteneur dorsal de **stockage** : items + petits consommables + matériaux, **JAMAIS d'armes** (D45). Un sac porté donne **+30 emplacements** et l'**accès rapide** (retrait sans commande en combat). Slot `gear_back` (exclusif avec la sangle). 3 modèles/tier (variantes régionales : cuir de Freelia, toile de Swilvane, maille de Granzam…). La capacité est la même (+30) ; le tier joue sur durabilité, résistance et prix.

| Plage | Tier | Capacité | Niveau | Prix (Yrds) | Acquisition |
|---|---|---|---|---|---|
| `BAG_001-003` | T1 | +30 | 1 | 200-450 | boutique (tailliers : Vosk `NPC_GAT_96`, Ison `NPC_ALN_66`…) |
| `BAG_004-006` | T2 | +30 | 10 | 900-1 500 | boutique / craft `!sew` |
| `BAG_007-009` | T3 | +30 | 20 | 3 500-6 000 | craft `!sew` (cuirs `MAT_CUI_*` T3) |
| `BAG_010-012` | T4 | +30 | 32 | 10 000-16 000 | craft maître-tailleur + 1 quête |

### b) Sangles d'armes — `HRN_001-009` (9 fiches)
**Alternative au sac** sur le slot `gear_back` : porte des **armes au dos** (aucun stockage d'items). Le joueur choisit sac OU sangle. Capacité en armes selon tier ; accès rapide (dégainage dorsal sans commande).

| Plage | Tier | Armes au dos | Niveau | Prix (Yrds) | Acquisition |
|---|---|---|---|---|---|
| `HRN_001-003` | T1 | 2 | 1 | 250-500 | boutique / craft `!sew` |
| `HRN_004-006` | T2 | 3 | 15 | 1 200-2 200 | craft (cuirs + boucles `MAT_*`) |
| `HRN_007-009` | T3 | 4 | 30 | 5 000-8 000 | craft maître-tailleur / quête |

### c) Ceintures porte-armes — `BELT_001-009` (9 fiches)
Équipement de la **taille dédié au portage** (distinct de l'armure de taille `ARM_TAI_*`) : débloque **2 fourreaux** (arme au flanc gauche + flanc droit) à dégainage instantané. Slot `gear_belt`. Sa seule fonction = les 2 fourreaux ; **jamais de bonus**. Le tier joue sur durabilité et style régional.

| Plage | Tier | Fourreaux | Niveau | Prix (Yrds) | Acquisition |
|---|---|---|---|---|---|
| `BELT_001-003` | T1 | 2 (G/D) | 1 | 150-350 | boutique de départ toutes villes |
| `BELT_004-006` | T2 | 2 (G/D) | 10 | 700-1 300 | boutique / craft |
| `BELT_007-009` | T3 | 2 (G/D) | 25 | 3 000-5 500 | craft maroquinier / quête |

**Gabarit** (les 3 familles) : celui du consommable (§4b) avec la table Effet remplacée par : Fonction (Stockage +30 / Armes ×N / 2 fourreaux) · Slot (`gear_back` ou `gear_belt`) · Niveau requis · Empilable (NON) · **Bonus de stat : AUCUN**. Intégration Bot : `!equiper <ID> dos` (BAG/HRN) ou `!equiper <ID> ceinture` (BELT).

## 5. Index de lot (obligatoire, dernier fichier livré)

Chaque lot livre `_index_<categorie>.md` sur le modèle de `_index_armures_tete.md` : couverture n/100, convention ID, grille de valeurs, puis une table par sous-dossier (ID | Nom | Tier | Source principale), le **décompte racial**, et les sections `[REF_A_CONFIRMER]` et `[QUESTIONS_LOT]`.

## 6. Checklist de validation (l'Architecte recette sur ces points)

1. Compte exact (I-1 : 40/35/15/10 + annexe portage 12 sacs/9 sangles/9 ceintures · I-2 : 13 familles = 100 · I-3 : 25/25/20/20/10) — zéro trou de séquence.
2. Zéro valeur hors grilles §3. Zéro T5 vendable en boutique.
3. Chaque race : ≥3 consommables signature, ≥8 armes affines, ≥3 matériaux territoriaux.
4. Chaque anti-jauge D12 (OXYGEN/HEAT/DOT) couverte par ≥2 potions.
5. Chaque matériau : ≥1 acheteur PNJ existant + ≥1 recette.
6. Junk déplacé dans `deprecated_v1/`, pas supprimé.
7. Aucun fichier maître modifié.
