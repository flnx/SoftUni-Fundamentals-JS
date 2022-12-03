function needForSpeed(input) {
  // object to store the functions
  const actions = {
    Drive: drive,
    Refuel: refuel,
    Revert: decreaseMileage,
  };

  // the obtained cars
  const numberOfCars = Number(input.shift());
  const cars = {};

  // put the cars into the object
  for (let i = 0; i < numberOfCars; i++) {
    let [car, mileage, fuel] = input.shift().split('|');
    mileage = Number(mileage);
    fuel = Number(fuel);
    cars[car] = { mileage, fuel };
  }

  // loop through the input and determine the action
  while (input[0] !== 'Stop') {
    let [command, car, distanceOrFuel, fuel] = input.shift().split(' : ');
    distanceOrFuel = Number(distanceOrFuel);
    fuel = Number(fuel);
    let action = actions[command];
    action(car, distanceOrFuel, fuel);
  }

  // print result
  for (let [car, values] of Object.entries(cars)) {
    console.log(
      `${car} -> Mileage: ${values.mileage} kms, Fuel in the tank: ${values.fuel} lt.`
    );
  }

  // revert function
  function decreaseMileage(car, kilometers) {
    cars[car].mileage -= kilometers;
    const carDistance = cars[car].mileage;
    if (carDistance < 10000) {
      cars[car].mileage = 10000;
      return;
    }
    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
    return cars;
  }

  // refuel function
  function refuel(car, addFuel) {
    const currentFuel = cars[car].fuel;
    if (addFuel + currentFuel > 75) {
      addFuel = 75 - currentFuel;
    }
    cars[car].fuel += addFuel;
    console.log(`${car} refueled with ${addFuel} liters`);
    return cars;
  }

  // drive function
  function drive(car, distance, addFuel) {
    const currentCar = cars[car];
    if (currentCar.fuel < addFuel) {
      console.log('Not enough fuel to make that ride');
      return cars;
    }
    currentCar.fuel -= addFuel;
    currentCar.mileage += distance;
    console.log(
      `${car} driven for ${distance} kilometers. ${addFuel} liters of fuel consumed.`
    );

    if (currentCar.mileage >= 100000) {
      console.log(`Time to sell the ${car}!`);
      delete cars[car];
    }
  }
}
needForSpeed([
  '4',

  'Lamborghini Veneno|11111|74',

  'Bugatti Veyron|12345|67',

  'Koenigsegg CCXR|67890|12',

  'Aston Martin Valkryie|99900|50',

  'Drive : Koenigsegg CCXR : 382 : 82',

  'Drive : Aston Martin Valkryie : 99 : 23',

  'Drive : Aston Martin Valkryie : 2 : 1',

  'Refuel : Lamborghini Veneno : 40',

  'Revert : Bugatti Veyron : 2000',

  'Stop',
]);
