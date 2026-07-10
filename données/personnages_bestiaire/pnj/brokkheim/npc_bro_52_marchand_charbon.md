# 🔨 Marchand Charbon — `NPC_BRO_52`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_52` |
| **Nom affiché** | Marchand Charbon |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (charbon qualité forge) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Terrils Publics (comptoir de vente) |
| **Niveau / HP / MP** | 18 / 1 200 / 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Il achète le charbon brut aux charbonniers et le revend aux forgerons après l'avoir trié par qualité. Il garde toujours sous son comptoir une braise qui ne s'éteint jamais — prélevée le jour où le bloc a rougi pour la première fois (`NPC_BRO_50`). Il l'appelle sa « Veilleuse éternelle » et la consulte avant chaque marché important.
- **Traits** : commerçant affable, superstitions de marché, flair pour les bulles.
- **Voix** : bonimenteur chaleureux qui baisse d'un ton pour les vraies affaires.
- **Relations** : Charbonnier Terrils `NPC_BRO_50` (fournisseur attitré) ; Trieur Scories `NPC_BRO_51` (lui signale les lots douteux) ; Maître Forgeron Lames `NPC_BRO_70` (client premium — charbon de mithril).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_52_01` | K0 | charbon, vente | Catalogue : prix et qualités de charbon (commun 5 Yrds/sac, forge 15 Yrds, mithril 50 Yrds) | — |
| 2 | `QI_BRO_52_02` | K0 | qualite, conseil | Conseils d'achat : quel charbon pour quelle forge (orientation joueur) | — |
| 3 | `QI_BRO_52_03` | K0 | veilleuse, histoire | La légende de sa braise éternelle : « Elle brûle depuis le jour du grand incendie, sans jamais consumer son charbon » | — |
| 4 | `QI_BRO_52_04` | K1 | braise, origine | La braise vient du bloc de `NPC_BRO_50` — il l'a prélevée la première nuit | `AFF>=60` |
| 5 | `QI_BRO_52_05` | K1 | braise, conseils | Il lit la braise avant chaque contrat : si elle rougeoie = bon marché, si elle fume = piège | — |
| 6 | `QI_BRO_52_06` | K1 | fournisseurs, gnomes | Les Gnomes de Granzam lui proposent du charbon à moitié prix — il refuse, par loyauté | `AFF>=70` |
| 7 | `QI_BRO_52_07` | K2 | acheteur, anonyme | Un acheteur en cape paie en mithril pour du charbon commun — ne négocie jamais, paie triple | `AFF>=80` |
| 8 | `QI_BRO_52_08` | K2 | braise, eteinte | Une fois, la braise s'est éteinte trois jours — les forges de Brokkheim ont produit des pièces fissurées sans raison | `AFF>=90` |
| 9 | `QI_BRO_52_09` | K3 | acheteur, ombre | L'acheteur en cape est un automate du Cardinal (`NPC_BRO_67`) — il collecte le charbon imprégné du Pouls pour alimenter une forge hors carte | JAMAIS — déflection : *(il souffle sur sa braise)* « Des acheteurs, j'en ai des douzaines. Celui-là paie bien. Je ne pose pas de questions, c'est la première règle du commerce. » |
| 10 | `QI_BRO_52_10` | KX | *(tout le reste)* | « Le charbon se vend, les histoires se paient. T'as des Yrds ou tu veux un catalogue ? » | — |

## 4. Chaînage économique & quêtes

- MERCHANT — vente de combustible pour les forges des joueurs.
- Braise éternelle : indice du Pouls enkysté dans la matière première — fil Enclume + Pouls.
- `QST_BRO_BRAISE_01` : comprendre pourquoi la braise s'éteint par intermittence.

## 5. Intégration Bot

- **Accueil** (`!parler marchand_charbon`) : *« Charbon de forge, charbon de mithril, charbon de veilleuse éternelle — à chaque feu son combustible. »*
- `!shop_charbon` : catalogue du marchand.
