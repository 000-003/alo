#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

echo "=== Déploiement ALfheim Online — Système Cardinal ==="

if [ ! -f .env ]; then
    echo "[!] Fichier .env manquant — copie depuis .env.example"
    cp .env.example .env
    echo "[!] Édite .env avec tes clés API avant de continuer"
    exit 1
fi

echo "[1/5] Installation des dépendances Node.js"
npm install --production

echo "[2/5] Vérification des modèles ONNX"
mkdir -p models
if [ ! -f models/intent.onnx ]; then
    echo "[!] Modèles ONNX manquants — lance training/run_all.sh"
    echo "    ou télécharge-les depuis le dépôt."
fi

echo "[3/5] Vérification de PostgreSQL"
if command -v psql &> /dev/null; then
    if PGPASSWORD=${DB_PASSWORD:-0000} psql -h ${DB_HOST:-localhost} -U ${DB_USER:-user1808} -d ${DB_NAME:-cardinal_alo} -c "SELECT 1" &>/dev/null; then
        echo "    PostgreSQL OK"
    else
        echo "    [!] PostgreSQL non accessible — vérifie la connexion"
    fi
fi

echo "[4/5] Création des répertoires"
mkdir -p wa_session logs

echo "[5/5] Démarrage du bot"
echo ""
echo "=== Lancement en mode production ==="
echo "  API:    http://localhost:${PORT:-3000}"
echo "  Health: http://localhost:${PORT:-3000}/health"
echo ""
exec node src/index.js
