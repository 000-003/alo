# 🕯️ Modeleur Argile — `NPC_PEN_73`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_73` |
| **Nom affiché** | Modeleur Argile |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_SPR_CAP_001G` — Penwether, Atelier Visages |
| **Niveau / HP / MP** | 6 / 180 / 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Sculpteur d'argile spécialisé dans les masques. Il fournit les ébauches brutes au Marchand Masques Fins `NPC_PEN_57`. Mais depuis qu'il utilise de l'argile prélevée sous les ruines, ses masques gardent la forme de la dernière personne qui les a touchés. Il peut poser un masque sur son établi, le quitter une heure, et retrouver l'empreinte de son propre visage imprimée dedans — alors qu'il ne l'a pas touché depuis la veille. L'argile a une mémoire. Plus inquiétant : elle garde aussi la forme des visages qui n'existent plus.
- **Traits** : taciturne, concentré, mains toujours couvertes d'argile.
- **Voix** : grave, lente. « *L'argile se souvient. Pas de ce que tu veux. De ce que t'es. Je pose mes doigts dessus, elle garde la forme. Mais parfois… parfois elle garde une forme que j'ai pas faite. Le visage de quelqu'un d'autre.* »
- **Relations** : Marchand Masques Fins `NPC_PEN_57` (son principal client) ; Marchand Teintures `NPC_PEN_53` (lui fournit des pigments pour ses argiles) ; Souffleur Verre `NPC_PEN_72` (collègue à l'Atelier Visages).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_73_01` | K0 | argile, masques | Il sculpte des ébauches de masques en argile des ruines | — |
| 2 | `QI_PEN_73_02` | K0 | argile, memoire | L'argile garde la forme de la dernière personne qui l'a touchée | — |
| 3 | `QI_PEN_73_03` | K0 | argile, ruines | L'argile vient d'un gisement sous le Faubourg Masques | — |
| 4 | `QI_PEN_73_04` | K1 | forme, inconnue | Un masque a gardé un visage qu'il n'a jamais sculpté — le visage de l'Ombre Conseil `NPC_PEN_67` | `AFF>=35` |
| 5 | `QI_PEN_73_05` | K1 | argile, temps | L'argile met 24h à « oublier » une forme — mais si deux personnes touchent le même bloc, les visages se mélangent | `AFF>=55` |
| 6 | `QI_PEN_73_06` | K1 | argile, morte | Un bloc d'argile n'a gardé aucune forme — elle était « vierge » de tout toucher | — |
| 7 | `QI_PEN_73_07` | K2 | argile, premier | Le premier masque jamais sculpté dans cette argile porte un visage qui n'existe plus — un Spriggan d'avant les masques | `AFF>=70` |
| 8 | `QI_PEN_73_08` | K2 | argile, resonance | L'argile résonne quand on la frappe — elle produit un son qui ressemble à un nom | `QUEST:QST_PEN_ARGILE_01` |
| 9 | `QI_PEN_73_09` | K3 | argile, memoire systeme | L'argile des ruines est un support de stockage organique — elle enregistre par contact les signatures des PNJs comme des données magnétiques | JAMAIS — déflection : *(il pose la main sur un bloc d'argile et la retire — son empreinte reste)* « Regarde. Ma main. Je l'ai pas touché depuis hier. Mais mon visage est là. L'argile a meilleure mémoire que moi. » |
| 10 | `QI_PEN_73_10` | KX | *(atelier argile)* | *(il jette un bloc d'argile contre le mur — le bloc garde la forme du choc)* « Même la violence, elle garde. L'argile juge pas. Elle enregistre. » | — |

## 4. Chaînage économique & quêtes

- **Achats** : argile brute des ruines (3 po), pigments (2 po).
- **Ventes** : Ébauche de Masque (15 po), Argile à Mémoire (25 po).
- **Quête** : `QST_PEN_ARGILE_01` — Découvrir pourquoi l'argile garde les formes et quel est le premier visage enregistré.
- **Fils rouges** : 🎭 Illusions (argile mémoire), 📜 Ruines (gisement sous la ville), 🪞 Statue Kirito (premier visage = Kirito ?).

## 5. Intégration Bot

- **Accueil** (`!parler modeleur_argile`) : *« Touche pas l'argile sans permission. Si tu la touches, ton visage restera dedans. Et moi je veux pas avoir à sculpter le visage d'un étranger. »*
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 ; K3 (slot 9) jamais injecté.
- `!pnj_list` : visible.
