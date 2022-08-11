// ? ------------- first solution -----------------
function censoredWords(text, word) {
  let sentence = text.replace(word, '*'.repeat(word.length));
  while (sentence.includes(word)) {
    sentence = sentence.replace(word, '*'.repeat(word.length));
  }
  console.log(sentence);
}
censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');

// ? --------------- second solution -----------------

function censoredWords(text, word) {
  let sentence = text.split(word);
  let result = sentence.join('*'.repeat(word.length));
  console.log(result);
}

censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');

// ? --------------- third solution -----------------

function censoredWords(text, word) {
  let find = new RegExp(word, 'g');
  let result = text.replace(find, '*'.repeat(word.length));
  console.log(result);
}

censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');
