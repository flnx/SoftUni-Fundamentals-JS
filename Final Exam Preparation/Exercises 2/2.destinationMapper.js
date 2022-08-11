function destinationMapper(input) {
  let pattern = /([=/])([A-Z][a-zA-Z]{2,})(\1)/g;

  let output = pattern.exec(input);
  let result = [];

  while (output !== null) {
    result.push(output[2]);
    output = pattern.exec(input);
  }
  console.log(`Destinations: ${result.join(', ')}`);
  console.log(`Travel Points: ${result.join('').length}`);
}
destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
