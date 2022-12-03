function passwordReset(arr) {
  let password = arr[0];

  const commands = {
    TakeOdd: takeOdd,
    Cut: cut,
    Substitute: substitute,
  };

  let n = 1;

  while (arr[n] != 'Done') {
    let [action, t1, t2] = arr[n].split(' ');
    let fn = commands[action];
    fn(t1, t2);
    n++;
  }

  console.log(`Your password is: ${password}`);

  function takeOdd() {
    let updatedPassword = '';

    for (let i = 1; i < password.length; i += 2) {
      updatedPassword += password[i];
    }

    password = updatedPassword;
    console.log(password);
  }

  function cut(index, length) {
    index = Number(index);
    length = Number(length);
    const toRemove = password.substring(index, index + length);
    password = password.replace(toRemove, '');

    console.log(password);
  }

  function substitute(substr, substitute) {
    
    if (password.includes(substr)) {
      let regex = new RegExp(substr, 'g');
      password = password.replace(regex, substitute);

      return console.log(password);
    }

    console.log('Nothing to replace!');
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

// icecream::hot::summer
// icecream::hot::mer
// icecream-hot-mer
// Nothing to replace!
// Your password is: icecream-hot-mer

console.log();

passwordReset([
  'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
  'TakeOdd',
  'Cut 18 2',
  'Substitute ! ***',
  'Substitute ? .!.',
  'Done',
]);

// programming!is!funny
// programming!is!fun
// programming***is***fun
// Nothing to replace!
// Your password is: programming***is***fun
