import os
import pymorphy3
import pandas as pd



def normal_form_city(dict_disloc:dict):
    morph = pymorphy3.MorphAnalyzer()   
    try:
        city = dict_disloc['город']
        raw_city = morph.parse(city)[0]
        city = raw_city.normal_form
        return city
    except Exception as e:
        return None

def lat_lon(city:str, path=os.path.join(os.path.join(os.getcwd(), 'src', 'data_IO', 'find_coords'), 'cities.csv')):
    if city == None:
        return None, None
    df = pd.read_csv(path)
    df_cities = df[['Город', 'Регион', 'Широта', 'Долгота']]
    df_cities['Город'] = df_cities['Город'].str.lower()
    df_cities['Регион'] = df_cities['Регион'].str.lower()
    city = city.lower()
    res_city = df_cities[df_cities['Город'] == city]
    res_reg = df_cities[df_cities['Регион'] == city]
    result = pd.concat([res_city, res_reg])

    if not result.empty:
        return result['Широта'].iloc[0], result['Долгота'].iloc[0]
    else:
        return None, None
def main(dict_disloc:dict):
    latitude, longitude = lat_lon(normal_form_city(dict_disloc))
    return latitude, longitude