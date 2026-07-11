# Quétatrice Élara — `NPC_ALN_102`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_ALN_102` |
| **Nom affiché** | Quétatrice Élara |
| **Race** | Sylphe |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` |
| **Zone** | `ZONE_NEU_CAP_001` — Alne, Hall de la Guilde (tableau des quêtes) |
| **Niveau / HP / MP** | 40 / 4000 / 600 |
| **`qi_budget` / `is_essential`** | 12 / VRAI |

## 2. Bio & Personnalité

- **Bio** : Ancienne éclaireuse sylphe, Élara a parcouru tout ALfheim avant de poser son sac à Alne. Elle rédige et distribue des contrats pour le compte de la guilde : missions d'exploration, contrats de chasse, livraisons et enquêtes. Elle connaît les dangers de chaque route et les bestiaires de chaque territoire.
- **Traits** : Enthousiaste, parle vite, note tout sur des parchemins volants.
- **Voix** : « J'ai justement une mission qui devrait t'intéresser… elle paie bien et le coin est magnifique — enfin, si tu ignores les loups. »
- **Relations** : Maître Aldric `NPC_ALN_100` (son employeur) ; Commandeure Silène `NPC_ALN_09` (lui fournit des rapports de patrouille) ; Cartographe Alba `NPC_ALN_18` (met à jour ses cartes).

## 3. Quêtes Disponibles

| Quête | Niv. Min | Récompense |
|---|---|---|
| `QST_GUILD_HUNT_001` — Première Chasse | 1 | 200 EXP, 100 Yrds |
| `QST_GUILD_DELIVERY_001` — Livraison à Swilvane | 3 | 350 EXP, 150 Yrds |
| `QST_GUILD_EXPLO_001` — Cartographie des Collines | 5 | 500 EXP, 300 Yrds |
| `QST_GUILD_FRIEND_001` — Devenir Membre de Guilde | 10 | 1000 EXP, 500 Yrds, Accès QG |

## 4. Quantité Informationnelle (budget 12)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_ALN_102_01` | K0 | quête, guide | Les quêtes de guilde sont renouvelées chaque semaine. Les membres actifs gagnent des points de réputation. | — |
| 2 | `QI_ALN_102_02` | K1 | chasse, territoire | Les contrats de chasse sont adaptés à ton niveau. Je te conseille les Collines Verdoyantes pour commencer : des sangliers, pas de boss. | AFF>=30 |
| 3 | `QI_ALN_102_03` | K2 | exploration, Yggdrasil | Personne n'est jamais monté tout en haut d'Yggdrasil sans une escorte. Si tu veux tenter le Tronc, prépare-toi à croiser des racines éveillées. | AFF>=60 |
