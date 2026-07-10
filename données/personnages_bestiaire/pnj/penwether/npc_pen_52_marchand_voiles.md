# 🕯️ Marchand Voiles — `NPC_PEN_52`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_52` |
| **Nom affiché** | Marchand Voiles |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_SPR_CAP_001B` — Penwether, Faubourg Masques |
| **Niveau / HP / MP** | 5 / 150 / 180 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Marchand de voiles tissées d'illusions légères. Chaque voile, portée sur les épaules, déforme la réalité autour du porteur — mais le Marchand a découvert par hasard qu'une de ses voiles, la « Voile Dévoile », fait l'inverse : elle dissimule l'illusion et montre la vérité nue. Il ne la vend pas. Il la garde sous son comptoir. Il a peur de ce qu'elle révèle.
- **Traits** : discret, fuyant, parle à voix basse, regard toujours par-dessus l'épaule.
- **Voix** : chuchotée, comme s'il craignait d'être entendu par les murs. « *La voile que tu cherches, elle est pas sur l'étal. Celle-là, elle montre ce qui est vraiment là. Et crois-moi, tu veux pas voir.* »
- **Relations** : Marchand Teintures `NPC_PEN_53` (voisin d'échoppe, lui achète des pigments) ; Marchand Masques Fins `NPC_PEN_57` (concurrent indirect — les voiles concurrencent les masques) ; Garde Façades `NPC_PEN_50` (l'avertit quand les murs changent).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_52_01` | K0 | voiles, illusion | Toutes ses voiles produisent des illusions visuelles légères — camouflage, flou, dédoublement | — |
| 2 | `QI_PEN_52_02` | K0 | voile, de-voile | Une voile fait l'inverse : elle supprime les illusions autour du porteur | — |
| 3 | `QI_PEN_52_03` | K0 | provenance, ruines | Le tissu provient d'un métier à tisser trouvé dans les ruines — il tisse tout seul | — |
| 4 | `QI_PEN_52_04` | K1 | voile, dessous | Il a porté la Voile Dévoile une fois : il a vu le Faubourg Masques sans ses masques | `AFF>=40` |
| 5 | `QI_PEN_52_05` | K1 | vision, cauchemar | Sous la voile, les Spriggans étaient des silhouettes de code — il a vu leurs chaînes | `AFF>=55` |
| 6 | `QI_PEN_52_06` | K1 | client, sans-visage | Un client sans visage a acheté trois voiles ordinaires — la Voile Dévoile est devenue chaude sous le comptoir | — |
| 7 | `QI_PEN_52_07` | K2 | voile, verrou | La Voile Dévoile refuse de fonctionner près de la Salle Conseil Voilé | `AFF>=70` |
| 8 | `QI_PEN_52_08` | K2 | tissage, memoire | Le métier à tisser produit des motifs qui ressemblent à des cartes de strates | `QUEST:QST_PEN_VOILES_01` |
| 9 | `QI_PEN_52_09` | K3 | voile, verite systeme | La Voile Dévoile ne supprime pas les illusions — elle désactive le rendu d'illusion du serveur pour le porteur | JAMAIS — déflection : *(il enroule la voile autour de ses épaules et disparaît à moitié)* « Je l'ai portée une fois. J'ai vu les fils. Les fils du monde. Je la porterai plus jamais. » |
| 10 | `QI_PEN_52_10` | KX | *(hors étal)* | *(il pose une voile sur sa tête et devient invisible)* « Tout le monde cherche à voir. Personne ne cherche à ne pas être vu. » | — |

## 4. Chaînage économique & quêtes

- **Achats** : pigments (3 po), fil d'illusion (8 po).
- **Ventes** : Voile d'Illusion (30 po), Voile de Camouflage (45 po), Voile Dévoile (non vendue — quête).
- **Quête** : `QST_PEN_VOILES_01` — Aider le Marchand à comprendre d'où vient le métier à tisser.
- **Fils rouges** : 🎭 Illusions (voile qui révèle), 📜 Ruines (métier à tisser ancien), 🔮 Ville Fantôme (voir le code sous l'illusion).

## 5. Intégration Bot

- **Accueil** (`!parler marchand_voiles`) : *« Choisis une voile. Mais choisis bien. Y en a une qui montre la vérité, et la vérité, ici… elle est pas belle à voir. »*
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 ; K3 (slot 9) jamais injecté.
- `!pnj_list` : visible.
