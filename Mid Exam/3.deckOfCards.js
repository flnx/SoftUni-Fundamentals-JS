function solve(arr) {
  let state = arr.shift().split(', ');
  const n = Number(arr.shift());

  const commands = {
    Add: add,
    Remove: removeElem,
    'Remove At': removeAt,
    Insert: insert,
  };

  for (let i = 0; i < n; i++) {
    let [action, ...elems] = arr[i].split(', ');

    const command = commands[action];
    fn = command(elems);
  }

  console.log(state.join(', '));

  function add(cardName) {
    if (state.includes(...cardName)) {
      console.log('Card is already in the deck');
      return;
    }
    state.push(...cardName);
    console.log('Card successfully added');
  }

  function removeElem(cardName) {
    const index = state.indexOf(...cardName);
    if (index != -1) {
      state.splice(index, 1);
      console.log('Card successfully removed');
      return;
    }
    console.log('Card not found');
  }

  function removeAt(index) {
    index = Number(index);
    if (index < 0 || index > state.length - 1) {
      console.log('Index out of range');
      return;
    }
    state.splice(index, 1);
    console.log('Card successfully removed');
  }

  function insert(elems) {
    const index = Number(elems[0]);
    const cardName = elems[1];

    if (index < 0 || index > state.length - 1) {
      console.log('Index out of range');
      return;
    }

    if (state.includes(cardName)) {
      console.log('Card is already added');
      return;
    }

    state.splice(index, 0, cardName);
    console.log(`Card successfully added`);
  }
}

solve([
  'Ace of Diamonds, Queen of Hearts, King of Clubs',
  '3',
  'Add, King of Diamonds',
  'Insert, 2, Jack of Spades',
  'Remove, Ace of Diamonds',
]);

// Card successfully added
// Card successfully added
// Card successfully removed
// Queen of Hearts, Jack of Spades, King of Clubs, King of Diamonds

console.log('');

solve([
  'Two of Clubs, King of Spades, Five of Spades, Jack of Hearts',
  '2',
  'Add, Two of Clubs',
  'Remove, Five of Hearts',
]);

// Card is already in the deck
// Card not found
// Two of Clubs, King of Spades, Five of Spades, Jack of Hearts

console.log('');

solve([
  'Jack of Spades, Ace of Clubs, Jack of Clubs',
  '2',
  'Insert, -1, Queen of Spades',
  'Remove At, 1',
]);

// Index out of range
// Card successfully removed
// Jack of Spades, Jack of Clubs