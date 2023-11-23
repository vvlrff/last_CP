
from .schemas import ResponseSchema

class Magic():

    def __init__(self,  path_file:str='', magic:str = 'magic',):
        self.magic = magic
        self.path_file = path_file

    
    def res_file(self):
        return self.path_file
    
    def res_string(self):
        executor = self.magic
        topic_group = self.magic
        text_incident = self.magic
        topic = self.magic
        return ResponseSchema(executor=executor, topic_group=topic_group, text_incident=text_incident, topic=topic)