
from bert_classifier import BertClassifier
import pandas as pd
from sklearn.metrics import precision_recall_fscore_support

classifier = BertClassifier(model_path=r'C:\Users\Chubu\OneDrive\Рабочий стол\last_CP\NLP\NaturaLP_LaBSE_topic_group.pt',
                            tokenizer_path='cointegrated/LaBSE-en-ru')

test_data = pd.read_csv('test_topic_group.csv', encoding='utf-8', delimiter='\t')

texts = list(test_data['text'])[:100]
labels = list(test_data['label'])[:100]

predictions = [classifier.predict(t) for t in texts]

print(predictions)
print(labels)

precision, recall, f1score = precision_recall_fscore_support(labels, predictions,average='micro')[:3]

print(f'precision: {precision}, recall: {recall}, f1score: {f1score}')