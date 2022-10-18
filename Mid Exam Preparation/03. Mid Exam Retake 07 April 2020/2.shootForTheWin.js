function shootForTheWin(params) {
  let targets = params.shift().split(' ').map(Number);
  let shotTargets = 0;

  for (let index of params) {
    if (index == 'End') {
      break;
    }
    index = Number(index);

    if (index < 0 || index > targets.length - 1 || targets[index] == -1) {
      continue;
    }

    const currentTarget = targets[index];
    targets[index] = -1;
    shotTargets++;

    for (let i = 0; i < targets.length; i++) {
      if (targets[i] == -1) {
        continue;
      }

      if (targets[i] > currentTarget) {
        targets[i] -= currentTarget;
      } else {
        targets[i] += currentTarget;
      }
    }
  }
  console.log(`Shot targets: ${shotTargets} -> ${targets.join(' ')}`);
}
shootForTheWin(['24 50 36 70', '0', '4', '3', '1', 'End']); // Shot targets: 3 -> -1 -1 130 -1
console.log(`------------------------------------`);
shootForTheWin(['30 30 12 60 54 66', '5', '2', '4', '0', 'End']); // Shot targets: 4 -> -1 120 -1 66 -1 -1
console.log(`------------------------------------`);
shootForTheWin(['24 50 36 70', '0', '4', '3', '1', 'End']);
