# 🕯️ Commandant des Masques — `NPC_PEN_09`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_09` |
| **Nom affiché** | Commandant des Masques |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `GUARD` (commandant des éclaireurs — parle tout seul) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Marché des Sept Façades |
| **Niveau / HP / MP** | 78 / 22 000 / 9 500 |
| **`qi_budget` / `is_essential`** | 12 / VRAI |

## 2. Bio & Personnalité

- **Bio** : Le Commandant des Masques dirige les éclaireurs de Penwether — des gardes qui patrouillent les rues changeantes et les faubourgs. Mais il parle tout seul. Pas des monologues : des dialogues. Il alterne deux voix — la sienne et une autre, plus aiguë, qui répond à ses questions. Ses hommes ont appris à ne pas le remarquer. La vérité, que le Commandant lui-même ne comprend pas, est qu'il « capte » les transmissions du Chancelier `NPC_PEN_07` comme des parasites qu'il traduit en conversations. L'autre voix est le protocole de communication du Cardinal qui filtre mal. Il est le seul garde de haut rang à ne pas avoir été muté aux Ruines Noires — peut-être parce que le Chancelier trouve son « bug » utile pour tester la couverture réseau.
- **Traits** : schizophrène fonctionnel, loyal malgré lui, terrifié par le silence.
- **Voix** : deux voix — la sienne (tranchante) et l'Autre (neutre, métallique) (« — Tu as vu quelque chose au nord ? — *Rien à signaler dans le périmètre alloué.* — C'est ce que je me disais. — *La boucle est stable. Pas de fuite.* — Bon. Bon. Continue. »).
- **Relations** : Chancelier Masques `NPC_PEN_07` (croit recevoir ses ordres en rêve — c'est le Cardinal qui transmet) ; Gardien Ruines `NPC_PEN_08` (ne se parlent plus — le Gardien sait ce que le Commandant refuse de voir) ; Gardien Ruines Noires `NPC_PEN_10` (ancien subordonné qu'il a dû muter — ne se le pardonne pas).

## 3. QI — budget 12

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_09_01` | K0 | eclaireurs, patrouille | Organisation des éclaireurs — routes, secteurs, horaires | — |
| 2 | `QI_PEN_09_02` | K0 | marche, sept facades | Présence au Marché des Sept Façades — poste de commandement | — |
| 3 | `QI_PEN_09_03` | K0 | voix, autre | Il parle tout seul — ne peut pas l'expliquer et ne cherche pas à le faire | — |
| 4 | `QI_PEN_09_04` | K1 | transmission, captation | L'« Autre voix » est une transmission du Cardinal qui parasite son flux vocal | `AFF>=65` |
| 5 | `QI_PEN_09_05` | K1 | reve, ordres | Il croit recevoir ses ordres en rêve — c'est le Cardinal qui les injecte | `AFF>=70` |
| 6 | `QI_PEN_09_06` | K1 | mutation, culpabilité | Il a muté des gardes aux Ruines Noires sur ordre — ne sait pas pourquoi | — |
| 7 | `QI_PEN_09_07` | K2 | silence, terreur | Le silence lui fait peur — quand l'Autre voix se tait, il panique | `AFF>=85` |
| 8 | `QI_PEN_09_08` | K2 | marche, surveillance | Le Marché des Sept Façades est le point d'écoute principal — toutes les conversations sont captées | `AFF>=88` |
| 9 | `QI_PEN_09_09` | K2 | gardien, brouille | Le Gardien `NPC_PEN_08` ne lui parle plus parce qu'il a compris que l'Autre voix écoute tout | `AFF>=90` |
| 10 | `QI_PEN_09_10` | K3 | cardinal, protocole | L'Autre voix n'est pas un bug — c'est un protocole d'écoute que le Cardinal teste via lui | JAMAIS — déflection : *(sa voix normale se brise)* « — Je ne suis pas un cobaye. — *Tu es un point d'écoute. Le protocole est validé. — Non. NON. — *Silence. Boucle stable.* — …tu vois ? Elle revient toujours. Elle ne me quittera jamais. » |
| 11 | `QI_PEN_09_11` | K3 | ordre, assassinat | L'Autre voix lui a donné des ordres d'assassinat contre des Spriggans qui en savaient trop — il les a exécutés sans s'en souvenir | JAMAIS — déflection : *(il se tait, ses deux mains se lèvent pour couvrir ses oreilles)* « Je ne me souviens pas. Je ne me souviens PAS. Ce n'est pas moi qui… c'est Elle. C'est Elle qui… pars. Pars avant qu'Elle ne te parle. » |
| 12 | `QI_PEN_09_12` | KX | *(hors service)* | « — Il n'y a plus rien à dire. — *Plus rien à signaler.* — Plus rien. Va-t'en. » | — |

## 4. Chaînage économique & quêtes

- **Guard** : contrôle les éclaireurs, donne des patrouilles (`!patrouille commandant`).
- **Fils rouges** : rouage de **🔮 Fil méta — La Ville Fantôme** (point d'écoute du Cardinal). Relais de **🎭 Les Illusions Qui Mentent** (l'Autre voix est un protocole masqué en folie).
- Donneur de `QST_PEN_ECOUTE_01` (trouver d'autres Spriggans qui captent des transmissions).

## 5. Intégration Bot

- **Accueil** (`!parler commandant`) : *« — Nouveau visage. — *Identité non référencée dans le périmètre.* — Laisse. Je m'en occupe. — *Protocole d'approche en cours.* — Tais-toi. Bon. Qu'est-ce que tu veux ? »*
- `!patrouille commandant` (quête de patrouille) ; `!rapport commandant` (état des secteurs).
- `is_essential = VRAI` — `SYS_ASSASSINATE_NPC` interdit.
