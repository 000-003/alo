# ⛏️ Trafiquant de Gemmes — `NPC_GRA_93`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_93` |
| **Nom affiché** | Trafiquant de Gemmes |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `BLACK_MARKET` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Grande Halle (cache dissimulée) |
| **Niveau / HP / MP** | 28 / 2 000 / 900 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Trafiquant de gemmes opérant depuis une cache camouflée dans la Grande Halle. Il coordonne le réseau inter-cités de gemmes dupliquées et de mithril de contrebande. Ses partenaires : Torvin (`NPC_SWI_93`) pour l'acheminement vers les terres Swilwffe, Ilka (`NPC_GAT_33`) pour le marché de Gatorisande, et Balrog (`NPC_VOU_04`) pour la route de Voulg. Il est le fournisseur principal du Nécromancien (`NPC_GRA_84`) en gemmes noires. Le Marchand Leprechaun (`NPC_GRA_91`) est son complice officieux. **Angle** : Liens Torvin, Ilka, Balrog.
- **Traits** : méfiant, organisé, voix douce mais gestes brusques, toujours un œil sur la sortie.
- **Voix** : Murmurée, rapide, sans bouger les lèvres. « Torvin attend sa livraison. Ilka veut des noires. Balrog… Balrog paie en informations. »
- **Relations** : `NPC_SWI_93` (Torvin — contact Swilwffe) ; `NPC_GAT_33` (Ilka — contact Gatorisande) ; `NPC_VOU_04` (Balrog — contact Voulg) ; `NPC_GRA_84` (Nécromancien — client) ; `NPC_GRA_91` (Marchand Leprechaun — complice) ; `NPC_GRA_94` (Courtier Inter-Racial — couverture légale).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_93_01` | K0 | commerce, noir | Le marché noir de Granzam — discrétion, codes | — |
| 2 | `QI_GRA_93_02` | K0 | gemmes, valeur | La valeur des gemmes — rareté, pureté, poids | — |
| 3 | `QI_GRA_93_03` | K0 | grande_halle, cache | Les caches de la Grande Halle — il connaît toutes les planques | — |
| 4 | `QI_GRA_93_04` | K1 | torvin, swilwffe | Torvin `NPC_SWI_93` lui envoie des acheteurs quatre fois par lune | `AFF>=60` |
| 5 | `QI_GRA_93_05` | K1 | ilka, gatorisande | Ilka `NPC_GAT_33` commande des gemmes noires — « pour sa collection personnelle » | `AFF>=65` |
| 6 | `QI_GRA_93_06` | K1 | balrog, voulg | Balrog `NPC_VOU_04` lui fournit des gemmes brutes de Voulg en échange d'armes en mithril | — |
| 7 | `QI_GRA_93_07` | K2 | gemmes, duplication | Les gemmes « noires » sont des copies — produites à partir d'une gemme-souche unique | `AFF>=85` |
| 8 | `QI_GRA_93_08` | K2 | necromancien, fournisseur | Le Nécromancien `NPC_GRA_84` est son meilleur client — « les gemmes des morts paient bien » | `QUEST:QST_GRA_TRAFIQUANT_RESEAU` |
| 9 | `QI_GRA_93_09` | K3 | reseau, seed, inflation | Le réseau de trafic couvre cinq cités et utilise la duplication de seed pour créer des gemmes parfaites — Torvin les écoule chez les Swilwffe, Ilka chez les Gnomes de Gatorisande, Balrog chez les Salamanders. Chaque gemme dupliquée pompe une micro-fraction de la seed du monde, accélérant l'épuisement du serveur minier | JAMAIS — déflection : *(il recule dans l'ombre)* « J'suis qu'un petit marchand, moi. Les gemmes ? Je les trouve, je les vends. D'où elles viennent ? Demande à la montagne. » |
| 10 | `QI_GRA_93_10` | KX | *(hors sujet)* | *(il sort une gemme de sa poche)* « Celle-ci, elle vient de la strate −40. Unique. J't'ai déjà vue quelque part ? » | — |

## 4. Chaînage économique & quêtes

- **Marché noir** : `!gemmes_noires <quantité>` (achat de gemmes dupliquées).
- Porteur du fil **💎 La Gemme Qui Voit** (réseau de duplication inter-cités).
- Donneur de `QST_GRA_TRAFIQUANT_RESEAU` : infiltration ou démantèlement du réseau.

## 5. Intégration Bot

- **Accueil** (`!parler trafiquant`) : *Il se tient dans un renfoncement de la Grande Halle, les mains dans les poches. Il ne te regarde pas.* « Tu cherches quelque chose de… spécial ? J'ai peut-être ça. Mais pas ici. Pas maintenant. »
- `!gemmes_noires <quantité>` actif dans la Grande Halle (accès conditionnel).
- `NPC_SECRET_PROBED` slot 9 : hook « réseau de duplication = pompe à seed du monde » pour l'orchestrateur.
