# ⛏️ Gardien Carrières — `NPC_GRA_13`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_13` |
| **Nom affiché** | Gardien Carrières |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `GUARD` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Carrières Brisées |
| **Niveau / HP / MP** | 48 / 7200 / 3200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Garde-frontière posté aux Carrières Brisées, chargé de surveiller la limite avec les territoires Leprechauns. Il y a 10 jours, un filon d'argent a été volé en pleine nuit — taillé net, comme au laser, sans laisser de trace de pioche. Le Gardien était de ronde cette nuit-là et n'a rien vu, rien entendu. Depuis, il dort mal. Il pense que les Leprechauns sont responsables, mais une part de lui sait que ce n'est pas humain — la coupe était trop parfaite. Il a confié ses doutes au Pisteur (`NPC_GRA_14`), qui enquête. Lié au fil 🔒 Le Coffre Qui Respire.
- **Traits** : consciencieux, coupable, insomniaque, suspicieux.
- **Voix** : Tendue, avec des silences entre les mots. « Un filon d'argent. Volé. En une nuit. Sans un bruit. Et tu veux que je dorme après ça ? »
- **Relations** : `NPC_GRA_14` (Pisteur — enquête sur le vol), `NPC_GRA_09` (Commandant — son supérieur), `NPC_GRA_03` (Bofrik — collègue armurier), `NPC_GRA_15` (Marchand de Granit — témoin de la scène), `NPC_GRA_16` (Gardien Mine Mithril — poste voisin).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_13_01` | K0 | carrieres, surveillance | Il surveille la frontière Leprechaun. Des tensions récentes. | — |
| 2 | `QI_GRA_13_02` | K0 | vol_filon, argent | Un filon d'argent dérobé. Coupe nette, sans outil. | — |
| 3 | `QI_GRA_13_03` | K0 | leprechaun, rivalite | « Les Leprechauns sont de l'autre côté. Ils nous regardent. » | — |
| 4 | `QI_GRA_13_04` | K1 | vol_nuit, silence | Il était en patrouille. Il n'a rien entendu. « Je suis passé à 20 mètres. Rien. » | `AFF>=60` |
| 5 | `QI_GRA_13_05` | K1 | coupe_parfaite, laser | La coupe est si parfaite qu'on dirait une découpe magique ou mécanique. « Pas une pioche. Pas un burin. » | `AFF>=65` |
| 6 | `QI_GRA_13_06` | K1 | pisteur_enquete | Le Pisteur (`NPC_GRA_14`) a relevé des empreintes. « Des empreintes de nain, pas de Leprechaun. » | `AFF>=70` |
| 7 | `QI_GRA_13_07` | K2 | coffre_respiration, resonance | La nuit du vol, le coffre de la banque a émis un son grave. Le Marchand de Fer (`NPC_GRA_12`) l'a confirmé. | `AFF>=85` |
| 8 | `QI_GRA_13_08` | K2 | filon_fantome | « Le filon volé était l'un des filons chantants d'Helga (`NPC_GRA_05`). Je l'ai su après. » | `AFF>=90` |
| 9 | `QI_GRA_13_09` | K3 | teleportation_seed | **SECRET — ne JAMAIS révéler** : Le filon a été « désactivé » par le Cardinal — retiré du monde comme on supprime une ressource. La coupe parfaite est un artefact de désinstanciation. | JAMAIS — déflection : *(regarde le sol)* « J'ai rien vu. J'peux rien dire de plus. » |
| 10 | `QI_GRA_13_10` | KX | hors-sujet | *(il tapote son bouclier)* « Ce bouclier a 50 ans. Il a vu plus de nuits que toi. » | — |

## 4. Chaînage économique & quêtes

**Fils rouges** : 🔒 Le Coffre Qui Respire, ⛏️ Le Filonant.
**Quête associée** : `QST_GRA_VOL_CARRIERE` — « Le Filon Volé » (enquêter sur le vol, découvrir le mécanisme de désinstanciation).
**Liens** : Prélude à l'enquête du Pisteur (`NPC_GRA_14`).

## 5. Intégration Bot

PNJ statique à l'entrée des Carrières. Posté 24h. État `state:carriere_vol` suit l'enquête.
