function solve(round, precision) {
  // If the passed precision is more than 15, it should automatically be reduced to 15
  if (precision > 15) {
    precision = 15;
  }

  // the first value is the number to be rounded (10.5);
  let roundIt = round.toFixed(precision); // output > 10.500

  // Now remove the trailing zeros (you can use ParseFloat)
  console.log(parseFloat(roundIt));

}

solve(10.5, 3);

// output: 10.5