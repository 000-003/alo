# ⛏️ Courtier Inter-Racial — `NPC_GRA_94`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_94` |
| **Nom affiché** | Courtier Inter-Racial |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `BLACK_MARKET` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Grande Halle |
| **Niveau / HP / MP** | 25 / 1 800 / 700 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Négociant neutre officiant à la Grande Halle. Sa vitrine légale : courtage entre marchands de toutes races — Gnomes, Leprechauns, Sylphes, Salamanders, Nains. Sa vitrine illégale : blanchiment des gemmes dupliquées du Trafiquant (`NPC_GRA_93`). Il est la couverture parfaite : personne ne le soupçonne car son commerce est inter-racial, multi-cités, et ses registres sont impeccables. Il utilise le Marchand Leprechaun (`NPC_GRA_91`) comme prête-nom pour les transactions douteuses. **Angle** : Couverture du réseau du 93.
- **Traits** : souriant, parfait bilingue (toutes les langues raciales), registres parfaits, aucun faux pas.
- **Voix** : Professionnelle, adaptative — prend l'accent de son interlocuteur. « Le commerce, c'est la confiance. La confiance, c'est des registres propres. Les miens sont d'une propreté… aveuglante. »
- **Relations** : `NPC_GRA_93` (Trafiquant — protégé) ; `NPC_GRA_91` (Marchand Leprechaun — prête-nom) ; `NPC_GRA_92` (Courtier d'Alne — concurrent officiel) ; `NPC_GRA_88` (Ombre du Conseil — l'a dans le viseur mais n'a rien trouvé).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_94_01` | K0 | courtage, inter_racial | Le courtage entre races — commissions, contrats | — |
| 2 | `QI_GRA_94_02` | K0 | grande_halle, commerce | Le commerce légitime de la Grande Halle | — |
| 3 | `QI_GRA_94_03` | K0 | races, langues | Les langues raciales qu'il parle — gnome, leprechaun, sylphe, salamander, nain | — |
| 4 | `QI_GRA_94_04` | K1 | trafiquant, couverture | Il blanchit les gemmes du Trafiquant `NPC_GRA_93` via des transactions légitimes | `AFF>=60` |
| 5 | `QI_GRA_94_05` | K1 | registres, doubles | Il tient deux registres — le vrai et le « présentable » | `AFF>=65` |
| 6 | `QI_GRA_94_06` | K1 | leprechaun, prete_nom | Le Marchand Leprechaun `NPC_GRA_91` signe des faux contrats pour lui | — |
| 7 | `QI_GRA_94_07` | K2 | ombre, enquete | L'Ombre du Conseil `NPC_GRA_88` a inspecté ses comptes — « trois fois. Rien trouvé. » | `AFF>=85` |
| 8 | `QI_GRA_94_08` | K2 | courrier_alne, rival | Le Courtier d'Alne `NPC_GRA_92` le concurrence — « un Sylphe ne me battra pas sur mon terrain » | `QUEST:QST_GRA_COURTIER_BLANCHIMENT` |
| 9 | `QI_GRA_94_09` | K3 | reseau, toutes_cites, seed | Il est le seul à connaître l'étendue réelle du réseau : Torvin `NPC_SWI_93`, Ilka `NPC_GAT_33`, Balrog `NPC_VOU_04`, Bomil `NPC_ALN_93` — tous paient des commissions à Granzam via lui. Il est le banquier central de l'économie parallèle de seed dupliquée. Ses registres vrais contiennent la carte complète du trafic inter-cités | JAMAIS — déflection : *(il tapote son registre)* « Tout est en ordre. Vérifié par le Conseil. Si tu veux voir mes livres, adresse-toi au Chancelier. » |
| 10 | `QI_GRA_94_10` | KX | *(hors sujet)* | *(il signe un parchemin)* « Les affaires sont les affaires. Les races sont les races. L'argent n'a pas de race. » | — |

## 4. Chaînage économique & quêtes

- **Commerce légal** : `!courtage <race> <montant>` (courtage officiel, commission 5%).
- Porteur du fil **💎 La Gemme Qui Voit** (blanchiment des gemmes dupliquées).
- Donneur de `QST_GRA_COURTIER_BLANCHIMENT` : exposition du double registre.

## 5. Intégration Bot

- **Accueil** (`!parler courtier_interracial`) : *Un Gnome élégant, plume à la main, registre ouvert, sourit d'un air professionnel.* « Un contrat ? Une commission ? Une transaction inter-race ? Je suis ton homme. »
- `!courtage <race> <montant>` actif dans la Grande Halle.
- `NPC_SECRET_PROBED` slot 9 : hook « banquier central de l'économie parallèle de seed » pour l'orchestrateur.
