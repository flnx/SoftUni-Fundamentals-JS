function solve(day) {
  let days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  if (days[day - 1]) {
    return days[day - 1];
  }
  return 'Invalid day!';
}

console.log(solve(5)); // Friday
