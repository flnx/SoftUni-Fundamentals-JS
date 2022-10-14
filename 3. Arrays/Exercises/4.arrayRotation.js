function arrayRotation(arr, rotationsCounter) {
  for (let i = 0; i < rotationsCounter; i++) {
    const element = arr.shift();
    arr.push(element);
  }
  return arr.join(' ');
}

console.log(arrayRotation([51, 47, 32, 61, 21], 2)); // 32 61 21 51 47
