function solve(input) {
  let sumNums = input
    .split(' ')
    .map(Number)
    .reduce((a, b) => (a += b), 0);
  let calcAverage = sumNums / input.split(' ').length;

  let filterOutBiggest = input
    .split(' ')
    .map(Number)
    .filter((el) => el > calcAverage)
    .sort((a, b) => b - a)
    .slice(0, 5);

  console.log(filterOutBiggest.length > 0 ? filterOutBiggest.join(' ') : 'No');
}

solve('5 2 3 4 -10 30 40 50 20 50 60 60 51');
// solve('10 20 30 40 50');
