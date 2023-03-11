import requests
from bs4 import BeautifulSoup


url = 'https://quotes.toscrape.com'
page = requests.get(url)
html_content = page.text

# cria instância do objeto BeautifulSoup e usa o parser do HTML nativo do Python
soup = BeautifulSoup(html_content, 'html.parser')

# imprime todas as ocorrências da tag 'p' da página ou uma lista vazia caso nenhum elemento corresponda a pesquisa
# print(soup.find_all('p'))

# imprime o elemento com o id especificado ou 'None' caso nenhum elemento corresponda a pesquisa
# print(soup.find(id='quote'))

# imprime todo o texto da página
print(soup.get_text())

# imprime todas as 'divs' que peossuem a classe 'quote' ou uma lista vazia, caso nenhum elemento corresponda a pesquisa
# print(soup.find_all('div', {'class': 'quote'}))
