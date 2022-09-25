function solve(num) {
  let result;
  if (num % 10 === 0) {
    result = 'The number is divisible by 10';
  } else if (num % 7 === 0) {
    result = 'The number is divisible by 7';
  } else if (num % 6 === 0) {
    result = 'The number is divisible by 6';
  } else if (num % 3 === 0) {
    result = 'The number is divisible by 3';
  } else if (num % 2 === 0) {
    result = 'The number is divisible by 2';
  } else {
    result = 'Not divisible';
  }
  console.log(result);
}
solve(30);

// output: The number is divisible by 10
