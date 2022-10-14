function race(input) {
  let namesPattern = /[A-Za-z]/g;
  let digitsPattern = /\d/g;
  let participants = input.shift().split(', ');
  let racers = {};

  while (input[0] !== 'end of race') {
    let line = input.shift();
    let name = line.match(namesPattern).join('');
    let distance = line.match(digitsPattern);
    let racerCurrentDistance = 0;

    if (!participants.includes(name)) {
      continue;
    }

    for (let km of distance) {
      racerCurrentDistance += Number(km);
    }

    if (racers[name] !== undefined) {
      let oldDistance = racers[name];
      racerCurrentDistance += oldDistance;
    }

    racers[name] = racerCurrentDistance;
  }

  let topRacers = Object.entries(racers)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  console.log(`1st place: ${topRacers[0][0]}`);
  console.log(`2nd place: ${topRacers[1][0]}`);
  console.log(`3rd place: ${topRacers[2][0]}`);
}

race([
  'George, Peter, Bill, Tom',
  'G4e@55or%6g6!68e!!@ ',
  'R1@!3a$y4456@',
  'B5@i@#123ll',
  'G@e54o$r6ge#',
  '7P%et^#e5346r',
  'T$o553m&6',
  'end of race',
]);

// 1st place: George
// 2nd place: Peter
// 3rd place: Tom
