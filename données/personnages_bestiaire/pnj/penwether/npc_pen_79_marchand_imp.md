# 🕯️ Marchand Imp — `NPC_PEN_79`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_79` |
| **Nom affiché** | Marchand Imp |
| **Race** | Imp |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (marchand de Duskarn, Faubourg des Masques) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Faubourg des Masques |
| **Niveau / HP / MP** | 45 / 5 200 / 7 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Un Imp de Duskarn installé au Faubourg des Masques — le seul représentant officiel du commerce duskarnien dans Penwether. Il vend des cristaux violets, des poudres d'ombre et des artefacts de la cité souterraine. Mais son vrai commerce est ailleurs : il est l'agent local du Pacte des Ombres, l'alliance silencieuse entre Penwether et Duskarn qui garantit que les ruines restent secrètes. Les Spriggans ferment les yeux sur le commerce imp, les Imps ferment les yeux sur ce que les Spriggans cachent dans les ruines. Le Marchand est le point de contact. Sa boutique est une couverture — tout le monde le sait, personne ne le dit. Angle : Pacte des Ombres ; lien Duskarn.
- **Traits** : affable, insaisissable, parle toujours en tournant autour du pot — littéralement : il fait le tour de son étal en parlant.
- **Voix** : onctueuse, enrouée (« Le Pacte ? Quel pacte ? Je suis un marchand, rien de plus. Mes cristaux ? Ils viennent de Duskarn. Mais toi, tu viens d'où ? Et qu'est-ce que tu cherches vraiment ? »).
- **Relations** : Ombre du Conseil `NPC_PEN_67` (contact local du Pacte) ; Espion Duskarn `NPC_PEN_87` (sait qu'il est là, ne le croise jamais ouvertement) ; Chancelier Masques `NPC_PEN_07` (a signé le Pacte, mais ne le reconnaîtrait pas dans la rue).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_79_01` | K0 | commerce, imp | Vente de cristaux violets, poudres d'ombre, artefacts duskarniens | — |
| 2 | `QI_PEN_79_02` | K0 | faubourg, etal | Étal au Faubourg des Masques — reconnu de tous | — |
| 3 | `QI_PEN_79_03` | K0 | duskarn, origine | Originaire de Duskarn — marchand de la guilde des ombres | — |
| 4 | `QI_PEN_79_04` | K1 | pacte, ombres | Confirme l'existence du Pacte des Ombres — échange ruines contre silence | — |
| 5 | `QI_PEN_79_05` | K1 | pacte, termes | Le Pacte : Duskarn ne fouille pas les ruines, Penwether ne bloque pas le commerce imp | `AFF>=60` |
| 6 | `QI_PEN_79_06` | K1 | ombre, conseil | L'Ombre du Conseil `NPC_PEN_67` est son contact — ils échangent des messages codés | `AFF>=65` |
| 7 | `QI_PEN_79_07` | K2 | ruines, pacte | Le vrai enjeu du Pacte : les ruines contiennent des artéfacts de compilation que Duskarn convoite mais ne peut pas toucher | `AFF>=80` |
| 8 | `QI_PEN_79_08` | K2 | espion, duskarn | Sait qu'un espion `NPC_PEN_87` opère dans le Faubourg — ne le dénonce pas (ordres de Duskarn) | `AFF>=85` |
| 9 | `QI_PEN_79_09` | K3 | pacte, cardinal | Le Pacte des Ombres n'est pas entre Penwether et Duskarn — il est entre Duskarn et le Cardinal. Les Imps savent que Penwether est une coque serveur. Le Pacte garantit que Duskarn ne révèle pas la nature du monde en échange d'un accès privilégié aux strates de compilation. Le Marchand est un agent dormant du Cardinal chez les Imps | JAMAIS — déflection : *(son sourire ne faiblit pas, mais ses yeux se font durs)* « Le Pacte est une affaire de marchands. Rien de plus. Les cristaux, les poudres, le silence. Tout s'achète. Tout se vend. » *(il tapote son comptoir)* « Même les secrets. Surtout les secrets. » |
| 10 | `QI_PEN_79_10` | KX | *(hors sujet)* | « Tout a un prix. Même les ruines. Surtout les ruines. » | — |

## 4. Chaînage économique & quêtes

- **Merchant** : `!pen_imp_etal` — inventaire. `!pen_imp_cristal` — achat de cristal violet de Duskarn.
- **Fils rouges** : nœud central de **🔑 Le Pacte des Ombres** (agent du Pacte à Penwether). Relais de **🔮 Fil méta — La Ville Fantôme** (sait que Penwether est une coque serveur).
- Donneur de `QST_PEN_PACTE_OMBRES_01` (enquêter sur les véritables termes du Pacte).
- Lien Duskarn : permet d'accéder au quartier imp de Duskarn via le réseau du Pacte.

## 5. Intégration Bot

- **Accueil** (`!parler marchand imp`) : *« Ah, un client ! Ou un curieux ? Les deux se valent, tant que tu paies. Mes cristaux viennent de Duskarn. Mes secrets, de personne. »*
- `!pen_imp_etal` — liste des marchandises ; `!pen_imp_pacte` — infos sur le Pacte (avec affinité).
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2).
- `NPC_SECRET_PROBED` slot 9 : hook « Pacte des Ombres = accord entre Duskarn et le Cardinal » réservé à l'orchestrateur.
