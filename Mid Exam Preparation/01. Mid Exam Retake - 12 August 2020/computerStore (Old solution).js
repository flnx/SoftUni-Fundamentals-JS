function solve(input) {
  let index = 0;
  let command = input[index];
  let price = 0;

  while (command !== 'regular' && command !== 'special') {
    if (Number(command) <= 0) {
      console.log('Invalid price!');
      index++;
      command = input[index];
      continue;
    }
    price += Number(command);
    index++;
    command = input[index];
  }

  let taxes = price * 0.2;
  let endPrice = taxes + price;

  if (command === 'special') {
    endPrice = endPrice * 0.9;
  }

  if (endPrice > 0) {
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${price.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log('-----------');
    console.log(`Total price: ${endPrice.toFixed(2)}$`);
  } else {
    console.log('Invalid order!');
  }
}

solve(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);
