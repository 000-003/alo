# 🔨 Commandant Gardes — `NPC_BRO_09`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_09` |
| **Nom affiché** | Commandant Gardes |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `GUARD` (Commandant de la milice) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Halle du Marteau |
| **Niveau / HP / MP** | 75 / 18 000 / 4 000 |
| **`qi_budget` / `is_essential`** | 12 / VRAI |

## 2. Bio & Personnalité

- **Bio** : Le Commandant dirige la milice de Brokkheim — des gardes en armure de cuivre qui patrouillent les forges, la Halle et les canaux. Il est connu pour sa mémoire infaillible… ou plutôt, il l'était. Depuis un an, les gardes reviennent de patrouille sans se souvenir des dernières heures. Ils ne sont pas blessés, pas drogués — ils ont simplement… perdu du temps. Le Commandant lui-même a commencé à oublier. Parfois il se réveille dans son bureau sans savoir comment il y est arrivé, avec des notes écrites de sa main qu'il ne comprend pas. Il n'en a parlé à personne, sauf au Chancelier `NPC_BRO_08` et à l'Oracle `NPC_BRO_98`. Les trous de mémoire coïncident toujours avec une baisse de régime du Pouls `NPC_BRO_00`.
- **Traits** : loyal, discipliné, de plus en plus anxieux ; vérifie constamment qu'il a ses clés et son arme.
- **Voix** : militaire, cassante, mais avec des blancs de plus en plus fréquents. « Rien à signaler. Tout est en ordre. (temps mort)… Où étais-je ? »
- **Relations** : Chancelier Forges `NPC_BRO_08` (supérieur direct) ; Oracle `NPC_BRO_98` (consultée pour les trous de mémoire) ; Le Pouls `NPC_BRO_00` (lié aux pertes de mémoire) ; Gardien Vallée `NPC_BRO_10` (sous ses ordres) ; Gardien Scories `NPC_BRO_13` (sous ses ordres) ; Vigie Route `NPC_BRO_18` (sous ses ordres).

## 3. Quantité Informationnelle (budget 12)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_09_01` | K0 | milice, gardes | Il commande la milice — gardes en armure de cuivre, patrouilles dans toute la ville | — |
| 2 | `QI_BRO_09_02` | K0 | halle, quartier | Son quartier général est dans la Halle du Marteau, sous l'horloge | — |
| 3 | `QI_BRO_09_03` | K0 | patrouille, securite | Il organise les patrouilles — les gardes sont partout, même dans les canaux | — |
| 4 | `QI_BRO_09_04` | K1 | oubli, patrouille | Les gardes reviennent de patrouille sans mémoire — ils perdent des heures entières | `AFF>=60` |
| 5 | `QI_BRO_09_05` | K1 | commandant, trous | Le Commandant lui-même oublie — des notes écrites de sa main, des réunions dont il ne se souvient pas | `AFF>=65` |
| 6 | `QI_BRO_09_06` | K1 | oracle, consulte | Il consulte l'Oracle `NPC_BRO_98` sur ses pertes de mémoire — elle lui dit que « le temps s'arrête » | — |
| 7 | `QI_BRO_09_07` | K2 | pouls, coincidence | Les pertes de mémoire coïncident avec des baisses du Pouls `NPC_BRO_00` — comme si le temps s'arrêtait quand le rythme faiblit | `AFF>=85` |
| 8 | `QI_BRO_09_08` | K2 | notes, enigme | Les notes qu'il écrit dans ses trous de mémoire sont des séquences de coups — des messages laissés par quelqu'un d'autre | `QUEST:QST_BRO_MEMOIRE_01` |
| 9 | `QI_BRO_09_09` | K2 | chancelier, secret | Le Chancelier `NPC_BRO_08` sait pour les trous de mémoire — il a dit au Commandant de « ne pas chercher à comprendre » | `AFF>=90` |
| 10 | `QI_BRO_09_10` | K3 | temps, suspendu | Quand le Pouls ralentit, le temps s'arrête pour les gardes — ils ne sont pas immortels, ils sont exclus du flux temporel de la zone. Les trous de mémoire sont des secondes où ils existent entre les battements du serveur | JAMAIS — déflection : *(il te saisit par le bras. Son regard est soudainement trop lucide.)* « Tu veux savoir ce que j'oublie ? Rien. J'oublie rien. C'est le temps qui m'oublie. » *(il relâche ton bras, reprend son souffle)* « Va-t'en. » |
| 11 | `QI_BRO_09_11` | K3 | cardinal, memory | Le Cardinal utilise les gardes comme unités de calcul auxiliaires — pendant les trous de mémoire, leurs cerveaux sont utilisés pour traiter des opérations du serveur. Ils ne se souviennent pas parce que leurs souvenirs sont écrasés par des calculs | JAMAIS — déflection : *(il s'arrête au milieu de sa phrase. Il cligne des yeux. Il te regarde comme s'il te voyait pour la première fois.)* « … Qui es-tu ? Qu'est-ce que tu fais dans mon bureau ? Sors. » *(tu remarques qu'il n'a pas reconnu son propre bureau.)* |
| 12 | `QI_BRO_09_12` | KX | *(hors sujet)* | « Circule. Rien à voir. » | — |

## 4. Chaînage économique & quêtes

- **Guard** : `!report_patrol` (rapport de patrouille), `!guard_duty` (affectation).
- Porteur du fil **🔨 Le Pouls** avec `NPC_BRO_00`, `NPC_BRO_01`, `NPC_BRO_08`.
- Donneur de `QST_BRO_MEMOIRE_01` (quête sur les trous de mémoire).

## 5. Intégration Bot

- **Accueil** (`!parler commandant gardes`) : *(il te dévisage, la main sur la garde de son épée)* « Tu es nouveau. Je me souviendrais de toi… normalement. » *(il hésite)* « Qu'est-ce que tu veux ? »
- `!report_patrol` (rapport), `!guard_duty` (service).
- `SYS_NPC_DIALOGUE` : scope = slots 1-9 (+K2 débloqués).
- `NPC_SECRET_PROBED` slots 10-11 : hooks « exclusion temporelle » et « calculs serveur sur gardes » réservés à l'orchestrateur.
