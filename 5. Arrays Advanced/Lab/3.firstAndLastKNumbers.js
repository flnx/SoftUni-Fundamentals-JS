function solve(arr) {
  let k = arr[0];
  let newArray = arr.slice(1);

  let firstResult = newArray.slice(0, k);
  let firstResult2 = newArray.slice(-k);

  console.log(firstResult.join(' '));
  console.log(firstResult2.join(' '));
}
solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]);
