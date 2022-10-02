// ---------- Updated Solution ----------
function login(arr) {
  const userName = arr.shift();
  let isLogged = false;

  for (let i = 0; i < arr.length; i++) {
    let reversed = arr[i].split('').reverse().join('');

    if (userName == reversed) {
      console.log(`User ${userName} logged in.`);
      isLogged = true;
      break;
    }
    if (i < 3) console.log(`Incorrect password. Try again.`);
  }

  if (!isLogged) {
    console.log(`User ${userName} blocked!`);
  }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);


// output:
// x3 Incorrect password. Try again.
// User Acer logged in.

`---------------------------------`

// output: 2
// x3 Incorrect password. Try again.
// User sunny blocked!