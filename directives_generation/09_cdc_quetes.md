# 📜 CDC-QST-01 — Quêtes : 3 par localité + dettes (1 lot de 34) — D43

> **Destinataire** : modèle générateur délégué — **le plus exigeant des CDC : ne le confier qu'après réussite d'un lot items ou boutiques**. Règles d'or **D37** applicables.
> **Gabarit de référence prouvé** : `game_design/quetes/qst_neu_lessive_01.md` (« La Tache qui Revient ») — 6 sections, embranchements, invariant fil rouge. Copier sa structure EXACTEMENT.
> **Dépendances** : rosters PNJ des villes concernées (donneurs) + fils rouges de `_index_pnj.md`.

---

## 1. Périmètre (fermé) — 34 quêtes

| # | Contenu | ID |
|---|---|---|
| 1 | **Dette prioritaire** : la quête promise du lien Helka (lot 2.4) | `QST_SYL_HELKA_01` |
| 2-34 | **3 quêtes × 11 localités** (Alne, Gattan, Voulg, Swilvane + les 7 villes au fil de leur livraison) | `QST_<SEC>_<SLUG>_01` |

**Les 3 quêtes de chaque localité** (types imposés) :

| Type | Rôle | Contraintes |
|---|---|---|
| **A — Amorce de fil rouge** | équivalent local de « La Tache qui Revient » | part d'une corvée banale, effleure UN fil rouge de la ville (table des fils dans `_index_pnj.md`), embranchements A/B/C obligatoires |
| **B — Chaîne économique** | met en mouvement la boucle drop→matériau→craft→boutique | cite ≥3 entités des lots livrés (`MOB_*`, `MAT_*`, `SHOP_*`/marchand) ; récompense = recette ou accès marchand, pas seulement des Yrds |
| **C — Répétable (daily)** | contenu quotidien du QUEST_GIVER dédié (Mortifer `NPC_GAT_05`, Reylen `NPC_SWI_09`…) | `is_repeatable = VRAI`, mono-étape ou bi-étape, récompense fixe modeste |

Aucune autre quête. Une idée hors périmètre → `[QUESTIONS_LOT]`.

## 2. Invariants narratifs (non négociables)

1. **Une quête ne résout JAMAIS un fil rouge** (invariant D20, écrit en toutes lettres dans la fiche modèle) : elle pose une preuve et distribue un indice K2 ; la résolution appartient à l'orchestrateur.
2. **Le donneur est un QUEST_GIVER existant** du roster, cité par ID, et la quête référence le slot QI qu'elle débloque (`QI_<VILLE>_<NN>_<n>` réel de sa fiche).
3. Fil méta : **interdit**. Aucune quête ne touche aux fils méta (verrous D22/D26/D29…) — réservés orchestrateur.
4. Type A : les 3 embranchements ont des conséquences **divergentes et persistantes** (titre, flag orchestrateur, ouverture de quête future nommée `QST_*` même si non fichée — la nommer la réserve).
5. Miroirs inter-villes bienvenus (la lessive d'Alne ↔ corvée de Gattan) : 1 écho structurel max par quête.

## 3. Grilles de récompenses (fermées)

| Tier de quête | Niveau conseillé | Yrds (final) | Autres |
|---|---|---|---|
| T1 | 5-15 | 100-600 | titre local, accès QI, réputation |
| T2 | 15-30 | 800-2 500 | + 1 item T2 max OU recette |
| T3 | 30-42 | 3 000-8 000 | + 1 item T3 max, jamais T4+ |
| Daily (C) | selon ville | 80-250 fixes | jetons/réputation cumulables |

Récompenses d'étapes ≤20% du total. Titres : `TITLE_<SEC>_<SLUG>` (nouveaux autorisés, listés dans l'index). Items : IDs existants uniquement, sinon `[BESOIN_ITEM]`.

## 4. Section commandes (rappel de complétude)

Reprendre la table §6 du gabarit : `!quest_accept` / `!quest_log` / `!sys_quest_give` / `SYS_QUEST_HOOK` existent. Toute mécanique d'étape exotique (comme `!laundry`) → `[BESOIN_COMMANDE]` + l'étape doit rester jouable par commande existante en attendant (l'Architecte propage à la recette).

## 5. Checklist de recette

1. 34 fiches, `QST_SYL_HELKA_01` livrée EN PREMIER (dette lot 2.4).
2. Sondage 5 quêtes : donneur réel, slot QI réel, fil rouge effleuré-jamais-résolu, embranchements divergents.
3. Zéro récompense hors grille ; zéro item inexistant ; zéro contact avec un fil méta.
4. Index `_index_quetes.md` : ID | Ville | Type A/B/C | Donneur | Fil touché | Statut ; annexes `[BESOIN_*]`.
5. Les `QST_*` « réservées » par les embranchements sont listées dans l'index comme backlog nommé.
