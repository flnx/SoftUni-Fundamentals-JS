function solve(firstNum, secondNum) {
  function factorial(num) {
    let factorial = 1;

    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }

    return factorial;
  }

  return (factorial(firstNum) / factorial(secondNum)).toFixed(2);
}

console.log(solve(5, 2));
