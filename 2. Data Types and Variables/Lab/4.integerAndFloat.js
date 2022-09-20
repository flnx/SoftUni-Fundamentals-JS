function solve(a, b, c) {
  let res = a + b + c;
  res % 1 === 0 ? (res += ' - Integer') : (res += ' - Float');

  console.log(res);
}
solve(100, 200, 303.5);
