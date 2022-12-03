function activationKeys(arr) {
  let activationKey = arr[0];

  const commands = {
    Contains: contains,
    Flip: flip,
    Slice: slice,
  };

  let n = 1;

  while (arr[n] != 'Generate') {
    let [action, t1, t2, t3] = arr[n].split('>>>');

    const fn = commands[action];
    fn(t1, t2, t3);
    n++;
  }

  console.log(`Your activation key is: ${activationKey}`);

  function slice(startIndex, endIndex) {
    startIndex = Number(startIndex);
    endIndex = Number(endIndex);

    const toRemove = activationKey.substring(startIndex, endIndex);
    activationKey = activationKey.replace(toRemove, '');
    console.log(activationKey);
  }

  function flip(command, startIndex, endIndex) {
    startIndex = Number(startIndex);
    endIndex = Number(endIndex);

    let newText = activationKey.substring(startIndex, endIndex);
    let oldText = newText;

    newText = command == 'Upper' ? newText.toUpperCase() : newText.toLowerCase();
    activationKey = activationKey.replace(oldText, newText);
    console.log(activationKey);
  }

  function contains(substring) {
    if (activationKey.includes(substring)) {
      return console.log(`${activationKey} contains ${substring}`);
    }

    console.log('Substring not found!');
  }
}

activationKeys([
  'abcdefghijklmnopqrstuvwxyz',
  'Slice>>>2>>>6',
  'Flip>>>Upper>>>3>>>14',
  'Flip>>>Lower>>>5>>>7',
  'Contains>>>def',
  'Contains>>>deF',
  'Generate',
]);

// abghijklmnopqrstuvwxyz
// abgHIJKLMNOPQRstuvwxyz
// abgHIjkLMNOPQRstuvwxyz
// Substring not found!
// Substring not found!
// Your activation key is: abgHIjkLMNOPQRstuvwxyz

console.log();

activationKeys([
  '134softsf5ftuni2020rockz42',
  'Slice>>>3>>>7',
  'Contains>>>-rock',
  'Contains>>>-uni-',
  'Contains>>>-rocks',
  'Flip>>>Upper>>>2>>>8',
  'Flip>>>Lower>>>5>>>11',
  'Generate',
]);


// 134sf5ftuni2020rockz42
// Substring not found
// Substring not found
// Substring not found
// 134SF5FTuni2020rockz42
// 134SF5ftuni2020rockz42
// Your activation key is: 134SF5ftuni2020rockz42