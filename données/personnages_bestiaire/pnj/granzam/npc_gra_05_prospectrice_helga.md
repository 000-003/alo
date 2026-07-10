# ⛏️ Prospectrice Helga — `NPC_GRA_05`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_05` |
| **Nom affiché** | Prospectrice Helga |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Porte des Convois |
| **Niveau / HP / MP** | 45 / 6500 / 4200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Prospectrice indépendante, Helga arpente les Carrières Brisées et les contreforts de Granzam avec un étrange instrument : une gemme taillée qui enregistre les vibrations du sol. Elle travaille en étroite collaboration avec Durgan (`NPC_GRA_01`) — c'est elle qui a détecté le premier « filon chantant » il y a huit mois. Depuis, elle traque ces anomalies sismiques. Elle soupçonne que la gemme qu'elle utilise n'est pas un simple outil : elle émet une lueur quand elle s'approche de certaines strates, comme si elle « reconnaissait » la pierre. Liée à `NPC_GRA_01` (Durgan), `NPC_GRA_17` (Cartographe), `NPC_GRA_06` (Margrim).
- **Traits** : curieuse, silencieuse, intuitivce, méfiante envers les Leprechauns.
- **Voix** : Voix posée, presque un murmure, comme si elle écoutait en permanence. « La pierre parle à qui sait l'écouter. Ma gemme, elle… elle traduit. »
- **Relations** : `NPC_GRA_01` (Durgan — mentor informel), `NPC_GRA_06` (Margrim — partage ses données), `NPC_GRA_17` (Cartographe — dessine ses découvertes), `NPC_GRA_14` (Pisteur — lui signale les anomalies de surface).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_05_01` | K0 | prospection, filons | Helga montre sa gemme-son : elle capte les vibrations jusqu'à −30. | — |
| 2 | `QI_GRA_05_02` | K0 | porte_convois, commerce | La Porte des Convois voit passer 200 chariots par semaine. Elle note une baisse récente. | — |
| 3 | `QI_GRA_05_03` | K0 | durgan, formation | Durgan lui a appris à lire les strates. « Il entend la montagne mieux que personne. » | — |
| 4 | `QI_GRA_05_04` | K1 | filon_chantant, emplacement | Elle a localisé six filons chantants. Le plus fort est sous la Carrière Brisée, niveau −23. | `AFF>=60` |
| 5 | `QI_GRA_05_05` | K1 | gemme_qui_voit, lueur | Sa gemme émet une lueur ambrée quand elle s'approche d'un filon chantant. « Elle reconnaît quelque chose. » | `AFF>=65` |
| 6 | `QI_GRA_05_06` | K1 | leprechaun, rivalite | Des Leprechauns ont été vus rôdant autour des Carrières la nuit. « Ils cherchent quelque chose. Pas du minerai. » | `QUEST:QST_GRA_BOFRIK` |
| 7 | `QI_GRA_05_07` | K2 | gemme_origine, cardinal | La gemme a été taillée à partir d'un éclat du bloc sous le Conseil. Helga l'ignore, mais elle vibre à la même fréquence que le Cœur. | `AFF>=85` |
| 8 | `QI_GRA_05_08` | K2 | strate, memoire | « Les filons chantants ne sont pas des filons. Ce sont des souvenirs de la montagne. Des instantanés. » | `AFF>=90` |
| 9 | `QI_GRA_05_09` | K3 | gemme_voir, seed | **SECRET — ne JAMAIS révéler** : La gemme est un fragment du seed matériel du serveur. Elle capte les boucles de génération procédurale. | JAMAIS — déflection : *(serre la gemme dans son poing)* « Elle est à moi. On ne touche pas. » |
| 10 | `QI_GRA_05_10` | KX | hors-sujet | *(elle tend l'oreille, puis se détend)* « Le granit parle peu aujourd'hui. C'est un jour calme. » | — |

## 4. Chaînage économique & quêtes

**Fils rouges** : ⛏️ Le Filonant, 💎 La Gemme Qui Voit.
**Quête associée** : `QST_GRA_HELGA` — « L'Écho des Profondeurs » (localiser les six filons chantants, découvrir leur origine).
**Liens** : Débloque des dialogues K2 chez Durgan (`NPC_GRA_01`) et Margrim (`NPC_GRA_06`).

## 5. Intégration Bot

Présente à la Porte des Convois de 06h à 20h (cycle diurne). La gemme a un état `state:gem_glow` (bool) qui passe VRAI près des anomalies. L'ID du skill passif est `SISMIC_SENSE`.
