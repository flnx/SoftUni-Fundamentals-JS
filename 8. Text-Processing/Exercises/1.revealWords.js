function revealWords(words, symbolsToReplace) {
  let getWords = words.split(', ');
  let text = symbolsToReplace.split(' ');

  for (let word of getWords) {
    for (let char of text) {
      if (word.length === char.length && char.startsWith('*')) {
        symbolsToReplace = symbolsToReplace.replace(char, word);
      }
    }
  }
  console.log(symbolsToReplace);
}

revealWords(
  'great, learning',
  'softuni is ***** place for ******** new programming languages'
);

// softuni is great place for learning new programming languages
