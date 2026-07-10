# 🔨 Piqueur Terrils — `NPC_BRO_59`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_59` |
| **Nom affiché** | Piqueur Terrils |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (minage des terrils et extraction) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Terrils Publics (front de taille) |
| **Niveau / HP / MP** | 13 / 850 / 250 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Il manie le pic aux terrils depuis vingt ans. Il raconte que son pic frappe parfois tout seul, la nuit, posé contre la paroi — comme s'il poursuivait la veine sans lui. Il n'en parle qu'aux nouveaux trieurs, qui le prennent pour une légende de comptoir. Mais le Trieur `NPC_BRO_51` a vu le pic frapper le sol sans que personne le tienne.
- **Traits** : rustre, superstitieux, mémoire des veines — connaît chaque filon des terrils par cœur.
- **Voix** : rocailleuse, ponctuée de crachats de charbon mâché.
- **Relations** : Trieur Scories `NPC_BRO_51` (partage les terrils) ; Charbonnier Terrils `NPC_BRO_50` (se moque de ses histoires) ; Modeleur Métal `NPC_BRO_73` (lui a forgé son pic — le meilleur de Brokkheim).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_59_01` | K0 | minage, techniques | Les techniques de minage aux terrils : pic, coin, poudre expansive | — |
| 2 | `QI_BRO_59_02` | K0 | filons, carte | Carte des filons exploités et épuisés — connaissance publique | — |
| 3 | `QI_BRO_59_03` | K0 | metier, quotidien | Le quotidien du piqueur : horaires, dangers, fierté du métier | — |
| 4 | `QI_BRO_59_04` | K1 | pic, seul | Son pic frappe sans lui certaines nuits — il l'a pendu à un clou, il frappe le mur | `AFF>=60` |
| 5 | `QI_BRO_59_05` | K1 | pic, forge | Le pic forgé par `NPC_BRO_73` avec un alliage de mithril et de soufre froid | — |
| 6 | `QI_BRO_59_06` | K1 | nuits, rythme | Le pic frappe au même rythme que la Forge-Mère `NPC_BRO_71` — il a compté | `AFF>=70` |
| 7 | `QI_BRO_59_07` | K2 | veine, reactive | Le pic ne frappe que sur une veine spécifique — la veine de charbon qui rougit `NPC_BRO_50` | `AFF>=80` |
| 8 | `QI_BRO_59_08` | K2 | veine, profondeur | Sous la veine, il y a une couche de roche noire que le pic ne peut pas entamer — elle résonne | `AFF>=90` |
| 9 | `QI_BRO_59_09` | K3 | roche, enclume | La roche noire est la coque extérieure de l'Enclume du Cardinal — le pic frappe seul parce que le mithril de sa tête est « frère » du métal de l'Enclume et l'appelle | JAMAIS — déflection : *(il crache par terre, saisit son pic et frappe un bloc)* « C'est un bon pic. Un bon pic frappe droit. Le reste, c'est des histoires de vieux pour effrayer les trieurs. » |
| 10 | `QI_BRO_59_10` | KX | *(tout le reste)* | « Le filon attend. Pas celui qui parle. » | — |

## 4. Chaînage économique & quêtes

- Service : guidance des joueurs dans le minage des terrils.
- K3 : l'Enclume sous les terrils — fil Enclume du Cardinal.
- `QST_BRO_PIC_01` : enquêter sur le pic qui frappe seul et la roche noire.

## 5. Intégration Bot

- **Accueil** (`!parler piqueur`) : *« Le pic connaît le filon mieux que l'œil. L'œil se trompe. Le pic, non. »*
- `!minage_conseil` : conseils de minage (bonus XP minage pour les joueurs).
