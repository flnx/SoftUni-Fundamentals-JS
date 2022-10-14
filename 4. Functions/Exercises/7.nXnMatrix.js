function solve(n) {
  let matrix = [];

  for (let row = 0; row < n; row++) {
    let row = [];
    for (let col = 0; col < n; col++) {
      row.push(n);
    }
    matrix.push(row.join(' '));
  }
  console.log(matrix.join('\n'));
}
solve(4);


// 4 4 4 4
// 4 4 4 4
// 4 4 4 4
// 4 4 4 4