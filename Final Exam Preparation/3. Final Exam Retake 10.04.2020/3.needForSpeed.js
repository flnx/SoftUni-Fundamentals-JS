function needForSpeed(arr) {
  let n = +arr[0] + 1;

  const FUEL_CAPACITY = 75;
  const DEFAULT_MILEAGE = 10000;

  const commands = {
    Drive: drive,
    Refuel: refuel,
    Revert: revert,
  };

  let cars = {};

  arr.slice(1, n).forEach((line) => {
    let [car, mileage, fuel] = line.split('|');
    mileage = Number(mileage);
    fuel = Number(fuel);

    cars[car] = { mileage, fuel };
  });

  while (arr[n] != 'Stop') {
    let [action, car, t1, t2] = arr[n].split(' : ');
    t1 = Number(t1);

    const fn = commands[action];
    fn(car, t1, t2);
    n++;
  }

  Object.entries(cars).forEach(([car, carInfo]) => {
    console.log(
      `${car} -> Mileage: ${carInfo.mileage} kms, Fuel in the tank: ${carInfo.fuel} lt.`
    );
  });

  function drive(car, distance, fuel) {
    fuel = Number(fuel);

    if (cars[car].fuel >= fuel) {
      cars[car].fuel -= fuel;
      cars[car].mileage += distance;
      console.log(
        `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
      );

      if (cars[car].mileage >= 100000) {
        delete cars[car];
        console.log(`Time to sell the ${car}!`);
      }
    } else {
      console.log('Not enough fuel to make that ride');
    }
  }

  function refuel(car, fuel) {
    const currentFuel = cars[car].fuel;
    const refill = Math.min(FUEL_CAPACITY - currentFuel, fuel);
    cars[car].fuel += refill;

    console.log(`${car} refueled with ${refill} liters`);
  }

  function revert(car, kms) {
    const revert = Math.max(DEFAULT_MILEAGE, cars[car].mileage - kms);

    if (cars[car].mileage - kms >= DEFAULT_MILEAGE) {
      console.log(`${car} mileage decreased by ${kms} kilometers`);
    }
    cars[car].mileage = revert;
  }
}

needForSpeed([
  '3',
  'Audi A6|38000|62',
  'Mercedes CLS|11000|35',
  'Volkswagen Passat CC|45678|5',
  'Drive : Audi A6 : 543 : 47',
  'Drive : Mercedes CLS : 94 : 11',
  'Drive : Volkswagen Passat CC : 69 : 8',
  'Refuel : Audi A6 : 50',
  'Revert : Mercedes CLS : 500',
  'Revert : Audi A6 : 30000',
  'Stop',
]);

// Audi A6 driven for 543 kilometers. 47 liters of fuel consumed.
// Mercedes CLS driven for 94 kilometers. 11 liters of fuel consumed.
// Not enough fuel to make that ride
// Audi A6 refueled with 50 liters
// Mercedes CLS mileage decreased by 500 kilometers
// Audi A6 -> Mileage: 10000 kms, Fuel in the tank: 65 lt.
// Mercedes CLS -> Mileage: 10594 kms, Fuel in the tank: 24 lt.
// Volkswagen Passat CC -> Mileage: 45678 kms, Fuel in the tank: 5 lt.

console.log();

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

// Not enough fuel to make that ride
// Aston Martin Valkryie driven for 99 kilometers. 23 liters of fuel consumed.
// Aston Martin Valkryie driven for 2 kilometers. 1 liters of fuel consumed.
// Time to sell the Aston Martin Valkryie!
// Lamborghini Veneno refueled with 1 liters
// Bugatti Veyron mileage decreased by 10345 kilometers
// Lamborghini Veneno -> Mileage: 11111 kms, Fuel in the tank: 75 lt.
// Bugatti Veyron -> Mileage: 10345 kms, Fuel in the tank: 67 lt.
// Koenigsegg CCXR -> Mileage: 67890 kms, Fuel in the tank: 12 lt.
