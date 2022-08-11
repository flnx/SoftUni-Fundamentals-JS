function solve(input) {
  let inputL = input.length;
  let sumOriginalInput = 0;
  let sumNewArray = 0;
  let newArray = [];

  for (let i = 0; i < inputL; i++) {
    sumOriginalInput += input[i];
    newArray.push(input[i]);

    if (newArray[i] % 2 === 0) {
      newArray[i] += i;
    } else {
      newArray[i] -= i;
    }
    sumNewArray += newArray[i];
  }

  console.log(newArray);
  console.log(sumOriginalInput);
  console.log(sumNewArray);
}
solve([5, 15, 23, 56, 35]);
