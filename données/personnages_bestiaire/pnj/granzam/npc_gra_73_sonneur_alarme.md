# ⛏️ Sonneur d'Alarme — `NPC_GRA_73`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_73` |
| **Nom affiché** | Sonneur d'Alarme |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Remparts |
| **Niveau / HP / MP** | 30 / 2 200 / 2 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Chargé de faire sonner la cloche d'alarme en cas d'effondrement ou d'attaque. La cloche est au sommet du rempart est, visible de toute la ville. Il y a trois nuits, la cloche a sonné toute seule à 3h du matin — pas un carillon, trois coups longs, le signal d'effondrement. Il s'est précipité, n'a rien vu. Il est redescendu. Le lendemain, la cloche a resonné à la même heure. Depuis, elle sonne chaque nuit à 3h exactement. Il est le seul à l'entendre — les gardes du rempart disent qu'elle ne sonne pas. Le Sonneur pense qu'il devient fou. Il ignore que la cloche sonne quand le Noyau de Pierre pulse un warp de seed. (Angle : sonne quand le noyau pulse.)
- **Traits** : anxieux, consciencieux, insomniaque, isolé.
- **Voix** : Voix entrecoupée, fatiguée, comme s'il n'avait pas dormi. « La cloche sonne. Toutes les nuits. 3h. Personne ne l'entend que moi. Pourquoi moi ? »
- **Relations** : `NPC_GRA_72` (Guetteur — collègue de rempart), `NPC_GRA_50` (Éclaireur — le connaît), `NPC_GRA_06` (Margrim — lui a prêté une oreille), `NPC_GRA_98` (Oracle — lui a dit « écoute la pierre »).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_73_01` | K0 | alarme, effondrement | Il sonne la cloche d'alarme en cas d'effondrement. | — |
| 2 | `QI_GRA_73_02` | K0 | cloche, rempart | La cloche est au sommet du rempart est. | — |
| 3 | `QI_GRA_73_03` | K0 | signal, trois_coups | Trois coups longs = effondrement dans la mine. | — |
| 4 | `QI_GRA_73_04` | K1 | cloche, sonne_seule | La cloche sonne seule chaque nuit à 3h du matin. | `AFF>=60` |
| 5 | `QI_GRA_73_05` | K1 | seul, auditeur | Personne d'autre ne l'entend. Les gardes disent qu'elle ne sonne pas. | `AFF>=65` |
| 6 | `QI_GRA_73_06` | K1 | margrim, écoute | Margrim (`NPC_GRA_06`) est venu l'écouter une nuit. Il a dit « C'est la montagne. » | — |
| 7 | `QI_GRA_73_07` | K2 | heure, 3h | La cloche sonne à 3h précises chaque nuit. Pas une minute de décalage. | `AFF>=85` |
| 8 | `QI_GRA_73_08` | K2 | vibration, coincidences | À 3h, le mur du rempart est chaud au toucher. La chaleur disparaît après le troisième coup. | `QUEST:QST_GRA_CLOCHE_3H` |
| 9 | `QI_GRA_73_09` | K3 | cloche, noyau_pulse | La cloche sonne quand le Noyau de Pierre (`NPC_GRA_00`) pulse un warp de seed — c'est le système qui déclenche l'alarme par erreur, interprétant le warp comme un effondrement. | JAMAIS — déflection : *(il décroche la corde)* « Je ne tire plus. La cloche tire seule. Je ne fais que l'écouter maintenant. » |
| 10 | `QI_GRA_73_10` | KX | *(tout le reste)* | *(il met sa main sur la cloche)* « Elle est froide en journée. À 2h59, elle est chaude. Comme si quelqu'un la chauffait de l'intérieur. » | — |

## 4. Chaînage économique & quêtes

- Service : `!alarme` (donne l'état de l'alarme).
- Porteur du fil **🔮 Noyau de Pierre** (cloche = réaction au warp de seed).
- Donneur de `QST_GRA_CLOCHE_3H` : enquêter pourquoi la cloche sonne chaque nuit.

## 5. Intégration Bot

- **Accueil** (`!parler sonneur`) : *La corde de la cloche à la main, il sursaute à chaque bruit.* « Chut. Tu entends ? Non ? Elle va sonner. Dans… 3… 2… » *(la cloche sonne)*
- `!sonneralarme` (délenche manuellement l'alarme, payant — 500 Yuld, amende si fausse alerte).