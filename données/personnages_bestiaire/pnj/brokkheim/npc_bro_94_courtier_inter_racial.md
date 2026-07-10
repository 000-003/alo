# 🔨 Courtier Inter-Racial — `NPC_BRO_94`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_94` |
| **Nom affiché** | Courtier Inter-Racial |
| **Race** | Leprechaun |
| **Rôle** | `MERCHANT` |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Halle Marteau |
| **Niveau / HP / MP** | 16 / 800 / 700 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Négociant officiel à la Halle Marteau, spécialisé dans les échanges entre races. Sa couverture légale lui permet de vendre des gemmes et du mithril sans éveiller les soupçons. Il est le lien visible du trafic que couvrent `NPC_BRO_88` et `NPC_BRO_93`. Angle : Couverture gemmes/mithril.
- **Traits** : Affable, professionnel, jamais nerveux.
- **Voix** : Claire, commerciale. « Bienvenue à la Halle. Gemmes ? Mithril ? J'ai les meilleurs prix de la cité. »
- **Relations :** `NPC_BRO_88` (trafiquant — lui fournit le mithril), `NPC_BRO_87` (gnome — lui achète des gemmes), `NPC_BRO_92` (collègue diplomate), `NPC_BRO_79` (guide — envoie les clients).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_94_01` | K0 | halie, commerce | Halle Marteau : marché central de Brokkheim | — |
| 2 | `QI_BRO_94_02` | K0 | prix, gemmes | Prix des gemmes : 20-200 Yrds selon qualité | — |
| 3 | `QI_BRO_94_03` | K0 | legal, facade | Commerce déclaré — il paie ses taxes au Conseil | — |
| 4 | `QI_BRO_94_04` | K1 | mithril, source | Le mithril vient de `NPC_BRO_88` — il le sait, le revend 30 % plus cher | `AFF>=55` |
| 5 | `QI_BRO_94_05` | K1 | gemmes, gnomes | Les gemmes viennent de `NPC_BRO_87` — il sert d'intermédiaire | — |
| 6 | `QI_BRO_94_06` | K1 | registre, double | Il tient un double registre : un pour le Conseil, un pour ses vrais comptes | `AFF>=65` |
| 7 | `QI_BRO_94_07` | K2 | conseil, protection | Le Conseil ferme les yeux — il reverse 10 % à leurs caisses noires | `AFF>=80` |
| 8 | `QI_BRO_94_08` | K2 | transit, bomil | Une partie des gemmes part vers Bomil via `NPC_BRO_92` | `AFF>=85` |
| 9 | `QI_BRO_94_09` | K3 | reseau, cardinial | Le commerce inter-racial est un réseau de veine du Cardinal — chaque transaction envoie un flux de données au serveur-mère. Il est un collecteur fiscal du système | JAMAIS — déflection : *(il ferme son registre)* « Les affaires sont les affaires. Le reste ne me regarde pas. Ni toi. » |
| 10 | `QI_BRO_94_10` | KX | *(hors sujet)* | « L'argent ne connaît pas les races. Seulement les chiffres. » | — |

## 4. Chaînage économique & quêtes

- **MERCHANT** : `!buy_gems` — achat de gemmes (légales), `!buy_mitril` — achat mithril.
- Hook registre double : `QST_BRO_DOUBLE_COMPTES`.

## 5. Intégration Bot

- **Accueil :** *(sourire professionnel)* « Entre, entre ! Regarde ce que j'ai. Tu ne trouveras pas meilleur rapport qualité-prix dans toute Brokkheim. »