function maxNumber(arr) {
  let result = [];

  for (let a = 0; a < arr.length; a++) {
    let isBiggest = true;

    for (let b = a + 1; b < arr.length; b++) {
      if (arr[a] <= arr[b]) {
        isBiggest = false;
        continue;
      }
    }

    if (isBiggest) {
      result.push(arr[a]);
    }
  }
  return result.join(' ');
}

// solution 2
function maxNumber(arr) {
  return arr.filter((x, i) => arr.slice(i + 1).every((y) => x > y)).join(' ');
}

console.log(maxNumber([1, 4, 3, 2])); // 4 3 2
console.log(maxNumber([14, 24, 3, 19, 15, 17])); // 24 19 17
console.log(maxNumber([41, 41, 34, 20])); // 41 34 20
console.log(maxNumber([27, 19, 42, 2, 13, 45, 48])); // 48
