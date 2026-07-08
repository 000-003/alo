# 🧭 MÉTHODOLOGIE & TODOLIST — Cahier des charges de reprise (pour tout modèle/exécutant)

> **Rôle de ce fichier** : permettre à n'importe quel modèle (même moins performant) de poursuivre le chantier « ≥100 unités/type » avec la même qualité. Il documente la méthodologie exacte suivie par Claude Fable 5, étape par étape, avec checklists mécaniques. **À lire après `alo_context.md` et avant toute production.**
> **Dernière mise à jour** : 2026-07-08.

---

## 1. SÉQUENCE DE DÉMARRAGE OBLIGATOIRE (après chaque /clear)

Exécuter DANS CET ORDRE, sans sauter d'étape :

1. Lire `alo_context.md` (état courant du projet).
2. Lire `alo_progression.md` (dernières entrées seulement si le contexte est serré).
3. Lire `system_persona_architecte.md` (les 3 filtres : Développeur / Game Designer / Scénariste).
4. Lire l'**index maître du lot en cours** (ex : `données/personnages_bestiaire/pnj/_index_pnj.md`) — il contient le roster/la grille actée.
5. Lister le dossier cible (`ls`) pour compter ce qui existe déjà — **ne jamais recréer un fichier existant, ne jamais sauter un numéro**.
6. Lire **1 à 2 fiches récentes** du même lot comme gabarit vivant (la plus récente = la référence de format).
7. Produire. S'arrêter en fin d'étape. Mettre à jour `alo_context.md` + `alo_progression.md` + l'index du lot.

**Règles non négociables** (rappel) : zéro code applicatif, markdown uniquement, décisions fortes sans demander validation, profondeur 200%, tout ajout ⇒ équivalents commandes Joueur `!*` / GM `!sys_*` / IA `SYS_*`.

---

## 2. MÉTHODOLOGIE DE PRODUCTION D'UNE FICHE (le cœur du savoir-faire)

### 2.1 Principe directeur

**1 unité = 1 fichier = 1 fiche « fandom »** : le niveau de détail visé est celui d'une page de wiki de fan mature (type wiki SAO) — identité technique complète + personnalité mémorable + intégration mécanique. Jamais de lore d'une ligne, jamais d'ID à hash, jamais d'entité déconnectée de l'économie.

### 2.2 Les 3 filtres du persona, traduits en pratique

| Filtre | Question à se poser sur CHAQUE fiche | Échec typique à éviter |
|---|---|---|
| Développeur | Tout est-il implémentable en bot ? (ID stricts, conditions machine-lisibles, flags nommés) | Condition floue type « si le joueur est gentil » |
| Game Designer | L'entité a-t-elle une place dans l'arbre économique ? Qui lui achète, qui lui vend, quel puits/source d'Yrds ? | PNJ « décoratif » sans transaction ni service |
| Scénariste | Y a-t-il un secret inavouable + une ligne de dialogue mémorable ? Le lore provoque-t-il l'émerveillement ? | Bio générique interchangeable (« marchand sympathique ») |

### 2.3 Gabarit PNJ (contrat D17) — structure EXACTE, 5 sections

```markdown
# 🔥 <Nom>, <Titre> — `NPC_<VILLE>_<NN>`

## 1. Identification Cardinal
(table : NPC_ID / Nom affiché / Race / Rôle role_type / Zone + sous-lieu / Niveau HP MP / qi_budget + is_essential)

## 2. Bio & Personnalité (matériau LLM)
- **Bio** : 3-5 phrases. Structure éprouvée : métier concret → détail qui rend unique → tension/contradiction interne.
- **Traits** : 3 traits, dont 1 paradoxal.
- **Voix** : 1 réplique-signature entre guillemets (le "verbal tic" du PNJ).
- **Relations** : 3 liens vers d'autres PNJ PAR ID (voir §2.5 maillage).

## 3. Quantité Informationnelle (budget 10)
(table 10 lignes : # / QI_ID / Niv / topic_tags / Contenu / Condition)

## 4. Chaînage économique & quêtes
(2-3 puces : rôle dans l'économie + quête(s) QST_<SEC>_*)

## 5. Intégration Bot
- **Accueil** (`!parler <nom>`) : réplique d'ouverture en italique.
- 1 spécification mécanique (commande, flag, trigger — SPÉCIFIÉE, pas codée).
```

### 2.4 La table QI : recette mécanique infaillible

Répartition FIXE du budget 10 : **3×K0, 3×K1, 2×K2, 1×K3, 1×KX**.

- **K0** (public, gratuit) : services/tarifs, lore public, actualité. C'est la « page boutique » du PNJ.
- **K1** (confiance basique) : expertise de métier, observations. Peut porter `AFF>=60-70` ou débloquer une recette/un bonus.
- **K2** (confidences) : condition `AFF>=75-90`, parfois `+QUEST:QST_*`. Contenu : ce que le PNJ a VU/compris — souvent un indice d'un fil rouge (§3).
- **K3** (le secret inavouable) : condition **JAMAIS** + déflection scriptée obligatoire au format : *(didascalie physique)* « réplique de fermeture ». Le K3 n'est JAMAIS révélé par dialogue — seulement par quête dédiée ou orchestrateur.
- **KX** (fallback) : la ligne d'ignorance en une phrase dans la voix du PNJ (pare-feu D18 : hors enveloppe = pas d'appel LLM).

**Recette du bon K3** : prendre le métier du PNJ, se demander « quelle est la pire chose que ce métier lui a permis de faire/savoir/cacher ? », puis attacher un COÛT s'il était révélé (sa place, une vie, la paix). Un K3 sans conséquence n'est pas un K3.

### 2.5 Maillage (la discipline qui fait la qualité d'ensemble)

- Chaque fiche référence **≥3 autres PNJ par ID** (section Relations) + **≥2 entités mécaniques** (zones `ZONE_*`, mobs `MOB_*`, boss, matériaux `MAT`, jauges D11/D12).
- Les références sont **bidirectionnelles à terme** : si A cite B, la fiche de B (quand elle est produite) doit reconnaître la relation. En produisant dans l'ordre du roster, citer librement vers l'avant (ex : la fiche 22 peut citer la 80) — la fiche future honorera le lien.
- **Interdiction d'inventer un ID** hors des registres : zones → atlas ; mobs → plages D6 ; PNJ → roster de l'index. Si un besoin de nouvelle entité apparaît : le noter en « lien réservé (lot X) », ne pas créer l'ID.

### 2.6 Grilles numériques (cohérence des stats)

| Profil PNJ | Niveau | HP | MP |
|---|---|---|---|
| Population civile | 3-15 | 150-800 | 200-500 |
| Artisans/guides | 15-30 | 800-3 000 | 250-900 |
| Notables, instructeurs (SKILL_MASTER) | 30-45 | 3 000-8 000 | 600-3 500 |
| Gouvernance (08-09), caché (00) | 50-80 | 8 000+ | — (is_essential=VRAI) |

Prix : suivre la grille D15 (T1 150-400 Yrds → T4 9k-20k, revente 25%) ; services courants 2-60 Yrds ; consommables de rue 2-8 Yrds ; enseignement `rang×500`.

### 2.7 Les fils rouges (technique des intrigues distribuées)

Une ville = **4-6 intrigues transversales**, chacune distribuée en indices K2/K3 sur 3-7 PNJ. AUCUN PNJ ne détient une intrigue entière. Fils actifs de Gattan (à maintenir, ne pas résoudre) :

| Fil | PNJ porteurs (indices) | Nature |
|---|---|---|
| **Mobilisation secrète** | Kruger 30, Zela 35, Borga 40, Fyra 41, Petra 51, Marza 74, Flint 75 | Le Palais prépare une guerre ; l'invasion d'il y a 3 ans a été fabriquée |
| **Le détenu sans nom** | Torvak 26, Dreck 38, Fyra 41, Danna 55, Vanna 73 | Un prisonnier officiel-inexistant, nourri de nuit, visage « mort » honoré d'une statue |
| **La statue qui ment** | Rosza 45 (lettre), Onya 48 (chevalière), Jorv 53 (13e légende), Marga 99 | La lignée « éteinte » de Gattan ne l'est pas |
| **Anomalie de la Caldeira** (hook post-Logi) | Ansel 37, Solman 47, Fenn 50, Coff 59, Gratta 61, Rikko 62, Salvia 56 | Structure artificielle sous le donjon + acheteur fantôme qui collectionne les indices |
| **Fil méta (le Cardinal observé)** | Sela 43, Nyssa 58, Ignatius 64, Calda 65, Timo 66, Golm 67, Ashka 68, Embra 70 | Des PNJ perçoivent le système. RÈGLE : jamais confirmé, 1 révélation méta max/session, réservé orchestrateur |
| **Empoisonnement du notable** | Rosza 45, Salvia 56, Vess 63, Marza 74 | Mort suspecte, fournisseurs involontaires, cargaison effacée liée au Temple |

**Comment étendre un fil** : chaque nouveau PNJ proche (géographiquement ou professionnellement) d'un fil peut recevoir UN indice K2 qui le croise. Ne jamais donner la résolution — les quêtes `QST_SAL_*` la donnent.

### 2.8 Variété (éviter la fiche-clone)

Vérifier sur chaque lot de 5 fiches consécutives : pas deux mêmes structures de secret (varier : culpabilité passée / connaissance dangereuse / identité cachée / objet caché / amour secret) ; pas deux mêmes mécaniques d'intégration bot ; alterner les tonalités (grave, drôle, touchant, inquiétant). Les gimmicks mécaniques uniques sont encouragés (Torvak = troc d'infos, Fyra = dialogues à expiration, Skal = MAJUSCULES utiles, Jorv = lore payant 1 Yrd).

---

## 3. CHECKLIST DE VALIDATION PAR FICHE (à cocher mentalement avant d'écrire le fichier)

- [ ] Nom de fichier : `npc_<ville>_<nn>_<slug>.md` (slug = prénom en minuscules sans titre).
- [ ] ID séquentiel conforme au roster de l'index (JAMAIS de trou, JAMAIS de hash).
- [ ] 5 sections D17 présentes, dans l'ordre, avec les intitulés exacts.
- [ ] Table QI : 10 lignes, répartition 3/3/2/1/1, QI_ID au format `QI_<VILLE>_<NN>_<nn>`.
- [ ] K3 : condition « JAMAIS » + déflection *(geste)* « réplique ».
- [ ] ≥3 relations PNJ par ID + ≥2 ancrages mécaniques (zone/mob/MAT/jauge).
- [ ] ≥1 chaînage économique concret (qui paie quoi à qui) + ≥1 hook de quête `QST_<SEC>_*`.
- [ ] Section 5 : réplique d'accueil + 1 spécification bot (flag/commande/trigger nommé).
- [ ] Stats dans la grille §2.6 ; prix dans la grille D15.
- [ ] Émoji d'en-tête = celui du territoire (🔥 Salamander ; adapter par ville : 🌪️ Sylph, 🐾 Cait Sith, 🎵 Puca, 🌑 Imp, ⛰️ Gnome, ⚒️ Leprechaun, 👁️ Spriggan, 💧 Undine, 🌳 Alne/neutre).
- [ ] Relecture « 3 filtres » (§2.2) : une faiblesse sur un filtre = retravailler avant d'écrire.

---

## 4. CHECKLIST DE FIN D'ÉTAPE (avant de rendre la main)

1. [ ] Mettre à jour l'**index du lot** (cocher les lignes produites / passer le lot à ✅).
2. [ ] Mettre à jour `alo_context.md` : ligne « Dernière mise à jour » + section chantier (compteurs).
3. [ ] Ajouter l'entrée d'étape dans `alo_progression.md` (table des modifications + décisions actées le cas échéant).
4. [ ] Si nouvelles commandes/flags introduits : les propager dans `whatsapp_commands_list.md` / `ai_orchestrator_commands.md` (règle de complétude).
5. [ ] Vérifier le compte : `ls <dossier> | wc -l` = attendu.

---

## 5. TODOLIST — ÉTAT EXACT ET ORDRE D'EXÉCUTION

### 5.1 EN COURS — Lot 2.1 PNJ Gattan (100 fiches)

**Fait : `NPC_GAT_00` à `NPC_GAT_75` (76/100).** Reste **24 fiches** : `NPC_GAT_76-99`, roster acté dans `pnj/_index_pnj.md` (suivre ligne par ligne — sous-lieux : Remparts 76-79, Voie des Scories 80-89, Quartier de la Porte/services 90-97, École 98, Vieille ville 99).

Points d'attache à honorer (liens déjà cités par les fiches 00-75, à réaliser dans les fiches cibles) :
- **76 Krom** : anti-aérien `MOB_AIR_*`, tandem avec Flint 75/Bello 77.
- **80 Snyk** : soupçonné par Berra 21 (à tort ou raison — trancher : il est receleur mais PAS le voleur de la Forge), refus d'Onya 48, équilibre avec Vanna 73.
- **82 Vieux Cendreux** : cicatrices d'officier (Malvo `QI_36_08`), refuse l'aumône de Dole 71 — lier à l'invasion fabriquée (Flint `QI_75_09`) : c'est l'officier qui a ouvert les cages, déserteur moral.
- **84 Kipp** : raccourci inconnu de Fyra 41, indice Fonderie (Berra 21), ardoise de Danna 55.
- **85 Gilda** : gages expertisés par Onya 48, clients refusés partagés avec Baldo 49.
- **86 Magnar** : défi refusé par Ferra 31, nul contre Gott 34, fosse sponsorisée par Helka 54, rafistolé par Gratta 61, tatoué par Zarn 60.
- **87 Sly** : cotes sur les peines (Dreck 38), sonde Fenn 50.
- **88 Ashna** : égouts sous le Palais, presque-évasion payée par Dreck (`QI_38_08`).
- **89 Fitch** : banni par Grum 42, 7 refus de Torvak 26 — vend du K2 d'autres PNJ contre Yrds (mécanique miroir de Torvak).
- **91 Stev** : soigne Brindille (Rok 28) ; **92 Ora** : guerre froide avec Baldo 49 + enquête `QST_SAL_LESSIVE_01`, réconciliations avec Marza 74 ; **94 Elm** : « lit les silences » ; **97 Kalder** : « les murs parlent » (vapeur = confidences) ; **99 Marga** : source de Jorv 53, clef des fils « statue » et « 13e légende ».

### 5.2 Après le lot 2.1 (ordre acté)

| # | Lot | Contenu | Références à suivre |
|---|---|---|---|
| 1 | **2.1-clôture** | Index PNJ coché, context/progression à jour, entrée ÉTAPE 5 complète | §4 ci-dessus |
| 2 | **2.2 Canoniques** | Refonte des 10 fiches `canoniques/` au gabarit D17 (Kirito, Asuna, Leafa…) — QI axé « rencontres scriptées », registre `_registre_rencontres_canoniques.md` à maintenir | D19 |
| 3 | **2.3+ PNJ autres villes** | 1 ville/étape : Alne → Swilvane → Voulg → Freelia → Archipel → Lioda → Duskarn → Granzam → Brokkheim → Penwether. **Méthode : d'abord écrire le ROSTER 00-99 dans l'index** (table NN/Nom/Rôle/Sous-lieu/role_type/Angle), le faire acter, PUIS produire les fiches. Réutiliser les notables déjà actés (`NPC_FRE_*`, `NPC_UND_*`…). Honorer les « liens réservés » notés dans les fiches Gattan (Tessa→Brokkheim, Ilka→Granzam, Helka→Swilvane, Zarn→Undine, Rosza→Alne) | D16-D19 |
| 4 | **Slots d'armure** | torse, jambes, bras, taille, boucliers_armure (+cuir/maille/plaque/tissu/robes si comptés comme types) — 100/slot, gabarit D13-D15, COPIER la structure de `tete/_index_armures_tete.md` (grille 9 races×9 + 9 neutres + 9 boss + 1 légendaire) | D13-D15 |
| 5 | **Armes** | par famille (epees_1h, epees_2h, dagues, lances, haches, masses, katanas, rapieres, arcs, baguettes, armes_de_jet, boucliers) — même structure D14 adaptée | D13-D15 |
| 6 | **Skills** | magies par école (10 écoles), OSS par arme, passives — définir un index maître skills AVANT production (équivalent D13-D15 pour les skills : paliers, coûts MP, prérequis) | nouvelle décision à acter |
| 7 | **Faune** | mobs par territoire — respecter les plages D6 déjà actées ; les fiches de zones listent déjà les `MOB_*` : la fiche mob doit être cohérente avec sa fiche de zone | D6, T_SPAWN_TABLES |
| 8 | **Flore** | par race/territoire — lier aux nœuds de récolte cités par les PNJ (Salvia, Vekka, Ossik…) | — |
| 9 | **Audit consommables/matériaux** | vérifier conformité des 93+190 existants au format fandom ; remplacer les non conformes (archiver dans `deprecated_v1/`, JAMAIS supprimer) | D13 |

### 5.3 Backlog P3 (hors périmètre données)

Bot Node.js : ne PAS commencer sans directive explicite du Producteur Exécutif.

---

## 6. PIÈGES CONNUS (erreurs déjà commises ou évitées de justesse — ne pas répéter)

1. **Recréer un fichier existant** : toujours `ls` avant d'écrire. L'écrasement silencieux détruit du travail validé.
2. **Casser un ID acté** : les noms/ID des documents maîtres (atlas, index) priment sur toute fiche. En cas de conflit → la fiche s'aligne, jamais l'inverse (précédent : « Fournaise Éternelle » corrigé en « Caldeira d'Obsidienne », étape 3.8).
3. **Résoudre un fil rouge dans une fiche** : les fiches posent des indices, les quêtes résolvent. Un K2 qui « spoile » la résolution d'un fil tue 6 autres fiches.
4. **Sur-utiliser le fil méta** : max 1 PNJ méta par scène, jamais de confirmation explicite du Cardinal. C'est un parfum, pas un plat.
5. **Oublier la règle de complétude** : nouvelle mécanique citée (ex : `!donate`, `!oracle`) ⇒ vérifier qu'elle existe dans les registres de commandes, sinon l'y ajouter en fin d'étape.
6. **Prose narrative en masse** : les fiches sont denses mais STRUCTURÉES (tables, puces). Pas de paragraphes de roman — le roman, c'est le bot qui le générera.
7. **Négliger la mise à jour de `alo_context.md`** : c'est le seul fichier que la session suivante lira en premier. Un contexte périmé = une session suivante qui travaille sur de fausses prémisses.

---

## 7. RÉSUMÉ EXÉCUTABLE EN 5 LIGNES (si tout le reste est trop long)

1. Lis `alo_context.md`, le persona, l'index du lot, et 1 fiche récente comme modèle.
2. Compte ce qui existe (`ls`), produis LES SUIVANTS du roster, un fichier par unité, gabarit 5 sections, QI 3/3/2/1/1 avec K3 « JAMAIS + déflection ».
3. Chaque fiche : 3 relations par ID, 1 chaînage éco, 1 hook de quête, 1 spéc bot, stats dans les grilles.
4. Nourris les fils rouges (1 indice K2 max par fiche), n'en résous aucun.
5. Fin d'étape : index + `alo_context.md` + `alo_progression.md` à jour, puis STOP.
