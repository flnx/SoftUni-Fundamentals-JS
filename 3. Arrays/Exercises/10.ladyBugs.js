function ladyBugs(input) {
  let fieldSize = input[0];
  let ladybugPositions = input[1].split(' ').map(Number);

  let field = [];
  for (let i = 0; i < fieldSize; i++) {
    field.push(0);
  }

  for (let x of ladybugPositions) {
    if (x >= 0 && x < fieldSize) {
      field[x] = 1;
    }
  }

  for (let i = 2; i < input.length; i++) {
    // create directions
    let [position, direction, flyTo] = input[i].split(' ');
    position = Number(position);
    flyTo = Number(flyTo);

    if (position < 0 || position > fieldSize || field[position] != 1) {
      continue;
    }
    // negative steps reversal
    if (flyTo < 0) {
      flyTo = Math.abs(flyTo);
      if (direction === 'right') {
        direction = 'left';
      } else if (direction === 'left') {
        direction = 'right';
      }
    }
    if (direction === 'right') {
      field[position] = 0;
      let newIndex = position + flyTo;
      
      while (newIndex < fieldSize) {
        if (field[newIndex] === 1) {
          newIndex += flyTo;
          continue;
        }
        field[newIndex] = 1;
        break;
      }
    } else if (direction === 'left') {
      field[position] = 0;
      let newIndex = position - flyTo;
      while (newIndex >= 0) {
        if (field[newIndex] === 1) {
          newIndex -= flyTo;
          continue;
        }
        field[newIndex] = 1;
        break;
      }
    }
  }
  console.log(field.join(' '));
}

ladyBugs([3, '0 1', '0 right 1', '2 right 1']); // 1 1 0
ladyBugs([5, '3', '3 left 2', '1 left -2']); // 0 0 0 1 0
ladyBugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']); // 0 0 0
