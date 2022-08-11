function solve(arr) {
  let newArray = [];
  let biggestNum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= biggestNum) {
      biggestNum = arr[i];
      newArray.push(arr[i]);
    }
  }

  console.log(newArray.join(' '));
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
