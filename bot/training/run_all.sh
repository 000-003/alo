#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
VENV="$SCRIPT_DIR/venv"

echo "=== Génération des modèles ONNX pour le Système Cardinal ==="

if [ ! -d "$VENV" ]; then
    echo "[1/5] Création de l'environnement virtuel Python"
    python3 -m venv "$VENV"
fi

echo "[2/5] Installation des dépendances"
"$VENV/bin/pip" install -q scikit-learn skl2onnx onnx onnxruntime numpy

echo "[3/5] Génération des données d'entraînement"
"$VENV/bin/python" "$SCRIPT_DIR/generate_data.py"

echo "[4/5] Entraînement des modèles"
echo "  → Intent classification..."
"$VENV/bin/python" "$SCRIPT_DIR/train_intent.py"
echo "  → NER (patterns)..."
"$VENV/bin/python" "$SCRIPT_DIR/train_ner.py"
echo "  → Combat prediction..."
"$VENV/bin/python" "$SCRIPT_DIR/train_combat.py"
echo "  → Embeddings..."
"$VENV/bin/python" "$SCRIPT_DIR/train_embed.py"

echo ""
echo "[5/5] Modèles générés dans models/"
ls -lh "$SCRIPT_DIR/../models/"*.onnx 2>/dev/null || echo "  (aucun .onnx)"
ls -lh "$SCRIPT_DIR/../models/"*.npy 2>/dev/null || echo "  (aucun .npy)"
ls -lh "$SCRIPT_DIR/../models/"*.json 2>/dev/null || echo "  (aucun .json)"
echo ""
echo "=== Terminé ==="
