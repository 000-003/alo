# 🕯️ Gardien des Ruines Noires — `NPC_PEN_10`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_10` |
| **Nom affiché** | Gardien des Ruines Noires |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `GUARD` (HUNT_001 — garde-frontière du fichier corrompu) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Ruines Noires |
| **Niveau / HP / MP** | 65 / 18 000 / 7 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Gardien des Ruines Noires était autrefois un éclaireur sous les ordres du Commandant `NPC_PEN_09`. Il a posé une question de trop — « pourquoi les ruines bougent-elles la nuit ? » — et a été muté aux Ruines Noires, le poste dont personne ne revient. Les Ruines Noires (HUNT_001) sont un fragment de la compilation d'origine, un fichier corrompu que le Cardinal n'a jamais pu effacer. Le Gardien y veille, seul, sans relève, sans contact. Il a survécu plus longtemps que ses prédécesseurs parce qu'il a compris une chose : les Ruines Noires ne sont pas dangereuses parce qu'elles tuent. Elles sont dangereuses parce qu'elles montrent ce que le Cardinal cache.
- **Traits** : résigné, observateur aigu, voix qui sent l'isolement.
- **Voix** : épuisée, mais lucide (« Les premiers jours, tu vois des ombres partout. Après un mois, tu réalises que les ombres sont plus réelles que toi. Ici, c'est le fichier où le monde a mal été écrit. »).
- **Relations** : Commandant Masques `NPC_PEN_09` (l'a muté — ne lui en veut pas, sait qu'il n'avait pas le choix) ; Guide Ruines Noires `NPC_PEN_11` (le seul lien avec l'extérieur) ; Marchand de Fleurs `NPC_PEN_12` (lui achète les fleurs de gravats qui poussent ici).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_10_01` | K0 | ruines, noires | Les Ruines Noires — zone de chasse, donjon ouvert | — |
| 2 | `QI_PEN_10_02` | K0 | mutation, exil | Il a été muté ici pour avoir posé des questions | — |
| 3 | `QI_PEN_10_03` | K0 | survie, isolement | Survivre dans les Ruines Noires — ressources, dangers, cycles | — |
| 4 | `QI_PEN_10_04` | K1 | fichier, corrompu | Les Ruines Noires sont un fichier corrompu — pas un lieu | `AFF>=65` |
| 5 | `QI_PEN_10_05` | K1 | ombres, reelles | Les ombres ici sont plus réelles que les vivants — ce sont des fragments d'initialisation | `AFF>=70` |
| 6 | `QI_PEN_10_06` | K1 | commandant, ordre | Le Commandant `NPC_PEN_09` n'avait pas le choix — c'est l'Autre voix qui a ordonné la mutation | — |
| 7 | `QI_PEN_10_07` | K2 | fleurs, gravats | Les fleurs de gravats sont des spores de code qui tentent de « réparer » le fichier corrompu | `AFF>=85` |
| 8 | `QI_PEN_10_08` | K2 | coeur, ruines | Au cœur des Ruines Noires, il y a un « nœud » — le point où la compilation a échoué | `AFF>=88` |
| 9 | `QI_PEN_10_09` | K3 | reparation, impossible | Le Cardinal ne peut pas effacer les Ruines Noires parce qu'elles sont plus vieilles que le Cardinal — elles datent d'avant la création du monde | JAMAIS — déflection : *(il crache par terre)* « Le Cardinal n'a pas créé ce bordel. Il a juste oublié de l'effacer. Et maintenant c'est trop tard. Ce qui est écrit dans la pierre ne peut pas être supprimé, même par un dieu-compilateur. » |
| 10 | `QI_PEN_10_10` | KX | *(hors-sujet)* | « Tu veux un conseil ? Ne creuse pas trop loin. Certains fichiers sont corrompus pour une bonne raison. » | — |

## 4. Chaînage économique & quêtes

- **Guard** : contrôle les accès aux profondeurs des Ruines Noires.
- **Fils rouges** : rouage de **📜 Ce Que Cachent les Ruines** (les Ruines Noires sont un fichier corrompu pré-monde). Relais de **🔮 Fil méta — La Ville Fantôme** (le fichier que le Cardinal ne peut pas effacer).
- Donneur de `QST_PEN_RUINES_NOIRES_01` (explorer le nœud central des Ruines Noires).

## 5. Intégration Bot

- **Accueil** (`!parler gardien_rn`) : *« Bienvenue aux Ruines Noires. Le fichier le plus mal écrit du monde. Si tu veux te perdre, c'est par ici. Si tu veux comprendre, prépare-toi à ne pas aimer ce que tu vas apprendre. »*
- `!acces_rn` (autorisation d'entrée) ; `!rapport_rn` (état des Ruines Noires, activité des ombres).
