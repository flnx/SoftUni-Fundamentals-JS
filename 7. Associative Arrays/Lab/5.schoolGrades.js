function schoolGrades(arr) {
  let schoolBook = new Map();

  for (let el of arr) {
    let studentGrades = el.split(' ');
    let studentName = studentGrades.shift();

    if (!schoolBook.has(studentName)) {
      schoolBook.set(studentName, studentGrades);
    } else {
      let updateGrade = schoolBook.get(studentName); // object
      for (let grade of studentGrades) {
        updateGrade.push(grade);
      }
      schoolBook.set(studentName, updateGrade);
    }
  }
  let sortedAlphabetically = Array.from(schoolBook).sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });

  for (let [name, grade] of sortedAlphabetically) {
    let sumGrade = 0;
    for (currentGrade of grade) {
      sumGrade += Number(currentGrade);
    }
    let avg = sumGrade / grade.length;
    console.log(`${name}: ${avg.toFixed(2)}`);
  }
}

schoolGrades(['Steven 3 5 6 4', 'George 4 6', 'Tammy 2 5 3', 'Steven 6 3']);

// George: 5.00
// Steven: 4.50
// Tammy: 3.33