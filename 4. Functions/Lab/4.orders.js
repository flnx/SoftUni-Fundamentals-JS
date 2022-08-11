function solve(product, quantity) {
  let price = 0;

  if (product === 'coffee') {
    price = 1.5;
  } else if (product === 'water') {
    price = 1.0;
  } else if (product === 'coke') {
    price = 1.4;
  } else if (product === 'snacks') {
    price = 2.0;
  }

  let result = price * quantity;
  console.log(result.toFixed(2));
}

solve('water', 5);
