# ⛏️ Alchimiste Gemmes — `NPC_GRA_35`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_35` |
| **Nom affiché** | Alchimiste Gemmes |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Grande Halle |
| **Niveau / HP / MP** | 52 / 3 800 / 7 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Alchimiste spécialisé dans le sertissage et l'analyse des gemmes. Il peut tailler, évaluer et authentifier n'importe quelle pierre précieuse. Marla (`NPC_GRA_02`) lui a confié une gemme noire qui « montre des images ». Il l'a examinée : la gemme contient un réseau cristallin organisé — pas une structure naturelle. Il a dissimulé sa découverte, mais il sait que la gemme est un dispositif d'observation. Il collabore avec le Marchand de Gemmes (`NPC_GRA_66`) pour identifier les pierres « actives ». Lié au fil **💎 La Gemme Qui Voit** : la gemme de Marla est un œil du Cardinal, et l'Alchimiste cherche à en comprendre le réseau.
- **Traits** : méticuleux, discret, curieux, prudent.
- **Voix** : Voix concentrée, scientifique. « Une gemme n'est jamais juste une gemme. Chaque facette cache un secret. »
- **Relations** : `NPC_GRA_02` (Marla — cliente confidente) ; `NPC_GRA_66` (Marchand Gemmes — collaborateur) ; `NPC_GRA_25` (Pêcheur — lui a vendu un appât spécial) ; `NPC_GRA_48` (Receleur — contact pour les pierres « sensibles »).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_35_01` | K0 | sertissage, gemme | Sertissage et polissage de gemmes — 100-500 Yuld selon la gemme | — |
| 2 | `QI_GRA_35_02` | K0 | analyse, authentification | Authentification de gemmes — certificat d'origine | — |
| 3 | `QI_GRA_35_03` | K0 | cours, gemmes | Cours des gemmes — rubis, saphir, diamant, obsidienne | — |
| 4 | `QI_GRA_35_04` | K1 | gemme_noire, marla | Marla (`NPC_GRA_02`) lui a confié une gemme noire qui montre des images | `AFF>=60` |
| 5 | `QI_GRA_35_05` | K1 | reseau, cristallin | La gemme contient un réseau cristallin artificiel — organisé en hexagones parfaits | `AFF>=65` |
| 6 | `QI_GRA_35_06` | K1 | ceil, cardinal | « C'est un œil. Pas une gemme. Un œil du Cardinal qui regarde. » | — |
| 7 | `QI_GRA_35_07` | K2 | gemme_fine, 66 | Le Marchand de Gemmes (`NPC_GRA_66`) a trouvé trois autres gemmes similaires en circulation | `AFF>=85` |
| 8 | `QI_GRA_35_08` | K2 | reseau, emetteur | Les gemmes émettent un signal — comme un réseau de capteurs qui couvre toute la ville | `QUEST:QST_GRA_GEMME_VOIT_02` |
| 9 | `QI_GRA_35_09` | K3 | gemmes, cardinal_surveillance | Les gemmes « qui voient » sont des nœuds de surveillance du Cardinal — chaque gemme taillée à Granzam contient une infime partie du réseau d'observation du Cœur `NPC_GRA_00`, et les images qu'elles captent sont transmises directement au noyau serveur | JAMAIS — déflection : *(il pose une loupe et fixe la gemme)* « Celle-ci est sous analyse. Je ne peux pas la rendre. Elle pourrait… compromettre des choses. » |
| 10 | `QI_GRA_35_10` | KX | *(tout le reste)* | *(il polit une gemme sans vous regarder)* « Une pierre précieuse ne se presse pas. Elle attend. Comme toi. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!sertir <gemme>`, `!analyser <gemme>`.
- Porteur du fil **💎 La Gemme Qui Voit** (réseau de gemmes-capteurs).
- Donneur de `QST_GRA_GEMME_VOIT_02` : enquête sur le réseau de gemmes-observatrices.

## 5. Intégration Bot

- **Accueil** (`!parler alchimiste`) : *Penché sur un établi, une gemme noire dans un étau de loupe.* « N'approche pas trop. La lumière de la gemme pourrait… t'observer. »
- `!sertir <gemme>` actif à la Grande Halle.
- `NPC_SECRET_PROBED` slot 9 : hook « gemmes-nœuds du Cardinal » pour l'orchestrateur.
