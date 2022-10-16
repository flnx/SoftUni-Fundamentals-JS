function solve(input) {
  let queue = Number(input[0]);
  let freeSpots = input[1].split(' ').map(Number);

  for (let i = 0; i < freeSpots.length; i++) {
    if (queue === 0) {
      break;
    }
    while (freeSpots[i] < 4) {
      freeSpots[i]++;
      queue--;
      if (queue === 0) {
        break;
      }
    }
  }
  let spaceCheck = freeSpots.filter((a) => a < 4);

  if (spaceCheck.length > 0 && queue === 0) {
    console.log('The lift has empty spots!');
  } else if (spaceCheck.length === 0 && queue > 0) {
    console.log(`There isn't enough space! ${queue} people in a queue!`);
  }
  console.log(freeSpots.join(' '));
}

solve(['0', '2 2']);
