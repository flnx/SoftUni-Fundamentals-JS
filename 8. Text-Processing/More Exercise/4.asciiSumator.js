function asciiSumator(arr) {
  let [firstChar, secondChar, text] = arr;
  let startChar = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
  let endChar = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
  let result = 0;

  for (let ch of text) {
    let chUnicodePosition = ch.charCodeAt();
    if (chUnicodePosition > startChar && chUnicodePosition < endChar) {
      result += chUnicodePosition;
    }
  }
  console.log(result);
}

asciiSumator(['?', 'E', '@ABCEF']); // 262
