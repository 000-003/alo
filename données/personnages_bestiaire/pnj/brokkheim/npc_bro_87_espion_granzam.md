# 🔨 Espion Granzam — `NPC_BRO_87`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_87` |
| **Nom affiché** | Espion Granzam |
| **Race** | Gnome |
| **Rôle** | `BLACK_MARKET` |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Halle Marteau (cache) |
| **Niveau / HP / MP** | 20 / 900 / 700 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Gnome infiltré de Granzam. Se fait passer pour un marchand de gemmes à la Halle Marteau. En réalité, il cartographie les flux vapeur des geysers pour localiser le Pouls. Il sait où est le Pouls — pas exactement, mais il a triangulé sa position par les vibrations. Fil Rivalité Mineurs. Angle : Sait où est le Pouls.
- **Traits** : Nerveux, petit, regard trop mobile.
- **Voix** : Rapide, zézayante. « Des gemmes ? J'ai des gemmes. Des vraies. Pas comme leur mithril de pacotille. »
- **Relations :** `NPC_BRO_93` (trafiquant rival — le connaît mais ne sait pas que c'est un espion), `NPC_BRO_94` (courtier — couverture), `NPC_BRO_90` (réfugié gnome — le connaît de Granzam).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_87_01` | K0 | halie, vente | Vente de gemmes à la Halle Marteau — bonne couverture | — |
| 2 | `QI_BRO_87_02` | K0 | granzam, origine | Originaire de Granzam, prétend avoir fui les tensions | — |
| 3 | `QI_BRO_87_03` | K0 | gemmes, qualite | Ses gemmes sont de haute qualité — trop pour un simple marchand | — |
| 4 | `QI_BRO_87_04` | K1 | pouls, position | Il a localisé le Pouls sous la Forge-Mère, niveau −7 | `AFF>=60` |
| 5 | `QI_BRO_87_05` | K1 | vibrations, carte | Il tient une carte des vibrations des geysers — chaque point est un relevé | — |
| 6 | `QI_BRO_87_06` | K1 | granzam, mission | Sa mission : rapporter les coordonnées du Pouls à Granzam | `AFF>=70` |
| 7 | `QI_BRO_87_07` | K2 | trafic, mithril | Il sait que `NPC_BRO_88` trafique le mithril — il le fait chanter | `AFF>=80` |
| 8 | `QI_BRO_87_08` | K2 | geysers, code | Les geysers pulsent par codes — il note la séquence | `AFF>=85` |
| 9 | `QI_BRO_87_09` | K3 | pouls, granzam | Granzam veut le Pouls pour alimenter ses propres forges. Si Gnomes obtiennent le Pouls, ils peuvent dominer tout le commerce du métal du continent | JAMAIS — déflection : *(il sourit trop)* « Le Pouls ? Connais pas. Je vends des gemmes, c'est tout. Des gemmes ! » |
| 10 | `QI_BRO_87_10` | KX | *(hors sujet)* | « Les gnomes savent creuser mieux que personne. Même sous les cités des autres. » | — |

## 4. Chaînage économique & quêtes

- **BLACK_MARKET** : `!buy_gems` — achats de gemmes (couverture).
- Hook carte vibrations : `QST_BRO_POULS_TRIANGULATION`.

## 5. Intégration Bot

- **Accueil :** *(regard fuyant)* « Eh ! Acheteur ! J'ai des gemmes qui brillent comme les yeux de ta mère ! Euh… je veux dire… regarde ça. »