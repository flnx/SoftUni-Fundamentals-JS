function solve(grade) {
  let res = grade.toFixed(2);
  let popUp = '';

  if (grade < 3) {
    res = 2;
    popUp = 'Fail';
  } else if (grade < 3.5) {
    popUp = 'Poor';
  } else if (grade < 4.5) {
    popUp = 'Good';
  } else if (grade < 5.5) {
    popUp = 'Very good';
  } else {
    popUp = 'Excellent';
  }

  console.log(`${popUp} (${res})`);
}

solve(3.33);
