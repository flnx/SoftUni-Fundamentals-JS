function magicSum(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let tempArray = [];

    for (let j = i; j < arr.length; j++) {
      if (arr[i] != arr[j]) {
        break;
      }
      tempArray.push(arr[i]);
    }
    if (result.length < tempArray.length) {
      result = tempArray;
    }
  }
  return result.join(' ');
}
console.log(magicSum([5, 5, 5, 3, 2, 1])); // 5 5 5
console.log(magicSum([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])); // 2 2 2
console.log(magicSum([1, 1, 1, 2, 3, 1, 3, 3])); // 1 1 1
console.log(magicSum([4, 4, 4, 4])); // 4 4 4 4
console.log(magicSum([0, 1, 1, 5, 2, 2, 6, 3, 3])); // 1 1
