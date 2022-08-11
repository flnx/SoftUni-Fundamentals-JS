function storeProvision(productsInStock, delivered) {
  let store = {};

  for (let i = 0; i < productsInStock.length; i += 2) {
    let product = productsInStock[i];
    let quantity = Number(productsInStock[i + 1]);
    store[product] = quantity;
  }

  for (let i = 0; i < delivered.length; i += 2) {
    let newProduct = delivered[i];
    let quantity = Number(delivered[i + 1]);

    if (!store.hasOwnProperty(newProduct)) {
      store[newProduct] = quantity;
    } else {
      store[newProduct] += quantity;
    }
  }

  for (let key in store) {
    console.log(`${key} -> ${store[key]}`);
  }
}
storeProvision(
  ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
  ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
