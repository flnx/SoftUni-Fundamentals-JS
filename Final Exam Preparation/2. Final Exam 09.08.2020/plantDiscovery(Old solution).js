function plantDiscovery(input) {
  let plants = {};
  let plantsAmount = Number(input.shift());

  let actions = {
    Rate: ratePlant,
    Update: updatePlant,
    Reset: resetRating,
  };

  for (let i = 0; i < plantsAmount; i++) {
    let [plant, rarity] = input.shift().split('<->');
    rarity = Number(rarity);
    plants[plant] = { rarity, avgRating: [] };
  }

  while (input[0] !== 'Exhibition') {
    let pattern = /[:] | [-] /g;
    let [command, plant, rating] = input.shift().split(pattern);
    rating = Number(rating);
    let action = actions[command];
    if (!plants[plant]) {
      console.log('error');
      continue;
    }
    output = action(plant, rating);
  }

  console.log('Plants for the exhibition:');

  for (let [key, value] of Object.entries(plants)) {
    let avgSum = 0;

    if (value.avgRating.length > 0) {
      for (let rating of value.avgRating) {
        avgSum += rating;
      }
      avgSum = avgSum / value.avgRating.length;
    }
    plants[key].avgRating = avgSum;
    console.log(
      `- ${key}; Rarity: ${value.rarity}; Rating: ${value.avgRating.toFixed(2)}`
    );
  }

  function resetRating(plant) {
    let myPlant = plants[plant];
    return (myPlant.avgRating = []);
  }

  function updatePlant(plant, rate) {
    let myPlant = plants[plant];
    return (myPlant.rarity = rate);
  }

  function ratePlant(plant, rating) {
    let myPlant = plants[plant];
    return myPlant.avgRating.push(rating);
  }
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

console.log(`----------------------`);

plantDiscovery([
  '2',
  'Candelabra<->10',
  'Oahu<->10',
  'Rate: Oahu - 7',
  'Rate: Candelabra - 6',
  'Exhibition',
]);
