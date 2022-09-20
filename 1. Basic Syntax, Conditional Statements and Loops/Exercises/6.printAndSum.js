function solve(start, end) {
  let printNums = '';
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
    printNums += `${i} `;
  }

  console.log(printNums);
  console.log(`Sum: ${sum}`);
}

solve(5, 10);
