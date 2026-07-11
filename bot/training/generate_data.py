import json
import random
import os

random.seed(42)

INTENTS = {
    "MOVE": [
        "je vais à ZONE_NEU_CAP_001", "va à ZONE_SYL_CAP_001", "tp moi à ZONE_CAI_CAP_001",
        "déplace toi vers ZONE_SAL_CAP_001", "je me téléporte à ZONE_IMP_CAP_001",
        "va à la capitale neutre", "direction la forêt des sylphes",
        "je veux aller à la zone des salamandres", "emmène moi à la capitale des gnomes",
        "tp ZONE_NEU_CAP_001", "move ZONE_SYL_CAP_001",
        "je vais chez les sylphes", "direction capitale impériale",
        "va à la zone de départ", "retour au point de départ",
    ],
    "BUY": [
        "je veux 3 CSM_POT_001", "achète CSM_POT_001", "achète moi 2 ARM_CHA_001",
        "je veux une potion", "donne moi 5 CSM_POT_002", "achète 10 potions de soin",
        "je prends 1 WPN_SWD_001", "je veux 3 WPN_BOW_001",
        "achète CSM_POT_003", "combien coûte CSM_POT_001",
        "prix de ARM_CHA_001", "je veux acheter des potions",
        "donne moi 2 CSM_POT_004", "je prends l'épée longue",
    ],
    "SELL": [
        "vends CSM_POT_001", "revends 3 CSM_POT_002", "vends mon épée",
        "je veux vendre 2 potions", "revends WPN_SWD_001",
        "vends ARM_CHA_001", "vend mon équipement",
    ],
    "ATTACK": [
        "attaque MOB_SYL_001", "frappe MOB_SYL_002", "engage le combat contre MOB_NEU_001",
        "attaque le monstre", "combat MOB_SAL_001", "cogne MOB_CAI_001",
        "je veux attaquer", "engage MOB_IMP_001",
    ],
    "TALK": [
        "parle à NPC_ALN_00", "discute avec le garde", "parle au marchand",
        "dialogue avec NPC_VOU_01", "qui es tu", "que fais tu",
        "parle au forgeron", "discute avec le maître des quêtes",
    ],
    "INVENTORY": [
        "inventaire", "mon inventaire", "mes objets", "sac", "équipement",
        "que ai je dans mon inventaire", "liste mes items", "objets",
    ],
    "STATUS": [
        "statut", "ma fiche", "mon profil", "mes stats", "niveau",
        "qui suis je", "affiche mon profil", "mes caractéristiques",
    ],
    "HELP": [
        "aide", "commandes", "!aide", "help", "que faire", "tutoriel",
        "liste des commandes", "comment jouer",
    ],
    "QUEST": [
        "quête", "mes quêtes", "mission", "que faire comme quête",
        "quête principale", "quêtes disponibles", "progression",
    ],
    "EMOTE": [
        "/dance", "/salut", "/pleure", "/rire", "/crie",
        "/s assied", "/salue", "/applaudit",
    ],
    "WHISPER": [
        "mp à Testeur bonjour", "message privé à Joueur coucou",
        "whisper Testeur salut", "dm Testeur ça va",
    ],
}

def generate_dataset(intents, samples_per_intent=50):
    data = []
    for intent, examples in intents.items():
        for example in examples:
            data.append({"text": example, "intent": intent})
            for _ in range(samples_per_intent // len(examples)):
                mutated = mutate_text(example)
                data.append({"text": mutated, "intent": intent})
    return data

def mutate_text(text):
    prefixes = ["!", "s'il te plaît ", "stp ", "bonjour ", "hey ", "hello ", ""]
    suffixes = ["", " merci", " svp", " !", " maintenant", " vite"]
    result = text
    if random.random() < 0.3:
        result = random.choice(prefixes) + result
    if random.random() < 0.3:
        result = result + random.choice(suffixes)
    if random.random() < 0.2:
        result = result.upper()
    elif random.random() < 0.2:
        result = result.lower()
    return result

if __name__ == "__main__":
    data = generate_dataset(INTENTS, samples_per_intent=50)
    os.makedirs("training", exist_ok=True)
    with open("training/intent_data.json", "w") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Generated {len(data)} training samples")
    intents_counts = {}
    for d in data:
        intents_counts[d["intent"]] = intents_counts.get(d["intent"], 0) + 1
    for intent, count in sorted(intents_counts.items()):
        print(f"  {intent}: {count} samples")
