function solve(input) {
  let firstEmployee = +input[0];
  let secondEmployee = +input[1];
  let thirdEmployee = +input[2];
  let studentsCount = +input[3];
  let studentsPerHour = firstEmployee + secondEmployee + thirdEmployee;

  let i = 0;
  let hourCounter = 0;
  let breaksCounter = 0;

  while (studentsCount > 0) {
    i++;
    if (i % 4 === 0) {
      breaksCounter++;
      continue;
    }
    hourCounter++;
    studentsCount -= studentsPerHour;
  }
  console.log(`Time needed: ${hourCounter + breaksCounter}h.`);
}
solve(['1', '2', '3', '45']);
