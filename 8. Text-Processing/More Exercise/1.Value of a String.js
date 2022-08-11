function valueOfAString(arr) {
  let [text, command] = arr;
  let result = 0;
  for (letter of text) {
    if (command === 'LOWERCASE') {
      if (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
        result += letter.charCodeAt();
      }
    } else if (command === 'UPPERCASE') {
      if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
        result += letter.charCodeAt();
      }
    }
  }
  console.log(`The total sum is: ${result}`);
}

valueOfAString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);
valueOfAString(['AC/DC', 'UPPERCASE']);
