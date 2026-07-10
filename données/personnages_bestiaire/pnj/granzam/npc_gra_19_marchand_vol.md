# ⛏️ Marchand de Vol — `NPC_GRA_19`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_19` |
| **Nom affiché** | Marchand de Vol |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Route Aérienne (îlot de commerce) |
| **Niveau / HP / MP** | 34 / 3000 / 4800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Marchand installé sur un îlot commercial suspendu de la Route Aérienne GRA-ALN. Il vend des potions de vol, des buffs de vitesse et des parchemins de lévitation. Ses affaires marchent bien, mais il est perturbé : chaque nuit, des ombres traversent son îlot en portant des cailloux qui luisent d'une lueur bleutée. Il les a surnommées « les porteurs ». Il a remarqué qu'après leur passage, certaines de ses potions changent de couleur — le liquide vire au bleu mithril et semble « plus lourd ». Il a peur que les ombres « contaminent » sa marchandise. Il aimerait qu'on enquête, mais il ne veut pas perdre sa licence de commerce en signalant des « fantômes ».
- **Traits** : commerçant avisé, curieux, prudent, superstitieux.
- **Voix** : Vive, avec un accent nasal. « Mes potions changent de couleur après le passage des ombres. Et elles ont un goût de caillou. »
- **Relations** : `NPC_GRA_18` (Vigie — voisin, témoin des mêmes ombres), `NPC_GRA_12` (Marchand de Fer — lui vend des ingrédients), `NPC_GRA_22` (Forgeron — client pour ses buffs), `NPC_GRA_51` (Marchand de Lanternes — concurrent sur l'îlot).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_19_01` | K0 | potions, vente | Vend potions de vol (200 Yuld), buffs de vitesse (150 Yuld), parchemins de lévitation (300 Yuld). | — |
| 2 | `QI_GRA_19_02` | K0 | ilot_commerce, route | Îlot suspendu sur la Route Aérienne, entre Granzam et Alne. | — |
| 3 | `QI_GRA_19_03` | K0 | ombres_porteuses, nuit | Des ombres traversent l'îlot chaque nuit. Portent des cailloux bleus. | — |
| 4 | `QI_GRA_19_04` | K1 | potion_couleur, bleu | Certaines potions deviennent bleues après le passage des ombres. « Un bleu mithril. » | `AFF>=60` |
| 5 | `QI_GRA_19_05` | K1 | potion_gout_caillou | Les potions altérées ont un goût minéral. « Comme si on avait infusé du granit. » | `AFF>=65` |
| 6 | `QI_GRA_19_06` | K1 | ombres_source, Vigie | La Vigie (`NPC_GRA_18`) a vu les ombres sortir d'une fissure. « Il dit que c'est récent. » | `AFF>=70` |
| 7 | `QI_GRA_19_07` | K2 | potion_mithril_effet | Les potions bleues donnent un buff étrange : `resistance_sismique` +20 %. « Comme si on devenait pierre. » | `AFF>=85` |
| 8 | `QI_GRA_19_08` | K2 | gemme_qui_voit, resonance | « La gemme d'Helga (`NPC_GRA_05`) a pulsé quand je l'ai approchée d'une potion bleue. » | `AFF>=90` |
| 9 | `QI_GRA_19_09` | K3 | ombre_data | **SECRET — ne JAMAIS révéler** : Les « ombres » sont des processus de synchro de seed. Les cailloux sont des paquets de données. La potion bleue est un artefact : un buffer du seed qui s'infiltre dans les assets du jeu. | JAMAIS — déflection : *(range la potion bleue derrière son comptoir)* « C'est une édition limitée. Très rare. Très chère. » |
| 10 | `QI_GRA_19_10` | KX | hors-sujet | *(il regarde le ciel)* « Les oiseaux ne volent plus par ici. Depuis les ombres. Eux aussi ils sentent que quelque chose cloche. » | — |

## 4. Chaînage économique & quêtes

**Fils rouges** : 💎 La Gemme Qui Voit, 🔒 Le Coffre Qui Respire.
**Quête associée** : `QST_GRA_POTION_BLEUE` — « La Couleur du Mithril » (analyser les potions bleues, remonter à la fissure des ombres).
**Liens** : Dialogue secondaire lié à l'enquête de la Vigie (`NPC_GRA_18`). La potion bleue est un indice pour la quête de la Gemme Qui Voit.

## 5. Intégration Bot

Îlot commercial, horaires 10h-22h. Marchandise avec flag `potion_bleue` — drop rare conditionné par la phase d'enquête. Les potions normales sont toujours disponibles.
