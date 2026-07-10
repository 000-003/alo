# ⛏️ Chancelier de Pierre — `NPC_GRA_08`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_08` |
| **Nom affiché** | Chancelier de Pierre |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `GUARD` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Salle du Conseil |
| **Niveau / HP / MP** | 75 / 14000 / 6500 |
| **`qi_budget` / `is_essential`** | 12 / VRAI |

## 2. Bio & Personnalité

- **Bio** : Régent de facto de Granzam, le Chancelier de Pierre est le bras droit du Lord (`NPC_GRA_07`) et l'interprète officiel de ses paroles sismiques. Il siège au Conseil depuis 30 ans et a vu défiler six cycles de Lords holographiques. Il y a trois mois, il a vu la montagne frémir pour la première fois — un frémissement visible du sol de la Salle du Conseil. Il l'a attribué à un glissement de terrain, mais une partie de lui sait que c'était autre chose. Depuis, il dort mal. Il sait que Margrim (`NPC_GRA_06`) enquête et il craint que la vérité ne fasse s'effondrer le pouvoir en place. Il oscille entre protéger la cité et protéger ses secrets.
- **Traits** : diplomate, prudent, fatigué, loyaliste, rongé par le doute.
- **Voix** : Grave, mesurée, avec une pointe d'usure. « Le Lord parle. Nous écoutons. C'est l'ordre des choses. Mais depuis quelque temps… la montagne répond. »
- **Relations** : `NPC_GRA_07` (Lord Gnome — interprète officiel), `NPC_GRA_06` (Margrim — collègue et adversaire silencieux), `NPC_GRA_00` (Cœur de Granit — ignore sa nature exacte), `NPC_GRA_23` (Scribe — dicte les édits), `NPC_GRA_09` (Commandant — coordonne la sécurité), `NPC_GRA_27` (Vice-Chancelier — second).

## 3. Quantité Informationnelle (budget 12)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_08_01` | K0 | conseil, gouvernance | Le Chancelier gère les affaires courantes en l'absence de parole du Lord. | — |
| 2 | `QI_GRA_08_02` | K0 | lord_gnome, interpretation | Il traduit les runes sismiques du Lord en décrets. « C'est un art plus qu'une science. » | — |
| 3 | `QI_GRA_08_03` | K0 | granzam, securite | Les remparts de Granzam n'ont jamais été percés. Mais les patrouilles perdent des hommes. | — |
| 4 | `QI_GRA_08_04` | K1 | fremissement, montagne | « J'ai vu le sol onduler. Comme une respiration. Personne n'a voulu me croire. » | `AFF>=60` |
| 5 | `QI_GRA_08_05` | K1 | margrim, enquete | Margrim (`NPC_GRA_06`) pose trop de questions. « Il creuse là où il ne faut pas. » | `AFF>=70` |
| 6 | `QI_GRA_08_06` | K1 | commandant_09, ronde | Le Commandant (`NPC_GRA_09`) a perdu une ronde entière au Bastion Ouest. « Ils se sont évaporés. » | `AFF>=65` |
| 7 | `QI_GRA_08_07` | K2 | coeur_granit, soubassement | Il sait qu'il y a quelque chose sous la salle. Il n'y est jamais descendu. « Ce n'est pas un lieu pour les vivants. » | `AFF>=85` |
| 8 | `QI_GRA_08_08` | K2 | lord_secret, serveur | « Le Lord a vacillé une fois. Une seconde. J'ai vu du code dans ses runes. Du vrai code. » | `AFF>=90` |
| 9 | `QI_GRA_08_09` | K2 | rivalite, leprechaun | Il soupçonne les Leprechauns d'être derrière les disparitions. « Ils ont toujours convoité nos profondeurs. » | `QUEST:QST_GRA_BOFRIK` |
| 10 | `QI_GRA_08_10` | K3 | seed, verite | **SECRET — ne JAMAIS révéler** : Le Chancelier a compris que le Lord est un programme il y a 10 ans. Il n'a rien dit pour ne pas semer la panique. | JAMAIS — déflection : *(fixe le trône vide)* « Le Lord parle. Cela doit nous suffire. » |
| 11 | `QI_GRA_08_11` | K3 | effondrement, fin | **SECRET — ne JAMAIS révéler** : « Si la vérité éclate, Granzam tombe. Le peuple a besoin de croire que la montagne est réelle. Pas qu'elle est… un fichier. » | JAMAIS — déflection : *(se lève brusquement)* « Le Conseil est clos. Revenez demain. » |
| 12 | `QI_GRA_08_12` | KX | hors-sujet | *(il masse ses tempes)* « Tu connais le poids d'un trône de pierre ? Il est plus lourd que tu ne crois. » | — |

## 4. Chaînage économique & quêtes

**Fils rouges** : 🏔️ Poids de la Montagne, 🔮 Noyau de Pierre (via le Lord).
**Quête associée** : `QST_GRA_CHANCELIER` — « La Confession de Pierre » (obtenir la confiance du Chancelier, découvrir ce qu'il sait du Lord et du Cœur).
**Liens** : Dialogue verrouillé derrière l'avancement de la quête de Margrim (`NPC_GRA_06`).

## 5. Intégration Bot

PNJ statique dans la Salle du Conseil. Présent de 08h à 22h. Son état `state:chancelier_trust` suit la progression de confiance (0-100). Les K2 ne se débloquent qu'à `trust>=80`.
