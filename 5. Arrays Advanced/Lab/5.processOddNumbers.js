function solve(arr) {
  let oddPositions = arr.filter((x, i) => i % 2 !== 0);
  let multiplyOdds = oddPositions.map((x) => x * 2);
  let reverseNums = multiplyOdds.reverse();

  console.log(multiplyOdds.join(' '));
}
solve([10, 15, 20, 25]);
