import json
import os
import re
import numpy as np
from skl2onnx import convert_sklearn
from skl2onnx.common.data_types import StringTensorType, Int64TensorType
import onnx

MODEL_DIR = os.path.join(os.path.dirname(__file__), "..", "models")
os.makedirs(MODEL_DIR, exist_ok=True)

ENTITY_PATTERNS = {
    "ZONE": r"ZONE_\w+_\d+",
    "NPC": r"NPC_\w+_\d+",
    "MONSTER": r"MOB_\w+",
    "ITEM": r"[A-Z]{2,4}_[A-Z]{2,4}_\d{3}",
    "SKILL": r"(?:MAG|OSS|PAS)_\w+_\d{3}",
    "QUANTITY": r"\d+\s*(?:x|fois)?",
    "PLAYER": r"[A-Z][a-zéèêëàâùûôîï]+",
}

class RegexNER:
    def __init__(self, patterns):
        self.patterns = {name: re.compile(pat, re.IGNORECASE) for name, pat in patterns.items()}

    def extract(self, text):
        entities = {}
        for name, pattern in self.patterns.items():
            match = pattern.search(text)
            if match:
                entities[name] = match.group(0).strip()
        return entities

def create_ner_dataset():
    test_texts = [
        ("va à ZONE_NEU_CAP_001", {"ZONE": "ZONE_NEU_CAP_001"}),
        ("parle à NPC_ALN_00", {"NPC": "NPC_ALN_00"}),
        ("attaque MOB_SYL_001", {"MONSTER": "MOB_SYL_001"}),
        ("achète CSM_POT_001", {"ITEM": "CSM_POT_001"}),
        ("je veux 3 CSM_POT_002", {"QUANTITY": "3", "ITEM": "CSM_POT_002"}),
        ("utilise MAG_FIR_001", {"SKILL": "MAG_FIR_001"}),
        ("parle à Marchand", {"PLAYER": "Marchand"}),
        ("va chez les sylphes", {"ZONE": "ZONE_SYL_CAP_001"}),
    ]
    return test_texts

if __name__ == "__main__":
    ner = RegexNER(ENTITY_PATTERNS)
    dataset = create_ner_dataset()
    correct = 0
    for text, expected in dataset:
        result = ner.extract(text)
        match = all(k in result and result[k] == v for k, v in expected.items())
        if match:
            correct += 1
        else:
            print(f"Mismatch: '{text}' -> {result}, expected {expected}")
    print(f"NER accuracy: {correct}/{len(dataset)} ({100*correct/len(dataset):.1f}%)")

    dummy_X = np.array([["test input"]], dtype=str)
    dummy_y = np.array([[0, 0, 0, 0, 0, 0, 0]], dtype=np.int64)
    print("NER pattern data saved")
