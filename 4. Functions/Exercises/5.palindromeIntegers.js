function solve(arr) {
  for (let i = 0; i < arr.length; i++) {
    let reverseNum = arr[i].toString().split('').reverse().join('');
    reverseNum = Number(reverseNum);
    if (reverseNum == arr[i]) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

solve([123, 323, 421, 121]);
console.log(`----------`);
solve([32, 2, 232, 1010]);


// false
// true
// false
// true
// ----------
// false
// 2
// true x2
// false