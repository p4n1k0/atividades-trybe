import requests
from bs4 import BeautifulSoup


# Acessa uma URL e retorna um objeto do Beautiful Soup
def get_html_soup(url):
    page = requests.get(url)
    html_page = page.text

    soup = BeautifulSoup(html_page, "html.parser")
    soup.prettify()
    return soup


# Recebe um objeto soup e retorna informações das notícias de uma página
def get_page_news(soup):
    news = []

    for post in soup.find_all(
        "article", {"class": "tec--card tec--card--medium"}
    ):
        item = {}
        item["tag"] = post.find("div", {"class": "tec--card__info"}).a.string

        # Mesma lógica da primeira busca, mas trazendo a string dentro da 'div'
        # direto
        item["date"] = post.find(
            "div", {"class": "tec--timestamp__item z--font-semibold"}
        ).string

        # Mesma lógica da busca anterior
        item["time"] = post.find(
            "div", {"class": "z--truncate z-flex-1"}
        ).string

        # Adiciona os itens criado no dicionário à lista 'news'
        news.append(item)

    return news


print(get_page_news(get_html_soup("https://www.tecmundo.com.br/novidades")))
