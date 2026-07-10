# ⛏️ Douanier des Pierres — `NPC_GRA_71`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_71` |
| **Nom affiché** | Douanier des Pierres |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Porte de Granzam |
| **Niveau / HP / MP** | 34 / 2 400 / 3 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Douanier chargé d'enregistrer les visiteurs et les marchandises qui entrent à Granzam. Il tient un registre des noms, provenancs et cargaisons. Depuis six mois, il note que certains visiteurs donnent des noms de roche — des noms qui ne sont pas des noms : Granit, Schiste, Basalte, Arkose. Il les a laissé passer, mais il a gardé la liste. Il a vérifié au Conseil : ces noms n'apparaissent nulle part ailleurs. Il pense que ce sont des agents du Cardinal, ou pire, des « personnes génériques » qui n'existent pas vraiment. Il en a parlé au Gardien de la Porte (`NPC_GRA_70`), qui a haussé les épaules. (Angle : des noms de roche.)
- **Traits** : méticuleux, suspicieux, méthodique, introverti.
- **Voix** : Voix de bureau, monocorde, comme s'il lisait. « Nom. Provenance. Cargaison. Roche. Non' pas la marchandise — le nom du visiteur. Du roche. »
- **Relations** : `NPC_GRA_70` (Gardien Porte — collègue), `NPC_GRA_08` (Chancelier — son supérieur administratif), `NPC_GRA_23` (Scribe Conseil — vérifie les registres), `NPC_GRA_55` (Vétéran — lui a dit d'être vigilant).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_71_01` | K0 | douane, registre | Il tient le registre des entrées et sorties. | — |
| 2 | `QI_GRA_71_02` | K0 | porte_granzam, controle | Il contrôle les cargaisons à la Porte de Granzam. | — |
| 3 | `QI_GRA_71_03` | K0 | noms, provenances | Il note le nom, la provenance et la cargaison de chaque visiteur. | — |
| 4 | `QI_GRA_71_04` | K1 | nom_roche, liste | Il a noté des visiteurs nommés Granit, Schiste, Basalte, Arkose. | `AFF>=60` |
| 5 | `QI_GRA_71_05` | K1 | registre, verification | Il a vérifié au Conseil : ces noms n'existent dans aucun registre officiel. | `AFF>=65` |
| 6 | `QI_GRA_71_06` | K1 | gardien_porte, temoin | Le Gardien (`NPC_GRA_70`) a vu ces personnes. « Il les a laissés passer' les a oubliés. » | — |
| 7 | `QI_GRA_71_07` | K2 | liste, six_mois | La liste des noms de roche fait trois pages. 47 visiteurs. | `AFF>=85` |
| 8 | `QI_GRA_71_08` | K2 | noms, systeme | « Ces personnes — si ce sont des personnes — n'ont pas d'identité. Elles existent le temps de franchir la porte. » | `QUEST:QST_GRA_NOMS_ROCHE` |
| 9 | `QI_GRA_71_09` | K3 | noms_roches, pnjs_systeme | Les visiteurs nommés Granit, Schiste, etc. sont des PNJ générés par le système pour des tests de seed — des « marcheurs fantomes » du Cardinal. | JAMAIS — déflection : *(il referme son registre)* « Je ne les ai jamais vus. Je les ai notés. C'est différent. » |
| 10 | `QI_GRA_71_10` | KX | *(tout le reste)* | *(il rature un nom dans son registre)* « Lui' il est venu trois fois. Granit. Chaque fois' il repartait sans rien. Juste entrer et ressortir. » | — |

## 4. Chaînage économique & quêtes

- Service : `!enregistrer_visiteur <nom>` (enregistre formellement un visiteur).
- Porteur du fil **🔮 Noyau de Pierre** (noms de roche = PNJs systèmes du Cardinal).
- Donneur de `QST_GRA_NOMS_ROCHE` : enquêter sur les visiteurs aux noms minéraux.

## 5. Intégration Bot

- **Accueil** (`!parler douanier`) : *Plumé sur son registre' il lève la tête.* « Nom. Provenance. Cargaison. Ah' toi t'as un vrai nom. Ça change. »
- `!enregistrer_visiteur <nom>` (service).
- `NPC_SECRET_PROBED` slot 9 : hook « noms de roche = instances système du Cardinal » pour l'orchestrateur.