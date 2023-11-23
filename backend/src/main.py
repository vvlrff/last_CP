from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .admin.router import router as router_admin


app = FastAPI(
    title="HACK API"
)


origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000", # Порт для клиентской части 
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router_admin)
