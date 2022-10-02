function magicMatrices(arrays) {
  const magicNum = arrays[0].reduce((acc, x) => (acc += x), 0);
  let isMagical = true;

  for (let i = 0; i < arrays.length; i++) {
    let rowSum = 0;
    let colSum = 0;
    for (let c = 0; c < arrays.length; c++) {
      rowSum += arrays[i][c];
      colSum += arrays[c][i];
    }
    if (rowSum !== magicNum || colSum !== magicNum) {
      isMagical = false;
      break;
    }
  }
  return isMagical;
}
console.log(
  magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);

// output:
// true

solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
