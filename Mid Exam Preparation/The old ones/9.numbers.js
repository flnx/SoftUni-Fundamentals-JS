function numbers(input) {
  let arr = input.split(' ').map(Number);
  let average = 0;

  for (let x of arr) {
    average += x;
  }

  average = average / arr.length;
  let filterArr = arr
    .filter((a) => a > average)
    .sort((a, b) => a - b)
    .slice(-5);

  console.log(filterArr.length > 0 ? filterArr.reverse().join(' ') : 'No');
}

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('-1');
