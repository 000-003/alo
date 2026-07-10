# 📇 INDEX MAÎTRE — PNJ (chantier ≥100/ville, lot 2)

> **Convention ID** : `NPC_<VILLE>_<NN>`, plages D16 (`00` caché · `01-07` notables actés · `08-09` gouvernance · `10-19` zones annexes · `20-99` population).
> **Contrat de fiche (D17)** : 5 sections — Identification / Bio & Personnalité / **Quantité Informationnelle** (10-12 slots, `QI_<VILLE>_<NN>_<n>`) / Chaînage économique & quêtes / Intégration Bot.
> **Pare-feu (D18)** : hors enveloppe → ligne d'ignorance sans appel LLM ; K3 → déflection scriptée. Protocole : `the_seed_engine/system_mechanics/npc_knowledge_protocol.md`.
> **Canoniques (D19)** : registre séparé `canoniques/_registre_rencontres_canoniques.md`.
> **Organisation** : 1 dossier par ville (`pnj/<ville>/`), 1 PNJ = 1 fichier `npc_<ville>_<nn>_<slug>.md`.

## État des lots

| Lot | Ville / Périmètre | État |
|---|---|---|
| 2.0 | Infrastructure (protocole QI, `T_NPC_KNOWLEDGE`, commandes, registre canonique) | ✅ |
| 2.1 | **Gattan** (`NPC_GAT_00-99`) | ✅ complet |
| 2.2 | Canoniques errants — refonte des 10 fiches au gabarit D17 | ✅ complet |
| 2.3 | **Alne** (`NPC_ALN_00-99`, `ZONE_NEU_CAP_001`) — roster acté (D20) | ✅ complet (100/100 + `QST_NEU_LESSIVE_01` + commandes) |
| 2.4 | **Swilvane** (`NPC_SWI_00-99`, `ZONE_SYL_CAP_001`) — roster + 100 fiches D17, émoji 🍃 | ✅ complet |
| 2.5 | **Voulg** (`NPC_VOU_00-99`, `ZONE_SAL_TWN_001`) — roster + 100 fiches D17, émoji ⚒️ | ✅ complet |
| 2.6+ | Freelia, Archipel d'Écume, Lioda, Duskarn, Granzam, Brokkheim, Penwether (1 ville / étape) | ⏳ (Freelia = prochaine) |

Archives v1 : 290 fiches junk (`npc_0xx`, `npc_canon_0xx` clones, squelettes, `NPC_SHOP_*`) → `ressources_brutes/deprecated_v1/pnj/` ; doublon SQL `table_t_npcs.md` → `deprecated_v1/mld/`.

## Grille de niveaux (référence)

| Profil | Niveau | Notes |
|---|---|---|
| Population civile | 3-15 | HP 150-800, non essentiels |
| Artisans qualifiés / guides annexes | 15-30 | HP 800-3 000 |
| Notables (`01-07`), instructeurs | 30-45 | HP 3 000-8 000 |
| Gouvernance (`08-09`), caché (`00`) | 50-80 | `is_essential = VRAI` |

---

## ROSTER GATTAN (`ZONE_SAL_CAP_001`) — lot 2.1

| NN | Nom | Rôle | Sous-lieu | `role_type` | Angle narratif |
|---|---|---|---|---|---|
| 00 | Vieux Sorren, balayeur de la Porte | **PNJ caché du Cardinal** | Grande Porte | `SERVICE` | Sonde d'observation du Cardinal |
| 01 | Kagemune, Maître-Forgeron | Forge d'armes lourdes (acté ét. 3) | Grande Forge | `MERCHANT` | Perfectionniste hanté par une lame brisée |
| 02 | Graz, Armurier | Armures lourdes/boucliers (acté) | Quartier Militaire | `MERCHANT` | Ancien déserteur réhabilité |
| 03 | Mortis, Alchimiste | Potions/bombes (acté) | Ruelle de l'Alchimiste | `MERCHANT` | Expérimente sur lui-même |
| 04 | Pyra, Marchande de Familiers | Familiers de feu (actée) | Place du Dragon | `MERCHANT` | Parle aux salamandres — vraiment |
| 05 | Vétéran Mortifer | Quêtes quotidiennes (acté) | Quartier Militaire | `QUEST_GIVER` | Purge des Frontières |
| 06 | Capitaine Volcanus | Garde de la porte (acté) | Grande Porte | `GUARD` | Duelliste d'honneur |
| 07 | Ferro le Colporteur | Forgeron ambulant (acté) | itinérant | `MERCHANT` | Minerai de Feu Pur |
| 08 | Lord Mortimer | Lord Salamander | Palais de Basalte | `LORD` | Stratège froid, plans de guerre K3 |
| 09 | Général Eugene | Commandant des armées | Quartier Militaire | `LORD` | Porteur de Gram, loyauté fraternelle |
| 10 | Braga | Garde-frontière | Plaines de Cendres (`HUNT_001`) | `GUARD` | Compte les morts du mur |
| 11 | Sarka | Chasseuse-guide | Plaines de Cendres | `QUEST_GIVER` | Traque un alpha disparu |
| 12 | Kolm | Prospecteur | Désolation de Magma (`HUNT_002`) | `MERCHANT` | Carte des filons truquée |
| 13 | Vashti | Ermite des Laves | Désolation de Magma (frontière) | `QUEST_GIVER` | Exilée volontaire, voit l'anneau frontalier |
| 14 | Drogan | Sentinelle du donjon | Caldeira d'Obsidienne (`DUN_001`) | `GUARD` | Seuil de Logi, tient le registre des morts |
| 15 | Lysa | Archiviste des expéditions | Camp de la Caldeira | `SERVICE` | Survivante du premier raid |
| 16 | Halric | Maître de halte | Route aérienne (`ROUTE_001`) | `SERVICE` | Ancien pilote de wyverne |
| 17 | Nera | Vigie | Tour de Guet (route) | `GUARD` | Voit les mobs `MOB_AIR_*` avant tous |
| 18 | Torvin | Messager Gattan-Voulg | itinérant (route) | `SERVICE` | Porte plus que des lettres |
| 19 | Magda | Cantinière du camp avancé | Camp avancé (route) | `MERCHANT` | Nourrit les deux camps |
| 20 | Ignis | Forgeron d'armes du marché *(retrofit v1)* | Place du Dragon | `MERCHANT` | Rival commercial de la Grande Forge |
| 21 | Berra | Contremaîtresse des fonderies | Grande Forge | `SERVICE` | Tient les quotas, couvre un vol |
| 22 | Skal | Fondeur de basalte | Grande Forge | `SERVICE` | Sourd aux trois quarts, lit les lèvres |
| 23 | Orim | Charbonnier | Grande Forge | `MERCHANT` | Charbon de bois d'Yggdrasil (contrebande ?) |
| 24 | Tessa | Graveuse de runes | Grande Forge | `MERCHANT` | Runes leprechaun sans licence |
| 25 | Junn | Apprenti de Kagemune | Grande Forge | `SERVICE` | Copie en secret la technique du maître |
| 26 | Torvak | Souffletier | Grande Forge | `SERVICE` | Entend tout ce qui se dit à la forge |
| 27 | Hilde | Affûteuse de lames | Grande Forge | `SERVICE` | Reconnaît toute lame à son fil |
| 28 | Rok | Livreur de minerai | Grande Forge ↔ Porte | `SERVICE` | Son lézard de trait flaire le mithril |
| 29 | Vulko | Contrôleur de la guilde des forges | Grande Forge | `SERVICE` | Poinçonne les contrefaçons |
| 30 | Sergent Kruger | Recruteur | Quartier Militaire | `QUEST_GIVER` | Quêtes d'engagement |
| 31 | Dame Ferra | Instructrice épée 2H | Quartier Militaire | `SKILL_MASTER` | Ancienne championne d'arène |
| 32 | Bram | Instructeur hache | Quartier Militaire | `SKILL_MASTER` | Bûcheron devenu soldat |
| 33 | Ilka | Instructrice lance | Quartier Militaire | `SKILL_MASTER` | Style de phalange gnome adapté |
| 34 | Gott | Instructeur bouclier | Quartier Militaire | `SKILL_MASTER` | N'a jamais gagné un duel — jamais perdu non plus |
| 35 | Quartier-maîtresse Zela | Intendance militaire | Quartier Militaire | `MERCHANT` | Surplus d'armée au détail |
| 36 | Docteur Malvo | Médecin de guerre | Quartier Militaire | `SERVICE` | Soigne aussi la Voie des Scories, gratis |
| 37 | Ansel | Cartographe militaire | Quartier Militaire | `SERVICE` | Cartes de la Désolation annotées |
| 38 | Geôlier Dreck | Prison de basalte | Quartier Militaire | `GUARD` | Vend des « visites » |
| 39 | Ulric le Manchot | Vétéran conteur | Quartier Militaire (cour) | `QUEST_GIVER` | A survécu à Logi — a menti sur comment |
| 40 | Borga | Cuisinier de caserne | Quartier Militaire | `SERVICE` | Ragoût qui buff la VIT |
| 41 | Fyra | Messagère d'état-major | Quartier Militaire | `SERVICE` | La plus rapide de Gattan à pied |
| 42 | Grum | Tavernier « La Braise Joyeuse » | Place du Dragon | `MERCHANT` | Entend tous les secrets, n'en répète aucun |
| 43 | Sela | Serveuse | La Braise Joyeuse | `SERVICE` | Rêve de devenir joueuse… PNJ conscient ? |
| 44 | Kargh | Boucher | Place du Dragon | `MERCHANT` | Achète les drops de viande |
| 45 | Rosza | Épicière | Place du Dragon | `MERCHANT` | Épices de cendre, poivre d'Alne |
| 46 | Vekka | Tisserande | Place du Dragon | `MERCHANT` | Tissus ignifugés (T1-T2) |
| 47 | Solman | Verrier | Place du Dragon | `MERCHANT` | Verre volcanique, fioles pour Mortis |
| 48 | Onya | Bijoutière | Place du Dragon | `MERCHANT` | Obsidienne taillée, gemmes de Granzam |
| 49 | Baldo | Changeur | Place du Dragon | `SERVICE` | Rogne les pièces — très légèrement |
| 50 | Fenn | Courtier de l'Hôtel des Ventes | Place du Dragon | `SERVICE` | Voit passer toutes les enchères |
| 51 | Petra | Crieuse publique | Place du Dragon | `SERVICE` | Annonce = K0 ambulant |
| 52 | Ossik | Marchand d'œufs de salamandre | Place du Dragon | `MERCHANT` | Fournit Pyra, en garde un pour lui |
| 53 | Jorv | Conteur | Place du Dragon | `SERVICE` | Histoires de la Caldeira, 1 Yrd la légende |
| 54 | Helka | Brasseuse | Place du Dragon | `MERCHANT` | Bière de feu « Haleine de Logi » |
| 55 | Danna | Rôtisseuse | Place du Dragon | `MERCHANT` | Brochettes, buffs mineurs |
| 56 | Salvia | Herboriste | Ruelle de l'Alchimiste | `MERCHANT` | Herbes des Plaines de Cendres |
| 57 | Pim | Souffleur de fioles | Ruelle de l'Alchimiste | `MERCHANT` | Fioles renforcées anti-Surchauffe |
| 58 | Nyssa | Apprentie de Mortis | Ruelle de l'Alchimiste | `SERVICE` | Note tout ce que Mortis oublie |
| 59 | Coff | Marchand de cendres rares | Ruelle de l'Alchimiste | `MERCHANT` | Cendres de mobs = composants |
| 60 | Zarn | Tatoueur de glyphes | Ruelle de l'Alchimiste | `SERVICE` | Glyphes cosmétiques + 1 vrai |
| 61 | Gratta | Rebouteuse | Ruelle de l'Alchimiste | `SERVICE` | Soigne sans questions |
| 62 | Rikko « Boum-Boum » | Artificier licencié | Ruelle de l'Alchimiste | `MERCHANT` | Bombes légales… et les autres |
| 63 | Vess | Collectionneur de venins | Ruelle de l'Alchimiste | `MERCHANT` | Achète les glandes de mobs |
| 64 | Grand-Prêtre Ignatius | Culte de la Flamme | Temple de la Flamme | `SERVICE` | Bénédictions, doute secret |
| 65 | Prêtresse Calda | Rites quotidiens | Temple de la Flamme | `SERVICE` | Résurrections Remain Light |
| 66 | Novice Timo | Novice | Temple de la Flamme | `SERVICE` | Voit des choses dans le brasier |
| 67 | Golm | Gardien du Brasier Éternel | Temple de la Flamme | `GUARD` | Le brasier ne doit JAMAIS s'éteindre |
| 68 | Ashka | Chantre | Temple de la Flamme | `SERVICE` | Hymnes = buffs de zone mineurs |
| 69 | Morn | Fossoyeur | Nécropole de cendre | `SERVICE` | Enterre les « vrais morts » (comptes bannis) |
| 70 | Embra | Oracle des Braises | Temple de la Flamme | `QUEST_GIVER` | Prédictions = hooks de l'orchestrateur |
| 71 | Frère Dole | Quêteur d'aumônes | Temple / Place | `SERVICE` | Collecte pour les blessés du front |
| 72 | Stigg | Garde de jour | Grande Porte | `GUARD` | Routinier, radar à contrebande |
| 73 | Vanna | Garde de nuit | Grande Porte | `GUARD` | Voit qui sort la nuit |
| 74 | Marza | Douanière | Grande Porte | `SERVICE` | Taxes du Lord, registre d'entrées |
| 75 | Flint | Éclaireur | Remparts | `QUEST_GIVER` | Repère les invasions (`SYS_SPAWN_INVASION`) |
| 76 | Krom | Maître des balistes | Remparts | `SERVICE` | Anti-aérien (`MOB_AIR_*`) |
| 77 | Bello | Sonneur de corne | Remparts | `SERVICE` | Trois notes = trois dangers |
| 78 | Tarn | Maçon des remparts | Remparts | `SERVICE` | Connaît chaque fissure du mur |
| 79 | Sasska | Dresseuse de wyvernes de guet | Remparts | `SERVICE` | Wyvernes de patrouille |
| 80 | Snyk | Receleur | Voie des Scories | `BLACK_MARKET` | Écoule ce qui « tombe » de la Forge |
| 81 | Vora | Pickpocket repentie | Voie des Scories | `SERVICE` | Doigts d'or, dettes anciennes |
| 82 | Vieux Cendreux | Mendiant vétéran | Voie des Scories | `SERVICE` | Ancien officier, sait pourquoi il mendie |
| 83 | Motte | Chiffonnière | Voie des Scories | `MERCHANT` | Rachète les loots T0/junk |
| 84 | Kipp « Rat de Forge » | Gamin des rues | Voie des Scories | `SERVICE` | Passe partout, voit tout |
| 85 | Gilda | Prêteuse sur gages | Voie des Scories | `SERVICE` | Prêts à taux salés, objets liés refusés |
| 86 | Magnar | Lutteur de fosse | Fosse de la Voie des Scories | `QUEST_GIVER` | Défis de lutte à mains nues |
| 87 | Sly | Bookmaker | Fosse de la Voie des Scories | `SERVICE` | Cotes sur tout, même les boss |
| 88 | Ashna | Égoutière | Sous-sols | `SERVICE` | Les égouts mènent sous le Palais |
| 89 | Fitch « l'Oreille » | Informateur | Voie des Scories | `BLACK_MARKET` | Vend des rumeurs (K2 d'autres PNJ) |
| 90 | Rugo | Aubergiste « Le Repos du Dragon » | Quartier de la Porte | `SERVICE` | Lits, coffres, ragots de voyageurs |
| 91 | Stev | Palefrenier | Écuries de la Porte | `SERVICE` | Lézards de selle à louer |
| 92 | Ora | Banquière (succursale d'Alne) | Place du Dragon | `SERVICE` | `!bank_depot` / `!bank_retrait` |
| 93 | Currun | Maître de poste | Quartier de la Porte | `SERVICE` | `!mail_send`, colis suspects |
| 94 | Elm | Scribe public | Place du Dragon | `SERVICE` | Écrit les contrats, lit les silences |
| 95 | Zinna | Barbière | Place du Dragon | `SERVICE` | Cosmétique `!outfit`, ragots premium |
| 96 | Vosk | Tailleur | Place du Dragon | `MERCHANT` | Uniformes et capes T1-T2 |
| 97 | Kalder | Maître des bains de vapeur | Thermes de basalte | `SERVICE` | Buff repos, murs qui parlent |
| 98 | Prynne | Institutrice | École des Cendres | `SERVICE` | Tutoriel vivant pour nouveaux joueurs |
| 99 | Doyenne Marga | Mémoire vivante de Gattan | Vieille ville | `QUEST_GIVER` | A tout vu depuis la fondation |

**Fiches produites** : voir `pnj/gattan/` — 1 fichier par ligne du roster.

---

## ROSTER ALNE (`ZONE_NEU_CAP_001`) — lot 2.3 (D20)

> **Émoji d'en-tête** : 🌳 (neutre/Alne). **Fichiers** : `pnj/alne/npc_aln_<nn>_<slug>.md`.
> **Différenciateur d'Alne** (vs Gattan mono-race militaire) : **capitale neutre cosmopolite** — les 9 races cohabitent (la race est un axe de caractérisation, pas un décor) ; **zone anti-PK** tenue par le Système ; **porte de l'endgame** (Dôme d'Yggdrasil `ZONE_YGG_DUN_001`, axe vertical `JOT_FLD_001` / `AIN_HUB_001`). Ton dominant : carrefour du monde, mémoire du serveur, faux calme d'une neutralité fragile.
> **Notables `01-07` verrouillés sur le canon fandom** (`geographie_villes/alne_capitale_neutre.md`) : noms/races/rôles inchangés, seulement refichés au gabarit D17.
> **Sous-lieux** : Racines d'Yggdrasil · Grande Bibliothèque de l'Arbre · Quartier des Forges · Place de la Fontaine Centrale · Grand Marché Circulaire · Auberge de l'Arbre Pâle · Taverne du Sous-Sol · Le Tapis Volant (casino) · Ruelle sombre du Dôme · Palais du Conclave Neutre · Débarcadère aérien (hub des 9 routes) · Porte du Dôme (seuil `ZONE_YGG_DUN_001`) · Quartier Administratif · Halle d'Entraînement / Terrasse d'Envol · Cimetière Neutre.

**Liens inter-cités honorés** (réciprocité des fiches déjà actées) : Rosza `NPC_GAT_45` (poivre d'Alne)→**29** ; Ora `NPC_GAT_92` (succursale bancaire)→**60** siège ; Currun `NPC_GAT_93` (poste)→**61** HQ ; Snyk `NPC_GAT_80` (recel)→**55** ; Fitch `NPC_GAT_89` (rumeurs)→**58** ; Sly `NPC_GAT_87` (paris)→**54** ; Onya `NPC_GAT_48` (obsidienne/gemmes)→**34** ; Danna `NPC_GAT_55` (brochettes)→**79** ; Kipp `NPC_GAT_84`→**80** ; Stev `NPC_GAT_91` (montures)→**84** ; Ferro `NPC_GAT_07` (colportage)→**86** ; Prynne `NPC_GAT_98` (tutoriel)→**96** ; Embra `NPC_GAT_70` (oracle)→**98** ; liens réservés Helka→Swilvane / Zarn→Undine / Ilka→Granzam relayés via les réfugiés **91/92/93**.

**Fils rouges d'Alne** (6, distribués — aucun PNJ ne détient un fil entier ; les fiches posent des indices K2/K3, les quêtes `QST_NEU_*` résolvent) :

| Fil | PNJ porteurs (indices) | Nature |
|---|---|---|
| **La neutralité fragile** | Aldwin 08, Silène 09, Kael 07, Cyd 94, réfugiés 90-93 | Une cellule veut briser l'anti-PK ; la « neutralité » est tenue par le Système, pas par le Custode |
| **Le Dôme qui change** | Dorn 12, Sella 13, Torin 14, Mund 17, Bran 73, Aldous 74, Vira 75 | Ceux qui montent au Dôme `ZONE_YGG_DUN_001` redescendent « autres » ; un étage hors carte |
| **La mémoire réécrite** | Valerius 01, Nima 20, Ombric 21, Lingua 22, Doss 35, Orn 95, Aldemar 99 | Des livres se réécrivent seuls ; l'histoire officielle des guerres raciales est falsifiée |
| **Le marché sous le marché** | Cassia 25, Grède 26, Sept-Doigts 53, Nyx 54, Morne 55, Quill 56, Rask 57, Wisp 58 | Guerre économique proxy inter-races + contrats de PK vendus sous la zone neutre |
| **Le verger introuvable** (anomalie de la Racine) | l'Enfant 00, Yssa 15, Ophrys 28, Vinn 31, Pako 32, Dahlia 78 | Une zone non cartographiée aux racines d'Yggdrasil (pendant neutre de l'« Anomalie de la Caldeira » de Gattan) |
| **Fil méta (le Cardinal, à la Racine)** | 00, Doss 35, Zéro 81, Ode 83, Isilde 98, Aldemar 99 | Alne = racine = plus proche du cœur The Seed. RÈGLE : jamais confirmé, 1 révélation méta max/session, réservé orchestrateur |

| NN | Nom | Rôle | Sous-lieu | `role_type` | Angle narratif |
|---|---|---|---|---|---|
| 00 | L'Enfant de la Racine | **PNJ caché du Cardinal** | Racines d'Yggdrasil | `SERVICE` | Nœud d'accès au cœur The Seed ; mesure la « santé » du serveur |
| 01 | Valerius l'Archiviste | Bibliothécaire / quêtes-histoire *(canon)* | Grande Bibliothèque | `QUEST_GIVER` | Mémoire du serveur ; les archives des guerres raciales sont altérées |
| 02 | Kaelen Cœur-de-Fer *(Leprechaun)* | Forgeron ultime *(canon)* | Quartier des Forges | `MERCHANT` | Répare le Légendaire sans perte de durabilité ; hait les Salamander |
| 03 | Elara Chante-Brise *(Undine)* | Prêtresse-healer suprême *(canon)* | Place de la Fontaine | `SERVICE` | Larmes qui purifient les malédictions — à un prix caché |
| 04 | Gorak le Roc *(Gnome)* | Mercenaire tank recrutable *(canon)* | Taverne du Sous-Sol | `QUEST_GIVER` | Se retourne contre qui ne le paie pas, hors zone neutre |
| 05 | Lyra Nuage-Danse *(Sylph)* | Vendeuse d'équipement de vol *(canon)* | Marché Circulaire | `MERCHANT` | Armures qui réduisent le coût mana du vol |
| 06 | Maelis l'Illusionniste *(Puca)* | Gérante du casino *(canon)* | Le Tapis Volant | `SERVICE` | Paris sur des duels clandestins hors-ville |
| 07 | Kael le Renégat *(Salamander)* | Marchand noir *(canon)* | Ruelle sombre du Dôme | `BLACK_MARKET` | Armes militaires volées à la garde du Général Eugene |
| 08 | Custode Aldwin | Gardien de la Neutralité *(gouvernance)* | Palais du Conclave Neutre | `LORD` | Sait que l'anti-PK tient au Système, pas à son autorité |
| 09 | Commandeure Silène | Chef des Sentinelles de l'Arbre | Palais du Conclave Neutre | `GUARD` | Commande une garde imbattable ; connaît l'unique faille anti-PK |
| 10 | Maître Halvard | Régisseur du Grand Débarcadère (hub 9 routes) | Débarcadère aérien | `SERVICE` | Voit converger tout le trafic inter-cités |
| 11 | Wrenna | Contrôleuse aérienne des 9 routes | Tour du Débarcadère | `GUARD` | Note qui voyage vers quelle cité — et qui ne rentre pas |
| 12 | Sentinelle Dorn | Gardien de la Porte du Dôme (seuil `ZONE_YGG_DUN_001`) | Porte du Dôme | `GUARD` | Tient le registre des raids montés à l'Arbre |
| 13 | Archiviste Sella | Registre des expéditions du Dôme | Porte du Dôme | `SERVICE` | Ceux qui redescendent « changés » |
| 14 | Guide Torin | Guide des Racines (bas-niveaux du Dôme) | Racines d'Yggdrasil | `QUEST_GIVER` | Connaît un étage qui n'apparaît sur aucune carte |
| 15 | Botaniste Yssa | Cueilleuse de sève & flore de l'Arbre | Racines d'Yggdrasil | `MERCHANT` | Une feuille impossible à cueillir deux fois |
| 16 | Vigie Corvin | Guet de la Canopée (`MOB_AIR_*`) | Canopée | `GUARD` | Voit les essaims aériens avant les 9 routes |
| 17 | Passeur Mund | Opérateur de l'ascenseur de sève (Dôme) | Porte du Dôme | `SERVICE` | L'ascenseur s'arrête parfois à un étage qu'il ne commande pas |
| 18 | Cartographe Alba | Carte du monde ALO complet | Marché Circulaire | `MERCHANT` | Une région manque volontairement sur toutes ses cartes |
| 19 | Halte-maître Ferd | Waystation neutre inter-cités | Route (périphérie) | `SERVICE` | Héberge les voyageurs de toutes races, sans registre |
| 20 | Nima | Apprentie de Valerius | Grande Bibliothèque | `SERVICE` | Recopie un livre qu'on lui a interdit de lire |
| 21 | Vieil Ombric | Relieur / restaurateur de livres anciens | Grande Bibliothèque | `SERVICE` | Répare des pages qui se réécrivent seules |
| 22 | Lingua | Traductrice des 9 langues raciales | Grande Bibliothèque | `MERCHANT` | Traduit un mot qui n'existe dans aucune langue |
| 23 | Copiste Denn | Scribe / duplicateur de parchemins | Grande Bibliothèque | `SERVICE` | Vend des copies « non officielles » des quêtes de Valerius |
| 24 | Régisseur Bost | Maître des étals du Grand Marché | Marché Circulaire | `SERVICE` | Attribue les meilleurs emplacements — contre service |
| 25 | Cassia | Courtière de réputation inter-races | Marché Circulaire | `SERVICE` | Achète et revend la « bonne réputation » raciale |
| 26 | Grède | Courtier en denrées inter-raciales | Marché Circulaire | `MERCHANT` | Spécule sur les pénuries qu'il provoque |
| 27 | Milla aux Neuf Fils | Marchande de tissus des 9 races | Marché Circulaire | `MERCHANT` | Reconnaît une race à la trame de son vêtement |
| 28 | Herboriste Ophrys | Herbes cosmopolites des 9 territoires | Marché Circulaire | `MERCHANT` | Une plante de sa réserve ne pousse nulle part |
| 29 | Marchand Peppin | Épices & « Poivre d'Alne » | Marché Circulaire | `MERCHANT` | Fournit Rosza `NPC_GAT_45` ; sa route d'épice cache un autre trafic |
| 30 | Boucher Halle | Boucherie inter-races (achète les drops de viande) | Marché Circulaire | `MERCHANT` | Sert neuf régimes contradictoires sous un seul étal |
| 31 | Maraîchère Vinn | Primeur des vergers flottants | Marché Circulaire | `MERCHANT` | Ses fruits viennent d'un verger que nul ne retrouve |
| 32 | Éleveur Pako | Marchand de familiers exotiques | Marché Circulaire | `MERCHANT` | Vend une créature sans fiche au bestiaire |
| 33 | Libraire Osk | Cartes & parchemins de skill | Marché Circulaire | `MERCHANT` | Un parchemin de skill « bugué » très recherché |
| 34 | Joaillière Vireth | Gemmes de Granzam taillées | Marché Circulaire | `MERCHANT` | Achète l'obsidienne d'Onya `NPC_GAT_48` ; sertit une gemme qui « regarde » |
| 35 | Antiquaire Doss | Reliques « d'avant » la fondation | Marché Circulaire | `MERCHANT` | Vend des objets datés d'avant l'existence d'ALO (méta) |
| 36 | Apprentie Reska | Apprentie de Kaelen `NPC_ALN_02` | Quartier des Forges | `SERVICE` | Copie en secret la technique de réparation légendaire |
| 37 | Fondeur Grumman | Fonte neutre inter-races | Quartier des Forges | `SERVICE` | Refond les armes de guerre en outils — par conviction |
| 38 | Réparateur Tock | Réparation express bas coût | Quartier des Forges | `SERVICE` | Répare « comme neuf » — un peu trop bien |
| 39 | Runiste Vael | Graveur de runes neutre | Quartier des Forges | `MERCHANT` | Grave une rune interdite sur commande spéciale |
| 40 | Frère Osmé | Prêtre assistant d'Elara `NPC_ALN_03` | Place de la Fontaine | `SERVICE` | Doute que les résurrections soient vraiment gratuites |
| 41 | Buffeuse Ilia | Bénédictions de départ (buffs pré-raid) | Place de la Fontaine | `SERVICE` | Un buff qu'elle refuse désormais de lancer |
| 42 | Gardien Vosk | Gardien de la Fontaine (point de rez sûr) | Place de la Fontaine | `GUARD` | Sait qui meurt trop souvent — et pourquoi |
| 43 | Collecteur Pinn | Ramasseur des vœux de la Fontaine | Place de la Fontaine | `SERVICE` | Les pièces de vœu, alignées, forment un message |
| 44 | Aubergiste Merida | Auberge de l'Arbre Pâle (repos premium) | Auberge de l'Arbre Pâle | `SERVICE` | La chambre 9 n'est jamais louée |
| 45 | Sommelier Dranz | Cave de l'Arbre Pâle | Auberge de l'Arbre Pâle | `MERCHANT` | Un cru qui n'existe plus qu'en une bouteille |
| 46 | Concierge Lom | Coffres & services voyageurs | Auberge de l'Arbre Pâle | `SERVICE` | Garde des coffres dont les propriétaires ne reviennent pas |
| 47 | Chef Aubin | Cuisine étoilée (buff food premium) | Auberge de l'Arbre Pâle | `MERCHANT` | Un plat interdit qui buff trop |
| 48 | Tenancier Krebs | Taverne du Sous-Sol | Taverne du Sous-Sol | `MERCHANT` | Voisin bruyant du casino de Maelis `NPC_ALN_06` |
| 49 | Barde Nolan | Barde itinérant des 9 races | Taverne du Sous-Sol | `SERVICE` | Une chanson qui nomme un lieu censuré |
| 50 | Serveuse Tibbe | Serveuse qui entend tout | Taverne du Sous-Sol | `SERVICE` | Vend l'oubli, jamais le secret |
| 51 | Croupier Vance | Croupier des dés magiques (Maelis) | Le Tapis Volant | `SERVICE` | Les dés ne sont pas si magiques — ou trop |
| 52 | Videur Brogg | Sécurité du casino | Le Tapis Volant | `GUARD` | Sort les gens sans jamais les toucher (anti-PK) |
| 53 | Usurière Sept-Doigts | Prêts aux joueurs ruinés | Le Tapis Volant | `BLACK_MARKET` | Prête contre des objets liés — impossible, sauf pour elle |
| 54 | Courtière Nyx | Paris sur duels clandestins | Le Tapis Volant | `SERVICE` | Réseau de paris relié à Sly `NPC_GAT_87` |
| 55 | Receleuse Morne | Recel de la Ruelle du Dôme | Ruelle sombre du Dôme | `BLACK_MARKET` | Écoule ce qui « tombe » via Snyk `NPC_GAT_80` |
| 56 | Faussaire Quill | Faux papiers de guilde / laissez-passer | Ruelle sombre du Dôme | `BLACK_MARKET` | Peut fabriquer un droit d'entrée au Dôme |
| 57 | Contrebandier Rask | Contrebande inter-cités (via les 9 routes) | Ruelle sombre du Dôme | `BLACK_MARKET` | Fait passer ce qu'aucune douane ne voit |
| 58 | Informatrice Wisp | Vend des rumeurs (K2 d'ailleurs) | Ruelle sombre du Dôme | `BLACK_MARKET` | Correspondante de Fitch `NPC_GAT_89` — réseau inter-cités |
| 59 | Marqueur Sten | Tatoueur clandestin de hors-la-loi | Ruelle sombre du Dôme | `SERVICE` | Marque discrètement les PK — ou efface la marque |
| 60 | Directrice Ovena | Banque Centrale d'Alne (siège) | Quartier Administratif | `SERVICE` | Siège dont Ora `NPC_GAT_92` est la succursale ; `!bank_*` |
| 61 | Maître de Poste Cael | Poste centrale (réseau inter-cités) | Quartier Administratif | `SERVICE` | HQ de Currun `NPC_GAT_93` ; `!mail_send`, colis fantômes |
| 62 | Notaire Verd | Contrats inter-races | Quartier Administratif | `SERVICE` | Détient un contrat que nul ne peut annuler |
| 63 | Percepteur Molk | Taxes de marché neutres | Quartier Administratif | `SERVICE` | Une taxe versée à personne |
| 64 | Crieuse Perla | Crieuse publique d'Alne | Marché Circulaire | `SERVICE` | K0 ambulant, relais des annonces `SYS_*` |
| 65 | Styliste Vane | Barbier / cosmétique `!outfit` | Marché Circulaire | `SERVICE` | Change les visages ; un client voulait disparaître |
| 66 | Tailleur Ison | Capes & tenues des 9 races (T1-T2) | Marché Circulaire | `MERCHANT` | Coud une doublure secrète sur demande |
| 67 | Scribe Emm | Lettres & contrats publics | Quartier Administratif | `SERVICE` | Lit les lettres qu'on lui dicte — et les retient |
| 68 | Maîtresse Zephyrine | Skills de Vol (OSS aériens) | Terrasse d'Envol | `SKILL_MASTER` | Enseigne un mouvement de vol interdit en ville |
| 69 | Maître d'Armes Roan | Escrime neutre inter-races | Halle d'Entraînement | `SKILL_MASTER` | N'enseigne jamais sa vraie botte |
| 70 | Archimage Selene | Magie élémentaire multi-école | Halle d'Entraînement | `SKILL_MASTER` | Maîtrise une école qui n'a pas de nom |
| 71 | Dresseuse Fenna | Apprivoisement de familiers | Terrasse d'Envol | `SKILL_MASTER` | Un familier qu'elle n'a jamais réussi à apprivoiser |
| 72 | Alchimiste Corvus | Alchimie neutre avancée | Halle d'Entraînement | `SKILL_MASTER` | Une formule qu'il a juré de ne jamais transmettre |
| 73 | Instructrice Bran | Survie de donjon (prep du Dôme) | Porte du Dôme | `SKILL_MASTER` | A perdu un groupe entier là-haut |
| 74 | Vétéran Aldous | « Il est monté au sommet » | Taverne du Sous-Sol | `QUEST_GIVER` | Ce qu'il a vu au sommet — s'il y est allé |
| 75 | Recruteuse Vira | Monte des raids pour l'Arbre | Porte du Dôme | `QUEST_GIVER` | Recrute pour un commanditaire anonyme |
| 76 | Courtière Della | Contrats de mercenaires | Taverne du Sous-Sol | `QUEST_GIVER` | Loue Gorak `NPC_ALN_04` — et pire |
| 77 | Chasseuse Ryn | Primes inter-races | Quartier Administratif | `QUEST_GIVER` | Une prime sur une tête « neutre » officiellement introuvable |
| 78 | Fleuriste Dahlia | Fleurs de la Fontaine | Place de la Fontaine | `MERCHANT` | Ses fleurs poussent sur d'anciens morts |
| 79 | Rôtisseur Grett | Brochettes de rue (buffs mineurs) | Marché Circulaire | `MERCHANT` | Recette « empruntée » à Danna `NPC_GAT_55` |
| 80 | Gamin Pip | Guide improvisé des rues | Marché Circulaire | `SERVICE` | Passe partout ; correspond avec Kipp `NPC_GAT_84` |
| 81 | Mendiant Zéro | « Ancien testeur » | Ruelle sombre du Dôme | `SERVICE` | Prétend avoir joué « avant que le monde existe » (méta) |
| 82 | Musicienne Lynn | Musicienne de rue | Place de la Fontaine | `SERVICE` | Une mélodie qui ouvre quelque chose |
| 83 | Portraitiste Ode | Portraits (cosmétique) | Marché Circulaire | `SERVICE` | Peint les gens tels qu'ils seront |
| 84 | Palefrenier Wick | Montures aériennes à louer | Débarcadère aérien | `SERVICE` | Réseau de montures relié à Stev `NPC_GAT_91` |
| 85 | Breloquière Sim | Souvenirs & babioles | Marché Circulaire | `MERCHANT` | Une breloque authentique parmi mille fausses |
| 86 | Colporteuse Anse | Colportage inter-cités | itinérant | `MERCHANT` | Croise Ferro `NPC_GAT_07` — trêve commerciale tendue |
| 87 | Blanchisseuse Sud | Lessive & linge | Quartier Administratif | `SERVICE` | Lave des taches qui ne partent pas (quête `QST_NEU_LESSIVE_01`) |
| 88 | Rémouleur Griss | Affûteur ambulant | Marché Circulaire | `SERVICE` | Reconnaît une lame qui a tué |
| 89 | Gazetier Prell | Gazette d'Alne (rumeurs légales) | Marché Circulaire | `SERVICE` | Publie tout — sauf ce qu'on paie pour taire |
| 90 | Réfugié Vorn *(Salamander)* | Déserteur de Gattan | Réfuge des Racines | `SERVICE` | Fuit l'« invasion fabriquée » (fil de Flint `NPC_GAT_75`) |
| 91 | Exilée Aeliss *(Sylph)* | Bannie de Swilvane | Réfuge des Racines | `SERVICE` | Sait pourquoi Helka `NPC_GAT_54` a fui vers Swilvane (lien réservé) |
| 92 | Nerio l'Expatrié *(Undine)* | Émigré de l'Archipel | Place de la Fontaine | `SERVICE` | Porte un message pour Zarn `NPC_GAT_60` (lien réservé Undine) |
| 93 | Bomil l'Émigré *(Gnome)* | Émigré de Granzam | Quartier des Forges | `MERCHANT` | Fournit les gemmes ; lien Ilka `NPC_GAT_33`→Granzam |
| 94 | Émissaire Cyd | Diplomate tournant des 9 races | Palais du Conclave | `SERVICE` | Sert chaque semaine une race différente — loyal à aucune |
| 95 | Vétéran Orn | Survivant des guerres raciales | Taverne du Sous-Sol | `QUEST_GIVER` | Contredit l'histoire officielle de Valerius `NPC_ALN_01` |
| 96 | Institutrice Pell | Tutoriel vivant d'Alne | Grande Bibliothèque | `SERVICE` | Réseau tutoriel relié à Prynne `NPC_GAT_98` |
| 97 | Gardien Sorne | Mémorial des morts définitifs (comptes bannis) | Cimetière Neutre | `SERVICE` | Enterre ceux dont nul ne réclame le corps |
| 98 | Voyante Isilde | Oracle de la Fontaine (hooks orchestrateur) | Place de la Fontaine | `QUEST_GIVER` | Prédictions reliées à Embra `NPC_GAT_70` — deux oracles, une source ? |
| 99 | Doyen Aldemar | Mémoire vivante / témoin de la fondation | Grande Bibliothèque | `QUEST_GIVER` | Se souvient du lancement du serveur ; clef des fils « mémoire » & méta |

**Fiches produites** : `pnj/alne/` — ✅ 100/100 (`NPC_ALN_00-99`, gabarit D17, émoji 🌳). Quête `QST_NEU_LESSIVE_01` créée (`game_design/quetes/`). Commandes propagées (`whatsapp_commands_list.md` §21 + `ai_orchestrator_commands.md` §14).

---

## ROSTER SWILVANE (`ZONE_SYL_CAP_001`) — lot 2.4 (D20)

> **Émoji d'en-tête** : 🍃 (vent/Sylph). **Fichiers** : `pnj/swilvane/npc_swi_<nn>_<slug>.md`.
> **Différenciateur de Swilvane** (vs Gattan militaire, vs Alne cosmopolite neutre) : **capitale raciale Sylph** — cité verticale du vent perpétuel, berceau de la race la plus rapide en vol, identité venteuse / liberté céleste / culture des duels aériens et de l'honneur du vent. Tension historique avec les Salamander (Siège de Swilvane), alliance scellée avec les Cait Sith. Ton dominant : liberté apparente, secrets dans les courants, le vent qui ment.
> **Notables `01-07`** : personnages existants (refonte D17 des `NPC_SWI_*` du fichier lore `swilvane_territoire_sylph.md`). Sakuya = `08` (gouvernance).
> **Sous-lieux** : Tour du Seigneur des Vents · Place du Marché · Forge des Brises · Jardin Suspendu · Atelier Ailé · Les Racines (quartier pauvre) · Taverne de l'Érable · Portes de Swilvane · Bibliothèque des Courants · Arène d'Entraînement · Ascenseur Éolien · Autel de Résurrection.

**Liens inter-cités réservés activés côté Swilvane** :
- Helka `NPC_GAT_54` (brasseeuse exilée de Gattan)→**91** (lien réservé, `QST_SYL_HELKA_01` à créer)
- Lien sortant : Aeliss `NPC_ALN_91`→**Bannie vers Alne** (déjà acté au roster Alne)

**Fils rouges de Swilvane** (6, distribués — aucun PNJ ne détient un fil entier ; les fiches posent des indices K2/K3) :

| Fil | PNJ porteurs (indices) | Nature |
|---|---|---|
| **🍃 Le Vent qui ment** | Sil 39, Astrologue Vell, Marchand Pipo 19, Vigie Ciel 18, Scribe Vald 30 | Les courants aériens changent sans cause météo ; le Cardinal altère la météo pour masquer une anomalie dans la Tour |
| **🪽 Les Ailes brisées** | Elowen 02, Vielle Ylla 40, Instructrice Zeph 71, Apothicaire Solm 62, Plumassier Volm 65 | Des Sylph perdent leur capacité de vol — proto-bug exploité depuis la Tour |
| **🌿 L'Ombre de l'Alliance** | Nya-Ran 07, Dame Céline 33, Courtier Sylph Nel 94, Informateur Murk 48, Garde Noc 86 | Disparitions à la frontière SYL/CAI ; l'alliance Sakuya-Alicia Rue cache un trafic |
| **💨 Le Corridor des Disparus** | Faelan 04, Marchand Pipo 19, Voyagiste Sari 89, Gardienne Fenn 16, Archiviste Lora 17 | Vols qui décollent de Swilvane sans arriver à Alne — registres falsifiés |
| **🏛️ Le Murmure de la Tour** | Le Murmure 00, Sakuya 08, Chambellan Holt 35, Cartographe Soren 36, Maître des Cérémonies Orlan 38 | Un étage verrouillé par le Cardinal au sommet de la Tour que Sakuya ne peut ouvrir |
| **🔮 Fil méta — L'Envol Premier** | 00, Tenebris 03, Doyenne Old 99, Oracle des Vents Sil 98, Astrologue Vell 39 | Swilvane = première cité initialisée par The Seed ; l'Ascenseur Éolien = accès aux logs de création |

| NN | Nom | Rôle | Sous-lieu | `role_type` | Angle narratif |
|---|---|---|---|---|---|
| 00 | Le Murmure de la Tour | **PNJ caché du Cardinal** | Tour du Seigneur des Vents (étage verrouillé) | `SERVICE` | Sous-processus qui module le vent ; seul accès à l'étage interdit |
| 01 | Seigneur Riven | Commandant de la Garde du Vent | Portes de Swilvane | `GUARD` | Bras droit de Sakuya ; exécute les PK à vue |
| 02 | Elowen la Faucheuse | Maîtresse de Guilde des Assassins | Les Racines | `SKILL_MASTER` | Enseigne la furtivité ; hait le traité Cait Sith |
| 03 | Tenebris le Vagabond *(Spriggan)* | Collectionneur de Reliques (Gacha) | Taverne de l'Érable | `MERCHANT` | Boîtes de reliques — vend une clé qui n'ouvre rien d'ici |
| 04 | Faelan Chant-Fleuri | Dompteuse d'Aigles / Montures | Ascenseur Éolien | `MERCHANT` | Location d'aigles ; un aigle n'est jamais revenu |
| 05 | Brokkr Marteau-Feuille *(Leprechaun)* | Forgeron de la Frontière | Forge des Brises | `MERCHANT` | Armes ultra-légères ; un alliage qu'il n'a pas inventé |
| 06 | Luthien la Voix d'Or *(Puca)* | Espionne Infiltrée | Tour du Seigneur des Vents | `SERVICE` | Musicienne de cour ; un secret qui changerait l'alliance |
| 07 | Nya-Ran *(Cait Sith)* | Exploratrice Égarée | Forêt de Lugru | `QUEST_GIVER` | A survécu à une attaque ; sait qui l'a piégée |
| 08 | Sakuya | Lady des Sylphes (canon) | Tour du Seigneur des Vents | `LORD` | Leader légendaire ; ne peut pas ouvrir le dernier étage |
| 09 | Capitaine Reylen | Commandant des patrouilles | Portes de Swilvane | `GUARD` | Quêtes de patrouille frontalière ; a vu des ombres |
| 10 | Gardienne Sylvie | Garde des Prairies de Sylvain | Prairies de Sylvain (`HUNT_001`) | `GUARD` | Protège les novices des PK |
| 11 | Chasseur Rorin | Guide de chasse des Prairies | Prairies de Sylvain | `QUEST_GIVER` | Traque un alpha qui saute les cycles de spawn |
| 12 | Cueilleuse Meryl | Herboriste des Prairies | Prairies de Sylvain | `MERCHANT` | Plantes de base T1 ; une fleur hors-saison |
| 13 | Sentinelle Drel | Garde de la Forêt de Lugru | Forêt de Lugru (`HUNT_002`) | `GUARD` | Frontière Salamander ; compteur d'incursions truqué |
| 14 | Ermite Wynn | Sage ermite de la Forêt | Forêt de Lugru | `QUEST_GIVER` | Voit les morts que les registres ignorent |
| 15 | Trappeur Borg | Piégeur / fourreur | Forêt de Lugru | `MERCHANT` | Peaux de mobs ; a pris au piège un PNJ |
| 16 | Gardienne Fenn | Sentinelle du Donjon du Vent Hurlant | Donjon du Vent Hurlant (`DUN_001`) | `GUARD` | Registre des raids ; un groupe entré n'est jamais sorti |
| 17 | Archiviste Lora | Registre des expéditions | Donjon du Vent Hurlant | `SERVICE` | Note les disparus du Corridor |
| 18 | Vigie Ciel | Contrôleur aérien de la Route | Route Aérienne (`ZONE_ROUTE_SYL_ALN`) | `GUARD` | Compte les vols ; des départs sans arrivée |
| 19 | Marchand Pipo | Marchand volant (potions MP) | Route Aérienne (Îlot n°1) | `MERCHANT` | Vend cher ; a vu des vols fantômes |
| 20 | Brelane | Marchande de tissus des 9 races | Place du Marché | `MERCHANT` | Tissus légers ; une coupe qui vient de nul part |
| 21 | Vieux Cort | Marchand d'armes légères | Place du Marché | `MERCHANT` | Rapières, dagues ; identifie les lames de la Garde |
| 22 | Miren | Crémière / fromagère | Place du Marché | `MERCHANT` | Lait de chèvre des Prairies ; un client étrange |
| 23 | Perrin | Poissonnier (Truite du Zéphyr) | Place du Marché | `MERCHANT` | Truite des rivières Swilvane ; une sans yeux |
| 24 | Belle | Bijoutière (cristal de brise) | Place du Marché | `MERCHANT` | Cristaux taillés ; un qui « écoute » |
| 25 | Agathe | Marchande de fruits exotiques | Place du Marché | `MERCHANT` | Importe des 9 races ; un fruit inconnu |
| 26 | Hob | Boucher (achète drops de viande) | Place du Marché | `MERCHANT` | Découpe pour toutes les races ; un lot marqué |
| 27 | Tam | Cartographe / marchand de cartes | Place du Marché | `MERCHANT` | Cartes des courants ; une zone barrée |
| 28 | Lira | Crieuse publique de Swilvane | Place du Marché | `SERVICE` | K0 ambulant ; répète ce qu'on paie pour taire |
| 29 | Grel | Changeur (Yrds / monnaies) | Place du Marché | `SERVICE` | Rogne les pièces ; une pièce d'avant la fondation |
| 30 | Scribe Vald | Scribe du Palais de Sakuya | Tour du Seigneur des Vents | `SERVICE` | Recopie les décrets ; un blanc dans le registre |
| 31 | Héraut Yven | Messager officiel de Sakuya | Tour du Seigneur des Vents | `SERVICE` | Porte les sceaux ; un message qu'il n'a pas délivré |
| 32 | Intendante Maura | Intendante du Palais | Tour du Seigneur des Vents | `SERVICE` | Gère les provisions ; des commandes qui disparaissent |
| 33 | Dame Céline | Conseillère diplomatique (alliance Cait Sith) | Tour du Seigneur des Vents | `SERVICE` | Négocie l'alliance ; sait que des deux côtés on ment |
| 34 | Archiviste Noam | Archives militaires Sylph | Tour du Seigneur des Vents | `SERVICE` | Plans de bataille ; un document classé par le Cardinal |
| 35 | Chambellan Holt | Majordome du Palais | Tour du Seigneur des Vents | `SERVICE` | Voit qui entre dans le bureau de Sakuya ; une visite de nuit |
| 36 | Cartographe Soren | Cartes des courants aériens | Tour du Seigneur des Vents | `SERVICE` | Dessine les vents ; un courant ne va nulle part |
| 37 | Garde d'Honneur Lyam | Garde rapprochée de Sakuya | Tour du Seigneur des Vents | `GUARD` | Silencieux, loyal ; a vu Sakuya douter |
| 38 | Maître des Cérémonies Orlan | Protocole et événements | Tour du Seigneur des Vents | `SERVICE` | Organise les alliances ; un rituel « ajouté » par le Système |
| 39 | Astrologue Vell | Lecteur des vents et augures | Tour du Seigneur des Vents | `SERVICE` | Lit les courants ; le vent prédit une catastrophe |
| 40 | Vielle Ylla | Mendiante oracle des Racines | Les Racines | `SERVICE` | Dit l'avenir contre un Yrd ; une prophétie de chute |
| 41 | Tatoueur Rynn | Glyphes de vent / cosmétique | Les Racines | `SERVICE` | Tatoue des runes de vol ; une qui annule le vol |
| 42 | Receleur Somb | Marchand noir | Les Racines | `BLACK_MARKET` | Écoule les vols du Marché ; du minerai de la Forge |
| 43 | Borgne Knut | Ancien soldat estropié | Les Racines | `SERVICE` | A perdu un œil à la guerre ; a vu qui a vraiment tiré |
| 44 | Lavandière Hanna | Blanchisseuse des Racines | Les Racines | `SERVICE` | Lave pour les riches ; du sang sur des vêtements de garde |
| 45 | Chiffonnier Pik | Ramasseur de rebuts | Les Racines | `MERCHANT` | Achète les junk T0 ; un plan de la Tour aux ordures |
| 46 | Pickpocket Lyd | Voleuse repentie (donne des trucs) | Les Racines | `SERVICE` | Doigts d'or ; a volé une clé qui n'ouvre rien |
| 47 | Prêteur Grip | Usurier des Racines | Les Racines | `SERVICE` | Prêts à taux d'usure ; un débiteur rembourse en secrets |
| 48 | Informateur Murk | Vendeur de rumeurs | Les Racines | `BLACK_MARKET` | Rumeurs K2 des autres PNJ ; réseau avec Fitch `NPC_GAT_89` |
| 49 | Doyen des Pauvres Ludd | Ancien notable déchu | Les Racines | `SERVICE` | A tout perdu ; sait ce que Sakuya cache au peuple |
| 50 | Tavernier Bram | Taverne de l'Érable | Taverne de l'Érable | `MERCHANT` | Ragoût qui buff l'AGI ; entend tout ce qui se dit |
| 51 | Serveuse Pelli | Servante à la Taverne | Taverne de l'Érable | `SERVICE` | Laisse traîner ses oreilles ; un client qui ne mange pas |
| 52 | Barde Lyr | Ménestrel itinérant | Taverne de l'Érable | `SERVICE` | Chante les légendes ; une chanson interdite par le Cardinal |
| 53 | Cuistot Grenn | Cuisinier de la Taverne | Taverne de l'Érable | `SERVICE` | Ingédients locaux ; un plat qui donne des ailes… littéralement |
| 54 | Joueur Venn | Parieur invétéré | Taverne de l'Érable | `SERVICE` | Parie sur tout ; a parié qu'un étage de la Tour n'existe pas |
| 55 | Aubergiste Tessa | Auberge du Vent Léger | Taverne de l'Érable | `SERVICE` | Chambres ; la Chambre du Sommet n'est jamais louée |
| 56 | Concierge Hob | Gardien des coffres de l'Auberge | Taverne de l'Érable | `SERVICE` | Coffres-forts ; un coffre dont la clé est perdue |
| 57 | Brocanteur Zol | Antiquaire / objets d'occasion | Taverne de l'Érable | `MERCHANT` | Vieilleries ; un livre qui appartient à la Bibliothèque |
| 58 | Guide Flet | Guide pour nouveaux joueurs | Place du Marché | `SERVICE` | Tourne de la ville ; une ruelle qui n'est pas sur sa tournée |
| 59 | Négociant Venn | Marchand itinérant inter-cités | itinérant | `MERCHANT` | Va d'Alne à Swilvane ; croise Anse `NPC_ALN_86` |
| 60 | Maître-Jardinier Flora | Chef des Jardins Suspendus | Jardin Suspendu | `SERVICE` | Entretient les jardins ; une plate-bande qui pousse en cercle |
| 61 | Herboriste Nael | Plantes rares médicinales | Jardin Suspendu | `MERCHANT` | Herbes des cimes ; une plante qui n'existe pas dans la base |
| 62 | Apothicaire Solm | Potions et remèdes avancés | Jardin Suspendu | `MERCHANT` | Potions de vol ; une qui supprime les ailes temporairement |
| 63 | Ailier Thal | Artisan d'ailes (cosmétique) | Atelier Ailé | `MERCHANT` | Customise les ailes ; une aile qui ne bat pas au bon rythme |
| 64 | Teinturière Iris | Teinture d'ailes et de capes | Atelier Ailé | `MERCHANT` | Couleurs personnalisées ; une teinte qui « brille anormalement » |
| 65 | Plumassier Volm | Plumes décoratives et matériaux | Atelier Ailé | `MERCHANT` | Plumes de mobs ; une plume qui pèse le poids d'un corps |
| 66 | Sculpteur de Brise Orn | Artiste du vent / mobiles éoliens | Jardin Suspendu | `SERVICE` | Harpes éoliennes ; une qui joue une mélodie inconnue |
| 67 | Botaniste Lys | Flore endémique Sylph | Jardin Suspendu | `SERVICE` | Catalogue les plantes ; une espèce classée « supprimée » |
| 68 | Parfumeuse Rose | Parfums d'ALO | Jardin Suspendu | `MERCHANT` | Parfums raciaux ; un parfum qui rend invisible ? |
| 69 | Vannier Henn | Vannerie / fibres végétales | Jardin Suspendu | `MERCHANT` | Paniers, cordes ; un panier qui revient toujours |
| 70 | Maître d'Armes Vorn | Entraîneur au combat neutral | Arène d'Entraînement | `SKILL_MASTER` | Enseigne le combat ; une technique qui ne marche que dans le vent |
| 71 | Instructrice Zeph | Skills de vol avancés (OSS) | Arène d'Entraînement | `SKILL_MASTER` | Enseigne les OSS aériens ; un mouvement interdit |
| 72 | Bibliothécaire Lune | Bibliothèque des Courants | Bibliothèque des Courants | `SERVICE` | Gardienne des savoirs ; une étagère qui n'est pas à sa place |
| 73 | Scribe Olm | Copiste de parchemins de skill | Bibliothèque des Courants | `MERCHANT` | Copie les skills ; un parchemin qui réécrit son texte |
| 74 | Traductrice Signa | Traduction des 9 langues raciales | Bibliothèque des Courants | `SERVICE` | Traduit les runes anciennes ; un mot sans traduction |
| 75 | Prêtresse du Vent Elia | Résurrection et bénédictions | Autel de Résurrection | `SERVICE` | Rez les morts ; un rez qui « ne prend pas » |
| 76 | Gardien de l'Autel Kael | Protection de l'Autel | Autel de Résurrection | `GUARD` | Garde le lieu saint ; a vu un revenant |
| 77 | Duelliste Fynn | Champion de l'Arène | Arène d'Entraînement | `QUEST_GIVER` | Défis en duel ; invaincu — jusqu'à récemment |
| 78 | Arbitre Toran | Juge des duels (Arène) | Arène d'Entraînement | `SERVICE` | Arbitre les combats ; truque les matchs sur ordre |
| 79 | Maître de Tir Sora | Archerie / compétences à distance | Arène d'Entraînement | `SKILL_MASTER` | Tireuse d'élite ; une flèche qui a traversé un mur |
| 80 | Portier Grim | Gardien de la Porte principale | Portes de Swilvane | `GUARD` | Filtre les entrées ; laisse passer qui ne devrait pas |
| 81 | Douanière Mere | Registre des entrants et sortants | Portes de Swilvane | `SERVICE` | Tient le compte ; des noms en trop dans le registre |
| 82 | Vigie Tor | Guet des Remparts (anti-PK aérien) | Portes de Swilvane | `GUARD` | Surveillance aérienne ; voit les vols sans pilote |
| 83 | Sonneur Mikk | Alerte de la cité | Portes de Swilvane | `SERVICE` | Corne d'alerte ; ne sonne que pour ce qui existe |
| 84 | Palefrenière Hilda | Montures à louer (aigles, wyvernes) | Portes de Swilvane | `SERVICE` | Loue des montures ; une qui n'obéit plus qu'à un inconnu |
| 85 | Réparateur Fend | Forge mobile / réparations express | Portes de Swilvane | `SERVICE` | Répète à la volée ; un outil venu de nulle part |
| 86 | Garde Noc | Garde de nuit | Portes de Swilvane | `GUARD` | Voit ce qui sort après le couvre-feu ; des ombres sans maître |
| 87 | Garde Drenn | Garde de jour | Portes de Swilvane | `GUARD` | Routinier ; note tout ce qui cloche |
| 88 | Coursier Velt | Messager urbain de Swilvane | itinérant | `SERVICE` | Porte les plis en ville ; un pli décacheté |
| 89 | Voyagiste Sari | Guide de voyage inter-cités | Portes de Swilvane | `SERVICE` | Organise les départs ; un client parti sans bagage |
| 90 | Exilé Salamander Ragn | Déserteur de Gattan | Les Racines | `SERVICE` | Fuit le service militaire ; sait du général Eugene |
| 91 | Helka l'Exilée *(Salamander)* | Brasseuse réfugiée de Gattan | Taverne de l'Érable | `MERCHANT` | Lien réservé Gattan `NPC_GAT_54` ; bière de feu à Swilvane |
| 92 | Envoyé Nerio *(Undine)* | Diplomate de l'Archipel | Tour du Seigneur des Vents | `SERVICE` | Porte un message à Sakuya ; connaît Zarn `NPC_GAT_60` |
| 93 | Marchand Torvin *(Gnome)* | Gemmes de Granzam | Place du Marché | `MERCHANT` | Fournit Belle 24 ; lien Ilka `NPC_GAT_33` |
| 94 | Courtier Nel | Négociant inter-racial | Place du Marché | `SERVICE` | Achète et revend la réputation ; sert Luthien 06 |
| 95 | Vétéran Mur | Survivant des guerres raciales | Taverne de l'Érable | `QUEST_GIVER` | A combattu au Siège ; sait qui a ouvert la porte |
| 96 | Tutrice Venn | Instructrice des nouveaux joueurs | Place du Marché | `SERVICE` | Tutoriel vivant ; réseau avec Pell `NPC_ALN_96` |
| 97 | Fossoyeur Lun | Mémorial des morts définitifs | Autel de Résurrection | `SERVICE` | Enterre les comptes bannis ; un nom qui revient chaque semaine |
| 98 | Oracle des Vents Sil | Prophétesse du Vent (hooks orchestrateur) | Ascenseur Éolien | `QUEST_GIVER` | Prédictions ; parle à Embra `NPC_GAT_70` — même source ? |
| 99 | Doyenne Old | Mémoire vivante de Swilvane | Bibliothèque des Courants | `QUEST_GIVER` | Se souvient de l'initialisation ; clef du fil « Envol Premier » & méta |

**Fiches produites** : `pnj/swilvane/` — ✅ 100/100 (`NPC_SWI_00-99`, gabarit D17, émoji 🍃). Lien réservé Helka `NPC_GAT_54`→`NPC_SWI_91` honoré. Quête `QST_SYL_HELKA_01` à créer (`game_design/quetes/`).

---

## ROSTER VOULG (`ZONE_SAL_TWN_001`) — lot 2.5 (D20)

> **Émoji d'en-tête** : ⚒️ (forge/guerre). **Fichiers** : `pnj/voulg/npc_vou_<nn>_<slug>.md`.
> **Différenciateur de Voulg** (vs Gattan capitale Salamander, vs Alne neutre, vs Swilvane aérien) : **forteresse militaire Salamander brute** — ville-garnison frontalière, arène PK légale intra-muros, mines de soufre/esclavage, forge de guerre tournée à plein régime, dépendance hiérarchique envers Gattan (pas de Lord — commandement militaire direct). Ton dominant : brutalité militariste, loi du plus fort, exploitation, honneur guerrier dévoyé en violence institutionnelle.
> **Notables `01-07`** : personnages existants du lore `voulg_territoire_salamander.md` (refonte D17 des `NPC_VOU_01-07`).
> **Sous-lieux** : Arène de Cendres · Forge Magmatique · Quartier Général d'Eugene · Mines de Soufre · Autel du Cratère · Cachots de l'Arène · Marché de la Lave · Taverne du Brasier · Porte de la Fournaise · Remparts de lave · Grottes périphériques · Caserne des Gardes.

**Liens inter-cités activés côté Voulg** :
- Torvin `NPC_GAT_18` (messager Gattan-Voulg) → **57** (négociant itinérant, point de contact)
- Fyra `NPC_VOU_06` → forge en lien avec Brokkheim (alliages Leprechaun)

**Fils rouges de Voulg** (6, distribués — aucun PNJ ne détient un fil entier) :

| Fil | PNJ porteurs (indices) | Nature |
|---|---|---|
| **⚔️ La Chaîne brisée** | Kaelthor 01, Ignatia 02, Commandant Brûlopier 08, Intendant 35, Garde Noc 86 | Ordres contradictoires de Gattan ; un commandement fantôme usurpe Eugene |
| **🔥 Le Soufre qui pleure** | Malakor 03, Mineur Chef 13, Contremaître 15, Esclave 14, Vétéran Mur 95 | La mine cache une salle du Cardinal sous le cratère ; mineurs « vidés » |
| **💀 L'Arène qui mange les âmes** | Kaelthor 01, Annonceur 20, Bookmaker 21, Prisonnier 26, Gardien Cachots 25, Gladiateur 22/23 | Morts en arène sans respawn ; résurrection altérée |
| **🗡️ Le Traître de la Porte** | Vulcan 05, Garde de jour 77, Douanier 71, Portier 70, Coursier 78, Messager 33 | Livre infos aux Sylphes ; fil rouge que Vulcan (innocent) ne couvre pas |
| **⛓️ La Forge qui ne dort jamais** | Fyra 06, Balrog 04, Maître Forges 09, Artificier 63, Trempeur 62, Soudeur 66 | Armes de tier supérieur — minerai inconnu, venu de nulle part |
| **🔮 Fil méta — Le Cœur du Volcan** | 00, Autel Prêtre 80, Oracle 98, Ombre 88, Mémoire 99 | Cratère = noyau de chauffe du serveur ; Autel = accès aux logs thermiques |

| NN | Nom | Rôle | Sous-lieu | `role_type` | Angle narratif |
|---|---|---|---|---|---|
| 00 | Le Forgeron Fantôme | **PNJ caché du Cardinal** | Forge Magmatique (nuit) | `SERVICE` | Sous-processus qui mesure la production d'armes |
| 01 | Capitaine Kaelthor | Maître de l'Arène de Cendres | Arène de Cendres | `QUEST_GIVER` | Brutal, teste les joueurs en combat ; voit les morts sans retour |
| 02 | Ignatia la Pourpre | Grande Prêtresse du Feu | Autel du Cratère | `SKILL_MASTER` | Magie de feu destructrice ; lit les flammes du cratère |
| 03 | Malakor *(Imp)* | Contremaître des Mines de Soufre | Mines de Soufre | `MERCHANT` | Exploite les mineurs, paie au lance-pierre ; a vu la salle cachée |
| 04 | Balrog Mur-de-Pierre *(Gnome)* | Ingénieur de Siège | Quartier Général | `MERCHANT` | Construit les balistes ; un plan venu du Cardinal, pas de lui |
| 05 | Vulcan le Triste | Déserteur / donneur de quête | Grottes périphériques | `QUEST_GIVER` | Exilé, veut envoyer une lettre de paix à Sakuya — un appât ? |
| 06 | Fyra Étincelle *(Leprechaun)* | Artisane Enchanteresse | Forge Magmatique | `MERCHANT` | Enchantements de feu ; sa formule inclut un minerai inconnu |
| 07 | Nya-Khar le Captif *(Cait Sith)* | Gladiateur Forcé | Cachots de l'Arène | `QUEST_GIVER` | Capturé à la frontière ; sait qui l'a vendu |
| 08 | Commandant Brûlopier | Commandant de la Forteresse | Quartier Général | `LORD` | Chef militaire de Voulg ; reçoit des ordres que Gattan nie avoir envoyés |
| 09 | Maître des Forges Ignéal | Chef de la Forge Magmatique | Forge Magmatique | `SERVICE` | Dirige la production ; une cadence qui ne suit aucun plan officiel |
| 10 | Garde des Plaines | Patrouille de la route Gattan | Plaines de Cendres (`HUNT_001`) | `GUARD` | Protège la route ; des caravanes qui n'arrivent pas |
| 11 | Chasseur des Plaines | Guide de chasse | Plaines de Cendres | `QUEST_GIVER` | Traque les émissaires Sylphes ; un qu'il a laissé fuir |
| 12 | Marchand de Cendres | Cendres rares et composants | Plaines de Cendres | `MERCHANT` | Récolte les cendres de mobs ; une cendre qui brûle froid |
| 13 | Chef Mineur Vorak | Chef des Mineurs de Soufre | Mines de Soufre | `SERVICE` | Dirige les équipes ; un boyau qu'il a fait murer |
| 14 | Esclave des Mines Yll | Mineur forcé | Mines de Soufre | `SERVICE` | Sylph capturé ; a vu la porte sous le cratère |
| 15 | Contremaître Krugg | Fouet des Mineurs | Mines de Soufre | `GUARD` | Brutal ; sa peur des profondeurs est plus forte que sa brutalité |
| 16 | Gardienne Forge | Protection de la Forge | Forge Magmatique | `GUARD` | Garde l'entrée ; laisse entrer qui paie — ou qui obéit à Ignéal |
| 17 | Souffleur de Forge Holt | Entretien des feux de forge | Forge Magmatique | `SERVICE` | Alimente les fours ; la forge ne s'éteint jamais, même la nuit |
| 18 | Garde des Grottes | Surveillance des Grottes | Grottes périphériques | `GUARD` | Cherche Vulcan sans le trouver — ou le protège sans le dire |
| 19 | Ermite des Grottes Venn | Anachorète | Grottes périphériques | `QUEST_GIVER` | Ancien officier ; connaît le traître — ou croit le connaître |
| 20 | Annonceur de l'Arène | Crieur des combats | Arène de Cendres | `SERVICE` | Présente les gladiateurs ; un nom qui revient chaque semaine |
| 21 | Bookmaker de l'Arène | Cotes et paris | Arène de Cendres | `SERVICE` | Paris sur les combats ; sait qu'ils sont truqués |
| 22 | Gladiateur Vétéran Thorm | Combattant d'arène | Arène de Cendres | `SERVICE` | A survécu à cent combats ; a vu des morts qui n'étaient pas des joueurs |
| 23 | Gladiateur Novice Kren | Nouveau combattant | Arène de Cendres | `SERVICE` | Espère la gloire ; ignore qu'il ne pourra pas quitter l'arène |
| 24 | Soigneur de l'Arène | Soins des gladiateurs | Arène de Cendres | `SERVICE` | Panse les blessures ; des blessures qui ne guérissent pas |
| 25 | Gardien des Cachots Drog | Geôlier de l'Arène | Cachots de l'Arène | `GUARD` | Garde les prisonniers ; un cachot vide dont la porte est verrouillée |
| 26 | Prisonnier Politique Tyn | Captif Sylph | Cachots de l'Arène | `SERVICE` | Ancien officier Sylph ; sait quel Salamander livre des infos |
| 27 | Vendeur d'Armes d'Arène | Équipement de gladiateur | Arène de Cendres | `MERCHANT` | Armes d'arène T2-T3 ; une lame qui n'a pas été forgée ici |
| 28 | Marchande de Reliques Orla | Reliques des défunts | Arène de Cendres | `MERCHANT` | Vend les objets des morts de l'arène ; un objet qui date d'avant |
| 29 | Entraîneur de Gladiateurs Vork | Coach de combat | Arène de Cendres | `SKILL_MASTER` | Entraîne les novices ; une technique qui ne devrait pas exister |
| 30 | Aide-de-Camp Varn | Adjoint d'Eugene (hologramme relais) | Quartier Général | `SERVICE` | Transmet les ordres de Gattan ; un ordre falsifié |
| 31 | Stratège Militaire Serkan | Planificateur de campagnes | Quartier Général | `SERVICE` | Plans de bataille contre Sylphes ; une victoire qu'il n'a pas planifiée |
| 32 | Garde d'Élite Noirmante | Protection du QG | Quartier Général | `GUARD` | Garde rapprochée ; a vu entrer quelqu'un qui n'existe pas |
| 33 | Messager de Guerre Torv | Courrier Gattan-Voulg | Quartier Général | `SERVICE` | Porte les plis ; un pli dont il ignore le contenu — il ment |
| 34 | Cartographe de Guerre Sarn | Cartes des fronts | Quartier Général | `SERVICE` | Cartes de bataille ; une zone marquée « n'existe pas » |
| 35 | Intendant Militaire Grakk | Logistique et ravitaillement | Quartier Général | `SERVICE` | Gère les stocks ; des armes qui disparaissent des inventaires |
| 36 | Recruteur des Légions Varn | Enrôleur forcé | Quartier Général | `QUEST_GIVER` | Recrute pour l'armée ; un joueur enrôlé n'est plus jamais revu |
| 37 | Déserteur Caché Burl | Planqué dans les murs | Quartier Général | `SERVICE` | Se cache depuis des mois ; sait quel officier est le traître |
| 38 | Médecin de Guerre Feld | Soins des soldats | Quartier Général | `SERVICE` | Soigne les blessés ; des soldats morts qui reviennent « autres » |
| 39 | Prêtre de Bataille Urgol | Bénédictions de guerre | Autel du Cratère | `SERVICE` | Bénit les troupes ; un rite que le Cardinal a « ajouté » récemment |
| 40 | Marchand d'Armes Lourdes Kern | Armes Salamander | Marché de la Lave | `MERCHANT` | Épées, haches, masses T2-T4 ; une arme siglée Gattan mais venue de Voulg |
| 41 | Forgeron du Marché Ryk | Forge rapide du marché | Marché de la Lave | `MERCHANT` | Réparations express ; refond les armes « qui ne doivent pas exister » |
| 42 | Marchande de Gemmes de Feu Rubis | Gemmes et cristaux de feu | Marché de la Lave | `MERCHANT` | Gemmes enchantées ; une gemme qui « regarde » celui qui la porte |
| 43 | Boucher de la Lave Horg | Viande de mobs / achète drops | Marché de la Lave | `MERCHANT` | Découpe pour toute la garnison ; une viande qui rend malade |
| 44 | Marchand d'Esclaves Soll | Traite de prisonniers | Marché de la Lave | `BLACK_MARKET` | Vend les captifs de guerre ; un acheteur qui rachète toujours les mêmes |
| 45 | Brocanteur de Guerre Zek | Junk de guerre T0 | Marché de la Lave | `MERCHANT` | Achète les loots de soldats ; un médaillon d'un bataillon dissous |
| 46 | Changeur de la Lave Yrd | Change de monnaie | Marché de la Lave | `SERVICE` | Change les Yrds ; une pièce frappée à Voulg qui n'a pas cours à Gattan |
| 47 | Crieuse de la Lave Petra | Annonces publiques | Marché de la Lave | `SERVICE` | K0 ambulant ; crie ce qu'on paie pour taire |
| 48 | Informateur de la Lave Murk | Vendeur de rumeurs | Marché de la Lave | `BLACK_MARKET` | Rumeurs K2 ; réseau avec les informateurs de Gattan et Alne |
| 49 | Receleur de la Lave Somb | Marchand noir inter-cités | Marché de la Lave | `BLACK_MARKET` | Écoule les vols des mines et de la forge |
| 50 | Tavernier du Brasier Dorgan | Taverne du Brasier | Taverne du Brasier | `MERCHANT` | Ragoût de lave qui buff la STR ; entend les soldats parler |
| 51 | Serveuse du Brasier Rella | Servante | Taverne du Brasier | `SERVICE` | Écoute aux tables ; un client qui ne boit que du « lait de lave » |
| 52 | Barde de Guerre Skarn | Chansons de bataille | Taverne du Brasier | `SERVICE` | Chante les exploits ; une chanson qui nomme un traître que nul ne connaît |
| 53 | Cuisinier du Brasier Grunn | Cuisine de la taverne | Taverne du Brasier | `SERVICE` | Ingédients locaux ; un plat « interdit » par le Cardinal |
| 54 | Parieur de l'Arène Venn | Joueur invétéré | Taverne du Brasier | `SERVICE` | Parie sur les combats ; a parié que l'Arène « garde les âmes » |
| 55 | Aubergiste du Brasier Tessa | Auberge attenante | Taverne du Brasier | `SERVICE` | Chambres pour soldats ; la chambre des officiers n'est jamais pleine |
| 56 | Concierge du Brasier Hob | Coffres de l'auberge | Taverne du Brasier | `SERVICE` | Garde les coffres ; un coffre qui suinte du soufre |
| 57 | Négociant Torvin | Marchand itinérant Gattan-Voulg | itinérant | `MERCHANT` | Point de contact Torvin `NPC_GAT_18` ; commerce, infos, contrebande |
| 58 | Guide de Voulg Flet | Guide pour nouveaux | Marché de la Lave | `SERVICE` | Montre la ville ; évite une rue « qui n'existe pas » |
| 59 | Marchand de Potions Solf | Potions de guerre | Marché de la Lave | `MERCHANT` | Potions de force et de feu ; une potion qui sent le soufre anormal |
| 60 | Maître des Runes de Feu Rynald | Runes et gravures de feu | Forge Magmatique | `MERCHANT` | Grave les runes de puissance ; une rune qu'il ne maîtrise pas |
| 61 | Apprenti Forgeron Pynn | Élève d'Ignéal | Forge Magmatique | `SERVICE` | Apprend le métier ; a vu la forge produire sans matière première |
| 62 | Trempeur d'Armes Ferr | Trempe des lames | Forge Magmatique | `SERVICE` | Trempe dans le magma ; une lame qui a resisté à la trempe |
| 63 | Artificier des Forges Bôm | Explosifs et obus | Forge Magmatique | `MERCHANT` | Bombes pour le siège ; un explosif qui ne consume rien |
| 64 | Tailleur de Gemmes de Feu Rubis | Gemmes de feu | Forge Magmatique | `MERCHANT` | Monte les gemmes sur les armes ; une gemme venue d'ailleurs |
| 65 | Alchimiste de la Forge Sulf | Composants alchimiques | Forge Magmatique | `MERCHANT` | Alliages rares ; une formule qui donne des armes « intelligentes » |
| 66 | Soudeur de Boucliers Gard | Boucliers lourds | Forge Magmatique | `SERVICE` | Soude les plaques ; un bouclier creux qui cache quelque chose |
| 67 | Fondeur de Minerais Brann | Fonte du minerai | Forge Magmatique | `SERVICE` | Fait fondre le minerai des Mines ; un minerai qui ne fond pas |
| 68 | Gravéur de Lames Lorek | Gravures personnalisées | Forge Magmatique | `MERCHANT` | Gravé des noms sur les lames ; une lame déjà gravée avant d'être forgée |
| 69 | Contrôleur Qualité Valk | Inspection des armes | Forge Magmatique | `SERVICE` | Teste chaque arme ; des armes qui réussissent tous les tests — trop bien |
| 70 | Portier de la Fournaise Grim | Garde de la Porte principale | Porte de la Fournaise | `GUARD` | Filtre les entrées ; une entrée qui n'est pas dans ses registres |
| 71 | Douanier de la Porte Mere | Registre des entrants | Porte de la Fournaise | `SERVICE` | Tient le registre ; des noms en moins dans le registre |
| 72 | Vigie des Remparts Tor | Guet des murailles | Remparts de lave | `GUARD` | Surveillance ; voit des signaux des Grottes la nuit |
| 73 | Sonneur d'Alarme Mikk | Alerte de la forteresse | Remparts de lave | `SERVICE` | Corne d'alerte ; ne sonne que quand les Sylphes attaquent — ou presque |
| 74 | Garde des Écuries Hilda | Montures de guerre | Porte de la Fournaise | `SERVICE` | Loue des wyvernes ; une wyverne qui reconnaît un seul cavalier |
| 75 | Réparateur d'Armures Fend | Forge mobile | Porte de la Fournaise | `SERVICE` | Répare les armures sur place ; un outil qui n'est pas de ce monde |
| 76 | Garde de Nuit Noc | Ronde de nuit | Remparts de lave | `GUARD` | Voit ce qui sort la nuit ; des ombres qui portent l'armure Sylph |
| 77 | Garde de Jour Drenn | Ronde de jour | Porte de la Fournaise | `GUARD` | Routinier méticuleux ; note des allées et venues impossibles |
| 78 | Coursier de Voulg Velt | Messager urbain | itinérant | `SERVICE` | Porte les messages en ville ; un message qu'il n'a pas livré |
| 79 | Guide des Entrées Sari | Accueil des visiteurs | Porte de la Fournaise | `SERVICE` | Accueille les nouveaux ; un visiteur qui est entré mais jamais ressorti |
| 80 | Prêtre du Feu Rouge Argos | Clergé du Cratère | Autel du Cratère | `SERVICE` | Officie les rites du feu ; lave qui brûle mais ne consume pas |
| 81 | Prêtresse du Feu Bleu Sera | Clergé du Cratère (feu froid) | Autel du Cratère | `SERVICE` | Rites secrets ; une flamme bleue qui gèle au lieu de brûler |
| 82 | Acolyte du Cratère Pynn | Novice de l'Autel | Autel du Cratère | `SERVICE` | Apprenti ; nettoie l'autel — la cendre forme des motifs |
| 83 | Vestale de la Flamme Éternelle | Gardienne de la flamme | Autel du Cratère | `SERVICE` | Entretient la flamme du cratère ; la flamme a faibli une nuit |
| 84 | Sacrificateur des Mines Morg | Offrandes au Cratère | Autel du Cratère | `SERVICE` | Jette du minerai dans le cratère ; un minerai qui est remonté |
| 85 | Fossoyeur des Braises Grim | Cimetière volcanique | Cimetière de lave | `SERVICE` | Enterre les morts définitifs ; une tombe vide qui se remplit seule |
| 86 | Gardien des Braises Urn | Protection de l'Autel | Autel du Cratère | `GUARD` | Garde le lieu saint ; a vu la flamme s'éteindre et se rallumer seule |
| 87 | Veilleur de la Flamme Éternelle | Vigie du cratère | Autel du Cratère | `SERVICE` | Ne dort jamais ; une nuit où la flamme a projeté des images |
| 88 | Ombre du Cratère | Entité des profondeurs | Autel du Cratère (cratère) | `SERVICE` | Apparaît dans les reflets de lave ; on dit que c'est le Cardinal |
| 89 | Porteur de Cendres Venn | Transport des cendres | Autel du Cratère | `SERVICE` | Porte les cendres des défunts ; des cendres trop lourdes |
| 90 | Réfugié Sylph des Mines | Captif évadé | Mines de Soufre | `SERVICE` | Sylph prisonnier évadé ; sait qui à Voulg aide les captifs |
| 91 | Marchand d'Alne Peppin | Visiteur de la capitale neutre | Marché de la Lave | `MERCHANT` | Commerce entre Alne et Voulg ; voit des armes d'Alne ici |
| 92 | Émissaire de Gattan Karn | Liaison officielle Gattan | Quartier Général | `SERVICE` | Porte les ordres de Mortimer ; ses ordres contredisent ceux d'Eugene |
| 93 | Trafiquant d'Armes Syl | Marché noir inter-cités | Marché de la Lave | `BLACK_MARKET` | Armes de Voulg vers Alne — réseau avec Kael \`NPC_ALN_07\` |
| 94 | Courtier Inter-Racial Nel | Négociant neutre | Marché de la Lave | `SERVICE` | Achète et revend entre races ; sert de couverture à Fyra |
| 95 | Vétéran des Guerres Mur | Survivant du Siège | Taverne du Brasier | `QUEST_GIVER` | A combattu au Siège de Swilvane ; sait qui a vraiment ordonné l'attaque |
| 96 | Instructeur des Novices Sarn | Entraînement des recrues | Caserne | `SKILL_MASTER` | Forme les nouvelles recrues ; une recrue venue de nulle part |
| 97 | Gardien des Morts de la Forge | Mémorial des forgerons défunts | Forge Magmatique | `SERVICE` | Honore les morts de la forge ; un nom qui n'a jamais existé |
| 98 | Oracle de la Lave Sil | Prophétesse du Cratère | Autel du Cratère | `QUEST_GIVER` | Prédictions dans la lave ; hooks orchestrateur — lave qui montre des scènes |
| 99 | Mémoire de la Forteresse Old | Ancien bâtisseur de Voulg | Quartier Général (archives) | `QUEST_GIVER` | A vu construire Voulg ; clef du fil « Cœur du Volcan » & méta |

**Fiches produites** : `pnj/voulg/` — ✅ 100/100 (`NPC_VOU_00-99`, gabarit D17, émoji ⚒️). Lien Torvin `NPC_GAT_18`→`NPC_VOU_57` honoré.

---

## ROSTER FREELIA (`ZONE_CAI_CAP_001`) — lot 2.6 (D20)

> **Émoji d'en-tête** : 🐾 (patte/domptage). **Fichiers** : `pnj/freelia/npc_fre_<nn>_<slug>.md`.
> **Différenciateur** : capitale Cait Sith — cité verdoyante, paradis du domptage de familiers (Beast Taming), architecture intégrée à la faune, alliance Sylph. Marché aux Crocs (farm Yrd), Colline aux Souvenirs (résurrection de familiers). Ton : nature sauvage apprivoisée, loyauté bête-homme, trafic illégal d'espèces.
> **Notables `01-07`** : issus du lore `freelia_territoire_caitsith.md`.
> **Sous-lieux** : Ménagerie Royale · Colline aux Souvenirs · Marché aux Crocs · Taverne du Chat Botté · Tour d'Observation · Tour du Trône Fauve · Autel de Résurrection · Portail de Téléportation · Savane des Crocs.

**Fils rouges de Freelia** (6) :

| Fil | PNJ porteurs | Nature |
|---|---|---|
| **🐾 Le Familiar qui s'efface** | Léo `FRE_01`, Elara `FRE_03`, Maître des Familiers `FRE_60`, Vétérinaire Royal `FRE_61`, Nécromancien `FRE_84` | Familiers supprimés des logs ; lien d'âme rompu sans cause |
| **🦴 Le Marché aux Os** | Brok `FRE_07`, Boucher `FRE_30`, Trappeur `FRE_15`, Receleur `FRE_48` | Composants de boss non tués — viande qui « régénère » |
| **🐱 Les Yeux dans l'Ombre** | Zephyr `FRE_02`, Anya `FRE_06`, Garde Nocturne `FRE_76`, Guetteur `FRE_72`, Nox `FRE_05` | Réseau Sylph sous couvert alliance ; trafic d'infos frontalières |
| **🏔️ La Colline qui pleure** | Elara `FRE_03`, Gardien des Souvenirs `FRE_62`, Archiviste des Âmes `FRE_63`, Anya `FRE_06` | Colline retient les âmes — Cardinal utilise les données fam. morts |
| **🐲 La Porte des Bêtes** | Léo `FRE_01`, Alicia `FRE_08`, Gardien Porte `FRE_64`, Vétuste `FRE_65` | Enclos vide que le Cardinal maintient verrouillé ; qqch dedans |
| **🔮 Fil méta — Premier Familier** | `FRE_00`, Alicia `FRE_08`, Mémoire `FRE_99`, Oracle `FRE_98`, Léo `FRE_01` | 1er familier dompté d'ALO existe encore dans logs du Cardinal |

| NN | Nom | Rôle | Sous-lieu | `role_type` | Angle narratif |
|---|---|---|---|---|---|
| 00 | L'Ombre du Premier | **PNJ caché** (ombre du 1er familier) | Colline aux Souvenirs | `SERVICE` | Vestige du premier familier dompté d'ALO |
| 01 | Léo Crinière-Fauve | Maître des Dompteurs | Ménagerie Royale | `SKILL_MASTER` | Dresseur d'Alicia Rue ; a perdu un œil sur un Evil God |
| 02 | Zephyr le Trappeur *(Sylph)* | Braconnier / Marché noir | Périphérie (forêt) | `BLACK_MARKET` | Appâts illégaux ; sous couvert de l'alliance |
| 03 | Maître Elara *(Undine)* | Prêtresse résurrection familiers | Colline aux Souvenirs | `SERVICE` | Résurrection de Familiar Heart ; fleur de Pneuma |
| 04 | Gimli Griffe-Fer *(Leprechaun)* | Artisan équipement monture | Marché aux Crocs | `MERCHANT` | Armures pour familiers ; selle qui « parle » |
| 05 | Nox le Charmeur *(Spriggan)* | Cosmétiques transmogrification | Taverne Le Chat Botté | `MERCHANT` | Illusions cosmétiques pour familiers |
| 06 | Anya Œil-de-Faucon | Éclaireuse / quêtes cartographie | Tour d'Observation | `QUEST_GIVER` | Scrute l'horizon ; voit ce qui ne devrait pas exister |
| 07 | Brok le Boucher *(Gnome)* | Acheteur de loot monstre | Marché aux Crocs | `MERCHANT` | Hachoir géant ; de la viande qui repousse |
| 08 | Alicia Rue | Reine des Cait Sith (canon) | Tour du Trône Fauve | `LORD` | Leader canon ; l'alliance Sylph cache un accord parallèle |
| 09 | Commandant Griffe | Commandant de la Garde Fauve | Tour du Trône Fauve | `GUARD` | Protège Alicia ; a vu qui entre la nuit dans la Ménagerie |
| 10 | Gardienne Savane | Patrouille Savane des Crocs | Savane des Crocs (`HUNT_001`) | `GUARD` | Protège les novices des braconniers |
| 11 | Guide Savane | Guide chasse débutants | Savane des Crocs | `QUEST_GIVER` | Enseigne le domptage de base ; un familier qui le suit partout |
| 12 | Marchand d'Appâts | Appâts de base T1 | Savane des Crocs | `MERCHANT` | Appâts simples ; un appât qui attire ce qu'il ne devrait pas |
| 13 | Gardienne Collines | Patrouille Collines de l'Ouest | Collines de l'Ouest (`HUNT_002`) | `GUARD` | Frontière Sylph/Puca ; trafic qu'elle est payée à ne pas voir |
| 14 | Pisteuse Collines | Traqueuse / chasseuse | Collines de l'Ouest | `QUEST_GIVER` | Piste les worgs alpha ; un worg qui porte un collier |
| 15 | Trappeur Collines | Marchand fourrures Collines | Collines de l'Ouest | `MERCHANT` | Peaux de worgs ; une fourrure qui n'est d'aucun mob connu |
| 16 | Gardienne Tanière | Sentinelle du Donjon Béhémoth | Tanière Roi Béhémoth (`DUN_001`) | `GUARD` | Registre des raids ; un groupe entré avant l'instance |
| 17 | Cartographe Tanière | Cartes des galeries | Tanière Roi Béhémoth | `SERVICE` | Plans de la Tanière ; un étage marqué « inexistant » |
| 18 | Vigie Route | Contrôleur route aérienne | Route Aérienne Freelia–Alne (`ROUTE`) | `GUARD` | Compte les vols ; des familiers sans maître |
| 19 | Marchand Volant | Potions de vol/résistance | Route Aérienne (Îlot) | `MERCHANT` | Buffs de vol ; voit des ombres qui volent seules |
| 20 | Concierge Ménagerie | Entretien enclos Ménagerie | Ménagerie Royale | `SERVICE` | Nettoie les cages ; une cage qui se referme seule |
| 21 | Dresseur de Wyvernes | Dompteur de wyvernes | Ménagerie Royale | `SKILL_MASTER` | Monte les wyvernes de guerre ; une wyverne qui parle |
| 22 | Soigneur Ménagerie | Vétérinaire des familiers | Ménagerie Royale | `SERVICE` | Soigne les bêtes ; une bête qui n'est pas dans le registre |
| 23 | Vendeur Œufs | Œufs de familiers rares | Ménagerie Royale | `MERCHANT` | Œufs de toutes races ; un œuf qui n'éclôt jamais |
| 24 | Dompteur d'Alpha | Domptage haut niveau | Ménagerie Royale | `SKILL_MASTER` | Enseigne le domptage T4 ; une technique absente du manuel |
| 25 | Gardien Colline | Gardien du site sacré | Colline aux Souvenirs | `GUARD` | Protège le site ; des pas sans personne la nuit |
| 26 | Porteur de Fleurs | Apporte les fleurs de Pneuma | Colline aux Souvenirs | `SERVICE` | Transporte les offrandes ; une fleur qui ne fane pas |
| 27 | Marchand de Souvenirs | Reliques de familiers défunts | Colline aux Souvenirs | `MERCHANT` | Objets des familiers morts ; un collier qui vibre |
| 28 | Veilleur de la Colline | Moine gardien veille | Colline aux Souvenirs | `SERVICE` | Prie pour les familiers ; entend des murmures la nuit |
| 29 | Pleureuse de la Colline | Deuil des familiers | Colline aux Souvenirs | `SERVICE` | Lamente les bêtes perdues ; une bête dont elle refuse de parler |
| 30 | Boucher Marché | Découpe viande | Marché aux Crocs | `MERCHANT` | Découpe les monstres ; de la chair qui palpite encore |
| 31 | Tanneur | Cuir et fourrures | Marché aux Crocs | `MERCHANT` | Tannage de peaux ; une peau marquée d'un sceau inconnu |
| 32 | Marchand Os | Os et défenses | Marché aux Crocs | `MERCHANT` | Os de mobs ; un os qui porte des runes |
| 33 | Marchand Plumes | Plumes rares | Marché aux Crocs | `MERCHANT` | Plumes de vol ; une plume phosphorescente |
| 34 | Marchand d'Écailles | Écailles de dragons | Marché aux Crocs | `MERCHANT` | Écailles rares ; une échelle qui brûle |
| 35 | Alchimiste Sang | Sang de monstre - composants | Marché aux Crocs | `MERCHANT` | Sangs alchimiques ; un sang qui ne coagule pas |
| 36 | Taxidermiste | Empaillage de monstres | Marché aux Crocs | `SERVICE` | Empaillage décoratif ; un familier empaillé qui cligne de l'œil |
| 37 | Braconnier Banni | Chasseur illégal | Marché aux Crocs (caché) | `BLACK_MARKET` | Vente d'espèces protégées ; un spécimen unique |
| 38 | Éleveur de Worgs | Élevage de worgs de combat | Marché aux Crocs | `MERCHANT` | Vends worgs dressés ; un worg qui reconnaît son maître décédé |
| 39 | Crieuse Marché | Annonces publiques | Marché aux Crocs | `SERVICE` | K0 ambulant ; crie des avis de recherche d'animaux |
| 40 | Tavernier Chat Botté | Taverne Le Chat Botté | Taverne Le Chat Botté | `MERCHANT` | Poisson grillé buff AGI ; entend les chuchotements |
| 41 | Serveuse Chat Botté | Servante | Taverne Le Chat Botté | `SERVICE` | Sert les clients ; un client qui parle aux chats |
| 42 | Barde Félin | Ménestrel | Taverne Le Chat Botté | `SERVICE` | Chansons de chasse ; une chanson qui fait fuir les familiers |
| 43 | Cuisinier Gibier | Cuisine de gibier | Taverne Le Chat Botté | `SERVICE` | Plat de chasse ; un ingrédient interdit |
| 44 | Parieur Arène | Parieur de combats de familiers | Taverne Le Chat Botté | `SERVICE` | Paris sur combats de bêtes ; des combats arrangés |
| 45 | Aubergiste Chat Botté | Auberge du Chat Botté | Taverne Le Chat Botté | `SERVICE` | Chambres ; la chambre du fond qui sent la bête |
| 46 | Concierge Chat Botté | Coffres de l'auberge | Taverne Le Chat Botté | `SERVICE` | Coffres-forts ; un coffre qui ronronne |
| 47 | Marchand Itinérant | Colporteur inter-cités | itinérant | `MERCHANT` | Lien avec les marchands d'Alne/Swilvane |
| 48 | Receleur Marché Noir | Recel d'espèces protégées | Marché aux Crocs (caché) | `BLACK_MARKET` | Écoule les trafics de Zephyr et autres |
| 49 | Guide des Nouveaux | Guide pour joueurs novices | Place Principale | `SERVICE` | Tutoriel vivant ; montre le domptage |
| 50 | Scout Tour | Éclaireur de la Tour d'Observation | Tour d'Observation | `SERVICE` | Guette l'horizon ; voit des lumières où il n'y a rien |
| 51 | Cartographe Tour | Cartes des territoires vus | Tour d'Observation | `MERCHANT` | Cartes de la région ; une zone blanche |
| 52 | Signaleur Tour | Signaux optiques | Tour d'Observation | `SERVICE` | Signaux aux patrouilles ; un signal sans destinataire |
| 53 | Astrologue Tour | Lecture des étoiles | Tour d'Observation | `SERVICE` | Astrologie Cait Sith ; étoile qui ne devrait pas être là |
| 54 | Stratège Tour | Plans militaires | Tour d'Observation | `SERVICE` | Plans de défense ; un ennemi qu'elle seule voit |
| 55 | Éclaireur Vétéran | Ancien éclaireur retraité | Tour d'Observation | `QUEST_GIVER` | A tout vu ; une carte qu'il a brûlée |
| 56 | Garde Tour | Protection de la Tour | Tour d'Observation | `GUARD` | Garde le sommet ; a vu quelqu'un voler sans ailes |
| 57 | Dame de Compagnie | Suivante d'Alicia Rue | Tour du Trône Fauve | `SERVICE` | Sert Alicia ; sait quand la reine ment |
| 58 | Scribe Royal | Scribe du Trône Fauve | Tour du Trône Fauve | `SERVICE` | Écrit les décrets ; un décret qu'Alicia n'a pas signé |
| 59 | Héraut Royal | Messager de la reine | Tour du Trône Fauve | `SERVICE` | Annonce les nouvelles ; une nouvelle qu'il n'a pas criée |
| 60 | Maître des Familiers | Expert en dressage avancé | Ménagerie Royale | `SKILL_MASTER` | Dresse les légendaires ; un familier qu'il n'a pas dressé |
| 61 | Vétérinaire Royal | Soins des familiers royaux | Ménagerie Royale | `SERVICE` | Soigne les bêtes d'Alicia ; une bête morte deux fois |
| 62 | Gardien des Souvenirs | Gardien Colline aux Souvenirs | Colline aux Souvenirs | `GUARD` | Veille les tombes des familiers ; une tombe vide |
| 63 | Archiviste des Âmes | Registre des familiers défunts | Colline aux Souvenirs | `SERVICE` | Tient le livre des morts ; un familier revenu |
| 64 | Gardien Porte des Bêtes | Gardien enclos secret | Ménagerie Royale (enclos verrouillé) | `GUARD` | Garde la porte que nul n'ouvre ; entend des griffures |
| 65 | Vétuste des Bêtes | Ancien dompteur sénile | Ménagerie Royale | `SERVICE` | A connu le premier familier ; parle à voix basse |
| 66 | Fournisseur d'Appâts | Appâts exotiques | Marché aux Crocs | `MERCHANT` | Appâts rares ; un appât qui sent le soufre |
| 67 | Marchand de Laisses | Équipement de dressage | Marché aux Crocs | `MERCHANT` | Laisses, colliers, muselières ; une laisse qui n'a pas de fin |
| 68 | Négociant en Fourrures | Fourrures de luxe | Marché aux Crocs | `MERCHANT` | Fourrures de bêtes rares ; une fourrure chaude comme la lave |
| 69 | Vendeur de Gibier | Viande exotique | Marché aux Crocs | `MERCHANT` | Gibiers pour buffs ; une viande qui vient de nulle part |
| 70 | Gardien Porte Freelia | Garde de la Porte principale | Porte de Freelia | `GUARD` | Filtre les entrants ; des entrées sans sortie |
| 71 | Douanier Freelia | Registre des voyageurs | Porte de Freelia | `SERVICE` | Tient le registre ; des noms d'animaux dans le registre |
| 72 | Guetteur des Remparts | Vigie des murs | Remparts | `SERVICE` | Surveille ; des formes qui rampent la nuit |
| 73 | Sonneur d'Alarme | Alerte de la cité | Remparts | `SERVICE` | Corne d'alerte ; ne sonne que pour les bêtes |
| 74 | Palefrenier | Montures à louer | Porte de Freelia | `SERVICE` | Loue montures ; une monture qui refuse de quitter la ville |
| 75 | Maréchal-Ferrant | Ferrage de montures | Porte de Freelia | `SERVICE` | Fers pour griffes ; un fer qui brûle le sol |
| 76 | Garde Nocturne | Ronde de nuit | Porte de Freelia | `GUARD` | Voit les ombres ; des yeux dans l'obscurité |
| 77 | Garde Diurne | Ronde de jour | Porte de Freelia | `SERVICE` | Routinier ; un familier errant sans maître |
| 78 | Coursier Freelia | Messager urbain | itinérant | `SERVICE` | Porte les messages ; un pli qui sent la bête |
| 79 | Guide des Visiteurs | Accueil à la Porte | Porte de Freelia | `SERVICE` | Guide les nouveaux ; un visiteur qui parlait aux animaux |
| 80 | Prêtre de la Meute | Clergé du culte de la Chasse | Autel de Résurrection | `SERVICE` | Bénit les chasseurs ; des ossements qui bougent |
| 81 | Prêtresse de la Gueule | Clergé de la Nature | Autel de Résurrection | `SERVICE` | Protège la faune ; une bête qu'elle a bénie qui parle |
| 82 | Acolyte de la Meute | Novice du culte | Autel de Résurrection | `SERVICE` | Apprenti ; nettoie l'autel — traces de pas d'animaux |
| 83 | Vestale des Bêtes | Gardienne des rites | Autel de Résurrection | `SERVICE` | Rites de passage ; un rite qui invoque une ombre |
| 84 | Nécromancien des Bêtes | Résurrection noire | Colline aux Souvenirs (interdit) | `BLACK_MARKET` | Ranime les familiers morts — contre un prix |
| 85 | Fossoyeur des Familiers | Enterre les bêtes | Colline aux Souvenirs | `SERVICE` | Enterre les familiers ; une tombe qui se creuse seule |
| 86 | Gardien du Trône | Garde rapprochée Alicia | Tour du Trône Fauve | `GUARD` | Garde le trône ; la reine n'est pas toujours la reine |
| 87 | Intendante du Trône | Gestion du palais | Tour du Trône Fauve | `SERVICE` | Gère les affaires ; des fonds qui partent ailleurs |
| 88 | Ombre du Trône | Espionne d'Alicia | Tour du Trône Fauve | `SERVICE` | Agent secret ; voit le vrai visage des alliés |
| 89 | Gardien Mémoire | Mémorial des chasseurs morts | Colline aux Souvenirs | `SERVICE` | Liste des morts de la chasse ; un nom qui raye |
| 90 | Réfugié Sylph | Fuyard de la frontière | Collines de l'Ouest | `SERVICE` | Fuit les Salamander ; sait qui trahit les deux camps |
| 91 | Marchand Puca | Visiteur Puca | Marché aux Crocs | `MERCHANT` | Commerce musique/bêtes ; lien Lioda |
| 92 | Envoyé Sylph | Diplomate Sylph | Tour du Trône Fauve | `SERVICE` | Porte messages Sakuya ; sait que Zephyr 02 ment |
| 93 | Trafiquant Gnome | Gemmes contre fourrures | Marché aux Crocs | `MERCHANT` | Trafic inter-cités ; lien Granzam |
| 94 | Courtier Inter-Racial | Négociant neutre | Marché aux Crocs | `SERVICE` | Achète/revente entre races ; sert de couverture à Nox |
| 95 | Vétéran de la Chasse | Ancien grand chasseur | Taverne Chat Botté | `QUEST_GIVER` | A chassé le Roi Béhémoth ; sait comment il est vraiment mort |
| 96 | Instructeur Novices | Entraînement de base | Savane des Crocs | `SKILL_MASTER` | Forme les nouveaux ; une recrue qui est un familier |
| 97 | Gardien des Dépouilles | Mémorial des trophées | Marché aux Crocs | `SERVICE` | Trophées de chasse ; un trophée qui bouge la nuit |
| 98 | Oracle des Bêtes | Prophétesse de la Colline | Colline aux Souvenirs | `QUEST_GIVER` | Prédictions par les os ; hooks orchestrateur |
| 99 | Mémoire de Freelia | Ancienne sage de la cité | Colline aux Souvenirs | `QUEST_GIVER` | Se souvient du premier familier ; clef fil méta |

**Fiches produites** : `pnj/freelia/` — ✅ 100/100 (`NPC_FRE_00-99`, gabarit D17, émoji 🐾). Lien Nya-Ran `NPC_SWI_07` honoré via FRE_90 (Réfugié Sylph) et FRE_08 (Alicia Rue).

---

## ROSTER ARCHIPEL D'ÉCUME (`ZONE_UND_CAP_001`) — lot 2.7 (D20)

> **Émoji d'en-tête** : 🌊 (eau/vagues). **Fichiers** : `pnj/archipel/npc_und_<nn>_<slug>.md`.
> **Différenciateur** : capitale Undine — cité lacustre flottante, capitale mondiale de la magie de guérison, académie des mages, donjon sous-marin T5. Ton : eaux cristallines, secrets abyssaux, guérison corrompue, traîtres et repentis.
> **Notables `01-07`** : issus du lore `archipel_territoire_undine.md`.
> **Sous-lieux** : Palais de Cristal · Académie des Mages · Quais de l'Archipel · Rochers de Corail · Quartier des Artisans · Laboratoire Aquatique · Lac Cristallin · Marais de Brume · Gouffre de Léviathan · Route Aérienne Archipel–Alne.

**Fils rouges de l'Archipel** (6) :

| Fil | PNJ porteurs | Nature |
|---|---|---|
| **🌊 Les Eaux Qui Mentent** | Thalassa 01, Nérée 03, Scribe 58, Cartographe 17, Oracle 98 | Eaux cristallines qui reflètent des scènes jamais produites |
| **🧪 La Recette Corrompue** | Coralia 07, Alchimiste 35, Herboriste 36, Nécro 84 | Potions de guérison falsifiées, ingrédients altérés |
| **🐚 L'Appel des Abysses** | Sirena 05, Kryx 04, Plongeur 37, Pêcheur 38 | Chant sous-marin attire les habitants vers le Gouffre |
| **🩸 Les Cendres de Voulg** | Rurik 02, Garde 56, Réfugié 90, Vétéran 95 | Réseau d'anciens Salamanders repentis ou infiltrés |
| **🏛️ L'Académie Sans Nom** | Thalassa 01, Archiviste 63, Bibliothécaire 60, Étudiant 62 | Sorts non répertoriés par le Cardinal enseignés à l'Académie |
| **🔮 Fil méta — Le Souffle du Monde** | 00, Nerio 08, Mémoire 99, Oracle 98, Nérée 03 | Palais de Cristal = nœud de régulation hydrique du serveur |

| NN | Nom | Rôle | Sous-lieu | `role_type` | Angle narratif |
|---|---|---|---|---|---|
| 00 | La Goutte d'Origine | **PNJ caché** (noyau d'eau primordiale) | Palais de Cristal (fondations) | `SERVICE` | Goutte d'eau qui contient le seed du cycle hydrique du serveur |
| 01 | Archimage Thalassa | Directrice Académie des Mages | Académie des Mages | `SKILL_MASTER` | Plus puissante magicienne d'eau ; enseigne des sorts hors registre |
| 02 | Rurik le Repenti *(Salamander)* | Garde du Corps du Palais | Palais de Cristal | `GUARD` | Ancien bourreau de Voulg sauvé par une Undine ; protège l'Archipel |
| 03 | Nérée le Batelier | Passeur / Loueur de gondoles | Quais de l'Archipel | `SERVICE` | Chanteur de balades ; sait ce que les eaux cachent |
| 04 | Kryx le Plongeur *(Imp)* | Marchand de loot sous-marin | Gouffre de Léviathan (entrée) | `MERCHANT` | Plonge voler le loot des boss ; trésor qui brille d'une lueur noire |
| 05 | Sirena l'Envoûteuse *(Puca)* | Barde marine / Mini-boss | Rochers de Corail | `QUEST_GIVER` | *Lullaby* endort les navigateurs ; chante pour le Cardinal |
| 06 | Finbar le Verrier *(Leprechaun)* | Forgeron d'armes en verre | Quartier des Artisans | `SKILL_MASTER` | Fond le sable marin en cristal d'eau ; une arme qui pleure |
| 07 | Coralia la Biologiste | Alchimiste / Créatrice de potions | Laboratoire Aquatique | `MERCHANT` | Potions de respiration et soins ; une recette qui ne marche plus |
| 08 | Nerio | Lord des Undine (canon) | Palais de Cristal | `LORD` | Leader canon Undine ; lien Alne/Swilvane via Nerio `NPC_ALN_92` |
| 09 | Amiral des Marées | Commandant de la Flotte | Palais de Cristal | `GUARD` | Protège l'Archipel par la mer ; des bateaux qui coulent seuls |
| 10 | Maëlle la Pêcheuse | Pêcheuse du Lac Cristallin | Lac Cristallin (`HUNT_001`) | `QUEST_GIVER` | Pêche des monstres aquatiques ; un poisson qui parle |
| 11 | Morgane la Somnambule | Vagabonde des brumes | Marais de Brume (`HUNT_002`) | `QUEST_GIVER` | Perdue dans le brouillard ; voit des formes qui n'existent pas |
| 12 | Gardienne du Lac | Patrouille Lac Cristallin | Lac Cristallin | `GUARD` | Protège les pêcheurs ; des vaguelettes sans vent |
| 13 | Guide des Marais | Guide chasse Marais de Brume | Marais de Brume | `SERVICE` | Connaît chaque mètre du marécage ; un chemin qui bouge |
| 14 | Marchand de Cannes | Matériel de pêche | Lac Cristallin | `MERCHANT` | Vends cannes et appâts ; un hameçon qui s'accroche à rien |
| 15 | Trappeur des Marais | Chasseur de grenouilles géantes | Marais de Brume | `MERCHANT` | Peaux et venins ; une grenouille qui parle Salamander |
| 16 | Gardienne Gouffre | Sentinelle entrée donjon | Gouffre de Léviathan (`DUN_001`) | `GUARD` | Registre des raids sous-marins ; un groupe descendu sans bulle |
| 17 | Cartographe Gouffre | Cartes des abysses | Gouffre de Léviathan | `SERVICE` | Plans du Gouffre ; une salle marquée « sèche » |
| 18 | Vigie Route | Contrôleur route aérienne | Route Aérienne Archipel–Alne (`ROUTE`) | `GUARD` | Compte les vols ; des passagers qui n'ont pas d'ombre |
| 19 | Marchand d'Écailles | Bijoux d'écailles magiques | Route Aérienne (Îlot) | `MERCHANT` | Bijoux aquatiques ; une écaille qui brûle |
| 20 | Concierge Palais | Entretien Palais de Cristal | Palais de Cristal | `SERVICE` | Nettoie les salles ; une flaque qui ne s'évapore pas |
| 21 | Garde d'Honneur | Garde cérémonielle | Palais de Cristal | `GUARD` | Protège Nerio ; a vu le Palais « saigner » |
| 22 | Servante Palais | Domestique du Palais | Palais de Cristal | `SERVICE` | Sert Nerio ; des ordres que Nerio n'a pas donnés |
| 23 | Scribe du Palais | Secrétaire de Nerio | Palais de Cristal | `SERVICE` | Écrit les édits ; un édit venu de nulle part |
| 24 | Intendant Palais | Gestionnaire des ressources | Palais de Cristal | `SERVICE` | Gère les finances ; de l'eau qui coule à l'envers |
| 25 | Huissier Académie | Accueil de l'Académie | Académie des Mages | `SERVICE` | Filtre les entrants ; un étudiant qui n'est jamais sorti |
| 26 | Archiviste Académie | Livres et grimoires | Académie des Mages | `SERVICE` | Catalogue les sorts ; un livre qui écrit tout seul |
| 27 | Marchand Parchemins | Parchemins de sorts | Académie des Mages | `MERCHANT` | Vends parchemins d'eau ; un parchemin vierge |
| 28 | Concierge Académie | Nettoyage des salles | Académie des Mages | `SERVICE` | Entretient ; de l'eau qui monte sur les murs |
| 29 | Bibliothécaire | Gestion de la bibliothèque | Académie des Mages | `SERVICE` | Bibliothèque des sortilèges ; un rayon qui n'existe pas |
| 30 | Garde Quais | Protection des quais | Quais de l'Archipel | `GUARD` | Sécurité portuaire ; des gondoles qui partent seules |
| 31 | Marchand Poissons | Vendeur de poissons | Quais de l'Archipel | `MERCHANT` | Poissons frais ; un poisson qui parle |
| 32 | Réparateur Bateaux | Réparation gondoles | Quais de l'Archipel | `SERVICE` | Raccommode les coques ; une gondole qui fuit de l'intérieur |
| 33 | Loueur Bateaux | Location embarcations | Quais de l'Archipel | `MERCHANT` | Gondoles, voiliers, barques ; un bateau qui navigue seul |
| 34 | Vendeur Coquillages | Coquillages magiques | Quais de l'Archipel | `MERCHANT` | Coquillages rares ; un coquillage qui chante |
| 35 | Alchimiste Itinérant | Potions et poisons | Quais de l'Archipel | `MERCHANT` | Mixtures diverses ; une potion qui guérit trop bien |
| 36 | Herboriste Marine | Plantes aquatiques | Quais de l'Archipel | `MERCHANT` | Algues et plantes sous-marines ; une algue carnivore |
| 37 | Plongeur Épaves | Fouilleur d'épaves | Quais de l'Archipel (profondeur) | `MERCHANT` | Récupère objets des épaves ; une épave trop récente |
| 38 | Pêcheur des Abysses | Pêche en eaux profondes | Quais de l'Archipel | `MERCHANT` | Rapport de pêche unique ; un hameçon qui revient avec du sable |
| 39 | Crieuse des Quais | Annonces maritimes | Quais de l'Archipel | `SERVICE` | K0 ambulant ; crie des alertes de tempête inexistantes |
| 40 | Tavernier de l'Écume | Taverne L'Écume des Jours | Quais de l'Archipel | `MERCHANT` | Poisson grillé et hydromel ; entend des chuchotements sous l'eau |
| 41 | Serveuse Écume | Servante de taverne | Quais de l'Archipel | `SERVICE` | Sert les marins ; un client qui boit sans fin |
| 42 | Cuisinier Poissons | Chef cuisinier | Quais de l'Archipel | `SERVICE` | Plat signature ; un ingrédient qui ne pourrit pas |
| 43 | Barde des Mers | Ménestrel | Quais de l'Archipel | `SERVICE` | Chansons de marins ; une chanson qui rend malade |
| 44 | Aubergiste Écume | Auberge de l'Écume | Quais de l'Archipel | `SERVICE` | Chambres pour voyageurs ; la chambre qui sent la marée |
| 45 | Parieur de Courses | Paris sur courses de bateaux | Quais de l'Archipel | `SERVICE` | Courses de gondoles ; un bateau qui gagne toujours |
| 46 | Concierge Écume | Coffres de l'auberge | Quais de l'Archipel | `SERVICE` | Coffres-forts ; un coffre qui suinte |
| 47 | Marchand Itinérant | Colporteur inter-cités | itinérant | `MERCHANT` | Lien avec marchands Alne/Swilvane/Voulg |
| 48 | Receleur des Marées | Marché noir maritime | Rochers de Corail (caché) | `BLACK_MARKET` | Épaves pillées, cargaisons volées |
| 49 | Guide Touristique | Guide pour nouveaux arrivants | Quais de l'Archipel | `SERVICE` | Visite de l'Archipel ; montre les 7 merveilles |
| 50 | Scout du Palais | Vigie du Palais de Cristal | Palais de Cristal | `SERVICE` | Surveille l'horizon ; voit des lueurs sous l'eau |
| 51 | Cartographe Marin | Cartes marines | Quais de l'Archipel | `MERCHANT` | Cartes des courants ; une zone bleu foncé |
| 52 | Maître des Vents | Navigation aérienne | Palais de Cristal | `SKILL_MASTER` | Enseigne le vol marin ; un vent qui souffle vers le bas |
| 53 | Astrologue Marin | Lecture des étoiles | Palais de Cristal | `SERVICE` | Astrologie Undine ; étoile qui tremble sur l'eau |
| 54 | Stratège Naval | Plans de défense maritime | Palais de Cristal | `SERVICE` | Stratégie navale ; un ennemi sous l'eau |
| 55 | Éclaireur Vétéran | Ancien éclaireur retraité | Palais de Cristal | `QUEST_GIVER` | A tout vu en mer ; une carte qu'il a brûlée |
| 56 | Garde Salamander | Exilé Salamander de l'Archipel | Palais de Cristal (caserne) | `GUARD` | Ancien Salamander repenti ; réseau avec Rurik |
| 57 | Dame de Cour | Suivante de Nerio | Palais de Cristal | `SERVICE` | Sert Nerio ; sait quand le Lord ment |
| 58 | Scribe Royal | Scribe de la Cour | Palais de Cristal | `SERVICE` | Écrit les décrets ; un décret non signé |
| 59 | Héraut du Palais | Messager de Nerio | Palais de Cristal | `SERVICE` | Annonce les nouvelles ; une nouvelle qu'il n'a pas criée |
| 60 | Bibliothécaire des Sorts | Grimoires avancés | Académie des Mages | `SKILL_MASTER` | Enseigne sorts T3+ ; un sort qui n'existe pas |
| 61 | Alchimiste Royal | Potions pour Nerio | Laboratoire Aquatique | `SERVICE` | Prépare les potions du Lord ; une potion qui a tué |
| 62 | Étudiant Disparu | Apprenti disparu | Académie des Mages | `SERVICE` | A disparu pendant un examen ; revu dans les Marais |
| 63 | Archiviste Interdit | Salle des archives secrètes | Académie des Mages (caché) | `SERVICE` | Sorts interdits ; un sort qui annule la magie |
| 64 | Gardien des Abysses | Garde du Gouffre intérieur | Gouffre de Léviathan | `GUARD` | Protège l'entrée du boss final ; a vu le Léviathan |
| 65 | Vieux Plongeur | Ancien explorateur | Quais de l'Archipel | `SERVICE` | A exploré tout le Gouffre ; un étage de plus que la carte |
| 66 | Marchand Perles | Perles magiques | Quais de l'Archipel | `MERCHANT` | Perles de culture ; une perle noire |
| 67 | Marchand Corail | Coraux enchantés | Quais de l'Archipel | `MERCHANT` | Coraux rares ; un corail qui saigne |
| 68 | Marchand Algues | Algues médicinales | Quais de l'Archipel | `MERCHANT` | Algues curatives ; une algue qui bouge toute seule |
| 69 | Vendeur Sable | Sable magique | Quais de l'Archipel | `MERCHANT` | Sable d'Océan pour Finbar ; un sable qui brûle |
| 70 | Gardien Porte Archipel | Garde de la Porte principale | Porte de l'Archipel | `GUARD` | Filtre les entrants ; des entrées sous-marines |
| 71 | Douanier Maritime | Registre des voyageurs | Porte de l'Archipel | `SERVICE` | Tient le registre ; des noms de poissons |
| 72 | Guetteur Remparts | Vigie des tours d'eau | Remparts aquatiques | `SERVICE` | Surveille la mer ; des formes qui nagent la nuit |
| 73 | Sonneur d'Alerte | Corne de brume | Remparts aquatiques | `SERVICE` | Alerte tempête ; sonne même par ciel clair |
| 74 | Palefrenier Marin | Montures aquatiques | Porte de l'Archipel | `SERVICE` | Loue dauphins et hippogriffes marins |
| 75 | Maréchal d'Écume | Soins des montures marines | Porte de l'Archipel | `SERVICE` | Ferrage d'hippocampes |
| 76 | Garde Nocturne | Ronde de nuit aquatique | Porte de l'Archipel | `GUARD` | Patrouille de nuit ; des lumières sous l'eau |
| 77 | Garde Diurne | Ronde de jour | Porte de l'Archipel | `SERVICE` | Routinier ; un bateau sans équipage |
| 78 | Coursier Marin | Messager par voie d'eau | itinérant | `SERVICE` | Porte messages par bateau ; un message qui coule |
| 79 | Guide des Marins | Accueil à la Porte | Porte de l'Archipel | `SERVICE` | Guide les nouveaux ; un visiteur qui marchait sur l'eau |
| 80 | Prêtre des Flots | Clergé aquatique | Autel Aquatique | `SERVICE` | Bénit les marins ; de l'eau qui se change en vin |
| 81 | Prêtresse des Marées | Clergé de la Mer | Autel Aquatique | `SERVICE` | Prie pour les marins ; une marée qui ne se retire pas |
| 82 | Acolyte des Vagues | Novice | Autel Aquatique | `SERVICE` | Apprenti ; traces de pas mouillés sans provenance |
| 83 | Vestale de l'Eau | Gardienne des rites | Autel Aquatique | `SERVICE` | Rites d'eau ; une invocation qui assèche la pièce |
| 84 | Nécromancien des Abysses | Résurrection noire sous-marine | Gouffre de Léviathan (interdit) | `BLACK_MARKET` | Ranime les noyés contre un prix ; un noyé qui parle |
| 85 | Fossoyeur des Noyés | Enterre les morts en mer | Autel Aquatique | `SERVICE` | Enterre les noyés ; un corps qui flotte encore |
| 86 | Gardien du Palais Intérieur | Garde rapprochée Nerio | Palais de Cristal | `GUARD` | Protège Nerio ; le Lord n'est pas toujours le Lord |
| 87 | Intendant du Palais | Gestion du Trésor | Palais de Cristal | `SERVICE` | Gère les fonds ; de l'or qui rouille |
| 88 | Ombre du Palais | Espion de Nerio | Palais de Cristal | `SERVICE` | Agent secret ; voit le vrai visage des alliés |
| 89 | Gardien Mémoire | Mémorial des marins morts | Quais de l'Archipel | `SERVICE` | Liste des morts en mer ; un nom qui réapparaît |
| 90 | Réfugié Salamander | Ancien soldat Voulg | Quais de l'Archipel | `SERVICE` | A fui Voulg ; sait pourquoi Rurik est vraiment là |
| 91 | Marchand Sylph | Visiteur Sylph | Quais de l'Archipel | `MERCHANT` | Commerce plumes contre perles ; lien Swilvane |
| 92 | Émissaire Alne | Diplomate d'Alne | Palais de Cristal | `SERVICE` | Porte messages d'Alne ; lien Nerio `NPC_ALN_92`/`NPC_SWI_92` |
| 93 | Trafiquant Gnome | Gemmes contre potions | Quais de l'Archipel | `MERCHANT` | Trafic inter-cités ; lien Granzam |
| 94 | Courtier Inter-Racial | Négociant neutre | Quais de l'Archipel | `SERVICE` | Achète/revente entre races ; couverture kryx |
| 95 | Vétéran des Guerres | Ancien combattant des guerres raciales | Quais de l'Archipel | `QUEST_GIVER` | A combattu ; sait quel traité cache la paix |
| 96 | Instructeur Novices | Entraînement aquatique | Lac Cristallin | `SKILL_MASTER` | Forme les nouveaux à la nage de combat |
| 97 | Gardien des Épaves | Mémorial des bateaux perdus | Quais de l'Archipel | `SERVICE` | Épaves décoratives ; une épave qui bouge la nuit |
| 98 | Oracle des Marées | Prophétesse de l'Autel | Autel Aquatique | `QUEST_GIVER` | Prédictions par l'eau ; hooks orchestrateur |
| 99 | Mémoire de l'Archipel | Ancienne sage du Palais | Palais de Cristal | `QUEST_GIVER` | Se souvient de la création de l'Archipel ; clef fil méta |

**Fiches produites** : `pnj/archipel/` — ✅ 100/100 (`NPC_UND_00-99`, gabarit D17, émoji 🌊). Liens inter-cités honorés : Zarn `NPC_GAT_60` via UND_90 (Réfugié Salamander) + UND_92 (Émissaire Alne → Nerio `NPC_ALN_92`/`NPC_SWI_92`). Quotas D34 respectés (SERVICE 48, GUARD 12, MERCHANT 22, QUEST_GIVER 10, SKILL_MASTER 5, LORD 1, BLACK_MARKET 2).

---

## ROSTER LIODA (`ZONE_PUC_CAP_001`) — lot 2.8 (D20)

> **Émoji d'en-tête** : 🎭 (masque/scène). **Fichiers** : `pnj/lioda/npc_lio_<nn>_<slug>.md`.
> **Différenciateur** : capitale Puca — cité-amphithéâtre bâtie autour d'un lac-tambour,每一 bâtiment est un instrument, Harmonie de Fond cardinal diffusée par le Cardinal. Peuple non-guerrier, bardes-nés, magie de musique. Ton : partitions vivantes, silences obscènes, espionnage par la mélodie.
> **Notables `01-07`** : issus du lore `capitale_lioda.md`.
> **Sous-lieux** : Grand Kiosque · Atelier des Cordes · Quai du Lac-Tambour (Taverne Le Refrain) · Bibliothèque des Portées · Place de la Mesure · Balcon de l'Amphithéâtre · Lac-Tambour · Autel de Résurrection · Portail · Prairies Chantantes · Bois des Échos · Amphithéâtre Oublié · Route Aérienne Lioda–Alne.

**Fils rouges de Lioda** (6) :

| Fil | PNJ porteurs | Nature |
|---|---|---|
| **🎵 La Partition Qui Marche Seule** | Cordelia 01, Archiviste 26, Séléna 05, Bibliothécaire 29, Oracle 98 | Une partition écrite seule, une note qui déplace les objets |
| **🎭 Le Masque Qui Oublie** | Maestro 02, Accordeur 04, Comédien 43, Maquilleur 46, Mémorial 97 | Un masque qui efface les souvenirs de qui le porte |
| **🎶 Le Refrain de l'Ombre** | Polka 03, Barde 40, Sonneur 73, Veilleur 76, Oracle 98 | Une mélodie qui plonge l'auditeur en transe (lien Cardinal) |
| **🔇 Le Silence Interdit** | 00, Seigneur 07, Chancelier 08, Mémorial 89, Mémoire 99 | Le seul vrai silence sous la ville = le vide du Cardinal |
| **⚔️ L'Espionne aux Cordes** | Luthien `NPC_SWI_06`, Sentinelle 56, Ombre 88, Crieur 06, Courtier 94 | Une espionne Sylph infiltrée — pour qui espionne-t-elle ? |
| **🔮 Fil méta — La Partition Originelle** | 00, Seigneur 07, Mémoire 99, Oracle 98, Séléna 05 | La fréquence fondamentale utilisée par le Cardinal pour compiler le monde |

| NN | Nom | Rôle | Sous-lieu | `role_type` | Angle narratif |
|---|---|---|---|---|---|
| 00 | La Note Suspendue | **PNJ caché** (note fondamentale) | Lac-Tambour (fond) | `SERVICE` | La note qui ne tombe jamais ; seed de l'Harmonie de Fond |
| 01 | Luthière Cordelia | Factrice d'instruments-armes | Atelier des Cordes | `SKILL_MASTER` | Forge luths-arcs et tambours de guerre ; une corde qui ne se casse jamais |
| 02 | Maestro Viel | Skill Master — Magie de Musique | Grand Kiosque | `SKILL_MASTER` | Enseigne les sorts musicaux ; un sort qui joue seul |
| 03 | Aubergiste Polka | Taverne « Le Refrain » | Quai du Lac-Tambour | `MERCHANT` | Buffs de repas sonores ; entend les refrains de l'ombre |
| 04 | Accordeur Fitz | Réparation/enchantement | Atelier des Cordes | `MERCHANT` | Accorde les instruments ; un luth qui chante faux exprès |
| 05 | Archiviste Séléna | Quête « Partitions Perdues » | Bibliothèque des Portées | `QUEST_GIVER` | Cherche la Partition Originelle ; un fragment qui brûle les doigts |
| 06 | Crieur Tam | Rumeurs / quêtes quotidiennes | Place de la Mesure | `QUEST_GIVER` | Crie l'actu ; sait que la ville joue faux certains soirs |
| 07 | Le Seigneur Silencieux | Lord Puca (hologramme) | Balcon de l'Amphithéâtre | `LORD` | Souverain qui ne parle qu'en musique ; a perdu sa voix |
| 08 | Chancelier de l'Harmonie | Gouvernance (régent) | Balcon de l'Amphithéâtre | `GUARD` | Dirige la ville quand le Seigneur se tait ; a vu le silence |
| 09 | Capitaine des Gardes | Commandant de la Garde | Balcon de l'Amphithéâtre | `GUARD` | Protège Lioda ; une ronde qui ne revient pas |
| 10 | Gardienne Prairies | Patrouille Prairies Chantantes | Prairies Chantantes (`HUNT_001`) | `GUARD` | Protège les nouveaux ; un grillon qui chante trop juste |
| 11 | Guide Prairies | Guide chasse Prairies | Prairies Chantantes | `QUEST_GIVER` | Connaît les betes-musicales ; une bête qui imite une voix |
| 12 | Marchand de Roseaux | Plantes à anches | Prairies Chantantes | `MERCHANT` | Vend roseau à anches ; un roseau qui siffle seul |
| 13 | Gardienne Bois Échos | Patrouille Bois des Échos | Bois des Échos (`HUNT_002`) | `GUARD` | Frontière avec les autres races ; un écho qui répond seul |
| 14 | Pisteur Bois | Traqueur du bois | Bois des Échos | `QUEST_GIVER` | Piste les créatures ; une empreinte qui chante |
| 15 | Marchand Bois Résonance | Bois de résonance | Bois des Échos | `MERCHANT` | Vend bois de résonance ; un bois qui vibre encore |
| 16 | Gardien Amphithéâtre | Sentinelle donjon | Amphithéâtre Oublié (`DUN_001`) | `GUARD` | Registre des raids ; un groupe entré sans instrument |
| 17 | Cartographe Amphithéâtre | Cartes du donjon | Amphithéâtre Oublié | `SERVICE` | Plans de l'Amphithéâtre ; une salle marquée « muette » |
| 18 | Vigie Route | Contrôleur route aérienne | Route Aérienne Lioda–Alne (`ROUTE`) | `GUARD` | Compte les vols ; des passagers qui chantent faux |
| 19 | Marchand de Vol | Potions de vol/buffs | Route Aérienne (Îlot) | `MERCHANT` | Buffs de vol ; voit des ombres qui volent sans ailes |
| 20 | Concierge Kiosque | Entretien Grand Kiosque | Grand Kiosque | `SERVICE` | Nettoie ; une note qui résonne dans le vide |
| 21 | Apprenti Musicien | Élève du Maestro | Grand Kiosque | `SERVICE` | Apprend la magie musicale ; un sort qui lui échappe |
| 22 | Chef d'Orchestre | Directeur des concerts | Grand Kiosque | `SKILL_MASTER` | Organise les concerts ; une partition qui change seule |
| 23 | Scribe des Portées | Notation musicale | Bibliothèque des Portées | `SERVICE` | Écrit les partitions ; une portée qui se complète seule |
| 24 | Restaurateur Cordes | Réparation instruments | Atelier des Cordes | `SERVICE` | Répare les cordes ; une corde qui vibre la nuit |
| 25 | Porteur de Cuivre | Mineur de cuivre sonnant | Atelier des Cordes | `MERCHANT` | Apporte le cuivre ; un lingot qui carillonne |
| 26 | Archiviste des Portées | Gardien des partitions | Bibliothèque des Portées | `SERVICE` | Catalogue les partitions ; une qui s'écrit seule |
| 27 | Vice-Chancelier | Second du régent | Balcon de l'Amphithéâtre | `LORD` | Remplace le Chancelier ; sait que le Seigneur n'est qu'un hologramme |
| 28 | Huissier Tribune | Accueil de l'Amphithéâtre | Balcon de l'Amphithéâtre | `SERVICE` | Filtre les entrants ; un spectateur qui n'applaudit pas |
| 29 | Bibliothécaire | Gestion des ouvrages | Bibliothèque des Portées | `SERVICE` | Ouvrages de lore Puca ; un livre qui chante |
| 30 | Garde du Quai | Sécurité du Quai | Quai du Lac-Tambour | `GUARD` | Protège la taverne ; des verres qui tintent seuls |
| 31 | Marchand de Carpes | Poisson du Lac-Tambour | Quai du Lac-Tambour | `MERCHANT` | Vend carpe soprano ; un poisson qui fredonne |
| 32 | Réparateur Bateaux | Bac à rames | Quai du Lac-Tambour | `SERVICE` | Répare les barques ; une barque qui coule à sec |
| 33 | Loueur de Barques | Location de barques | Quai du Lac-Tambour | `MERCHANT` | Barques sur le lac-tambour ; une barque qui vogue seule |
| 34 | Vendeur de Clochettes | Carillons | Quai du Lac-Tambour | `MERCHANT` | Cloches de cuivre ; une clochette qui sonne à vide |
| 35 | Alchimiste des Sons | Potions sonores | Quai du Lac-Tambour | `MERCHANT` | Potions de voix/ouïe ; une potion qui chante |
| 36 | Fabricant de Roseaux | Anches pour instruments | Prairies Chantantes | `MERCHANT` | Anches taillées ; une anche qui joue seule |
| 37 | Plumeux des Prairies | Vendeur de plumes | Prairies Chantantes | `MERCHANT` | Plumes de grillon virtuose ; une plume qui stridule |
| 38 | Trappeur de Grenouilles | Peaux de baryton | Prairies Chantantes | `MERCHANT` | Sacs vocaux de grenouille ; un sac qui résonne |
| 39 | Crieur des Prairies | Annonces rurales | Prairies Chantantes | `SERVICE` | K0 ambulant ; annonce des concerts de nulle part |
| 40 | Barde Errant | Ménestrel de taverne | Quai du Lac-Tambour | `SERVICE` | Chansons de Lioda ; une chanson qui endort |
| 41 | Serveuse Refrain | Servante de taverne | Quai du Lac-Tambour | `SERVICE` | Sert les clients ; un client qui fredonne faux |
| 42 | Cuisinier Sonore | Cuisine buff musical | Quai du Lac-Tambour | `SERVICE` | Plats qui buffent ; un ingrédient qui vibre |
| 43 | Comédien Masqué | Acteur du théâtre | Place de la Mesure | `SERVICE` | Porte un masque ; un masque qui oublie |
| 44 | Aubergiste Lac | Auberge du Refrain | Quai du Lac-Tambour | `SERVICE` | Chambres ; la chambre qui résonne la nuit |
| 45 | Parieur de Duels | Paris de duels musicaux | Place de la Mesure | `SERVICE` | Paris sur joutes de chant ; un duel truqué |
| 46 | Maquilleur de Scène | Maquillage d'acteurs | Place de la Mesure | `SERVICE` | Maquille les comédiens ; un maquillage qui coule seul |
| 47 | Marchand Itinérant | Colporteur inter-cités | itinérant | `MERCHANT` | Lien marchands Alne/Swilvane/Freelia |
| 48 | Receleur de Partition | Marché noir des partitions | Bois des Échos (caché) | `BLACK_MARKET` | Vend des partitions interdites ; une qui ne devrait pas exister |
| 49 | Guide des Nouveaux | Accueil des visiteurs | Place de la Mesure | `QUEST_GIVER` | Tutoriel vivant ; montre la ville-instrument |
| 50 | Éclaireur des Toits | Vigie des toits cuivre | Balcon de l'Amphithéâtre | `SERVICE` | Surveille ; des tuiles qui carillonnent seules |
| 51 | Cartographe Sonore | Cartes des échos | Grand Kiosque | `MERCHANT` | Cartes des lieux qui chantent ; une zone muette |
| 52 | Maître du Tempo | Enseignement du rythme | Grand Kiosque | `SKILL_MASTER` | Enseigne le tempo de combat ; un battement qui dévie |
| 53 | Astrologue des Notes | Lecture des étoiles | Balcon de l'Amphithéâtre | `SERVICE` | Astrologie Puca ; une étoile qui vibre |
| 54 | Stratège des Harmonies | Défense par le son | Balcon de l'Amphithéâtre | `SERVICE` | Plans de défense sonore ; un ennemi qu'elle seule entend |
| 55 | Vétéran des Guerres | Ancien combattant | Place de la Mesure | `QUEST_GIVER` | A combattu sans arme, au chant ; sait quel traité cache la paix |
| 56 | Sentinelle Sylph | Garde d'origine Sylph | Balcon de l'Amphithéâtre | `GUARD` | Veille le Seigneur ; en réalité Luthien `NPC_SWI_06` la manipule |
| 57 | Dame de Compagnie | Suivante du Seigneur | Balcon de l'Amphithéâtre | `SERVICE` | Sert le Seigneur ; sait quand il ne joue pas juste |
| 58 | Scribe Royal | Scribe de la Cour | Balcon de l'Amphithéâtre | `SERVICE` | Écrit les édits musicaux ; un édit non signé |
| 59 | Héraut du Balcon | Messager du Seigneur | Balcon de l'Amphithéâtre | `SERVICE` | Annonce les concerts ; une annonce qu'il n'a pas faite |
| 60 | Virtuose des Cordes | Maître luthier | Atelier des Cordes | `SKILL_MASTER` | Luths légendaires ; un luth qui joue une mélodie inconnue |
| 61 | Enchanteur d'Instruments | Enchantements musicaux | Atelier des Cordes | `SERVICE` | Enchante les instruments ; un sort qui s'attache seul |
| 62 | Apprenti Luthier | Élève de Cordelia | Atelier des Cordes | `SERVICE` | Apprend le métier ; une corde qui se tend seule |
| 63 | Archiviste Interdit | Partitions secrètes | Bibliothèque des Portées (caché) | `SERVICE` | Partitions interdites ; une qui annule le son |
| 64 | Gardien du Donjon | Garde de l'Amphithéâtre Oublié | Amphithéâtre Oublié | `GUARD` | Protège l'entrée ; a entendu la Partition Originelle |
| 65 | Vieux Ménestrel | Ancien barde retraité | Quai du Lac-Tambour | `SERVICE` | A tout joué ; une chanson qu'il refuse de jouer |
| 66 | Marchand de Métronomes | Lucioles métronome | Prairies Chantantes | `MERCHANT` | Vend lucioles ; une luciole qui cadence seule |
| 67 | Marchand de Cuivre | Lingots sonnants | Atelier des Cordes | `MERCHANT` | Cuivre pour instruments ; un lingot qui chante |
| 68 | Marchand de Peaux | Tympans de blaireau | Bois des Échos | `MERCHANT` | Peaux de tambour ; une peau qui bat seule |
| 69 | Vendeur de Sourdine | Accessoires de scène | Place de la Mesure | `MERCHANT` | Sourdines et accessoires ; une sourdine qui ne coupe pas |
| 70 | Gardien de la Porte | Garde de la Porte principale | Porte de Lioda | `GUARD` | Filtre les entrants ; des entrées sans bruit |
| 71 | Douanier Musical | Registre des visiteurs | Porte de Lioda | `SERVICE` | Tient le registre ; des noms de notes |
| 72 | Guetteur des Remparts | Vigie des murs | Remparts de l'amphithéâtre | `SERVICE` | Surveille ; des ombres qui dansent la nuit |
| 73 | Sonneur de Cloche | Carillon d'alarme | Remparts de l'amphithéâtre | `SERVICE` | Sonne l'Accord Parfait ; sonne quand il ne devrait pas |
| 74 | Palefrenier Mélodieux | Montures à louer | Porte de Lioda | `SERVICE` | Loue montures ; une monture qui hennit faux |
| 75 | Maréchal des Sabots | Soins des montures | Porte de Lioda | `SERVICE` | Ferrage des montures ; un fer qui sonne creux |
| 76 | Veilleur Nocturne | Ronde de nuit | Porte de Lioda | `GUARD` | Patrouille de nuit ; des pas qui claquent seuls |
| 77 | Veilleur Diurne | Ronde de jour | Porte de Lioda | `SERVICE` | Routinier ; une barque sans rameur |
| 78 | Coursier Mélodique | Messager urbain | itinérant | `SERVICE` | Porte messages ; un pli qui chante |
| 79 | Guide des Visiteurs | Accueil à la Porte | Porte de Lioda | `SERVICE` | Guide les nouveaux ; un visiteur qui sifflait juste |
| 80 | Prêtre du Refrain | Clergé de la musique | Autel de Résurrection | `SERVICE` | Bénit les musiciens ; un chant qui guérit trop bien |
| 81 | Prêtresse des Portées | Clergé du silence | Autel de Résurrection | `SERVICE` | Prie pour le silence ; un silence qui dure trop |
| 82 | Acolyte du Chant | Novice | Autel de Résurrection | `SERVICE` | Apprenti ; des pas qui résonnent sans corps |
| 83 | Vestale de l'Écho | Gardienne des rites | Autel de Résurrection | `SERVICE` | Rites sonores ; un rite qui assourdit |
| 84 | Faussaire de Partitions | Contrefaçon musicale | Bois des Échos (interdit) | `BLACK_MARKET` | Falsifie les partitions ; une fausse qui marche |
| 85 | Fossoyeur du Silence | Enterre les morts | Autel de Résurrection | `SERVICE` | Enterre les défunts ; un corps qui frémit encore |
| 86 | Garde du Balcon Intérieur | Garde rapprochée Seigneur | Balcon de l'Amphithéâtre | `GUARD` | Protège le Seigneur ; le Seigneur n'est pas toujours le Seigneur |
| 87 | Intendant du Balcon | Gestion du trésor | Balcon de l'Amphithéâtre | `SERVICE` | Gère les fonds ; de l'or qui tintinnabule |
| 88 | Ombre du Balcon | Espion du Chancelier | Balcon de l'Amphithéâtre | `SERVICE` | Agent secret ; voit le vrai visage des alliés |
| 89 | Gardien du Mémorial | Mémorial des musiciens morts | Quai du Lac-Tambour | `SERVICE` | Liste des morts ; un nom qui résonne encore |
| 90 | Réfugié Sylph | Fuyard de Swilvane | Bois des Échos | `SERVICE` | Fuit Lioda ; sait que Luthien `NPC_SWI_06` n'est pas qui elle dit |
| 91 | Marchand Cait Sith | Visiteur Cait Sith | Quai du Lac-Tambour | `MERCHANT` | Commerce fourrures contre instruments ; lien Freelia |
| 92 | Émissaire d'Alne | Diplomate d'Alne | Balcon de l'Amphithéâtre | `SERVICE` | Porte messages d'Alne ; lien neutre |
| 93 | Trafiquant Gnome | Gemmes contre cuivre | Atelier des Cordes | `MERCHANT` | Trafic inter-cités ; lien Granzam |
| 94 | Courtier Inter-Racial | Négociant neutre | Place de la Mesure | `SERVICE` | Achète/revente entre races ; couverture pour Luthien |
| 95 | Vétéran des Chœurs | Ancien chef de chœur | Grand Kiosque | `QUEST_GIVER` | A dirigé le chœur originel ; sait ce que le Cardinal a joué |
| 96 | Instructeur Novices | Entraînement musical | Prairies Chantantes | `SKILL_MASTER` | Forme les nouveaux ; un élève qui chante juste sans leçon |
| 97 | Mémorial des Masques | Mémorial des comédiens | Place de la Mesure | `SERVICE` | Masques de scène ; un masque qui oublie son porteur |
| 98 | Oracle des Notes | Prophétesse du Lac-Tambour | Lac-Tambour | `QUEST_GIVER` | Prédictions par les vagues ; hooks orchestrateur |
| 99 | Mémoire de Lioda | Ancienne sage de la cité | Balcon de l'Amphithéâtre | `QUEST_GIVER` | Se souvient de la Partition Originelle ; clef fil méta |

**Fiches produites** : `pnj/lioda/` — ✅ 100/100 (`NPC_LIO_00-99`, gabarit D17, émoji 🎭). Lien Luthien `NPC_SWI_06` honoré via LIO_56/LIO_88/LIO_90/LIO_94. Quotas D34 respectés (SERVICE 48, GUARD 12, MERCHANT 21, QUEST_GIVER 9, SKILL_MASTER 6, LORD 2, BLACK_MARKET 2).

---

## ROSTER DUSKARN (`ZONE_IMP_CAP_001`) — lot 2.9 (D20)

> **Émoji d'en-tête** : 🌑 (croissant/l'ombre). **Fichiers** : `pnj/duskarn/npc_dus_<nn>_<slug>.md`.
> **Différenciateur** : capitale Imp — cité creusée dans un canyon sans aube, crépuscule perpétuel, veines de cristal violet, vision nocturne, bains d'ombre, Pacte des Ombres avec les Spriggan (maîtres du renseignement). Ton : espionnage, poisons, dettes d'âme, rivière qui absorbe la lumière.
> **Notables `01-07`** : issus du lore `capitale_duskarn.md`.
> **Sous-lieux** : Bazar des Ombres · Corniche de la Forge Noire · Échoppe de la Rivière d'Encre · Nid de Guet · Temple du Voile · Balcon du Conseil · Rivière d'Encre · Bains d'Encre · Autel de Résurrection · Portail · Canyon des Ombres · Falaises du Crépuscule · Caverne des Hurleurs · Route Aérienne Duskarn–Alne.

**Fils rouges de Duskarn** (6) :

| Fil | PNJ porteurs | Nature |
|---|---|---|
| **🌑 L'Ombre Qui Observe** | Korvac 04, Nid 56, Veilleur 76, Oracle 98, Mémoire 99 | Une ombre dans le canyon qui ne bouge pas comme les autres |
| **☠️ Le Poison Qui Parle** | Morn 03, Alchimiste 35, Herboriste 36, Nécromancien 84 | Un poison qui force la vérité ; des morts qui dénoncent |
| **🦇 Le Pacte des Ailes** | Lilith 05, Skell 06, Espion 88, Courtier 94, Réfugié 90 | Pacte Imp–Spriggan (Fitch/Wisp) — qui vend le renseignement |
| **💀 Le Prêteur Sans Visage** | Skell 06, Huissier 28, Receleur 48, Banquier 87 | Les prêts de Skell saisissent une partie de l'âme |
| **🫧 La Rivière Qui Absorbe** | 00, Morn 03, Pêcheur 25, Baigneur 49, Mémoire 99 | La Rivière d'Encre absorbe lumière et souvenirs (lien Cardinal) |
| **🔮 Fil méta — Le Cœur d'Ombre** | 00, Seigneur 07, Mémoire 99, Oracle 98, Lilith 05 | Duskarn = nœud de régulation des ténèbres du serveur |

| NN | Nom | Rôle | Sous-lieu | `role_type` | Angle narratif |
|---|---|---|---|---|---|
| 00 | L'Étincelle d'Encre | **PNJ caché** (étincelle d'ombre) | Rivière d'Encre (fond) | `SERVICE` | La première ombre du serveur ; seed de l'obscurité |
| 01 | Vesper le Discret | Marchand d'armes courtes | Bazar des Ombres | `MERCHANT` | Dagues, griffes, lames courbes ; une lame qui boit la lumière |
| 02 | Forgeronne Umbra | Forge à froid / enchantements | Corniche de la Forge Noire | `SKILL_MASTER` | Enchantements d'ombre ; une arme qui pleure du noir |
| 03 | Alchimiste Morn | Poisons & vision nocturne | Échoppe de la Rivière d'Encre | `MERCHANT` | Encres et potions ; un poison qui dit la vérité |
| 04 | Œil-de-Nuit Korvac | Infiltration / contre-espionnage | Nid de Guet | `QUEST_GIVER` | Veille le canyon ; une ombre qui l'observe |
| 05 | Gardienne Lilith | Chaîne raciale « L'Envers de la Lumière » | Temple du Voile | `QUEST_GIVER` | École d'ombre ; sait que le Voile cache autre chose |
| 06 | Prêteur Sombre Skell | Banque / prêts sur gage | Bazar des Ombres | `MERCHANT` | Taux discutables ; saisit une part d'âme |
| 07 | Lord Imp | Lord (hologramme) | Balcon du Conseil | `LORD` | Panneau politique Imp ; ne parle qu'en ombres |
| 08 | Chancelier des Ténèbres | Gouvernance (régent) | Balcon du Conseil | `GUARD` | Dirige Duskarn la nuit ; a vu l'ombre se détacher |
| 09 | Commandant des Guets | Commandant de la Garde | Balcon du Conseil | `GUARD` | Protège la cité ; une ronde qui ne revient pas |
| 10 | Gardien Canyon | Patrouille Canyon des Ombres | Canyon des Ombres (`HUNT_001`) | `GUARD` | Protège les chasseurs ; des ombres sans corps |
| 11 | Guide Canyon | Guide chasse Canyon | Canyon des Ombres | `QUEST_GIVER` | Connaît les créatures ; une bête qui imite une voix |
| 12 | Marchand de Champignons | Champignons d'encre | Canyon des Ombres | `MERCHANT` | Vend champignons ; un qui pulse dans le noir |
| 13 | Gardien Falaises | Patrouille Falaises Crépuscule | Falaises du Crépuscule (`HUNT_002`) | `GUARD` | Frontière avec Spriggan ; un accord qui se trafique |
| 14 | Pisteur Falaises | Traqueur des failles | Falaises du Crépuscule | `QUEST_GIVER` | Piste les lézards ; une empreinte qui fuit |
| 15 | Marchand de Cristaux | Cristal violet | Falaises du Crépuscule | `MERCHANT` | Vend cristaux ; un cristal qui bat |
| 16 | Gardien Caverne | Sentinelle donjon | Caverne des Hurleurs (`DUN_001`) | `GUARD` | Registre des raids ; un groupe entré sans torche |
| 17 | Cartographe Caverne | Cartes de la caverne | Caverne des Hurleurs | `SERVICE` | Plans de la caverne ; une salle marquée « silencieuse » |
| 18 | Vigie Route | Contrôleur route aérienne | Route Aérienne Duskarn–Alne (`ROUTE`) | `GUARD` | Compte les vols ; des passagers sans ombre |
| 19 | Marchand de Vol | Potions de vol/buffs | Route Aérienne (Îlot) | `MERCHANT` | Buffs de vol ; voit des ombres voler seules |
| 20 | Concierge Temple | Entretien Temple du Voile | Temple du Voile | `SERVICE` | Nettoie ; une ombre qui reste après son passage |
| 21 | Apprenti Ombre | Élève de la magie d'ombre | Temple du Voile | `SERVICE` | Apprend l'illusion ; un sort qui lui échappe |
| 22 | Maître des Illusions | Enseignement illusion | Temple du Voile | `SKILL_MASTER` | Maître illusionniste ; une illusion qui persiste |
| 23 | Scribe du Voile | Notation des rituels | Temple du Voile | `SERVICE` | Écrit les rituels ; un rituel qui s'achève seul |
| 24 | Restaurateur Armes | Réparation dagues | Bazar des Ombres | `SERVICE` | Répare les lames ; une lame qui gémit |
| 25 | Pêcheur Aveugle | Poisson de la Rivière d'Encre | Rivière d'Encre | `MERCHANT` | Pêche le poisson aveugle ; un poisson qui murmure |
| 26 | Archiviste du Voile | Gardien des grimoires | Temple du Voile | `SERVICE` | Catalogue les sortils ; un livre qui se referme seul |
| 27 | Vice-Chancelier | Second du régent | Balcon du Conseil | `LORD` | Remplace le Chancelier ; sait que le Seigneur est un hologramme |
| 28 | Huissier du Conseil | Accueil du Balcon | Balcon du Conseil | `SERVICE` | Filtre les entrants ; un visiteur qui n'a pas d'ombre |
| 29 | Bibliothécaire | Gestion des ouvrages | Temple du Voile | `SERVICE` | Ouvrages d'ombre ; un livre qui chuchote |
| 30 | Garde du Bazar | Sécurité du Bazar | Bazar des Ombres | `GUARD` | Protège le marché ; des objets qui disparaissent |
| 31 | Marchand de Dagues | Dagues fines | Bazar des Ombres | `MERCHANT` | Dagues de toutes sortes ; une dague qui vise seule |
| 32 | Réparateur d'Armes | Entretien lames | Bazar des Ombres | `SERVICE` | Répare les armes ; une lame qui saigne |
| 33 | Loueur de Dagues | Location d'armes | Bazar des Ombres | `MERCHANT` | Location pour duels ; une dague maudite |
| 34 | Vendeur de Griffes | Griffes et lames courbes | Bazar des Ombres | `MERCHANT` | Armures légères Imp ; une griffe qui gratte seule |
| 35 | Alchimiste des Poisons | Poisons rares | Échoppe de la Rivière d'Encre | `MERCHANT` | Poisons qui parlent ; un flacon qui frémit |
| 36 | Herboriste d'Encre | Champignons et plantes | Échoppe de la Rivière d'Encre | `MERCHANT` | Plantes d'ombre ; un champignon qui marche |
| 37 | Plumeux des Ombres | Vendeur de plumes | Canyon des Ombres | `MERCHANT` | Plumes de chauve-souris ; une plume qui voit |
| 38 | Trappeur de Rats | Peaux de rats d'obsidienne | Canyon des Ombres | `MERCHANT` | Incisives noires ; une dent qui mord |
| 39 | Crieur du Bazar | Annonces du marché | Bazar des Ombres | `SERVICE` | K0 ambulant ; crie des secrets qui ne devraient pas l'être |
| 40 | Tavernier de l'Ombre | Taverne « L'Encrier » | Bazar des Ombres | `SERVICE` | Hydromel noir ; entend les chuchotements |
| 41 | Serveuse Encrier | Servante de taverne | Bazar des Ombres | `SERVICE` | Sert les clients ; un client qui boit dans le noir |
| 42 | Cuisinier d'Ombre | Cuisine buff ténèbres | Bazar des Ombres | `SERVICE` | Plats qui buffent furtivité ; un ingrédient qui glisse |
| 43 | Barde des Ténèbres | Ménestrel | Bazar des Ombres | `SERVICE` | Chansons funèbres ; une chanson qui endort |
| 44 | Aubergiste Encrier | Auberge de l'Encrier | Bazar des Ombres | `SERVICE` | Chambres ; la chambre qui sent l'encre |
| 45 | Parieur de Duel | Paris de duels d'ombre | Bazar des Ombres | `SERVICE` | Paris sur combats ; un duel truqué |
| 46 | Concierge Auberge | Coffres de l'auberge | Bazar des Ombres | `SERVICE` | Coffres-forts ; un coffre qui pleure |
| 47 | Marchand Itinérant | Colporteur inter-cités | itinérant | `MERCHANT` | Lien marchands Alne/Voulg/Freelia |
| 48 | Receleur des Ombres | Marché noir | Bazar des Ombres (caché) | `BLACK_MARKET` | Objets « trouvés » ; un objet qui appartenait à un mort |
| 49 | Guide des Nouveaux | Accueil des visiteurs | Bazar des Ombres | `QUEST_GIVER` | Tutoriel vivant ; montre la ville sans aube |
| 50 | Éclaireur des Corniches | Vigie des corniches | Balcon du Conseil | `SERVICE` | Surveille ; des formes qui volent la nuit |
| 51 | Marchand de Cristaux Fins | Bijoux de cristal | Bazar des Ombres | `MERCHANT` | Joyaux violets ; un bijou qui bat |
| 52 | Maître du Camouflage | Enseignement furtivité | Temple du Voile | `SKILL_MASTER` | Enseigne la discrétion ; une ombre qui le suit |
| 53 | Astrologue des Ténèbres | Lecture des étoiles | Balcon du Conseil | `SERVICE` | Astrologie Imp ; une étoile qui ne brille pas |
| 54 | Stratège des Ombres | Défense par l'ombre | Balcon du Conseil | `SERVICE` | Plans de défense ; un ennemi qu'il voit seul |
| 55 | Vétéran des Guerres | Ancien combattant | Nid de Guet | `QUEST_GIVER` | A combattu dans le noir ; sait quel traité cache la paix |
| 56 | Sentinelle des Falaises | Garde frontière Spriggan | Falaises du Crépuscule | `GUARD` | Veille le Pacte ; un accord signé dans le noir |
| 57 | Dame de Compagnie | Suivante du Seigneur | Balcon du Conseil | `SERVICE` | Sert le Seigneur ; sait quand il ne joue pas juste |
| 58 | Scribe Royal | Scribe de la Cour | Balcon du Conseil | `SERVICE` | Écrit les édits ; un édit non signé |
| 59 | Héraut du Balcon | Messager du Seigneur | Balcon du Conseil | `SERVICE` | Annonce les nouvelles ; une nouvelle qu'il n'a pas criée |
| 60 | Virtuose des Ombres | Maître illusionniste | Temple du Voile | `SKILL_MASTER` | Illusions légendaires ; une qui ne se dissipe pas |
| 61 | Enchanteur d'Armes | Enchantements d'ombre | Corniche de la Forge Noire | `SERVICE` | Enchante les lames ; un sort qui s'attache seul |
| 62 | Apprenti Forgeron | Élève d'Umbra | Corniche de la Forge Noire | `SERVICE` | Apprend la forge ; une lame qui chante faux |
| 63 | Archiviste Interdit | Grimoires secrets | Temple du Voile (caché) | `SERVICE` | Sortilèges interdits ; un sort qui annule la lumière |
| 64 | Gardien du Donjon | Garde de la Caverne | Caverne des Hurleurs | `GUARD` | Protège l'entrée ; a entendu les hurleurs mentir |
| 65 | Vieux Guetteur | Ancien veilleur retraité | Nid de Guet | `SERVICE` | A tout vu ; une carte qu'il a brûlée |
| 66 | Marchand de Membranes | Membrane de chauve-souris | Canyon des Ombres | `MERCHANT` | Fourrures de cure ; une membrane qui bat |
| 67 | Marchand de Poudre | Poudre d'ombre | Canyon des Ombres | `MERCHANT` | Poudre de papillon ; une poudre qui voit |
| 68 | Marchand de Bois | Bois pétrifié | Fond du canyon | `MERCHANT` | Bois pour arcs ; un bois qui craque seul |
| 69 | Vendeur d'Écailles | Écaille crépusculaire | Falaises du Crépuscule | `MERCHANT` | Écailles de lézard ; une écaille qui brûle |
| 70 | Gardien de la Porte | Garde de la Porte principale | Porte de Duskarn | `GUARD` | Filtre les entrants ; des entrées sans bruit |
| 71 | Douanier des Ombres | Registre des visiteurs | Porte de Duskarn | `SERVICE` | Tient le registre ; des noms d'ombre |
| 72 | Guetteur des Remparts | Vigie des murs | Remparts du canyon | `SERVICE` | Surveille ; des ombres qui dansent la nuit |
| 73 | Sonneur d'Alarme | Carillon d'éclipse | Remparts du canyon | `SERVICE` | Sonne l'Éclipse ; sonne quand il ne devrait pas |
| 74 | Palefrenier Nocturne | Montures à louer | Porte de Duskarn | `SERVICE` | Loue montures ; une monture qui hennit dans le noir |
| 75 | Maréchal des Ailes | Soins des montures | Porte de Duskarn | `SERVICE` | Ferrage des montures ; un fer qui sonne creux |
| 76 | Veilleur de Nuit | Ronde de nuit | Porte de Duskarn | `GUARD` | Patrouille de nuit ; des pas qui claquent seuls |
| 77 | Veilleur de Jour | Ronde de jour | Porte de Duskarn | `SERVICE` | Routinier ; une ombre sans maître |
| 78 | Coursier des Ombres | Messager urbain | itinérant | `SERVICE` | Porte messages ; un pli qui chuchote |
| 79 | Guide des Visiteurs | Accueil à la Porte | Porte de Duskarn | `SERVICE` | Guide les nouveaux ; un visiteur sans ombre |
| 80 | Prêtre du Voile | Clergé de l'ombre | Autel de Résurrection | `SERVICE` | Bénit les Imp ; un chant qui guérit trop bien |
| 81 | Prêtresse des Ténèbres | Clergé du silence | Autel de Résurrection | `SERVICE` | Prie pour le silence ; un silence qui dure |
| 82 | Acolyte de l'Ombre | Novice | Autel de Résurrection | `SERVICE` | Apprenti ; des pas qui résonnent sans corps |
| 83 | Vestale de l'Encre | Gardienne des rites | Autel de Résurrection | `SERVICE` | Rites d'encre ; un rite qui assourdit |
| 84 | Nécromancien des Ombres | Résurrection noire | Caverne des Hurleurs (interdit) | `BLACK_MARKET` | Ranime les morts ; un mort qui dénonce |
| 85 | Fossoyeur de l'Encre | Enterre les morts | Autel de Résurrection | `SERVICE` | Enterre les défunts ; un corps qui frémit |
| 86 | Garde du Balcon Intérieur | Garde rapprochée Seigneur | Balcon du Conseil | `GUARD` | Protège le Seigneur ; le Seigneur n'est pas toujours le Seigneur |
| 87 | Intendant du Balcon | Gestion du trésor | Balcon du Conseil | `SERVICE` | Gère les fonds ; de l'or qui tintinnabule |
| 88 | Ombre du Balcon | Espion du Chancelier | Balcon du Conseil | `SERVICE` | Agent secret ; voit le vrai visage des alliés |
| 89 | Gardien du Mémorial | Mémorial des morts | Bazar des Ombres | `SERVICE` | Liste des morts ; un nom qui résonne |
| 90 | Réfugié Salamander | Fuyard de Voulg | Canyon des Ombres | `SERVICE` | Fuit Duskarn ; sait pourquoi Malakor `NPC_VOU_03` a fui Voulg |
| 91 | Marchand Spriggan | Visiteur Spriggan | Bazar des Ombres | `MERCHANT` | Commerce poisons contre info ; lien Penwether |
| 92 | Courtier Voulg | Diplomate de Voulg | Bazar des Ombres | `SERVICE` | Commerce avec Voulg ; connaît Malakor `NPC_VOU_03` |
| 93 | Trafiquant Gnome | Gemmes contre cristaux | Bazar des Ombres | `MERCHANT` | Trafic inter-cités ; lien Granzam |
| 94 | Courtier Inter-Racial | Négociant neutre | Bazar des Ombres | `BLACK_MARKET` | Achète/revente ; couverture du Pacte Imp–Spriggan |
| 95 | Vétéran des Chœurs | Ancien ménéstrel | Nid de Guet | `QUEST_GIVER` | A chanté pour le Seigneur ; sait ce que l'ombre cache |
| 96 | Instructeur Novices | Entraînement ténèbres | Canyon des Ombres | `SKILL_MASTER` | Forme les nouveaux ; un élève qui voit dans le noir |
| 97 | Prêteur Occulte | Prêts d'âme | Bazar des Ombres (caché) | `BLACK_MARKET` | Prête contre souvenirs ; un client qui a tout oublié |
| 98 | Oracle des Ténèbres | Prophétesse de la Rivière | Rivière d'Encre | `QUEST_GIVER` | Prédictions par l'encre ; hooks orchestrateur |
| 99 | Mémoire de Duskarn | Ancienne sage de la cité | Balcon du Conseil | `QUEST_GIVER` | Se souvient de la fondation ; clef fil méta |

**Fiches produites** : `pnj/duskarn/` — ✅ 100/100 (`NPC_DUS_00-99`, gabarit D17, émoji 🌑). Lien Malakor `NPC_VOU_03` honoré via DUS_90/DUS_92/DUS_91. Quotas D34 respectés (SERVICE 46, GUARD 12, MERCHANT 22, QUEST_GIVER 9, SKILL_MASTER 5, LORD 2, BLACK_MARKET 4).

---

## ROSTER GRANZAM (`ZONE_GNO_CAP_001`) — lot 2.10 (D20)

> **Émoji d'en-tête** : ⛏️ (marteau/granit). **Fichiers** : `pnj/granzam/npc_gra_<nn>_<slug>.md`.
> **Différenciateur** : capitale Gnome — forteresse de granit évidée, capitale mondiale du minage et des gemmes, banque inviolable, mithril (exclusivité D15). Ton : pierre définitive, courses des minerais pilotées par le Cardinal, rivalité codifiée avec les Leprechauns, escarmouches au sud avec les Salamanders.
> **Notables `01-07`** : issus du lore `capitale_granzam.md`.
> **Sous-lieux** : Grande Halle des Minerais · Bastion de l'Ouest · Atelier des Profondeurs · Porte des Convois · Salle du Conseil de Pierre · Banque de Granzam · Autel de Résurrection · Portail · Steppes de Granit · Carrières Brisées · Mine de Mithril Abandonnée · Route Aérienne Granzam–Alne · Lac Souterrain.

**Fils rouges de Granzam** (6) :

| Fil | PNJ porteurs | Nature |
|---|---|---|
| **⛏️ Le Filon Qui Chante** | Durgan 01, Prospectrice 05, Cartographe 17, Vieux Mineur 65, Oracle 98 | Une veine résonne et révèle des strates qui ne devraient pas exister |
| **💎 La Gemme Qui Voit** | Marla 02, Alchimiste Gemmes 35, Marchand Gemmes 66, Nécromancien 84 | Une gemme enregistre les scenes sans qu'on la regarde |
| **🏔️ Le Poids de la Montagne** | Margrim 06, Doyen 27, Mémorial 97, Mémoire 99 | La montagne porte un poids qui n'est pas que de la roche (fardeau du serveur) |
| **🔥 La Rivalité de Sang** | Bofrik 03, Sentinelle Carrières 56, Réfugié 90, Trafiquant 93 | Vol de filons codifié Leprechaun / escarmouches Salamander non codifiées |
| **🔒 Le Coffre Qui Respire** | Banquier 30, Intendant 87, Ombre 88, Receleur 48 | La banque inviolable cache une chambre qui bat |
| **🔮 Fil méta — Le Noyau de Pierre** | 00, Lord 07, Mémoire 99, Oracle 98, Margrim 06 | Granzam = noyau de structure matérielle du serveur (la pierre = seed du monde) |

| NN | Nom | Rôle | Sous-lieu | `role_type` | Angle narratif |
|---|---|---|---|---|---|
| 00 | Le Cœur de Granit | **PNJ caché** (noyau de structure) | Salle du Conseil (soubassement) | `SERVICE` | Bloc de granit vivant ; contient le seed matériel du serveur |
| 01 | Contremaître Durgan | Maître du Minage & Magie de Terre | Grande Halle des Minerais | `SKILL_MASTER` | Enseigne le minage ; a entendu la montagne chanter |
| 02 | Négociante Marla | Bourse des minerais | Grande Halle des Minerais | `MERCHANT` | Cours pilotés par le Cardinal ; une gemme qui voit |
| 03 | Armurier Bofrik | Armures lourdes / boucliers-tours | Bastion de l'Ouest | `SKILL_MASTER` | Forge le lourd ; rivauté Leprechaun codifiée |
| 04 | Ingénieur Cog | Outils, explosifs de mine | Atelier des Profondeurs | `MERCHANT` | Vend pitons/lanternes ; un outil qui ne s'use pas |
| 05 | Prospectrice Helga | Quêtes de prospection | Porte des Convois | `QUEST_GIVER` | Détecte les filons chantants ; un filon qui ment |
| 06 | Doyen Margrim | Chaîne « Le Poids de la Montagne » | Salle du Conseil de Pierre | `QUEST_GIVER` | Porte le fardeau de la montagne ; sait ce qu'elle cache |
| 07 | Lord Gnome | Lord (hologramme) | Salle du Conseil de Pierre | `LORD` | Panneau politique ; ne parle qu'en sismicité |
| 08 | Chancelier de Pierre | Gouvernance (régent) | Salle du Conseil | `GUARD` | Dirige Granzam ; a vu la montagne frémir |
| 09 | Commandant du Bastion | Commandant de la Garde | Bastion de l'Ouest | `GUARD` | Protège la forteresse ; une ronde qui ne revient pas |
| 10 | Gardien Steppes | Patrouille Steppes de Granit | Steppes de Granit (`HUNT_001`) | `GUARD` | Frontière sud Salamander ; un éboulis qui avance |
| 11 | Guide Steppes | Guide chasse Steppes | Steppes de Granit | `QUEST_GIVER` | Connaît les créatures ; une bête de roche vivante |
| 12 | Marchand de Fer | Minerai de fer | Steppes de Granit | `MERCHANT` | Vend fer ; un lingot qui bat |
| 13 | Gardien Carrières | Patrouille Carrières Brisées | Carrières Brisées (`HUNT_002`) | `GUARD` | Frontière Leprechaun ; un filon volé la nuit |
| 14 | Pisteur Carrières | Traqueur des carrières | Carrières Brisées | `QUEST_GIVER` | Piste les voleurs de filons ; une empreinte de nain |
| 15 | Marchand de Granit | Granit brut | Carrières Brisées | `MERCHANT` | Vend pierre ; un bloc qui pèse le double |
| 16 | Gardien Mine Mithril | Sentinelle donjon | Mine de Mithril (`DUN_001`) | `GUARD` | Registre des raids ; un groupe entré sans lampe |
| 17 | Cartographe Mine | Cartes des galeries | Mine de Mithril | `SERVICE` | Plans de la mine ; une salle marquée « sèche » |
| 18 | Vigie Route | Contrôleur route aérienne | Route Aérienne Granzam–Alne (`ROUTE`) | `GUARD` | Compte les vols ; des convois qui disparaissent |
| 19 | Marchand de Vol | Potions de vol/buffs | Route Aérienne (Îlot) | `MERCHANT` | Buffs ; voit des ombres porter des cailloux |
| 20 | Concierge Halle | Entretien Grande Halle | Grande Halle des Minerais | `SERVICE` | Nettoie ; une pépite qui roule seule |
| 21 | Apprenti Mineur | Élève mineur | Grande Halle | `SERVICE` | Apprend le métier ; une pioche qui frappe seule |
| 22 | Maître Forgeron | Forge des lames | Atelier des Profondeurs | `SKILL_MASTER` | Forge les outils ; une lame qui chante faux |
| 23 | Scribe du Conseil | Notation des édits | Salle du Conseil | `SERVICE` | Écrit les décrets ; un édit gravé tout seul |
| 24 | Restaurateur Outils | Réparation d'outils | Atelier des Profondeurs | `SERVICE` | Répare ; un outil qui gémit |
| 25 | Pêcheur Souterrain | Poisson du Lac Souterrain | Lac Souterrain | `MERCHANT` | Truite des cavernes ; un poisson qui regarde |
| 26 | Archiviste du Conseil | Gardien des cartes | Salle du Conseil | `SERVICE` | Catalogue les plans ; une carte qui se complète |
| 27 | Vice-Chancelier | Second du régent | Salle du Conseil | `LORD` | Remplace le Chancelier ; sait que le Lord est un hologramme |
| 28 | Huissier du Conseil | Accueil de la Salle | Salle du Conseil | `SERVICE` | Filtre les entrants ; un visiteur sans ombre de poussière |
| 29 | Bibliothécaire | Gestion des ouvrages | Salle du Conseil | `SERVICE` | Ouvrages de géologie ; un livre qui tombe ouvert |
| 30 | Banquier de Granzam | Gardien des coffres | Banque de Granzam | `GUARD` | Coffres inviolables ; une salle qui respire |
| 31 | Marchand de Fer Fin | Fer de qualité | Grande Halle | `MERCHANT` | Fer affiné ; un lingot qui sonne creux |
| 32 | Loueur d'Outils | Location d'outils | Atelier des Profondeurs | `MERCHANT` | Location pioches ; un outil maudit |
| 33 | Armurier Adjoint | Armes lourdes | Bastion de l'Ouest | `MERCHANT` | Boucliers ; un bouclier qui pèse le double |
| 34 | Vendeur de Boucliers | Boucliers-tours | Bastion de l'Ouest | `MERCHANT` | Boucliers ; un qui bloque sans porteur |
| 35 | Alchimiste des Gemmes | Sertissage/potions | Grande Halle | `MERCHANT` | Enchâsse les gemmes ; une gemme qui voit |
| 36 | Marchand de Granit Fin | Granit décoratif | Carrières Brisées | `MERCHANT` | Granit poli ; un bloc qui pulse |
| 37 | Marchand de Charpente | Bois de sapin | Steppes de Granit | `MERCHANT` | Bois ; une poutre qui craque seule |
| 38 | Marchand de Mousses | Mousse de caillasse | Éboulis | `MERCHANT` | Plantes ; une mousse qui pousse à l'envers |
| 39 | Crieur de la Halle | Annonces du marché | Grande Halle | `SERVICE` | K0 ambulant ; crie des cours qui ne bougent pas |
| 40 | Tavernier du Socle | Taverne « Le Socle » | Grande Halle | `SERVICE` | Bière de caverne ; entend les convois |
| 41 | Serveuse du Socle | Servante de taverne | Grande Halle | `SERVICE` | Sert ; un client qui boit dans le noir |
| 42 | Cuisinier de Roche | Cuisine buff pierre | Grande Halle | `SERVICE` | Plats qui buffent ; un ingrédient qui gratte |
| 43 | Barde des Profondeurs | Ménestrel | Grande Halle | `SERVICE` | Chansons de mine ; une chanson qui éboule |
| 44 | Aubergiste du Socle | Auberge | Grande Halle | `SERVICE` | Chambres ; la chambre qui sent le fer |
| 45 | Parieur de Convois | Paris sur convois | Grande Halle | `SERVICE` | Paris ; un convoi truqué |
| 46 | Concierge Auberge | Coffres de l'auberge | Grande Halle | `SERVICE` | Coffres ; un coffre qui gémit |
| 47 | Marchand Itinérant | Colporteur inter-cités | itinérant | `MERCHANT` | Lien marchands Alne/Voulg/Freelia |
| 48 | Receleur de Gemmes | Marché noir | Banque (caché) | `BLACK_MARKET` | Gemmes volées ; une gemme qui voit |
| 49 | Guide des Nouveaux | Accueil des visiteurs | Porte des Convois | `QUEST_GIVER` | Tutoriel ; montre la forteresse |
| 50 | Éclaireur des Remparts | Vigie des remparts | Remparts de granit | `SERVICE` | Surveille ; des formes qui creusent la nuit |
| 51 | Marchand de Lanternes | Lanternes à gemmes | Atelier des Profondeurs | `MERCHANT` | Éclairage ; une lanterne qui ne s'éteint pas |
| 52 | Maître des Explosifs | Enseignement artificier | Atelier des Profondeurs | `SKILL_MASTER` | Enseigne les explosifs ; une charge qui frémit |
| 53 | Minéralogiste | Lecture des veines | Grande Halle | `SERVICE` | Lit les strates ; une veine qui chante |
| 54 | Stratège du Bastion | Défense par la pierre | Bastion de l'Ouest | `SERVICE` | Plans ; un ennemi qu'il voit seul |
| 55 | Vétéran des Guerres | Ancien combattant | Porte des Convois | `QUEST_GIVER` | A combattu au sud ; sait quel traité cache la paix |
| 56 | Sentinelle des Carrières | Garde frontière Leprechaun | Carrières Brisées | `GUARD` | Veille le pacte ; un accord signé dans la roche |
| 57 | Dame de Compagnie | Suivante du Lord | Salle du Conseil | `SERVICE` | Sert le Lord ; sait quand il ne joue pas juste |
| 58 | Scribe Royal | Scribe de la Cour | Salle du Conseil | `SERVICE` | Écrit ; un édit non signé |
| 59 | Héraut du Conseil | Messager du Lord | Salle du Conseil | `SERVICE` | Annonce ; une nouvelle qu'il n'a pas criée |
| 60 | Maître Forgeron Lames | Forge des lames fines | Atelier des Profondeurs | `SKILL_MASTER` | Lames légendaires ; une qui ne s'émousse pas |
| 61 | Enchanteur d'Armes | Enchantements de terre | Bastion de l'Ouest | `SERVICE` | Enchante ; un sort qui s'attache seul |
| 62 | Apprenti Forgeron | Élève de Bofrik | Atelier des Profondeurs | `SERVICE` | Apprend ; une lame qui chante faux |
| 63 | Archiviste Interdit | Plans secrets | Mine de Mithril (caché) | `SERVICE` | Plans interdits ; un plan qui annule la roche |
| 64 | Gardien du Donjon | Garde de la Mine | Mine de Mithril | `GUARD` | Protège l'entrée ; a entendu le noyau fissuré |
| 65 | Vieux Mineur | Ancien mineur retraité | Porte des Convois | `SERVICE` | A tout vu ; une carte qu'il a brûlée |
| 66 | Marchand de Gemmes Fines | Gemmes brutes | Grande Halle | `MERCHANT` | Joyaux ; une gemme qui bat |
| 67 | Marchand de Minerais Rares | Minerais rares | Grande Halle | `MERCHANT` | Minerais ; un qui brille sans lampe |
| 68 | Marchand de Mithril | Mithril (exclusivité D15) | Mine de Mithril | `MERCHANT` | Mithril ; un lingot qui ne pèse rien |
| 69 | Vendeur de Noyaux | Noyaux de golem | Steppes de Granit | `MERCHANT` | Noyaux ; un qui pulsait encore |
| 70 | Gardien de la Porte | Garde de la Porte | Porte de Granzam | `GUARD` | Filtre ; des entrées sans bruit |
| 71 | Douanier des Pierres | Registre des visiteurs | Porte de Granzam | `SERVICE` | Tient le registre ; des noms de roche |
| 72 | Guetteur des Remparts | Vigie des murs | Remparts | `SERVICE` | Surveille ; des ombres qui creusent |
| 73 | Sonneur d'Alarme | Carillon de effondrement | Remparts | `SERVICE` | Sonne l'éboulement ; sonne quand il ne devrait pas |
| 74 | Palefrenier de Roche | Montures à louer | Porte de Granzam | `SERVICE` | Loue montures ; une monture qui hennit dans le noir |
| 75 | Maréchal des Sabots | Soins des montures | Porte de Granzam | `SERVICE` | Ferrage ; un fer qui sonne creux |
| 76 | Veilleur de Nuit | Ronde de nuit | Porte de Granzam | `GUARD` | Patrouille ; des pas qui grimpent seuls |
| 77 | Veilleur de Jour | Ronde de jour | Porte de Granzam | `SERVICE` | Routinier ; une ombre sans maître |
| 78 | Coursier des Pierres | Messager urbain | itinérant | `SERVICE` | Porte messages ; un pli qui tombe |
| 79 | Guide des Visiteurs | Accueil à la Porte | Porte de Granzam | `SERVICE` | Guide ; un visiteur sans ombre |
| 80 | Prêtre du Socle | Clergé de la pierre | Autel de Résurrection | `SERVICE` | Bénit ; un chant qui guérit trop bien |
| 81 | Prêtresse des Veines | Clergé du silice | Autel de Résurrection | `SERVICE` | Prie ; un silence qui dure |
| 82 | Acolyte de la Roche | Novice | Autel de Résurrection | `SERVICE` | Apprenti ; des pas qui résonnent sans corps |
| 83 | Vestale du Granit | Gardienne des rites | Autel de Résurrection | `SERVICE` | Rites ; un rite qui assourdit |
| 84 | Nécromancien des Gemmes | Résurrection noire | Mine de Mithril (interdit) | `BLACK_MARKET` | Ranime ; un mort qui dénonce via gemme |
| 85 | Fossoyeur de Roche | Enterre les morts | Autel de Résurrection | `SERVICE` | Enterre ; un corps qui frémit |
| 86 | Garde du Conseil Intérieur | Garde rapprochée Lord | Salle du Conseil | `GUARD` | Protège le Lord ; le Lord n'est pas toujours le Lord |
| 87 | Intendant du Conseil | Gestion du trésor | Salle du Conseil | `SERVICE` | Gère les fonds ; de l'or qui tintinnabule |
| 88 | Ombre du Conseil | Espion du Chancelier | Salle du Conseil | `SERVICE` | Agent secret ; voit le vrai visage des alliés |
| 89 | Gardien du Mémorial | Mémorial des mineurs morts | Grande Halle | `SERVICE` | Liste des morts ; un nom qui résonne |
| 90 | Réfugié Salamander | Fuyard de Voulg | Steppes de Granit | `SERVICE` | Fuit Granzam ; sait pourquoi Balrog `NPC_VOU_04` est parti |
| 91 | Marchand Leprechaun | Visiteur Leprechaun | Grande Halle | `MERCHANT` | Commerce gemmes contre mithril ; lien Brokkheim |
| 92 | Courtier d'Alne | Diplomate d'Alne | Salle du Conseil | `SERVICE` | Commerce avec Alne ; connaît Bomil `NPC_ALN_93` |
| 93 | Trafiquant de Gemmes | Trafic inter-cités | Grande Halle (caché) | `BLACK_MARKET` | Gemmes source ; liens Torvin `NPC_SWI_93`, Ilka `NPC_GAT_33`, Balrog `NPC_VOU_04` |
| 94 | Courtier Inter-Racial | Négociant neutre | Grande Halle | `BLACK_MARKET` | Achète/revente ; couverture du réseau de gemmes |
| 95 | Vétéran des Convois | Ancien convoyeur | Porte des Convois | `QUEST_GIVER` | A convoyé pour le Conseil ; sait ce que la montagne cache |
| 96 | Instructeur Novices | Entraînement minage | Steppes de Granit | `SKILL_MASTER` | Forme les nouveaux ; un élève qui entend la roche |
| 97 | Mémorial des Fondations | Mémorial de la montagne | Salle du Conseil | `SERVICE` | Pierres de fondation ; une qui pèse le fardeau |
| 98 | Oracle des Veines | Prophétesse de la mine | Mine de Mithril | `QUEST_GIVER` | Prédictions par les veines ; hooks orchestrateur |
| 99 | Mémoire de Granzam | Ancienne sage de la cité | Salle du Conseil | `QUEST_GIVER` | Se souvient de la fondation ; clef fil méta |

**Fiches produites** : `pnj/granzam/` — ✅ 100/100 (`NPC_GRA_00-99`, gabarit D17, émoji ⛏️). Liens inter-cités honorés : Bomil `NPC_ALN_93` via GRA_92, Torvin `NPC_SWI_93` + Ilka `NPC_GAT_33` + Balrog `NPC_VOU_04` via GRA_90/GRA_93. Quotas D34 respectés (SERVICE 46, MERCHANT 21, GUARD 12, QUEST_GIVER 9, SKILL_MASTER 6, LORD 2, BLACK_MARKET 4).

---

## ROSTER BROKKHEIM (`ZONE_LEP_CAP_001`) — lot 2.11 (D20)

> **Émoji d'en-tête** : 🔨 (marteau/forge). **Fichiers** : `pnj/brokkheim/npc_bro_<nn>_<slug>.md`.
> **Différenciateur** : capitale Leprechaun — construite sur un champ de geysers domestiqués, mille enclumes battent « le Pouls », capitale mondiale de l'artisanat et de la forge. Ton : vapeur, enclumes, cuivre et laiton, rythme continu des forges. Le mithril est l'exclusivité D15 ; les automates de service sont la fierté locale. Rivalité minière codifiée avec Gnomes, pacte de lames contre eau pure avec Undines, commerce avec Sylphes (alliage inconnu de Brokkr).
> **Notables `01-07`** : issus du lore `capitale_brokkheim.md`.
> **Sous-lieux** : Forge-Mère · Halle du Marteau · Conseil des Guildes (Balcon) · Quai des Finitions · Atelier Cliquetant · Canaux de Refroidissement · Bassins Chauds · Terrils Publics · Vallée des Geysers (`HUNT_001`) · Champs de Scories (`HUNT_002`) · Atelier Englouti (`DUN_001`) · Route Aérienne Brokkheim–Alne (`ROUTE`) · Manufacture d'Automates · Autel de Résurrection · Portail.

**Fils rouges de Brokkheim** (6) :

| Fil | PNJ porteurs | Nature |
|---|---|---|
| **🔨 Le Pouls** | Brokk IX 01, Maître Trempe 22, Vigie Route 18, Oracle 98 | Le rythme des forges = battement du serveur ; le Pouls est un processeur matériel |
| **⚙️ Les Automates** | Vera 04, Ingénieur 45, Réparateur 46, Receleur 48 | Automates de service qui acquièrent une conscience résiduelle du Cardinal |
| **🔥 La Trempe Légendaire** | Nilsa 06, Maître Alliage 23, Maître Finitions 40, Forgeron Lames 70 | Objets forgés hors dictionnaire d'items — le secret de Brokk contre le Cardinal |
| **💧 Le Pacte des Eaux** | Marchand Eau 26, Alchimiste Eaux 28, Marchand Undine 91 | Lames trempées contre eau pure des Undines ; commerce vitieux qui cache un trafic |
| **⛏️ La Rivalité des Mineurs** | Espion Granzam 87, Trafiquant Rival 93, Réfugié Gnome 90 | Concurrence minière codifiée qui dégénère ; mithril vs gemmes |
| **🔮 Fil méta — L'Enclume du Cardinal** | 00, Lord 07, Mémoire 99, Oracle 98, Brokk IX 01 | Brokkheim = forge du serveur ; le Pouls = fréquence processeur ; l'Enclume originelle est le compilateur du monde |

| NN | Nom | Rôle | Sous-lieu | `role_type` | Angle narratif |
|---|---|---|---|---|---|
| 00 | Le Pouls | **PNJ caché** (noyau rythmique) | Forge-Mère (soubassement, −7) | `SERVICE` | Fréquence processeur du serveur ; rythme cardiaque du monde matériel |
| 01 | Grand Forgeron Brokk IX | Maître de Forge | Forge-Mère | `SKILL_MASTER` | Héritier du fondateur ; entend le Pouls parler |
| 02 | Émailleuse Sylla | Enchantements armes | Quai des Finitions | `MERCHANT` | Runes qui brillent sans source |
| 03 | Marchand Rune | Outils de forge | Halle du Marteau | `MERCHANT` | Enclumes portatives ; une qui forge seule |
| 04 | Maîtresse Vera | Automates de service | Atelier Cliquetant | `MERCHANT` | Vend et répare ; un automate qui parle |
| 05 | Prêteur Fenn | Rachat / enchères | Halle du Marteau | `MERCHANT` | Pièces uniques ; une enchère sans enchérisseur |
| 06 | Apprentie Nilsa | Chaîne « Les Sept Trempes » | Forge-Mère | `QUEST_GIVER` | Prodige de la forge ; voit les lignes de trempe du serveur |
| 07 | Lord Leprechaun | Lord (hologramme) | Balcon du Conseil | `LORD` | Panneau politique ; élu parmi les maîtres-forgerons ; programmé |
| 08 | Chancelier des Forges | Gouvernance (régent) | Conseil des Guildes | `LORD` | Dirige Brokkheim ; le Pouls bat dans sa poitrine |
| 09 | Commandant des Gardes | Commandant de la Milice | Halle du Marteau | `GUARD` | Protège la ville ; des gardes qui reviennent sans mémoire |
| 10 | Gardien Vallée | Patrouille Vallée des Geysers | Vallée des Geysers (`HUNT_001`) | `GUARD` | Frontière sud ; un geyser qui ne s'arrête jamais |
| 11 | Guide Vallée | Guide chasse Vallée | Vallée des Geysers | `QUEST_GIVER` | Connaît la faune ; une salamandre qui crache du métal |
| 12 | Marchand de Soufre | Soufre cristallisé | Vallée des Geysers | `MERCHANT` | Soufre de qualité ; un cristal qui chauffe sans feu |
| 13 | Gardien Scories | Patrouille Champs de Scories | Champs de Scories (`HUNT_002`) | `GUARD` | Frontière ouverte ; des scories qui marchent |
| 14 | Pisteur Scories | Traqueur des scories | Champs de Scories | `QUEST_GIVER` | Piste les automates égarés ; une empreinte de métal |
| 15 | Marchand de Scories | Scories et résidus | Champs de Scories | `MERCHANT` | Résidus de forge ; scorie qui pèse le poids d'une âme |
| 16 | Gardien Atelier | Sentinelle donjon | Atelier Englouti (`DUN_001`) | `GUARD` | Registre des raids ; un groupe entré sans bruit |
| 17 | Cartographe Atelier | Cartes de l'Atelier | Atelier Englouti | `SERVICE` | Plans des salles ; une salle marquée « compilateur » |
| 18 | Vigie Route | Contrôleur route aérienne | Route Aérienne BRO–ALN (`ROUTE`) | `GUARD` | Compte les vols ; des convois d'enclumes sans porteur |
| 19 | Marchand de Vol | Potions de vol / buffs | Route Aérienne (îlot) | `MERCHANT` | Buffs ; voit des ombres qui forgent dans le ciel |
| 20 | Concierge Forge-Mère | Entretien Forge-Mère | Forge-Mère | `SERVICE` | Nettoie ; une enclume qui sonne sans marteau |
| 21 | Apprenti Forgeron | Élève forgeron | Forge-Mère | `SERVICE` | Apprend le métier ; un marteau qui frappe seul |
| 22 | Maître Trempe | Enseignement trempe | Forge-Mère | `SKILL_MASTER` | Maître des secrets de trempe ; eau qui bout sans chaleur |
| 23 | Maître Alliage | Alliages rares | Forge-Mère | `SKILL_MASTER` | Crée des alliages ; un métal qui change de couleur seul |
| 24 | Restaurateur Enclumes | Réparation d'enclumes | Forge-Mère | `SERVICE` | Répare les enclumes ; une qui gémit la nuit |
| 25 | Pêcheur des Canaux | Poisson des canaux | Canaux de Refroidissement | `MERCHANT` | Anguille bouillante ; une anguille qui brille |
| 26 | Marchand d'Eau Pure | Eau de trempe | Canaux de Refroidissement | `MERCHANT` | Eau pure pour trempe ; une goutte qui pèse |
| 27 (MERCHANT) | Baigneur des Bassins | Bains thermaux | Bassins Chauds | `MERCHANT` | Bains publics ; un baigneur qui ne vieillit pas |
| 28 | Alchimiste des Eaux | Potions d'eau | Canaux de Refroidissement | `MERCHANT` | Mélanges d'eaux ; Pacte avec Undines |
| 29 | Plongeur des Canaux | Objets des canaux | Canaux de Refroidissement | `MERCHANT` | Trouve des objets ; une pièce qui tourne seule |
| 30 | Garde de la Halle | Garde du marché | Halle du Marteau | `GUARD` | Surveille le marché ; un voleur qui disparaît |
| 31 | Marchand de Lames | Lames courantes | Halle du Marteau | `MERCHANT` | Épées/dagues ; une lame qui vibre |
| 32 | Marchand d'Armures | Armures légères | Halle du Marteau | `MERCHANT` | Cottes, broignes ; un heaume qui murmure |
| 33 | Marchand d'Outils | Outils de forge | Halle du Marteau | `MERCHANT` | Marteaux, pinces ; un outil qui travaille seul |
| 34 | Marchand de Gemmes | Gemmes décoratives | Halle du Marteau | `MERCHANT` | Gemmes serties ; lien rivalité Granzam |
| 35 | Alchimiste Alliages | Alliages de vente | Halle du Marteau | `MERCHANT` | Alliages prêts à forger ; un alliage qui respire |
| 36 | Forgeron Ambulant | Forge itinérante | Halle du Marteau | `MERCHANT` | Forge en déplacement ; un soufflet qui pompe seul |
| 37 | Marchand Métaux Rares | Métaux exotiques | Halle du Marteau | `MERCHANT` | Mithril, adamantium ; un lingot trop chaud |
| 38 | Crieur de la Halle | Annonces du marché | Halle du Marteau | `SERVICE` | K0 ambulant ; crie des prix qui ne changent pas |
| 39 | Encanteur des Forges | Ventes aux enchères | Halle du Marteau | `MERCHANT` | Enchères ; une pièce qui s'auto-encante |
| 40 | Maître des Finitions | Enseignement finitions | Quai des Finitions | `SKILL_MASTER` | Polissage, gravure ; une finition qui s'applique seule |
| 41 | Polisseur d'Armes | Polissage | Quai des Finitions | `SERVICE` | Polir les lames ; un reflet qui montre autre chose |
| 42 | Graveur de Runes | Gravure runique | Quai des Finitions | `SERVICE` | Graver des runes ; une rune qui brûle |
| 43 | Enchanteur du Quai | Enchantements de surface | Quai des Finitions | `SERVICE` | Enchante ; un sort qui dure trop |
| 44 | Vernisseur de Lames | Vernis protecteur | Quai des Finitions | `SERVICE` | Vernis ; un vernis qui ne sèche pas |
| 45 | Ingénieur Automates | Conception automates | Atelier Cliquetant | `SERVICE` | Conçoit les automates ; un plan qui bouge |
| 46 | Réparateur Automates | Entretien automates | Atelier Cliquetant | `SERVICE` | Répare ; une pièce qui manque dans tous |
| 47 | Programmeur Automates | Codage automates | Atelier Cliquetant | `SERVICE` | Programme les routines ; un automate qui improvise |
| 48 | Receleur d'Automates | Pièces volées | Atelier Cliquetant (cache) | `BLACK_MARKET` | Pièces d'automate ; un œil qui cligne |
| 49 | Guide des Automates | Visite atelier | Atelier Cliquetant | `SERVICE` | Montre les automates ; un qui salue |
| 50 | Charbonnier des Terrils | Charbon de forge | Terrils Publics | `SERVICE` | Produit le charbon ; un bloc qui rougit seul |
| 51 | Trieur de Scories | Tri des résidus | Terrils Publics | `SERVICE` | Trie les scories ; un résidu qui pulse |
| 52 | Marchand de Charbon | Charbon de qualité | Terrils Publics | `MERCHANT` | Charbon ; une braise qui ne s'éteint pas |
| 53 | Souffleur de Verre | Verre artisanal | Terrils Publics | `SERVICE` | Verre soufflé ; une bulle qui renvoie le Pouls |
| 54 | Garde des Terrils | Patrouille Terrils | Terrils Publics | `GUARD` | Surveille les réserves ; des vols de charbon |
| 55 | Vétéran des Guerres | Ancien combattant | Halle du Marteau | `QUEST_GIVER` | A combattu les Gnomes ; sait ce que cache le traité |
| 56 | Prospecteur de Geysers | Quêtes de prospection | Vallée des Geysers | `QUEST_GIVER` | Cherche de nouveaux geysers ; un qui saigne de l'or |
| 57 | Marchand de Soufre Fin | Soufre raffiné | Vallée des Geysers | `MERCHANT` | Soufre pur ; un qui brûle froid |
| 58 | Dompteur de Feux Follets | Domptage feux follets | Champs de Scories | `SERVICE` | Capture les feux ; un qui parle |
| 59 | Piqueur de Terrils | Minage des terrils | Terrils Publics | `SERVICE` | Creuse les scories ; un pic qui frappe sans lui |
| 60 | Scribe du Conseil | Notation des édits | Conseil des Guildes | `SERVICE` | Écrit les lois ; un édit qui s'efface |
| 61 | Huissier du Conseil | Accueil du Conseil | Conseil des Guildes | `SERVICE` | Filtre les entrants ; un visiteur qui sent le soufre |
| 62 | Archiviste des Plans | Plans de forges | Conseil des Guildes | `SERVICE` | Plans de la ville ; un plan qui se complète |
| 63 | Bibliothécaire | Ouvrages de forge | Conseil des Guildes | `SERVICE` | Livres de métallurgie ; un tome qui claque |
| 64 | Héraut du Conseil | Messager du Lord | Conseil des Guildes | `SERVICE` | Annonce ; une nouvelle qu'il n'a pas lue |
| 65 | Dame de Compagnie | Suivante du Lord | Conseil des Guildes | `SERVICE` | Sert le Lord ; sait quand il reset |
| 66 | Intendant du Conseil | Gestion trésor | Conseil des Guildes | `SERVICE` | Gère les fonds ; des pièces qui tintent seules |
| 67 | Ombre du Conseil | Espion du Chancelier | Conseil des Guildes | `SERVICE` | Agent secret ; voit le vrai visage des guildes |
| 68 | Mémorial des Forgerons | Mémorial | Conseil des Guildes | `SERVICE` | Liste des maîtres ; un nom qui brille |
| 69 | Stratège du Conseil | Plans de défense | Conseil des Guildes | `SERVICE` | Plans contre les Gnomes ; un plan qui se trace seul |
| 70 | Maître Forgeron Lames | Lames légendaires | Manufacture d'Automates | `SKILL_MASTER` | Forge légendaire ; une lame hors dictionnaire |
| 71 | Apprenti Forgeur | Élève de Brokk IX | Forge-Mère | `SERVICE` | Apprend ; un marteau qui ne le lâche pas |
| 72 | Souffleur de Forge | Soufflets de forge | Manufacture | `SERVICE` | Active les soufflets ; un soufflet qui pompe sans air |
| 73 | Modeleur de Métal | Formes complexes | Manufacture | `SERVICE` | Façonne le métal ; une forme qui se modèle seule |
| 74 | Chaudronnier | Chaudronnerie | Manufacture | `SERVICE` | Chaudrons ; un qui bout sans feu |
| 75 | Gardien de la Porte | Garde entrée ville | Porte de Brokkheim | `GUARD` | Filtre ; des entrées sans bruit de pas |
| 76 | Douanier des Métaux | Registre des métaux | Porte de Brokkheim | `SERVICE` | Inventorie les métaux ; un lingot qui pèse plus au retour |
| 77 | Veilleur de Nuit | Ronde de nuit | Remparts | `GUARD` | Patrouille ; des pas de forge dans le noir |
| 78 | Veilleur de Jour | Ronde de jour | Remparts | `SERVICE` | Routinier ; une ombre de forge sans forgeron |
| 79 | Guide des Nouveaux | Accueil | Porte de Brokkheim | `SERVICE` | Guide ; montre la cité |
| 80 | Prêtre de la Flamme | Clergé du feu | Autel de Résurrection | `SERVICE` | Bénit les forges ; une flamme qui ne s'éteint pas |
| 81 | Prêtresse des Forges | Clergé de la forge | Autel de Résurrection | `SERVICE` | Prie pour les forgerons ; un silence pesant |
| 82 | Acolyte du Brasier | Novice | Autel de Résurrection | `SERVICE` | Apprenti ; des braises qui ne refroidissent pas |
| 83 | Vestale du Feu | Gardienne des rites | Autel de Résurrection | `SERVICE` | Rites du feu ; un rite qui cicatrise |
| 84 | Nécromancien des Cendres | Résurrection noire | Atelier Englouti (interdit) | `BLACK_MARKET` | Ranime les cendres ; un mort qui parle métal |
| 85 | Fossoyeur des Forges | Enterre les morts | Autel de Résurrection | `SERVICE` | Enterre ; un corps chaud |
| 86 | Garde du Conseil Intérieur | Garde rapprochée Lord | Conseil des Guildes | `GUARD` | Protège le Lord ; le Lord clignote parfois |
| 87 | Espion de Granzam | Agent gnome infiltré | Halle du Marteau (caché) | `BLACK_MARKET` | Infiltré pour les Gnomes ; sait où est le Pouls |
| 88 | Trafiquant de Mithril | Mithril volé | Manufacture (caché) | `BLACK_MARKET` | Vol de mithril ; un lingot qui ne pèse rien (car fake) |
| 89 | Gardien du Mémorial | Mémorial des forgerons morts | Forge-Mère | `SERVICE` | Liste des défunts ; un nom qui résonne |
| 90 | Réfugié Gnome | Fuyard de Granzam | Vallée des Geysers | `SERVICE` | Fuit Granzam ; sait pourquoi la gemme voit |
| 91 | Marchand Undine | Marchand d'eau pure | Canaux de Refroidissement | `MERCHANT` | Eau pure contre lames ; lien Archipel (Pacte des Eaux) |
| 92 | Courtier d'Alne | Diplomate d'Alne | Conseil des Guildes | `SERVICE` | Commerce avec Alne ; connaît Bomil `NPC_ALN_93` |
| 93 | Trafiquant Rival | Trafic inter-cités | Halle du Marteau (caché) | `BLACK_MARKET` | Rivaux des trafiquants Granzam ; liens mithril contre gemmes |
| 94 | Courtier Inter-Racial | Négociant neutre | Halle du Marteau | `MERCHANT` | Achète/revente ; couverture du réseau gemmes/mithril |
| 95 | Vétéran des Forges | Ancien maître-forgeron | Forge-Mère | `QUEST_GIVER` | A forgé pour le Conseil ; sait ce que le Pouls cache |
| 96 | Instructeur des Novices | Entraînement forge | Forge-Mère | `SKILL_MASTER` | Forme les nouveaux ; un élève qui forge sans apprentissage |
| 97 | Prêtre du Souvenir | Mémoire des défunts | Autel de Résurrection | `SERVICE` | Prie pour les disparus ; un nom qui brûle |
| 98 | Oracle des Geysers | Prophétesse des geysers | Vallée des Geysers | `QUEST_GIVER` | Prédictions par la vapeur ; hooks orchestrateur |
| 99 | Mémoire de Brokkheim | Ancienne sage de la cité | Conseil des Guildes | `QUEST_GIVER` | Se souvient de la fondation ; clef fil méta |

**Fiches produites** : `pnj/brokkheim/` — ✅ 100/100 (`NPC_BRO_00-99`, gabarit D17, émoji 🔨). Liens inter-cités honorés : Granzam via `NPC_BRO_90`, Undine via `NPC_BRO_91`, Alne `NPC_ALN_93` via `NPC_BRO_92`. Quotas D34 respectés (SERVICE 45, MERCHANT 24, GUARD 10, QUEST_GIVER 8, SKILL_MASTER 6, LORD 2, BLACK_MARKET 5).

---

## ROSTER PENWETHER (`ZONE_SPR_CAP_001`) — lot 2.12 (D20)

> **Émoji d'en-tête** : 🕯️ (lanterne/ombre). **Fichiers** : `pnj/penwether/npc_pen_<nn>_<slug>.md`.
> **Différenciateur** : capitale Spriggan — bâtie dans/sous/à travers les ruines d'une cité pré-Spriggan que personne n'a bâtie (« artefact du Cardinal »). Illusions civiques, rues changeantes, 6/7 façades de la banque sont fausses. Ton : ruines antiques, illusions, masques, vérité enterrée. Race de Kirito. Pacte des Ombres avec Duskarn, rivalité froide avec Gnomes (creusent les ruines).
> **Notables `01-07`** : issus du lore `capitale_penwether.md`.
> **Sous-lieux** : Marché des Sept Façades · Cloître Renversé · Atelier des Visages · Bibliothèque Enterrée · Cimetière Vertical · Porche Effondré · Salle du Conseil Voilé · Ruines Noires (`HUNT_001`) · Terres Grises (`HUNT_002`) · Nécropole Antique (`DUN_001`) · Route Aérienne PEN–ALN (`ROUTE`) · Autel de Résurrection · Portail · Citernes Antiques · Faubourg des Masques.

**Fils rouges de Penwether** (6) :

| Fil | PNJ porteurs | Nature |
|---|---|---|
| **🎭 Les Illusions Qui Mentent** | Prieur Vex 02, Marchand Illusions 33, Guide Ruines 49, Oracle 98 | Les illusions civiques sont des patchs du Cardinal pour cacher les ruines antiques |
| **📜 Ce Que Cachent les Ruines** | Archiviste 06, Cartographe 04, Fouilleur 45, Bibliothécaire 29 | Les ruines préexistaient au serveur — ce sont des artefacts de compilation du Cardinal |
| **💀 La Nécropole Ancestrale** | Fossoyeur Grim 05, Nécromancien 84, Gardien Nécropole 16, Vétéran 55 | La Nécropole respire — elle contient les « morts non compilés » du Cardinal |
| **🔑 Le Pacte des Ombres** | Réfugié Imp 90, Marchand Imp 91, Trafiquant 93, Ombre Conseil 67 | Alliance silencieuse avec Duskarn ; le Pacte garantit que les ruines restent secrètes |
| **🪞 La Statue de Kirito** | Masquier Orin 03, Archiviste 06, Dame Compagnie 65, Fou du Conseil 68 | La statue de Kirito à Penwether est volontairement fausse — pour masquer la connexion entre le Spriggan noir et le serveur |
| **🔮 Fil méta — La Ville Fantôme** | 00, Chancelier 07, Mémoire 99, Oracle 98, Archiviste 06 | Penwether n'est pas une ville construite — c'est la coque du monde, le squelette de la compilation que Spriggans habitent par hasard |

| NN | Nom | Rôle | Sous-lieu | `role_type` | Angle narratif |
|---|---|---|---|---|---|
| 00 | Le Fantôme des Ruines | **PNJ caché** (coque du serveur) | Bibliothèque Enterrée (noyau, −12) | `SERVICE` | Ombre de la première compilation du monde ; squelette du Cardinal |
| 01 | Receleuse Nix | Objets « d'occasion » | Marché des Sept Façades | `BLACK_MARKET` | Objets à provenance floue ; un objet qui se souvient de son mort |
| 02 | Prieur Vex | Skill Master — Magie d'Illusion | Cloître Renversé | `SKILL_MASTER` | Enseigne l'illusion ; une illusion qui montre la « vraie » ville |
| 03 | Masquier Orin | Cosmétiques / fausses identités | Atelier des Visages | `MERCHANT` | Masques temporaires ; un masque qui ne s'enlève pas |
| 04 | Cartographe Maude | Cartes des ruines | Porche Effondré | `MERCHANT` | Cartes exactes — elle ne voit pas mais « sent » les strates du serveur |
| 05 | Fossoyeur Grim | Quêtes Nécropole | Cimetière Vertical | `QUEST_GIVER` | Explore la Nécropole ; sait que les morts ne sont pas des joueurs |
| 06 | Archiviste Sans Nom | Chaîne « Ce Que Cachent les Ruines » | Bibliothèque Enterrée | `QUEST_GIVER` | Traduit les archives ; sait que la cité préexistait au monde |
| 07 | Chancelier Masques | Lord (hologramme) | Salle du Conseil Voilé | `LORD` | Nul ne connaît son visage ; programmé pour cacher la vérité |
| 08 | Gardien des Ruines | Régent de Penwether | Salle du Conseil Voilé | `GUARD` | Gouverne ; les ruines changent de forme la nuit |
| 09 | Commandant des Masques | Commandant des Éclaireurs | Marché des Sept Façades | `GUARD` | Protège la cité ; des gardes qui parlent seuls |
| 10 | Gardien Ruines Noires | Patrouille HUNT_001 | Ruines Noires | `GUARD` | Frontière ; un mur qui saigne |
| 11 | Guide Ruines Noires | Guide chasse | Ruines Noires | `QUEST_GIVER` | Connaît les ruines ; un corbeau qui répète |
| 12 | Marchand Fleurs | Fleur de Gravats | Ruines Noires | `MERCHANT` | Plantes des ruines ; une fleur qui pousse à l'envers |
| 13 | Gardien Terres Grises | Patrouille HUNT_002 | Terres Grises | `GUARD` | Frontière ouest ; une ombre sans source |
| 14 | Pisteur Terres Grises | Traqueur | Terres Grises | `QUEST_GIVER` | Traque ; une trace qui se déplace seule |
| 15 | Marchand de Pierres | Pierre de Taille Antique | Terres Grises | `MERCHANT` | Pierres antiques ; une pierre trop légère |
| 16 | Gardien Nécropole | Sentinelle DUN_001 | Nécropole Antique | `GUARD` | Registre des raids ; un groupe qui sort par l'entrée sans ses souvenirs |
| 17 | Cartographe Nécropole | Cartes de la Nécropole | Nécropole Antique | `SERVICE` | Plans des salles ; une salle qui n'est pas sur le plan |
| 18 | Vigie Route | Contrôleur route aérienne | Route Aérienne PEN–ALN (`ROUTE`) | `GUARD` | Les illusions changent d'altitude ; des ombres volantes sans corps |
| 19 | Marchand de Vol | Potions vol / buffs | Route Aérienne (îlot) | `MERCHANT` | Buffs ; voit des ailes sans oiseau |
| 20 | Concierge Marché | Entretien des Sept Façades | Marché des Sept Façades | `SERVICE` | Nettoie les façades ; une façade qui claque sans vent |
| 21 | Apprenti Illusionniste | Élève Vex | Cloître Renversé | `SERVICE` | Apprend l'illusion ; une illusion qui reste |
| 22 | Maître des Masques | Fabrication masques | Atelier des Visages | `SKILL_MASTER` | Fabrique les masques ; un masque qui voit par lui-même |
| 23 | Tailleur d'Illusions | Taille des illusions | Cloître Renversé | `SERVICE` | Taille les filtres d'illusion ; un filtre qui tombe |
| 24 | Restaurateur Ruines | Réparation des ruines | Porche Effondré | `SERVICE` | Répare les ruines ; une poutre qui se répare seule |
| 25 | Pêcheur Citernes | Poisson des Citernes | Citernes Antiques | `MERCHANT` | Anguille pâle ; une anguille qui brille dans le noir |
| 26 | Marchand d'Eaux | Eau des citerenes | Citernes Antiques | `MERCHANT` | Eau ancienne ; une goutte qui ne tombe pas |
| 27 | Baigneur des Citernes | Bains publics | Citernes Antiques | `MERCHANT` | Bains ; un baigneur qui ne se souvient pas d'être entré |
| 28 | Alchimiste des Eaux | Potions eaux grises | Citernes Antiques | `MERCHANT` | Eaux de ruines ; une potion qui montre la vraie ville |
| 29 | Bibliothécaire | Archives des ruines | Bibliothèque Enterrée | `SERVICE` | « Traduit » les archives ; un livre qui s'écrit seul |
| 30 | Garde du Marché | Sécurité du Marché | Marché des Sept Façades | `GUARD` | Surveille les façades ; un voleur qui sort de la vraie façade |
| 31 | Marchand d'Antiquités | Objets anciens | Marché des Sept Façades | `MERCHANT` | Reliques ; une relique trop récente |
| 32 | Marchand de Parchemins | Parchemins anciens | Marché des Sept Façades | `MERCHANT` | Manuscrits ; un parchemin vierge qui écrit seul |
| 33 | Marchand de Masques | Masques simples | Marché des Sept Façades | `MERCHANT` | Masques courants ; un masque qui pleure |
| 34 | Marchand de Lumière | Lanternes / bougies | Marché des Sept Façades | `MERCHANT` | Éclairage ; une lanterne qui montre l'invisible |
| 35 | Alchimiste des Ombres | Potions d'ombre | Cloître Renversé | `MERCHANT` | Ombres liquides ; une ombre qui s'indépendant |
| 36 | Marchand d'Étoffes | Étoffes patinées | Marché des Sept Façades | `MERCHANT` | Tissus ; une étoffe qui change de couleur seule |
| 37 | Marchand de Reliques | Petits artefacts | Marché des Sept Façades | `MERCHANT` | Artefacts ; une statuette qui bouge |
| 38 | Crieur du Marché | Annonces | Marché des Sept Façades | `SERVICE` | K0 ; annonce des prix qui changent de monnaie |
| 39 | Encanteur des Ruines | Enchères | Marché des Sept Façades | `MERCHANT` | Vente ; une pièce qui n'a pas d'enchère mais part |
| 40 | Maître des Disguises | Enseignement déguisement | Atelier des Visages | `SKILL_MASTER` | Déguisement ; un déguisement trop réel |
| 41 | Déguiseur des Masques | Maquillage | Atelier des Visages | `SERVICE` | Peint les masques ; une peinture qui bouge |
| 42 | Couturier d'Illusions | Habits d'illusion | Atelier des Visages | `SERVICE` | Tisse l'illusion ; un fil qui brille |
| 43 | Vernisseur de Faux | Vernis de masques | Atelier des Visages | `SERVICE` | Vernir ; un vernis qui garde le faux |
| 44 | Parfumeur d'Illusions | Odeurs illusoires | Atelier des Visages | `SERVICE` | Odeurs ; un parfum qui sent la pluie ancienne |
| 45 | Fouilleur de Ruines | Fouilleur d'objets | Ruines Noires | `SERVICE` | Fouille ; un objet qui l'appelle par son nom |
| 46 | Détecteur d'Illusions | Repère les fausses façades | Marché des Sept Façades | `SERVICE` | Détecte les fausses entrées ; une vraie entrée qu'il rate |
| 47 | Ravitailleur des Ruines | Ravitaillement expéditions | Porche Effondré | `SERVICE` | Ravitaille ; un colis qui se vide tout seul |
| 48 | Receleur des Ruines | Antiquités volées | Bibliothèque Enterrée (cache) | `BLACK_MARKET` | Pièces des ruines ; une pièce qui cause |
| 49 | Guide des Ruines | Guide expédition | Porche Effondré | `QUEST_GIVER` | Montre les ruines ; montre la fausse banque |
| 50 | Garde des Façades | Éclaireur du Marché | Marché des Sept Façades | `SERVICE` | Trouve la vraie façade ; la vraie change |
| 51 | Marchand de Bougies | Bougies éternelles | Faubourg des Masques | `MERCHANT` | Bougies ; une qui ne se consume pas |
| 52 | Marchand de Voiles | Voiles d'illusions | Faubourg des Masques | `MERCHANT` | Voiles ; un voile qui dévoile |
| 53 | Marchand de Teintures | Teintures magiques | Faubourg des Masques | `MERCHANT` | Teintures ; une teinture qui colore le vide |
| 54 | Marchand d'Encens | Encens des ruines | Faubourg des Masques | `MERCHANT` | Encens ; un encens qui sent le souvenir |
| 55 | Vétéran des Ruineses | Ancien explorateur | Porche Effondré | `QUEST_GIVER` | A exploré la Nécropole ; sait que les niveaux n'arrêtent pas |
| 56 | Prospecteur Illusions | Prospection des failles | Terres Grises | `QUEST_GIVER` | Cherche des failles ; une faille qui donne sur du noir |
| 57 | Marchand Masques Fins | Masques d'apparat | Marché des Sept Façades | `MERCHANT` | Masques fins ; un qui montre le vrai visage |
| 58 | Marchand Lames Grises | Lames des ruines | Marché des Sept Façades | `MERCHANT` | Armes antiques ; une lame trop tranchante |
| 59 | Marchand Armures Grises | Armures des ruines | Marché des Sept Façades | `MERCHANT` | Armures ; une armure trop légère |
| 60 | Scribe du Conseil Voilé | Notation des édits | Salle du Conseil Voilé | `SERVICE` | Écrit les édits ; un édit qui s'illumine |
| 61 | Huissier du Conseil | Accueil du Conseil | Salle du Conseil Voilé | `SERVICE` | Filtre ; un visiteur sans visage |
| 62 | Archiviste des Plans | Archives du Conseil | Salle du Conseil Voilé | `SERVICE` | Gère les plans ; le plan de Penwether trop exact |
| 63 | Chroniqueur des Illusions | Journal des changements | Cloître Renversé | `SERVICE` | Note les changements ; un changement qu'il a noté avant qu'il arrive |
| 64 | Héraut du Conseil | Messager du Chancelier | Salle du Conseil Voilé | `SERVICE` | Annonce ; une nouvelle qu'il n'a pas dite |
| 65 | Dame de Compagnie | Suivante du Chancelier | Salle du Conseil Voilé | `SERVICE` | Sert le Chancelier ; sait qu'il reset |
| 66 | Intendant du Conseil | Trésor | Salle du Conseil Voilé | `SERVICE` | Gère les fonds ; des pièces venues de nulle part |
| 67 | Ombre du Conseil | Espion du Chancelier | Salle du Conseil Voilé | `SERVICE` | Agent secret ; voit le vrai Chancelier |
| 68 | Fou du Conseil | Mémorial du Conseil | Salle du Conseil Voilé | `SERVICE` | Dit la vérité sous couvert de folie ; Kirito |
| 69 | Stratège du Conseil | Plans de défense | Salle du Conseil Voilé | `SERVICE` | Plans contre Gnomes ; un plan qui ne se plie pas |
| 70 | Forgeur d'Illusions | Illusions complexes | Cloître Renversé | `SKILL_MASTER` | Illusions majeures ; une illusion hors-serveur |
| 71 | Apprenti Prieur | Élève Vex | Cloître Renversé | `SERVICE` | Apprend ; une illusion qui lui parle |
| 72 | Souffleur de Verre | Verre magique | Atelier des Visages | `SERVICE` | Souffle le verre ; une bulle qui garde l'image |
| 73 | Modeleur d'Argile | Masques d'argile | Atelier des Visages | `SERVICE` | Argile d'illusion ; une argile qui garde la forme souhaitée |
| 74 | Vitrier d'Illusions | Fenêtres trompeuses | Atelier des Visages | `SERVICE` | Fenêtres ; une fenêtre qui montre la réalité |
| 75 | Gardien de la Porte | Garde entrée ville | Porte de Penwether | `GUARD` | Filtre ; des ombres qui entrent sans masque |
| 76 | Douanier des Illusions | Registre illusoire | Porte de Penwether | `SERVICE` | Enregistre des noms faux ; un vrai nom |
| 77 | Veilleur de Nuit | Ronde de nuit | Remparts | `GUARD` | Patrouille ; des pas d'anciens dans les ruines |
| 78 | Veilleur de Jour | Ronde de jour | Remparts | `SERVICE` | Routinier ; une ombre de ruine sans ruine |
| 79 | Réfugié Imp | Fuyard de Duskarn | Faubourg des Masques | `SERVICE` | Fuit Duskarn ; sait ce que le Pacte des Ombres cache vraiment |
| 80 | Prêtre du Voile | Clergé du secret | Autel de Résurrection | `SERVICE` | Garde le secret ; un secret qui se dit tout seul |
| 81 | Prêtresse des Ombres | Clergé des ombres | Autel de Résurrection | `SERVICE` | Prie ; une ombre qui prie avec elle |
| 82 | Acolyte des Ruines | Novice | Autel de Résurrection | `SERVICE` | Apprenti ; des ruines qui résonnent |
| 83 | Vestale du Passé | Gardienne des rites | Autel de Résurrection | `SERVICE` | Rites anciens ; un rite qui ressuscite |
| 84 | Nécromancien des Ruines | Résurrection noire | Nécropole Antique (interdit) | `BLACK_MARKET` | Ranime les morts des ruines ; un mort qui se souvient d'avant le serveur |
| 85 | Vétéran des Ruines | Ancien explorateur | Porche Effondré | `QUEST_GIVER` | A exploré ; sait que la ville s'enfonce |
| 86 | Garde du Conseil Voilé | Garde du Chancelier | Salle du Conseil Voilé | `GUARD` | Protège ; le Chancelier n'a pas d'ombre |
| 87 | Espion de Duskarn | Agent Imp infiltré | Faubourg des Masques (caché) | `BLACK_MARKET` | Infiltré ; sait que la ville est une coque de serveur |
| 88 | Trafiquant d'Illusions | Illusions volées | Marché des Sept Façades (cache) | `BLACK_MARKET` | Vol d'illusions ; une illusion qui ne s'arrête pas |
| 89 | Gardien du Mémorial | Mémorial des explorateurs | Cimetière Vertical | `SERVICE` | Liste des disparus ; un nom qui réapparaît |
| 90 | Réfugié Sylph | Fuyard de Swilvane | Faubourg des Masques | `SERVICE` | Fuit Swilvane ; sait pourquoi le vent ne souffle plus |
| 91 | Marchand Gnome | Marchand de gemmes | Marché des Sept Façades | `MERCHANT` | Gemmes ; lien Granzam via rivalité (creusent les ruines) |
| 92 | Courtier d'Alne | Diplomate d'Alne | Salle du Conseil Voilé | `SERVICE` | Connaît Bomil `NPC_ALN_93` ; sait que les ruines n'ont pas d'âge |
| 93 | Trafiquant Inter-Cités | Trafic d'artefacts | Marché des Sept Façades (cache) | `BLACK_MARKET` | Artefacts des ruines ; liens Tenebris `NPC_SWI_03` |
| 94 | Courtier Inter-Racial | Négociant neutre | Marché des Sept Façades | `MERCHANT` | Couverture générale |
| 95 | Vétéran des Traductions | Ancien traducteur | Bibliothèque Enterrée | `QUEST_GIVER` | A traduit les ruines ; sait que la langue n'est pas humaine |
| 96 | Instructeur Novices | Formation illusion | Cloître Renversé | `SKILL_MASTER` | Forme les nouveaux ; un élève qui voit à travers |
| 97 | Prêtre du Souvenir | Mémoire des ruines | Autel de Résurrection | `SERVICE` | Prie pour les oubliés ; un oublié qui se souvient |
| 98 | Oracle des Ruines | Prophétesse | Bibliothèque Enterrée | `QUEST_GIVER` | Prédictions par les ruines ; hooks orchestrateur |
| 99 | Mémoire de Penwether | Ancienne sage | Salle du Conseil Voilé | `QUEST_GIVER` | Se souvient de la fondation ; clef du fil méta |

**Fiches produites** : `pnj/penwether/` — ✅ 100/100 (`NPC_PEN_00-99`, gabarit D17, émoji 🕯️). Lien inter-cités honoré : Tenebris `NPC_SWI_03` via `NPC_PEN_93`, Alne `NPC_ALN_93` via `NPC_PEN_92`. Quotas D34 respectés (SERVICE 40, MERCHANT 27, GUARD 10, QUEST_GIVER 11, SKILL_MASTER 5, LORD 1, BLACK_MARKET 6).
