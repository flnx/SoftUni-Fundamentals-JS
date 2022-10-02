function diagonalAttack(arr) {
  const matrix = [];
  let leftDiagonal = 0;
  let rightDiagonal = 0;

  for (let el of arr) {
    matrix.push(el.split(' ').map(Number));
  }

  for (let row = 0; row < matrix.length; row++) {
    leftDiagonal += matrix[row][row];
    rightDiagonal += matrix[row][matrix.length - 1 - row];
  }

  if (leftDiagonal === rightDiagonal) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (i !== j && i !== matrix.length - 1 - j) {
          matrix[i][j] = leftDiagonal;
        }
      }
    }
  }
  const output = matrix.forEach((el) => console.log(el.join(' ')));
}
diagonalAttack([
  '5 3 12 3 1',
  '11 4 23 2 5',
  '101 12 3 21 10',
  '1 4 5 2 2',
  '5 22 33 11 1',
]);

// output:

// 5 15 15 15 1
// 15 4 15 2 15
// 15 15 3 15 15
// 15 4 15 2 15
// 5 15 15 15 1
