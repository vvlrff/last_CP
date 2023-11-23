# import emoji

# import re

# cat_name = {
#             'Блоги.txt': '#блог',
#             'Новости и СМИ.txt': '#Новости',
#             'Развлечения и юмор.txt': '#Юмор',
#             'Технологии.txt': '#Технологии',
#             'Экономика.txt': '#Экономика',
#             'Бизнес и стартапы.txt': '#Стартап',
#             'Криптовалюты.txt': '#Криптовалюта',
#             'Путешествия.txt': '#Путешествия',
#             'Маркетинг, PR, реклама.txt': '#Маркетинг',
#             'Психология.txt': '#Психология',
#             'Дизайн.txt': '#Дизайн',
#             'Политика.txt': '#Политика',
#             'Искусство.txt': '#Искусство',
#             'Право.txt': '#Право',
#             'Образование и познавательное.txt': '#Образование',
#             'Спорт.txt': '#Спорт',
#             'Мода и красота.txt': '#Мода',
#             'Здоровье и медицина.txt': '#Здоровье #медицина',
#             'Картинки и фото.txt': '#фото',
#             'Софт и приложения.txt': '#программирование',
#             'Видео и фильмы.txt': '#фильмы',
#             'Музыка.txt': '#Музыка',
#             'Игры.txt': '#Игры',
#             'Еда и кулинария.txt': '#Еда #Кулинария',
#             'Цитаты.txt': '#Цитаты',
#             'Рукоделие.txt': '#Рукоделие',
#             'Финансы.txt': '#Финансы',
#             'Шоубиз.txt': '#Шоубиз'
#             }


# def remove_smileys(text):
#     pattern = r'[\U0001F600-\U0001F64F\u263A-\u26FF\u2700-\u27BF]+'
#     text_without_smileys = emoji.replace_emoji(text)
#     text_without_smileys_and_space = re.sub(' \.', '', text_without_smileys)
    
#     return text_without_smileys_and_space


# for key, value in cat_name.items():
#     news = [] 

#     with open(f'NLP_FORCE\ForTrain2\{key}', mode='r', encoding='utf-8') as file:
#        news_with_smileys = file.readlines()

#        for new in news_with_smileys:
#            news.append(remove_smileys(new))

#     with open(f'NLP_FORCE\ForTrain3\{key}', mode='w', encoding='utf-8') as file:
#         file.writelines(news)    
    


from bert_classifier import BertClassifier
import numpy as np
from sklearn.metrics import f1_score, precision_recall_fscore_support

classifier = BertClassifier(model_path=r'C:\Users\Chubu\OneDrive\Рабочий стол\Programming\news_ai\server\src\api\weights\LaBSE_NaturaLP.pt', tokenizer_path='cointegrated/LaBSE-en-ru')

etalon = [15, 15, 3, 3, 16, 16, 6, 6, 27, 27, 1, 15, 15, 9, 9, 27, 21, 21, 21, 2, 1, 3, 13, 22, 16, 1, 7, 2, 4, 2]
data = []

data.append(classifier.predict('ВИДЕО: новичок «Пари НН» пяткой (!) сравнял счет на 88-й минуте в дебютном (!!) матче, выйдя за 6 минут (!!!) до этого'))
data.append(classifier.predict('Александр Головин забил мяч за «Монако» во втором матче подряд'))
data.append(classifier.predict('«Tesla заново изобретает автомобилестроение». Компания хочет создавать почти всю нижнюю часть авто в виде одной детали'))
data.append(classifier.predict('Первая в мире GeForce RTX 4070, к которой не нужно подключать никаких кабелей питания. Представлена Asus GeForce RTX 4070 Gaming BTF'))
data.append(classifier.predict('Как одеться в стиле old money: берем пример с «Наследников» и «Короны»'))
data.append(classifier.predict('Платье, брюки, рюкзаки и самокат: что понадобится подросткам осенью'))
data.append(classifier.predict('В России запустили отечественную блокчейн-платформу «Конфидент» В России запустили полностью отечественную блокчейн-платформу «Конфидент»Новая разработка представляет собой готовую инфраструктуру для информационных блокчейн-систем — от слоя для работы нод сети до уровня приложений, где выполняются автоматизированные бизнес-процессы'))
data.append(classifier.predict('Швейцария обогнала США по уровню принятия криптовалютm. Лидирующую позицию в рейтинге стран по готовности к внедрению цифровых активов второй год подряд занимает Гонконг'))
data.append(classifier.predict('Новости шоу-бизнеса. Павел Прилучный устроил разборку в центре Москвы, на шоу "Ледниковый период" снова замены и другие'))
data.append(classifier.predict('Звезда турецкого шоу-бизнеса Демет Оздемир вновь оказалась в центре скандала. Недавно появились сообщения о том, что актриса приобрела дом в Афинах и обрела вторую половинку в лице греческого диджея Серджио.'))
data.append(classifier.predict('Презентация Apple, Google врывается в чужой суд, Xiaomi и Huawei договариваются о сотрудничестве: дайджест недели'))
data.append(classifier.predict('«Спартак» при необходимости поможет Промесу в получении паспорта РФ'))
data.append(classifier.predict('Гол Бабича на 91‑й минуте принес «Спартаку» победу над «Сочи» в матче РПЛ'))
data.append(classifier.predict('Глава СНБО Данилов перечислил меры помощи Украины для партнеров'))
data.append(classifier.predict('Польша проведет учения с использованием новых танков K2 у границы с Россией'))
data.append(classifier.predict('Новости шоу-бизнеса. Оправдания Галкина, Меладзе и Лорак не дают вернуться и другие'))

data.append(classifier.predict('6 лет назад вышел бриллиантовый хит Post Malone и 21 Savage «rockstar»'))
data.append(classifier.predict('Альбом Kid Cudi «Man on the Moon: The End of Day» вышел 14 лет назад!'))
data.append(classifier.predict('Offset продолжает подогревать аудиторию перед долгожданным вторым сольным альбомом «SET IT OFF», который выйдет 13 октября.'))
data.append(classifier.predict('В Беларуси был найден идеальный гараж: внутри него и камин, и удобный диван, и бар с алкоголем, и шест для стриптиза, и даже светомузыка! '))
data.append(classifier.predict('Путин объявил частичную мобилизацию ровно год назад!'))
data.append(classifier.predict('В Телеграме появились анимированные жесты в видеокружках для юзеров iPhone на iOS 17'))
data.append(classifier.predict('Дорожные камеры столицы РФ начали штрафовать владельцев авто на 1 тысячу рублей за непристегнутых пассажиров'))
data.append(classifier.predict('WARFACE — ВСЁ! Российские сервера игры в Steam и Epic Games Store закрываются через 3 месяца.   Разработчик Astrum Entertainment (недавно получивший активы My Games) сообщил о прекращении поддержки русскоязычной версии на платформах'))
data.append(classifier.predict('«Я не бездомный, просто на модный показ оделся»: Томми Кэш вновь всех удивил образом — на этот раз он появился в образе бомжа!'))
data.append(classifier.predict('Исследование: люди, работающие из дома, загрязняют атмосферу на 50% меньше, чем обычные сотрудника офиса'))
data.append(classifier.predict('Место мечты: в Токио нашли заведение, где можно арендовать милого питомца для ламповой прогулки '))
data.append(classifier.predict('Видео с девушкой в автомобиле премиум-класса завирусилось в соцсетях, а ответ прилетел откуда не ждали — водитель футбольного «Черноморца» снял обзор на автобус MAN. Просто лучший!'))
data.append(classifier.predict('IKEA не смогли заместить — с учетом ослабления рубля цена на мебель может подорожать еще на 15%'))
data.append(classifier.predict('Родители попросили детишек не есть мармелад… но малыши переглянулись, улыбнулись и с кайфом скушали по штучке!'))

pr, rec, _, _, = precision_recall_fscore_support(etalon, data, average='micro')

f1 = 2 * (pr * rec) / (pr + rec)
f2 = 5 * (pr * rec) / (4 * pr + rec)

print(pr)
print(rec)

print(f1)
print(f2)

