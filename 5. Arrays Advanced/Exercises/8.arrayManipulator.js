function solve(arr, commands) {
  const actions = {
    add: (index, currentCommand) => arr.splice(index, 0, Number(currentCommand)),
    addMany(index, currentCommand) {
      let elements = currentCommand.map((el) => Number(el));
      arr.splice(index, 0, ...elements);
    },
    contains: (index) => console.log(arr.indexOf(index)),
    remove: (index) => arr.splice(index, 1),
    shift(index) {
      for (let s = 0; s < index; s++) {
        arr.push(arr.shift());
      }
    } ,
    sumPairs() {
      for (let i = 0; i < arr.length; i++) {
        let cutSecondNum = Number(arr.splice(i + 1, 1));
        arr[i] = arr[i] + cutSecondNum;
      }
    },
  };

  for (let line of commands) {
    if (line == 'print') break;
    let currentCommand = line.split(' ');
    let action = currentCommand.shift();
    let index = Number(currentCommand.shift());

    actions[action](index, currentCommand);
  }
  console.log(`[ ${arr.join(', ')} ]`);
}

solve([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
// 0
// -1
// [ 1, 8, 2, 4, 5, 6, 7 ]
solve(
  [1, 2, 3, 4, 5],
  ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
);
// 0
// -1
// [ 1, 8, 2, 4, 5, 6, 7 ]