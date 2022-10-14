function signCheck(numOne, numTwo, numThree) {
  let counter = 0;

  if (numOne < 0) {
    counter++;
  }

  if (numTwo < 0) {
    counter++;
  }

  if (numThree < 0) {
    counter++;
  }
  counter = counter % 2 == 0 ? 'Positive' : 'Negative';

  console.log(counter);
}

signCheck(5, 12, -15);
