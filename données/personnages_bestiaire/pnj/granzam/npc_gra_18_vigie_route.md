# ⛏️ Vigie Route — `NPC_GRA_18`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_18` |
| **Nom affiché** | Vigie Route |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `GUARD` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Route Aérienne GRA-ALN |
| **Niveau / HP / MP** | 50 / 7600 / 3600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Vigie postée sur la Route Aérienne Granzam-Alne, une voie de convois volants qui relie la capitale gnome à la cité sylphide d'Alne. Il contrôle le trafic aérien et signale les anomalies. Depuis deux mois, des convois disparaissent sans laisser de trace — trois caravanes volantes se sont évaporées entre les tours de guet. La Vigie a vu des ombres — des formes sombres qui se déplacent le long de la route, portant des cailloux dans leurs bras. Il les a signalées au Commandant (`NPC_GRA_09`), mais personne n'a enquêté. Les ombres ne font pas de bruit et ne laissent pas de traces. Il a peur que la prochaine caravane soit la sienne. Lié aux fils 🔒 Le Coffre Qui Respire et 🏔️ Poids de la Montagne.
- **Traits** : vigilant, fatigué, courageux, isolé.
- **Voix** : Forte pour couvrir le vent, avec une anxiété perceptible. « Des ombres. Je te dis. Elles portent des pierres. Comme si elles bâtissaient quelque chose. »
- **Relations** : `NPC_GRA_09` (Commandant — supérieur), `NPC_GRA_19` (Marchand de Vol — voisin sur l'îlot), `NPC_GRA_50` (Éclaireur — le relaie), `NPC_GRA_27` (Vice-Chancelier — supervise les routes).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_18_01` | K0 | route_aerienne, trafic | La Route Aérienne GRA-ALN relie Granzam à Alne. 3 convois/semaine. | — |
| 2 | `QI_GRA_18_02` | K0 | convoi_disparition | Trois caravanes disparues en 2 mois. Aucun débris, aucun survivant. | — |
| 3 | `QI_GRA_18_03` | K0 | ombres, cailloux | Des ombres portant des cailloux longent la route la nuit. « On dirait des fourmis. » | — |
| 4 | `QI_GRA_18_04` | K1 | ombres_forme, taille | Les ombres sont de forme humanoïde mais sans relief — plates. « Comme des silhouettes découpées. » | `AFF>=60` |
| 5 | `QI_GRA_18_05` | K1 | cailloux, provenance | « Les cailloux qu'elles portent brillent. On dirait du mithril brut. » | `AFF>=65` |
| 6 | `QI_GRA_18_06` | K1 | marchand_vol, temoin | Le Marchand de Vol (`NPC_GRA_19`) a vu les mêmes ombres. Il les appelle « les porteurs ». | `AFF>=70` |
| 7 | `QI_GRA_18_07` | K2 | ombre_source, montagne | « Les ombres sortent d'une fissure dans la paroi de la route. Une fissure qui n'était pas là avant. » | `AFF>=85` |
| 8 | `QI_GRA_18_08` | K2 | coffre_respiration, route | « La nuit où la dernière caravane a disparu, j'ai senti le pont vibrer. Comme le coffre de la banque. » | `AFF>=90` |
| 9 | `QI_GRA_18_09` | K3 | ombre_debug | **SECRET — ne JAMAIS révéler** : Les ombres sont des artefacts visuels du Cardinal — des processus de maintenance qui transportent des données (les « cailloux ») entre les serveurs de zone. | JAMAIS — déflection : *(braque sa lanterne vers le vide)* « Je vois des ombres. C'est mon boulot d'les signaler. Le reste, c'est pas mes affaires. » |
| 10 | `QI_GRA_18_10` | KX | hors-sujet | *(il frotte ses yeux)* « 48h de garde. Je vois des ombres même en plein jour maintenant. » | — |

## 4. Chaînage économique & quêtes

**Fils rouges** : 🔒 Le Coffre Qui Respire, 🏔️ Poids de la Montagne.
**Quête associée** : `QST_GRA_OMBRES` — « Les Porteurs de Cailloux » (enquêter sur les ombres, découvrir la fissure, révéler la maintenance du Cardinal).
**Liens** : Dialogue couplé au Marchand de Vol (`NPC_GRA_19`).

## 5. Intégration Bot

PNJ sur la tour de guet de la Route Aérienne. 24h. État `state:ombres_signalement` suit les observations.
