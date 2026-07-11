import json
import os
import numpy as np
import onnx
from skl2onnx import convert_sklearn
from skl2onnx.common.data_types import FloatTensorType
from sklearn.ensemble import RandomForestRegressor

MODEL_DIR = os.path.join(os.path.dirname(__file__), "..", "models")
os.makedirs(MODEL_DIR, exist_ok=True)

np.random.seed(42)

def generate_combat_data(n=10000):
    X = []
    y_damage = []
    y_crit = []
    for _ in range(n):
        atk = np.random.randint(10, 500)
        defense = np.random.randint(10, 500)
        level = np.random.randint(1, 50)
        hp = np.random.randint(50, 2000)
        monster_atk = np.random.randint(10, 300)
        monster_def = np.random.randint(10, 300)
        monster_level = np.random.randint(1, 40)
        distance = np.random.uniform(1, 20)
        is_magic = np.random.randint(0, 2)
        accuracy = np.random.uniform(0.7, 1.0)

        base_damage = atk**2 / (atk + monster_def)
        level_bonus = 1 + (level - monster_level) * 0.05
        distance_penalty = 1 - (distance - 1) * 0.02
        magic_bonus = 1.5 if is_magic else 1.0
        damage = base_damage * max(0.1, level_bonus) * max(0.1, distance_penalty) * magic_bonus * accuracy
        crit = 1 if np.random.random() < (0.05 + level * 0.002) else 0
        if crit:
            damage *= 1.5

        X.append([atk, defense, level, hp, monster_atk, monster_def, monster_level, distance, is_magic, accuracy])
        y_damage.append(damage)
        y_crit.append(crit)

    return np.array(X, dtype=np.float32), np.array(y_damage, dtype=np.float32), np.array(y_crit, dtype=np.int64)

X, y_damage, y_crit = generate_combat_data(10000)
print(f"Combat data: {X.shape[0]} samples, {X.shape[1]} features")

damage_model = RandomForestRegressor(n_estimators=50, max_depth=10, random_state=42, n_jobs=2)
damage_model.fit(X, y_damage)
damage_pred = damage_model.predict(X)
mae = np.mean(np.abs(damage_pred - y_damage))
print(f"Damage model MAE: {mae:.2f} (mean damage: {np.mean(y_damage):.2f})")

initial_type = [("input", FloatTensorType([None, X.shape[1]]))]
onnx_model = convert_sklearn(damage_model, initial_types=initial_type)
onnx_path = os.path.join(MODEL_DIR, "combat.onnx")
onnx.save_model(onnx_model, onnx_path)
print(f"Combat ONNX model saved to {onnx_path}")

with open(os.path.join(MODEL_DIR, "combat_feature_names.json"), "w") as f:
    json.dump([
        "atk", "defense", "level", "hp",
        "monster_atk", "monster_def", "monster_level",
        "distance", "is_magic", "accuracy"
    ], f, indent=2)

import onnxruntime as rt
sess = rt.InferenceSession(onnx_path)
test_input = np.array([[150, 100, 10, 500, 80, 50, 8, 5, 0, 0.9]], dtype=np.float32)
input_name = sess.get_inputs()[0].name
pred = sess.run(None, {input_name: test_input})
print(f"Test combat: ATK=150 DEF=100 Lv=10 -> predicted damage: {pred[0][0]:.1f}")
