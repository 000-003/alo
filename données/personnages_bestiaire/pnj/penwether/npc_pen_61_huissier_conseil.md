# 🕯️ Huissier Conseil — `NPC_PEN_61`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_61` |
| **Nom affiché** | Huissier Conseil |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_SPR_CAP_001E` — Penwether, Salle Conseil Voilé |
| **Niveau / HP / MP** | 14 / 420 / 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : L'Huissier se tient à l'entrée de la Salle Conseil Voilé. Il accueille les visiteurs — mais il ne voit jamais leur visage. Littéralement : quand il regarde quelqu'un, la zone du visage est un vide lisse, comme un masque inexistant. Il a appris à reconnaître les gens à leur voix, leur démarche, leur odeur. Il ne s'en étonne plus. Il pense que c'est sa vue qui décline. Mais c'est le Conseil qui masque les visages des visiteurs — personne ne doit savoir qui entre.
- **Traits** : courtois, distant, mémoire auditive exceptionnelle.
- **Voix** : neutre, protocolaire. « *Bienvenue à la Salle Conseil Voilé. Puis-je connaître votre nom ? … Merci. Veuillez attendre ici. Et ne touchez pas aux rideaux.* »
- **Relations** : Scribe Conseil Voilé `NPC_PEN_60` (transmet les visiteurs) ; Ombre Conseil `NPC_PEN_67` (le seul dont il voit le visage — et il ne comprend pas pourquoi) ; Chancelier Masques `NPC_PEN_07` (ne l'a jamais vu sans son masque).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_61_01` | K0 | visites, visages | Il ne voit jamais le visage des visiteurs — seulement un vide lisse | — |
| 2 | `QI_PEN_61_02` | K0 | reconnaissance, voix | Il reconnaît les gens à leur voix — il a mémorisé plus de 200 voix | — |
| 3 | `QI_PEN_61_03` | K0 | huissier, poste | Il est à ce poste depuis 22 ans — il n'a jamais vu le visage d'un visiteur | — |
| 4 | `QI_PEN_61_04` | K1 | ombre, visage | L'Ombre Conseil `NPC_PEN_67` a un visage quand il le regarde — le seul | `AFF>=45` |
| 5 | `QI_PEN_61_05` | K1 | voix, chancelier | La voix du Chancelier `NPC_PEN_07` change parfois — comme si ce n'était pas la même personne | `AFF>=60` |
| 6 | `QI_PEN_61_06` | K1 | rideaux, mouvement | Les rideaux de l'entrée bougent sans vent — il a vu une forme passer derrière | — |
| 7 | `QI_PEN_61_07` | K2 | visiteur, nul | Un visiteur est entré sans faire de bruit de pas — l'Huissier ne l'a pas entendu arriver, mais il l'a annoncé | `AFF>=75` |
| 8 | `QI_PEN_61_08` | K2 | masque, huissier | Lui-même porte-t-il un masque ? Il ne s'est jamais regardé dans un miroir | `QUEST:QST_PEN_VISAGES_01` |
| 9 | `QI_PEN_61_09` | K3 | visages, securite | L'entrée de la Salle Conseil Voilé est protégée par un filtre système qui masque les identifiants visuels des visiteurs — l'Huissier est le point de vérification manuelle | JAMAIS — déflection : *(il tend la main vers son propre visage et s'arrête)* « Je pourrais toucher mon visage. Mais j'ai jamais essayé. J'ai peur de trouver du vide. » |
| 10 | `QI_PEN_61_10` | KX | *(entrée)* | *(il annonce un nom qui n'existe pas, puis se tait)* « Parfois j'annonce des gens qui ne sont pas là. Le Conseil me dit merci. » | — |

## 4. Chaînage économique & quêtes

- **Quête** : `QST_PEN_VISAGES_01` — Aider l'Huissier à découvrir pourquoi il ne voit pas les visages.
- **Fils rouges** : 🎭 Illusions (filtre système sur les visages), 🔑 Pacte Ombres (l'Ombre Conseil est le seul visible).

## 5. Intégration Bot

- **Accueil** (`!parler huissier_conseil`) : *« Bienvenue. Vous avez un nom ? … Merci. Asseyez-vous. Je préviens le Conseil. Ne vous inquiétez pas si je ne vous regarde pas — je regarde jamais personne. »*
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 ; K3 (slot 9) jamais injecté.
- `!pnj_list` : visible.
