function solve(input) {
  let index = 0;
  let username = input[index];
  index++;
  let password = '';
  let counter = 0;
  let isBlocked = false;

  for (let i = username.length - 1; i >= 0; i--) {
    password += username[i];
  }

  while (input[index] !== password) {
    counter++;
    if (counter > 3) {
      console.log(`User ${username} blocked!`);
      isBlocked = true;
      break;
    }
    console.log('Incorrect password. Try again.');
    index++;
  }

  if (!isBlocked) {
    console.log(`User ${username} logged in.`);
  }
}
solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
