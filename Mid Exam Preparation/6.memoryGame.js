function solve(input) {
  let game = input.shift().split(' ');
  let index = 0;
  let command = input[index];
  let currentMove = 0;

  while (command !== 'end' && game.length !== 0) {
    currentMove++;
    command = command.split(' ');
    let firstIndex = Number(command[0]);
    let secondIndex = Number(command[1]);

    if (
      firstIndex >= 0 &&
      firstIndex <= game.length - 1 &&
      secondIndex >= 0 &&
      secondIndex <= game.length - 1 &&
      firstIndex !== secondIndex
    ) {
      if (game[firstIndex] === game[secondIndex]) {
        console.log(`Congrats! You have found matching elements - ${game[firstIndex]}!`);
        let iOrder = sortIndexes(firstIndex, secondIndex);
        game.splice(iOrder[0], 1);
        game.splice(iOrder[1] - 1, 1);
      } else {
        console.log('Try again!');
      }
    } else {
      let findMiddle = Math.floor(game.length / 2);
      game.splice(findMiddle, 0, `-${currentMove}a`);
      game.splice(findMiddle + 1, 0, `-${currentMove}a`);
      console.log('Invalid input! Adding additional elements to the board');
    }
    index++;
    command = input[index];
  }

  if (command === 'end' && game.length !== 0) {
    console.log('Sorry you lose :(');
    console.log(game.join(' '));
  } else {
    console.log(`You have won in ${currentMove} turns!`);
  }

  function sortIndexes(a, b) {
    let x = Math.min(a, b),
      y = Math.max(a, b);
    return [x, y];
  }
}

solve(['a 2 4 a 2 4', '0 3', '0 2', '0 1', '0 1', 'end']);
