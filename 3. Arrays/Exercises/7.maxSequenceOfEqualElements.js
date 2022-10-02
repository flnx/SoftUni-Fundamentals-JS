function solve(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let tempArray = [];

    for (let r = i; r < array.length; r++) {
      if (!array[i] === array[r]) {
        tempArray.push(array[i]);
      } else {
        break;
      }
    }

    if (newArray.length < tempArray.length) {
      newArray = tempArray;
    }
  }

  console.log(newArray.join(' '));
}

solve([4, 4, 4, 4]);
