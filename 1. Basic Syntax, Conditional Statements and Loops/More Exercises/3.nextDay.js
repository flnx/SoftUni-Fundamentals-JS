function solve(year, month, day) {
  let date = new Date(year, month - 1, day);

  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}

solve(2022, 9, 30);

// Output: 2022-9-30