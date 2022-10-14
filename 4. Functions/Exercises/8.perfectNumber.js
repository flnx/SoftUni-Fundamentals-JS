function solve(n) {
  let res = 0;

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      res += i;
    }
  }

  let result = res === n ? 'We have a perfect number!' : "It's not so perfect.";
  console.log(result);
}

solve(6); // We have a perfect number!
