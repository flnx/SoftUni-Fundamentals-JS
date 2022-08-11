function solve(round, precision) {
  if (precision > 15) {
    precision = 15;
  }

  let roundIt = round.toFixed(precision);

  console.log(parseFloat(roundIt));
}

solve(10.5, 3);
