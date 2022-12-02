function destinationMapper(str) {
  const regex = /([=/])([A-Z][a-zA-Z]{2,})(\1)/g;

  let destinations = [];
  let match;

  while ((match = regex.exec(str)) !== null) {
    destinations.push(match[2]);
  }

  console.log(`Destinations: ${destinations.join(', ')} \nTravel Points: ${destinations.join('').length}`);
}

destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
// Destinations: Hawai, Cyprus
// Travel Points: 11

destinationMapper("ThisIs some InvalidInput");
// Destinations:
// Travel Points: 0
