# 🔨 Trafiquant Rival — `NPC_BRO_93`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_93` |
| **Nom affiché** | Trafiquant Rival |
| **Race** | Leprechaun |
| **Rôle** | `BLACK_MARKET` |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Halle Marteau (cache) |
| **Niveau / HP / MP** | 22 / 1100 / 600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Leprechaun qui fait du trafic inter-cités — gemmes gnomes, mithril leprechaun, soies sylphes. Il profite des tensions entre Brokkheim et Granzam pour jouer les intermédiaires. Ses rivaux sont les gnomes de Granzam, mais il leur vend du mithril volé en secret. Angle : Rivaux Granzam gemmes.
- **Traits** : Sournois, calculateur, rit trop fort.
- **Voix** : Forte, enjouée, fausse. « Tout s'achète, tout se vend. Je suis le pont entre les mondes. »
- **Relations :** `NPC_BRO_87` (espion gnome — se fréquentent sans confiance), `NPC_BRO_88` (trafiquant mithril — concurrent sur le mithril), `NPC_BRO_94` (collègue courtier, façade légale).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_93_01` | K0 | trafic, inter-cites | Trafic de gemmes et mithril entre Brokkheim et Granzam | — |
| 2 | `QI_BRO_93_02` | K0 | cache, halle | Cache dans la Halle Marteau, sous les dalles de la forge | — |
| 3 | `QI_BRO_93_03` | K0 | rivaux, gnomes | Concurrence avec les gnomes sur le marché des gemmes | — |
| 4 | `QI_BRO_93_04` | K1 | gemmes, gnomes | A des gemmes de Granzam dans sa cache — preuve de trafic | `AFF>=55` |
| 5 | `QI_BRO_93_05` | K1 | granzam, porte | Connaît une entrée secrète vers Granzam par les tunnels de lave | `AFF>=65` |
| 6 | `QI_BRO_93_06` | K1 | mithril, double | Vend le même mithril à Granzam et à Brokkheim — joue les deux camps | — |
| 7 | `QI_BRO_93_07` | K2 | espion, identite | Il sait que `NPC_BRO_87` est un espion — il lui vend de fausses infos | `AFF>=80` |
| 8 | `QI_BRO_93_08` | K2 | rival, assassinat | Un gnome rival a tenté de l'assassiner — il a la cicatrice | `AFF>=85` |
| 9 | `QI_BRO_93_09` | K3 | trafic, cardinial | Le trafic inter-cités alimente le Cardinal en métaux rares — chaque lingot vendu renforce l'emprise du Cardinal sur les cités, qui s'endettent en métaux | JAMAIS — déflection : *(son rire devient nerveux)* « Le commerce, c'est la paix. Sans commerce, on se battrait. Je fais la paix, moi. » |
| 10 | `QI_BRO_93_10` | KX | *(hors sujet)* | « Les gemmes brillent pour tout le monde. C'est ça qui est beau. » | — |

## 4. Chaînage économique & quêtes

- **BLACK_MARKET** : `!trade_rival` — commerce inter-cités illégal.
- Hook entrée secrète Granzam : `QST_BRO_TUNNEL_LAVE`.

## 5. Intégration Bot

- **Accueil :** *(il s'approche en baissant la voix)* « J'ai ce que tu cherches. Gemmes gnomes, mithril local, soie sylphe. Tout est disponible. Pour le bon prix. »