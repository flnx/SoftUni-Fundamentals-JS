function travelTime(arr) {
  let placesToVisit = new Map();

  for (let place of arr) {
    let [country, town, cost] = place.split(' > ');
    cost = Number(cost);
    if (!placesToVisit.has(country)) {
      placesToVisit.set(country, new Map());
    }

    let getOldPrice = Number(placesToVisit.get(country).get(town));
    if (getOldPrice < cost) {
      cost = getOldPrice;
    }
    placesToVisit.get(country).set(town, cost);
  }

  let sortedByCountry = Array.from(placesToVisit).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let [key, value] of sortedByCountry) {
    let sortedByTown = Array.from(value)
      .sort((a, b) => a[1] - b[1])
      .map((town) => town.join(' -> '));

    console.log(`${key} -> ${sortedByTown.join(' ')}`);
  }
}

travelTime([
  'Bulgaria > Sofia > 25000',
  'Bulgaria > Sofia > 25000',
  'Kalimdor > Orgrimar > 25000',
  'Albania > Tirana > 25000',
  'Bulgaria > Varna > 25010',
  'Bulgaria > Lukovit > 10',
]);
