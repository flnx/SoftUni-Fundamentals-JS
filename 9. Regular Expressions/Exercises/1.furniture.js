function furniture(params) {
  let pattern = />>(?<furniture>[A-Za-z]+)<<(?<price>\d+(?:\.?\d+)?)!(?<quantity>[0-9]+)/;
  let finalPrice = 0;
  let boughtFurniture = [];

  while (params[0] !== 'Purchase') {
    let line = params.shift();
    let currentProduct = pattern.exec(line);

    if (currentProduct !== null) {
      let { furniture, price, quantity } = currentProduct.groups;
      let totalPrice = Number(price) * Number(quantity);
      finalPrice += totalPrice;
      boughtFurniture.push(furniture);
    }
  }

  console.log('Bought furniture:');
  boughtFurniture.forEach((product) => console.log(product));
  console.log(`Total money spend: ${finalPrice.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);

// Bought furniture:
// Sofa
// TV
// Total money spend: 2436.69