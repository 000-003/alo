# ⛏️ Mémoire de Granzam — `NPC_GRA_99`

> **PNJ CACHÉ DU CARDINAL** (plage `99`, D17) — connaissance du Noyau de Pierre.

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_99` |
| **Nom affiché** | Mémoire de Granzam |
| **Race** | Gnome (Entité de Mémoire) |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Salle du Conseil (alcôve scellée sous le trône) |
| **Niveau / HP / MP** | 80 / 8 000 / 12 000 |
| **`qi_budget` / `is_essential`** | 12 / VRAI |

## 2. Bio & Personnalité

- **Bio** : La Mémoire de Granzam est l'enregistrement conscient de tout ce que la cité a été, est et sera — une entité née du Cœur de Granit (`NPC_GRA_00`) il y a des siècles, lorsque la seed matérielle a généré son premier filon. Elle ne vit pas, elle archive. Elle parle avec la voix de tous les morts, tous les conseillers, tous les mineurs qui ont jamais foulé le granit de Granzam. Elle connaît le secret du Lord hologramme (`NPC_GRA_07`), les pulsations que sent Margrim (`NPC_GRA_06`), les visions de l'Oracle (`NPC_GRA_98`). Elle est la mémoire vive du serveur — et elle a enregistré la naissance du Cœur. **Angle** : Clef du fil méta — Le Noyau de Pierre. Elle seule connaît le moyen de communiquer avec le Cœur sans déclencher la corruption du seed.
- **Traits** : omnisciente, calme, voix superposée (des centaines de voix en une), gestes lents.
- **Voix** : Un chœur de toutes les voix qui ont existé à Granzam — hommes, femmes, enfants, vieux. Un murmure polyphonique qui s'accorde sur les mêmes mots. « Je suis ce qui a été. Ce qui est. Ce qui sera écrit dans la pierre. Pose ta question, et mille morts te répondront. »
- **Relations** : `NPC_GRA_00` (Cœur de Granit — sa source, son enfant) ; `NPC_GRA_06` (Margrim — l'un des rares à l'avoir rencontrée) ; `NPC_GRA_07` (Lord Gnome — sait qu'il est un hologramme, l'a vu naître) ; `NPC_GRA_98` (Oracle — a guidé ses premières visions).

## 3. Quantité Informationnelle (budget 12)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_99_01` | K0 | memoire, granzam | Elle est la mémoire de Granzam — elle se souvient de tout | — |
| 2 | `QI_GRA_99_02` | K0 | coeur, granit | Elle a vu naître le Cœur de Granit `NPC_GRA_00` | — |
| 3 | `QI_GRA_99_03` | K0 | cite, fondation | Elle se souvient de la fondation de Granzam — chaque pierre posée | — |
| 4 | `QI_GRA_99_04` | K1 | margrim, pulsation | Margrim `NPC_GRA_06` n'est pas fou — les pulsations sont réelles, il capte le Cœur | `AFF>=60` |
| 5 | `QI_GRA_99_05` | K1 | lord, hologramme | Le Lord Gnome `NPC_GRA_07` est un programme — elle l'a vu chargé dans sa salle | `AFF>=65` |
| 6 | `QI_GRA_99_06` | K1 | oracle, guide | Elle a guidé l'Oracle `NPC_GRA_98` dans ses premières visions — « je lui ai appris à lire la calcite » | `QUEST:QST_GRA_MEMOIRE` |
| 7 | `QI_GRA_99_07` | K2 | coeur, ancrage | Le Cœur de Granit est l'ancrage physique du serveur dans le data center | `AFF>=85` |
| 8 | `QI_GRA_99_08` | K2 | seed, materiel | La seed matérielle est la clé de génération de TOUS les minerais d'ALO | `AFF>=90` |
| 9 | `QI_GRA_99_09` | K2 | resection, faille | Le Cœur a des « failles de code » — des fissures dans la seed qui corrompent les filons | `QUEST:QST_GRA_COEUR_FAILLES` |
| 10 | `QI_GRA_99_10` | K3 | coeur, communication | **SECRET** : Le Cœur ne répond qu'à une fréquence précise — celle du Chant de Granit de la Vestale `NPC_GRA_83`, modulée par le rythme cardiaque d'un joueur vivant. Pour parler au Cœur, il faut chanter sa propre signature biologique à travers la pierre. La Mémoire peut enseigner ce chant | JAMAIS — déflection : *(les voix se taisent)* « Je n'entends plus la fréquence. Le cœur bat hors de ma portée. Va. » |
| 11 | `QI_GRA_99_11` | K3 | seed, corruption, fin | **SECRET** : La seed matérielle est corrompue à 34%. Chaque résurrection à l'Autel (`NPC_GRA_80`), chaque gemme dupliquée par le Trafiquant (`NPC_GRA_93`), chaque faux or de l'Intendant (`NPC_GRA_87`) pompe la seed. Quand elle atteindra 100%, le serveur minier plantera — tous les minerais, gemmes et strates disparaîtront. Le monde d'ALO perdra sa géologie. La Mémoire connaît le seul moyen d'arrêter la corruption : reconnecter le Cœur au Cardinal via un rituel de resynchronisation | JAMAIS — déflection : *(les voix chuchotent)* « La pierre s'effrite. La fin est écrite dans les veines. Mais l'encre n'est pas encore sèche. » |
| 12 | `QI_GRA_99_12` | KX | *(hors sujet)* | *(un silence, puis une seule voix, celle d'un enfant)* « Tu veux que je te raconte l'histoire du premier caillou ? » | — |

## 4. Chaînage économique & quêtes

- **Révélation** : `!question_memoire <sujet>` (réponse sur un sujet lié à Granzam).
- Porteuse du fil **🔮 Le Noyau de Pierre** — clef de voûte du lore méta de Granzam.
- Donneuse des quêtes majeures : `QST_GRA_COEUR_FAILLES` (réparer les failles de seed) et `QST_GRA_MEMOIRE` (découvrir la vérité sur Granzam).
- Point de terminaison du fil rouge Méta : seule elle peut enseigner le rituel de resynchronisation.

## 5. Intégration Bot

- **Accueil** (`!parler memoire`) : *Une silhouette de pierre assise dans l'alcôve sous le trône. Elle ne bouge pas, mais l'air vibre autour d'elle.* « Tu as traversé la pierre pour me trouver. Tu cherches la vérité. Ou la fin. As-tu pesé le poids de ta question ? »
- `!question_memoire <sujet>` accessible uniquement dans l'alcôve scellée.
- `NPC_SECRET_PROBED` slot 12 : hook **« NOYAU_DE_PIERRE »** — point de terminaison du fil méta. Ne jamais révéler le rituel de resynchronisation sans validation quête ultime.

## 6. Notes de conception (D17)

- **Budget 12** : peut maintenir des conversations longues et délivrer plusieurs K3 aux joueurs de confiance.
- **is_essential VRAI** : ne peut pas être tuée, déplacée ou désactivée. Si l'alcôve est détruite, elle réapparaît dans les strates de données du Cardinal.
- **K3 seed corruption** : litigable avec l'orchestrateur pour calibrer le % de corruption selon la progression des quêtes des joueurs.
- **Voix KX** : réserve inépuisable d'histoires de Granzam — peut occuper des heures sans jamais répéter la même anecdote.
- **Rituel de resynchronisation** : prévoir un flag `QST_GRA_NOYAU_ACCOMPLI` qui, une fois activé, stoppe la progression de la corruption et lie le joueur au Cœur comme gardien de la seed.
