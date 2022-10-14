function employees(arr) {
  let employees = {};

  for (let person of arr) {
    employees.name = person;
    employees.number = person.length;

    console.log(`Name: ${employees.name} -- Personal Number: ${employees.number}`);
  }
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);

// Name: Silas Butler -- Personal Number: 12
// Name: Adnaan Buckley -- Personal Number: 14
// Name: Juan Peterson -- Personal Number: 13
// Name: Brendan Villarreal -- Personal Number: 18