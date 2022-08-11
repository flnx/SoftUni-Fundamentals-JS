function solve(array, mnum) {
  let arrayL = array.length;
  let newArray = [];
  let saveNums = '';

  for (let i = 0; i < arrayL; i++) {
    for (let r = i + 1; r < arrayL; r++) {
      if (array[i] + array[r] === mnum) {
        saveNums = `${array[i]} ${array[r]}`;
        newArray.push(saveNums);
      }
    }
  }
  console.log(newArray.join('\n'));
}

solve([1, 7, 6, 2, 19, 23], 8);
