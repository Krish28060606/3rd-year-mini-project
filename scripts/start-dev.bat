@echo off
echo ============================================================
echo Starting OptiFit 3D Full-Stack Development Environment
echo ============================================================
start "OptiFit 3D Backend" cmd /k "cd ..\backend && python -m uvicorn app.main:app --reload --port 8000"
start "OptiFit 3D Frontend" cmd /k "cd ..\frontend && npm run dev"
echo Both servers initiated.
