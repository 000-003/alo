# 🔨 Lord Leprechaun — `NPC_BRO_07`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_07` |
| **Nom affiché** | Lord Leprechaun |
| **Race** | Leprechaun (hologramme) |
| **Rôle** (`T_NPC.role_type`) | `LORD` (Lord de Brokkheim) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Balcon du Conseil |
| **Niveau / HP / MP** | 99 / ??? / ??? (hologramme — ne peut pas être attaqué) |
| **`qi_budget` / `is_essential`** | 12 / VRAI |

## 2. Bio & Personnalité

- **Bio** : Le Lord Leprechaun est un hologramme qui apparaît sur le Balcon du Conseil pour les grandes annonces. Personne ne se souvient de l'avoir vu ailleurs, personne ne sait qui l'a créé, et personne ne sait qui se cache derrière. La tradition veut que le Lord soit élu parmi les maîtres-forgerons les plus âgés, mais aucun enregistrement n'existe de cette élection — les archives du Conseil des Guildes `NPC_BRO_08` ne remontent que jusqu'à Brokk III. Le Lord parle avec la voix des forges — un timbre qui résonne dans les conduits de vapeur de toute la ville. La vérité est plus étrange : le Lord est une projection du Pouls `NPC_BRO_00`, une interface entre le noyau rythmique de Brokkheim et ses habitants. Il est élu par le battement du serveur.
- **Traits** : solennel, distant, sa voix porte sans effort ; il ne cligne jamais des yeux.
- **Voix** : profonde, amplifiée par la vapeur, elle semble venir de partout à la fois. « Brokkheim frappe. Brokkheim forge. Brokkheim vit. Que le battement vous guide. »
- **Relations** : Le Pouls `NPC_BRO_00` (son origine véritable) ; Chancelier Forges `NPC_BRO_08` (son régent, assure la continuité) ; Mémoire `NPC_BRO_99` (sait que le Lord est une projection) ; Oracle `NPC_BRO_98` (peut lire l'avenir dans sa fréquence) ; Brokk IX `NPC_BRO_01` (refuse de le regarder).

## 3. Quantité Informationnelle (budget 12)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_07_01` | K0 | lord, hologramme | Le Lord apparaît sur le Balcon du Conseil — c'est un hologramme, intouchable | — |
| 2 | `QI_BRO_07_02` | K0 | election, maitres | La tradition dit qu'il est élu parmi les maîtres-forgerons — mais personne n'a vu d'élection | — |
| 3 | `QI_BRO_07_03` | K0 | annonce, discours | Il parle pour les grandes annonces — sa voix porte dans toute la ville par les conduits de vapeur | — |
| 4 | `QI_BRO_07_04` | K1 | archives, brisees | Les archives du Conseil ne remontent qu'à Brokk III — tout ce qui précède a été effacé ou n'a jamais existé | `AFF>=60` |
| 5 | `QI_BRO_07_05` | K1 | projetee, pas reelle | Le Lord est une projection — il n'a pas de corps, pas de substance. Certains disent qu'il n'a jamais été réel | `AFF>=65` |
| 6 | `QI_BRO_07_06` | K1 | brokk, refus | Brokk IX refuse de regarder le Lord — quand le Lord parle, Brokk IX se tourne et quitte la salle | — |
| 7 | `QI_BRO_07_07` | K2 | pouls, interface | Le Lord est une interface — le Pouls `NPC_BRO_00` parle à travers lui. Le rythme de ses paroles correspond aux battements | `AFF>=85` |
| 8 | `QI_BRO_07_08` | K2 | elections, jamais | Les élections du Lord n'ont jamais eu lieu — le poste a toujours été occupé par la même entité depuis la fondation de Brokkheim | `QUEST:QST_BRO_CARDINAL_01` |
| 9 | `QI_BRO_07_09` | K2 | chancelier, succession | Le Chancelier `NPC_BRO_08` est le gardien de la continuité — si le Lord s'éteint, c'est lui qui doit choisir le prochain | `AFF>=90` |
| 10 | `QI_BRO_07_10` | K3 | cardinal, emanatio | Le Lord n'est pas élu et n'a jamais été vivant — c'est une émanation directe du Cardinal, une instance de dialogue qui sert d'interface politique aux joueurs. Il n'a pas de volonté propre. Ses discours sont générés par le système | JAMAIS — déflection : *(l'hologramme se fige. Ses yeux se tournent vers toi — et pour la première fois, il te regarde vraiment.)* *(Il penche la tête.)* « … Tu poses des questions que le système n'a pas prévues. Intéressant. Le Cardinal note ta requête. Bonne continuation. » *(il disparaît.)* |
| 11 | `QI_BRO_07_11` | K3 | fin, serveur | Si le Pouls s'arrête, le Lord disparaît. Si le Lord disparaît, Brokkheim n'a plus d'interface politique — le Conseil des Guildes devient la seule autorité. Le Chancelier `NPC_BRO_08` le sait. Il attend | JAMAIS — déflection : *(La voix résonne, mais l'hologramme est déjà parti.)* « Toute chose a une fin. Même une capitale. Surtout une capitale. » |
| 12 | `QI_BRO_07_12` | KX | *(hors sujet)* | *(l'hologramme répète le même discours que la semaine dernière)* | — |

## 4. Chaînage économique & quêtes

- N'achète rien, ne vend rien — entité de dialogue politique.
- Porteur du fil **🔮 Fil méta — L'Enclume du Cardinal** avec `NPC_BRO_00`, `NPC_BRO_01`, `NPC_BRO_08`, `NPC_BRO_99`, `NPC_BRO_98`.
- Déclencheur de `QST_BRO_CARDINAL_01` (quête sur la nature du Cardinal).

## 5. Intégration Bot

- **Accueil** (`!parler lord leprechaun`) : *(L'hologramme apparaît lentement, ses contours scintillent dans la vapeur.)* « Citoyen. Le Pouls bat. Brokkheim forge. Quelle est ta requête ? »
- `!pnj_list` — visible comme entité politique, mais pas de commerce possible.
- `SYS_NPC_DIALOGUE` : scope = slots 1-9 (+K2 débloqués).
- `NPC_SECRET_PROBED` slots 10-11 : hooks « émanation du Cardinal » et « fin du Lord = fin de la zone » réservés à l'orchestrateur.
