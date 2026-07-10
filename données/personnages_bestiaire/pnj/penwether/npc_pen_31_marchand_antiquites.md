# 🕯️ Marchand Antiquités — `NPC_PEN_31`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_31` |
| **Nom affiché** | Marchand Antiquités |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (Objets anciens) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Marché 7 Façades |
| **Niveau / HP / MP** | 8 / 400 / 350 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Vendeur d'antiquités au Marché 7 Façades. Il achète des « ruines » et les revend comme pièces anciennes. Mais il a remarqué que certaines reliques — des objets qu'il a achetés comme « antiques » — portent encore l'odeur de l'huile de machine et des marques de fraisage modernes. L'une d'elles, une bague, a encore le prix d'inventaire du forgeron qui l'aurait créée hier. Il continue de les vendre comme antiquités. Angle : relique trop récente.
- **Traits** : menteur professionnel, charmeur, toujours en train d'astiquer quelque chose.
- **Voix** : onctueuse, persuasive. « Cette bague ? Elle a 500 ans. Je te le jure sur la tombe de mon grand-père. Le fait qu'elle soit encore dans son emballage d'origine ? Un hasard. »
- **Relations** : `NPC_PEN_30` (surveille son étal) ; `NPC_PEN_37` (concurrent, se dispute sur les prix) ; `NPC_PEN_48` (lui fournit des pièces volées) ; `NPC_PEN_49` (lui demande des artefacts pour ses expéditions).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_31_01` | K0 | antiquites, vente | Vente d'antiquités : 50-500 Yrds selon la pièce | — |
| 2 | `QI_PEN_31_02` | K0 | etal, marche | Étal principal au Marché 7 Façades, allée 3 | — |
| 3 | `QI_PEN_31_03` | K0 | achat, ruines | Achète des objets des ruines, les revend comme antiquités | — |
| 4 | `QI_PEN_31_04` | K1 | bague, recente | Bague « antique » avec marque de fraisage moderne | — |
| 5 | `QI_PEN_31_05` | K1 | lot, etiquettes | Plusieurs pièces ont des étiquettes d'inventaire récentes | `AFF>=60` |
| 6 | `QI_PEN_31_06` | K1 | doute, authentique | Il commence à douter que ses pièces soient authentiques | `AFF>=65` |
| 7 | `QI_PEN_31_07` | K2 | provenance, manufacture | Les pièces viennent de la même source — une manufacture sous les ruines | `AFF>=80` |
| 8 | `QI_PEN_31_08` | K2 | receleur, source | `NPC_PEN_48` lui fournit régulièrement des pièces — trop bien conservées | `AFF>=85` |
| 9 | `QI_PEN_31_09` | K3 | antiquites, produites | Les antiquités de Penwether sont toutes produites par le Cardinal. Les ruines « antiques » ont été créées en même temps que la ville. L'âge des objets est une illusion — ils sont aussi vieux que la simulation, pas plus. Le Cardinal les génère avec une patine simulée | JAMAIS — déflection : *(il casse une assiette « antique »)* « Regarde. La cassure est nette. Trop nette. Le vrai vieux verre, il éclate en étoile. Ça, c'est du verre moderne. Je le sais. Mais les clients ne le savent pas. » *(il balaie les morceaux)* |
| 10 | `QI_PEN_31_10` | KX | *(hors sujet)* | « Plus c'est vieux, plus ça se vend. La vérité ? Personne n'en veut. » | — |

## 4. Chaînage économique & quêtes

- **Merchant** : `!buy_antiquity_pen` (achat d'antiquité), `!sell_relic` (vente de relique).
- Fil **📜 Ruines** (antiquités produites par la simulation).
- Client de `NPC_PEN_48`, fournisseur de `NPC_PEN_49`.

## 5. Intégration Bot

- **Accueil** (`!parler marchand antiquites`) : *(Il sort une bague poussiéreuse)* « 500 ans, je te dis. Tu sens ça ? La poussière du temps. Bon, d'accord, c'est de la sciure. Mais elle est vieille, je te jure. » |
- `!buy_antiquity_pen` — achat, `!sell_relic` — vente.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « antiquités générées par le Cardinal » réservé à l'orchestrateur.
