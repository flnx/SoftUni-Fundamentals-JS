function solve(num) {
  let convertNum = String(num);
  let counter = 0;
  let saveDigit = '';

  for (let i = 0; i < convertNum.length; i++) {
    counter++;
    if (counter === convertNum.length) {
      saveDigit += convertNum[i];
    }
  }
  let convertDigit = Number(saveDigit);
  if (convertDigit === 1) {
    console.log('one');
  } else if (convertDigit === 2) {
    console.log('two');
  } else if (convertDigit === 3) {
    console.log('three');
  } else if (convertDigit === 4) {
    console.log('four');
  } else if (convertDigit === 5) {
    console.log('five');
  } else if (convertDigit === 6) {
    console.log('six');
  } else if (convertDigit === 7) {
    console.log('seven');
  } else if (convertDigit === 8) {
    console.log('eight');
  } else if (convertDigit === 9) {
    console.log('nine');
  } else if (convertDigit === 0) {
    console.log('zero');
  }
}

solve(5120);
