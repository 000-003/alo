# ⚔️ ALO — ALfheim Online sur WhatsApp

MMORPG textuel inspiré de **Sword Art Online : ALfheim Online**, joué intégralement via des groupes WhatsApp
pilotés par un bot (Système Cardinal). **Principe fondateur : un lieu = un groupe WhatsApp** — se déplacer
dans le monde, c'est changer de groupe.

> 📌 **Phase actuelle** : établissement des données. Le dépôt ne contient **aucun code** — uniquement la base
> de données du monde en markdown structuré et les spécifications. Toute exécution est gouvernée par
> [`system_persona_architecte.md`](system_persona_architecte.md).

---

## 🧭 Documents Maîtres

| Document | Rôle |
|---|---|
| [`system_persona_architecte.md`](system_persona_architecte.md) | Persona de gouvernance — conditionne toute production |
| [`cahier_des_charges.md`](cahier_des_charges.md) | Spécification du projet, décisions actées, backlog |
| [`données/cartographie/atlas_monde_liaisons.md`](données/cartographie/atlas_monde_liaisons.md) | **Atlas maître** : découpage du monde, ID de zones, graphe de liaisons complet |
| [`données/the_seed_engine/system_mechanics/zone_movement_protocol.md`](données/the_seed_engine/system_mechanics/zone_movement_protocol.md) | Protocole de déplacement inter-groupes (invariant « 1 joueur = 1 lieu ») |
| [`données/the_seed_engine/whatsapp_commands_list.md`](données/the_seed_engine/whatsapp_commands_list.md) | Registre des commandes Joueur & GM |
| [`données/the_seed_engine/ai_orchestrator_commands.md`](données/the_seed_engine/ai_orchestrator_commands.md) | Registre des commandes IA (Function Calling `SYS_*`) |

## 🗂️ Arborescence

```
alo/
├── system_persona_architecte.md      # Gouvernance (Architecte Créateur Primaire)
├── cahier_des_charges.md             # Spécification projet
├── portail_worldbuilding.html        # Portail de consultation
├── données/                          # ★ BASE DE DONNÉES DU MONDE
│   ├── cartographie/                 #   Atlas maître, territoires raciaux, routes aériennes
│   ├── cardinal_system_db/           #   Modèle de données : MCD_Concept/ → MLD_Logic/
│   ├── the_seed_engine/              #   Moteur : mécaniques, scaling, registres de commandes
│   ├── personnages_bestiaire/        #   200 boss New Aincrad, mobs, monstres, PNJ
│   ├── items_equipements/            #   Armes légendaires, consommables, cristaux
│   ├── competences_magie/            #   Sorts, OSS (Original Sword Skills)
│   └── lore_mecaniques/              #   Règles du monde (vol, PK, respawn), villes, flore
├── ressources/                       # Light novels SAO convertis (matière canon)
└── ressources_brutes/                # PDF/EPUB sources + guides de worldbuilding
```

## 🌍 Le Monde en Bref

- **9 races jouables** (Sylph, Salamander, Cait Sith, Undine, Imp, Gnome, Puca, Spriggan, Leprechaun),
  chacune avec son territoire : capitale (safe), zones de chasse, donjon, route aérienne vers Alne.
- **Alne**, capitale neutre au pied d'**Yggdrasil** ; **Jötunheimr** dans les abysses ; **New Aincrad**
  (100 paliers, 2 boss par palier) flottant dans le ciel.
- Disposition radiale et frontières : voir l'atlas (§3–§5).

## 🚪 Déplacement = Groupes WhatsApp

1. `!enter_zone [Zone]` : le bot ajoute le joueur au groupe de la zone **et le retire de tous les autres
   groupes de type lieu/instance** (opération atomique).
2. Exception fondatrice : le **groupe de chat communautaire (HUB)**, les groupes de **guilde** et de
   **party** ne sont jamais quittés automatiquement.
3. Déplacement uniquement vers une zone **adjacente** (graphe de l'atlas), sauf `!portal` / `!fast_travel` /
   `SYS_FORCE_TELEPORT`.

Détails, machine à états et cas limites : `zone_movement_protocol.md`.

## 📐 Conventions

| Élément | Convention | Exemple |
|---|---|---|
| Zone | `ZONE_<SECTEUR>_<TYPE>_<NNN>` | `ZONE_SYL_CAP_001` |
| PNJ | `NPC_<VILLE>_<NN>` | `NPC_ALN_01` |
| Mob | `MOB_<SECTEUR>_<NNN>` | `MOB_SYL_002` |
| Groupe WhatsApp (lieu) | `🗺️ ALO — <Nom Zone>` | `🗺️ ALO — Swilvane` |
| Monnaie | Yrd | `500 Yrd` |

**Règles d'or pour contribuer** :
1. Toute nouvelle zone est d'abord enregistrée dans l'**atlas** (ID + liaisons), ensuite détaillée en fiche.
2. Toute mécanique ajoutée reçoit ses **équivalents commande** (Joueur `!*`, GM `!sys_*`, IA `SYS_*`).
3. Toute modification est **propagée dans toutes les couches** où l'élément est référencé (atlas ↔ fiche ↔ MLD ↔ commandes).
4. Le graphe de liaisons reste **symétrique** (si A→B alors B→A).

## 📊 État d'Avancement

| Chantier | Statut |
|---|---|
| Persona & gouvernance | ✅ |
| Modèle de données (14 entités MCD, 18 tables MLD dont `T_WA_GROUPS`, `T_ZONE_LINKS`, `T_SPAWN_TABLES`, `T_NPC`) | ✅ |
| Atlas & graphe des zones (9 territoires + axe vertical, 80 liaisons seed) | ✅ |
| Protocole de déplacement | ✅ |
| Registres de commandes | ✅ |
| Bestiaire New Aincrad (200 boss) | ✅ |
| Fiches détaillées zones (9 territoires complets + 9 routes aériennes ; capitale Undine = fiche lore `geographie_villes`) | ✅ Étape 3 (2026-07-07) |
| Registres PNJ de capitales (`NPC_<VILLE>_01-07` pour les 10 villes, dont `NPC_GAT_*` acté à l'étape 3) | ✅ |
| Bot Node.js | ⏳ Hors périmètre de la phase données |
