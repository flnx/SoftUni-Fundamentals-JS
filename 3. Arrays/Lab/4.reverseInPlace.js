function solve(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let startElement = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = startElement;
  }
  console.log(arr.join(' '));
}

solve(['a', 'b', 'c', 'd', 'e']);
