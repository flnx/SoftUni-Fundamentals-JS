function solve(input) {
  let fieldSize = input[0];
  let ladybugPositions = input[1].split(' ').map(Number);

  // Create Field
  let createField = [];
  for (let f = 0; f < fieldSize; f++) {
    createField.push(0);
  }
  // Put the Ladybugs on the field (starting positions)
  ladybugPositions.forEach((i) => {
    if (i >= 0 && i < fieldSize) {
      createField[i] = 1;
    }
  });

  for (let i = 2; i < input.length; i++) {
    // create directions
    let [travelFrom, direction, travelTo] = input[i].split(' ');
    travelFrom = Number(travelFrom);
    travelTo = Number(travelTo);

    if (travelFrom < 0 || travelFrom > fieldSize || createField[travelFrom] === 0) {
      continue;
    }
    // negative steps reversal
    if (travelTo < 0) {
      travelTo = Math.abs(travelTo);
      if (direction === 'right') {
        direction = 'left';
      } else if (direction === 'left') {
        direction = 'right';
      }
    }
    if (direction === 'right') {
      // first remove remove the bug
      createField[travelFrom] = 0;
      let newIndex = travelFrom + travelTo;
      while (newIndex < fieldSize) {
        if (createField[newIndex] === 1) {
          newIndex += travelTo;
          continue;
        }
        createField[newIndex] = 1;
        break;
      }
    } else if (direction === 'left') {
      createField[travelFrom] = 0;
      let newIndex = travelFrom - travelTo;
      while (newIndex >= 0) {
        if (createField[newIndex] === 1) {
          newIndex -= travelTo;
          continue;
        }
        createField[newIndex] = 1;
        break;
      }
    }
  }
  console.log(createField.join(' '));
}

solve([
  5,
  '1 3',
  '3 left 2',
  // '1 left -2'
]);

// solve([3, '0 1', '0 right 1', '2 right 1'])

// solve([5, '3', '3 left 2', '1 left -2'])

// solve([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1'])
