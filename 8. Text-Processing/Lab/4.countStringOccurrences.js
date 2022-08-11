// first solution
function countStringOccurrences(text, word) {
  let result = text.split(' ').filter((x) => x === word).length;
  console.log(result);
}

countStringOccurrences('This is a word and it also is a sentence', 'is');

// second solution
function countStringOccurrences(text, word) {
  let counter = 0;
  let sentence = text.split(' ');
  for (let wordFinder of sentence) {
    if (wordFinder === word) {
      counter++;
    }
  }
  console.log(counter);
}
countStringOccurrences('This is a word and it also is a sentence', 'is');
