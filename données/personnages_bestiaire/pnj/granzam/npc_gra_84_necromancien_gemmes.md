# ⛏️ Nécromancien des Gemmes — `NPC_GRA_84`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_84` |
| **Nom affiché** | Nécromancien des Gemmes |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `BLACK_MARKET` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Mine de Mithril Interdite |
| **Niveau / HP / MP** | 35 / 2 200 / 2 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Nécromancien excommunié qui opère dans les profondeurs interdites de la Mine de Mithril. Utilise des gemmes de résurrection noire pour ranimer les morts — des gemmes qui capturent l'âme du défunt au moment du trépas et la restituent dans un corps réanimé. Mais les gemmes ne mentent pas : elles diffusent les derniers instants du défunt en boucle. Un mineur qu'il a ranimé s'est mis à parler, avec la voix du mort, d'un secret de la mine. Le Nécromancien a compris que ses gemmes sont des « enregistreurs » qui dénoncent ceux qui ont causé la mort. **Angle** : La mort qui dénonce via la gemme. Lié au fil **💎 La Gemme Qui Voit** — ses gemmes sont des capteurs qui voient les derniers instants.
- **Traits** : solitaire, calculateur, voix glaciale, obsession des gemmes noires.
- **Voix** : Froide, monocorde, comme gravée dans la roche. Chaque mot est un caillou qu'il pose. « La gemme a vu. La gemme se souvient. La gemme parle, même quand la bouche est cousue. »
- **Relations** : `NPC_GRA_93` (Trafiquant de Gemmes — lui fournit les gemmes noires) ; `NPC_GRA_85` (Fossoyeur — lui amène des corps « frais ») ; `NPC_GRA_81` (Prêtresse — sait ce qu'il fait, n'a pas parlé).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_84_01` | K0 | necromancie, gemmes | La nécromancie par gemmes — principes de base | — |
| 2 | `QI_GRA_84_02` | K0 | mine, mithril interdit | La Mine de Mithril Interdite — accès, dangers | — |
| 3 | `QI_GRA_84_03` | K0 | granzam, excommunié | Son excommunication — banni du clergé de la pierre | — |
| 4 | `QI_GRA_84_04` | K1 | gemme, enregistrement | Les gemmes noires enregistrent les derniers instants des défunts | `AFF>=60` |
| 5 | `QI_GRA_84_05` | K1 | mort, voix | Un mort ranimé a parlé — « la poutre était sciée, c'était pas un accident » | `AFF>=65` |
| 6 | `QI_GRA_84_06` | K1 | fossoyeur, livraison | Le Fossoyeur `NPC_GRA_85` lui livre des corps de mineurs « morts par accident » | — |
| 7 | `QI_GRA_84_07` | K2 | gemme, accusation | La gemme du mineur contient l'image d'un contremaître qui a scié l'étai | `AFF>=85` |
| 8 | `QI_GRA_84_08` | K2 | garde, silence | Les Gardes du Conseil `NPC_GRA_86` ont fermé l'enquête sur cette mort | `QUEST:QST_GRA_GEMME_ACCUSE` |
| 9 | `QI_GRA_84_09` | K3 | gemme_noire, seed_ame | Les gemmes noires sont des réceptacles de seed — elles copient la seed d'âme du joueur défunt et la rejouent dans un corps vide. Le Cardinal a créé ces gemmes pour sauvegarder les âmes des joueurs, mais la nécromancie les détourne pour interroger les morts : chaque gemme est un fragment de la matrice du monde qui contient l'historique complet des interactions du défunt | JAMAIS — déflection : *(il serre la gemme dans son poing)* « Les morts devraient se taire. Mes gemmes, elles les font parler. Parfois trop. Va-t'en. » |
| 10 | `QI_GRA_84_10` | KX | *(hors sujet)* | *(il polît une gemme noire)* « J'ai pas de conseil à donner. J'ai des morts à faire parler. » | — |

## 4. Chaînage économique & quêtes

- **Marché noir** : `!resurrection_noire <cible>` (résurrection temporaire, révèle un secret du défunt).
- Porteur du fil **💎 La Gemme Qui Voit** (gemmes-enregistreurs).
- Donneur de `QST_GRA_GEMME_ACCUSE` : enquête sur les accidents de mine maquillés.
- Fournit des gemmes noires au Trafiquant `NPC_GRA_93` et via lui à Ilka `NPC_GAT_33`.

## 5. Intégration Bot

- **Accueil** (`!parler necromancien`) : *Assis dans l'ombre de la mine interdite, une gemme noire entre le pouce et l'index.* « Toi aussi tu veux faire parler un mort ? J'ai ce qu'il faut. Mais le prix, c'est un secret contre un secret. »
- `!resurrection_noire <cible>` actif dans la Mine de Mithril Interdite.
- `NPC_SECRET_PROBED` slot 9 : hook « gemme noire = réceptacle de seed d'âme » pour l'orchestrateur.
