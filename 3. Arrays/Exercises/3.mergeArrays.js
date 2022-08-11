function solve(arrOne, arrTwo) {
  let thirdArray = [];
  let inputL = arrOne.length;

  for (let i = 0; i < inputL; i++) {
    if (i % 2 === 0) {
      thirdArray.push(Number(arrOne[i]) + Number(arrTwo[i]));
    } else {
      thirdArray.push(arrOne[i] + '' + arrTwo[i]);
    }
  }
  console.log(thirdArray.join(' - '));
}

solve(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
