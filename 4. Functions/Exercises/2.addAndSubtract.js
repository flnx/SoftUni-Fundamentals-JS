function solve(x, y, z) {
  let sum = (numOne, numTwo) => numOne + numTwo;
  let subtract = (firstTwoNums, thirdNum) => firstTwoNums - thirdNum;

  let sumFirstTwoNums = sum(x, y);
  let finalResult = subtract(sumFirstTwoNums, z);

  console.log(finalResult);
}

solve(23, 6, 10); // 19
