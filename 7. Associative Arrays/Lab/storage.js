function storage(arr) {
  let myMap = new Map();

  for (let el of arr) {
    let [product, quantity] = el.split(' ');

    if (!myMap.has(product)) {
      myMap.set(product, Number(quantity));
    } else {
      let oldQuantity = myMap.get(product);
      myMap.set(product, oldQuantity + Number(quantity));
    }
  }

  for (let [name, quantity] of myMap) {
    console.log(`${name} -> ${quantity}`);
  }
}
storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);
