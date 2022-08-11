function solve(input) {
  let sorted = input.sort();

  for (let i = 0; i < input.length; i++) {
    console.log(`${1 + i}.${sorted[i]}`);
  }
}

solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
