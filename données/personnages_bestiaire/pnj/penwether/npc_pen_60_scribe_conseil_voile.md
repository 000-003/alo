# 🕯️ Scribe Conseil Voilé — `NPC_PEN_60`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_60` |
| **Nom affiché** | Scribe Conseil Voilé |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_SPR_CAP_001E` — Penwether, Salle Conseil Voilé |
| **Niveau / HP / MP** | 12 / 360 / 250 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Rédacteur officiel des édits du Conseil Voilé. Il pose chaque mot sur le parchemin à l'encre noire des ruines, et chaque phrase, une fois écrite, s'illumine brièvement avant de s'éteindre. Il croit que c'est l'encre qui réagit à la lumière. En réalité, ses édits s'illuminent parce qu'ils *s'exécutent* — chaque édit est une ligne de commande qui modifie la réalité de Penwether. Il n'en a jamais écrit deux identiques.
- **Traits** : appliqué, silencieux, écriture parfaite, fatigue chronique.
- **Voix** : monocorde, comme s'il dictait. « *Édit 4 221 : le passage nord du Faubourg Masques sera fermé de la troisième à la quatrième heure. Signé, le Conseil Voilé.* *(pause)* Il s'est illuminé. Comme le 4 220. Comme le 4 222. »*
- **Relations** : Huissier Conseil `NPC_PEN_61` (lui remet les décisions verbales) ; Chroniqueur Illusions `NPC_PEN_63` (compare ses édits avec les chroniques) ; Héraut Conseil `NPC_PEN_64` (lui transmet les annonces).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_60_01` | K0 | edits, illumination | Chaque édit qu'il écrit s'illumine une fois la phrase terminée | — |
| 2 | `QI_PEN_60_02` | K0 | encre, ruines | Il écrit avec de l'encre extraite des ruines — elle ne sèche jamais | — |
| 3 | `QI_PEN_60_03` | K0 | edits, nombre | Il a écrit 4 221 édits. Aucun ne s'est illuminé deux fois de la même couleur | — |
| 4 | `QI_PEN_60_04` | K1 | edit, execution | Un édit de fermeture de passage a été écrit — le passage s'est effectivement fermé à l'heure dite | `AFF>=40` |
| 5 | `QI_PEN_60_05` | K1 | edit, retroactif | Il a écrit un édit daté d'hier — l'édit s'est illuminé comme s'il avait toujours existé | `AFF>=55` |
| 6 | `QI_PEN_60_06` | K1 | encre, source | L'encre vient du même endroit que la teinture noire n°7 du Marchand Teintures `NPC_PEN_53` | — |
| 7 | `QI_PEN_60_07` | K2 | edit, sans effet | Un édit écrit mais jamais prononcé ne s'est pas illuminé — il est resté gris | `AFF>=70` |
| 8 | `QI_PEN_60_08` | K2 | parchemin, langue | Les édits écrits dans une langue qu'il ne connaît pas s'illuminent aussi — comme si la langue importait peu | `QUEST:QST_PEN_EDITS_01` |
| 9 | `QI_PEN_60_09` | K3 | edits, commandes | Les édits sont des commandes système qui modifient les paramètres du serveur — l'illumination est l'ACK d'exécution | JAMAIS — déflection : *(il écrit un édit vide et le montre — le parchemin reste noir)* « Quand j'écris rien, il s'allume pas. Alors j'arrête pas d'écrire. Si j'arrête, j'ai peur que tout s'éteigne. » |
| 10 | `QI_PEN_60_10` | KX | *(bureau)* | *(il écrit « JE SUIS » et regarde le parchemin s'illuminer)* « Ça s'allume. Donc je suis. C'est l'édit qui me prouve que j'existe. » | — |

## 4. Chaînage économique & quêtes

- **Quête** : `QST_PEN_EDITS_01` — Découvrir ce qui se passerait si on écrivait un édit interdit.
- **Fils rouges** : 🎭 Illusions (édits = commandes), 🔮 Ville Fantôme (métadonnées du serveur), 📜 Ruines (encre des profondeurs).

## 5. Intégration Bot

- **Accueil** (`!parler scribe_conseil`) : *« J'écris. Ça s'allume. Je relis. C'est juste. Je signe. Le Conseil parle par ma plume. Et ma plume parle par l'encre des ruines. »*
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 ; K3 (slot 9) jamais injecté.
- `!pnj_list` : visible.
