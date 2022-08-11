function solve(firstWord, char, secondWord) {
  let replacer = firstWord.replace('_', char);

  let output = replacer === secondWord ? 'Matched' : 'Not Matched';
  console.log(output);
}
solve('Str_ng', 'i', 'String');

// function solve(firstWord, char, secondWord) {

//     let symbol = '';

//     for (let i = 0; i < firstWord.length; i++) {

//         if (firstWord[i] === "_") {
//             symbol += char;
//         } else {
//             symbol += firstWord[i];
//         }
//     }

//     if (symbol === secondWord) {
//         console.log('Matched');
//     } else {
//         console.log('Not Matched');
//     }

// }
// solve('Str_ng', 'i', 'String')
