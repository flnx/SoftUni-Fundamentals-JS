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
  'Hawai::Cyprys-Greece',
  'Add Stop:7:Rome',
  'Remove Stop:11:16',
  'Switch:Hawai:Bulgaria',
  'Travel',
]);
