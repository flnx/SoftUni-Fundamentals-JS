function solve(year, month, day) {
  let date = new Date(year, month - 1, day + 1);
  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}

solve(2020, 8, 5);
