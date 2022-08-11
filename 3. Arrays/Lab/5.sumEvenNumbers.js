function solve(arr) {
  let result = 0;

  for (el of arr) {
    if (el % 2 === 0) {
      result += Number(el);
    }
  }

  console.log(result);
}

solve(['3', '5', '7', '9']);
