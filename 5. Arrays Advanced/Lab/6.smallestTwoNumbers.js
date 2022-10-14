function solve(input) {
  let ascendingSorted = input
    .sort((a, b) => a - b)
    .slice(0, 2)
    .join(' ');

  console.log(ascendingSorted);
}

solve([30, 15, 50, 5]); // 5 15
solve([3, 0, 10, 4, 7, 3]); // 0 3
