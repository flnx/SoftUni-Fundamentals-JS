function secretChat(arr) {
  let message = arr[0];

  const commands = {
    ChangeAll: change,
    Reverse: reverse,
    InsertSpace: insertSpace,
  };

  let n = 1;
  while (arr[n] !== 'Reveal') {
    const [command, t1, t2] = arr[n].split(':|:');
    const fn = commands[command];

    fn(t1, t2);
    n++;
  }

  console.log(`You have a new text message: ${message}`);

  function insertSpace(index) {
    index = Number(index);
    let firstPart = message.substring(0, index);
    let secondPart = message.substring(index);
    message = firstPart + ' ' + secondPart;
    console.log(message);
  }

  function change(substr, replacement) {
    const pattern = new RegExp(substr, 'g');
    message = message.replace(pattern, replacement);
    console.log(message);
  }

  function reverse(newValue) {
    if (message.includes(newValue)) {
      message = message.replace(newValue, '');
      newValue = newValue.split('').reverse().join('');
      return console.log((message = message + newValue));
    }
    console.log('error');
  }
}

secretChat([
  'heVVodar!gniV',
  'ChangeAll:|:V:|:l',
  'Reverse:|:!gnil',
  'InsertSpace:|:5',
  'Reveal',
]);

// hellodar!gnil
// hellodarling!
// hello darling!

console.log();

secretChat([
  'Hiware?uiy',
  'ChangeAll:|:i:|:o',
  'Reverse:|:?uoy',
  'Reverse:|:jd',
  'InsertSpace:|:3',
  'InsertSpace:|:7',
  'Reveal',
]);

// Howare?uoy
// Howareyou?
// error
// How areyou?
// How are you?
// You have a new text message: How are you?
