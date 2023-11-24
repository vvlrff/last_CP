from pydantic import BaseModel


class InputUserSchema(BaseModel):
    text_incident:str


class ResponseSchema(BaseModel):
    executor:str
    topic_group:str
    text_incident:str
    topic:str
    sentiment: str
    adress:dict
    latitude:float | None
    longitude:float | None


class ListResponseSchema(BaseModel):
    results:list[ResponseSchema]