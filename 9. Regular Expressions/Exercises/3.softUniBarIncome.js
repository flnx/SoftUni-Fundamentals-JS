function softUniBarIncome(input) {
  let pattern = /%([A-Z][a-z]+)%.*?<(\w+)>.*?\|(\d+)\|.*?(-?\d+(?:\.\d+)?)\$/;
  let totalIncome = 0;

  while (input[0] !== 'end of shift') {
    let line = input.shift();
    let match = pattern.exec(line);
    console.log(match);

    if (match !== null) {
      let [_, name, product, qty, price] = match;
      let spent = Number(qty) * Number(price);
      totalIncome += spent;

      console.log(`${name}: ${product} - ${spent.toFixed(2)}`);
    }
  }
  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome([
  '%George%<Croissant>|2|10.3$',
  '%Peter%<Gum>|1|1.3$',
  '%Maria%<Cola>|1|2.4$',
  'end of shift',
]);
