const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProdutes = (listProducts, listPrices) => listProducts.map((product, i) => ({ [product]: listPrices[i]}));

const listProducts = updateProdutes(products, prices);

console.log(listProducts);