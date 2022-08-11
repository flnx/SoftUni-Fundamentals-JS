function solve(start, end) {
  let printNums = '';
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;

    if (i === end) {
      printNums += `${i}`;
    } else {
      printNums += `${i} `;
    }
  }

  console.log(printNums);
  console.log(`Sum: ${sum}`);
}

solve(5, 10);
