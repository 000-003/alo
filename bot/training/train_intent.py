import json
import os
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
from skl2onnx import convert_sklearn
from skl2onnx.common.data_types import StringTensorType
import onnx

MODEL_DIR = os.path.join(os.path.dirname(__file__), "..", "models")
os.makedirs(MODEL_DIR, exist_ok=True)

with open(os.path.join(os.path.dirname(__file__), "intent_data.json")) as f:
    data = json.load(f)

texts = [d["text"] for d in data]
labels = [d["intent"] for d in data]

intent_classes = sorted(set(labels))
label_to_id = {l: i for i, l in enumerate(intent_classes)}
id_to_label = {i: l for l, i in label_to_id.items()}
y = np.array([label_to_id[l] for l in labels])

pipeline = Pipeline([
    ("tfidf", TfidfVectorizer(ngram_range=(1, 3), max_features=5000)),
    ("clf", LogisticRegression(max_iter=1000)),
])

pipeline.fit(texts, y)
print(f"Intent model trained: {len(intent_classes)} classes, accuracy: {pipeline.score(texts, y):.3f}")

with open(os.path.join(MODEL_DIR, "intent_classes.json"), "w") as f:
    json.dump(id_to_label, f, indent=2)

initial_type = [("text", StringTensorType([None, 1]))]
onnx_model = convert_sklearn(pipeline, initial_types=initial_type)
onnx_path = os.path.join(MODEL_DIR, "intent.onnx")
onnx.save_model(onnx_model, onnx_path)
print(f"Intent ONNX model saved to {onnx_path}")

import onnxruntime as rt
sess = rt.InferenceSession(onnx_path)
test_input = np.array([["je vais à la capitale"]], dtype=str)
input_name = sess.get_inputs()[0].name
output = sess.run(None, {input_name: test_input})
probabilities = output[1][0]
pred_idx = int(np.argmax(probabilities))
print(f"Test prediction: '{test_input[0][0]}' -> {id_to_label[str(pred_idx)]} (confidence: {probabilities[pred_idx]:.3f})")
