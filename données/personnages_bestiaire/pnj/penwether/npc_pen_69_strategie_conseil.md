# 🕯️ Stratège Conseil — `NPC_PEN_69`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_69` |
| **Nom affiché** | Stratège Conseil |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_SPR_CAP_001E` — Penwether, Salle Conseil Voilé |
| **Niveau / HP / MP** | 17 / 510 / 260 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Stratège militaire du Conseil, il élabore les plans de défense de Penwether — contre quoi, personne ne le sait vraiment. La ville n'est jamais attaquée. Pourtant, il dessine des plans, des fortifications, des lignes de repli. Chaque plan est parfait — géométriquement, logiquement, stratégiquement. Mais aucun plan ne se plie. Littéralement. Il ne peut pas plier ses cartes. Le parchemin résiste, comme si la stratégie refusait d'être courbée. Il a compris que ses plans étaient plus que des dessins : ils décrivent des structures du monde réel, et le monde ne se plie pas.
- **Traits** : militaire, précis, parle en angles et degrés.
- **Voix** : autoritaire, claire. « *Plan 17 : défense du Marché 7 Façades. 3 lignes de retranchement. 2 angles morts. 1 sortie de secours. Le plan est parfait. Mais je peux pas le plier. Il se plie pas. Alors je le roule. C'est le seul moyen.* »
- **Relations** : Chroniqueur Illusions `NPC_PEN_63` (utilise ses chroniques pour anticiper les attaques) ; Archiviste Plans `NPC_PEN_62` (compare ses plans avec la carte de Penwether) ; Forgeur Illusions `NPC_PEN_70` (voudrait utiliser les plans comme base d'illusions).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_69_01` | K0 | plans, defense | Il dessine des plans de défense pour Penwether — personne ne sait contre quoi | — |
| 2 | `QI_PEN_69_02` | K0 | plans, depliage | Ses plans ne se plient pas — le parchemin résiste | — |
| 3 | `QI_PEN_69_03` | K0 | plans, angle | Chaque plan a des angles parfaits — 90°, 45°, 60° — jamais d'erreur | — |
| 4 | `QI_PEN_69_04` | K1 | plan, realisation | Un plan qu'il a dessiné a été réalisé dans la ville — les fortifications sont apparues | `AFF>=40` |
| 5 | `QI_PEN_69_05` | K1 | plan, ennemi | Il dessine des formations ennemies qu'il n'a jamais vues — comme si quelqu'un les lui inspirait | `AFF>=55` |
| 6 | `QI_PEN_69_06` | K1 | plan, sans fin | Un plan déplié mesure 10 mètres — il montre une bataille qui dure 100 ans | — |
| 7 | `QI_PEN_69_07` | K2 | plan, vivant | Les pions sur ses cartes bougent la nuit — ils simulent des batailles toutes seules | `AFF>=70` |
| 8 | `QI_PEN_69_08` | K2 | plan, prediction | Un plan de 40 ans montre une attaque qui n'a jamais eu lieu — mais qui pourrait avoir lieu demain | `QUEST:QST_PEN_STRATEGE_01` |
| 9 | `QI_PEN_69_09` | K3 | plans, geometrie serveur | Les plans ne se plient pas parce qu'ils décrivent la structure réelle du serveur — plier le plan reviendrait à tordre le code | JAMAIS — déflection : *(il pose un plan à plat et essaie de le plier — le plan émet un son grave)* « Tu entends ? Le plan refuse. Il dit non. Le papier a une opinion. Depuis quand le papier a une opinion ? » |
| 10 | `QI_PEN_69_10` | KX | *(salle des plans)* | *(il déplie tous ses plans en même temps — ils couvrent la pièce)* « Si tu regardes assez longtemps, tu vois que tous les plans montrent la même bataille. Juste à des dates différentes. » | — |

## 4. Chaînage économique & quêtes

- **Quête** : `QST_PEN_STRATEGE_01` — Aider le Stratège à comprendre qui (ou quoi) lui inspire ses plans.
- **Fils rouges** : 🎭 Illusions (plans = structure du code), 📜 Ruines (la bataille éternelle), 🔮 Ville Fantôme (plans de la coque serveur).

## 5. Intégration Bot

- **Accueil** (`!parler strategie_conseil`) : *« Entre. Regarde le plan. Il montre l'invasion du Faubourg par le nord. Sauf qu'il date de 30 ans. Et l'invasion est pour demain. Alors je suis prêt. Je suis toujours prêt. »*
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 ; K3 (slot 9) jamais injecté.
- `!pnj_list` : visible.
