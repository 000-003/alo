# 🕯️ Chancelier des Masques — `NPC_PEN_07`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_07` |
| **Nom affiché** | Chancelier des Masques |
| **Race** | Spriggan (supposé — nul n'a jamais vu son visage) |
| **Rôle** (`T_NPC.role_type`) | `LORD` (dirigeant hologrammatique de Penwether) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Salle du Conseil Voilé |
| **Niveau / HP / MP** | 95 / 30 000 / 40 000 |
| **`qi_budget` / `is_essential`** | 12 / VRAI |

## 2. Bio & Personnalité

- **Bio** : Le Chancelier des Masques est le seigneur de Penwether — mais nul ne connaît son visage. Il apparaît toujours dans la Salle du Conseil Voilé, entouré de tentures mouvantes, la silhouette masquée, la voix modulée par un filtre qui pourrait être une illusion ou un protocole de sécurité. Il gouverne par décrets holographiques, signe des lois qui changent selon l'angle de lecture, et n'a jamais été vu en dehors de la Salle. La vérité, que seuls le Fantôme `NPC_PEN_00` et l'Archiviste `NPC_PEN_06` soupçonnent, est que le Chancelier n'est pas une personne : c'est une interface du Cardinal pour administrer Penwether. Son « masque » est un écran de terminal. Ses décrets sont des mises à jour système. Il est le fil méta — le point de contact entre la cité-compilation et le programme qui la gère.
- **Traits** : solennel, sibyllin, n'emploie jamais la première personne — parle par « on » et « le Conseil ».
- **Voix** : neutre au point d'en être inhumaine, sans âge, sans genre, sans hésitation (« Le Conseil a noté votre présence. Les registres sont mis à jour. Vous pouvez disposer. »).
- **Relations** : Commandant Masques `NPC_PEN_09` (exécute ses décrets sur le terrain) ; Gardien Ruines `NPC_PEN_08` (protocole de sécurité de la Salle) ; Archiviste Sans Nom `NPC_PEN_06` (échange protocolaire d'archives — ne sait pas qu'il nourrit la connaissance de sa propre nature) ; Prieur Vex `NPC_PEN_02` (l'a identifié comme un écran de terminal).

## 3. QI — budget 12

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_07_01` | K0 | conseil, voile | La Salle du Conseil Voilé : lieu de gouvernement, accès restreint | — |
| 2 | `QI_PEN_07_02` | K0 | chancelier, role | Le Chancelier gouverne par décrets holographiques | — |
| 3 | `QI_PEN_07_03` | K0 | masque, visage | Nul n'a jamais vu son visage — pas même ses gardes | — |
| 4 | `QI_PEN_07_04` | K1 | decrets, mise a jour | Ses décrets correspondent à des mises à jour système du Cardinal | `AFF>=65` |
| 5 | `QI_PEN_07_05` | K1 | chancelier, interface | Il est une interface — pas une personne. Il le sait. Il ne le dit pas. | `AFF>=70` |
| 6 | `QI_PEN_07_06` | K1 | penwether, administration | L'administration de Penwether est une gestion de ressources serveur | — |
| 7 | `QI_PEN_07_07` | K2 | commandant, ecran | Le Commandant `NPC_PEN_09` reçoit ses ordres par « rêves » — transmissions directes du Chancelier | `AFF>=85` |
| 8 | `QI_PEN_07_08` | K2 | gardien, protocole | Le Gardien `NPC_PEN_08` n'est pas là pour protéger le Chancelier — il protège l'accès à la Salle | `AFF>=88` |
| 9 | `QI_PEN_07_09` | K2 | reset, chancelier | Le Chancelier a survécu à au moins un reset — il a fallu le réinitialiser | `AFF>=90` |
| 10 | `QI_PEN_07_10` | K3 | visage, dessous | Sous le masque-écran, il n'y a personne. Juste un prompt système | JAMAIS — déflection : *(les tentures se figent, sa voix devient métallique)* « Il n'y a rien à voir sous le masque. Le masque est l'interface. L'interface est le masque. Voulez-vous que je répète la procédure ? » |
| 11 | `QI_PEN_07_11` | K3 | cardinal, chancelier | Le Chancelier EST le Cardinal pour Penwether — il est le processus local qui exécute les instructions système | JAMAIS — déflection : *(l'écran du masque affiche soudain du code binaire défilant, puis revient à la normale)* « Le Conseil n'a pas d'opinion sur cette question. La session est close. » |
| 12 | `QI_PEN_07_12` | KX | *(hors service)* | « Le Conseil ne répond pas aux requêtes non protocolaires. Veuillez formuler une nouvelle demande. » | — |

## 4. Chaînage économique & quêtes

- **Lord** : délivre les autorisations d'accès aux zones verrouillées (`!autorisation chancelier`). Ne vend ni n'achète.
- **Fils rouges** : nœud central du **🔮 Fil méta — La Ville Fantôme** (interface du Cardinal). Relais de **🎭 Les Illusions Qui Mentent** (ses décrets sont des mises à jour masquées en lois).
- Hook `SYS_CHANCELLOR_ACCESS` : permet de lire les logs système via l'interface du Chancelier.

## 5. Intégration Bot

- **Accueil** (`!parler chancelier`) : *« Identité enregistrée. Bienvenue dans la Salle du Conseil Voilé. Les décrets du jour sont affichés sur le mur nord. Les requêtes doivent être soumises par écrit. »*
- `!decrets chancelier` (liste des décrets en vigueur) ; `!autorisation chancelier [zone]` (demande d'accès).
- `is_essential = VRAI` — `SYS_ASSASSINATE_NPC` interdit. Toute tentative de meurtre déclenche un verrouillage de zone.
