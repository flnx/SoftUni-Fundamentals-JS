function counterStrike(arr) {
  let energy = Number(arr.shift());
  let wins = 0;

  for (let distance of arr) {
    if (distance == 'End of battle') {
      break;
    }
    distance = Number(distance);

    if (energy - distance < 0) {
      console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
      return
    }

    wins++;
    energy -= distance;
    
    if (wins % 3 == 0) {
      energy += wins;
    }

  }
  console.log(`Won battles: ${wins}. Energy left: ${energy}`);
}
counterStrike(['100', '10', '10', '10', '1', '2', '3', '73', '10']);
counterStrike(['200', '54', '14', '28', '13', 'End of battle']);
