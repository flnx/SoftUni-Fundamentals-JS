function solve(input) {
  // get the current games
  let currentGames = input[0].split(' ');

  for (let i = 0; i < input.length; i++) {
    let isGameThere = false;
    let separateGames = input[i].split(' ');
    let game = separateGames[1];
    let action = separateGames[0];

    if (action === 'Play!') {
      break;
    }

    let split = game.split('-');

    // check if the game exists
    if (currentGames.includes(split[0])) {
      isGameThere = true;
    }

    if (isGameThere) {
      let index = currentGames.indexOf(split[0]);
      switch (action) {
        case 'Uninstall':
          currentGames.splice(index, 1);
          break;
        case 'Update':
          let updateGame = currentGames.splice(index, 1);
          currentGames.push(updateGame);
          break;
        case 'Expansion':
          let update = split.join(':');
          currentGames.splice(index + 1, 0, update);
          break;
      }
    } else {
      switch (action) {
        case 'Install':
          currentGames.push(split[0]);
          break;
      }
    }
  }
  console.log(currentGames.join(' '));
}

solve([
  'CS WoW Diablo',
  'Install LoL',
  'Uninstall WoW',
  'Update Diablo',
  'Expansion CS-Go',
  'Play!',
]);

// solve(['CS WoW Diablo',
//    'Uninstall XCOM',
//    'Update PeshoGame',
//    'Update WoW',
//    'Expansion Civ-V',
//    'Play!'
// ])
