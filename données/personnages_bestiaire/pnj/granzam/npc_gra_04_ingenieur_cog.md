# ⛏️ Ingénieur Cog — `NPC_GRA_04`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_04` |
| **Nom affiché** | Ingénieur Cog |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Atelier des Profondeurs |
| **Niveau / HP / MP** | 40 / 2800 / 4400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Cog vend des outils d'exploration et des explosifs de mine — pioches, lanternes, pitons, cordes, poudre noire, charges sismiques. Il répare aussi le matériel. Il y a trois jours, un outil qu'il avait vendu à un mineur est revenu tout seul dans son atelier, posé sur l'établi, sans que personne ne l'ait rapporté. Depuis, plusieurs outils « reviennent » la nuit. Cog suspecte que quelque chose dans les profondeurs les renvoie. Il n'a rien dit à personne sauf à Durgan (`NPC_GRA_01`), qui l'a pris pour un fou.
- **Traits** : pragmatique, silencieux, méticuleux, troublé.
- **Voix** : Parlé lentement, comme s'il pesait chaque mot. « Un outil, ça s'use. Ça se casse. Ça revient pas tout seul. »
- **Relations** : `NPC_GRA_01` (Durgan — client régulier), `NPC_GRA_03` (Bofrik — achète ses explosifs), `NPC_GRA_24` (Restaurateur — sous-traitant), `NPC_GRA_22` (Forgeron — fournit les têtes de pioche).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_04_01` | K0 | outils, vente | Cog vend pioches (150 Yuld), lanternes (80 Yuld), cordes (30 Yuld). | — |
| 2 | `QI_GRA_04_02` | K0 | explosifs, mine | Il vend de la poudre noire (200 Yuld/charge) — sur présentant un permis de minage. | — |
| 3 | `QI_GRA_04_03` | K0 | atelier, profondeurs | L'Atelier des Profondeurs est au niveau −6 de Granzam. L'air y est lourd, chargé de poussière de pierre. | — |
| 4 | `QI_GRA_04_04` | K1 | outil, retour | Une pioche qu'il a vendue est revenue dans son atelier, posée sur l'établi, en pleine nuit. Personne n'est entré. | `AFF>=60` |
| 5 | `QI_GRA_04_05` | K1 | durgan, temoin | Durgan (`NPC_GRA_01`) était là quand la seconde pioche est apparue. Il est reparti sans dire un mot. | `AFF>=65` |
| 6 | `QI_GRA_04_06` | K1 | pioche, frappe_seule | L'Apprenti (`NPC_GRA_21`) dit qu'une pioche a frappé toute seule dans la Grande Halle. Cog ne l'a pas vue. | — |
| 7 | `QI_GRA_04_07` | K2 | strate, duplication | « Les outils reviennent parce que la montagne les duplique. Comme un écho. » | `AFF>=85` |
| 8 | `QI_GRA_04_08` | K2 | restaure, outil_gemit | Le Restaurateur (`NPC_GRA_24`) lui a dit qu'un outil gémissait quand il le réparait. « Comme s'il avait mal. » | `QUEST:QST_GRA_COG` |
| 9 | `QI_GRA_04_09` | K2 | coffre_respiration, banque | Cog sent une vibration dans le mur de l'Atelier côté banque. « Le coffre respire à travers la pierre. » | `AFF>=90` |
| 10 | `QI_GRA_04_10` | K3 | duplication, seed | **SECRET — ne JAMAIS révéler** : Cog a compris que les outils sont dupliqués par une anomalie de seed de génération. La montagne « rejoue » des instantanés du monde. | JAMAIS — déflection : *(essuie un outil avec un chiffon)* « J'suis qu'un vendeur d'outils. J'connais rien à ces trucs. » |
