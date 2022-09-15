function solve(n) {
  let sum = 0;
  let counter = 1;

  for (let i = 0; i < n; i++) {
    console.log(counter);
    sum += counter;
    counter += 2;
  }

  console.log(`Sum: ${sum}`);
}
solve(5);
