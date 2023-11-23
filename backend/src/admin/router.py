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

@router.post('/Support_2')
async def all_peregons(request_data: TrainIndexRequest, session: AsyncSession = Depends(get_async_session)):
    support = Support2(coonection=session)
    data = await support.one_train_without_time(train_index=request_data.train_index)
    return JSONResponse(data)

@router.post('/List_Support_2')
async def list_all_peregons(request_data: ListTrainIndexRequest, session: AsyncSession = Depends(get_async_session)):
    support = Support2(coonection=session)
    data = await support.list_one_train_without_time(train_index=request_data.train_index)
    return JSONResponse(data)

@router.get('/add_data_train_data')
async def add_data_train_data(session: AsyncSession = Depends(get_async_session)):
    with open('TrainData.pickle', 'rb') as f:
        loaded_obj = pickle.load(f)
    for i in loaded_obj:
        stmt = insert(TrainData).values(train_index = i[1], station_data = i[2])
        await session.execute(stmt)
        await session.commit()

@router.post('/one_train_with_time')
async def one_train_with_time(request_data: TrainIndexRequestCurrentData, session: AsyncSession = Depends(get_async_session)):
    support = Support2(coonection=session)
    data = await support.one_train_with_time(train_index=request_data.train_index, current_time=request_data.current_data)
    return JSONResponse(data)

@router.post('/list_one_train_with_time')
async def list_one_train_with_time(request_data: List_TrainIndexRequestCurrentData, session: AsyncSession = Depends(get_async_session)):
    support = Support2(coonection=session)
    data = await support.list_one_train_with_time(train_index=request_data.train_index, current_time=request_data.current_data)
    return JSONResponse(data)