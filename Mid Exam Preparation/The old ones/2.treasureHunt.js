function solve(input) {
  let state = input.shift().split('|');
  let index = 0;
  let command = input[index];

  while (command !== 'Yohoho!') {
    command = command.split(' ');
    let action = command.shift();
    let dropOrStealIndex;

    switch (action) {
      case 'Loot':
        for (let el of command) {
          if (!state.includes(el)) {
            state.unshift(el);
          }
        }
        break;
      case 'Drop':
        dropOrStealIndex = Number(command[0]);
        if (dropOrStealIndex < 0 || dropOrStealIndex > state.length - 1) {
          index++;
          command = input[index];
          continue;
        }
        let dropElement = state.splice(dropOrStealIndex, 1);
        state.push(dropElement[0]);
        break;
      case 'Steal':
        dropOrStealIndex = Number(command[0]);
        let stealing = state.splice(-dropOrStealIndex);
        console.log(stealing.join(', '));
        break;
    }
    index++;
    command = input[index];
  }

  let result = state.map((el) => el.length).reduce((a, b) => (a += b), 0);

  if (state.length <= 0) {
    console.log('Failed treasure hunt.');
  } else {
    result = result / state.length;
    console.log(`Average treasure gain: ${result.toFixed(2)} pirate credits.`);
  }
}

solve([
  'Diamonds|Silver|Shotgun|Gold',
  'Loot Silver Medals Coal',
  'Drop -1',
  'Drop 1',
  'Steal 6',
  'Yohoho!',
]);

// solve(["Gold|Silver|Bronze|Medallion|Cup",
//     "Loot Wood Gold Coins",
//     "Loot Silver Pistol",
//     "Drop 3",
//     "Steal 3",
//     "Yohoho!"
// ]);
