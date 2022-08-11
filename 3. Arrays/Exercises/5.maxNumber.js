function solve(array) {
  let newArray = [];
  let arrayL = array.length;

  for (let i = 0; i < arrayL; i++) {
    let isTheBiggest = true;

    for (let r = i + 1; r < arrayL; r++) {
      if (array[i] <= array[r]) {
        isTheBiggest = false;
      }
    }

    if (isTheBiggest) {
      newArray.push(array[i]);
    }
  }

  console.log(newArray.join(' '));
}

solve([41, 41, 34, 20]);
solve([14, 24, 3, 19, 15, 17]);
