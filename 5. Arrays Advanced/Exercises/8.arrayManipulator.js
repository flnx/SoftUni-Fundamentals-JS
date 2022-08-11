function solve(arr, commands) {
  let i = 0;

  while (commands[i] !== 'print') {
    let currentCommand = commands[i].split(' ');
    let action = currentCommand.shift();
    let index = Number(currentCommand.shift());

    switch (action) {
      case 'add':
        arr.splice(index, 0, Number(currentCommand));
        break;
      case 'addMany':
        let elements = currentCommand.map((el) => Number(el));
        arr.splice(index, 0, ...elements);
        break;
      case 'contains':
        console.log(arr.indexOf(index));
        break;
      case 'remove':
        arr.splice(index, 1);
        break;
      case 'shift':
        for (let s = 0; s < index; s++) {
          let getNum = arr.shift();
          arr.push(getNum);
        }
        break;
      case 'sumPairs':
        for (let i = 0; i < arr.length; i++) {
          let cutSecondNum = Number(arr.splice(i + 1, 1));
          arr[i] = arr[i] + cutSecondNum;
        }
        break;
    }
    i++;
  }
  console.log(`[ ${arr.join(', ')} ]`);
}

// solve([1, 2, 4, 5, 6, 7],
// ['add 1 8', 'contains 1', 'contains 3', 'print']);

solve(
  [1, 2, 3, 4, 5],
  ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'sumPairs', 'print']
);
