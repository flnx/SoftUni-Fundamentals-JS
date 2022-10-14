function flightSchedule(data) {
  class Flight {
    constructor(flyNumber, destination) {
      this.flyNumber = flyNumber;
      this.destination = destination;
      this.status = 'Ready to fly';
    }
  }

  let result = [];
  // all flights
  for (let flightInfo of data[0]) {
    let token = flightInfo.split(' ');
    let flightNumber = token.shift();
    let destination = token.join(' ');

    let myFlight = new Flight(flightNumber, destination);
    result.push(myFlight);
  }

  // action needed on these flights
  for (let token of data[1]) {
    let flightNumber = token.split(' ');
    let findFlight = result.filter((obj) => obj.flyNumber === flightNumber[0])[0];

    if (findFlight) {
      findFlight.status = 'Cancelled';
    }
  }

  let action = data[2][0];
  let flights = result.filter((obj) => obj.status === action);

  switch (action) {
    case 'Cancelled':
      flights.forEach((x) =>
        console.log(`{ Destination: '${x.destination}', Status: '${x.status}' }`)
      );
      break;
    case 'Ready to fly':
      flights.forEach((x) =>
        console.log(`{ Destination: '${x.destination}', Status: '${x.status}' }`)
      );
      break;
  }
}
flightSchedule([
  [
    'WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania',
  ],
  ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled'],
  ['Cancelled'],
]);
// console.log(`------------------------------------`);
flightSchedule([
    ['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'
    ],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK330 Cancelled'
    ],
    ['Ready to fly']
])


// { Destination: 'Alabama', Status: 'Cancelled' }
// { Destination: 'California', Status: 'Cancelled' }
// { Destination: 'Texas', Status: 'Cancelled' }
// { Destination: 'Delaware', Status: 'Ready to fly' }
// { Destination: 'Oregon', Status: 'Ready to fly' }
// { Destination: 'Las Vegas', Status: 'Ready to fly' }
// { Destination: 'Ohio', Status: 'Ready to fly' }
// { Destination: 'New York', Status: 'Ready to fly' }
// { Destination: 'Illinois', Status: 'Ready to fly' }
// { Destination: 'Pennsylvania', Status: 'Ready to fly' }