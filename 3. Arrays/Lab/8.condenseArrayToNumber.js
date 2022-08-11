function solve(arr) {
  let result = [];

  for (let el of arr) {
    result.push(el);
  }

  while (result.length > 1) {
    let temp = [];

    for (let i = 0; i < result.length - 1; i++) {
      temp[i] = result[i] + result[i + 1];
    }

    result = temp;
  }

  console.log(result.join(' '));
}

solve([1, 2, 3, 4, 5]);
