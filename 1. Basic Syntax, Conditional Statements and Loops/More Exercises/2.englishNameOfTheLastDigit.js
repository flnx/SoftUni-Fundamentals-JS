function solve(num) {
  const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

  let lastDigit = String(num).split('').pop();
  lastDigit = Number(lastDigit);
  console.log(nums[lastDigit]);
}

solve(511255);

// five
