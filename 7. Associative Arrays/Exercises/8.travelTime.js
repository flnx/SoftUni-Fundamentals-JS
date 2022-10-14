function travelTime(arr) {
  let placesToVisit = {};

  for (let place of arr) {
    let [country, town, cost] = place.split(' > ');
    cost = Number(cost);

    if (!placesToVisit.hasOwnProperty(country)) {
      placesToVisit[country] = {};
    }
    let getOldPrice = Number(placesToVisit[country][town]);

    if (getOldPrice < cost) {
      cost = getOldPrice;
    }

    placesToVisit[country][town] = cost;
  }

  let sortedByCountry = Object.entries(placesToVisit).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let [key, value] of sortedByCountry) {
    let sortedByTown = Object.entries(value)
      .sort((a, b) => a[1] - b[1])
      .map((town) => town.join(' -> '));

    console.log(`${key} -> ${sortedByTown.join(' ')}`);
  }
}

travelTime([
  'Bulgaria > Sofia > 500',
  'Bulgaria > Sopot > 800',
  'France > Paris > 2000',
  'Albania > Tirana > 1000',
  'Bulgaria > Sofia > 200',
]);

console.log(`--------------`);
travelTime([
  'Bulgaria > Sofia > 25000',
  'Bulgaria > Sofia > 25000',
  'Kalimdor > Orgrimar > 25000',
  'Albania > Tirana > 25000',
  'Bulgaria > Varna > 25010',
  'Bulgaria > Lukovit > 10',
]);

// Albania -> Tirana -> 1000
// Bulgaria -> Sofia -> 200 Sopot -> 800
// France -> Paris -> 2000
// --------------
// Albania -> Tirana -> 25000
// Bulgaria -> Lukovit -> 10 Sofia -> 25000 Varna -> 25010
// Kalimdor -> Orgrimar -> 25000