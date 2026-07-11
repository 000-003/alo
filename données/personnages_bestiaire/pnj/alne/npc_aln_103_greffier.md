# Greffière Selma — `NPC_ALN_103`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_ALN_103` |
| **Nom affiché** | Greffière Selma |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_NEU_CAP_001` — Alne, Hall de la Guilde (comptoir d'enregistrement) |
| **Niveau / HP / MP** | 25 / 2000 / 400 |
| **`qi_budget` / `is_essential`** | 10 / VRAI |

## 2. Bio & Personnalité

- **Bio** : Nièce d'Aldric, Selma tient les registres de la guilde avec une rigueur toute gnome. Elle gère les adhésions, les paiements de cotisation et le courrier interne. Son bureau est un océan de parchemins parfaitement classés.
- **Traits** : Méthodique, un peu sévère, mais généreuse avec ceux qui respectent les formulaires.
- **Voix** : « Si tu veux rejoindre une guilde, ou en créer une, c'est ici que ça se passe. J'aurai besoin de ton nom, ta race et une signature. »
- **Relations** : Maître Aldric `NPC_ALN_100` (son oncle) ; Percepteur Molk `NPC_ALN_63` (lui fournit les comptes) ; Notaire Verd `NPC_ALN_62` (vérifie les statuts).

## 3. Services

- Inscription aux guildes
- Création de nouvelle guilde (niveau 10 requis, 5 signatures)
- Consultation de l'annuaire des guildes actives
- Déclaration de perte d'équipement (certificat pour l'assurance)

## 4. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_ALN_103_01` | K0 | enregistrement, guilde | L'enregistrement est gratuit. La cotisation mensuelle est de 200 Yrds par membre. | — |
| 2 | `QI_ALN_103_02` | K0 | annuaire, guildes | Il y a actuellement quelques guildes actives à Alne. La plus ancienne est la Confrérie du Dôme. | — |
| 3 | `QI_ALN_103_03` | K1 | guilde, nom, règles | Le nom de guilde ne peut pas comporter plus de 32 caractères, ni contenir de termes offensants. Aucun doublon n'est accepté. | AFF>=20 |
