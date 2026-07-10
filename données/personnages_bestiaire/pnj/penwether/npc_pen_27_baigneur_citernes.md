# 🕯️ Baigneur Citernes — `NPC_PEN_27`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_27` |
| **Nom affiché** | Baigneur Citernes |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (Bains des Citernes) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Citernes Antiques |
| **Niveau / HP / MP** | 3 / 200 / 150 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Tient les bains publics dans les Citernes Antiques — une eau tiède, grise, qui sent la pierre mouillée. Il n'a aucun souvenir de son entrée dans les Citernes. Il était déjà là quand il a « ouvert les yeux » pour la première fois. Les clients viennent, se baignent, repartent. Lui ne part jamais. Chaque fois qu'il essaie de sortir, il se retrouve à l'entrée, comme s'il n'avait jamais bougé. Angle : baigneur sans souvenir d'entrée.
- **Traits** : calme résigné, accueillant, fatigue permanente dans le regard.
- **Voix** : douce, lointaine. « Les bains sont chauds aujourd'hui. Comme toujours. Tu veux entrer ? Moi, je ne peux pas sortir. »
- **Relations** : `NPC_PEN_25` (lui vend des anguilles pour décorer les bains) ; `NPC_PEN_26` (lui fournit l'eau) ; `NPC_PEN_28` (lui prépare des potions de relaxation).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_27_01` | K0 | bains, citerne | Bains publics des Citernes Antiques : 10 Yrds l'entrée | — |
| 2 | `QI_PEN_27_02` | K0 | eau, chaude | Eau tiède, grise, sent la pierre — température toujours parfaite | — |
| 3 | `QI_PEN_27_03` | K0 | service, bain | Serviettes, huiles, cabines — service complet | — |
| 4 | `QI_PEN_27_04` | K1 | entree, souvenir | N'a aucun souvenir d'être entré dans les Citernes | — |
| 5 | `QI_PEN_27_05` | K1 | sortie, boucle | Il essaie de sortir — il se retrouve toujours à l'entrée | `AFF>=60` |
| 6 | `QI_PEN_27_06` | K1 | clients, memes | Les clients sont toujours les mêmes — ils reviennent par cycles | `AFF>=65` |
| 7 | `QI_PEN_27_07` | K2 | citerne, boucle temporelle | Les Citernes sont dans une boucle — le temps n'avance pas dans cette zone | `AFF>=80` |
| 8 | `QI_PEN_27_08` | K2 | corps, eau | Son corps ne vieillit pas dans l'eau — il est le même depuis son « réveil » | `AFF>=85` |
| 9 | `QI_PEN_27_09` | K3 | baigneur, gardien | Il n'est pas un Spriggan oublié — il est la copie de sauvegarde du dernier gardien des Citernes, ranimée à chaque boucle par le Cardinal comme sentinelle de l'illusion locale. Il ne peut pas sortir parce qu'il est lié à la zone | JAMAIS — déflection : *(il plonge la main dans l'eau)* « Regarde. Je me vois dedans. Mais c'est pas moi. C'est un autre. Quelqu'un qui me ressemble et qui est resté à la surface. » *(il retire sa main — l'eau ne goutte pas)* |
| 10 | `QI_PEN_27_10` | KX | *(hors sujet)* | « L'eau ne ment pas. Mais elle ne dit pas tout non plus. » | — |

## 4. Chaînage économique & quêtes

- **Merchant** : `!bath_service` (bain aux Citernes).
- Fil **🔮 Ville Fantôme** (boucle temporelle des Citernes).
- Client de `NPC_PEN_25`, `NPC_PEN_26`, `NPC_PEN_28`.

## 5. Intégration Bot

- **Accueil** (`!parler baigneur citernes`) : *(Il ajuste une serviette)* « Les bains sont prêts. Entre. Tout le monde entre. C'est juste la sortie qui est… difficile. » |
- `!bath_service` — service de bain.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « gardien de sauvegarde/lié à la zone » réservé à l'orchestrateur.
