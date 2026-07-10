# 🕯️ Marchand Masques Fins — `NPC_PEN_57`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_57` |
| **Nom affiché** | Marchand Masques Fins |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_SPR_CAP_001A` — Penwether, Marché 7 Façades |
| **Niveau / HP / MP** | 7 / 200 / 190 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Joaillier du visage, il confectionne des masques d'apparat d'une finesse inouïe. Ses masques sont réputés pour être si parfaits qu'ils « montrent le vrai visage » de celui qui les porte — non pas son apparence physique, mais son essence intérieure. Les clients ressortent transformés. Certains pleurent. D'autres rient. Un client n'est jamais ressorti : il s'est regardé dans le miroir du marchand et a vu quelqu'un qu'il ne connaissait pas. Le Marchand garde le miroir dans son arrière-boutique.
- **Traits** : calme, précis, parle lentement, gestes mesurés.
- **Voix** : posée, presque méditative. « *Un masque ne cache pas. Il révèle. Ce que tu choisis de montrer aux autres, c'est ce que tu es vraiment. Le reste, c'est le visage que tu caches.* »
- **Relations** : Marchand Voiles `NPC_PEN_52` (concurrent — les voiles cachent, les masques révèlent) ; Modeleur Argile `NPC_PEN_73` (lui fournit des bases en argile crue) ; Garde Façades `NPC_PEN_50` (client régulier, porte un masque de faction).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_57_01` | K0 | masques, art | Ses masques sont fabriqués à la main avec des matériaux des ruines | — |
| 2 | `QI_PEN_57_02` | K0 | masque, revelation | Un masque fin montre le vrai visage du porteur — son essence, pas son apparence | — |
| 3 | `QI_PEN_57_03` | K0 | client, disparu | Un client a disparu dans l'arrière-boutique après s'être regardé dans le miroir | — |
| 4 | `QI_PEN_57_04` | K1 | miroir, boutique | Le miroir de l'arrière-boutique ne reflète pas le masque — il reflète ce qu'il y a dessous | `AFF>=40` |
| 5 | `QI_PEN_57_05` | K1 | client, identite | Le client disparu était en fait le Chancelier Masques `NPC_PEN_07` — il a vu son vrai visage et a fui | `AFF>=60` |
| 6 | `QI_PEN_57_06` | K1 | masque, kirito | Un masque taillé sur le modèle du visage de la Statue Kirito `NPC_PEN_??` ne reflète rien dans le miroir | — |
| 7 | `QI_PEN_57_07` | K2 | masque, sans-visage | Le Marchand a fabriqué un masque pour l'Huissier `NPC_PEN_61` — l'Huissier n'avait pas de visage à cacher | `AFF>=75` |
| 8 | `QI_PEN_57_08` | K2 | materiau, provenance | La résine qu'il utilise pour les masques provient de la même source que les voiles du Marchand Voiles `NPC_PEN_52` | `QUEST:QST_PEN_MASQUES_01` |
| 9 | `QI_PEN_57_09` | K3 | masques, interface | Les masques des Spriggans sont des process d'interface du serveur — un masque fin désactive le process et montre le code brut du PNJ | JAMAIS — déflection : *(il ajuste un masque sur son propre visage et ne dit rien — son masque affiche « NULL »)* |
| 10 | `QI_PEN_57_10` | KX | *(devant le miroir)* | *(il se regarde dans le miroir sans masque et ne voit rien)* « Je me demande parfois si j'existe, ou si je suis juste le marchand de quelqu'un d'autre. » | — |

## 4. Chaînage économique & quêtes

- **Achats** : argile crue (3 po), résine de ruine (8 po).
- **Ventes** : Masque d'Apparat (35 po), Masque de Révélation (60 po).
- **Quête** : `QST_PEN_MASQUES_01` — Enquêter sur la source commune des matériaux de masques et voiles.
- **Fils rouges** : 🎭 Illusions (masques comme process d'interface), 🪞 Statue Kirito (lien miroir/masque).

## 5. Intégration Bot

- **Accueil** (`!parler marchand_masques_fins`) : *« Un masque, c'est une porte. Certaines portes s'ouvrent sur l'extérieur. La mienne s'ouvre sur l'intérieur. Tu es prêt à voir ce que tu caches ? »*
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 ; K3 (slot 9) jamais injecté.
- `!pnj_list` : visible.
