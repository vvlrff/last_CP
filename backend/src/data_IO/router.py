from fastapi import APIRouter, File, UploadFile
from fastapi.responses import FileResponse 
from .schemas import ResponseSchema, ListResponseSchema
from .interface import Predictor
from .AI_model import Magic
import os

router = APIRouter (
    prefix='/api',
    tags= ['api']
)

@router.post("/upload", response_model=ListResponseSchema)
async def upload_file(file: UploadFile = File(...)):

    file_path = os.path.join(os.path.join(os.getcwd(), 'src', 'data_IO', 'stash_files'), file.filename)  
    with open(file_path, "wb") as f:  
        f.write(await file.read())

    magic = Magic(path_file=file_path)
    path = magic.res_file()
    
    return FileResponse(path, filename=file.filename)

@router.get('/string_res', response_model=ResponseSchema) #response_model=ResponseSchema
async def string_res(user_input:str):
    model = Predictor()
    answer = model.predict(user_input)
    return answer
