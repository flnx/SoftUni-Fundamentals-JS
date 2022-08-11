function solve(startingYield) {
  let spiceExtracted = 0;
  let counter = 0;

  while (startingYield >= 100) {
    counter++;
    spiceExtracted += startingYield - 26;
    startingYield -= 10;
  }

  if (spiceExtracted > 0) {
    console.log(counter);
    console.log(spiceExtracted - 26);
  } else {
    console.log(counter);
    console.log(spiceExtracted);
  }
}

solve(100);
