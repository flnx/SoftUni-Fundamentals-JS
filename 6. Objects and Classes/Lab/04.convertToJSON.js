function convertToJSON(name, lastName, hairColor) {
  let person = {
    name,
    lastName,
    hairColor,
  };

  let toStr = JSON.stringify(person);
  console.log(toStr);
}

convertToJSON('George', 'Jones', 'Brown'); // {"name":"George","lastName":"Jones","hairColor":"Brown"}
