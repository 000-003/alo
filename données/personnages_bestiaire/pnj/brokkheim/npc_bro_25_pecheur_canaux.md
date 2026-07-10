# 🔨 Pêcheur des Canaux — `NPC_BRO_25`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_25` |
| **Nom affiché** | Pêcheur des Canaux |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (poisson des canaux, appâts lumineux) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Canaux de Refroidissement |
| **Niveau / HP / MP** | 12 / 850 / 320 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Assis au bord des canaux de refroidissement, ce Leprechaun pêche les anguilles qui brillent dans l'eau tiède. Les canaux sont alimentés par les geysers du Pouls, et les poissons y ont développé une bioluminescence étrange. Il vend ses prises aux alchimistes et aux enchanteurs. Son secret : une anguille aperçue au fond du canal n°7 qui semblait nager à contre-courant du temps. Angle : l'anguille qui brille est peut-être un fragment du Pouls.
- **Traits** : patient, observateur, parle peu, sent le poisson.
- **Voix** : voix calme qui porte sur l'eau (« Les canaux murmurent la nuit. Parfois ils répondent. »).
- **Relations** : `NPC_BRO_26` (lui vend des poissons purs) ; `NPC_BRO_28` (achète ses anguilles pour potions) ; `NPC_BRO_29` (le plongeur travaille dans ses canaux).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_25_01` | K0 | peche, canaux | Comment pêcher dans les canaux, meilleurs spots, appâts | — |
| 2 | `QI_BRO_25_02` | K0 | anguille, luisante | L'anguille luisante : prisée des alchimistes, 50 Yrds pièce | — |
| 3 | `QI_BRO_25_03` | K0 | pouls, eau | Le Pouls fait vibrer l'eau — les poissons mordent mieux quand il bat fort | — |
| 4 | `QI_BRO_25_04` | K1 | canal, sept | Le canal n°7 est interdit — l'eau y est trop chaude et quelque chose y luit | — |
| 5 | `QI_BRO_25_05` | K1 | reflet, temps | Les anguilles du canal 7 semblent plus vieilles qu'elles ne devraient | `AFF>=60` |
| 6 | `QI_BRO_25_06` | K1 | undines, presence | Des ondulations non-naturelles dans l'eau la nuit — comme si quelqu'un nageait sous la surface | `AFF>=65` |
| 7 | `QI_BRO_25_07` | K2 | eau, qui regrette | L'eau des canaux « se souvient » de la surface — elle reflète des endroits qui n'existent plus | `AFF>=80` |
| 8 | `QI_BRO_25_08` | K2 | anguille, cardinal | L'anguille du canal 7 porte une marque en forme d'enclume — comme le sceau du Cardinal | `AFF>=85+QUEST:QST_BRO_EAUX_01` |
| 9 | `QI_BRO_25_09` | K3 | anguille, fragment pouls | L'anguille n'est pas un poisson — c'est un fragment solidifié du Pouls, un battement de forge rendu chair par accident, échappé des geysers profonds | JAMAIS — déflection : *(il fixe l'eau sans vous regarder)* « L'anguille ? Juste un poisson. Un beau poisson. Qui brille. C'est tout. Si tu veux des histoires, va voir le cardinal. Moi je pêche. » |
| 10 | `QI_BRO_25_10` | KX | *(hors sujet)* | « L'eau ne ment jamais. Elle est trop lourde pour ça. » | — |

## 4. Chaînage économique & quêtes

- **Marchand poissonnier** : `!buy_fish` (anguilles, poissons des canaux). Ingrédient pour `NPC_BRO_28` (potions).
- Point d'entrée du **fil Pacte des Eaux** (canal n°7, marque du Cardinal).

## 5. Intégration Bot

- **Accueil** (`!parler pecheur`) : *« L'eau est calme aujourd'hui. Tu veux pêcher ou acheter ? »*
- `!buy_fish` — catalogue des poissons disponibles.
- `NPC_SECRET_PROBED` slot 9 : hook « anguille/fragment Pouls » pour l'orchestrateur.
