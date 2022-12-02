function plantDiscovery(arr) {
  let n = Number(arr[0]) + 1;

  const plants = {};

  arr.slice(1, n).forEach((line) => {
    let [name, rarity] = line.split('<->');
    rarity = Number(rarity);
    plants[name] = { rarity, rating: [] };
  });

  const rate = (plant, rate) => plants[plant].rating.push(Number(rate));
  const update = (plant, newRarity) => (plants[plant].rarity = Number(newRarity));
  const reset = (plant) => (plants[plant].rating = []);

  const commands = {
    Rate: rate,
    Update: update,
    Reset: reset
  };

  while (arr[n] !== 'Exhibition') {
    const [action, plant, num] = arr[n].split(/[: -]/).filter((x) => x != '');

    if (!plants[plant]) {
      console.log('error');
      n++;
      continue;
    }

    const fn = commands[action];
    fn(plant, num);

    n++;
  }

  console.log('Plants for the exhibition:');

  Object.entries(plants).forEach(([plant, obj]) => {
    const sumRating = obj.rating.reduce((acc, r) => acc + r, 0);
    const totalRating = sumRating / obj.rating.length || 0;

    console.log(`- ${plant}; Rarity: ${obj.rarity}; Rating: ${totalRating.toFixed(2)}`);
  });
}

plantDiscovery([
  '3',
  'Arnoldii<->4',
  'Woodii<->7',
  'Welwitschia<->2',
  'Rate: Woodii - 10',
  'Rate: Welwitschia - 7',
  'Rate: Arnoldii - 3',
  'Rate: Woodii - 5',
  'Update: Woodii - 5',
  'Reset: Arnoldii',
  'Exhibition',
]);

// Plants for the exhibition:
// - Arnoldii; Rarity: 4; Rating: 0.00
// - Woodii; Rarity: 5; Rating: 7.50
// - Welwitschia; Rarity: 2; Rating: 7.00

console.log();

plantDiscovery([
  '2',
  'Candelabra<->10',
  'Oahu<->10',
  'Rate: Oahu - 7',
  'Rate: Candelabra - 6',
  'Exhibition',
]);

// Plants for the exhibition:
// - Candelabra; Rarity: 10; Rating: 6.00
// - Oahu; Rarity: 10; Rating: 7.00

console.log();

plantDiscovery([
  '2',
  'Candelabra<->10',
  'Oahu<->10',
  'Rate: Oahu - 7',
  'Rate: Candelabra - 6',
  'Exhibition',
]);

// Plants for the exhibition:
// - Candelabra; Rarity: 10; Rating: 6.00
// - Oahu; Rarity: 10; Rating: 7.00
