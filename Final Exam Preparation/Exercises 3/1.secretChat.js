function secretChat(input) {
  let actions = {
    ChangeAll: changeAll,
    Reverse: reverse,
    InsertSpace: insertSpace,
  };

  let message = input.shift();

  while (input[0] !== 'Reveal') {
    let [command, valueOne, valueTwo] = input.shift().split(':|:');
    let action = actions[command];
    let output = action(valueOne, valueTwo);
    if (output) {
      console.log(output);
    } else {
      console.log('error');
    }
  }

  console.log(`You have a new text message: ${message}`);

  function insertSpace(index) {
    index = Number(index);
    let leftHalf = message.substring(0, index);
    let rightHalf = message.substring(index);
    return (message = leftHalf + ' ' + rightHalf);
  }

  function reverse(newValue) {
    if (message.includes(newValue)) {
      message = message.replace(newValue, '');
      newValue = newValue.split('').reverse().join('');
      return (message = message + newValue);
    }
  }

  function changeAll(oldValue, newValue) {
    let pattern = new RegExp(oldValue, 'g'); // Judge doesn't accept replaceAll. Node is outdated...
    message = message.replace(pattern, newValue);
    return message;
  }
}
secretChat([
  'heVVodar!gniV',
  'ChangeAll:|:V:|:l',
  'Reverse:|:!gnil',
  'InsertSpace:|:5',
  'Reveal',
]);

// secretChat([
//   'Hiware?uiy',
//   'ChangeAll:|:i:|:o',
//   'Reverse:|:?uoy',
//   'Reverse:|:jd',
//   'InsertSpace:|:3',
//   'InsertSpace:|:7',
//   'Reveal',
// ]);
