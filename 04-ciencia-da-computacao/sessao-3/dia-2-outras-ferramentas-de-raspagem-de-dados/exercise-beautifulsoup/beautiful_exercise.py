import requests
from bs4 import BeautifulSoup


html = requests.get('https://pt.wikipedia.org/wiki/Rock_in_Rio')

URL = 'https://pt.wikipedia.org'
html = requests.get(f'{URL}/wiki?Rock_in_Rio')

page =