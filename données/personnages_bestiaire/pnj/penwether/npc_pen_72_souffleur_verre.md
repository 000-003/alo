# 🕯️ Souffleur Verre — `NPC_PEN_72`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_72` |
| **Nom affiché** | Souffleur Verre |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_SPR_CAP_001G` — Penwether, Atelier Visages |
| **Niveau / HP / MP** | 7 / 210 / 230 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Maître verrier de l'Atelier Visages. Il souffle le verre magique : ses bulles de verre peuvent capturer une image, un son, une illusion, et la garder prisonnière à l'intérieur. Les riches Spriggans achètent ses bulles pour y enfermer des souvenirs. Mais une de ses bulles a capturé quelque chose qu'il n'avait pas demandé : l'image d'un Spriggan qui n'existait pas. Un Spriggan sans masque, qui regardait à travers le verre. Depuis, la bulle le suit du regard. Il a peur de la briser.
- **Traits** : anxieux, talentueux, mains brûlées, regarde souvent par-dessus son épaule.
- **Voix** : rapide, nerveuse. « *Je fais des bulles. Des belles. On met des souvenirs dedans. Mais y en a une… une que j'ai pas faite. Elle est apparue dans le four. Et dedans, y a un visage. Un visage que je connais pas. Mais il me connaît, lui.* »
- **Relations** : Marchand Bougies `NPC_PEN_51` (fabrique les lanternes pour ses bougies) ; Vitrier Illusions `NPC_PEN_74` (collègue à l'Atelier) ; Apprenti Prieur `NPC_PEN_71` (lui fournit des bulles pour capturer ses illusions).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_72_01` | K0 | verre, magique | Il souffle du verre magique qui capture les images et les souvenirs | — |
| 2 | `QI_PEN_72_02` | K0 | bulle, anomalie | Une bulle est apparue dans son four — il ne l'a pas soufflée | — |
| 3 | `QI_PEN_72_03` | K0 | visage, bulle | Dans la bulle, un visage le regarde — un Spriggan sans masque | — |
| 4 | `QI_PEN_72_04` | K1 | bulle, mouvement | La bulle bouge quand il ne la regarde pas — elle est toujours face à lui | `AFF>=35` |
| 5 | `QI_PEN_72_05` | K1 | visage, parle | Le visage dans la bulle essaie de parler — ses lèvres bougent mais le son ne passe pas | `AFF>=55` |
| 6 | `QI_PEN_72_06` | K1 | bulle, autre | Il a soufflé une nouvelle bulle — l'image a la même que la première | — |
| 7 | `QI_PEN_72_07` | K2 | bulle, brisee | Il a fait tomber la bulle — elle n'a pas cassé. Le verre est plus dur que la pierre | `AFF>=70` |
| 8 | `QI_PEN_72_08` | K2 | visage, identite | Le visage est celui du Chancelier Masques `NPC_PEN_07` — mais sans masque, et plus jeune | `QUEST:QST_PEN_VERRE_01` |
| 9 | `QI_PEN_72_09` | K3 | bulle, log | La bulle a capturé un log système — l'image du Chancelier avant son premier reset, stockée dans une mémoire cache que le verre a accidentellement lue | JAMAIS — déflection : *(il lève la bulle vers la lumière — le visage dedans le regarde)* « J'ai essayé de la briser mille fois. Elle se brise pas. Le verre est plus dur que moi. Plus dur que tout. Elle veut être vue. » |
| 10 | `QI_PEN_72_10` | KX | *(atelier verre)* | *(il souffle une nouvelle bulle et y met tout son souffle — la bulle contient un souvenir de lui)* « Maintenant elle a mon visage. Comme ça on sera deux à se regarder. » | — |

## 4. Chaînage économique & quêtes

- **Achats** : sable de verre des ruines (5 po), outils de soufflage (10 po).
- **Ventes** : Bulle à Souvenirs (30 po), Bulle d'Illusion (45 po).
- **Quête** : `QST_PEN_VERRE_01` — Découvrir qui est le visage dans la bulle et pourquoi il est apparu.
- **Fils rouges** : 🎭 Illusions (bulle qui capture l'illusion), 📜 Ruines (verre des ruines), 🔮 Ville Fantôme (log cache du Chancelier).

## 5. Intégration Bot

- **Accueil** (`!parler souffleur_verre`) : *« Viens pas près du four. Y a une bulle. Celle que j'ai pas faite. Elle te regarde déjà. Elle regarde tout le monde. Si tu veux une vraie bulle, je t'en fais une. Mais celle-là, touche pas. »*
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 ; K3 (slot 9) jamais injecté.
- `!pnj_list` : visible.
