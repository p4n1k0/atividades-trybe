from parsel import Selector
import requests


URL_BASE = 'http://books.toscrape.com/catalogue/'
# Define a primeira página com próxima a ter seu conteúdo recuperado
next_page_url = 'page-1.html'
while next_page_url:
    # Busca o conteúdo da próxiuma página
    response = requests.get(URL_BASE + 'page-1.html')
    selector = Selector(text=response.text)
    # Imprime os produtos de uma determinada página
    for product in selector.css('.product_pod'):
        # Busca e extrai o título e o preço
        title = product.css('h3 a::attr(title)').get()
        price = product.css('.price_color::text').get()
        print(title, price)
        # Busca o detalhe de um produto
        detail_href = product.css('h3 a::attr(href)').get()
        detail_page_url = URL_BASE + detail_href
        # Baixa o conteúdo da página de detalhes
        detail_response = requests.get(detail_page_url)
        detail_selector = Selector(text=detail_response.text)
        # recupera a descrição do produto
        # ~ significa a tag irmã
        description = detail_selector.css('#product_description ~ p::text').get()
        print(description)
