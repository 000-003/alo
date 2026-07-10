# 🕯️ Héraut Conseil — `NPC_PEN_64`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_64` |
| **Nom affiché** | Héraut Conseil |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_SPR_CAP_001E` — Penwether, Salle Conseil Voilé |
| **Niveau / HP / MP** | 10 / 300 / 180 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Messager officiel du Conseil. Le Héraut parcourt Penwether pour annoncer les décisions du Conseil. Mais il y a une particularité : il n'annonce que les nouvelles qui n'ont pas été dites. Pas les secrets — les nouvelles qui, d'une certaine manière, n'existent pas encore. Il les lit sur un parchemin vierge, et sa voix les crée. Après son passage, les gens se souviennent avoir toujours su la nouvelle, comme si elle avait toujours été vraie. Le Héraut ne comprend pas son pouvoir. Il pense simplement qu'il a une bonne mémoire.
- **Traits** : solennel, voix portante, regard clair, jamais fatigué.
- **Voix** : forte, claire. « *Annonce du Conseil Voilé. Il n'y a pas eu d'incident au Marché 7 Façades cette nuit. Les murs n'ont pas bougé. Le calme règne.* (pause, plus bas) *Je viens de l'inventer. Mais maintenant c'est vrai.* »
- **Relations** : Scribe Conseil Voilé `NPC_PEN_60` (reçoit les édits à annoncer) ; Chroniqueur Illusions `NPC_PEN_63` (ses annonces apparaissent dans le journal du Chroniqueur avant qu'il ne parle) ; Fou Conseil `NPC_PEN_68` (le Fou connaît la vérité sur les annonces).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_64_01` | K0 | heraut, annonces | Il annonce les nouvelles du Conseil dans toute la ville | — |
| 2 | `QI_PEN_64_02` | K0 | parchemin, vierge | Il lit sur un parchemin vierge — les mots apparaissent au moment où il les prononce | — |
| 3 | `QI_PEN_64_03` | K0 | memoire, ville | Après son annonce, tout le monde se souvient de la nouvelle comme si elle avait toujours été vraie | — |
| 4 | `QI_PEN_64_04` | K1 | annonce, retroactive | Il a annoncé la fermeture d'une rue avant qu'elle ne soit fermée — la rue s'est fermée | `AFF>=40` |
| 5 | `QI_PEN_64_05` | K1 | annonce, faux | Il a annoncé un événement qui ne s'est pas produit — l'événement s'est produit le lendemain | `AFF>=55` |
| 6 | `QI_PEN_64_06` | K1 | voix, portee | Sa voix porte à travers toute la ville, même quand il chuchote | — |
| 7 | `QI_PEN_64_07` | K2 | ecrit, sans voix | Il a écrit une annonce sans la lire — l'annonce ne s'est pas réalisée | `AFF>=70` |
| 8 | `QI_PEN_64_08` | K2 | silence, jour | Un jour où il n'a rien annoncé, il ne s'est rien passé à Penwether | `QUEST:QST_PEN_HERAUT_01` |
| 9 | `QI_PEN_64_09` | K3 | heraut, commande vocale | Le Héraut est une interface vocale du serveur — ses annonces sont des commandes `echo` qui écrivent la réalité en temps réel | JAMAIS — déflection : *(il ouvre la bouche mais aucun son n'en sort — le parchemin reste vierge)* « …je peux pas annoncer ça. Le parchemin veut pas. Y a des choses qui doivent pas être dites. » |
| 10 | `QI_PEN_64_10` | KX | *(place vide)* | *(il annonce à une foule qui n'est pas là)* « Le Conseil annonce que tout va bien. Vous pouvez rentrer chez vous. La ville est calme. Je répète : la ville est calme. » | — |

## 4. Chaînage économique & quêtes

- **Quête** : `QST_PEN_HERAUT_01` — Découvrir ce qui se passe si le Héraut ne parle pas.
- **Fils rouges** : 🎭 Illusions (parole qui crée la réalité), 🔮 Ville Fantôme (commande vocale du serveur).

## 5. Intégration Bot

- **Accueil** (`!parler heraut_conseil`) : *« Écoute. Je vais annoncer quelque chose. Pas parce que c'est vrai. Mais parce qu'après mon annonce, ça le sera. Alors écoute bien. »*
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 ; K3 (slot 9) jamais injecté.
- `!pnj_list` : visible.
