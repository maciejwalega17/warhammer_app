import requests
from bs4 import BeautifulSoup

import json

from sympy import factor 

def getStratagems(url):
    page = requests.get(url)
    soup = BeautifulSoup(page.content, "html.parser")
    results = soup.find_all("div", {"class": "stratWrapper_CS BreakInsideAvoid"})#soup.find(class=" stratWrapper_CS BreakInsideAvoid")
    stratagems={}
    for i in results:
        stratagem={}
        stratagem["name"] = i.find_all('span', recursive=True)[0].get_text()
        stratagem["cost"] = i.find_all('span', recursive=True)[1].get_text()
        stratagem["description"] = i.find_all("div", {"class": "stratText_CS"})[0].get_text()
        stratagems[stratagem["name"]]=stratagem
    return stratagems
    

URL = "https://wahapedia.ru/wh40k9ed/factions/"
factions = ["orks","tyranids"]
toJson = {}
for i in factions:
    toJson[i]=getStratagems(URL+i)
output=json.dumps(toJson)
f = open(".\stratagem_scraper\stratagems.json", "w")
f.write(output)
f.close()

