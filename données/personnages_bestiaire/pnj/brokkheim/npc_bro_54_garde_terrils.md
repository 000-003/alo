# 🔨 Garde Terrils — `NPC_BRO_54`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_54` |
| **Nom affiché** | Garde Terrils |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `GUARD` (patrouille des terrils) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Terrils Publics (ronde est) |
| **Niveau / HP / MP** | 22 / 2 300 / 300 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Il patrouille les terrils pour prévenir les vols de charbon — denrée précieuse à Brokkheim. Il a remarqué que certains soirs, le charbonnier `NPC_BRO_50` s'attarde devant un bloc qui rougeoie sans flamme. Il n'a rien signalé à ses supérieurs parce qu'il vole lui-même du charbon de mithril pour le revendre au Marchand Soufre Fin `NPC_BRO_57` — un arrangement qui lui rapporte plus que sa solde.
- **Traits** : méfiant, roublard, code d'honneur entre voleurs.
- **Voix** : rogues et menues menaces enrobées de courtoisie.
- **Relations** : Charbonnier Terrils `NPC_BRO_50` (le surveille, sait qu'il cache quelque chose) ; Marchand Soufre Fin `NPC_BRO_57` (acheteur de son charbon volé) ; Garde du Conseil `NPC_BRO_61` (collègue plus gradé — l'évite).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_54_01` | K0 | terrils, securite | Les procédures de patrouille des terrils : horaires, points de contrôle, consignes | — |
| 2 | `QI_BRO_54_02` | K0 | vols, historiques | Les vols de charbon recensés (données publiques, rien de sensible) | — |
| 3 | `QI_BRO_54_03` | K0 | metier, garde | La vie de garde aux terrils : ennui, froid la nuit, chaleur le jour | — |
| 4 | `QI_BRO_54_04` | K1 | charbonnier, comportement | `NPC_BRO_50` ment sur l'état de son bloc — il le sait, l'observe | — |
| 5 | `QI_BRO_54_05` | K1 | charbon, mithril | Il vole du charbon de mithril une fois par semaine — planque à la tour de guet est | `AFF>=60` |
| 6 | `QI_BRO_54_06` | K1 | soufre, marche | `NPC_BRO_57` paie bien le charbon volé — en soufre raffiné qu'il revend plus cher | `AFF>=70` |
| 7 | `QI_BRO_54_07` | K2 | nuit, visiteur | Un visiteur encapuchonné rôde autour des terrils les nuits de pleine lune — il PUE le soufre | `AFF>=80` |
| 8 | `QI_BRO_54_08` | K2 | blocs, disparition | Deux blocs ont disparu du tertre ouest — pas volés : réduits en cendre fine, comme consumés de l'intérieur | `AFF>=90` |
| 9 | `QI_BRO_54_09` | K3 | visiteur, ombre | Le visiteur encapuchonné est `NPC_BRO_67` (Ombre Conseil) — il teste la propagation du Pouls dans le charbon pour le Cardinal. Les blocs qui disparaissent sont ceux où le Pouls s'est « enraciné » | JAMAIS — déflection : *(sa main se pose sur son épée, geste de routine autant que d'avertissement)* « Les terrils sont sous ma garde. Rien n'en sort, rien n'y entre sans que je le sache. Sauf les ombres — et les ombres, on ne les voit pas. » |
| 10 | `QI_BRO_54_10` | KX | *(tout le reste)* | « Ma ronde m'appelle. Si t'as une plainte, le registre est au poste. » | — |

## 4. Chaînage économique & quêtes

- GUARD : barrière d'accès aux terrils la nuit.
- Vol de charbon : petite criminalité qui hooke vers le marché noir.
- K3 : lien direct Ombre Conseil → terrils → Pouls → Cardinal.

## 5. Intégration Bot

- **Accueil** (`!parler garde_terrils`) : *« Terrils sous surveillance. Le charbon se compte, les visages aussi. »*
- `!acces_terrils` : vérifie si le joueur a le droit de passer (flag `BRO_TERRILS_ACCESS`).
