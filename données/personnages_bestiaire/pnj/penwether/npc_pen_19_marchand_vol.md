# 🕯️ Marchand de Vol — `NPC_PEN_19`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_19` |
| **Nom affiché** | Marchand de Vol |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (potions et équipement de vol — Route Aérienne) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Route Aérienne PEN-ALN (îlot) |
| **Niveau / HP / MP** | 40 / 4 800 / 10 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Marchand de Vol tient une échoppe sur un îlot qui flotte à mi-chemin sur la Route Aérienne. Il vend des potions contre le mal d'altitude, des ailes de rechange, des cartes des vents et des « filtres de pression » pour les voyageurs qui supportent mal les transitions de strates. Il connaît tous les courants, toutes les turbulences, et tous les voyageurs qui passent. Il voit ceux qui vont et ceux qui reviennent — et parfois, ceux qui ne devraient pas exister. Il ne pose pas de questions sur sa clientèle. Il vend, il encaisse, et il note en cachette les noms qui passent deux fois dans la même journée.
- **Traits** : commerçant affable, mais regard fuyant quand on parle des doubles.
- **Voix** : enjouée, comme un vendeur à la criée, mais avec une fatigue sous la bonhomie (« Potion d'altitude ! Fraîche du jour ! Testée sur cobaye volontaire — ça a été moi, mais j'ai survécu ! »).
- **Relations** : Vigie Route `NPC_PEN_18` (voisin sur la route — échange potions contre protection) ; Marchand Fleurs `NPC_PEN_12` (lui fournit des ingrédients rares pour ses potions).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_19_01` | K0 | potions, altitude | Potions de vol, d'altitude, d'équilibre — catalogue et prix | — |
| 2 | `QI_PEN_19_02` | K0 | equipement, vol | Ailes, harnais, filtres de pression | — |
| 3 | `QI_PEN_19_03` | K0 | route, courants | Connaissances des courants aériens de la Route | — |
| 4 | `QI_PEN_19_04` | K1 | doubles, voyageurs | Certains voyageurs passent deux fois dans la même journée — des « copies » | `AFF>=65` |
| 5 | `QI_PEN_19_05` | K1 | potion, transition | Il vend une potion qui permet de « voir » les transitions de strates — elle rend malade | `AFF>=70` |
| 6 | `QI_PEN_19_06` | K1 | carnet, noms | Il tient un carnet secret des voyageurs doublons | — |
| 7 | `QI_PEN_19_07` | K2 | strate, transition | La Route traverse une « frontière de strate » — certains voyageurs se dupliquent à la traversée | `AFF>=85` |
| 8 | `QI_PEN_19_08` | K2 | potion, verite | Sa potion spéciale (très chère) permet de voir la strate réelle pendant 5 minutes | `AFF>=88` |
| 9 | `QI_PEN_19_09` | K3 | duplication, cardinal | Le Cardinal duplique les voyageurs qui traversent la frontière pour « tester la stabilité » de la zone de transfert — les doubles sont des sondes | JAMAIS — déflection : *(il cesse de sourire)* « Je ne vends pas de réponses à cette question. Parce que je n'en ai pas. J'ai juste des observations. Beaucoup de voyageurs qui ressemblent à d'autres voyageurs. Des noms qui apparaissent deux fois dans mon carnet à la même heure. Le Cardinal aime vérifier ses connexions, c'est tout. Et maintenant, tu veux une potion ou tu veux poser trop de questions ? » |
| 10 | `QI_PEN_19_10` | KX | *(hors-sujet)* | « Le vent n'a pas de mémoire. Mais moi si. Alors je note. » | — |

## 4. Chaînage économique & quêtes

- **Merchant** : vend `POTION_ALTITUDE`, `POTION_STRATE_VUE`, `AILES_ECHANGE`, `FILTRE_PRESSION`.
- **Fils rouges** : rouage de **🔮 Fil méta — La Ville Fantôme** (les doubles comme sondes du Cardinal). Relais de **📜 Ce Que Cachent les Ruines** (la frontière de strate).
- Donneur de `QST_PEN_VOL_01` (tester une nouvelle potion d'altitude sur la Route Aérienne).

## 5. Intégration Bot

- **Accueil** (`!parler marchand_vol`) : *« Potions ! Équipement de vol ! Tout pour la route ! Tu vas où ? Alne ? Bon choix. Tu reviens ? Encore mieux. Prends une potion d'altitude, offerte pour le premier voyage. On ne sait jamais ce qu'on trouve en chemin. »*
- `!etal_vol` (catalogue) ; `!potion_speciale` (potion de vision de strate, si `AFF>=88`).
