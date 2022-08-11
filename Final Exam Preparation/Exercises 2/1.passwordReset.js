function passwordReset(input) {
  let actions = {
    TakeOdd: takeOdds,
    Cut: cutElements,
    Substitute: replaceElements,
  };

  let password = input.shift();

  for (let line of input) {
    if (line === 'Done') break;
    let [command, elementOne, elementTwo] = line.split(' ');
    let action = actions[command];
    let output = action(elementOne, elementTwo);
    if (output) {
      console.log(output);
    } else {
      console.log('Nothing to replace!');
    }
  }

  console.log(`Your password is: ${password}`);

  function replaceElements(oldElement, newElement) {
    let oldElPattern = new RegExp(oldElement, 'g');
    if (password.includes(oldElement)) {
      return (password = password.replace(oldElPattern, newElement));
    }
  }

  function cutElements(index, length) {
    index = Number(index);
    length = Number(length);
    let leftHalf = password.substring(0, index);
    let rightHalf = password.substring(index + length);
    return (password = leftHalf + rightHalf);
  }

  function takeOdds() {
    return (password = password
      .split('')
      .filter((letter, index) => index % 2 !== 0)
      .join(''));
  }
}

passwordReset([
  'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr',
  'TakeOdd',
  'Cut 15 3',
  'Substitute :: -',
  'Substitute | ^',
  'Done',
]);
