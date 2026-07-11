# Maître de Guilde Aldric — `NPC_ALN_100`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_ALN_100` |
| **Nom affiché** | Maître de Guilde Aldric |
| **Race** | Humain (Neutre) |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_NEU_CAP_001` — Alne, Hall de la Guilde |
| **Niveau / HP / MP** | 50 / 5000 / 500 |
| **`qi_budget` / `is_essential`** | 15 / VRAI |

## 2. Bio & Personnalité

- **Bio** : Ancien aventurier des premières migrations vers ALfheim, Aldric a fondé le premier repère de guilde à Alne pour encadrer les nouveaux venus. Il connaît toutes les races et toutes les routes, et sert d'intermédiaire entre les joueurs et l'administration de la ville.
- **Traits** : Paternel, voix grave, regard perçant. Parle lentement mais avec autorité.
- **Voix** : « Bienvenue à Alne, voyageur. Si tu cherches à former une guilde ou à rejoindre une compagnie, tu es au bon endroit. »
- **Relations** : Greffière Selma `NPC_ALN_103` (sa nièce, tient les registres) ; Commandeure Silène `NPC_ALN_09` (ancienne camarade d'armes) ; Doyen Aldemar `NPC_ALN_99` (consultant occasionnel).

## 3. Services

- Présentation du système de guildes
- Orientation des nouveaux joueurs
- Validation des noms de guilde
- Accès au Hall de Guilde (quartier général)

## 4. Quantité Informationnelle (budget 15)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_ALN_100_01` | K0 | guilde, création | Pour créer une guilde, il faut être au moins niveau 10 et rassembler 5 signatures. | — |
| 2 | `QI_ALN_100_02` | K0 | guilde, avantages | Les guildes débloquent un chat privé, un coffre commun et des bonus d'expérience en groupe. | — |
| 3 | `QI_ALN_100_03` | K1 | guilde, quartier général | Le QG de guilde peut être amélioré jusqu'au niveau 5, débloquant des services comme l'atelier d'artisanat et la salle des trophées. | — |
| 4 | `QI_ALN_100_04` | K2 | guilde, alliance | Les guildes de niveau 15+ peuvent former des alliances temporaires pour les raids interraciaux. | AFF>=60+QUEST:QST_GUILD_ALLIANCE_01 |
