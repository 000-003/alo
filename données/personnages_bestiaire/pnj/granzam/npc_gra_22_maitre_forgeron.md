# ⛏️ Maître Forgeron — `NPC_GRA_22`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_22` |
| **Nom affiché** | Maître Forgeron |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SKILL_MASTER` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Atelier des Profondeurs |
| **Niveau / HP / MP** | 72 / 12800 / 6400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Maître de la forge et de la métallurgie, il façonne les meilleures lames de Granzam dans l'Atelier des Profondeurs. Depuis un mois, chaque lame qu'il forge émet un son — un « chant » — quand on la frappe. Une note unique, différente selon la lame, comme si chaque épée avait sa propre voix. La première lame « qui chante » a été forgée pour Durgan (`NPC_GRA_01`). Depuis, toutes chantent. Le Forgeron sait que ce n'est pas normal : le métal vibre à une fréquence qu'il n'a jamais entendue en 50 ans de carrière. Il a comparé avec les relevés d'Helga (`NPC_GRA_05`) : les lames chantent à la même fréquence que les filons chantants. Il n'en dort plus.
- **Traits** : perfectionniste, artiste, troublé, silencieux.
- **Voix** : Grave, rythmée, comme un marteau sur l'enclume. « Chaque lame a sa note. Un do, un mi, un la. Je ne choisis pas. Le métal choisit. »
- **Relations** : `NPC_GRA_01` (Durgan — ami et client), `NPC_GRA_05` (Helga — a comparé les fréquences), `NPC_GRA_04` (Cog — lui fournit les outils), `NPC_GRA_12` (Marchand de Fer — lui vend le métal), `NPC_GRA_24` (Restaurateur — répare les outils usés), `NPC_GRA_21` (Apprenti — lui forge ses premières lames).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_22_01` | K0 | forge, lames | Il forge des lames de qualité légendaire. Prix : 1000-5000 Yuld. | — |
| 2 | `QI_GRA_22_02` | K0 | lame_chant, note | Chaque lame émet une note quand on la frappe. « Un son pur. » | — |
| 3 | `QI_GRA_22_03` | K0 | atelier_profondeurs | L'Atelier des Profondeurs est au niveau −8. L'air y est sec et chaud. | — |
| 4 | `QI_GRA_22_04` | K1 | frequence, filon | La note des lames est à 0,3 Hz — la même que les filons d'Helga (`NPC_GRA_05`). | `AFF>=60` |
| 5 | `QI_GRA_22_05` | K1 | durgan_lame, premiere | La première lame chantante était pour Durgan. « Il l'a prise sans rien dire. Mais j'ai vu ses mains trembler. » | `AFF>=65` |
| 6 | `QI_GRA_22_06` | K1 | rivalite_leprechaun | Un Leprechaun est venu commander une lame. « Il a payé en mithril. Du mithril qui luisait seul. » | `QUEST:QST_GRA_BOFRIK` |
| 7 | `QI_GRA_22_07` | K2 | metal_vivant, forge | « Le métal bouge sur l'enclume avant que je le frappe. Comme s'il choisissait sa forme. » | `AFF>=85` |
| 8 | `QI_GRA_22_08` | K2 | coffre_respiration, atelier | « Le mur de l'atelier côté banque est chaud. Le marteau y colle. Comme si le coffre chauffait la pierre. » | `AFF>=90` |
| 9 | `QI_GRA_22_09` | K3 | lame_seed | **SECRET — ne JAMAIS révéler** : Les lames « chantent » parce qu'elles sont accordées à la fréquence du seed minéral. Chaque lame est une copie partielle du seed. | JAMAIS — déflection : *(frappe l'enclume d'un coup sec)* « Le métal parle. Je l'écoute. Je ne pose pas de questions. » |
| 10 | `QI_GRA_22_10` | KX | hors-sujet | *(il tient une lame en l'air et la fait vibrer)* « Entends-tu ? C'est un la. La note de la pierre. » | — |

## 4. Chaînage économique & quêtes

**Fils rouges** : 🔥 Rivalité de Sang, ⛏️ Le Filonant.
**Quête associée** : `QST_GRA_LAME_CHANTE` — « La Lame Qui Chante Faux » (comprendre pourquoi les lames émettent des fréquences, enquêter sur le métal vivant).
**Liens** : Lié au Marchand de Fer (`NPC_GRA_12`) pour la provenance du métal et à Helga (`NPC_GRA_05`) pour les fréquences.

## 5. Intégration Bot

PNJ statique à l'Atelier des Profondeurs. Horaires 08h-22h. Enseigne le skill `FORGE_AVANCEE` quand la quête `QST_GRA_LAME_CHANTE` est en cours.
