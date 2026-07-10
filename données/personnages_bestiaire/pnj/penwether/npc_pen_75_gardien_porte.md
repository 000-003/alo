# 🕯️ Gardien de la Porte — `NPC_PEN_75`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_75` |
| **Nom affiché** | Gardien de la Porte |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `GUARD` (garde de la Porte de Penwether) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Porte de Penwether |
| **Niveau / HP / MP** | 55 / 8 500 / 3 000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Gardien de la Porte filtre les entrants à la seule entrée officielle de Penwether. Il connaît toutes les silhouettes autorisées, toutes les signatures de masque, tous les laissez-passer. Mais il y a des ombres qui entrent sans masque — des formes indistinctes qu'il voit du coin de l'œil et qui disparaissent dans les ruines. Il ne les signale pas. Il ne peut pas les signaler. Chaque fois qu'il ouvre la bouche pour le dire, il oublie ce qu'il allait dire. Angle : des ombres entrent sans masque — il les voit, mais ne peut pas en parler.
- **Traits** : vigilant, méthodique, troublé par un silence qu'il ne s'explique pas.
- **Voix** : ferme, mécanique (« Nom ? Origine ? Raison de la visite ? …Bien. Passe. »), mais une hésitation quand une ombre passe sans qu'il l'enregistre.
- **Relations** : Douanier Illusions `NPC_PEN_76` (collègue de la Porte) ; Veilleur Nuit `NPC_PEN_77` (relève la garde) ; Chancelier Masques `NPC_PEN_07` (supérieur hiérarchique — ignore sa nature).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_75_01` | K0 | porte, acces | Contrôle des entrées — liste des entrants, heures, motifs | — |
| 2 | `QI_PEN_75_02` | K0 | procedure, filtrage | Filtre les entrants — masque obligatoire, laissez-passer pour non-Spriggans | — |
| 3 | `QI_PEN_75_03` | K0 | registre, noms | Tient un registre des noms — tous les soirs, il manque des entrées | — |
| 4 | `QI_PEN_75_04` | K1 | ombres, sans masque | Des ombres entrent sans masque — il les voit, puis oublie | — |
| 5 | `QI_PEN_75_05` | K1 | oubli, portes | Chaque soir, son registre a des pages vierges — des entrées effacées | `AFF>=60` |
| 6 | `QI_PEN_75_06` | K1 | douanier, complicite | `NPC_PEN_76` voit les mêmes ombres — ils n'en parlent jamais | `AFF>=65` |
| 7 | `QI_PEN_75_07` | K2 | ombres, origine | Les ombres viennent des Ruines Noires — elles n'empruntent pas la Porte | `AFF>=80` |
| 8 | `QI_PEN_75_08` | K2 | chancelier, ordre | Le Chancelier `NPC_PEN_07` a ordonné de ne pas entraver les ombres | `AFF>=85` |
| 9 | `QI_PEN_75_09` | K3 | ombre, compilation | Les ombres sans masque sont des processus résiduels du Cardinal — des « threads orphelins » de la compilation qui rentrent à la maison. Penwether est leur point d'origine. Leur serveur source | JAMAIS — déflection : *(il regarde ses mains)* « Je ne les vois pas. Je n'ai rien vu. Personne n'est entré. La Porte est fermée. » *(ses doigts tremblent sur le registre)* |
| 10 | `QI_PEN_75_10` | KX | *(hors sujet)* | « La Porte ne ment pas. Mais moi, si. » | — |

## 4. Chaînage économique & quêtes

- **Guard** : `!porte_acces [nom]` — vérification d'accès. `!porte_rapport` — état des entrées.
- **Fils rouges** : rouage de **🔮 Fil méta — La Ville Fantôme** (les ombres sont des threads de la compilation qui retournent à la coque serveur).
- Hook d'observation : les ombres sans masque sont visibles uniquement par `NPC_PEN_75` et `NPC_PEN_76`.

## 5. Intégration Bot

- **Accueil** (`!parler gardien porte`) : *« Nom ? Origine ? …T'as un masque ? Bien. Entre. Et ne traîne pas dans les ruines après la tombée de la nuit. »*
- `!porte_acces` — vérification ; `!porte_rapport` — statistiques d'entrée.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2 débloqués).
- `NPC_SECRET_PROBED` slot 9 : hook « ombres = threads orphelins du Cardinal » réservé à l'orchestrateur.
