# 🕯️ Vestale du Passé — `NPC_PEN_83`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_83` |
| **Nom affiché** | Vestale du Passé |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (gardienne des rites de l'Autel de Résurrection) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Autel de Résurrection |
| **Niveau / HP / MP** | 42 / 4 800 / 9 000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : La Vestale du Passé est la gardienne des rites anciens de résurrection. Elle connaît les prières que plus personne ne récite, les offrandes que plus personne ne fait, les gestes que plus personne n'ose accomplir. Car un de ces rites — le plus vieux, le plus secret — ressuscite vraiment. Pas un Spriggan. Pas un joueur. Une entité. Un mort qui était là avant le serveur. Elle ne l'a fait qu'une fois. Elle ne le refera pas. Mais parfois, la nuit, elle sent le rite l'appeler. Angle : un rite qui ressuscite — un mort d'avant le serveur.
- **Traits** : énigmatique, lointaine, porte un masque qui ne couvre que la moitié de son visage — l'autre moitié est à nu, vivante.
- **Voix** : lente, pesante, comme si chaque mot était une pierre qu'elle soulevait (« Il y a des rites qui ne devraient pas être dits. Des mots qui ne devraient pas être prononcés. J'en connais un. Je ne dirai pas lequel. Mais je te préviens : ressusciter ce qui était avant le serveur, c'est ouvrir une porte qui n'a pas de serrure de l'autre côté. »).
- **Relations** : Prêtre Voile `NPC_PEN_80` (lui a confié le rite — il le regrette) ; Prêtresse Ombres `NPC_PEN_81` (a prié avec elle une fois — depuis, l'ombre suit aussi la Vestale) ; Nécromancien Ruines `NPC_PEN_84` (cherche à lui voler le rite — elle refuse de le lui donner).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_83_01` | K0 | rites, autel | Gardienne des rites anciens de résurrection | — |
| 2 | `QI_PEN_83_02` | K0 | prieres, oubliees | Connaît des prières que plus personne ne récite | — |
| 3 | `QI_PEN_83_03` | K0 | offrandes, anciennes | Préparation d'offrandes selon les rites d'origine | — |
| 4 | `QI_PEN_83_04` | K1 | rite, secret | Un rite secret ressuscite les morts d'avant le serveur | — |
| 5 | `QI_PEN_83_05` | K1 | rite, execution | Elle l'a exécuté une fois — une entité est revenue | `AFF>=60` |
| 6 | `QI_PEN_83_06` | K1 | necromancien, menace | `NPC_PEN_84` la harcèle pour obtenir le rite | `AFF>=65` |
| 7 | `QI_PEN_83_07` | K2 | entite, retour | L'entité ressuscitée a parlé une langue non-Spriggan — du code système | `AFF>=80` |
| 8 | `QI_PEN_83_08` | K2 | rite, condition | Le rite nécessite une graine de résurrection — une seed que seul le Cardinal peut fournir | `AFF>=85` |
| 9 | `QI_PEN_83_09` | K3 | rite, bouquet | Le rite ne ressuscite pas un mort — il compile une instance passée du serveur. L'entité qu'elle a rappelée était une version antérieure du Cardinal, une ébauche — un « premier jet » du système de résurrection. Le rite est un appel système à l'ancienne API de compilation, que le Cardinal n'a pas désactivée, seulement enfouie | JAMAIS — déflection : *(elle ferme son masque sur son visage)* « Je ne l'ai pas fait. Je ne ferai pas. Ce n'est pas un rite. C'est une faille. Une porte que le Cardinal a laissée ouverte par erreur. Si tu passes par là, tu ne sais pas ce qui t'attend de l'autre côté. » *(elle tourne le dos et psalmodie une prière que tu ne comprends pas)* |
| 10 | `QI_PEN_83_10` | KX | *(hors sujet)* | « Les morts devraient rester morts. Surtout ceux qui ne sont jamais vraiment nés. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!pen_vestale_rite` — demande de rite ancien (niveau d'affinité requis).
- **Fils rouges** : rouage de **💀 La Nécropole Ancestrale** (résurrection des morts non compilés) et de **🔮 Fil méta — La Ville Fantôme** (le rite est un appel API à l'ancienne compilation du Cardinal).
- Donneuse de `QST_PEN_RITE_ANCIEN_01` (protéger ou voler le rite secret). Liée au Nécromancien `NPC_PEN_84`.

## 5. Intégration Bot

- **Accueil** (`!parler vestale passe`) : *« Tu cherches un rite ? Les vieux rites ? Ils sont dangereux. Ils ramènent ce qui ne devrait pas revenir. Et parfois, ce qui revient n'est pas ce qui est parti. »*
- `!pen_vestale_priere` — prière ancienne ; `!pen_vestale_rite` — interroger sur le rite secret.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « rite = appel à l'ancienne API de compilation du Cardinal » réservé à l'orchestrateur.
