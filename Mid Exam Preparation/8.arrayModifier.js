function solve(arr) {
  let newArr = arr.shift().split(' ').map(Number);
  let index = 0;
  let command = arr[index];
  while (command !== 'end') {
    command = command.split(' ');

    switch (command[0]) {
      case 'swap':
        swapNumbers(+command[1], +command[2]);
        break;
      case 'multiply':
        multiply(+command[1], +command[2]);
        break;
      case 'decrease':
        for (let i = 0; i < newArr.length; i++) {
          newArr[i]--;
        }
        break;
    }
    index++;
    command = arr[index];
  }

  console.log(newArr.join(', '));

  function swapNumbers(a, b) {
    let startIndex = Math.min(a, b);
    let endIndex = Math.max(a, b);
    let getStart = newArr.splice(startIndex, 1);
    let getEnd = newArr.splice(endIndex - 1, 1);
    newArr.splice(startIndex, 0, getEnd[0]);
    newArr.splice(endIndex, 0, getStart[0]);
    return newArr;
  }

  function multiply(x, y) {
    let startIndex = x;
    let endIndex = y;
    let multiplyIndexes = newArr[startIndex] * newArr[endIndex];
    newArr.splice(startIndex, 1, multiplyIndexes);
    return newArr;
  }
}

solve([
  '23 -2 321 87 42 90 -123',
  'swap 1 3',
  'swap 3 6',
  'swap 1 0',
  'multiply 1 2',
  'multiply 2 1',
  'decrease',
  'end',
]);
