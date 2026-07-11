import json
import os
import numpy as np

MODEL_DIR = os.path.join(os.path.dirname(__file__), "..", "models")
os.makedirs(MODEL_DIR, exist_ok=True)

EMBED_DIM = 64
np.random.seed(42)

def create_vocabulary():
    return {
        "move": 0, "go": 0, "va": 0, "vais": 0, "tp": 0,
        "buy": 1, "achète": 1, "achat": 1, "acheter": 1, "vendre": 1,
        "attack": 2, "attaque": 2, "combat": 2, "frappe": 2,
        "talk": 3, "parle": 3, "discute": 3, "dialogue": 3,
        "help": 4, "aide": 4, "commandes": 4,
        "inventory": 5, "inventaire": 5, "sac": 5, "objets": 5,
        "status": 6, "statut": 6, "profil": 6, "niveau": 6,
        "quest": 7, "quête": 7, "mission": 7,
        "zone": 8, "capitale": 8, "forêt": 8, "montagne": 8,
        "item": 9, "potion": 9, "épée": 9, "arme": 9, "armure": 9,
        "npc": 10, "pnj": 10, "marchand": 10, "garde": 10,
        "monster": 11, "monstre": 11, "mob": 11,
        "sylphe": 12, "salamander": 12, "gnome": 12, "imp": 12, "undine": 12,
        "combien": 13, "prix": 13, "coûte": 13,
        "oui": 14, "non": 14, "merci": 15, "bonjour": 16, "salut": 16,
    }

def embed_text(text, vocab, dim=EMBED_DIM):
    vec = np.zeros(dim, dtype=np.float32)
    words = text.lower().split()
    count = 0
    for word in words:
        if word in vocab:
            idx = vocab[word]
            if idx < dim:
                vec[idx] += 1.0
                count += 1
    if count > 0:
        vec /= count
    return vec

if __name__ == "__main__":
    vocab = create_vocabulary()

    test_texts = [
        "je vais à la capitale des sylphes",
        "achète 3 potions de soin",
        "attaque le monstre",
        "parle au marchand",
        "affiche mon inventaire",
        "quel est mon statut",
    ]

    print("Embedding model (bag-of-words, 64-dim):")
    for text in test_texts:
        vec = embed_text(text, vocab)
        top_indices = np.argsort(vec)[-5:][::-1]
        active_words = []
        for idx in top_indices:
            if vec[idx] > 0:
                words = [w for w, i in vocab.items() if i == idx]
                if words:
                    active_words.append(f"{words[0]}({vec[idx]:.1f})")
        print(f"  '{text}' -> {active_words}")

    example_embed = embed_text("je vais à la capitale", vocab)
    embed_path = os.path.join(MODEL_DIR, "embed.npy")
    np.save(embed_path, example_embed)
    print(f"Embedding example saved to {embed_path}")

    with open(os.path.join(MODEL_DIR, "embed_vocab.json"), "w") as f:
        json.dump(vocab, f, indent=2)
    print(f"Vocabulary saved ({len(vocab)} words)")
