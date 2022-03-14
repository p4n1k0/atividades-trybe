const wakeUp = () => 'Acordando!!';

const breakfast = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

function doingThings (callback) {
  const result = callback();
  console.log(result);
};

// doingThings(wakeUp);
// doingThings(breakfast);
// doingThings(sleep);


const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
   { [product]: listPrices[index] }
));

const listProducts = updateProducts(products, prices);

console.log(listProducts);