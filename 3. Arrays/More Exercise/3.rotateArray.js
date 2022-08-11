function solve(arr) {
  let rotationNum = Number(arr[arr.length - 1]);
  arr.pop();

  for (let i = 0; i < rotationNum; i++) {
    let takeElement = arr.pop();
    arr.unshift(takeElement);
  }

  console.log(arr.join(' '));
}
solve(['1', '2', '3', '4', '2']);
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
