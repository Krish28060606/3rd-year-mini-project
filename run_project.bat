@echo off
title OPTIFIT 3D — AI-Powered Eyewear Fitting Engine
color 0b

echo =====================================================================
echo                 OPTIFIT 3D - LANDING PAGE LAUNCHER                  
echo       AI-Powered Eyewear Ergonomics & 3D Facial Mesh Engine          
echo =====================================================================
echo.

cd /d "%~dp0"

echo [1/3] Checking Node.js installation...
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo [2/3] Checking project dependencies...
if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
) else (
    echo Dependencies are ready.
)

echo [3/3] Opening browser and starting Vite development server...
start "" http://localhost:5173/

echo.
echo =====================================================================
echo Server running at: http://localhost:5173/
echo Press Ctrl+C in this terminal window to stop the server when done.
echo =====================================================================
echo.

call npm run dev
pause
