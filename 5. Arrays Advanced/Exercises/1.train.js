function solve(arr) {
  let wagons = arr
    .shift()
    .split(' ')
    .map((el) => Number(el));
  let capacity = Number(arr.shift(1));

  for (let i = 0; i < arr.length; i++) {
    let currentCommand = arr[i].split(' ');

    if (currentCommand[0] === 'Add') {
      wagons.push(Number(currentCommand[1]));
    } else {
      for (let k = 0; k < wagons.length; k++) {
        if (wagons[k] + Number(currentCommand[0]) <= capacity) {
          wagons[k] += Number(currentCommand[0]);
          break;
        }
      }
    }
  }
  console.log(wagons.join(' '));
}
solve(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
solve(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);
