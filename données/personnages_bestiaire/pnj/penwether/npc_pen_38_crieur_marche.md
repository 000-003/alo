# 🕯️ Crieur Marché — `NPC_PEN_38`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_38` |
| **Nom affiché** | Crieur Marché |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (Annonces du Marché 7 Façades) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Marché 7 Façades |
| **Niveau / HP / MP** | 3 / 180 / 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Crieur public du Marché 7 Façades. Il annonce les prix, les arrivages, les événements. Mais il a remarqué quelque chose d'étrange : les prix qu'il annonce le matin ne sont plus les mêmes l'après-midi, et pas à cause du marché. La monnaie elle-même change. Il annonce des prix en Yrds et les clients sortent des Dracs. Les marchands les acceptent. Personne ne semble remarquer que la monnaie n'est pas la même. Lui seul s'en rend compte. Angle : les prix changent de monnaie dans ses annonces.
- **Traits** : bavard, voix portante, de plus en plus confus.
- **Voix** : forte et claironnante, avec des hésitations. « Marché du jour ! Tout à 10 Yrds !… Non, 10 Dracs ! Non, attendez… 10… peu importe ! »
- **Relations** : `NPC_PEN_30` (lui rapporte les annonces de vol) ; `NPC_PEN_39` (annonce ses enchères) ; `NPC_PEN_49` (annonce les départs d'expédition).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_38_01` | K0 | crieur, annonces | Annonces publiques au Marché 7 Façades | — |
| 2 | `QI_PEN_38_02` | K0 | horaires, cri | Crie à l'aube, à midi et au coucher | — |
| 3 | `QI_PEN_38_03` | K0 | prix, marche | Connaît tous les prix du marché sur le bout de la langue | — |
| 4 | `QI_PEN_38_04` | K1 | prix, changent | Les prix qu'il annonce changent de monnaie en cours de cri | — |
| 5 | `QI_PEN_38_05` | K1 | monnaie, variable | Yrds le matin, Dracs l'après-midi — il est le seul à le remarquer | `AFF>=60` |
| 6 | `QI_PEN_38_06` | K1 | clients, indifferents | Les clients ne remarquent pas le changement de monnaie | `AFF>=65` |
| 7 | `QI_PEN_38_07` | K2 | devise, simulation | La monnaie est instable dans la simulation — le Cardinal change les devises | `AFF>=80` |
| 8 | `QI_PEN_38_08` | K2 | crieur, stable | Il est le seul élément stable du marché — il perçoit les changements | `AFF>=85` |
| 9 | `QI_PEN_38_09` | K3 | crieur, ancrage | Le Crieur n'est pas un Spriggan — il est le système d'annonces du Cardinal personnifié. Il est la voix du serveur qui annonce les mises à jour de l'économie simulée. Les changements de monnaie sont des changements de devise dans la base de données. Les clients ne remarquent rien parce qu'ils sont programmés pour accepter | JAMAIS — déflection : *(il se fige. Sa voix devient métallique.)* « PRIX. MIS. À. JOUR. Veuillez. Consulter. Le. Nouveau. Tarif. » *(il reprend vie, confus)* « Quoi ? Qu'est-ce que j'ai dit ? » |
| 10 | `QI_PEN_38_10` | KX | *(hors sujet)* | « La voix porte. Les mots aussi. Mais les prix… les prix s'envolent. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!announce_pen` (faire une annonce), `!listen_news` (écouter les nouvelles).
- Fil **🎭 Illusions / 🔮 Ville Fantôme** (système d'annonces du Cardinal).
- Lié à `NPC_PEN_30`, `NPC_PEN_39`, `NPC_PEN_49`.

## 5. Intégration Bot

- **Accueil** (`!parler crieur marche`) : *(Il prend une grande inspiration)* « MARCHÉ DU JOUR !… (il te voit, baisse la voix) Ah, un client. Écoute, tu veux des infos ? J'ai des infos. Mais ma voix… elle dit des trucs que je contrôle pas. » |
- `!announce_pen` — annonce, `!listen_news` — nouvelles.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « Crieur = système d'annonces du Cardinal personnifié » réservé à l'orchestrateur.
