#!/bin/bash
# ============================================================
# OptiFit 3D - Mac / Linux Startup Script
# ============================================================

# Resolve the root directory of the project (parent of this script or current folder)
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# If run directly inside scripts folder, project root is parent
if [[ "$(basename "$SCRIPT_DIR")" == "scripts" ]]; then
  PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
else
  PROJECT_ROOT="$SCRIPT_DIR"
fi

BACKEND_DIR="$PROJECT_ROOT/backend"
FRONTEND_DIR="$PROJECT_ROOT/frontend"

echo "============================================================"
echo " Starting OptiFit 3D on macOS / Linux"
echo " Project Root: $PROJECT_ROOT"
echo "============================================================"

# Check if Python is installed
if command -v python3 &>/dev/null; then
  PYTHON_CMD="python3"
elif command -v python &>/dev/null; then
  PYTHON_CMD="python"
else
  echo "❌ Error: Python is not installed. Please install Python 3.10+ from python.org or brew."
  exit 1
fi

# Check if Node is installed
if ! command -v npm &>/dev/null; then
  echo "❌ Error: Node.js / npm is not installed. Please install Node.js from nodejs.org or brew."
  exit 1
fi

# Install frontend dependencies if node_modules is missing
if [ ! -d "$FRONTEND_DIR/node_modules" ]; then
  echo "📦 Installing frontend dependencies..."
  (cd "$FRONTEND_DIR" && npm install)
fi

echo "🚀 Launching Backend on http://localhost:8000..."
# Start backend in a new Terminal window on macOS if osascript exists, otherwise run in background
if [[ "$OSTYPE" == "darwin"* ]]; then
  osascript -e "tell application \"Terminal\" to do script \"cd '$BACKEND_DIR' && $PYTHON_CMD -m uvicorn app.main:app --reload --port 8000\""
  osascript -e "tell application \"Terminal\" to do script \"cd '$FRONTEND_DIR' && npm run dev\""
  echo "✅ Backend and Frontend opened in new Terminal tabs/windows."
  echo "🌐 Frontend will run on: http://localhost:5173"
  echo "⚙️  Backend docs at:      http://localhost:8000/docs"
else
  # Linux fallback
  (cd "$BACKEND_DIR" && $PYTHON_CMD -m uvicorn app.main:app --reload --port 8000) &
  BACKEND_PID=$!
  (cd "$FRONTEND_DIR" && npm run dev) &
  FRONTEND_PID=$!

  cleanup() {
    echo "Stopping servers..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit
  }
  trap cleanup SIGINT SIGTERM
  wait
fi
