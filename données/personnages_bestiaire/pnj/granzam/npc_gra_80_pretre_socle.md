# ⛏️ Prêtre du Socle — `NPC_GRA_80`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_80` |
| **Nom affiché** | Prêtre du Socle |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Autel de Résurrection |
| **Niveau / HP / MP** | 28 / 1 600 / 1 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Prêtre en chef de l'Autel de Résurrection. Il chante les litanies de pierre qui ramènent les âmes des défunts. Il y a un mois, il a ressuscité un mineur mort dans un éboulement — l'homme est revenu entièrement guéri, trop guéri. Aucune cicatrice, aucun souvenir de la mort, une vivacité anormale. Depuis, le Prêtre a peur de son propre chant : il guérit trop bien, comme si la pierre de l'autel amplifiait sa magie au-delà du raisonnable. **Angle** : Un chant qui guérit trop bien.
- **Traits** : pieux, inquiet, voix mélodieuse, mains tremblantes après les résurrections.
- **Voix** : Pleine, caverneuse, chantante — des résonances qui semblent venir de plusieurs bouches à la fois. « La pierre t'accueille, voyageur. Repose en sa paix… et reviens plus fort. »
- **Relations** : `NPC_GRA_81` (Prêtresse des Veines — collègue) ; `NPC_GRA_82` (Acolyte de Roche — assistant) ; `NPC_GRA_83` (Vestale de Granit — supervise les rites) ; `NPC_GRA_85` (Fossoyeur — lui amène les corps).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_80_01` | K0 | autel, resurrection | Fonctionnement de l'Autel de Résurrection de Granzam | — |
| 2 | `QI_GRA_80_02` | K0 | chant, litanie | Les litanies de pierre — chants rituels de résurrection | — |
| 3 | `QI_GRA_80_03` | K0 | pretre, role | Son rôle de Prêtre du Socle — gardien des rituels | — |
| 4 | `QI_GRA_80_04` | K1 | resurrection, excessive | Un mineur ressuscité est revenu sans aucune séquelle — « trop parfait » | `AFF>=60` |
| 5 | `QI_GRA_80_05` | K1 | chant, amplification | Son chant résonne dans l'autel — le son revient multiplié | `AFF>=65` |
| 6 | `QI_GRA_80_06` | K1 | autel, pierre | La pierre de l'autel est chaude au toucher — anormal pour du granit | — |
| 7 | `QI_GRA_80_07` | K2 | resonance, coeur | La résonance de son chant correspond à la fréquence du sous-sol du Conseil | `AFF>=85` |
| 8 | `QI_GRA_80_08` | K2 | acolyte, observation | L'Acolyte `NPC_GRA_82` a vu l'autel « respirer » pendant le chant | `QUEST:QST_GRA_CHANT_TROP_FORT` |
| 9 | `QI_GRA_80_09` | K3 | autel, seed, amplification | L'Autel de Résurrection est connecté au Cœur de Granit `NPC_GRA_00` — le granit amplifie la magie de résurrection en puisant directement dans le seed de régénération du monde. Chaque résurrection consomme une infime portion de la seed, ce qui use la matrice du monde plus vite que prévu | JAMAIS — déflection : *(il cesse de chanter net)* « Le chant est un don de la pierre. Je ne contrôle pas ce qu'elle donne. Si elle donne trop… ce n'est pas mon affaire. » |
| 10 | `QI_GRA_80_10` | KX | *(hors sujet)* | *(il ajuste son étole de granit)* « Les âmes ont besoin de chansons, pas de questions. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!resurrection <joueur>` (résurrection, buff temporaire Vigueur +20%).
- Porteur du fil **🔮 Le Noyau de Pierre** (l'autel pompe la seed du monde).
- Donneur de `QST_GRA_CHANT_TROP_FORT` : enquête sur l'amplification de l'autel.

## 5. Intégration Bot

- **Accueil** (`!parler pretre_socle`) : *Debout devant l'autel, les mains posées sur la pierre chaude, il psalmodie doucement.* « La mort n'est qu'une porte. La pierre est la clé. »
- `!resurrection <joueur>` actif à l'Autel de Résurrection.
- `NPC_SECRET_PROBED` slot 9 : hook « autel = seed de régénération du monde » pour l'orchestrateur.
