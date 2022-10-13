function solve(field, special) {
  let specialNumber = special[0];
  let specialPower = special[1];

  while (field.includes(specialNumber)) {
    let index = field.indexOf(specialNumber);
    let detonationPower = specialPower * 2 + 1;
    let range = index - specialPower;

    if (range < 0) {
      detonationPower += range;
      range = 0;
    }
    field.splice(range, detonationPower);
  }
  console.log(field.reduce((a, b) => a + b, 0));
}
solve([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
// solve([1, 7, 7, 1, 2, 3], [7, 1]);
