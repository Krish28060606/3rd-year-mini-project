@echo off
echo Starting OptiFit 3D Backend on port 8000...
cd ..\backend
python -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
pause
