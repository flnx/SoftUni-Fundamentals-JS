function spiralMatrix(rowEnd, colEnd) {
  let counter = 1;
  let matrix = [];

  // create arrays
  for (let i = 0; i < rowEnd; i++) {
    matrix.push([]);
  }

  rowEnd--;
  colEnd--;

  // matrix
  for (let i = 0; i <= colEnd; i++) {
    // ->
    for (let a = i; a < rowEnd; a++) {
      matrix[i][a] = counter;
      counter++;
    }

    // ⬇
    for (let b = i; b <= colEnd; b++) {
      matrix[b][colEnd] = counter;
      counter++;
    }

    colEnd--;

    // <-
    for (let c = colEnd; c >= i; c--) {
      matrix[rowEnd][c] = counter;
      counter++;
    }

    rowEnd--;

    // ↑
    for (let d = rowEnd; d > i; d--) {
      matrix[d][i] = counter;
      counter++;
    }
  }

  for (let arr of matrix) {
    console.log(arr.join(' '));
  }
}
spiralMatrix(10, 10);

// output

// 1 2 3 4 5 6 7 8 9 10
// 36 37 38 39 40 41 42 43 44 11
// 35 64 65 66 67 68 69 70 45 12
// 34 63 84 85 86 87 88 71 46 13
// 33 62 83 96 97 98 89 72 47 14
// 32 61 82 95 100 99 90 73 48 15
// 31 60 81 94 93 92 91 74 49 16
// 30 59 80 79 78 77 76 75 50 17
// 29 58 57 56 55 54 53 52 51 18
// 28 27 26 25 24 23 22 21 20 19
