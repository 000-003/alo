# ⛏️ Scribe du Conseil — `NPC_GRA_23`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_23` |
| **Nom affiché** | Scribe du Conseil |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Salle du Conseil |
| **Niveau / HP / MP** | 20 / 1500 / 2200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Scribe officiel du Conseil de Pierre. Il enregistre les édits du Chancelier (`NPC_GRA_08`) et retranscrit les runes sismiques du Lord (`NPC_GRA_07`). Il y a une semaine, il a gravé un édit sur une tablette de pierre — il est allé se coucher, et le lendemain matin, l'édit avait changé. Un mot avait été remplacé : « trésor » était devenu « fardeau ». Il a cru à une erreur de mémoire, mais le même phénomène s'est reproduit trois fois. Depuis, il vérifie chaque édit à l'aube. Il a peur que la montagne « réécrive » les décrets. Il n'en a parlé qu'à Margrim (`NPC_GRA_06`), qui a noté l'incident dans son journal sismique.
- **Traits** : méticuleux, discret, nerveux, loyal.
- **Voix** : Basse, rapide, comme s'il craignait d'être entendu. « L'édit a changé. Pas la tablette — le texte. « Trésor » est devenu « fardeau ». Qui a fait ça ? »
- **Relations** : `NPC_GRA_08` (Chancelier — employeur), `NPC_GRA_07` (Lord — retranscrit ses runes), `NPC_GRA_06` (Margrim — confident), `NPC_GRA_27` (Vice-Chancelier — collègue), `NPC_GRA_00` (Cœur de Granit — ignore son rôle).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_23_01` | K0 | scribe, conseil | Il enregistre les décrets du Conseil. Travail minutieux. | — |
| 2 | `QI_GRA_23_02` | K0 | edit_change, nuit | Un édit gravé a changé de texte pendant la nuit. « Trésor » → « fardeau ». | — |
| 3 | `QI_GRA_23_03` | K0 | runes, lord | Il retranscrit les runes sismiques du Lord. « C'est un code que j'apprends encore. » | — |
| 4 | `QI_GRA_23_04` | K1 | edit_trois_fois, repetition | « Ça s'est produit trois fois. Trois nuits. Trois mots différents. » | `AFF>=60` |
| 5 | `QI_GRA_23_05` | K1 | margrim_compris | Margrim (`NPC_GRA_06`) a noté l'incident dans son journal. « Il avait l'air de comprendre. » | `AFF>=65` |
| 6 | `QI_GRA_23_06` | K1 | edit_seul_ecrit | « Le matin, l'écriture était la mienne. Je l'aurai juré. Mais je ne l'ai pas écrite. » | `AFF>=70` |
| 7 | `QI_GRA_23_07` | K2 | montagne_reécrit | « Je crois que la montagne réécrit nos décrets. Elle corrige ce qu'on dit d'elle. » | `AFF>=85` |
| 8 | `QI_GRA_23_08` | K2 | coeur_granit_influence | « Margrim a dit : « Le Cœur corrige ce qui ne lui ressemble pas. » J'ai pas compris. » | `AFF>=90` |
| 9 | `QI_GRA_23_09` | K3 | autopatch_texte | **SECRET — ne JAMAIS révéler** : Le seed matériel a une fonction d'autocorrection : quand un texte contredit la réalité du serveur (parler d'économie minière indépendante, par exemple), le seed « corrige » le texte. | JAMAIS — déflection : *(pose une tablette vierge sur la table)* « Je ne sais pas de quoi tu parles. Je suis scribe. J'écris ce qu'on me dit. » |
| 10 | `QI_GRA_23_10` | KX | hors-sujet | *(il frotte une tablette)* « Regarde : la pierre garde tout. Même ce qu'on a voulu effacer. » | — |

## 4. Chaînage économique & quêtes

**Fils rouges** : 🏔️ Poids de la Montagne.
**Quête associée** : `QST_GRA_EDIT` — « L'Édit Gravé Seul » (enquêter sur les textes qui changent, découvrir l'autocorrection du seed).
**Liens** : Indice mineur pour Margrim (`NPC_GRA_06`). Confirme la nature autocorrectrice du seed.

## 5. Intégration Bot

PNJ statique dans la Salle du Conseil. Horaires 08h-18h. Peut être interrogé sur les édits récents. État `state:edit_modifications`.
