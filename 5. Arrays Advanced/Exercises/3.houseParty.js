function solve(arr) {
  let newList = [];

  arr.forEach((name) => {
    let command = name.split(' ');
    if (command[2] === 'going!') {
      if (!newList.includes(command[0])) {
        newList.push(command[0]);
      } else {
        console.log(`${command[0]} is already in the list!`);
      }
    } else {
      if (newList.includes(command[0])) {
        let index = newList.indexOf(command[0]);
        newList.splice(index, 1);
      } else {
        console.log(`${command[0]} is not in the list!`);
      }
    }
  });

  console.log(newList.join('\n'));
}
solve([
  'Tom is going!',
  'Annie is going!',
  'Tom is going!',
  'Garry is going!',
  'Jerry is going!',
]);
