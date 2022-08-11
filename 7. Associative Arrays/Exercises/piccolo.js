function piccolo(arr) {
  let cars = new Set();

  for (let number of arr) {
    let [action, carInfo] = number.split(', ');
    switch (action) {
      case 'IN':
        cars.add(carInfo);
        break;
      case 'OUT':
        cars.delete(carInfo);
        break;
    }
  }

  let sorted = Array.from(cars).sort();

  if (sorted.length === 0) {
    console.log('Parking Lot is Empty');
  } else {
    sorted.forEach((a) => console.log(a));
  }
}

piccolo([
  'IN, CA2844AA',
  'IN, CA1234TA',
  'OUT, CA2844AA',
  'IN, CA9999TT',
  'IN, CA2866HI',
  'OUT, CA1234TA',
  'IN, CA2844AA',
  'OUT, CA2866HI',
  'IN, CA9876HH',
  'IN, CA2822UU',
]);
