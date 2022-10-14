// solution 1
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

// 22 - 1522 - 110 - 5636 - 46

// solution 2

function mergeArrays(arrOne, arrTwo) {
  let result = arrOne.map((x, i) => {
    if (i % 2 == 0) {
      return Number(x) + Number(arrTwo[i]);
    }
    return x += arrTwo[i];
  });
  return result.join(' - ');
}

console.log(mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']));

// 22 - 1522 - 110 - 5636 - 46