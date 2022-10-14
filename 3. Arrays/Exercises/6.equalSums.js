function equalSums(arr) {
  if (arr.length < 2) {
    return 0;
  }

  for (let i = 1; i < arr.length; i++) {
    let leftSum = 0;
    for (let a = 0; a < i; a++) {
      leftSum += arr[a];
    }

    let rightSum = 0;
    for (let b = i + 1; b < arr.length; b++) {
      rightSum += arr[b];
    }

    if (leftSum == rightSum) {
      return i;
    }
  }
  return 'no';
}

console.log(equalSums([1, 2, 3, 3])); // 2
console.log(equalSums([1, 2])); // no
console.log(equalSums([1])); // 0
console.log(equalSums([1, 2, 3])); // no
console.log(equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])); // 3