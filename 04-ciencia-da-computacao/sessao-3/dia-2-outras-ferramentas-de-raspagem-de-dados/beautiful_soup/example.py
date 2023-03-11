import requests
from bs4 import BeautifulSoup


url = 'https://quotes.toscrape.com'
page = requests.get(url)
html_content = page.text

# cria instância do objeto BeautifulSoup e usa o parser do HTML nativo do Python
soup = BeautifulSoup(html_content, 'html.parser')

# utiliza o método prettify para melhorar a visualização do conteúdo
print(soup.prettify())
