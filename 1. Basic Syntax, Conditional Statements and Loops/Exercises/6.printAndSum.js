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


// 5 6 7 8 9 10 
// Sum: 45