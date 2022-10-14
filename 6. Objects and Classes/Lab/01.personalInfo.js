function personalInfo(firstName, lastName, age) {
  let person = {
    firstName,
    lastName,
    age,
  };
  return person;
}

let myObj = personalInfo('Peter', 'Pan', '20');

console.log(myObj);
// {firstName: 'Peter', lastName: 'Pan', age: '20'}