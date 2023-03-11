import requests
from bs4 import BeautifulSoup


url = 'https://quotes.toscrape.com'
page = requests.get(url)
html_content = page.text

# cria instância do objeto BeautifulSoup e usa o parser do HTML nativo do Python
soup = BeautifulSoup(html_content, 'html.parser')

# acessa tag 'title'
title = soup.title

# retorna o elemento HTL da tag
print(title)

# acessando a string de uma tag
print(title.string)

# verifica o tipo dessa string
print(type(title.string))
