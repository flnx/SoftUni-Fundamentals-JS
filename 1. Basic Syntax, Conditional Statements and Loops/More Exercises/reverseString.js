function solve(word) {
  let printLetters = '';

  for (let i = word.length - 1; i >= 0; i--) {
    printLetters += word[i];
  }

  console.log(printLetters);
}

solve('Softuni');
