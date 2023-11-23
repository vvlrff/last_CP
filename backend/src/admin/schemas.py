from pydantic import BaseModel


class TrainIndexRequest(BaseModel):
    train_index: str

class TrainIndexRequestCurrentData(BaseModel):
    train_index: str
    current_data: str

class List_TrainIndexRequestCurrentData(BaseModel):
    train_index: list
    current_data: str

class ListTrainIndexRequest(BaseModel):
    train_index: list
