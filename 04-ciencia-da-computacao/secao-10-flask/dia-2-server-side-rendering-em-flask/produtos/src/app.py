from flask import Flask, render_template
from product import Product
app = Flask(__name__)
products = []
@app.route('/')
def products_view():
    return render_template('products.html', products=products)
   
if __name__ == '__main__':
    app.run()
