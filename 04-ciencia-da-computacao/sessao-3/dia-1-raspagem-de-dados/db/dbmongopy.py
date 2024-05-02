from pymongo import MongoClient


# Estes valores podem ser modificados passando uma URI
# client = MongoClient('mongodb://localhost:27017/')
with MongoClient() as client:
# o banco de dados catalogado é criado caso não exista
    db = client.catalogue
# busca utilizando filtros
    for book in db.books.find({'title': {'$regex': 't'}}):
        print(book['title'])
