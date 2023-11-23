from pydantic import BaseModel


class InputUserSchema(BaseModel):
    text_incident:str

class ResponseSchema(BaseModel):
    executor:str
    topic_group:str
    text_incident:str
    topic:str