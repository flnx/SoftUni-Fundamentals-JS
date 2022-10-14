function reverseInPlace(arr) {
  return arr.reverse().join(' ');
}
console.log(reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])); // nop klm hig def abc
console.log(reverseInPlace(['33', '123', '0', 'dd'])); // dd 0 123 33




//`Old Solution`
function solve(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let startElement = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = startElement;
  }
  console.log(arr.join(' '));
}

solve(['a', 'b', 'c', 'd', 'e']);
