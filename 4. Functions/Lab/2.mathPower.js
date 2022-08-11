function solve(n, pow) {
  let res = 1;

  for (let i = 0; i < pow; i++) {
    res *= n;
  }
  console.log(res);
}

solve(3, 4);
