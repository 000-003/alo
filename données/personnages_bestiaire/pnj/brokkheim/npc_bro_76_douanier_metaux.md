# 🔨 Douanier Métaux — `NPC_BRO_76`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_76` |
| **Nom affiché** | Douanier Métaux |
| **Race** | Leprechaun |
| **Rôle** | `SERVICE` |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Porte Brokkheim |
| **Niveau / HP / MP** | 14 / 950 / 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Inventorie tous les métaux entrants et sortants de Brokkheim. Il pèse chaque lingot, enregistre chaque pépite. Depuis six lunes, il remarque que certains lingots pèsent plus cher au retour qu'à l'aller — comme si le métal absorbait quelque chose dans la cité. Angle : Lingot pèse plus au retour.
- **Traits** : Méthodique, soupçonneux, tient des registres parfaits.
- **Voix** : Précise, fatiguée. « Poids entrée : 2.4 kg. Poids sortie : 2.7 kg. Explique-moi ça. »
- **Relations :** `NPC_BRO_75` (collègue garde), `NPC_BRO_88` (trafiquant de mithril — l'achat/vente).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_76_01` | K0 | douane, procedure | Déclaration obligatoire pour tout métau entrant/sortant | — |
| 2 | `QI_BRO_76_02` | K0 | taxe, import | Taxe de 5 % sur les métaux bruts, 2 % sur les alliages | — |
| 3 | `QI_BRO_76_03` | K0 | mithril, rare | Le mithril pur est taxé à 10 % — presque plus personne n'en déclare | — |
| 4 | `QI_BRO_76_04` | K1 | lingot, poids | Les lingots qui restent une nuit à Brokkheim gagnent 0.3 % de masse | `AFF>=55` |
| 5 | `QI_BRO_76_05` | K1 | balance, fausse | Sa balance est fausse — ou alors le métal change vraiment | — |
| 6 | `QI_BRO_76_06` | K1 | registre, trou | Le registre des métaux a une page arrachée — la page du mithril | `AFF>=65` |
| 7 | `QI_BRO_76_07` | K2 | enclume, aimant | L'enclume de la Porte agit comme un aimant sur le métal — elle le pompe | `AFF>=80` |
| 8 | `QI_BRO_76_08` | K2 | trafiquant, identité | Il soupçonne `NPC_BRO_88` mais n'a pas de preuve | `AFF>=85` |
| 9 | `QI_BRO_76_09` | K3 | pouls, masse | Le Pouls fait battre le métal — chaque battement ajoute une couche atomique aux lingots. Le mithril triple de masse en une lune | JAMAIS — déflection : *(il regarde la balance, pâle)* « Les chiffres ne mentent pas. Je ne peux pas… je ne peux pas dire ça. » |
| 10 | `QI_BRO_76_10` | KX | *(hors sujet)* | « Le métal se souvient d'où il vient. » | — |

## 4 Chaînage économique & quêtes

- **SERVICE** : `!declare_metal` — déclaration de métaux, calcul de taxe.
- Hook registre arraché : `QST_BRO_TRAFIC_METAL`.

## 5. Intégration Bot

- **Accueil :** « Mets ton métal sur la balance. Déclare tout. »