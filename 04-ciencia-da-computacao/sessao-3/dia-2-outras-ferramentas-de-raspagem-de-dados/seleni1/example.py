# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web
from selenium import webdriver
from selenium.webdriver.common.by import By # Importa o By

# criação de uma instância de navegador utilizando o Firefox
firefox = webdriver.Firefox()

# requisições para essa instância criada utilizando o método `get`
firefox.get('https://books.toscrape.com/')

# Define função que fará o scrape da URL recebida
def scrape(url):
    firefox.get(url)

    # itera entre elementos com essa classe
    for book in firefox.find_elements(By.CLASS_NAME, 'product_pod'):
        # cria dict vazio para guardar os elementos capturados
        new_item = {}

        # cria uma chave 'title' no dict que vai receber o resultado da busca
        # O título está em uma tag anchor que está dentro de uma tag 'H3'
        new_item['title'] = (
            book.find_elements(By.TAG_NAME, 'h3')
            .find_element(By.TAG_NAME, 'a')
            .get_attribute('innerHTML')
        )

        # o link está dentro de um atributo 'href'
        new_item['link'] = (
            book.find_element(By.CLASS_NAME, 'image_container')
            .find_element(By.TAG_NAME, 'a')
            .get_attribute('href')
        )
        
        print(new_item)


scrape('https://books.toscrape.com/')
