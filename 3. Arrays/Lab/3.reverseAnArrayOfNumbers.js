function solve(n, inputArr) {
  let arr = [];
  for (let i = n - 1; i >= 0; i--) {
    arr.push(inputArr[i]);
  }
  console.log(arr.join(' '));
}

solve(3, [10, 20, 30, 40, 50]);
