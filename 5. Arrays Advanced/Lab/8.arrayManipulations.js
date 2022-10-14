function solve(commands) {
  let arr = commands.shift().split(' ').map(Number);

  const actions = {
    Add: (num) => arr.push(num),
    Remove: (num) => (arr = arr.filter((el) => el !== num)),
    RemoveAt: (index) => arr.splice(index, 1),
    Insert: (num, index) => arr.splice(index, 0, num),
  };

  for (let i = 0; i < commands.length; i++) {
    let [command, numOne, numTwo] = commands[i].split(' ');
    actions[command](Number(numOne), Number(numTwo));
  }
  console.log(arr.join(' '));
}
solve(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']); // 4 53 6 8 43 3
solve(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']); // 6 2 6 65 42 8
