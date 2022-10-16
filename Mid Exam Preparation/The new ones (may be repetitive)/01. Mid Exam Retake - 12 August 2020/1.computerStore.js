function computerStore(arr) {
  let totalPrice = 0;

  for (let price of arr) {
    if (price == 'regular' || price == 'special') {
      break;
    }

    price = Number(price);

    if (Math.sign(price) == -1) {
      console.log('Invalid price!');
      continue;
    }
    // price = price * 1.2;
    totalPrice += price;
  }

  if (totalPrice == 0) {
    console.log('Invalid order!');
    return;
  }

  let totalTax = totalPrice * 0.20;
  let totalPriceWithTax = totalPrice + totalTax;
  const customerType = arr[arr.length - 1];

  if (customerType == 'special') {
    totalPriceWithTax *= 0.9;
  }

  console.log(`Congratulations you've just bought a new computer!`);
  console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
  console.log(`Taxes: ${totalTax.toFixed(2)}$`);
  console.log(`-----------`);
  console.log(`Total price: ${totalPriceWithTax.toFixed(2)}$`);
}

computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);

// Output:

// Congratulations you've just bought a new computer!
// Price without taxes: 1737.36$
// Taxes: 347.47$
// -----------
// Total price: 1876.35$

console.log(`---------------------------------`);

computerStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);

// Output:

// Invalid price!
// Invalid price!
// Congratulations you've just bought a new computer!
// Price without taxes: 1544.96$
// Taxes: 308.99$
// -----------
// Total price: 1853.95$

computerStore(['regular']);

// Output:

// Invalid order!
