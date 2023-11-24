from bert_classifier import BertClassifier
import pandas as pd

from natasha import (MorphVocab, LOC, AddrExtractor)

class Predictor:
    def __init__(self) -> None:
        
        self.topic_group_classifier = BertClassifier(model_path=r'C:\Users\Chubu\OneDrive\Рабочий стол\last_CP\NLP\NaturaLP_LaBSE_topic_group.pt',
                                                    tokenizer_path='cointegrated/LaBSE-en-ru')
        
        self.topic_classifier = BertClassifier(model_path=r'C:\Users\Chubu\OneDrive\Рабочий стол\last_CP\NLP\NaturaLP_LaBSE_topic.pt',
                                                tokenizer_path='cointegrated/LaBSE-en-ru')
        
        # тут будет еще одна модель
        
        data = pd.read_csv("train_dataset_train.csv", delimiter=";")
        data = data.rename(columns={'Исполнитель':'executor', 'Группа тем': 'topic_group', 'Текст инцидента':'text', 'Тема': 'topic'})

        self.topic_group_collector = dict(enumerate(list(data.topic_group.unique())))
        self.topic_collector = dict(enumerate(list(data.topic.unique())))
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
            return ''

    def predict(self, text: str):

        topic_group = self.topic_group_classifier.predict(text)
        topic = self.topic_classifier.predict(text)
        # тут будет определение исполнителя
        adress = self.find_adress(text)

        final_answer = {'Группа тем': self.topic_group_collector[topic_group],
                        'Тема': self.topic_collector[topic],
                        'Исполнитель': '',
                        'Адрес': adress}
        
        return final_answer
    

if __name__ == '__main__':
    tester = Predictor()
    print(tester.predict('Добрый день. Сегодня, 20.08.22, моя мать шла по улице Ленина между домами 96 и 94. Фонари не горят, упала в яму, которую не видно. Сильно ударилась, остались синяки, очень больно. Благо шла не одна.<br>Уважаемая Администрация, сделайте с этим что-нибудь, да и не только с этим. Ходить опасно не только взрослым, но и детям. Если бы упал маленький ребёнок, было бы намного хуже. Фото прилагаю. Спасибо!'))

