function lettersChangeNumbers(input) {
  let gameWords = input.split(' ').filter((x) => x.length > 1);
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  let result = 0;

  for (let gameWord of gameWords) {
    gameWord = gameWord.split('');
    let firstLetter = gameWord.shift();
    let secondLetter = gameWord.pop();
    let number = Number(gameWord.join(''));
    let firstPosition = findPosition(firstLetter);
    let secondPosition = findPosition(secondLetter);

    if (firstLetter === firstLetter.toUpperCase()) {
      result += number / firstPosition;
    } else {
      result += number * firstPosition;
    }

    if (secondLetter === secondLetter.toUpperCase()) {
      result -= secondPosition;
    } else {
      result += secondPosition;
    }
  }
  console.log(result.toFixed(2));

  function findPosition(letter) {
    let index = letters.indexOf(letter.toLowerCase());
    return index + 1;
  }
}

lettersChangeNumbers('A12b s17G'); 
lettersChangeNumbers('P34562Z q2576f   H456z');

// 330.00
// 46015.13
