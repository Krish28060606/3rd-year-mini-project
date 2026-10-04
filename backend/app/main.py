from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.v1.api import api_router
from app.utils.logger import logger
from app.core.database import Base, engine

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Initialize SQLite database
    Base.metadata.create_all(bind=engine)
    logger.info(f"Starting {settings.PROJECT_NAME} (v{settings.VERSION}, Env: {settings.ENVIRONMENT})")
    yield
    logger.info(f"Shutting down {settings.PROJECT_NAME}")

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="Backend API for OptiFit 3D - Ergonomics & Facial Mesh Fitting Engine",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan
)

# Configure CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API v1 Router
app.include_router(api_router, prefix=settings.API_V1_STR)

@app.get("/")
def root():
    return {
        "engine": "OptiFit 3D",
        "status": "online",
        "docs": "/docs",
        "version": settings.VERSION
    }
