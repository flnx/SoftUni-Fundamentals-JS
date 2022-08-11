// first solution
function replaceRepeatingChars(input) {
  let text = input[0];

  for (let i = 1; i < input.length; i++) {
    if (input[i] !== input[i - 1]) {
      text += input[i];
    }
  }
  console.log(text);
}

// second solution
function replaceRepeatingChars(input) {
  let text = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== input[i + 1]) {
      text.push(input[i]);
    }
  }
  console.log(text.join(''));
}

// third solution
function replaceRepeatingChars(input) {
  let result = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      continue;
    }
    result += input[i];
  }
  console.log(result);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssa');
// output: abcdedsa
