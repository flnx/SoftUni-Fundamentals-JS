function solve(pass) {
  let getTheNums = [];
  let getTheChars = [];

  let = isLengthValid = false;
  let = isOnlyLetters = false;
  let = isNumValid = false;

  for (let i = 0; i < pass.length; i++) {
    let currentChar = pass.charCodeAt(i);
    // get the numbers and chars
    if (currentChar >= 48 && currentChar <= 57) {
      getTheNums.push(currentChar);
    } else {
      getTheChars.push(currentChar);
    }
  }

  // check password length
  if (pass.length >= 6 && pass.length <= 10) {
    isLengthValid = true;
  } else {
    isLengthValid = false;
    console.log('Password must be between 6 and 10 characters');
  }

  for (el of getTheChars) {
    if ((el >= 97 && el <= 122) || (el >= 65 && el <= 90)) {
      isOnlyLetters = true;
    } else {
      console.log('Password must consist only of letters and digits ');
      isOnlyLetters = false;
      break;
    }
  }

  // check for digits
  if (getTheNums.length >= 2) {
    isNumValid = true;
  } else {
    console.log('Password must have at least 2 digits');
  }

  if (isLengthValid && isOnlyLetters && isNumValid) {
    console.log('Password is valid');
  }
}

solve('Pa$s$s');
