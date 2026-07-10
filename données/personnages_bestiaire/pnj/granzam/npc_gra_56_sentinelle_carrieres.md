# ⛏️ Sentinelle des Carrières — `NPC_GRA_56`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_56` |
| **Nom affiché** | Sentinelle des Carrières |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `GUARD` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Carrières Brisées |
| **Niveau / HP / MP** | 55 / 8 900 / 2 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Garde-frontière postée aux Carrières Brisées, là où le territoire Gnome rencontre la frontière Leprechaun non marquée. Depuis qu'elle patrouille cette ligne, elle a trouvé des cailloux disposés en spirale, des traces de bottes trop petites pour un Gnome, et un morceau de métal gravé de runes Leprechaunes planté dans une faille. Elle rapporte tout à Bofrik (`NPC_GRA_03`), qui lui a promis une prime pour chaque preuve d'intrusion. Elle ignore que les spirales de cailloux ne sont pas des marqueurs Leprechauns — ce sont des marqueurs de seed, placés par le système. (Angle : pacte signé dans la roche.)
- **Traits** : vigilante, loyale, tenace, silencieuse.
- **Voix** : Voix rauque, fatiguée d'avoir crié dans le vent. « La frontière est poreuse. Ils passent quand ils veulent. On fait semblant de garder. »
- **Relations** : `NPC_GRA_03` (Bofrik — contact régulier), `NPC_GRA_13` (Gardien Carrières — collègue de secteur), `NPC_GRA_14` (Pisteur — suit les traces avec elle), `NPC_GRA_55` (Vétéran — lui raconte la guerre).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_56_01` | K0 | carrieres, frontiere | Les Carrières Brisées sont à la frontière du territoire Leprechaun. | — |
| 2 | `QI_GRA_56_02` | K0 | sentinelle, patrouille | Elle patrouille 12 heures par jour, seule. | — |
| 3 | `QI_GRA_56_03` | K0 | bofrik, prime | Bofrik (`NPC_GRA_03`) lui verse une prime pour chaque preuve d'intrusion. | — |
| 4 | `QI_GRA_56_04` | K1 | spirale, caillou | Elle trouve des spirales de cailloux disposées au sol, parfaitement géométriques. | `AFF>=60` |
| 5 | `QI_GRA_56_05` | K1 | empreinte, botte | Des empreintes de bottes anormalement petites — taille 35 — tracent des cercles autour des spirales. | `AFF>=65` |
| 6 | `QI_GRA_56_06` | K1 | rune, metal | Un morceau de métal gravé de runes Leprechaunes fiché dans une faille. Les runes forment un mot : « MITHRIL ». | — |
| 7 | `QI_GRA_56_07` | K2 | spirale, alignement | Les spirales sont alignées parfaitement nord-sud. Elle en a trouvé 12, formant une ligne. | `AFF>=85` |
| 8 | `QI_GRA_56_08` | K2 | leprechaun, trêve | « Les Leprechauns ne franchissent pas la frontière. Les spirales non plus. Elles poussent seules. » | `QUEST:QST_GRA_FRONTIERE_SPIRALE` |
| 9 | `QI_GRA_56_09` | K3 | pacte, protocole_serveur | Le pacte entre Gnomes et Leprechauns est un protocole serveur entre deux seeds miniers — les spirales de cailloux sont des marqueurs de checkpoint du Cardinal. | JAMAIS — déflection : *(elle pose la main sur son épée)* « Je garde la frontière, je ne pose pas de questions sur ce qui la dessine. » |
| 10 | `QI_GRA_56_10` | KX | *(tout le reste)* | *(elle ramasse un caillou et le glisse dans sa poche)* « Douze spirales. Douze cailloux. J'en garde un à chaque fois. Au cas où. » | — |

## 4. Chaînage économique & quêtes

- Porteur du fil **🔥 Rivalité de Sang** (frontière avec les Leprechauns).
- Donneur de `QST_GRA_FRONTIERE_SPIRALE` : enquêter sur les spirales de cailloux à la frontière.

## 5. Intégration Bot

- **Accueil** (`!parler sentinelle`) : *Adossée à un rocher, elle vous jauge du regard.* « T'es pas d'ici. Les nouveaux ramènent toujours des questions. Pose-les vite. »
- `!frontiere` (donne l'état des lieux).
- `NPC_SECRET_PROBED` slot 9 : hook « pacte = protocole inter-seed minier » pour l'orchestrateur.