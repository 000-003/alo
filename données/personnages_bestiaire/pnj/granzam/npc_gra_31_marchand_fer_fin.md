# ⛏️ Marchand Fer Fin — `NPC_GRA_31`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_31` |
| **Nom affiché** | Marchand Fer Fin |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Grande Halle |
| **Niveau / HP / MP** | 28 / 1 800 / 460 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Négociant de fer de première qualité — lingots de fer gnome, réputés les plus purs d'Alfheim. Il fournit les armuriers de Granzam et les forgerons d'Arun. Depuis que ses lingots « sonnent creux » à la percussion, il a perdu des clients. Il a refondu un lot entier : les lingots refroidis sonnent toujours creux, comme s'il y avait un vide à l'intérieur. Le Marchand de Gemmes (`NPC_GRA_66`) lui a dit que c'était peut-être l'acier qui « parlait ». Lié au fil **⛏️ Le Filonant** : les lingots contiennent un noyau de cristal qui se forme dans le minerai quand il est proche de veines de gemmes conscientes.
- **Traits** : pragmatique, inquiet, honnête, méthodique.
- **Voix** : Voix métallique, précise. « Le fer de Granzam n'a pas d'égal. Mais le mien sonne… étrange. »
- **Relations** : `NPC_GRA_66` (Marchand Gemmes — source de l'information) ; `NPC_GRA_35` (Alchimiste Gemmes — a analysé un lingot) ; `NPC_GRA_03` (Armurier Bofrik — client fidèle).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_31_01` | K0 | fer, vente | Vente de lingots de fer gnome — qualité premium | — |
| 2 | `QI_GRA_31_02` | K0 | prix, cours | Cours du fer — 150 Yuld le lingot | — |
| 3 | `QI_GRA_31_03` | K0 | livraison, client | Livraison vers Arun, Alne, Freelia — contrat hebdomadaire | — |
| 4 | `QI_GRA_31_04` | K1 | lingot, son_creux | Ses lingots sonnent creux depuis deux semaines | `AFF>=60` |
| 5 | `QI_GRA_31_05` | K1 | refonte, echec | Il a refondu un lot — le son creux persiste | `AFF>=65` |
| 6 | `QI_GRA_31_06` | K1 | gemme, cristal | L'Alchimiste (`NPC_GRA_35`) a trouvé un noyau de cristal dans la cassure | — |
| 7 | `QI_GRA_31_07` | K2 | filonant, veine | Le cristal ressemble à ceux qu'on trouve près de veines « qui bougent » — le Filonant | `AFF>=85` |
| 8 | `QI_GRA_31_08` | K2 | carriere, provenance | Le minerai vient des Carrières Brisées — zone récemment rouverte | `QUEST:QST_GRA_FER_SON_CREUX` |
| 9 | `QI_GRA_31_09` | K3 | cristal, enregistrement | Le cristal dans le fer est un nodule d'enregistrement sismique du Cœur `NPC_GRA_00` — le minerai absorbe les pulsations du noyau et les « fige » dans le métal, créant un noyau de vide | JAMAIS — déflection : *(il frappe un lingot du doigt, le son est mat)* « Tu entends ça ? C'est le vide. Le vide parle, dans le fer. Je ne vends plus ce lot. » |
| 10 | `QI_GRA_30_10` | KX | *(tout le reste)* | *(il soupèse un lingot d'un air soucieux)* « Le fer ne ment pas. Lui, il ment. » | — |

## 4. Chaînage économique & quêtes

- **Vente** : lingots de fer gnome (qualité standard et premium).
- Porteur du fil **⛏️ Le Filonant** (cristal dans le fer).
- Donneur de `QST_GRA_FER_SON_CREUX` : enquête sur les lingots qui sonnent creux.

## 5. Intégration Bot

- **Accueil** (`!parler marchand_fer`) : *Disposant des lingots sur son étal, il en frappe un du marteau.* « Écoute ça. Fer de Granzam. Ça sonne… le vrai. »
- `!buy iron` actif à la Grande Halle.
- `NPC_SECRET_PROBED` slot 9 : hook « cristal d'enregistrement sismique » pour l'orchestrateur.
