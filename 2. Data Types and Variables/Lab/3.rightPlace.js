function solve(firstWord, char, secondWord) {
  let replacer = firstWord.replace('_', char);

  let output = replacer === secondWord ? 'Matched' : 'Not Matched';
  console.log(output);
}
solve('Str_ng', 'i', 'String');