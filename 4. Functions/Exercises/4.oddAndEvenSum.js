function solve(input) {
  let odds = 0;
  let evens = 0;

  let toString = input.toString();

  for (let i = 0; i < toString.length; i++) {
    let currentNum = Number(toString[i]);

    if (currentNum % 2 === 0) {
      evens += currentNum;
    } else {
      odds += currentNum;
    }
  }
  console.log(`Odd sum = ${odds}, Even sum = ${evens}`);
}

solve(1000435);
