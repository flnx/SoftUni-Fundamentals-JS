function solve(arr) {
  let firstNum = arr[0];
  let lastNum = arr[arr.length - 1];
  let result = Number(firstNum) + Number(lastNum);
  console.log(result);
}
solve(['20', '30', '40']);
