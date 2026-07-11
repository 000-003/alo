# Table MLD : T_NPC_RELATIONS

> **Réponse directe à la question PE** : « comment le programme saurait qu'un joueur X a déjà discuté avec tel PNJ tel nombre de fois, et quelles informations sont à sa disposition ? »
>
> Le lien joueur↔PNJ est une **arête relationnelle creuse** (sparse), **créée à la volée à la première interaction** — **jamais** matérialisée en masse à l'inscription. Le « squelette générique coché à l'inscription » proposé par le PE est écarté au **filtre du Développeur** : 10 000 joueurs × 1 100 PNJ = **11 M de lignes mortes** si on pré-crée tout. On ne crée une ligne que lorsqu'un joueur parle *effectivement* à un PNJ (D-SOC-1).
>
> **Séparation des responsabilités** (deux tables, deux rôles) :
> - **« combien de fois / affinité / sujets abordés »** ⇒ **cette table** (`T_NPC_RELATIONS`).
> - **« quelles informations le joueur a déjà débloquées »** ⇒ **`T_NPC_KNOWLEDGE_UNLOCKS`** (déjà existante — l'enveloppe QI cochée par avatar). On ne duplique pas : on relie.

## 1. Structure SQL

```sql
CREATE TABLE T_NPC_RELATIONS (
    avatar_uuid         UUID NOT NULL REFERENCES T_AVATARS(avatar_uuid) ON DELETE CASCADE,
    npc_id              VARCHAR(50) NOT NULL REFERENCES T_NPC(npc_id),

    -- « combien de fois ont-ils discuté »
    interaction_count   INT NOT NULL DEFAULT 0,
    first_met_at        TIMESTAMP NOT NULL DEFAULT NOW(),
    last_talked_at      TIMESTAMP NOT NULL DEFAULT NOW(),

    -- Relation (moteur d'affinité)
    affinity            INT NOT NULL DEFAULT 0 CHECK (affinity BETWEEN -100 AND 100),
    affinity_tier       VARCHAR(12) NOT NULL DEFAULT 'stranger'
                            CHECK (affinity_tier IN ('hostile','stranger','known','trusted','confidant')),

    -- Sujets déjà abordés (anti-répétition + gating de dialogue)
    topic_flags         JSONB NOT NULL DEFAULT '{}',   -- {"asked_about_war": true, "gave_password": true, ...}

    -- Compteurs de faveur
    gifts_given         INT NOT NULL DEFAULT 0,
    quests_done_for     INT NOT NULL DEFAULT 0,
    last_gift_at        TIMESTAMP,

    PRIMARY KEY (avatar_uuid, npc_id)
);

CREATE INDEX idx_npc_rel_avatar   ON T_NPC_RELATIONS(avatar_uuid);
CREATE INDEX idx_npc_rel_affinity ON T_NPC_RELATIONS(avatar_uuid, affinity_tier);
```

## 2. Grille d'affinité (D-SOC-2)

| Palier `affinity_tier` | Score `affinity` | Débloque |
|---|---|---|
| `hostile` | −100 … −26 | le PNJ refuse le dialogue / prix majorés / quêtes fermées |
| `stranger` | −25 … +9 | K0 (accueil public) uniquement |
| `known` | +10 … +39 | K1 (bavardage), remises marchandes mineures |
| `trusted` | +40 … +74 | conditions K2 « affinité » remplies ; **side-quests d'affinité** ouvertes |
| `confidant` | +75 … +100 | K2 sensibles, side-quests rares, indices vers un K3 (jamais le K3 lui-même — verrou D18/D22) |

- L'affinité monte par : cadeaux (`!offrir`, pondéré par le tier de valeur de l'item, balance sheet), quêtes accomplies pour le PNJ (`quests_done_for`), déblocages payants (K4). Elle descend par : agression, vol détecté, choix de dialogue hostiles.
- **`affinity_tier` est dérivé** de `affinity` — recalculé par trigger à chaque variation (jamais écrit à la main hors GM).

## 3. Comment les **side-quests conditionnées** se branchent

Les « side quests spécifiques aux conditions de haut niveau d'information » (demande PE) **ne vivent pas ici** : elles restent dans `T_QUESTS_DICT`, débloquées par le champ `prerequisites` (JSONB) qui interroge cette table + `T_NPC_KNOWLEDGE_UNLOCKS` :

```jsonc
// T_QUESTS_DICT.prerequisites — nouvelles clés (D-SOC-3)
{
  "npc_id": "NPC_GAT_54",
  "min_affinity_tier": "confidant",     // exige T_NPC_RELATIONS.affinity_tier ≥ confidant
  "qi_unlocked": "QI_GAT_54_K2_03",     // exige une ligne dans T_NPC_KNOWLEDGE_UNLOCKS
  "topic_flag": "asked_about_war"       // exige T_NPC_RELATIONS.topic_flags->>'asked_about_war'
}
```

⇒ Une side-quest « secrète » n'apparaît au `!quest_board` du PNJ que si le joueur a **assez discuté / assez d'affinité / débloqué la bonne info QI**. C'est le mécanisme demandé, sans duplication de données.

## 4. Triggers / Procédures Stockées

| # | Contrat | Comportement |
|---|---|---|
| R1 | **Création paresseuse (D-SOC-1)** | 1er `!parler`/`!demander` sur un couple (avatar, npc) sans ligne ⇒ INSERT `interaction_count = 1`. Sinon UPDATE `interaction_count + 1`, `last_talked_at = NOW()`. **Jamais de pré-création à l'inscription.** |
| R2 | **Palier dérivé** | Toute variation de `affinity` recalcule `affinity_tier` selon la grille §2. `affinity` borné [−100, +100] (clamp, jamais rejet) |
| R3 | **Faveur** | Cadeau ⇒ `gifts_given + 1`, `last_gift_at`, `affinity += valeur_tier(item)` ; quête accomplie ⇒ `quests_done_for + 1`, `affinity += bonus` |
| R4 | **Invisibles exclus** | Aucun PNJ caché `NPC_*_00` ni canonique au repos (`is_canon`, `zone_id NULL`) ne génère de ligne par dialogue ordinaire (cohérent `T_NPC` N4, `!pnj_list`) |
| R5 | **Pare-feu préservé** | Cette table ne stocke **aucun `content` QI** : le pare-feu K3 reste propriété de `T_NPC_KNOWLEDGE` (D18). Ici on ne coche que des *références* débloquées |

## 5. Équivalents Commandes

| Opération | Joueur | GM | IA |
|---|---|---|---|
| Voir la relation (nb interactions, affinité, sujets) | `!relation [NPC_ID\|Nom]` | `!sys_npc_relation [Avatar] [NPC]` | `SYS_NPC_RELATION_GET` |
| Parler (incrémente le compteur) | `!parler`, `!demander` *(existants §20)* | — | `SYS_NPC_RELATION_TOUCH(Avatar_ID, NPC_ID, Δaffinity)` |
| Offrir un cadeau | `!offrir [Item_ID] [NPC_ID]` | — | — |
| Forcer l'affinité | — | `!sys_set_affinity [Avatar] [NPC] [Valeur]` | `SYS_SET_AFFINITY(Avatar_ID, NPC_ID, Value)` |

> **Règle de complétude** : `!relation`, `!offrir`, `!sys_npc_relation`, `!sys_set_affinity`, `SYS_NPC_RELATION_GET`, `SYS_NPC_RELATION_TOUCH`, `SYS_SET_AFFINITY` à propager dans `whatsapp_commands_list.md` (§20) et `ai_orchestrator_commands.md` (§2). Fait à la clôture de l'étape 43.
