function solve(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentArr = arr[i];
    for (let c = 0; c < arr[i].length; c++) {
      if (currentArr[c] === currentArr[c + 1]) {
        counter++;
      }

      if (arr[i + 1] !== undefined) {
        let nextArr = arr[i + 1];
        if (currentArr[c] === nextArr[c]) {
          counter++;
        }
      }
    }
  }
  console.log(counter);
}

solve([
  ['2', '2', '5', '7', '4'],
  ['4', '0', '5', '3', '4'],
  ['2', '5', '5', '4', '2'],
]);
