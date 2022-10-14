function stringSubstring(word, text) {
  let newText = text.toLowerCase().split(' ');

  if (newText.includes(word.toLowerCase())) {
    return console.log(word);
  }
  console.log(`${word} not found!`);
}

stringSubstring('javascript', 'JavaScript is the best programming language'); // javascript
