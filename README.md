# OptiFit 3D — AI-Powered Custom Eyewear Ergonomics and 3D Facial Mesh Fitting Engine

OptiFit 3D is an engineering-grade computer vision and 3D ergonomics platform designed to answer one critical question:
> **"Does this frame actually fit my face?"**

Unlike purely aesthetic virtual try-on demos, OptiFit 3D extracts real-time biometric geometry from MediaPipe 468-point facial landmark meshes, evaluates anatomical frame-to-face compatibility, calculates transparent comfort/pressure vectors, and renders interactive 3D spatial alignment in real-time.

---

## Architecture Overview

```
[ React + Vite + Tailwind + Three.js / R3F ]
                     │  (REST / Axios)
                     ▼
             [ FastAPI Backend ]
                     │
    ┌────────────────┼────────────────┐
    ▼                ▼                ▼
[CV Measurement] [3D Fitting Engine] [Ergonomics Scoring]
 (MediaPipe Mesh) (Scale & Anchors)  (Fit/Comfort Weights)
```

---

## Project Structure

```
optifit-3d/
├── backend/
│   ├── app/
│   │   ├── api/v1/endpoints/   # Modular API route controllers
│   │   ├── core/               # App configuration, constants & landmark indices
│   │   ├── models/             # Domain data models (Eyewear, etc.)
│   │   ├── schemas/            # Pydantic request/response validation schemas
│   │   ├── services/           # CV analysis, fitting math, catalog management
│   │   └── utils/              # 3D vector maths & geometry utilities
│   ├── requirements.txt
│   ├── .env.example
│   └── main.py                 # FastAPI application entrypoint
├── frontend/
│   ├── public/models/          # GLB/GLTF 3D Eyewear assets
│   ├── src/
│   │   ├── components/         # Reusable UI & 3D viewport components
│   │   ├── context/            # React Analysis & Fitting context state
│   │   ├── pages/              # Landing, TryOn, Catalog, Comparison, Report
│   │   ├── services/           # Axios API client layer
│   │   └── types/              # Centralized data structures
│   ├── package.json
│   └── vite.config.js
├── data/
│   └── frames.json             # Centralized Eyewear database
├── docs/                       # Architectural & mathematical documentation
├── tests/                      # Unit & integration test suites
└── scripts/                    # Development startup scripts
```

---

## Quickstart

### Prerequisites
- Node.js >= 18.x
- Python >= 3.10 (OpenCV, MediaPipe, FastAPI)

### 1. Start Backend
```powershell
cd backend
python -m uvicorn app.main:app --reload --port 8000
```
Backend API interactive documentation available at: `http://localhost:8000/docs`

### 2. Start Frontend
```powershell
cd frontend
npm install
npm run dev
```
Frontend development server available at: `http://localhost:5173`
