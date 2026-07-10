# 🕯️ Parfumeur Illusions — `NPC_PEN_44`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_44` |
| **Nom affiché** | Parfumeur Illusions |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (Odeurs illusoires) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Atelier Visages |
| **Niveau / HP / MP** | 6 / 280 / 550 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Parfumeur qui crée des odeurs illusoires — des senteurs qui n'existent pas mais qu'on sent. Un parfum de forêt sous la mer, un arôme de pain chaud dans les ruines vides. Mais son dernier parfum, qu'il appelle « Pluie Ancienne », sent la pluie d'avant. Les clients qui le sentent pleurent sans savoir pourquoi. Le parfum déclenche des souvenirs qui ne leur appartiennent pas. Il ne sait pas d'où vient la recette — elle lui est venue en rêve. Angle : parfum qui sent la pluie ancienne.
- **Traits** : rêveur, nez toujours en l'air, cherche l'odeur parfaite.
- **Voix** : aérienne, lente. « Tu sens ça ? La pluie sur la pierre ancienne. L'odeur de l'eau qui tombe sur des ruines qui n'ont jamais été mouillées. Ça te rappelle quelque chose ? À moi aussi. Mais je n'ai jamais vécu ça. »
- **Relations** : `NPC_PEN_40` (crée des odeurs pour ses déguisements) ; `NPC_PEN_42` (lui teint ses fils avec des parfums) ; `NPC_PEN_28` (lui fournit des bases liquides pour ses parfums).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_44_01` | K0 | parfums, illusions | Parfums illusoires : 25-150 Yrds le flacon | — |
| 2 | `QI_PEN_44_02` | K0 | odeurs, catalogue | Odeurs de forêt, mer, pain, pluie — toutes illusoires | — |
| 3 | `QI_PEN_44_03` | K0 | atelier, visages | Travaille à l'Atelier Visages, alambic dans l'arrière-salle | — |
| 4 | `QI_PEN_44_04` | K1 | pluie, ancienne | Parfum « Pluie Ancienne » — sent l'avant | — |
| 5 | `QI_PEN_44_05` | K1 | clients, pleurent | Les clients pleurent en le sentant — souvenirs qui ne sont pas les leurs | `AFF>=60` |
| 6 | `QI_PEN_44_06` | K1 | reve, recette | La recette lui est venue en rêve — il ne l'a pas inventée | `AFF>=65` |
| 7 | `QI_PEN_44_07` | K2 | parfum, memoire | Le parfum déclenche des mémoires du Cardinal — des souvenirs de code | `AFF>=80` |
| 8 | `QI_PEN_44_08` | K2 | pluie, source | La pluie ancienne est un enregistrement audio-olfactif intégré dans le code | `AFF>=85` |
| 9 | `QI_PEN_44_09` | K3 | parfum, data | Le Parfum « Pluie Ancienne » est une odeur générée à partir des données météo historiques du serveur, du temps d'avant la simulation. C'est la seule trace sensorielle de la réalité qui subsiste dans Penwether. Les clients pleurent parce que leur code reconnaît une donnée authentique — la seule vraie mémoire du monde d'avant, encapsulée dans un parfum | JAMAIS — déflection : *(il renifle son flacon)* « C'est juste un mélange. Résine, lichen des Citernes, une goutte d'eau grise. *(il inspire profondément)* …Mais ça sent le vrai. Le vrai vrai. Et ça, c'est pas censé exister ici. » |
| 10 | `QI_PEN_44_10` | KX | *(hors sujet)* | « Le parfum ment à ton nez. Mais ton cœur, lui, se souvient. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!buy_perfume_pen` (achat de parfum), `!custom_scent` (parfum personnalisé).
- Fil **🎭 Illusions / 🔮 Ville Fantôme** (parfum = données météo réelles).
- Fournisseur de `NPC_PEN_40`, `NPC_PEN_42`.

## 5. Intégration Bot

- **Accueil** (`!parler parfumeur illusions`) : *(Il agite un flacon sous ton nez)* « Sens ça. La pluie ancienne. Tu ne l'as jamais vécue, mais tu la reconnais. Pourquoi ? Je ne sais pas. Mais c'est beau. » |
- `!buy_perfume_pen` — achat, `!custom_scent` — personnalisé.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « parfum = données météo réelles/dernière trace sensorielle authentique » réservé à l'orchestrateur.
