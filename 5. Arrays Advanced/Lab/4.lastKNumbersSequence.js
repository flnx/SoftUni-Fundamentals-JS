function solve(n, k) {
  let result = [1];

  for (let i = 0; i < n - 1; i++) {
    let sum = 0;
    let newArray = result.slice(-k);

    for (let el of newArray) {
      sum += el;
    }

    result.push(sum);
  }

  console.log(result.join(' '));
}
solve(6, 3);
