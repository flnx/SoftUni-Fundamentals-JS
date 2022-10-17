function bonusScoringSystem(arr) {
  const copyArr = arr.map(Number);

  const students = copyArr.shift(); 
  const lectures = copyArr.shift();
  const bonus = copyArr.shift();

  let maxBonus = 0;
  let totalLectures = 0;

  for (let i = 0; i < students; i++) {
    const attendance = copyArr[i];
    const totalBonus = (attendance / lectures) * (5 + bonus);
    
    if (totalBonus >= maxBonus) {
      maxBonus = totalBonus;
      totalLectures = attendance;
    }
  }
    
  console.log(`Max Bonus: ${Math.round(maxBonus)}.`);
  console.log(`The student has attended ${Math.round(totalLectures)} lectures.`);
}


bonusScoringSystem([
  '5',  '25', '30',
  '12', '19', '24',
  '16', '20'
])

// Max Bonus: 34.
// The student has attended 24 lectures.
console.log(`------------------`);

bonusScoringSystem([
  '10',
  '30',
  '14',
  '8',
  '23',
  '27',
  '28',
  '15',
  '17',
  '25',
  '26',
  '5',
  '18',
]);
// Max Bonus: 18.
// The student has attended 28 lectures.
