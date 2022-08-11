// --------------// second try --------------- //
function rageQuit([input]) {
  let messagePattern = /[^\d]+/g;
  let numsPattern = /[\d]+/g;
  let messages = input.match(messagePattern);
  let nums = input.match(numsPattern);
  let msgLen = messages.length;
  let result = '';

  for (let i = 0; i < msgLen; i++) {
    let msg = messages[i].toUpperCase();
    let num = Number(nums[i]);
    result += msg.repeat(num);
  }

  let output = new Set(result).size;
  console.log(`Unique symbols used: ${output}`);
  console.log(result);
}

// --------------// first try --------------- //

// function rageQuit(input) {
//   let pattern = /(?<message>[^0-9]+)(?<repeater>[0-9]{0,20})?/g;
//   let digitsPattern = /\d/g;
//   let match;
//   let testMessage = '';

//   while ((match = pattern.exec(input)) !== null) {
//     let { message, repeater } = match.groups;
//     testMessage += message.toUpperCase().repeat(Number(repeater));
//   }

//   let result = new Set(testMessage).size;

//   console.log(`Unique symbols used: ${result}`);
//   console.log(testMessage);
// }

rageQuit(['aSd2&5s@1']);
