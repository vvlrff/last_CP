import os
from natasha import (MorphVocab, LOC, AddrExtractor)
import pandas as pd

from .models.bert_classifier import BertClassifier
from .schemas import ResponseSchema
from .find_coords.main import main 
class Predictor:
    def __init__(self) -> None:
        
        self.topic_group_classifier = BertClassifier(os.path.join(os.path.join(os.getcwd(), 'src', 'data_IO', 'models'), 'NaturaLP_LaBSE_topic_group.pt'),
                                                    tokenizer_path='cointegrated/LaBSE-en-ru')
        
        self.topic_classifier = BertClassifier(os.path.join(os.path.join(os.getcwd(), 'src', 'data_IO', 'models'), 'NaturaLP_LaBSE_topic.pt'),
                                                    tokenizer_path='cointegrated/LaBSE-en-ru')
        
        self.executor_classifier = BertClassifier(os.path.join(os.path.join(os.getcwd(), 'src', 'data_IO', 'models'), 'NaturaLP_LaBSE_executor.pt'),
                                                tokenizer_path='cointegrated/LaBSE-en-ru')
        # тут будет еще одна модель

        data = pd.read_csv(os.path.join(os.path.join(os.getcwd(), 'src', 'data_IO', 'models'), 'train_dataset_train.csv'), delimiter=";")
        data = data.rename(columns={'Исполнитель':'executor', 'Группа тем': 'topic_group', 'Текст инцидента':'text', 'Тема': 'topic'})

        self.topic_group_collector = dict(enumerate(list(data.topic_group.unique())))
        self.topic_collector = dict(enumerate(list(data.topic.unique())))
        self.executor_collector = dict(enumerate(list(data.executor.unique())))

        # тут будет еще однин словарь
        self.addr_extractor = AddrExtractor(MorphVocab())

    def find_adress(self, text: str):
        try:
            matches = self.addr_extractor(text)
            facts = [i.fact.as_json for i in matches]
            adress_collector = dict()
            for i in range(len(facts)):
                tmp = list(facts[i].values())
                adress_collector[tmp[1]] = tmp[0]
            return adress_collector
        except Exception:
            return adress_collector
        
    def predict(self, text: str):

        executor = self.executor_collector[self.executor_classifier.predict(text)]
        topic_group = self.topic_group_collector[self.topic_group_classifier.predict(text)]
        topic = self.topic_collector[self.topic_classifier.predict(text)]
        adress = self.find_adress(text)
        latitude, longitude = main(adress)
        print(latitude, longitude)
        return ResponseSchema(executor=executor, topic_group=topic_group, 
                              text_incident=text, topic=topic, adress=adress,
                              latitude=latitude,longitude=longitude )
    


