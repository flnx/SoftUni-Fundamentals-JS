function theLift(arr) {
  let queue = Number(arr.shift());
  let states = arr.join(' ').split(' ').map(Number);

  for (let i = 0; i < states.length; i++) {
    while (states[i] < 4) {
      if (queue == 0) {
        break;
      }
      states[i]++;
      queue--;
    }
    if (queue == 0) {
      break;
    }
  }

  let spots = states.filter((a) => a < 4);

  if (queue > 0 && spots.length == 0) {
    console.log(`There isn't enough space! ${queue} people in a queue!`);
  } else if (queue == 0 && spots.length > 0) {
    console.log(`The lift has empty spots!`);
  }

  console.log(states.join(' '));
}

theLift(['15', '0 0 0 0 0']);

// Output:
// First state - 4 0 0 0 -> 11 people left
// Second state – 4 4 0 0 -> 7 people left
// Third state – 4 4 4 0 -> 3 people left

console.log(`------------------`);

theLift(['20', '0 2 0']);

// Output:
// First state - 4 2 0  -> 16 people left
// Second state – 4 4 0  -> 14 people left
// Third state – 4 4 4 -> 10 people left, but there're no more wagons.
