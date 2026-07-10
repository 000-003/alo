# ⛏️ Maître Forgeron Lames — `NPC_GRA_60`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_60` |
| **Nom affiché** | Maître Forgeron Lames |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SKILL_MASTER` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Atelier des Profondeurs |
| **Niveau / HP / MP** | 75 / 13 400 / 6 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Forgeron spécialisé dans les lames fines en mithril — les seules armes capables de couper le granit des Carrières. Il forge pour l'élite du Bastion et pour le Conseil. Depuis qu'il utilise un lot de mithril livré par le Marchand de Mithril (`NPC_GRA_68`), ses lames ne s'émoussent jamais. Il les a testées : après 1 000 coupes, le fil est aussi net qu'au premier jour. Il ignore que le mithril qu'il utilise provient d'un filon corrompu par le seed de génération. Il a montré ses résultats à l'Enchanteur (`NPC_GRA_61`), qui n'a rien su expliquer. (Angle : lame qui ne s'émousse pas = seed interaction.)
- **Traits** : perfectionniste, enthousiaste, méticuleux, mystifié.
- **Voix** : Voix enthousiaste, rapide, comme un marteau qui s'emballe. « Regarde ! Mille coupes et le fil est intact ! C'est un miracle, je te dis ! »
- **Relations** : `NPC_GRA_68` (Marchand Mithril — fournisseur), `NPC_GRA_61` (Enchanteur — consultant), `NPC_GRA_03` (Bofrik — collègue forgeron), `NPC_GRA_22` (Maître Forgeron — rival amical), `NPC_GRA_62` (Apprenti — élève).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_60_01` | K0 | forge, lames_fines | Il forge des lames fines en mithril. | — |
| 2 | `QI_GRA_60_02` | K0 | mithril, durete | Le mithril de Granzam est réputé pour sa dureté exceptionnelle. | — |
| 3 | `QI_GRA_60_03` | K0 | atelier, profondeurs | Il travaille à l'Atelier des Profondeurs, niveau −8. | — |
| 4 | `QI_GRA_60_04` | K1 | lame, emousser | Ses lames ne s'émoussent jamais, même après des centaines de coupes. | `AFF>=60` |
| 5 | `QI_GRA_60_05` | K1 | mithril, anormal | Le lot de mithril qu'il utilise est différent : il brille faiblement sans source de lumière. | `AFF>=65` |
| 6 | `QI_GRA_60_06` | K1 | enchanteur, analyse | L'Enchanteur (`NPC_GRA_61`) n'a trouvé aucune magie sur le métal. « C'est physique, pas magique. » | — |
| 7 | `QI_GRA_60_07` | K2 | mithril, provenance | Le Marchand de Mithril (`NPC_GRA_68`) refuse de dire d'où il vient. « Il vient de la mine. Quelle mine ? » | `AFF>=85` |
| 8 | `QI_GRA_60_08` | K2 | filon, corruption | Le mithril garde sa structure à l'échelle atomique — comme s'il était figé dans le temps. | `QUEST:QST_GRA_MITHRIL_ETERNE` |
| 9 | `QI_GRA_60_09` | K3 | lame_seed_interaction | La lame ne s'émousse pas car le mithril est une émanation directe du seed matériel — il ignore l'usure car il est re-généré à chaque tick serveur. | JAMAIS — déflection : *(il caresse le fil de la lame)* « Je ne sais pas pourquoi elle dure. Je sais qu'elle dure. Et je la forgerai tant que le métal parlera. » |
| 10 | `QI_GRA_60_10` | KX | *(tout le reste)* | *(il fait tourner une lame entre ses doigts)*  « Tu vois cette lumière ? Le métal sourit. »

## 4. Chaînage économique & quêtes

- Enseigne le skill `FORGE_MITHRIL`.
- Porteur du fil **⛏️ Le Filonan** (mithril corrompu par le seed).
- Donneur de `QST_GRA_MITHRIL_ETERNE` : enquêter sur l'origine du mithril anormal.

## 5. Intégration Bot

- **Accueil** (`!parler forgeron_lames`) : *Devant une enclume, il polir une lame miroitante.* « Approche, regarde ça. Mille coupes et comme neuve. Tu veux apprendre ? »
- `!forge_lame <type>` (forge une lame fine, payant).
- `NPC_SECRET_PROBED` slot 9 : hook « mithril = émanation du seed matériel » pour l'orchestrateur.