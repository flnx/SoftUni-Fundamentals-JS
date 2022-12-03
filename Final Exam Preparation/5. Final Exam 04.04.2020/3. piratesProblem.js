function piratesProblem(arr) {
  const cities = {};

  while (arr[0] != 'Sail') {
    let [city, population, gold] = arr.shift().split('||');

    population = Number(population);
    gold = Number(gold);

    if (!cities.hasOwnProperty(city)) {
      cities[city] = { population, gold };
    } else {
      cities[city].population += population;
      cities[city].gold += gold;
    }
  }

  arr.shift();

  const commands = {
    Plunder: plunder,
    Prosper: prosper,
  };

  while (arr[0] != 'End') {
    let [action, city, t1, t2] = arr.shift().split('=>');
    t1 = Number(t1);

    let ahoy = commands[action];
    ahoy(city, t1, t2);
  }

  const citiesToGo = Object.keys(cities);

  if (citiesToGo.length == 0) {
    console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
  } else {
    console.log(
      `Ahoy, Captain! There are ${citiesToGo.length} wealthy settlements to go to:`
    );

    citiesToGo.forEach((city) => {
      const population = cities[city].population;
      const gold = cities[city].gold;

      console.log(`${city} -> Population: ${population} citizens, Gold: ${gold} kg`);
    });
  }

  function plunder(city, people, gold) {
    gold = Number(gold);

    cities[city].population -= people;
    cities[city].gold -= gold;

    console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);

    if (cities[city].population <= 0 || cities[city].gold <= 0) {
      delete cities[city];
      return console.log(`${city} has been wiped off the map!`);
    }
  }

  function prosper(city, gold) {
    if (gold < 0) {
      return console.log('Gold added cannot be a negative number!');
    }

    cities[city].gold += gold;
    console.log(
      `${gold} gold added to the city treasury. ${city} now has ${cities[city].gold} gold.`
    );
  }
}

piratesProblem([
  'Tortuga||345000||1250',
  'Santo Domingo||240000||630',
  'Havana||410000||1100',
  'Sail',
  'Plunder=>Tortuga=>75000=>380',
  'Prosper=>Santo Domingo=>180',
  'End',
]);

// Tortuga plundered! 380 gold stolen, 75000 citizens killed.
// 180 gold added to the city treasury. Santo Domingo now has 810 gold.
// Ahoy, Captain! There are 3 wealthy settlements to go to:
// Tortuga -> Population: 270000 citizens, Gold: 870 kg
// Santo Domingo -> Population: 240000 citizens, Gold: 810 kg
// Havana -> Population: 410000 citizens, Gold: 1100 kg

console.log();

piratesProblem([
  'Nassau||95000||1000',
  'San Juan||930000||1250',
  'Campeche||270000||690',
  'Port Royal||320000||1000',
  'Port Royal||100000||2000',
  'Sail',
  'Prosper=>Port Royal=>-200',
  'Plunder=>Nassau=>94000=>750',
  'Plunder=>Nassau=>1000=>150',
  'Plunder=>Campeche=>150000=>690',
  'End',
]);

// Gold added cannot be a negative number!
// Nassau plundered! 750 gold stolen, 94000 citizens killed.
// Nassau plundered! 150 gold stolen, 1000 citizens killed.
// Nassau has been wiped off the map!
// Campeche plundered! 690 gold stolen, 150000 citizens killed.
// Campeche has been wiped off the map!
// Ahoy, Captain! There are 2 wealthy settlements to go to:
// San Juan -> Population: 930000 citizens, Gold: 1250 kg
// Port Royal -> Population: 420000 citizens, Gold: 3000 kg