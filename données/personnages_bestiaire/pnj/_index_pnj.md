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
| 2.4+ | Swilvane, Voulg, Freelia, Archipel d'Écume, Lioda, Duskarn, Granzam, Brokkheim, Penwether (1 ville / étape) | ⏳ (Swilvane = prochaine : roster d'abord) |

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
