function solve(n1, n2, n3) {
  let biggestNum = Number.MIN_SAFE_INTEGER;

  if (biggestNum <= n1) {
    biggestNum = n1;
  }
  if (biggestNum <= n2) {
    biggestNum = n2;
  }
  if (biggestNum <= n3) {
    biggestNum = n3;
  }
  console.log(biggestNum);
}

solve(-2, -1, -99);
