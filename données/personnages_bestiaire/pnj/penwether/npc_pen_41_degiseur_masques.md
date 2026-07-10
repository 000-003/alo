# 🕯️ Déguiseur Masques — `NPC_PEN_41`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_41` |
| **Nom affiché** | Déguiseur Masques |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (Maquillage de masques) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Atelier Visages |
| **Niveau / HP / MP** | 8 / 350 / 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Maquilleur à l'Atelier Visages. Il peint les masques, les visages, les prothèses. Il utilise des pigments spéciaux qui donnent vie aux expressions. Mais depuis peu, ses peintures bougent sur les masques. Un masque qu'il a peint avec un sourire se retrouve avec une expression neutre le lendemain. La peinture migre, change de place, forme des motifs qu'il n'a pas dessinés. Il a peur que ce soit ses doigts qui bougent sans qu'il s'en rende compte. Angle : la peinture bouge.
- **Traits** : artiste sensible, mains toujours tachées, regarde ses doigts d'un air soupçonneux.
- **Voix** : douce, inquiète. « J'ai peint un sourire. Ce matin, c'était un sourire. Là, c'est une grimace. Je n'ai pas touché au masque. Je le jure. »
- **Relations** : `NPC_PEN_33` (lui fournit des masques à peindre) ; `NPC_PEN_40` (collègue, maître des déguisements) ; `NPC_PEN_43` (lui fournit des vernis pour fixer ses peintures).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_41_01` | K0 | maquillage, masques | Maquillage et peinture de masques : 20-100 Yrds | — |
| 2 | `QI_PEN_41_02` | K0 | pigments, atelier | Utilise des pigments rares des ruines | — |
| 3 | `QI_PEN_41_03` | K0 | service, atelier | Travaille à l'Atelier Visages, salle de peinture | — |
| 4 | `QI_PEN_41_04` | K1 | peinture, bouge | La peinture se déplace sur les masques après séchage | — |
| 5 | `QI_PEN_41_05` | K1 | dessins, spontanes | Des motifs apparaissent qu'il n'a pas peints | `AFF>=60` |
| 6 | `QI_PEN_41_06` | K1 | couleurs, vivantes | Les couleurs changent selon l'angle de vue — vivantes | `AFF>=65` |
| 7 | `QI_PEN_41_07` | K2 | peinture, code | Les pigments réagissent au code du Cardinal — ils changent selon les scripts actifs | `AFF>=80` |
| 8 | `QI_PEN_41_08` | K2 | masques, memoires | Les masques peints gardent une mémoire des expressions | `AFF>=85` |
| 9 | `QI_PEN_41_09` | K3 | pigment, donnees | Les pigments sont des encres de données — restes d'une imprimante de code abandonnée. Chaque coup de pinceau écrit une ligne dans la mémoire du masque. Les motifs qui apparaissent sont des données résiduelles du Cardinal qui s'impriment sur les masques. La peinture ne bouge pas — elle s'écrit | JAMAIS — déflection : *(il essuie un masque)* « C'est de la peinture. Ça sèche. Ça craquelle. Ça bouge pas. *(il regarde le chiffon)* …C'est quoi cette couleur ? Je l'ai jamais utilisée. » |
| 10 | `QI_PEN_41_10` | KX | *(hors sujet)* | « La peinture ne ment pas. Les pinceaux, si. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!paint_mask_pen` (peinture de masque), `!custom_design` (design personnalisé).
- Fil **🎭 Illusions** (pigments = encres de données).
- Client/Fournisseur de `NPC_PEN_33`, `NPC_PEN_40`, `NPC_PEN_43`.

## 5. Intégration Bot

- **Accueil** (`!parler deguiseur masques`) : *(Il tient un pinceau, hésite)* « Quelle expression veux-tu ? Joie ? Tristesse ? Colère ? Je peux tout peindre. Mais je ne garantis pas que ça reste. » |
- `!paint_mask_pen` — peinture, `!custom_design` — design.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « pigments = encres de données du Cardinal » réservé à l'orchestrateur.
