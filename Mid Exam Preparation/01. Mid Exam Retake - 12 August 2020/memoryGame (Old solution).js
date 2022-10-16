function memoryGame(input) {
  const sequence = input.shift().split(' ');
  let counter = 0;

  for (let indexes of input) {
    if (indexes == 'end' || sequence.length <= 0) {
      break;
    }
    counter++;
    indexes = indexes.split(' ').map(Number).sort((a, b) => b - a);
    
    const [index1, index2] = indexes;
    const isIndexValid = indexes.every((x) => x >= 0 && x < sequence.length && index1 !== index2);

    if (!isIndexValid) {
      const findMid = Math.floor(sequence.length / 2);
      const boardElement = `-${counter}a`;
      sequence.splice(findMid, 0, ...[boardElement, boardElement]);
      console.log('Invalid input! Adding additional elements to the board');
      continue;
    }

    const [match1, match2] = indexes.map((x) => sequence[x]);

    if (match1 != match2) {
      console.log('Try again!');
      continue;
    }

    sequence.splice(index1, 1);
    sequence.splice(index2, 1);
    console.log(`Congrats! You have found matching elements - ${match1}!`);
  }

  if (sequence.length == 0) {
    console.log(`You have won in ${counter} turns!`);
  } else {
    console.log(`Sorry you lose :(`);
    console.log(sequence.join(' '));
  }
}

memoryGame(['1 1 2 2 3 3 4 4 5 5', '1 0', '-1 0', '1 0', '1 0', '1 0', 'end']);
console.log(`---------------------------------`);
memoryGame(['a 2 4 a 2 4', '4 0', '0 2', '0 1', '0 1', 'end']);
console.log(`---------------------------------`);
memoryGame(['a 2', '0 3', '0 2', '0 1', '0 1', 'end']);


// FIRST OUTPUT

// Congrats. You have found matching elements - 1
// Invalid input! Adding additional elements to the board
// Congrats. You have found matching elements - 2
// Congrats. You have found matching elements - 3
// Congrats. You have found matching elements - -2a
// Sorry you lose :(
// 4 4 5 5


// SECOND OUTPUT:

// Try again! x4
// Sorry you lose :(
// a 2 4 a 2 4

// THIRD OUTPUT:

// Congrats. You have found matching elements - a
// Congrats. You have found matching elements - 2
// Congrats. You have found matching elements - 4
// You have won in 3 turns!
