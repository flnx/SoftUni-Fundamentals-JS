function decryptingCommands(arr) {
  let message = arr[0];

  const commands = {
    Replace: replace,
    Cut: cut,
    Make: make,
    Check: check,
    Sum: sum,
  };

  let i = 1;

  while (arr[i] != 'Finish') {
    const [command, t1, t2] = arr[i].split(' ');
    const fn = commands[command];

    fn(t1, t2);
    i++;
  }

  function replace(currentChar, newChar) {
    let regex = new RegExp(currentChar, 'g');
    message = message.replace(regex, newChar);
    console.log(message);
  }

  function cut(i1, i2) {
    i1 = Number(i1);
    i2 = Number(i2);

    if (message[i1] == undefined || message[i2] == undefined) {
      return console.log('Invalid indices!');
    }

    const removeText = message.substring(i1, i2 + 1);
    message = message.replace(removeText, '');

    console.log(message);
  }

  function make(command) {
    message = command == 'Upper' ? message.toUpperCase() : message.toLowerCase();
    console.log(message);
  }

  function check(str) {
    if (message.includes(str)) {
      console.log(`Message contains ${str}`);
    } else {
      console.log(`Message doesn't contain ${str}`);
    }
  }

  function sum(i1, i2) {
    i1 = Number(i1);
    i2 = Number(i2);

    if (message[i1] == undefined || message[i2] == undefined) {
      return console.log('Invalid indices!');
    }

    let sum = message
      .substring(i1, i2 + 1)
      .split('')
      .reduce((acc, curr) => acc + curr.charCodeAt(), 0);

    console.log(sum);
  }
}

decryptingCommands([
  'ILikeSoftUni',
  'Replace I We',
  'Make Upper',
  'Check SoftUni',
  'Sum 1 4',
  'Cut 1 4',
  'Finish',
]);

// WeLikeSoftUni
// WELIKESOFTUNI
// Message doesn't contain SoftUni
// 293
// WESOFTUNI

console.log();

decryptingCommands([
  'HappyNameDay',
  'Replace p r',
  'Make Lower',
  'Cut 2 23',
  'Sum -2 2',
  'Finish',
]);

// HarryNameDay
// harrynameday
// Invalid indices!
// Invalid indices!
