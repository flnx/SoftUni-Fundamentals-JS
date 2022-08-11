function employees(arr) {
  let employees = {};

  for (let person of arr) {
    employees.name = person;
    employees.number = person.length;

    console.log(`Name: ${employees.name} -- Personal Number: ${employees.number}`);
  }
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
