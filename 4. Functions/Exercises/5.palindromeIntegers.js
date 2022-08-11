function solve(arr) {
  for (let i = 0; i < arr.length; i++) {
    let reverseNum = arr[i].toString().split('').reverse().join('');
    let backToNum = Number(reverseNum);

    if (backToNum === arr[i]) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

solve([123, 323, 421, 121]);
solve([32, 2, 232, 1010]);
