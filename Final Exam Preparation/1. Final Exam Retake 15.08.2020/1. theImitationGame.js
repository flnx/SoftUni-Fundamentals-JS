function theImitationGame(arr) {
  let message = arr.shift();

  const commands = {
    Move: move,
    Insert: insert,
    ChangeAll: changeAll,
  };

  while (arr[0] != 'Decode') {
    let line = arr.shift();
    let [command, num, value] = line.split('|');

    const action = commands[command];
    action(num, value);
  }

  console.log(`The decrypted message is: ${message}`);

  function move(n) {
    n = Number(n);
    const firstMsgPart = message.substring(0, n);
    const secondMsgPart = message.substring(n);
    message = secondMsgPart + firstMsgPart;
  }

  function insert(index, value) {
    index = Number(index);
    const firstMsgPart = message.substring(0, index);
    const secondMsgPart = message.substring(index);
    message = firstMsgPart + value + secondMsgPart;
  }

  function changeAll(substr, replacement) {
    // message = message.replace(new RegExp(substr, 'g'), replacement); // not working in Judge???
    message = message.split(substr).join(replacement);
  }
}

theImitationGame(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);
// The decrypted message is: Hello

theImitationGame(['owyouh', 'Move|2', 'Move|3', 'Insert|3|are', 'Insert|9|?', 'Decode']);
//The decrypted message is: howareyou?
