function solve(n) {
  for (let row = 1; row <= n; row++) {
    let printLine = '';

    for (let col = 1; col <= row; col++) {
      printLine += `${row} `;
    }
    console.log(printLine);
  }
}
solve(3);

// 1
// 1 2 
// 3 3 3 