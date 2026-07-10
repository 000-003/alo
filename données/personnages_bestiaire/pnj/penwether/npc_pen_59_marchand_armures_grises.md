# 🕯️ Marchand Armures Grises — `NPC_PEN_59`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_59` |
| **Nom affiché** | Marchand Armures Grises |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_SPR_CAP_001A` — Penwether, Marché 7 Façades |
| **Niveau / HP / MP** | 8 / 260 / 140 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Armurier voisin du Marchand Lames Grises, il fabrique des armures à partir du même métal des ruines. Ses armures sont anormalement légères — une cuirasse complète pèse moins qu'une tunique en coton. Les clients se plaignent qu'elles « ne font pas le poids », mais ceux qui les portent en combat ne sont jamais touchés. Le Marchand croit que c'est un défaut de forge. En réalité, le métal des ruines est si léger parce qu'il est partiellement désolidarisé de la physique du serveur.
- **Traits** : robuste, méticuleux, fier de son travail, vexé que ses armures soient « trop légères ».
- **Voix** : voix de stentor. « *Trop légère ? Tu parles ! Mets-la et viens me frapper. Je vais te montrer si elle est légère !* »
- **Relations** : Marchand Lames Grises `NPC_PEN_58` (même fournisseur, mêmes matériaux) ; Garde Façades `NPC_PEN_50` (équipe sa patrouille) ; Intendant Conseil `NPC_PEN_66` (client pour les gardes du Conseil).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_59_01` | K0 | armures, legeres | Ses armures pèsent 90% de moins que des armures normales | — |
| 2 | `QI_PEN_59_02` | K0 | metal, ruines | Il utilise le même métal gris que le Marchand Lames Grises `NPC_PEN_58` | — |
| 3 | `QI_PEN_59_03` | K0 | protection, intacte | Malgré leur légèreté, les armures n'ont jamais été percées | — |
| 4 | `QI_PEN_59_04` | K1 | armure, flottante | Une armure posée sur une balance indique un poids négatif | `AFF>=35` |
| 5 | `QI_PEN_59_05` | K1 | fleche, bloquee | Une flèche tirée sur un porteur d'armure grise s'est arrêtée à 5 cm de la peau — comme sur un mur invisible | `AFF>=55` |
| 6 | `QI_PEN_59_06` | K1 | armure, vent | Par grand vent, un client a failli s'envoler avec son armure — elle était plus légère que l'air | — |
| 7 | `QI_PEN_59_07` | K2 | metal, masse nulle | Le métal des ruines a une masse qui tend vers zéro — il existe à peine dans la physique du monde | `AFF>=70` |
| 8 | `QI_PEN_59_08` | K2 | chute, lente | Un casque tombé d'une tour a mis 30 secondes à atteindre le sol — comme s'il traversait de l'eau | `QUEST:QST_PEN_ARMURES_01` |
| 9 | `QI_PEN_59_09` | K3 | armures, desolidarisation | Le métal des ruines est partiellement désolidarisé de la trame physique du serveur — il ne suit pas les mêmes lois de gravité que le reste du monde | JAMAIS — déflection : *(il tend un gantelet — le gantelet flotte dans l'air)* « Tiens, attrape. Ah non, il flotte. Dès qu'il quitte ma main, il flotte. J'arrive pas à le poser par terre. » |
| 10 | `QI_PEN_59_10` | KX | *(forge)* | *(il frappe une armure de toutes ses forces — le marteau rebondit sans laisser de trace)* « Rien. Même pas une marque. J'ai forgé un truc qui existe à peine et que rien ne peut briser. » | — |

## 4. Chaînage économique & quêtes

- **Achats** : métal des ruines (15 po), cuir renforcé (5 po).
- **Ventes** : Armure Grise Légère (90 po), Heaume Flottant (45 po).
- **Quête** : `QST_PEN_ARMURES_01` — Découvrir pourquoi le métal des ruines défie la gravité.
- **Fils rouges** : 📜 Ruines (métal des profondeurs), 🎭 Illusions (physique alternative), 🔮 Ville Fantôme (serveur désolidarisé).

## 5. Intégration Bot

- **Accueil** (`!parler marchand_armures_grises`) : *« Légère ? Légère ? Essaie de la percer, ma cuirasse ! Allez, prends la plus grosse lame grise que t'as, frappe ! Je te donne 10 po si tu laisses une marque ! »*
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 ; K3 (slot 9) jamais injecté.
- `!pnj_list` : visible.
