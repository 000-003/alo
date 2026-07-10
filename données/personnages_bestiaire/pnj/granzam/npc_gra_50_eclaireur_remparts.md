# ⛏️ Éclaireur des Remparts — `NPC_GRA_50`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_50` |
| **Nom affiché** | Éclaireur des Remparts |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Remparts de granit |
| **Niveau / HP / MP** | 22 / 1 800 / 320 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Éclaireur posté sur le rempart nord à la tombée de la nuit. Il surveille les Steppes de Granit et note les mouvements anormaux dans l'obscurité. Depuis trois lunes, il jure voir des formes qui creusent sous la surface — des galeries trop silencieuses, sans gravats, sans trace. Lié à `NPC_GRA_72` (Guetteur des Remparts), `NPC_GRA_73` (Sonneur d'Alarme).
- **Traits** : noctambule, méticuleux, voix grave, obsédé par les détails miniers.
- **Voix** : posée, un peu lente ; ses doigts tapotent la pierre en parlant. « Les nuits calmes ne sont pas silencieuses ici. Y a toujours un grattement. La question, c'est : qu'est-ce qui gratte ? »
- **Relations** : `NPC_GRA_72` (Guetteur — doublure des tours) ; `NPC_GRA_73` (Sonneur — lui rapporte les horaires) ; `NPC_GRA_06` (Margrim — a entendu ses rapports de veille).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_50_01` | K0 | rempart, veille | Il monte la garde chaque nuit sur le rempart nord-est, tour de 4h. | — |
| 2 | `QI_GRA_50_02` | K0 | steppe, granit | Les Steppes de Granit s'étendent à perte de vue côté est — aucun couvert pour un assaut. | — |
| 3 | `QI_GRA_50_03` | K0 | equipement | Sa lunette de visée nocturne est cerclée de mithril — transmission lumineuse parfaite. | — |
| 4 | `QI_GRA_50_04` | K1 | formes, creusement | Des formes trapues creusent sous la steppe la nuit — il voit les gravats disparaître. | `AFF>=60` |
| 5 | `QI_GRA_50_05` | K1 | silencieux, galerie | Les galeries creusées ne laissent pas de débris. « On creuse avec de la lumière, pas avec des pioches. » | `AFF>=65` |
| 6 | `QI_GRA_50_06` | K1 | rapport, margrim | Margrim l'a convoqué une fois pour décrire les trous. Il a pâli en écoutant. | — |
| 7 | `QI_GRA_50_07` | K2 | tunnel, resonance, noyau | Les formes creusent en cercles concentriques autour du noyau de Granzam — comme si elles savaient où il est. | `AFF>=85` |
| 8 | `QI_GRA_50_08` | K2 | disparition, gravats | Les gravats ne tombent pas : ils « remontent » vers la surface la nuit suivante, reformant le sol. | `QUEST:QST_GRA_FOSSES` |
| 9 | `QI_GRA_50_09` | K3 | mainteneur, exterieur | Les formes ne sont pas des monstres du jeu — ce sont des scripts de maintenance externes qui checkent l'intégrité du seed minéral. Leurs « trous » sont des sondes. | JAMAIS — déflection : *(il cligne des yeux)* « Si je savais ce qu'elles étaient, je dormirais. C'est pour ça que je veille. Je ne veux pas savoir. » |
| 10 | `QI_GRA_50_10` | KX | hors-sujet | *(il tapote son muret)* « Tu veux acheter une pierre ? Je connais un marchand. Pas moi. » | — |

## 4. Chaînage économique & quêtes

- Ne vend ni n'achète — fournit des rapports de veille à Margrim `NPC_GRA_06` et au Guetteur `NPC_GRA_72`.
- Porteur d'indice sur les **Fosses Silencieuses** (fécondes de nuit, alimente `QST_GRA_FOSSES`) ; lié au Sonneur `NPC_GRA_73`.
- K2 débloque son indication sur le tracé des tunnels convergeant vers le noyau.

## 5. Intégration Bot

- **Accueil** (`!parler eclaireur remparts`) : *« La steppe est calme ce soir. Trop calme. Tu veux jeter un œil avec moi ? »*
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2 débloqués).
- `NPC_SECRET_PROBED` slot 9 : hook « maintenance externe / sonde du seed minéral » réservé orchestrateur.