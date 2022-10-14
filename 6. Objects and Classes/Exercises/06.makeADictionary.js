function makeAdictionary(arr) {
  let newArray = [];
  let obj = {};

  for (let el of arr) {
    let parsed = JSON.parse(el);

    for (let key in parsed) {
      obj[key] = parsed[key];
    }
  }

  for (let key in obj) {
    let currentObject = {
      term: key,
      definition: obj[key],
    };
    newArray.push(currentObject);
  }

  let sortedAlphabetically = newArray.sort((a, b) => a.term.localeCompare(b.term));
  for (const el of sortedAlphabetically) {
    console.log(`Term: ${el.term} => Definition: ${el.definition}`);
  }
}

makeAdictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);

// Term: Boiler => Definition: A fuel-burning apparatus or container for heating water.
// Term: Bus => Definition: A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare.
// Term: Coffee => Definition: A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub.
// Term: Microphone => Definition: An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded.
// Term: Tape => Definition: A narrow strip of material, typically used to hold or fasten something.
