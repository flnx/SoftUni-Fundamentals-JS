function solve(arr) {
  let state = arr.shift().split(' ');
  const n = Number(arr.shift());

  const commands = {
    Include: include,
    Remove: removeElem,
    Prefer: prefer,
    Reverse: reverse,
  };

  for (let i = 0; i < n; i++) {
    let [action, ...elems] = arr[i].split(' ');
    const command = commands[action];
    fn = command(elems);
  }

  function include(item) {
    state.push(...item);
  }

  function removeElem(items) {
    if (state.length > 1) {
      let [action, count] = items;
      count = Number(count);

      if (action == 'first') {
        state.splice(0, count);
      } else if (action == 'last') {
        state.splice(-count);
      }
    }
  }

  console.log(`Coffees:\n${state.join(' ')}`);
  
  function prefer(items) {
    items = items.map(Number).sort((a, b) => a - b);
    const isInvalid = items.some((x) => x < 0 || x > state.length - 1);

    if (isInvalid) {
      return;
    }

    let index1 = items[0];
    let index2 = items[1];

    const elem1 = state.splice(index1, 1);
    const elem2 = state.splice(index2 - 1, 1);
    state.splice(index1, 0, elem2[0]);
    state.splice(index2, 0, elem1[0]);
  }
  function reverse() {
    state.reverse();
  }
}
solve([
  'Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee',
  '5',
  'Include TurkishCoffee',
  'Remove first 2',
  'Remove last 1',
  'Prefer 3 1',
  'Reverse',
]);

// Coffees:
// StrongCoffee Magnistipula Robusta BulkCoffee Charrieriana

console.log(`-------------------------------`);

solve([
  'Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee',
  '5',
  'Include OrdinaryCoffee',
  'Remove first 1',
  'Prefer 0 1',
  'Prefer 3 1',
  'Reverse',
]);

// Coffees:
// OrdinaryCoffee Robusta StrongCoffee TurkishCoffee BulkCoffee