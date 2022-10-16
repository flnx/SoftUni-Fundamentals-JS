function shoppingList(arr) {
  let list = arr.shift().split('!');

  const commands = {
    Urgent: urgent,
    Unnecessary: unnecessary,
    Correct: correct,
    Rearrange: rearrange
  }

  for (const line of arr) {
    if (line == 'Go Shopping!') {
      break;
    }

    let [action, productOne, productTwo] = line.split(' ');
    let fn = commands[action];

    fn(productOne, productTwo)
  }

  console.log(list.join(', '));

  function urgent(item) {
    if (!list.includes(item)) {
      list.unshift(item);
    }
  }

  function unnecessary(item) {
    if (list.includes(item)) {
      list.splice(list.indexOf(item), 1);
    }
  }

  function correct(item1, item2) {
    if (list.includes(item1)) {
      list.splice(list.indexOf(item1), 1, item2);
    }
  }

  function rearrange(item) {
    if (list.includes(item)) {
      const product = list.splice(list.indexOf(item), 1);
      list.push(product);
    }
  }
}
shoppingList([
  'Tomatoes!Potatoes!Bread',
  'Unnecessary Milk',
  'Urgent Tomatoes',
  'Go Shopping!',
]); // Tomatoes, Potatoes, Bread

console.log(`-----------------------`);

shoppingList([
  'Milk!Pepper!Salt!Water!Banana',
  'Urgent Salt',
  'Unnecessary Grapes',
  'Correct Pepper Onion',
  'Rearrange Grapes',
  'Correct Tomatoes Potatoes',
  'Go Shopping!',
]); // Milk, Onion, Salt, Water, Banana
