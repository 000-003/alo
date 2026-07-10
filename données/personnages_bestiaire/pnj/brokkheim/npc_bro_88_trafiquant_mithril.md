# 🔨 Trafiquant Mithril — `NPC_BRO_88`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_88` |
| **Nom affiché** | Trafiquant Mithril |
| **Race** | Leprechaun |
| **Rôle** | `BLACK_MARKET` |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Manufacture (cache) |
| **Niveau / HP / MP** | 24 / 1300 / 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Ancien contremaître de la Manufacture. Il a détourné du mithril et le revend au marché noir. Il a mis au point une technique : il fond un lingot vrai avec du plomb, en garde la surface en mithril pur, et le poids est juste. L'acheteur ne découvre la fraude qu'en forgeant. Angle : Lingot fake.
- **Traits** : Méprisant, habile, mains pleines de cicatrices d'acide.
- **Voix** : Rauque, méprisante. « Tu veux du mithril ? J'ai ce qu'il y a de mieux. Le vrai. Enfin… assez vrai pour toi. »
- **Relations :** `NPC_BRO_76` (soupçonné par le douanier), `NPC_BRO_84` (achète du mithril cendré), `NPC_BRO_87` (le fait chanter), `NPC_BRO_94` (courtier).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_88_01` | K0 | trafic, mithril | Trafic de mithril volé depuis la Manufacture | — |
| 2 | `QI_BRO_88_02` | K0 | cache, manufacture | Cache dans la Manufacture, accès par le conduit de vapeur | — |
| 3 | `QI_BRO_88_03` | K0 | prix, mithril | Prix : 500 Yrds le lingot « garanti pur » | — |
| 4 | `QI_BRO_88_04` | K1 | lingot, fake | Fabrication : mithril en surface, plombin au cœur | `AFF>=55` |
| 5 | `QI_BRO_88_05` | K1 | plombin, provenance | Le plombin vient des canaux de refroidissement — il en tire 10 % | — |
| 6 | `QI_BRO_88_06` | K1 | acheteurs, dupes | Liste des acheteurs dupés — des nobles de Bomil | `AFF>=65` |
| 7 | `QI_BRO_88_07` | K2 | manufacture, accès | Il a un accès par les galeries d'entretien — son ancien poste | `AFF>=80` |
| 8 | `QI_BRO_88_08` | K2 | chantage, espion | `NPC_BRO_87` le fait chanter — il lui donne 10 % de ses gains | `AFF>=85` |
| 9 | `QI_BRO_88_09` | K3 | mithril, pouls | Le vrai mithril de Brokkheim est lié au Pouls — un lingot forgé près du Pouls est vivant. Ce qu'il vend est du mithril mort | JAMAIS — déflection : *(il crache)* « Le mithril c'est du mithril. Ça brille, ça coupe, ça se vend. Le reste, c'est de la poésie à la noix. » |
| 10 | `QI_BRO_88_10` | KX | *(hors sujet)* | « L'argent ne ment pas. Le mithril, si. » | — |

## 4. Chaînage économique & quêtes

- **BLACK_MARKET** : `!buy_mitril` — achat de mithril (risque de fake).
- Hook lingot fake : `QST_BRO_FAUX_MITHRIL`.

## 5. Intégration Bot

- **Accueil :** *(il sort un lingot)* « Regarde ça. Pur. 30 Yrds. Bon prix. Prends-le avant que je change d'avis. »