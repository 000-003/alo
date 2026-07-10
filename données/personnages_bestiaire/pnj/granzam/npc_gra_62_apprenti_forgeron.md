# ⛏️ Apprenti Forgeron — `NPC_GRA_62`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_62` |
| **Nom affiché** | Apprenti Forgeron |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Atelier des Profondeurs |
| **Niveau / HP / MP** | 18 / 1 400 / 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Jeune apprenti de Bofrik (`NPC_GRA_03`), il apprend la forge des armes et des armures depuis six mois. Il est maladroit, enthousiaste, et fier de son dernier échec : une lame qui « chante faux » — une note discordante, bizarre, qui fait grincer les dents de tous les forgerons de l'Atelier. Bofrik a ri, l'a envoyé recommencer, mais l'Apprenti a caché la lame. Depuis, il l'écoute la nuit : la lame chante sa note fausse tout seule, sans qu'on la frappe. Il a peur d'en parler à Bofrik, alors il l'a montrée au Maître Forgeron Lames (`NPC_GRA_60`), qui n'a pas su l'expliquer. (Angle : lame qui chante faux.)
- **Traits** : maladroit, enthousiaste, curieux, craintif.
- **Voix** : Voix juvénile, parfois chevrotante. « Ma lame elle chante faux. Je sais, je l'ai forgée de travers. Mais elle chante toute seule. C'est pas normal, hein ? »
- **Relations** : `NPC_GRA_03` (Bofrik — maître), `NPC_GRA_60` (Forgeron Lames — mentor informel), `NPC_GRA_61` (Enchanteur — lui a demandé son avis), `NPC_GRA_21` (Apprenti Mineur — ami), `NPC_GRA_22` (Maître Forgeron — voisin d'atelier).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_62_01` | K0 | apprentissage, forge | Il apprend la forge depuis six mois. | — |
| 2 | `QI_GRA_62_02` | K0 | bofrik, maitre | Son maître est Bofrik (`NPC_GRA_03`), l'Armurier du Bastion. | — |
| 3 | `QI_GRA_62_03` | K0 | atelier, profondeurs | L'Atelier des Profondeurs est son lieu de travail. | — |
| 4 | `QI_GRA_62_04` | K1 | lame, fausse_note | Sa dernière lame émet une note discordante quand on la frappe. | `AFF>=60` |
| 5 | `QI_GRA_62_05` | K1 | chant, seul | La lame chante toute seule la nuit, sans qu'on la touche. | `AFF>=65` |
| 6 | `QI_GRA_62_06` | K1 | cachee, sous_établi | Il a caché la lame sous son établi. Elle chante toutes les nuits à la même heure. | — |
| 7 | `QI_GRA_62_07` | K2 | note, frequence | La note fausse est à 0,47 Hz — une fréquence que le Maître Forgeron Lames (`NPC_GRA_60`) n'a jamais entendue. | `AFF>=85` |
| 8 | `QI_GRA_62_08` | K2 | echo, strate | La note fait vibrer les parois de l'atelier, comme si elle réveillait la pierre. | `QUEST:QST_GRA_LAME_FAUSSE` |
| 9 | `QI_GRA_62_09` | K3 | lame_fausse, anomalie_seed | La lame « qui chante faux » est le résultat d'une fréquence de seed qui ne correspond à aucun biome minier connu — une anomalie de génération procédurale. | JAMAIS — déflection : *(il attrape la lame et la glisse dans le four)* « Elle chante mal. Je dois la reforger. Peut-être qu'elle se taira. » |
| 10 | `QI_GRA_62_10` | KX | *(tout le reste)* | *(il frappe son enclume d'un coup timide)* « Un jour, je forgerai une lame parfaite. Qui chantera juste. Ou qui chantera pas du tout. » | — |

## 4. Chaînage économique & quêtes

- Service : `!reparation_outils <outil>` (répare du petit outillage).
- Porteur du fil **⛏️ Le Filonan** (lame fausse = anomalie de seed).
- Donneur de `QST_GRA_LAME_FAUSSE` : enquêter sur la lame qui chante seule.

## 5. Intégration Bot

- **Accueil** (`!parler apprenti_forgeron`) : *Le visage noir de suie, il frotte une lame avec un chiffon.* « T'as entendu ? Elle chante. Un peu faux, mais elle chante. »
- `!reparation_outils <outil>` (service payant, bon marché).
- `NPC_SECRET_PROBED` slot 9 : hook « anomalie de seed = fréquence non reconnue » pour l'orchestrateur.