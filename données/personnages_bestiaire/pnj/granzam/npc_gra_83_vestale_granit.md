# ⛏️ Vestale de Granit — `NPC_GRA_83`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_83` |
| **Nom affiché** | Vestale de Granit |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Autel de Résurrection |
| **Niveau / HP / MP** | 22 / 1 200 / 900 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Vestale supervise les rites de résurrection et les cérémonies de pleine lune. Elle est responsable du « Chant de Granit » — un rite hebdomadaire qui résonne dans toute la cité. Depuis trois semaines, le rite est devenu assourdissant. Les fidèles se bouchent les oreilles, la pierre vibre, des fissures apparaissent dans les murs de l'autel. La Vestale continue de chanter, car elle ne peut pas s'arrêter — une fois le rite commencé, sa voix ne lui appartient plus. **Angle** : Un rite qui assourdit.
- **Traits** : volontaire, puissante, chant profond, voix qui fissure la pierre.
- **Voix** : Grave et puissante, presque masculine pour une Gnome. Elle résonne dans la cage thoracique. Quand elle chante, les pierres tremblent. « Éloigne-toi des murs pendant le rite. Je ne garantis rien. »
- **Relations** : `NPC_GRA_80` (Prêtre — alterne les rites) ; `NPC_GRA_81` (Prêtresse — ne peut plus chanter avec elle) ; `NPC_GRA_82` (Acolyte — souffre de ses chants).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_83_01` | K0 | rite, granit | Le Chant de Granit — rite hebdomadaire, horaires | — |
| 2 | `QI_GRA_83_02` | K0 | vestale, role | Son rôle de Vestale — gardienne des rites majeurs | — |
| 3 | `QI_GRA_83_03` | K0 | autel, ceremonies | Les cérémonies de l'Autel — pleine lune, équinoxe de pierre | — |
| 4 | `QI_GRA_83_04` | K1 | chant, assourdissant | Son chant fissure les murs maintenant — ça n'arrivait pas avant | `AFF>=60` |
| 5 | `QI_GRA_83_05` | K1 | voix, involontaire | Une fois le rite commencé, elle ne peut plus s'arrêter — sa voix « continue seule » | `AFF>=65` |
| 6 | `QI_GRA_83_06` | K1 | acolyte, souffrance | L'Acolyte `NPC_GRA_82` saigne des oreilles après les rites | — |
| 7 | `QI_GRA_83_07` | K2 | voix, frequence | Sa voix a changé de fréquence — elle est plus grave qu'avant, en dessous du seuil humain | `AFF>=85` |
| 8 | `QI_GRA_83_08` | K2 | rite, hors_controle | Le dernier rite a ouvert une fissure dans le sol de l'autel — on voit une lueur en dessous | `QUEST:QST_GRA_CHANT_FISSURE` |
| 9 | `QI_GRA_83_09` | K3 | chant, seed, resonance | Le Chant de Granit résonne à la fréquence exacte du Cœur de Granit `NPC_GRA_00` — le rite est en réalité une synchronisation de seed. Le Cardinal utilise la voix de la Vestale pour calibrer la résonance du monde souterrain. Les fissures sont des surcharges de seed quand la synchronisation échoue | JAMAIS — déflection : *(elle détourne le regard)* « Je ne suis qu'une chanteuse. La pierre décide de la note. Si elle veut une note qui casse, je la chante. Point. » |
| 10 | `QI_GRA_83_10` | KX | *(hors sujet)* | *(elle inspire profondément, prête à chanter)* « Recule-toi. Ça va vibrer. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!chant_granit` (buff temporaire END +25% pendant le rite).
- Porteur du fil **🔮 Le Noyau de Pierre** (le chant calibre la seed).
- Donneur de `QST_GRA_CHANT_FISSURE` : explorer la fissure sous l'autel.

## 5. Intégration Bot

- **Accueil** (`!parler vestale`) : *Elle se tient droite devant l'autel, les mains jointes sur la poitrine.* « Le rite approche. Si tu veux rester, bouche-toi les oreilles et ne touche pas les murs. »
- `!chant_granit` actif à l'Autel de Résurrection (cooldown 7 jours).
- `NPC_SECRET_PROBED` slot 9 : hook « synchronisation de seed par résonance vocale » pour l'orchestrateur.
