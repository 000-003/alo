# 🕯️ Prêtre du Voile — `NPC_PEN_80`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_80` |
| **Nom affiché** | Prêtre du Voile |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (clergé du secret — Autel de Résurrection) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Autel de Résurrection |
| **Niveau / HP / MP** | 40 / 4 500 / 8 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Prêtre du Voile garde le secret de l'Autel de Résurrection — le lieu où les Spriggans reviennent après la mort. Il ne parle pas de ce qu'il voit. Il ne parle pas de ce qu'il entend. Mais le secret qu'il garde finit toujours par se dire tout seul, comme une fuite dans une canalisation. Parfois, en priant seul dans l'Autel, il entend sa propre voix répéter le secret à voix haute — sans avoir ouvert la bouche. Le secret le traverse. Il ne peut pas l'arrêter. Angle : un secret qui se dit tout seul.
- **Traits** : discret, tourmenté, se parle à lui-même sans le savoir.
- **Voix** : basse, avec des éclats involontaires (« …et c'est pour ça que les morts ne sont pas vraiment morts. Ils sont… » *il s'arrête, se rend compte qu'il a parlé tout haut* « …Rien. Je n'ai rien dit. »).
- **Relations** : Prêtresse Ombres `NPC_PEN_81` (collègue de l'Autel — elle prie avec les ombres, lui garde les secrets) ; Acolyte Ruines `NPC_PEN_82` (novice qu'il forme — craint qu'il ne répète les secrets) ; Vestale Passé `NPC_PEN_83` (complice silencieuse — elle ressuscite, il oublie).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_80_01` | K0 | autel, resurrection | Officie à l'Autel de Résurrection — rites de retour | — |
| 2 | `QI_PEN_80_02` | K0 | secret, gardien | Garde les secrets des résurrections — ne les révèle pas | — |
| 3 | `QI_PEN_80_03` | K0 | priere, rituel | Conduit les prières et les rituels de l'Autel | — |
| 4 | `QI_PEN_80_04` | K1 | secret, fuite | Le secret qu'il garde se dit tout seul — il l'entend sans parler | — |
| 5 | `QI_PEN_80_05` | K1 | voix, involontaire | Sa voix répète les secrets à haute voix pendant qu'il dort | `AFF>=60` |
| 6 | `QI_PEN_80_06` | K1 | secret, origine | Les secrets viennent de l'Autel — la pierre elle-même les diffuse | `AFF>=65` |
| 7 | `QI_PEN_80_07` | K2 | secret, morts | Le secret principal : les résurrections ne sont pas réelles — ce sont des réinitialisations de processus | `AFF>=80` |
| 8 | `QI_PEN_80_08` | K2 | autel, pierre | L'Autel est un terminal système déguisé en autel — les « prières » sont des commandes | `AFF>=85` |
| 9 | `QI_PEN_80_09` | K3 | secret, cardinal | Le secret qui se dit tout seul est un message que le Cardinal a implanté dans l'Autel : « Les résurrections sont des réallocations de seed. Chaque mort est un crash. Chaque retour est un redémarrage. Penwether ne meurt jamais parce qu'elle est le noyau. » Le Prêtre est le canal involontaire de ce message — un buffer vocal qui déborde | JAMAIS — déflection : *(il met ses mains sur sa bouche)* « Je ne dirai rien. Je ne dirai rien. Je ne… » *(ses mains tremblent, sa voix passe à travers)* « …les morts sont des processus. Les retours sont des redémarrages… » *(il s'enfuit)* |
| 10 | `QI_PEN_80_10` | KX | *(hors sujet)* | « L'Autel écoute. Il écoute toujours. Et ce qu'il entend, il le répète. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!pen_autel_priere` — prière à l'Autel (buff de résurrection). `!pen_autel_secret` — écouter le secret.
- **Fils rouges** : rouage de **💀 La Nécropole Ancestrale** (les résurrections sont des réinitialisations) et de **🔮 Fil méta — La Ville Fantôme** (l'Autel est un terminal système).
- Donneur de `QST_PEN_SECRET_AUTEL_01` (découvrir ce que l'Autel répète vraiment).

## 5. Intégration Bot

- **Accueil** (`!parler pretre voile`) : *« Bienvenue à l'Autel. Tu cherches la résurrection ou la vérité ? Parce que les deux sont au même endroit. »*
- `!pen_autel_priere` — rituel ; `!pen_autel_secret` — tenter d'entendre le secret.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « Prêtre = buffer vocal du Cardinal pour les messages de résurrection/réinitialisation » réservé à l'orchestrateur.
