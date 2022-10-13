function dayOfWeek(n, arr) {
  return arr.slice(0, n).reverse().join(' ')
}
console.log(dayOfWeek(3, [10, 20, 30, 40, 50])); // 30 20 10
console.log(dayOfWeek(4, [-1, 20, 99, 5])); // 5 99 20 -1 
console.log(dayOfWeek(2, [66, 43, 75, 89, 47])); // 43 66 

`---------------`
// old solution
`---------------`
function solve(n, inputArr) {
  let arr = [];
  for (let i = n - 1; i >= 0; i--) {
    arr.push(inputArr[i]);
  }
  console.log(arr.join(' '));
}

solve(3, [10, 20, 30, 40, 50]);
