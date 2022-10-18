function memoryGame(arr) {
  let sequence = arr.shift().split(' ');
  let moves = 0;

  for (let nums of arr) {
    if (nums == 'end') {
      console.log('Sorry you lose :(');
      console.log(sequence.join(' '));
      return;
    }

    let indexes = nums
      .split(' ')
      .map(Number)
      .sort((a, b) => a - b);

    const [num1, num2] = indexes;
    moves++;

    if (playerCheats(num1, num2, indexes)) {
      addElements();
      console.log(`Invalid input! Adding additional elements to the board`);
      continue;
    }

    checkForMatch(num1, num2);

    if (doesNotHaveDuplicates()) {
      console.log(`You have won in ${moves} turns!`);
      return;
    }
  }

  function doesNotHaveDuplicates() {
    return sequence.every((val, i) => sequence.indexOf(val) == i);
  }

  function checkForMatch(elem1, elem2) {
    if (sequence[elem1] == sequence[elem2]) {
      console.log(`Congrats! You have found matching elements - ${sequence[elem1]}!`);
      sequence.splice(elem1, 1);
      sequence.splice(elem2 - 1, 1);
      return;
    }
    console.log('Try again!');
  }

  function addElements() {
    const middle = Math.floor(sequence.length / 2);
    sequence.splice(middle, 0, ...[`-${moves}a`, `-${moves}a`]);
  }

  function playerCheats(n1, n2, indexes) {
    return indexes.some((x) => x < 0 || x > sequence.length - 1 || n1 == n2);
  }
}

memoryGame(['1 1 2 2 3 3 4 4 5 5', '1 0', '-1 0', '1 0', '1 0', '1 0', 'end']);

console.log(`--------------------`);

memoryGame(['a 2 4 a 2 4', '0 3', '0 2', '0 1', '0 1', 'end']);

// Output:

// Congrats! You have found matching elements - a!
// Congrats! You have found matching elements - 2!
// Congrats! You have found matching elements - 4!
// You have won in 3 turns!

console.log(`--------------------`);

memoryGame(['a 2 4 a 2 4', '4 0', '0 2', '0 1', '0 1', 'end']);

// Output:

// Try again!
// Try again!
// Try again!
// Try again!
// Sorry you lose :(
// a 2 4 a 2 4
