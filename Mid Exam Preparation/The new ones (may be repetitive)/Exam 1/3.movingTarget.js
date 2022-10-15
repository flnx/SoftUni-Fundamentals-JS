function movingTarget(arr) {
  let targets = arr.shift().split(' ').map(Number);

  const commands = { Shoot: shoot, Add: add, Strike: strike };

  for (let line of arr) {
    if (line == 'End') break;
    let [action, index, power] = line.split(' ');
    index = Number(index);
    power = Number(power);

    const fn = commands[action];
    fn(index, power);
  }

  console.log(targets.join('|'));

  function shoot(i, pw) {
    if (i < 0 || i > targets.length - 1) {
      return;
    }
    targets[i] -= pw;

    if (targets[i] <= 0) {
      targets.splice(i, 1);
    }
  }

  function add(i, pw) {
    if (i < 0 || i > targets.length - 1) {
      console.log('Invalid placement!');
      return;
    }
    targets.splice(i, 0, pw);
  }

  function strike(i, radius) {
    if (i - radius < 0 || i + radius > targets.length - 1) {
      console.log('Strike missed!');
      return;
    }
    targets.splice(i - radius, radius * 2 + 1);
  }
}

movingTarget([
  '52 74 23 44 96 110',
  'Shoot 5 10',
  'Shoot 1 80',
  'Strike 2 1',
  'Add 22 3',
  'End',
]);
// Invalid placement!
// 52|100

console.log(`----------------------`);

movingTarget(['1 2 3 4 5', 'Strike 0 1', 'End']);

// Strike missed!
// 1|2|3|4|5
