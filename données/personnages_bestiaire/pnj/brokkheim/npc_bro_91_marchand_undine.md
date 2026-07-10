# 🔨 Marchand Undine — `NPC_BRO_91`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_91` |
| **Nom affiché** | Marchand Undine |
| **Race** | Undine |
| **Rôle** | `MERCHANT` |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Canaux Refroidissement |
| **Niveau / HP / MP** | 20 / 900 / 1000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Undine originaire de l'Archipel. Elle commerce l'eau pure des geysers profonds — une eau qui ne gèle pas, ne bout pas, et cicatrise les brûlures de forge. Elle est liée au Pacte des Eaux, un traité avec les anciens Leprechauns. Angle : Lien Archipel, Pacte des Eaux.
- **Traits** : Fluide, calme, translucide, rire qui évoque des vagues.
- **Voix** : Ondoyante, apaisante. « L'eau de Brokkheim est la plus pure du continent. Elle se souvient du feu originel. »
- **Relations :** `NPC_BRO_25` (pêcheur — commerce l'eau contre du poisson), `NPC_BRO_95` (vétéran — l'eau sert à ses dernières forges), lien diplomatique avec l'Archipel.

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_91_01` | K0 | eau, geysers | Commerce d'eau pure des geysers profonds, 10 Yrds la fiole | — |
| 2 | `QI_BRO_91_02` | K0 | archipel, origine | Originaire de l'Archipel, venue par les routes marchandes | — |
| 3 | `QI_BRO_91_03` | K0 | eau, sacree | Eau bénite par les Prêtres du Feu pour trempe légendaire | — |
| 4 | `QI_BRO_91_04` | K1 | pacte, eaux | Le Pacte des Eaux : traité Undine-Leprechaun, eau contre forge éternelle | `AFF>=55` |
| 5 | `QI_BRO_91_05` | K1 | archipel, message | L'Archipel cherche à rétablir l'équilibre du cycle de l'eau — le Pouls chauffe trop | — |
| 6 | `QI_BRO_91_06` | K1 | canal, fond | Les canaux mènent au cœur de Brokkheim — les Undines peuvent y nager | `AFF>=65` |
| 7 | `QI_BRO_91_07` | K2 | eau, pouls | L'eau des geysers bat comme un cœur — elle est en phase avec le Pouls | `AFF>=80` |
| 8 | `QI_BRO_91_08` | K2 | pacte, original | Le Pacte original mentionne « l'Enclume du Cardinal » — l'Undine a une copie sur parchemin | `AFF>=85+QUEST:QST_BRO_PACTE_EAU` |
| 9 | `QI_BRO_91_09` | K3 | eau, temps | L'eau des geysers profonds n'est pas de l'eau — c'est du temps liquide, du passé condensé. Quand on en boit, on se souvient de forges qui n'ont jamais existé. Le Pacte cache que les Undines sont les gardiennes de la mémoire liquide du serveur | JAMAIS — déflection : *(l'eau autour d'elle se fige en stalactites)* *(Sa voix devient distante)* « L'eau ne se donne pas. Elle se prête. Et elle reprend tout à la fin. N'oublie jamais cela. » |
| 10 | `QI_BRO_91_10` | KX | *(hors sujet)* | « Coule. L'eau coule toujours. Jusqu'à la mer. Jusqu'à la fin. » | — |

## 4. Chaînage économique & quêtes

- **MERCHANT** : `!buy_pure_water` — achat d'eau pure de geysers.
- Hook Pacte Eaux : `QST_BRO_PEAU_01`.

## 5. Intégration Bot

- **Accueil :** *(elle incline la tête, l'eau ruisselle de ses cheveux)* « L'eau t'accueille, étranger. Bois. »