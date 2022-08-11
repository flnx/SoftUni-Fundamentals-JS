function solve(arr) {
  arr.sort((a, b) => b - a);
  let sortedArr = [];

  let i = 0;

  while (arr.length !== 0) {
    if (i % 2 === 0) {
      let getNum = arr.shift();
      sortedArr.push(getNum);
    } else {
      let getNum = arr.pop();
      sortedArr.push(getNum);
    }
    i++;
  }
  console.log(sortedArr.join(' '));
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
