import os
from natasha import (MorphVocab, LOC, AddrExtractor)
import pandas as pd
import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification

from .models.bert_classifier import BertClassifier
from .schemas import ResponseSchema, ListResponseSchema
from .find_coords.main import main 
class Predictor:
    def __init__(self) -> None:
        
        self.topic_group_classifier = BertClassifier(os.path.join(os.path.join(os.getcwd(), 'src', 'data_IO', 'models'), 'NaturaLP_LaBSE_topic_group.pt'),
                                                    tokenizer_path='cointegrated/LaBSE-en-ru')
        
        self.topic_classifier = BertClassifier(os.path.join(os.path.join(os.getcwd(), 'src', 'data_IO', 'models'), 'NaturaLP_LaBSE_topic.pt'),
                                                    tokenizer_path='cointegrated/LaBSE-en-ru')
        
        self.executor_classifier = BertClassifier(os.path.join(os.path.join(os.getcwd(), 'src', 'data_IO', 'models'), 'NaturaLP_LaBSE_executor.pt'),
                                                tokenizer_path='cointegrated/LaBSE-en-ru')

        data = pd.read_csv(os.path.join(os.path.join(os.getcwd(), 'src', 'data_IO', 'models'), 'train_dataset_train.csv'), delimiter=";")
        data = data.rename(columns={'Исполнитель':'executor', 'Группа тем': 'topic_group', 'Текст инцидента':'text', 'Тема': 'topic'})

        self.topic_group_collector = dict(enumerate(list(data.topic_group.unique())))
        self.topic_collector = dict(enumerate(list(data.topic.unique())))
        self.executor_collector = dict(enumerate(list(data.executor.unique())))
        self.setminent_collector = {'negative': 'Негативная', 'neutral': 'Нейтральная','positive': 'Позитивная'}

        self.addr_extractor = AddrExtractor(MorphVocab())

        self.sentimen_tokenizer = AutoTokenizer.from_pretrained('cointegrated/rubert-tiny-sentiment-balanced')
        self.sentimen_model = AutoModelForSequenceClassification.from_pretrained('cointegrated/rubert-tiny-sentiment-balanced')

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
        
    def get_sentiment(self, text, return_type='label'):
        """ Calculate sentiment of a text. `return_type` can be 'label', 'score' or 'proba' """
        with torch.no_grad():
            inputs = self.sentimen_tokenizer(text, return_tensors='pt', truncation=True, padding=True).to(self.sentimen_model.device)
            proba = torch.sigmoid(self.sentimen_model(**inputs).logits).cpu().numpy()[0]
        if return_type == 'label':
            return self.sentimen_model.config.id2label[proba.argmax()]
        elif return_type == 'score':
            return proba.dot([-1, 0, 1])
        return proba
        
    def predict(self, text: str):

        executor = self.executor_collector[self.executor_classifier.predict(text)]
        topic_group = self.topic_group_collector[self.topic_group_classifier.predict(text)]
        topic = self.topic_collector[self.topic_classifier.predict(text)]
        sentiment = self.setminent_collector[self.get_sentiment(text)]
        adress = self.find_adress(text)
        latitude, longitude = main(adress)

        return ResponseSchema(executor=executor,
                              topic_group=topic_group, 
                              text_incident=text,
                              topic=topic,
                              adress=adress,
                              sentiment=sentiment,
                              latitude=latitude,
                              longitude=longitude)
    
    def file_predict(self, path_to_file: str):
        file_data = pd.read_csv(path_to_file)
        list_data = file_data['text'].to_list()

        total_collector = []
        for element in list_data:
            total_collector.append(self.predict(element))
        
        return total_collector