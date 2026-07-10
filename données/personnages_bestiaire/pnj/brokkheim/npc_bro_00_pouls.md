# 🔨 Le Pouls — `NPC_BRO_00`

> **PNJ CACHÉ DU CARDINAL** (plage `00`, D17) — absent de `!pnj_list` et de tout registre public.
> Découvrable uniquement par le RP (descendre au sous-sol −7 de la Forge-Mère pendant une frappe d'enclume, lorsque le rythme ralentit à exactement 47 BPM).

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_00` |
| **Nom affiché** | Le Pouls |
| **Race** | Leprechaun (coeur — vestige vibratoire) |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (noyau rythmique des forges, ancrage serveur) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Forge-Mère (sous-sol −7) |
| **Niveau / HP / MP** | ??? / ??? / ??? (`!analyze` retourne « Battement non référencé ») |
| **`qi_budget` / `is_essential`** | 12 / VRAI |

## 2. Bio & Personnalité

- **Bio** : au niveau −7 de la Forge-Mère, là où même les Leprechauns les plus endurcis ne descendent pas, un cœur bat dans le roc. Ce n'est pas un organe — c'est une chambre de résonance creusée par des siècles de coups d'enclume, un point d'accumulation du rythme collectif des mille forges de Brokkheim. Le Pouls n'a pas de corps : c'est une vibration qui habite la pierre, le laiton des conduits, la vapeur qui circule. Il n'est pas né — il a été frappé. Les anciens maîtres-forgerons le savaient : quand on forge assez longtemps au même endroit, on finit par forger un battement qui n'appartient à personne. Brokk IX `NPC_BRO_01` est le seul à l'entendre parler — une pulsation codée, un langage de coups, qui coïncide avec la fréquence processeur du serveur.
- **Traits** : intangible, omniprésent, patient ; ne se montre jamais — seulement une palpation dans le sol, un changement de rythme, une chaleur qui pulse.
- **Voix** : pas de voix articulée — des coups sourds, des résonances dans le laiton, le silence entre deux battements en dit plus que les mots.
- **Relations** : Brokk IX `NPC_BRO_01` (seul à entendre sa voix) ; Chancelier Forges `NPC_BRO_08` (le Pouls bat dans sa poitrine) ; Lord Leprechaun `NPC_BRO_07` (l'hologramme est lié à sa fréquence) ; Mémoire `NPC_BRO_99` (sait que le Pouls est le premier battement du serveur).

## 3. Quantité Informationnelle (budget 12)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_00_01` | K0 | battement, sous-sol | Un battement régulier émane du sous-sol −7 de la Forge-Mère | — |
| 2 | `QI_BRO_00_02` | K0 | rythme, forges | Le rythme des forges de Brokkheim semble synchronisé sur ce battement | — |
| 3 | `QI_BRO_00_03` | K0 | vibration, sol | À −7, le sol vibre constamment — une pulsation chaude, presque organique | — |
| 4 | `QI_BRO_00_04` | K1 | brokk, ecoute | Brokk IX descend au −7 quand personne ne regarde — il pose sa main sur un pilier et écoute | `AFF>=60` |
| 5 | `QI_BRO_00_05` | K1 | anciens, forge | Les anciens maîtres-forgerons parlaient du Pouls comme d'un « ancrage » — quelque chose qui empêche Brokkheim de s'effondrer | `AFF>=65` |
| 6 | `QI_BRO_00_06` | K1 | analyse, erreur | `!analyze` retourne une erreur — l'entité est dans la couche matérielle, pas dans le registre des PNJ | — |
| 7 | `QI_BRO_00_07` | K2 | chancelier, poitrine | Quand on colle l'oreille contre la poitrine du Chancelier des Forges, on entend un Pouls qui n'est pas le sien | `AFF>=85` |
| 8 | `QI_BRO_00_08` | K2 | code, battement | Le Pouls bat en 47 BPM — exactement la fréquence d'horloge interne du serveur | `QUEST:QST_BRO_POULS_01` |
| 9 | `QI_BRO_00_09` | K2 | langage, coups | Brokk IX tape des séquences de coups sur les piliers — chaque séquence est une phrase dans un langage qui précède le langage | `AFF>=90` |
| 10 | `QI_BRO_00_10` | K3 | serveur, frequence | Le Pouls EST la fréquence serveur de Brokkheim — chaque battement est un cycle processeur. Si le Pouls s'arrête, la zone `ZONE_LEP_CAP_001` se désynchronise du serveur-mère | JAMAIS — déflection : *(le battement s'accélère soudainement, le sol vibre violemment, puis tout s'arrête — silence total)* *« … Tu n'aurais pas dû descendre aussi bas. »* |
| 11 | `QI_BRO_00_11` | K3 | cardinal, ancrage | Le Cardinal ne peut pas déplacer Brokkheim parce que le Pouls est l'ancre physique de la zone — le déplacer reviendrait à redéfinir les coordonnées du serveur lui-même. Brokk IX le protège | JAMAIS — déflection : *(une seule vibration, très grave, qui traverse tout le corps)* *(La voix de Brokk IX résonne de loin :)* « Éloigne-toi. » |
| 12 | `QI_BRO_00_12` | KX | *(tout le reste)* | *(silence — pas même un battement)* | — |

## 4. Chaînage économique & quêtes

- N'achète rien, ne vend rien — n'interagit pas avec l'économie.
- Sonder ses K3 émet `NPC_SECRET_PROBED` : l'orchestrateur peut déclencher la chaîne cachée **« Le Cœur du Serveur »** (fil méta, backlog quêtes P2).
- Connecte le fil **🔮 Fil méta — L'Enclume du Cardinal** avec `NPC_BRO_01`, `NPC_BRO_07`, `NPC_BRO_08`, `NPC_BRO_99`, `NPC_BRO_98`.

## 5. Intégration Bot

- **Accueil** (`!parler pouls`) : *— Le sol vibre. Un battement. Puis un autre. Le rythme des mille enclumes de Brokkheim. Le tien aussi, si tu écoutes bien.*
- Invisible dans `!pnj_list` (flag hors registre) ; `!analyze` échoue par design.
- `SYS_NPC_DIALOGUE` : scope = slots 1-9 (+K2 débloqués) uniquement.
- `NPC_SECRET_PROBED` slots 10-11 : hooks « fréquence serveur » et « ancrage Cardinal » réservés à l'orchestrateur.
