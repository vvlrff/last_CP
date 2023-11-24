import os
from .models.bert_classifier import BertClassifier
import pandas as pd
from .schemas import ResponseSchema

class Predictor:
    def __init__(self) -> None:
        
        self.topic_group_classifier = BertClassifier(os.path.join(os.path.join(os.getcwd(), 'src', 'data_IO', 'models'), 'NaturaLP_LaBSE_topic_group.pt'),
                                                    tokenizer_path='cointegrated/LaBSE-en-ru')
        
        self.topic_classifier = BertClassifier(os.path.join(os.path.join(os.getcwd(), 'src', 'data_IO', 'models'), 'NaturaLP_LaBSE_topic.pt'),
                                                    tokenizer_path='cointegrated/LaBSE-en-ru')
        
        # тут будет еще одна модель

        data = pd.read_csv(os.path.join(os.path.join(os.getcwd(), 'src', 'data_IO', 'models'), 'train_dataset_train.csv'), delimiter=";")
        data = data.rename(columns={'Исполнитель':'executor', 'Группа тем': 'topic_group', 'Текст инцидента':'text', 'Тема': 'topic'})

        self.topic_group_collector = dict(enumerate(list(data.topic_group.unique())))
        self.topic_collector = dict(enumerate(list(data.topic.unique())))
        # тут будет еще однин словарь

    def predict(self, text: str):

        topic_group = self.topic_group_collector[self.topic_group_classifier.predict(text)]
        topic = self.topic_collector[self.topic_classifier.predict(text)]
        # тут будет определение исполнителя
        
        return ResponseSchema(executor='Исполнитель А', topic_group=str(topic_group), text_incident=text, topic=str(topic)) # тут будет еще исполнитель
    

# if __name__ != '__main__':
#     tester = Predictor()
#     print(tester.predict('Здравствуйте, скажите пожалуйста сколько времени занимает подпись документов на операцию в г Лысьва?В понедельник были переданы документы на подпись на операцию в г Перми сегодня четверг документы до сих пор не пришли. Операция была назначена на 13 сентября.Из Москвы посылка пришла быстрее.'))

