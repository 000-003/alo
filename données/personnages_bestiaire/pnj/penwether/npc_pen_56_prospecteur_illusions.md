# 🕯️ Prospecteur Illusions — `NPC_PEN_56`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_56` |
| **Nom affiché** | Prospecteur Illusions |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` |
| **Zone** | `ZONE_SPR_CAP_001D` — Penwether, Terres Grises |
| **Niveau / HP / MP** | 22 / 1 000 / 280 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Prospecteur passe sa vie à chercher des failles dans le tissu des ruines — des endroits où l'illusion est si fine qu'on voit à travers. Il a trouvé plusieurs failles. La dernière, dans les Terres Grises, ne montrait pas un autre lieu de Penwether : elle montrait du noir. Un noir absolu, sans étoiles, sans sol, sans air. Il a passé trois jours devant, à regarder le noir. Depuis, il voit des choses bouger dans sa vision périphérique. Il veut savoir ce qu'il y a de l'autre côté.
- **Traits** : fiévreux, obsédé, regard perçant, toujours un outil à la main.
- **Voix** : rapide, saccadée. « *T'as déjà vu une faille ? Une vraie ? Pas une fissure dans le mur — une faille dans le monde. Le bord de l'image. J'en ai trouvé une. Elle donne sur rien. Et rien, il bouge.* »
- **Relations** : Vétéran Ruineses `NPC_PEN_55` (se sont croisés dans les profondeurs) ; Forgeur Illusions `NPC_PEN_70` (voudrait lui faire analyser une faille) ; Vitrier Illusions `NPC_PEN_74` (lui a acheté un outil pour « voir à travers »).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_56_01` | K0 | failles, ruines | Il existe des failles dans les ruines où l'illusion de la ville ne s'est pas correctement rendue | — |
| 2 | `QI_PEN_56_02` | K0 | terres, grises | Les Terres Grises contiennent le plus grand nombre de failles connues | — |
| 3 | `QI_PEN_56_03` | K0 | noir, faille | La faille qu'il a trouvée montre un noir absolu — pas un endroit, une absence | — |
| 4 | `QI_PEN_56_04` | K1 | noir, mouvement | Il a vu des formes bouger dans le noir — comme des ombres sans source | `AFF>=40` |
| 5 | `QI_PEN_56_05` | K1 | faille, son | Il a collé l'oreille à la faille : il a entendu un souffle régulier, comme une respiration | `AFF>=55` |
| 6 | `QI_PEN_56_06` | K1 | outil, mesure | Son outil de mesure des illusions devient inerte près de la faille — comme s'il n'y avait rien à mesurer | — |
| 7 | `QI_PEN_56_07` | K2 | faille, autre cote | Il a lancé une pierre dans la faille — elle n'est jamais retombée. Le bruit n'est jamais venu | `AFF>=75` |
| 8 | `QI_PEN_56_08` | K2 | failles, carte | En superposant les positions de toutes les failles, elles forment un cercle parfait autour du centre de Penwether | `QUEST:QST_PEN_FAILLES_01` |
| 9 | `QI_PEN_56_09` | K3 | faille, hors-serveur | Les failles sont des endroits où le rendu du serveur n'a pas chargé — elles donnent sur l'espace vide entre les fichiers du monde | JAMAIS — déflection : *(il colle son œil à la faille)* « Tu vois ? Y a rien. C'est pas du noir. C'est du pas-encore-créé. C'est le vide d'avant le monde. Et ça respire. » |
| 10 | `QI_PEN_56_10` | KX | *(devant la faille)* | *(il reste immobile à regarder le noir)* « Parfois je me demande si c'est pas nous l'illusion et le noir la réalité. » | — |

## 4. Chaînage économique & quêtes

- **Quête** : `QST_PEN_FAILLES_01` — Aider le Prospecteur à cartographier les failles et découvrir ce qui se trouve de l'autre côté.
- **Fils rouges** : 🎭 Illusions (failles dans le rendu), 📜 Ruines (les failles sont partout), 🪞 Statue Kirito (les failles forment un cercle autour de la statue ?), 🔮 Ville Fantôme (hors-serveur).

## 5. Intégration Bot

- **Accueil** (`!parler prospecteur_illusions`) : *« T'as déjà vu le bord du monde ? Moi oui. Il est gris, il est froid, et si tu regardes assez longtemps, le monde d'ici devient moins réel que le rien d'en face. »*
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 ; K3 (slot 9) jamais injecté.
- `!pnj_list` : visible.
