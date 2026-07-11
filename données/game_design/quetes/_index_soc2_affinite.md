# Index de lot — SOC-2 · Side-quests d'affinité

> **Lot CDC-SOC-01 §3 (SOC-2)** — Générateur délégué D37. Quêtes `side` **conditionnées par la relation joueur↔PNJ** : elles n'apparaissent au `!quest_board` du donneur **que** si le prérequis relationnel est rempli (`min_affinity_tier ≥ trusted`/`confidant` et/ou `qi_unlocked` et/ou `topic_flag`), cf. `T_QUESTS_DICT` Q4 (D-SOC-3) et `T_NPC_RELATIONS` §3.
>
> **Périmètre respecté** : aucun fichier maître modifié. Ce fichier est un index **de lot séparé** — il ne touche pas `_index_quetes.md` global (réconciliation par l'orchestrateur). Toutes les fiches vivent dans `données/game_design/quetes/qst_<ville>_aff_<nn>_<slug>.md`.
>
> **Garde-fous** : chaque quête reste au niveau K1/K2 de la faveur personnelle ; **aucune ne résout un fil rouge** (CDC-QST-01 D43) ni **n'expose un secret K3** (verrou D18). Chaque fiche liste explicitement le K3 / les chaînes fil-rouge qu'elle **n'approche pas**.

## Tableau récapitulatif (22 quêtes ≥ 20 requises)

| QST_ID | Titre | Ville | Donneur (vérifié) | Condition de déblocage | Récompense |
|---|---|---|---|---|---|
| `QST_ALN_AFF_01` | Le Septième Doigt | Alne | `NPC_ALN_53` Usurière Sept-Doigts | trusted + `QI_ALN_53_04` + flag `asked_about_fingers` | 1 200 XP · 900 ¥ · info `QI_ALN_53_05` · `[BESOIN_ITEM]` gage |
| `QST_ALN_AFF_02` | La Vision Qui Revient | Alne | `NPC_ALN_98` Voyante Isilde | confidant + `QI_ALN_98_05` | 1 500 XP · 1 000 ¥ · info `QI_ALN_98_06` · `[BESOIN_TITRE]` |
| `QST_SWI_AFF_01` | Les Ailes Qu'on Ne Rend Pas | Swilvane | `NPC_SWI_02` Elowen la Faucheuse | confidant + `QI_SWI_02_04` | 5 000 XP · 4 000 ¥ · info `QI_SWI_02_05` · `[BESOIN_ITEM]` dague |
| `QST_SWI_AFF_02` | La Rumeur Qu'on Ne Vend Pas | Swilvane | `NPC_SWI_48` Informateur Murk | trusted + `QI_SWI_48_04` + flag `asked_about_silent_contact` | 500 XP · 400 ¥ · info `QI_SWI_48_05` |
| `QST_VOU_AFF_01` | Le Pain de la Cellule Sept | Voulg | `NPC_VOU_26` Prisonnier Tyn | trusted + `QI_VOU_26_04` | 800 XP · 600 ¥ · info `QI_VOU_26_05` |
| `QST_VOU_AFF_02` | Une Heure Sans Feu | Voulg | `NPC_VOU_05` Vulcan le Triste | trusted + `QI_VOU_05_04` | 1 800 XP · 1 200 ¥ · info `QI_VOU_05_06` · `[BESOIN_ITEM]` cendre |
| `QST_GAT_AFF_01` | La Lettre de la Grand-Mère | Gattan | `NPC_GAT_54` Helka la Brasseuse | confidant + `QI_GAT_54_05` | 900 XP · 700 ¥ · info `QI_GAT_54_06` · recette Bière de cendre |
| `QST_GAT_AFF_02` | Le Tic de l'Institutrice | Gattan | `NPC_GAT_98` Prynne | trusted + `QI_GAT_98_04` + flag `asked_about_lost_student` | 1 200 XP · 900 ¥ · info `QI_GAT_98_05` |
| `QST_FRE_AFF_01` | La Cage Couverte | Freelia | `NPC_FRE_37` Braconnier Banni | confidant + `QI_FRE_37_05` | 3 000 XP · 2 500 ¥ · info `QI_FRE_37_06` · `[BESOIN_ITEM]` pelage |
| `QST_FRE_AFF_02` | La Larme Retenue | Freelia | `NPC_FRE_29` Pleureuse de la Colline | trusted + `QI_FRE_29_04` | 1 000 XP · 800 ¥ · info `QI_FRE_29_05` |
| `QST_UND_AFF_01` | Le Mot Qui Brûle | Archipel d'Écume | `NPC_UND_11` Morgane la Somnambule | confidant + `QI_UND_11_04` | 600 XP · 450 ¥ · info `QI_UND_11_05` |
| `QST_UND_AFF_02` | Chambre Sept | Archipel d'Écume | `NPC_UND_62` Apprenti Tynn | trusted + `QI_UND_62_04` | 500 XP · 400 ¥ · info `QI_UND_62_05` |
| `QST_LIO_AFF_01` | La Chanson Qu'on Laisse au Lac | Lioda | `NPC_LIO_65` Vieux Ménestrel | trusted + `QI_LIO_65_04` | 500 XP · 400 ¥ · info `QI_LIO_65_05` |
| `QST_LIO_AFF_02` | La Corde Qui Chante | Lioda | `NPC_LIO_01` Luthière Cordelia | confidant + `QI_LIO_01_05` | 3 000 XP · 2 500 ¥ · info `QI_LIO_01_06` · `[BESOIN_ITEM]` corde |
| `QST_DUS_AFF_01` | Les Élèves Qui Voient à Travers | Duskarn | `NPC_DUS_05` Gardienne Lilith | confidant + `QI_DUS_05_04` | 3 000 XP · 2 500 ¥ · info `QI_DUS_05_06` |
| `QST_DUS_AFF_02` | La Carte Brûlée | Duskarn | `NPC_DUS_65` Vieux Guetteur | trusted + `QI_DUS_65_04` | 500 XP · 400 ¥ · info `QI_DUS_65_05` |
| `QST_GRA_AFF_01` | Le Chemin Dans Ma Tête | Granzam | `NPC_GRA_65` Vieux Mineur | trusted + `QI_GRA_65_04` | 2 500 XP · 2 000 ¥ · info `QI_GRA_65_06` · `[BESOIN_ITEM]` pioche |
| `QST_GRA_AFF_02` | La Gemme Qui Reconnaît | Granzam | `NPC_GRA_05` Prospectrice Helga | confidant + `QI_GRA_05_04` | 3 000 XP · 2 500 ¥ · info `QI_GRA_05_08` |
| `QST_BRO_AFF_01` | Le Prix du Silence | Brokkheim | `NPC_BRO_55` Vétéran Guerres | confidant + `QI_BRO_55_04` | 3 000 XP · 2 500 ¥ · info `QI_BRO_55_08` · `[BESOIN_TITRE]` |
| `QST_BRO_AFF_02` | La Bulle Noire | Brokkheim | `NPC_BRO_53` Souffleur Verre | trusted + `QI_BRO_53_04` | 500 XP · 400 ¥ · info `QI_BRO_53_06` |
| `QST_PEN_AFF_01` | Mettre au Repos | Penwether | `NPC_PEN_05` Fossoyeur Grim | confidant + `QI_PEN_05_04` | 4 500 XP · 3 500 ¥ · `ITEM_CODE_FRAGMENT`×1 · info `QI_PEN_05_05` |
| `QST_PEN_AFF_02` | Le Nom Qu'il a Rendu | Penwether | `NPC_PEN_06` Archiviste Sans Nom | confidant + `QI_PEN_06_04` | 5 000 XP · 4 000 ¥ · `ITEM_CODE_FRAGMENT`×1 · info `QI_PEN_06_05` |

## Couverture par ville

| Ville | Préfixe | Quêtes |
|---|---|---|
| Alne | ALN | 2 |
| Swilvane | SWI | 2 |
| Voulg | VOU | 2 |
| Gattan | GAT | 2 |
| Freelia | FRE | 2 |
| Archipel d'Écume (Undine) | UND | 2 |
| Lioda | LIO | 2 |
| Duskarn | DUS | 2 |
| Granzam | GRA | 2 |
| Brokkheim | BRO | 2 |
| Penwether | PEN | 2 |
| **Total** | | **22** |

## Conditions relationnelles employées (cœur du lot)

- **`min_affinity_tier: confidant`** (11 quêtes — les plus intimes/rares) : ALN_02, SWI_01, GAT_01, FRE_01, UND_01, LIO_02, DUS_01, GRA_02, BRO_01, PEN_01, PEN_02.
- **`min_affinity_tier: trusted`** (11 quêtes) : ALN_01, SWI_02, VOU_01, VOU_02, GAT_02, FRE_02, UND_02, LIO_01, DUS_02, GRA_01, BRO_02.
- **`qi_unlocked`** : les 22 quêtes exigent le déblocage d'une QI **K1/K2 existante et réelle** du donneur (jamais un K3). C'est le levier « haut niveau d'information ».
- **`topic_flag`** (3 quêtes, en surcondition) : `asked_about_fingers` (ALN_01), `asked_about_silent_contact` (SWI_02), `asked_about_lost_student` (GAT_02).
- **Récompense « couche d'info supplémentaire »** : les 22 quêtes débloquent en récompense une QI K1/K2 additionnelle du donneur (mécanique d'affinité auto-renforçante — matche « accès à une couche d'info supplémentaire »).

## Conformité récompenses (balance sheet v2.0)

- Toutes les récompenses XP/Yrds **dépassent le plancher daily** (100-400 XP / 100-400 ¥) et sont calées sur le palier de niveau du donneur (revenu/heure PvE solo). Les side-quests de PNJ bas niveau (lvl 8-15) donnent 500-600 XP ; les PNJ élevés (lvl 55-72) jusqu'à 5 000 XP / 4 000 ¥.
- `ITEM_CODE_FRAGMENT` (PEN_01, PEN_02) = item **réel** référencé sur la fiche `NPC_PEN_05` — aucun ID inventé.
- Les items/titres neufs sont **flaggés** ci-dessous, jamais matérialisés (protocole D37).

## `[BESOIN_*]` — dépendances à arbitrer par l'orchestrateur

### `[BESOIN_ITEM]` — items de récompense/quête à créer (aucun ID inventé, description fournie)
- **`GAGE_SEPT_DOIGTS`** (ALN_01) — babiole-gage personnelle, item de service `MSC` lié, sans stat.
- **Relique cendre du village frontalier** (VOU_02) — `MSC` liée, sans stat (souvenir de rite).
- **`DAGUE_APPRENTIE_ELOWEN`** (SWI_01) — `WPN_DAG` T3 liée, invendable (dague de deuil).
- **Pelage hors registre** (FRE_01) — `MAT_CUI` rare non catalogué (matériau de valeur, cohérence écologique Cait Sith).
- **Corde qui ne casse jamais** (LIO_02) — `MSC`/matériau d'artisanat rare lié (fibre de Cordelia).
- **Pioche du doyen** (GRA_01) — `MSC` outil-relique lié, sans stat (souvenir de mineur).

### `[BESOIN_TITRE]` — titres de récompense (référencent `T_TITLES`, à valider/créer par l'orchestrateur)
- **`TITLE_FILLEUL_FONTAINE`** — « Filleul de la Fontaine » (ALN_02).
- **`TITLE_GARDIEN_SILENCE`** — « Gardien du Silence » (BRO_01).

### `[BESOIN_NPC]`
- **Aucun.** Les 22 donneurs sont des PNJ **réels et vérifiés** dans `données/personnages_bestiaire/pnj/<ville>/`. Aucun ID donneur inventé.

### Notes de raccordement (non bloquantes)
- Objets de quête temporaires (`REFLET_TROUBLE`, `OBJET_SOMNAMBULE`, `LETTRE_GRAND_MERE`, `RELEVE_SISMIQUE`, etc.) = artefacts de progression, pas des items d'inventaire persistant — pas d'ID catalogue requis.
- PNJ-cibles secondaires cités (`NPC_ALN_55`, `NPC_VOU_25`, `NPC_UND_60`, `NPC_LIO_04/24`, `NPC_FRE_27`, `NPC_GRA_92`, `NPC_BRO_56`, `NPC_DUS_50`) sont tous **réels** (vérifiés au listing des dossiers).
- `topic_flag` = clés JSONB de `T_NPC_RELATIONS.topic_flags`, posées par le dialogue — pas des IDs de table maître.
