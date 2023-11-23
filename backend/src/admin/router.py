import pickle
from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from sqlalchemy import insert
from sqlalchemy.ext.asyncio import AsyncSession
from ..datebase import get_async_session
from .schemas import *
from .models import *
from .support2 import Support2

router = APIRouter(
    prefix='/admin',
    tags=['admin']
)



@router.get('/trains_index')
async def trains_index(session: AsyncSession = Depends(get_async_session)):
    support = Support2(coonection=session)
    data = await support.trains_index()
    return JSONResponse(data)

