# ⚔️ ALO — ALfheim Online sur WhatsApp

MMORPG textuel inspiré de **Sword Art Online : ALfheim Online**, joué via des groupes WhatsApp
pilotés par le Système Cardinal (bot Node.js + LLM).

> **Principe fondateur : un lieu = un groupe WhatsApp** — se déplacer dans le monde, c'est changer de groupe.
> La limite des 100 groupes par communauté WhatsApp impose un design par **territoires** (13 groupes de zone,
> 16 groupes permanents, 71 slots libres pour dynamiques).

---

## 🏗️ Architecture

```
alo/
├── bot/                            # ★ CODE DU BOT (Node.js)
│   ├── src/
│   │   ├── index.js                # Point d'entrée, initialisation
│   │   ├── orchestrator/           # Message handler, routage d'intention
│   │   ├── handlers/               # movement, combat, economy, player, dialogue
│   │   ├── services/               # whatsapp, zone-groups, player, template, rag
│   │   ├── agents/                 # router (classifieur d'intention), models
│   │   └── engine/                 # movement (graphe de zones), combat engine
│   ├── tests/integration.mjs       # 31 tests d'intégration
│   └── .env.example
├── scripts/
│   └── seed-generator.js           # Convertit les fiches markdown en SQL
├── schema.sql                      # Modèle de données PostgreSQL (46 tables)
├── seed_data.sql                   # Données générées (items, monstres, PNJ, etc.)
├── données/                        # ★ FICHES DU MONDE (markdown structuré)
│   ├── cartographie/               # Atlas, territoires, routes
│   ├── personnages_bestiaire/      # Monstres (257), PNJ (300+), boss
│   ├── items_equipements/          # 851 items
│   ├── competences_magie/          # Sorts, OSS, passifs
│   └── the_seed_engine/            # Mécaniques, scaling, registres de commandes
├── system_persona_architecte.md    # Gouvernance
└── cahier_des_charges.md           # Spécification projet
```

## 📱 Architecture Communautaire WhatsApp

La limite de **100 groupes par communauté** a conduit à un design en 3 couches :

| Couche | Groupes | Rôle |
|--------|---------|------|
| **Communauté** | 4 | 📢 Annonces, 📋 Enregistrement, 💬 Général, 🤝 LFG |
| **Raciaux** | 9 | 🏛️ Un par peuple (jamais quitté) |
| **Territoires** | 13 | 🌿 Terres Sylphes, 🔥 Terres Salamanders, … (auto-switch au déplacement) |

**13 territoires** couvrent les 52 zones du jeu (9 raciaux × 5 zones + Alne + Aincrad + Jotunheimr + Yggdrasil).
Quand un joueur se déplace, `syncPlayerGroups()` retire les groupes de territoire non autorisés
et le rejoint dans le bon — sans toucher aux groupes permanents.

**29 groupes permanents** — il reste **71 slots** pour guildes, instances et parties.

## 🏛️ Guilde d'Alne

Le **Hall de la Guilde** à Alne (ZONE_NEU_CAP_001) accueille 4 PNJ :

- **Aldric** `NPC_ALN_100` — Maître de Guilde (orientation, création de guilde)
- **Bryn** `NPC_ALN_101` — Forgeronne (vente d'armes/armures, réparation)
- **Élara** `NPC_ALN_102` — Quétatrice (4 quêtes de guilde)
- **Selma** `NPC_ALN_103` — Greffière (inscriptions, registres, annuaire)

## 🧠 Pipeline d'exécution

1. Message WhatsApp entrant → `whatsapp.js`
2. `processMessage()` dans `message-handler.js` → classification d'intention
3. Routage vers le handler approprié (movement, combat, economy, player, dialogue)
4. Si commande GM (`!sys_*`) → pipeline SYS en 6 étapes (D71 → prérequis → autorisation → lock advisory → exécution → résultat)
5. Si LLM nécessaire → cascade de providers (Groq → Mistral → OpenRouter → HuggingFace → Gemini)

## 🧪 Tests

```bash
node bot/tests/integration.mjs
```

31 tests couvrent : handler STATUS/INVENTORY/QUESTS/BUY/SELL/TALK, pipeline SYS (6 commandes),
processMessage (9 cas), spawn/combat, routage GM.

## 📊 État d'Avancement

| Chantier | Statut |
|---|---|
| Architecture & gouvernance | ✅ |
| Base de données (46 tables, schéma complet) | ✅ |
| Atlas & graphe des zones (52 zones, 13 territoires) | ✅ |
| Bestiaire (257 monstres, stats réelles parsées) | ✅ |
| Items (851, dont armes/armures/matériaux) | ✅ |
| PNJ (300+, noms et rôles corrects) | ✅ |
| Bot Node.js (whatsapp-web.js, orchestration, handlers) | ✅ |
| Combat (recherche monstre, tours, dégâts nivelés) | ✅ |
| Pipeline SYS (5 commandes d'administration) | ✅ |
| Index vectoriel RAG (1243 chunks, 7 sources) | ✅ |
| Audit CDC (R1-R3, nR5-nR15 — 100% clos) | ✅ |
| Guilde d'Alne & PNJ associés | ✅ |
| Architecture WA par territoires | ✅ |
| Guildes joueurs, groupes sociaux, instances | ⏳ À venir |
| ML ONNX (classifieur d'intention neuronal) | ⏳ Modèle chargé, non branché |
