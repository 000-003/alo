# Table MLD : T_MARRIAGES (+ T_MARRIAGE_ASSETS)

> Contrat de mariage. Règles PE **non négociables** : **homme + femme uniquement**, **un seul mariage actif** par individu, séparation possible où **chacun repart avec ce qu'il a apporté**. Supersede la prose de `system_mechanics/marriage_housing_system.md` §1 (D-SOC-8), qui autorisait deux joueurs quelconques sans provenance de séparation.

## 1. Structure SQL

```sql
CREATE TABLE T_MARRIAGES (
    marriage_uuid       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    spouse_male_uuid    UUID NOT NULL REFERENCES T_AVATARS(avatar_uuid),
    spouse_female_uuid  UUID NOT NULL REFERENCES T_AVATARS(avatar_uuid),
    status              VARCHAR(10) NOT NULL DEFAULT 'active'
                            CHECK (status IN ('active','divorced')),
    married_at          TIMESTAMP NOT NULL DEFAULT NOW(),
    divorced_at         TIMESTAMP,
    ceremony_zone_id    VARCHAR(50) REFERENCES T_ZONES(zone_id),

    -- Prérequis & biens communs
    home_property_uuid  UUID NOT NULL REFERENCES T_PROPERTIES(property_uuid), -- foyer conjugal (prérequis PE)
    joint_vault_id      UUID REFERENCES T_BANK_VAULTS(vault_id),             -- coffre commun (owner_type='marriage')

    -- Cadeau système à la cérémonie (tiré selon la moyenne de niveau)
    avg_level_at_wedding INT,
    wedding_gift_item_id VARCHAR(50),

    CHECK (spouse_male_uuid <> spouse_female_uuid)
);

-- Monogamie : un seul mariage ACTIF par individu (D-SOC-9)
CREATE UNIQUE INDEX idx_marriage_male_active
    ON T_MARRIAGES(spouse_male_uuid)   WHERE status = 'active';
CREATE UNIQUE INDEX idx_marriage_female_active
    ON T_MARRIAGES(spouse_female_uuid) WHERE status = 'active';

-- Registre de provenance : « qui a apporté quoi » (pour la séparation)
CREATE TABLE T_MARRIAGE_ASSETS (
    marriage_uuid       UUID NOT NULL REFERENCES T_MARRIAGES(marriage_uuid) ON DELETE CASCADE,
    contributor_uuid    UUID NOT NULL REFERENCES T_AVATARS(avatar_uuid),
    asset_type          VARCHAR(6) NOT NULL CHECK (asset_type IN ('yrds','item')),
    item_id             VARCHAR(50),                 -- NULL si asset_type='yrds'
    qty                 BIGINT NOT NULL CHECK (qty > 0),  -- montant Yrds OU quantité d'items
    is_joint_earned     BOOLEAN NOT NULL DEFAULT FALSE,   -- TRUE = gagné en commun (split 50/50 au divorce)
    contributed_at      TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_marr_assets ON T_MARRIAGE_ASSETS(marriage_uuid, contributor_uuid);
```

## 2. Bonus de mariage (avantages PE)

| Avantage PE | Implémentation |
|---|---|
| **Inventaire commun (doublé)** | `joint_vault_id` = coffre `owner_type='marriage'` avec `max_slots` **doublé** (2 × le coffre personnel), partagé entre les deux ; `!joint_bank` (dépôt/retrait), accès égal |
| **Solde commun** | Le solde du coffre conjugal (`T_BANK_VAULTS.yrds_stored`) est **dépensable par les deux** via `!joint_pay` ; chaque mouvement journalisé dans `T_MARRIAGE_ASSETS` (provenance) |
| **Statut de l'autre en temps réel (PV/PM…)** | `!partner_status` : lit `T_AVATARS` du conjoint (hp/mp/stamina/level/zone) en direct, sans coût, quelle que soit la zone |
| **Cadeau système aléatoire** | À la cérémonie, `SYS_GENERATE_WEDDING_GIFT` tire un item (artefact/arme/sort) dont le **tier dépend de `avg_level_at_wedding`** (moyenne des deux niveaux) ; déposé au coffre conjugal |

Bonus conservés du legacy : télépathie `!whisper_partner`, localisation `!partner_locate`, +10 % synergie de dégâts en même Party (Combo Conjugal).

## 3. Prérequis (M3) & Séparation (M5)

**Prérequis de mariage** (tous requis) :
1. Les deux fiancés **Niveau ≥ 15**.
2. Genres **complémentaires** : exactement un `male` + un `female` (le `neutral` ne peut pas se marier — D-SOC-10).
3. Chacun possède un **Anneau d'Engagement** (`MSC_ENG_001`, item de service bijoutier, sans stat, consommé à la cérémonie).
4. **Au moins un foyer** : l'un des deux détient une propriété active (`T_PROPERTIES`, own ou rent à jour) ⇒ `home_property_uuid` (prérequis PE, M3 ↔ `T_PROPERTIES` P5).

**Séparation** (`!divorce`) — « chacun repart avec ce qu'il a apporté » :
- Les apports **individuels** (`T_MARRIAGE_ASSETS` où `is_joint_earned = FALSE`) sont **rendus à leur contributeur** (Yrds crédités, items rendus / mis en `T_MAIL` si inventaire plein).
- Les biens **acquis en commun** (`is_joint_earned = TRUE` : cadeau système, butin déposé sans provenance individuelle) sont **partagés 50/50**.
- Le **foyer** reste au propriétaire d'origine (celui dont la propriété a servi de prérequis).
- Cooldown **30 jours** avant un nouveau mariage ; `status = 'divorced'`, `divorced_at = NOW()`, le coffre conjugal est vidé puis clos.

## 4. Triggers / Procédures Stockées

| # | Contrat | Comportement |
|---|---|---|
| M1 | **Homme + femme (D-SOC-10)** | INSERT rejeté si `spouse_male_uuid.gender ≠ 'male'` OU `spouse_female_uuid.gender ≠ 'female'`. Un `neutral` ne peut occuper ni slot |
| M2 | **Monogamie** | Les deux index partiels garantissent au plus 1 mariage `active` par avatar ; `!propose` refusé si l'un des deux est déjà marié |
| M3 | **Prérequis** | INSERT rejeté si niveau < 15, anneau manquant, ou aucun foyer (`home_property_uuid` obligatoire, NOT NULL) |
| M4 | **Coffre conjugal** | À l'activation : création `T_BANK_VAULTS(owner_type='marriage', owner_id=marriage_uuid)`, `max_slots` doublé, accès aux deux conjoints ; `access_level='all_members'` restreint au couple |
| M5 | **Règlement de séparation** | `!divorce` déclenche `SYS_DIVORCE_SETTLE` : restitution par provenance (`is_joint_earned=FALSE`) + split 50/50 du commun, dans une **transaction atomique** ; puis `status='divorced'`, cooldown 30 j |
| M6 | **Cadeau de noces** | À la cérémonie, `SYS_GENERATE_WEDDING_GIFT(marriage_uuid, avg_level)` tire l'item, l'enregistre `is_joint_earned=TRUE` dans `T_MARRIAGE_ASSETS`, le dépose au coffre conjugal |
| M7 | **Provenance des dépôts** | Tout `!joint_bank` dépôt écrit une ligne `T_MARRIAGE_ASSETS` attribuée au déposant (`is_joint_earned=FALSE`) ; tout gain crédité automatiquement au couple ⇒ `is_joint_earned=TRUE` |

## 5. Équivalents Commandes

| Opération | Joueur | GM | IA |
|---|---|---|---|
| Demander / accepter | `!propose [Num_WhatsApp]`, `!accept_proposal` | `!sys_marry [Avatar_A] [Avatar_B]` | `SYS_GENERATE_CEREMONY` *(existant)*, `SYS_GENERATE_WEDDING_GIFT` |
| Coffre / solde commun | `!joint_bank`, `!joint_pay [Montant]` | — | — |
| Statut / localisation / message | `!partner_status`, `!partner_locate`, `!whisper_partner [Msg]` | — | — |
| Divorcer | `!divorce` | `!sys_divorce [Marriage_ID]` | `SYS_DIVORCE_SETTLE` |

> **Règle de complétude** : `!joint_bank`, `!joint_pay`, `!partner_status`, `!sys_marry`, `!sys_divorce`, `SYS_GENERATE_WEDDING_GIFT`, `SYS_DIVORCE_SETTLE` à propager (§15 WhatsApp / §10 orchestrateur). `!partner_bank` (legacy) est **renommé `!joint_bank`** ; l'ancien alias est conservé en redirection.
