# ⛏️ Gardien de la Porte — `NPC_GRA_70`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_70` |
| **Nom affiché** | Gardien de la Porte |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `GUARD` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Porte de Granzam |
| **Niveau / HP / MP** | 54 / 9 200 / 2 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Garde posté à la Porte de Granzam, l'entrée principale de la capitale gnome. Depuis qu'il tient ce poste, il a noté quelque chose d'étrange : certaines nuits, la porte s'ouvre automatiquement — sans garde, sans vent, sans mécanisme. Il a vérifié la serrure : elle est en parfait état. Il a aussi trouvé des traces de pas dans la poussière qui mènent de la porte à la Salle du Conseil — et qui s'arrêtent net au milieu du couloir, comme si quelqu'un s'était évaporé. Il n'en a parlé à personne, pas même au Commandant (`NPC_GRA_09`). Il tient un registre des entrées silencieuses. (Angle : des entrées sans bruit.)
- **Traits** : observateur, silencieux, consciencieux, prudent.
- **Voix** : Voix statique, basse, comme s'il ne voulait pas qu'on l'entende. « La porte s'ouvre seule la nuit. Personne ne passe. Mais le matin, la poussière est déplacée. »
- **Relations** : `NPC_GRA_09` (Commandant — supérieur), `NPC_GRA_71` (Douanier — collègue de porte), `NPC_GRA_86` (Garde Conseil — lien avec le Conseil), `NPC_GRA_55` (Vétéran — voisin de poste).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_70_01` | K0 | porte, granzam | Il garde l'entrée principale de Granzam. | — |
| 2 | `QI_GRA_70_02` | K0 | horaire, garde | Il est posté de 20h à 08h — le quart de nuit. | — |
| 3 | `QI_GRA_70_03` | K0 | registre, entree | Il tient un registre des entrées et sorties. | — |
| 4 | `QI_GRA_70_04` | K1 | porte, ouverture_seule | La porte s'ouvre seule la nuit. Pas de vent, pas de garde, rien. — |
| 5 | `QI_GRA_70_05` | K1 | trace, poussière | Des traces de pas dans la poussière mènent à la Salle du Conseil et s'arrêtent net. | `AFF>=65` |
| 6 | `QI_GRA_70_06` | K1 | serrure, intacte | La serrure est en parfait état. Aucun signe d'effraction. | — |
| 7 | `QI_GRA_70_07` | K2 | registre, sans_entree | Il a croisé son registre : les nuits où la porte s'ouvre, zéro entrée enregistrée. | `AFF>=85` |
| 8 | `QI_GRA_70_08` | K2 | porte, acces_systeme | Les ouvertures coïncident avec les vibrations du Bastion signalées par le Stratège (`NPC_GRA_54`). | `QUEST:QST_GRA_PORTE_SILENCIEUSE` |
| 9 | `QI_GRA_70_09` | K3 | entree_silencieuse, systeme_load | Les entrées sans bruit sont des spawns du Cardinal — des PNJ ou des objets générés par le système qui « entrent » dans Granzam par la porte par défaut. | JAMAIS — déflection : *(il pose la main sur la porte)* « Je ne demande pas qui entre. Je note que rien n'entre. Et la porte s'ouvre quand même. » |
| 10 | `QI_GRA_70_10` | KX | *(tout le reste)* | *(il racle la poussière du sol avec sa botte)* « Regarde. L'empreinte s'arrête là. Comme si le sol avait avalé le marcheur. » | — |

## 4. Chaînage économique & quêtes

- Service : `!registre_entrees <date>` (consulte le registre).
- Porteur du fil **🔮 Noyau de Pierre** (entrées silencieuses = spawns système).
- Donneur de `QST_GRA_PORTE_SILENCEUSE` : enquêter sur les ouvertures automatiques.

## 5. Intégration Bot

- **Accueil** (`!parler gardien_porte`) : *La lance à la main, il fixe la porte comme si elle allait s'ouvrir toute seule.* « La nuit tombe. La porte va s'ouvrir. Comme chaque nuit. »
- `!registreentrees <date>` (consulte le registre).
- `NPC_SECRET_PROBED` slot 9 : hook « entrées silencieuses = spawns système / génération procédurale » pour l'orchestrateur.